from google.genai import types
from typing import Dict, Any
from trainer.tools.base import BaseTool

class FetchWebTool(BaseTool):
    def __init__(self, client):
        """
        client: An instance of google.genai.Client
        """
        self.client = client

    @property
    def name(self) -> str:
        return "fetch_web_docs"

    @property
    def description(self) -> str:
        return "Performs a web search to fetch the latest technical docs or API references. Restricted to programming and library documentation queries."

    @property
    def parameters(self) -> Dict[str, Any]:
        return {
            "type": "OBJECT",
            "properties": {
                "query": {
                    "type": "STRING",
                    "description": "Technical search query (e.g. 'pydantic v2 migration guide' or 'huggingface model list')."
                }
            },
            "required": ["query"]
        }

    def execute(self, query: str) -> str:
        # Enforce technical boundaries on the query
        restricted_query = f"site:github.com OR site:huggingface.co OR site:python.org OR site:docs.python.org OR site:pypi.org {query}"
        
        try:
            # We use Gemini 2.5 Flash to perform the grounding query
            response = self.client.models.generate_content(
                model="gemini-2.5-flash",
                contents=restricted_query,
                config=types.GenerateContentConfig(
                    # Google Search grounding tool enables real-time search
                    tools=[{"google_search": {}}],
                    temperature=0.0
                )
            )
            
            # Extract ground response text and citations if available
            output = f"Web Grounding Response:\n{response.text}\n"
            
            # Check for grounding metadata
            if response.candidates and response.candidates[0].grounding_metadata:
                metadata = response.candidates[0].grounding_metadata
                if metadata.grounding_chunks:
                    output += "\nSources referenced:\n"
                    for chunk in metadata.grounding_chunks:
                        if chunk.web:
                            output += f"- {chunk.web.title}: {chunk.web.uri}\n"
                            
            return output
        except Exception as e:
            return f"[ERROR] Web search grounding failed: {e}"
