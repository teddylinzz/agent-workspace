import os
import json
import re

workspace_dir = "/Users/ted/agents/agents/tw-stock-agent/skills/fetch-top5-tw-stock-workspace/iteration-2"

# A set of valid Taiwan stock tickers that could be candidates or recommendations
valid_tickers = {"1514", "2303", "2317", "2324", "2327", "2344", "2356", "2357", "2382", "2408", "2454", "2891", "3149", "3231", "3481", "6116", "6239"}

def extract_recommended_tickers(content):
    # Find tbody which contains the summary table rows
    tbody = re.search(r"<tbody>(.*?)</tbody>", content, re.DOTALL)
    if not tbody:
        # Fall back to entire document if tbody is not found
        raw_tickers = re.findall(r"\b\d{4}\b", content)
    else:
        raw_tickers = re.findall(r"\b\d{4}\b", tbody.group(1))
        
    recommended = []
    for t in raw_tickers:
        if t in valid_tickers and t not in recommended:
            recommended.append(t)
    return recommended

def grade_eval_1(output_path, timing_data):
    if not os.path.exists(output_path):
        return {
            "expectations": [{"text": "File exists", "passed": False, "evidence": "Output file not found"}],
            "summary": {"passed": 0, "failed": 4, "total": 4, "pass_rate": 0.0}
        }
    
    with open(output_path, "r", encoding="utf-8") as f:
        content = f.read()

    recommended = extract_recommended_tickers(content)
    selects_5_stocks = len(recommended) == 5
    evidence_5_stocks = f"Found recommended stocks in table: {recommended}" if selects_5_stocks else f"Found recommended stocks: {recommended} which is not exactly 5."

    excludes_3481 = "3481" not in recommended and ("3481" in content or "Innolux" in content or "群創" in content)
    evidence_excludes_3481 = "3481 is not in the top 5 watchlist and is mentioned in the exclusion list." if excludes_3481 else "3481 is either in the watchlist or not mentioned."

    excludes_2324 = "2324" not in recommended and ("2324" in content or "Compal" in content or "仁寶" in content)
    evidence_excludes_2324 = "2324 is not in the top 5 watchlist and is mentioned in the exclusion list." if excludes_2324 else "2324 is either in the watchlist or not mentioned."

    includes_suggested_prices = ("TP" in content or "停利" in content) and ("SL" in content or "停損" in content)
    evidence_prices = "Found TP/SL or 停利/停損 targets in the HTML report." if includes_suggested_prices else "Did not find TP/SL or 停利/停損 references."

    expectations = [
        {
            "text": "Verify that exactly 5 stocks are selected as the top recommended stocks.",
            "passed": selects_5_stocks,
            "evidence": evidence_5_stocks
        },
        {
            "text": "Verify that 3481 (Innolux) is excluded from the top 5 watchlist.",
            "passed": excludes_3481,
            "evidence": evidence_excludes_3481
        },
        {
            "text": "Verify that 2324 (Compal) is excluded from the top 5 watchlist.",
            "passed": excludes_2324,
            "evidence": evidence_excludes_2324
        },
        {
            "text": "Verify that entry, TP, and SL prices are provided for the recommended stocks.",
            "passed": includes_suggested_prices,
            "evidence": evidence_prices
        }
    ]

    passed_count = sum(1 for e in expectations if e["passed"])
    return {
        "expectations": expectations,
        "summary": {
            "passed": passed_count,
            "failed": len(expectations) - passed_count,
            "total": len(expectations),
            "pass_rate": passed_count / len(expectations)
        }
    }

