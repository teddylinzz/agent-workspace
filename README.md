# Agent Workspace

A small workspace for reusable agent skills, repository instructions, and helper scripts for Codex and other AI coding agents.

## Project Structure

```text
.
├── AGENTS.md
├── LICENSE
├── README.md
└── skills/
    ├── daily-ai-work-impact-log/
    │   └── SKILL.md
    └── markitdown/
        ├── SKILL.md
        ├── agents/
        │   └── openai.yaml
        └── scripts/
            └── batch_markitdown.py
```

## Contents

- `AGENTS.md`: Repository instructions for agents working in this workspace.
- `skills/daily-ai-work-impact-log/SKILL.md`: Skill for turning daily work, AI usage, and Codex logs into review-ready work impact notes.
- `skills/markitdown/SKILL.md`: Skill instructions for using Microsoft MarkItDown from Codex.
- `skills/markitdown/scripts/batch_markitdown.py`: Batch conversion helper that writes one Markdown file per input and records a JSON conversion report.
- `skills/markitdown/agents/openai.yaml`: Agent-facing metadata for the MarkItDown skill.

## Current Skills

### Daily AI Work Impact Log

Captures daily work, estimates AI usage, reconstructs activity from local Codex logs, and turns evidence into concise annual review or 考績表 material.

Use it for:

- Daily work logs with impact, evidence, and time-saved estimates.
- Local Codex activity summaries from `~/.codex` session logs.
- AI usage and throughput estimates with confidence labels.
- Monthly, quarterly, or annual review bullets in Traditional Chinese when useful.

### MarkItDown

Converts PDFs, Office documents, spreadsheets, images, audio, HTML, text files, ZIPs, YouTube URLs, and mixed batches into Markdown for LLM ingestion, indexing, or text analysis.

Use it for:

- Single-file conversion with the MarkItDown CLI.
- Batch conversion with `scripts/batch_markitdown.py`.
- Preparing heterogeneous documents for AI reading.
- Preserving one Markdown output per source file plus a conversion report.

## Repository Hygiene

- Keep each skill focused on one capability.
- Put reusable helper scripts under the skill that owns them.
- Do not commit generated outputs, virtual environments, caches, `.DS_Store`, or conversion reports.
- When a local skill is mirrored globally under `~/.agents/skills`, keep both copies in sync.
