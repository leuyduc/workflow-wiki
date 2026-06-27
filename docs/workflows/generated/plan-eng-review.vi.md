# Plan Engineering Review

> Source: `https://github.com/garrytan/gstack/tree/main/plan-eng-review/SKILL.md`  
> Stage: `Plan`  
> Specialist: `Engineering Manager`  
> Phase 1 note: trang này là bản diễn giải tiếng Việt, model-first, không copy nguyên văn toàn bộ skill upstream.

## Mục Đích

Plan cần được kiểm tra về kiến trúc, data flow, integration, risk và testability.

## Khi Nào Dùng

Dùng khi plan sắp vào build hoặc có nguy cơ technical debt/cross-file complexity.

## Input Cần Có

Plan/spec, codebase context, constraints, expected behavior, known risks.

## Quy Trình

1. Đọc plan và repo context.
2. Kiểm tra implementation path, files, dependencies.
3. Tìm ambiguity, missing state/data flow, edge cases.
4. Đề xuất architecture hoặc simpler path.
5. Xác định test matrix và rollout risk.

## Output Sau Khi Chạy

Engineering-ready plan với tasks rõ, risks, tests, implementation boundaries.

## Checklist Hoàn Thành

File/area cần sửa rõ; edge cases rõ; test strategy rõ; no hidden architecture assumption.

## Vai Trò / Specialist

`Engineering Manager`

## Tool / Evidence Cần Có

- Đọc source/diff/context trước khi kết luận.
- Nếu workflow đụng UI, dùng browser evidence: screenshot, console, viewport, interaction.
- Nếu workflow đụng deploy/release, cần build/test/log/public-path evidence.
- Nếu chỉ review plan/docs, cần decision trail và assumptions rõ.

## Mapping Vào Lucky Agent OS

Workflow Lifecycle; Skill / Role Specialization; Tool Protocol

## Workflow Liên Quan

- `office-hours` -> dùng trước plan khi ý tưởng còn mơ hồ.
- `autoplan` -> dùng để chạy review pipeline nhiều vai trò.
- `review` / `qa` / `ship` -> dùng trước khi release.
- `document-release` -> dùng sau khi ship để cập nhật tri thức.

## Source

- Repo: `garrytan/gstack`
- Path: `plan-eng-review/SKILL.md`
- URL: `https://github.com/garrytan/gstack/tree/main/plan-eng-review/SKILL.md`
