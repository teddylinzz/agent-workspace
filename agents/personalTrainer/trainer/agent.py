import os
import re
from typing import Dict, List, Any, Tuple, Optional
from google import genai
from google.genai import types

from trainer.constitution import CONSTITUTION_PROMPT
from trainer.memory import DatabaseMemory
from trainer.rag import BareMetalRAG
from trainer.tools import get_tool_registry, get_gemini_tool_declarations

# Setup safe LangSmith tracing wrapper
try:
    from langsmith import traceable
except ImportError:
    def traceable(*args, **kwargs):
        def decorator(func):
            return func
        if len(args) == 1 and callable(args[0]):
            return args[0]
        return decorator

class SocraticTrainerAgent:
    def __init__(
        self,
        session_id: str,
        memory: DatabaseMemory,
        rag: BareMetalRAG,
        model_name: str = "gemini-2.5-flash",
        api_key: Optional[str] = None
    ):
        self.session_id = session_id
        self.memory = memory
        self.rag = rag
        self.model_name = model_name
        
        # Initialize Gemini Client
        gemini_key = api_key or os.getenv("GEMINI_API_KEY")
        if not gemini_key:
            raise ValueError(
                "Gemini API Key not found. Please set GEMINI_API_KEY in your environment or .env file."
            )
        self.client = genai.Client(api_key=gemini_key)
        
        # Wrap client for LangSmith tracing if enabled
        tracing_enabled = (
            os.getenv("LANGCHAIN_TRACING_V2", "false").lower() == "true" or
            os.getenv("LANGSMITH_TRACING", "false").lower() == "true"
        )
        if tracing_enabled:
            try:
                from langsmith import wrappers
                self.client = wrappers.wrap_gemini(
                    self.client,
                    tracing_extra={
                        "metadata": {
                            "session_id": session_id,
                            "integration": "google-genai",
                        }
                    }
                )
            except ImportError:
                pass
        
        # Build tool registry
        self.tools = get_tool_registry(self.client, self.rag)

    @traceable(name="socratic_agent_response")
    def generate_response(self, user_input: str) -> Dict[str, str]:
        """
        Sends user input to the Socratic agent, manages tool calls in a loop,
        persists history to SQLite, and returns structured thinking and Socratic response.
        """
        # 1. Log the incoming user message to SQLite memory
        self.memory.add_message(self.session_id, role="user", content=user_input)
        
        # 2. Fetch entire conversation history from SQLite
        # History is returned as a list of dicts: [{'role': '...', 'parts': [{'text': '...'}]}]
        history = self.memory.get_session_history(self.session_id)
        
        # Convert raw history dicts to google-genai types.Content objects
        contents = []
        for turn in history:
            parts = [types.Part.from_text(text=p["text"]) for p in turn["parts"]]
            contents.append(types.Content(role=turn["role"], parts=parts))

        # Build tools list formatted for Gemini
        gemini_tools = [{"function_declarations": [
            types.FunctionDeclaration(
                name=t.name,
                description=t.description,
                parameters=types.Schema(**t.parameters)
            )
        ]} for t in self.tools.values()]

        # Generate config
        config = types.GenerateContentConfig(
            system_instruction=CONSTITUTION_PROMPT,
            tools=gemini_tools,
            temperature=0.3,
        )

        # 3. Enter LLM generation loop (handles multiple tool calls before a text output)
        final_text = ""
        while True:
            response = self._call_gemini(contents, config)
            
            # If the model wants to call functions, resolve them
            if response.function_calls:
                # Store the model's intermediate turn containing the function call
                contents.append(response.candidates[0].content)
                
                # Execute each tool request
                tool_response_parts = []
                for call in response.function_calls:
                    tool_result = self._execute_tool(call.name, call.args)
                    
                    # Package response
                    part = types.Part.from_function_response(
                        name=call.name,
                        response={"result": tool_result}
                    )
                    tool_response_parts.append(part)
                
                # Append tool results as the next turn in the generation context
                contents.append(types.Content(role="tool", parts=tool_response_parts))
                continue
                
            if response.text:
                final_text = response.text
                break
            else:
                final_text = "[No text response returned by model.]"
                break

        # 4. Parse response into Socratic content and thinking step
        thinking, socratic_response = self._parse_thinking_tag(final_text)

        # 5. Persist the model's final response to SQLite memory
        self.memory.add_message(
            self.session_id, 
            role="model", 
            content=socratic_response, 
            thinking_step=thinking
        )

        return {
            "thinking": thinking,
            "response": socratic_response
        }

    @traceable(name="gemini_api_call", run_type="llm")
    def _call_gemini(self, contents: List[types.Content], config: types.GenerateContentConfig):
        """Wrapper for GenAI SDK model call to allow fine-grained tracing."""
        return self.client.models.generate_content(
            model=self.model_name,
            contents=contents,
            config=config
        )

    @traceable(name="agent_tool_execution", run_type="tool")
    def _execute_tool(self, name: str, args: dict) -> str:
        """Executes a tool by name, logs details in SQLite, and returns result."""
        tool = self.tools.get(name)
        if not tool:
            return f"[ERROR] Tool '{name}' is not registered."
            
        try:
            # Execute tool logic
            # Gemini args are passed as a dictionary
            # Note: handle standard map-like unpacked arguments
            unpacked_args = {k: v for k, v in args.items()}
            result = str(tool.execute(**unpacked_args))
        except Exception as e:
            result = f"[ERROR] Failed executing tool '{name}': {e}"
            
        # Log to local history for auditing
        self.memory.log_tool_call(self.session_id, name, args, result)
        return result

    @staticmethod
    def _parse_thinking_tag(text: str) -> Tuple[str, str]:
        """Extracts text inside <thinking>...</thinking> and returns (thinking, rest)."""
        pattern = re.compile(r'<thinking>(.*?)</thinking>', re.DOTALL)
        match = pattern.search(text)
        
        if match:
            thinking = match.group(1).strip()
            # Remove the thinking tag and surrounding spacing from the final response
            response = pattern.sub('', text).strip()
            return thinking, response
        
        return "", text.strip()
