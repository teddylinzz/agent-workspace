import os
from typing import Dict, Any
from trainer.tools.base import BaseTool

class ReadCodeTool(BaseTool):
    @property
    def name(self) -> str:
        return "read_codebase_file"

    @property
    def description(self) -> str:
        return "Reads the contents of a specific code file in the local challenge workspace directory to inspect the user's solution."

    @property
    def parameters(self) -> Dict[str, Any]:
        return {
            "type": "OBJECT",
            "properties": {
                "path": {
                    "type": "STRING",
                    "description": "The relative path to the file inside the workspace directory (e.g. 'solution.py')."
                }
            },
            "required": ["path"]
        }

    def execute(self, path: str) -> str:
        # Secure the path inside the workspace directory
        workspace_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../workspace"))
        target_path = os.path.abspath(os.path.join(workspace_dir, path))
        
        # Security check: Ensure we don't break out of the workspace directory
        if not target_path.startswith(workspace_dir):
            return f"[ERROR] Access denied. Path '{path}' is outside the authorized workspace."
        
        if not os.path.exists(target_path):
            return f"[ERROR] File '{path}' does not exist in workspace."
        
        if os.path.isdir(target_path):
            return f"[ERROR] '{path}' is a directory, not a file."
            
        try:
            with open(target_path, "r", encoding="utf-8") as f:
                content = f.read()
            return content
        except Exception as e:
            return f"[ERROR] Failed to read file: {e}"
