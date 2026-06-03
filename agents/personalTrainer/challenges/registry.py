import os
import shutil

# Directory references
CHALLENGES_DIR = os.path.dirname(os.path.abspath(__file__))
WORKSPACE_DIR = os.path.abspath(os.path.join(CHALLENGES_DIR, "../workspace"))

# Maps CLI menu options to challenge folder names
CHALLENGE_MAP = {
    "State Management in Agents": None,  # Can add templates later
    "Function Calling & Tool Routing": None,
    "RAG Optimization & Embeddings": "rag_optimization",
    "Memory Systems & Context Management": None
}

def deploy_challenge(concept_name: str) -> bool:
    """
    Deploys a challenge's instructions, solution templates, and test harnesses
    to the active workspace directory.
    """
    folder_name = CHALLENGE_MAP.get(concept_name)
    if not folder_name:
        # Fallback: create a generic README if no pre-built template exists yet
        setup_generic_workspace(concept_name)
        return True
        
    src_dir = os.path.join(CHALLENGES_DIR, folder_name)
    if not os.path.exists(src_dir):
        return False
        
    # Create workspace if it doesn't exist
    if not os.path.exists(WORKSPACE_DIR):
        os.makedirs(WORKSPACE_DIR)
        
    # Copy files
    # 1. instructions.md -> workspace/README.md
    instructions_src = os.path.join(src_dir, "instructions.md")
    if os.path.exists(instructions_src):
        shutil.copy(instructions_src, os.path.join(WORKSPACE_DIR, "README.md"))
        
    # 2. test_harness.py -> workspace/test_harness.py
    harness_src = os.path.join(src_dir, "test_harness.py")
    if os.path.exists(harness_src):
        shutil.copy(harness_src, os.path.join(WORKSPACE_DIR, "test_harness.py"))
        
    # 3. solution_template.py -> workspace/solution.py
    # ONLY copy if solution.py does NOT exist to preserve user code!
    solution_dest = os.path.join(WORKSPACE_DIR, "solution.py")
    solution_src = os.path.join(src_dir, "solution_template.py")
    if os.path.exists(solution_src) and not os.path.exists(solution_dest):
        shutil.copy(solution_src, solution_dest)
        
    return True

def setup_generic_workspace(concept_name: str):
    """Fallback generator to set up workspace when templates are not pre-defined."""
    if not os.path.exists(WORKSPACE_DIR):
        os.makedirs(WORKSPACE_DIR)
        
    readme_content = f"""# Challenge: {concept_name}

Welcome to the training grounds for **{concept_name}**.

Write your code solutions inside a `solution.py` file in this folder.
Discuss your architectural approach, ask questions, or run tests with your Socratic Mentor.

To start, describe your understanding of {concept_name} in the CLI.
"""
    with open(os.path.join(WORKSPACE_DIR, "README.md"), "w", encoding="utf-8") as f:
        f.write(readme_content)
        
    solution_dest = os.path.join(WORKSPACE_DIR, "solution.py")
    if not os.path.exists(solution_dest):
        with open(solution_dest, "w", encoding="utf-8") as f:
            f.write(f'# Implement your solution for {concept_name} here\n')
            
    # Write a simple passing test harness
    harness_dest = os.path.join(WORKSPACE_DIR, "test_harness.py")
    with open(harness_dest, "w", encoding="utf-8") as f:
        f.write("""import sys
print("Running generic test harness...")
print("No automated assertions defined for this concept yet. Describe your approach to the Socratic Mentor!")
sys.exit(0)
""")
