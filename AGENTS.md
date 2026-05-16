# AGENTS.md

Instructions for AI coding agents working in this repository.

## Project Purpose

This repository is an agent workspace for reusable skills, instructions, and helper scripts for Codex and other AI coding agents.

Expected contents include:

- `skills/<name>/SKILL.md` files with focused agent instructions.
- Optional helper scripts under each skill, such as `skills/<name>/scripts/`.
- Optional agent metadata under each skill, such as `skills/<name>/agents/`.

## Working Principles

These instructions incorporate the Karpathy Guidelines:
https://raw.githubusercontent.com/multica-ai/andrej-karpathy-skills/refs/heads/main/skills/karpathy-guidelines/SKILL.md

### Think Before Editing

- State assumptions when the request is ambiguous.
- Ask for clarification only when a reasonable assumption would be risky.
- Surface simpler approaches when they would better satisfy the goal.

### Keep Changes Simple

- Add the minimum code or documentation needed to satisfy the request.
- Do not add speculative features, unused configuration, or abstractions for one-off needs.
- Prefer clear, direct instructions over broad frameworks.

### Make Surgical Changes

- Touch only files related to the request.
- Preserve existing style and structure unless the user asks for a broader cleanup.
- Do not refactor unrelated content.
- Remove only unused code or text created by your own change.

### Verify The Result

- For scripts, run the narrowest relevant command, such as syntax checks or focused tests.
- For documentation-only changes, inspect the final file for clarity and formatting.
- Mention any verification that could not be run.

## Skill Authoring Standards

- Keep each skill focused on one clear capability.
- Put the trigger conditions in the YAML `description` at the top of `SKILL.md`.
- Prefer concrete commands and examples over abstract advice.
- Keep helper scripts close to the skill that owns them.
- Avoid documenting credentials, private URLs, or machine-specific secrets.

## Repository Hygiene

- Do not commit generated outputs such as conversion reports, virtual environments, caches, or `.DS_Store`.
- Keep README updates aligned with the actual skills present in the repo.
- If adding a new skill, include enough structure for another agent to invoke it without guessing.
