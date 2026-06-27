# Workflow Index

This page lists the first generated workflow pages adapted from `gstack` into the Lucky Agent OS model.

## Phase 1: Priority GStack Workflows

| Workflow | Stage | Specialist | Purpose |
|---|---|---|---|
| [Office Hours](./generated/office-hours.vi.md) | Think | YC Office Hours | Reframe vague product ideas into sharper problem definitions. |
| [Autoplan](./generated/autoplan.vi.md) | Plan | Review Pipeline | Run CEO, design, engineering, and DX review as a planning pipeline. |
| [Plan CEO Review](./generated/plan-ceo-review.vi.md) | Plan | CEO / Founder | Challenge product premise, scope, wedge, and 10x outcome. |
| [Plan Engineering Review](./generated/plan-eng-review.vi.md) | Plan | Engineering Manager | Check architecture, implementation path, risk, and testability. |
| [Plan Design Review](./generated/plan-design-review.vi.md) | Plan | Designer Who Codes | Review UI/UX plan quality before build. |
| [Design Review](./generated/design-review.vi.md) | Review | Designer Who Codes | Audit and fix visual quality issues. |
| [Review](./generated/review.vi.md) | Review | Staff Engineer | Find production bugs and completeness gaps before landing. |
| [QA](./generated/qa.vi.md) | Test | QA Lead | Use real browser testing to find and fix product bugs. |
| [Ship](./generated/ship.vi.md) | Ship | Release Engineer | Prepare tests, commits, PR, deploy, and release readiness. |
| [Document Release](./generated/document-release.vi.md) | Reflect | Technical Writer | Keep docs aligned with shipped work. |

## How These Pages Were Adapted

These pages are not verbatim copies of upstream `gstack` skills. They are Vietnamese, model-first summaries that map each workflow into Lucky Agent OS:

- purpose;
- when to use;
- required input;
- process;
- expected output;
- completion checklist;
- specialist role;
- evidence requirements;
- source reference.

## Next Work

- Add more workflows from `gstack`.
- Improve `scripts/sync-gstack.ts` so pages can be regenerated from upstream metadata.
- Add layer pages under `docs/layers/` to show how workflows support the 7-layer model.
