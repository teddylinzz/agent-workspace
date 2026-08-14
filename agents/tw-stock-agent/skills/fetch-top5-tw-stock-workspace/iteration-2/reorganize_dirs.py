import os
import shutil

workspace_dir = "/Users/ted/agents/agents/tw-stock-agent/skills/fetch-top5-tw-stock-workspace/iteration-2"

evals = ["eval-1-detailed-report", "eval-2-watchlist-exclusion"]
configs = ["with_skill", "without_skill"]

for eval_name in evals:
    for config in configs:
        config_dir = os.path.join(workspace_dir, eval_name, config)
        if not os.path.exists(config_dir):
            continue
            
        run_dir = os.path.join(config_dir, "run-1")
        os.makedirs(run_dir, exist_ok=True)
        
        # Move outputs directory into run-1
        outputs_src = os.path.join(config_dir, "outputs")
        outputs_dst = os.path.join(run_dir, "outputs")
        if os.path.exists(outputs_src) and not os.path.exists(outputs_dst):
            shutil.move(outputs_src, outputs_dst)
            print(f"Moved outputs in {config_dir} to run-1/outputs")
