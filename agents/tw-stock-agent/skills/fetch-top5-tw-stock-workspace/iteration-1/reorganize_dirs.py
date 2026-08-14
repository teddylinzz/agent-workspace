import os
import shutil

workspace_dir = "/Users/ted/agents/agents/tw-stock-agent/skills/fetch-top5-tw-stock-workspace/iteration-1"

evals = ["eval-1-detailed-report", "eval-2-watchlist-exclusion"]
configs = ["with_skill", "without_skill"]

for eval_name in evals:
    for config in configs:
        config_dir = os.path.join(workspace_dir, eval_name, config)
        if not os.path.exists(config_dir):
            continue
            
        # If run-1 already exists, skip
        run_dir = os.path.join(config_dir, "run-1")
        if os.path.exists(run_dir):
            print(f"run-1 already exists in {config_dir}")
            continue
            
        # Create run-1
        os.makedirs(run_dir, exist_ok=True)
        
        # Move outputs directory
        outputs_src = os.path.join(config_dir, "outputs")
        if os.path.exists(outputs_src):
            shutil.move(outputs_src, os.path.join(run_dir, "outputs"))
            
        # Move grading.json
        grading_src = os.path.join(config_dir, "grading.json")
        if os.path.exists(grading_src):
            shutil.move(grading_src, os.path.join(run_dir, "grading.json"))
            
        # Move timing.json
        timing_src = os.path.join(config_dir, "timing.json")
        if os.path.exists(timing_src):
            shutil.move(timing_src, os.path.join(run_dir, "timing.json"))
            
        print(f"Reorganized {config_dir} -> run-1/")
