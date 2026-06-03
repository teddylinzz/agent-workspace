from typing import Dict, List, Any
from trainer.tools.base import BaseTool
from trainer.tools.read_code import ReadCodeTool
from trainer.tools.run_tests import RunTestsTool
from trainer.tools.search_docs import SearchDocsTool
from trainer.tools.fetch_web import FetchWebTool

def get_tool_registry(client, rag) -> Dict[str, BaseTool]:
    """
    Constructs and returns the active tool catalog.
    
    client: google.genai.Client instance
    rag: BareMetalRAG instance
    """
    tools = [
        ReadCodeTool(),
        RunTestsTool(),
        SearchDocsTool(rag),
        FetchWebTool(client)
    ]
    return {tool.name: tool for tool in tools}

def get_gemini_tool_declarations(client, rag) -> List[Dict[str, Any]]:
    """Returns a list of tools formatted as Gemini-compatible FunctionDeclarations."""
    registry = get_tool_registry(client, rag)
    
    # Format according to the Gemini API expectations for tools
    declarations = []
    for tool in registry.values():
        declarations.append({
            "function_declarations": [
                {
                    "name": tool.name,
                    "description": tool.description,
                    "parameters": tool.parameters
                }
            ]
        })
    return declarations