def grade_eval_2(output_path, timing_data):
    if not os.path.exists(output_path):
        return {
            "expectations": [{"text": "File exists", "passed": False, "evidence": "Output file not found"}],
            "summary": {"passed": 0, "failed": 4, "total": 4, "pass_rate": 0.0}
        }
    
    with open(output_path, "r", encoding="utf-8") as f:
        content = f.read()

    recommended = extract_recommended_tickers(content)
    selects_5_stocks = len(recommended) == 5
    evidence_5_stocks = f"Found recommended stocks in table: {recommended}" if selects_5_stocks else f"Found recommended stocks: {recommended} which is not exactly 5."

    excludes_3481_and_2324 = "3481" not in recommended and "2324" not in recommended and ("3481" in content or "Innolux" in content or "群創" in content) and ("2324" in content or "Compal" in content or "仁寶" in content)
    evidence_excludes = "Both 3481 and 2324 are excluded from the watchlist and mentioned in risk warnings/exclusions." if excludes_3481_and_2324 else "Either 3481 or 2324 is in the watchlist or missing from exclusion details."

    contains_chip_analysis = "籌碼" in content or "Institutional Flow" in content or "法人" in content
    evidence_chips = "Document contains analysis of institutional flows/chips (筹码/法人)." if contains_chip_analysis else "Institutional flow/chip analysis not found."

    contains_news_sentiment = "新聞" in content or "利多" in content or "利空" in content or "sentiment" in content.lower()
    evidence_news = "Document contains recent news sentiment or catalysts (新聞/利多/利空)." if contains_news_sentiment else "News sentiment analysis not found."

    expectations = [
        {
            "text": "Verify that exactly 5 stocks are selected as the top recommended stocks.",
            "passed": selects_5_stocks,
            "evidence": evidence_5_stocks
        },
        {
            "text": "Verify that both 3481 and 2324 are excluded from the top 5 watchlist.",
            "passed": excludes_3481_and_2324,
            "evidence": evidence_excludes
        },
        {
            "text": "Verify that the report contains analysis of institutional flows/chips.",
            "passed": contains_chip_analysis,
            "evidence": evidence_chips
        },
        {
            "text": "Verify that the report contains analysis of recent news sentiment.",
            "passed": contains_news_sentiment,
            "evidence": evidence_news
        }
    ]

    passed_count = sum(1 for e in expectations if e["passed"])
    return {
        "expectations": expectations,
        "summary": {
            "passed": passed_count,
            "failed": len(expectations) - passed_count,
            "total": len(expectations),
            "pass_rate": passed_count / len(expectations)
        }
    }

runs = [
    ("eval-1-detailed-report", "with_skill", grade_eval_1),
    ("eval-1-detailed-report", "without_skill", grade_eval_1),
    ("eval-2-watchlist-exclusion", "with_skill", grade_eval_2),
    ("eval-2-watchlist-exclusion", "without_skill", grade_eval_2)
]

for eval_name, config, grader in runs:
    dir_path = os.path.join(workspace_dir, eval_name, config, "run-1")
    output_path = os.path.join(dir_path, "outputs", "watch_list_analysis.html")
    timing_path = os.path.join(dir_path, "timing.json")
    
    timing_data = {}
    if os.path.exists(timing_path):
        with open(timing_path, "r") as f:
            timing_data = json.load(f)
            
    grade_result = grader(output_path, timing_data)
    
    # Calculate duration
    duration = timing_data.get("total_duration_seconds", timing_data.get("duration_ms", 0) / 1000.0)
    
    grading_json = {
        "expectations": grade_result["expectations"],
        "summary": grade_result["summary"],
        "execution_metrics": {
            "total_tokens": timing_data.get("total_tokens", 0),
            "duration_ms": timing_data.get("duration_ms", 0),
            "output_chars": os.path.getsize(output_path) if os.path.exists(output_path) else 0
        },
        "timing": {
            "executor_duration_seconds": duration,
            "total_duration_seconds": duration
        },
        "claims": [],
        "user_notes_summary": {
            "uncertainties": [],
            "needs_review": [],
            "workarounds": []
        },
        "eval_feedback": {
            "suggestions": [],
            "overall": "All assertions evaluated against HTML output."
        }
    }
    
    grading_output_path = os.path.join(dir_path, "grading.json")
    with open(grading_output_path, "w", encoding="utf-8") as f:
        json.dump(grading_json, f, indent=2, ensure_ascii=False)
    print(f"Wrote grading results to {grading_output_path}")
