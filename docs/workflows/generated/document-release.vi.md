# Document Release

> Source: `https://github.com/garrytan/gstack/tree/main/document-release/SKILL.md`  
> Stage: `Reflect`  
> Specialist: `Technical Writer`  
> Phase 1 note: trang này là bản diễn giải tiếng Việt, model-first, không copy nguyên văn toàn bộ skill upstream.

## Mục Đích

Sau khi ship, docs cần sync với code và release story.

## Khi Nào Dùng

Dùng sau PR/ship hoặc khi user yêu cầu update docs/sync documentation.

## Input Cần Có

Diff/commits, README/ARCHITECTURE/CONTRIBUTING/CHANGELOG/TODOS hiện tại.

## Quy Trình

1. Pre-flight và diff analysis.
2. Blast-radius coverage map theo Diataxis: reference/how-to/tutorial/explanation.
3. Update docs chính phù hợp thay đổi.
4. Detect architecture diagram drift.
5. Polish changelog bằng sell-test rubric.
6. Clean TODOs và surface documentation debt.

## Output Sau Khi Chạy

Docs updated, changelog polished, documentation debt captured, PR body notes.

## Checklist Hoàn Thành

Docs match shipped code; no stale architecture claim; TODO debt rõ; source diff referenced.

## Vai Trò / Specialist

`Technical Writer`

## Tool / Evidence Cần Có

- Đọc source/diff/context trước khi kết luận.
- Nếu workflow đụng UI, dùng browser evidence: screenshot, console, viewport, interaction.
- Nếu workflow đụng deploy/release, cần build/test/log/public-path evidence.
- Nếu chỉ review plan/docs, cần decision trail và assumptions rõ.

## Mapping Vào Lucky Agent OS

Memory / Learning Loop; Workflow Lifecycle; Project Structure / Runbooks

## Workflow Liên Quan

- `office-hours` -> dùng trước plan khi ý tưởng còn mơ hồ.
- `autoplan` -> dùng để chạy review pipeline nhiều vai trò.
- `review` / `qa` / `ship` -> dùng trước khi release.
- `document-release` -> dùng sau khi ship để cập nhật tri thức.

## Source

- Repo: `garrytan/gstack`
- Path: `document-release/SKILL.md`
- URL: `https://github.com/garrytan/gstack/tree/main/document-release/SKILL.md`
