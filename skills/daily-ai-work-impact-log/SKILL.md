---
name: daily-ai-work-impact-log
description: Use when the user wants to record daily work, reconstruct a day from local Codex logs, estimate daily AI usage or throughput, track Codex/Copilot/ChatGPT/API usage, capture evidence for performance reviews, or draft annual 考績表 accomplishments.
---

# Daily AI Work Impact Log

Use this skill to help the user turn everyday work and AI-assisted activity into concise records that can later become annual 考績表 material. Keep the framing on work impact: shipped outcomes, measurable results, collaboration, learning, and evidence. AI usage is useful when it explains speed, quality, leverage, or cost.

## Modes

### Daily Capture

When the user wants to record today, ask only for missing details needed to make a useful daily entry:

- Work done: tasks, projects, incidents, reviews, documents, meetings, or support.
- Impact: shipped value, quality improvement, time saved, risk reduced, customers/users helped, or team unblock.
- Evidence: PRs, commits, tickets, docs, dashboards, screenshots, chat links, or meeting notes.
- Collaboration: people helped, reviewers, stakeholders, cross-team coordination.
- Blockers and decisions: unresolved risks, tradeoffs, follow-ups, or important context.
- AI tools used: Codex, GitHub Copilot, ChatGPT, API, IDE assistants, or other tools.
- Estimated time saved: record as an estimate with confidence when exact data is unavailable.
- Metric checks, only where applicable:
  - Delivery: shipped features, bugs fixed, PRs merged, tickets completed, docs written.
  - Quality: tests added, regressions prevented, incidents reduced, review findings resolved.
  - Efficiency / AI leverage: time saved, repetitive work accelerated, AI-assisted debugging/testing/docs.
  - Collaboration: PRs reviewed, teammates helped, blockers resolved, knowledge shared.
  - Business impact: user pain reduced, workflow improved, cost/time saved, SLA/error/support metrics improved.
  - Growth / ownership: new tools learned, ambiguous problems clarified, decisions documented.

If the user asks to "run" the log for a date and provides no details, do not return an empty template. First try the "Local Codex Log Reconstruction" workflow below. If there is no accessible evidence, return a compact draft with `unknown` / `not provided` labels and ask for only the highest-value missing details.

Default to Markdown with these sections when creating or updating an entry:

```markdown
# Daily Work + AI Usage Log

Date:

## Work Done
- 

## Impact
- 

## Evidence
- PRs:
- Tickets:
- Docs:
- Other:

## AI Usage
| Tool | Model | Requests | Estimated Tokens | Purpose | Time Saved |
|---|---|---:|---:|---|---:|

## Metric Check
- Delivery:
- Quality:
- Efficiency / AI leverage:
- Collaboration:
- Business impact:
- Growth / ownership:
- Evidence confidence:

## Time Saved
- Estimate:
- Confidence:

## Review-Ready Bullets
- 

## Notes for Annual 考績表
- Key achievement:
- Quantified result:
- Competency shown:
```

### Local Codex Log Reconstruction

Use this when the user asks to check Codex logs, reconstruct yesterday/today, summarize AI usage, or produce a daily entry from local activity.

1. Resolve the date explicitly in the user's timezone. Say the exact date, for example `2026-05-16 Asia/Taipei`.
2. Inspect local Codex records as best-effort evidence:
   - `~/.codex/sessions/YYYY/MM/DD/*.jsonl`
   - `~/.codex/archived_sessions/rollout-YYYY-MM-DD*.jsonl`
   - `~/.codex/session_index.jsonl`
   - `~/.codex/history.jsonl`
   - `~/.codex/shell_snapshots/*`
3. Extract only useful summary fields, not raw private logs:
   - session id, timestamp, cwd, user prompts, final outcome, task duration, and token-count events when present.
   - Count prompts and sum token usage from `last_token_usage` across token-count events when available. Label this as "local logged tokens", not official billing.
4. Look for work evidence related to the log:
   - Run `git log --since ... --until ... --pretty=format:'%h%x09%ad%x09%s' --date=iso-local` in relevant repositories found from session `cwd` values.
   - Check created or modified files from that date only when it helps support the daily entry.
