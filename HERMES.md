---
title: henry-consulting — Resident Hermes Agent
tags: [hermes, project, agent]
---

# henry-consulting — Resident Hermes Agent

This project has its own Hermes agent. It knows this project's code,
history, and conventions. It evolves over time as the project changes.

## What you can do

### Start a chat
```bash
./hermes                          # interactive chat
./hermes chat -q "What does this project do?"     # single query
./hermes -w                       # start in a new isolated git worktree
```

### Run an evolution cycle manually
```bash
./.hermes/evolve.sh
```
This reads the git log since the last cycle, asks Gemma 4 to reflect on what
changed, and appends the reflection to `.hermes/MEMORY.md`. Schedule it via
cron for autonomous evolution.

### See the project brief the agent loads
```bash
cat .hermes/PROJECT_BRIEF.md
```

### See the accumulating memory
```bash
cat .hermes/MEMORY.md
```

### See evolution history
```bash
cat .hermes/evolution.log
```

## How it works

- `.hermes/` is the project's HERMES_HOME — a local config directory that
  overrides the global `~/.hermes/`.
- The `./hermes` launcher sets `HERMES_HOME` to the project directory, then
  delegates to the global hermes binary. Same Python install, different
  config dir.
- Skills are symlinked from `~/.hermes/skills` so every project has the
  full skill library but can override individual skills locally.
- Memory is project-local — it never pollutes the global `~/.hermes/MEMORY.md`.
- Sessions are project-local — past chats stay with the project.

## Model

- **Provider:** Google AI Studio (free tier)
- **Model:** `gemma-4-26b-a4b-it` (Gemma 4 26B MoE, 4B active parameters)
- **Fallback:** OpenRouter free tier if Google rate-limits

Swap models by editing `.hermes/config.yaml`.
