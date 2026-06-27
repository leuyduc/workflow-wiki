# QA

> Source: `https://github.com/garrytan/gstack/tree/main/qa/SKILL.md`  
> Stage: `Test`  
> Specialist: `QA Lead`  
> Phase 1 note: trang này là bản diễn giải tiếng Việt, model-first, không copy nguyên văn toàn bộ skill upstream.

## Mục Đích

Systematic QA cho web app: test thật, tìm bug, sửa và re-test.

## Khi Nào Dùng

Dùng khi user hỏi “does this work?”, “test app”, “QA”, hoặc feature ready for testing.

## Input Cần Có

URL/local app, auth info nếu cần, expected flows, scope/tier quick/standard/exhaustive.

## Quy Trình

1. Setup browser/auth.
2. Orient app: routes, core flows, user roles.
3. Explore visual/functional/UX/content/performance/accessibility.
4. Document bugs with repro/evidence.
5. Triage severity.
6. Fix loop: locate source, patch, retest, classify.
7. Final QA and ship-readiness report.

## Output Sau Khi Chạy

Bug list, fixes, before/after evidence, health score, ship readiness.

## Checklist Hoàn Thành

Browser used; screenshots/console captured; critical flows tested; fixes re-tested.

## Vai Trò / Specialist

`QA Lead`

## Tool / Evidence Cần Có

- Đọc source/diff/context trước khi kết luận.
- Nếu workflow đụng UI, dùng browser evidence: screenshot, console, viewport, interaction.
- Nếu workflow đụng deploy/release, cần build/test/log/public-path evidence.
- Nếu chỉ review plan/docs, cần decision trail và assumptions rõ.

## Mapping Vào Lucky Agent OS

Evidence Gate; Tool Protocol; Workflow Lifecycle

## Workflow Liên Quan

- `office-hours` -> dùng trước plan khi ý tưởng còn mơ hồ.
- `autoplan` -> dùng để chạy review pipeline nhiều vai trò.
- `review` / `qa` / `ship` -> dùng trước khi release.
- `document-release` -> dùng sau khi ship để cập nhật tri thức.

## Source

- Repo: `garrytan/gstack`
- Path: `qa/SKILL.md`
- URL: `https://github.com/garrytan/gstack/tree/main/qa/SKILL.md`
