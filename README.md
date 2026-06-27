# Workflow Wiki

Vietnamese version: [README.vi.md](./README.vi.md)

A workflow wiki and operating manual for AI-assisted projects, teams, roles, and industry playbooks. The first knowledge source is Garry Tan's `gstack` repository.

## Purpose

This project turns workflow knowledge into a navigable website:

```text
gstack knowledge source
-> ingest / parse / normalize
-> generate structured docs
-> publish as wiki
-> search / browse by stage, role, workflow, prompt, checklist
```

The site is meant to help Lucky and collaborators understand how to run project workflows across different jobs, roles, and industries.

## Recommended Reading Order

Start here if you are new to the project:

1. `README.vi.md` - Vietnamese project overview.
2. `docs/gstack-overview.vi.md` - Vietnamese overview of what `gstack` is and why it is the first source.
3. `docs/hermes-evolution/from-fable-5-prompt.vi.md` - lessons for evolving Hermes from the Fable 5 prompt case study.
4. `docs/agent-os/oh-my-openagent-lessons.vi.md` - agent OS, orchestration, and evidence-gate lessons from `oh-my-openagent`.
5. `docs/project-structure/ai-agent-project-structure.vi.md` - AI-agent-friendly repo structure template for Lucky/Hermes/Codex.
6. `PLAN.md` - roadmap, MVP scope, and next phases.
7. `ARCHITECTURE.md` - ingestion, normalization, and publishing architecture.
8. `docs/stages/lifecycle.md` - workflow lifecycle: Think -> Plan -> Build -> Review -> Test -> Ship -> Reflect.
9. `docs/workflows/index.md` - initial high-priority workflow list.
10. `docs/prompts/index.md` - starter prompts for ingestion, QA, and workflow page conversion.
11. `docs/checklists/index.md` - MVP, workflow page, and browser QA checklists.
12. `scripts/sync-gstack.ts` - for AI/dev readers who need to understand the planned gstack sync pipeline.

Human readers should start with `README.vi.md` and `docs/gstack-overview.vi.md`. AI/dev readers should also read `PLAN.md`, `ARCHITECTURE.md`, and `scripts/sync-gstack.ts`.

## Initial Direction

- Build a static docs/wiki MVP first.
- Use `gstack` as the first source of workflow knowledge.
- Normalize each skill into a workflow page with inputs, process, outputs, checklists, and related workflows.
- Expand later into AI search, role-based guides, industry playbooks, and workflow graphs.

## Recommended Stack

MVP:

- VitePress
- Markdown
- TypeScript sync scripts
- GitHub source control
- Static deploy

Future:

- AI search / RAG
- workflow graph
- admin import pipeline
- role-based navigation

## Useful Commands

```bash
npm install
npm run dev
npm run build
npm run sync:gstack
```

## Source

Primary knowledge source:

```text
https://github.com/garrytan/gstack
```

Vietnamese overview:

```text
docs/gstack-overview.vi.md
```