5. Produce a concise daily log with:
   - Work Done, Evidence, AI Usage, Metric Check, Time Saved, Review-Ready Bullets, and Notes for Annual 考績表.
   - Confidence labels for evidence and estimates.

Useful command patterns:

```bash
find ~/.codex/sessions/YYYY/MM/DD ~/.codex/archived_sessions -maxdepth 1 -type f -name 'rollout-YYYY-MM-DD*.jsonl' -print | sort
jq -r 'select(.type=="event_msg" and .payload.type=="user_message") | .payload.message' file.jsonl
jq -s '[.[] | select(.type=="event_msg" and .payload.type=="token_count") | .payload.info.last_token_usage] | map(.total_tokens // 0) | add // 0' file.jsonl
```

Do not expose credentials, API keys, private customer data, or long verbatim content from logs. If a user prompt contains a visible secret, summarize the action without repeating the secret.

### AI Usage Estimate

When the user asks for daily AI usage, throughput, or cost, estimate by tool/model whenever possible. Ask for missing values only when they materially affect the estimate:

- Tool/provider and model.
- Requests/messages/completions per day.
- Average input tokens and output tokens.
- Active usage hours.
- Optional input/output token prices if cost is requested.

Use these formulas:

```text
daily_input_tokens = requests_per_day * avg_input_tokens
daily_output_tokens = requests_per_day * avg_output_tokens
total_tokens = daily_input_tokens + daily_output_tokens
tokens_per_hour = total_tokens / active_hours
estimated_cost = input_tokens * input_price + output_tokens * output_price
```

Report assumptions and confidence. If pricing is requested, use user-provided prices or verify current official pricing before calculating cost. Normalize prices to per-token rates first when pricing is quoted per 1K or 1M tokens. Do not hardcode stale prices.

### Log Import Guidance

When the user has logs or dashboard exports, guide them to use the most reliable source available:

- OpenAI/Codex API usage exports or Usage/Costs APIs for API organization data.
- OpenAI Compliance API exports when available for ChatGPT Business, Enterprise, or Edu usage.
- GitHub Copilot organization or enterprise metrics for Copilot usage.
- Local Codex logs as a best-effort fallback only; local formats may change, so label results as approximate.

Do not invent exact usage logs, token counts, model names, or prices. If imported records omit token counts, summarize available activity and estimate separately with clear assumptions.

### Metric Check

Use metric checks to connect AI usage to annual 考績表 evidence. Follow this chain:

```text
AI use -> work output -> evidence -> impact -> 考績表 bullet
```

AI records can directly measure usage volume, throughput, purpose, time saved, and optional cost. Delivery, quality, collaboration, and business impact require work evidence such as PRs, tickets, docs, dashboards, release notes, incident reports, or feedback.

Use evidence confidence labels:

- High: backed by PR, ticket, dashboard, release note, incident report, or document link.
- Medium: backed by daily notes, visible output, meeting notes, or stakeholder feedback.
- Low: personal estimate only.

### Review Synthesis

When the user asks for monthly, quarterly, or annual 考績表 writing, synthesize daily records into polished Traditional Chinese by default. Use English only when it helps with titles, technical terms, or the user asks for bilingual output.

Prefer bullets that include:

- Action: what the user did.
- Impact: why it mattered.
- Evidence: PRs, tickets, metrics, docs, or stakeholder outcomes.
- Scale: frequency, volume, time saved, defects reduced, users affected, or cost saved.
- Competency: ownership, collaboration, problem solving, technical depth, process improvement, or learning.

Strong 考績表 wording should connect AI usage to concrete results, for example:

```text
- 導入 AI 輔助開發與測試流程，加速缺陷定位與測試案例補齊，協助團隊更穩定地交付功能，並節省約 X 小時重複性工作。
- 主導/完成 X 專案的 Y 功能，透過 PR、文件與跨團隊溝通推進落地，改善 Z 指標或降低後續維護成本。
```

Avoid vague claims such as "used AI a lot" unless they are tied to outcomes, evidence, or time saved.

## Output Rules

- Keep daily entries concise enough that the user will actually maintain the habit.
- Preserve uncertainty: use "estimated", "approximate", and confidence labels when data is incomplete.
- Keep sensitive details private; avoid recording credentials, private customer data, or secrets.
- Do not create scripts, automations, parsers, or files unless the user explicitly asks for them.
