# Project Plan

## Goal

Create a website like a wiki or structured outline system that explains project workflows and ways of working across roles and industries. The first data and knowledge source is `gstack`.

The website should become an AI workflow operating manual: not just a list of docs, but a guided system that tells users what workflow to use, when to use it, what inputs are needed, what outputs should be produced, and what checklist confirms completion.

## Product Concept

```text
GStack source
-> workflow ingestion
-> normalized knowledge model
-> static wiki website
-> searchable playbooks
-> future AI/RAG assistant
```

## Core Information Architecture

```text
Home
├── Sprint Lifecycle
│   ├── Think
│   ├── Plan
│   ├── Build
│   ├── Review
│   ├── Test
│   ├── Ship
│   └── Reflect
│
├── Specialists
│   ├── CEO / Founder
│   ├── Engineering Manager
│   ├── Designer
│   ├── QA Lead
│   ├── Security Officer
│   ├── Release Engineer
│   └── Technical Writer
│
├── Workflows
│   ├── Product Discovery
│   ├── Planning
│   ├── Design Review
│   ├── Browser QA
│   ├── Code Review
│   ├── Debugging
│   ├── Security Audit
│   ├── Shipping
│   └── Documentation
│
├── Skill Library
│   ├── All gstack skills
│   ├── When to use which skill
│   ├── Related skills
│   └── Skill graph
│
├── Prompts
│   ├── Product prompts
│   ├── Design prompts
│   ├── Coding prompts
│   ├── QA prompts
│   └── Shipping prompts
│
├── Checklists
│   ├── Planning checklist
│   ├── Design checklist
│   ├── Browser QA checklist
│   ├── Release checklist
│   └── Security checklist
│
└── Templates
    ├── Feature spec
    ├── Bug report
    ├── QA report
    ├── Design review
    └── Release notes
```

## MVP Scope

The MVP should include:

- Homepage explaining the workflow OS concept.
- Sprint lifecycle page.
- Skill index generated from gstack skill files.
- A few manually curated workflow pages:
  - Office Hours
  - Autoplan
  - Design Review
  - Browser QA
  - Review
  - Ship
  - Document Release
- Prompt library starter page.
- Checklist starter page.
- Data model documentation.
- Sync script placeholder for gstack ingestion.

## Data Model

Each normalized workflow should support:

```yaml
title: Browser QA
slug: browser-qa
source: gstack
sourceSkill: qa
stage: Test
specialist: QA Lead
type: workflow
tags:
  - browser
  - testing
  - screenshots
inputs:
  - staging URL
  - expected user flow
  - test account if needed
outputs:
  - QA report
  - screenshots
  - bug list
  - regression tests
related:
  - browse
  - qa-only
  - canary
  - ship
```

## GStack Skills To Ingest First

High-priority skills:

```text
office-hours
autoplan
plan-ceo-review
plan-eng-review
plan-design-review
design-consultation
design-shotgun
design-html
design-review
review
investigate
qa
qa-only
browse
open-gstack-browser
cso
ship
land-and-deploy
canary
benchmark
document-release
document-generate
learn
spec
```

## Build Phases

### Phase 1 - Workspace And Docs

- Create project workspace.
- Add project plan, architecture notes, data model, and starter content.
- Create GitHub repo.

### Phase 2 - Static Wiki MVP

- Install and configure VitePress.
- Create homepage, sidebar, search, and starter pages.
- Add styling direction for an editorial technical manual.

### Phase 3 - GStack Ingestion

- Clone/fetch `garrytan/gstack`.
- Read `*/SKILL.md` files.
- Parse frontmatter and headings.
- Generate normalized markdown pages.
- Generate sidebar/index metadata.

### Phase 4 - Curated Workflow Pages

- Convert core gstack workflows into human-readable playbooks.
- Add checklists and prompt blocks.
- Add related workflow links.

### Phase 5 - Browser QA And Polish

- Use browser-in-the-loop testing.
- Test desktop and mobile.
- Check search, sidebar, links, and markdown rendering.
- Fix visual issues.

### Phase 6 - Deploy

- Build static site.
- Deploy to chosen host.
- Add deployment docs.

### Phase 7 - Advanced Features

- AI search / RAG.
- Workflow graph.
- Role-based navigation.
- Industry playbooks.
- Sync automation.

## Definition Of Done For MVP

- Workspace exists.
- Repo is on GitHub.
- Plan and architecture docs are committed.
- VitePress site can run locally.
- Starter pages exist for lifecycle, workflows, prompts, and checklists.
- GStack ingestion plan is documented.
- First sync script exists, even if only as a scaffold.
