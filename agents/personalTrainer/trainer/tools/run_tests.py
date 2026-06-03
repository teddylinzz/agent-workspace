import subprocess
import os
import sys
from typing import Dict, Any
from trainer.tools.base import BaseTool

class RunTestsTool(BaseTool):
    @property
    def name(self) -> str:
        return "run_test_harness"

    @property
    def description(self) -> str:
        return (
            "Executes the challenge test harness in the workspace to verify if the user's "
            "code passes the tests. Returns stdout and stderr outputs."
        )

    @property
    def parameters(self) -> Dict[str, Any]:
        return {
            "type": "OBJECT",
            "properties": {
                "command": {
                    "type": "STRING",
                    "description": "The command to run the tests, defaults to 'python test_harness.py'. Only python execution is permitted."
                }
            },
            "required": []
        }

    def execute(self, command: str = "python test_harness.py") -> str:
        workspace_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../workspace"))
        
        # Ensure we are running a python command safely in the workspace
        # Protect against injection by checking if it contains dangerous characters or runs unauthorized binaries
        parts = command.split()
        if not parts:
            return "[ERROR] Empty command."
            
        executable = parts[0]
        # Only allow python or pytest commands
        if executable not in ["python", "python3", "pytest"]:
            return "[ERROR] Only python or pytest commands are allowed for safety reasons."

        # Re-resolve python path if running inside a venv or virtual environment
        if executable in ["python", "python3"]:
            python_path = sys.executable
            # Swap python with sys.executable to ensure it runs in the same environment
            parts[0] = python_path
            
        try:
            result = subprocess.run(
                parts,
                cwd=workspace_dir,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
                timeout=30 # 30-second timeout safety limit
            )
            output = f"--- STDOUT ---\n{result.stdout}\n"
            if result.stderr:
                output += f"\n--- STDERR ---\n{result.stderr}\n"
            output += f"\nExit Code: {result.returncode}"
            return output
        except subprocess.TimeoutExpired:
            return "[ERROR] Test execution timed out after 30 seconds."
        except Exception as e:
            return f"[ERROR] Failed to run command: {e}"
