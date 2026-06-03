from typing import Dict, Any
from trainer.tools.base import BaseTool

class SearchDocsTool(BaseTool):
    def __init__(self, rag):
        """
        rag: An instance of BareMetalRAG
        """
        self.rag = rag

    @property
    def name(self) -> str:
        return "search_local_docs"

    @property
    def description(self) -> str:
        return "Searches local indexed documentation and API cheat sheets (e.g. Gemini SDK syntax, function calling references) for answers to programming queries."

    @property
    def parameters(self) -> Dict[str, Any]:
        return {
            "type": "OBJECT",
            "properties": {
                "query": {
                    "type": "STRING",
                    "description": "The search terms or question regarding API usage (e.g. 'how to generate embeddings')."
                }
            },
            "required": ["query"]
        }

    def execute(self, query: str) -> str:
        if not self.rag:
            return "[ERROR] RAG system is not initialized."
            
        results = self.rag.query(query, top_k=3)
        if not results:
            return "No matching documentation found."
            
        output = "--- RELEVANT LOCAL DOCUMENTATION FINDINGS ---\n\n"
        for i, res in enumerate(results, 1):
            output += f"[{i}] Source: {res['source']} (Similarity Score: {res['score']:.4f})\n"
            output += f"{res['text']}\n"
            output += "-" * 50 + "\n"
        return output
