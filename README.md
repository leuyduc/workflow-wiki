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
