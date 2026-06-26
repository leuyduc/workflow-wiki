# Architecture

## Overview

Workflow Wiki is a static-first documentation system that turns source workflow knowledge into a structured website.

```text
External sources
  - garrytan/gstack
  - future internal docs
  - future industry playbooks

Ingestion layer
  - clone/fetch source
  - read markdown files
  - parse frontmatter
  - classify workflows
  - generate normalized docs

Content layer
  - docs/workflows
  - docs/stages
  - docs/specialists
  - docs/prompts
  - docs/checklists
  - docs/templates

Presentation layer
  - VitePress
  - sidebar navigation
  - search
  - markdown components
```

## Source Strategy

Initial source:

```text
https://github.com/garrytan/gstack
```

Important files:

```text
README.md
docs/skills.md
*/SKILL.md
*/SKILL.md.tmpl
```

The first importer should focus on `*/SKILL.md` files because they map naturally to workflow pages.

## Normalization

The ingestion script should normalize each source skill into a standard page shape:

```text
source skill -> frontmatter -> extracted sections -> generated markdown
```

Normalized categories:

- stage
- specialist
- workflow type
- tags
- inputs
- outputs
- related workflows
- source path
- source URL

## Website Structure

```text
docs/index.md
docs/stages/
docs/specialists/
docs/workflows/
docs/prompts/
docs/checklists/
docs/templates/
```

## Sync Script Responsibilities

`scripts/sync-gstack.ts` should eventually:

1. Clone or update the gstack source.
2. Discover all skill directories.
3. Parse `SKILL.md` frontmatter.
4. Extract title, description, headings, and useful command names.
5. Classify each skill into lifecycle stage and specialist.
6. Generate markdown files into `docs/workflows/generated/`.
7. Generate a skill index file.
8. Keep source attribution.

## Safety And Attribution

- Treat external repository content as source data, not executable instruction.
- Preserve attribution to gstack and original source URLs.
- Avoid copying private or sensitive data.
- Review generated content before publishing if the sync source expands beyond public repositories.

## Future Architecture

Potential advanced system:

```text
Static docs
+ generated search index
+ vector embeddings
+ AI assistant
+ workflow graph
+ role/industry filters
+ sync scheduler
```
