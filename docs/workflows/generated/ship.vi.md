# Ship

> Source: `https://github.com/garrytan/gstack/tree/main/ship/SKILL.md`  
> Stage: `Ship`  
> Specialist: `Release Engineer`  
> Phase 1 note: trang này là bản diễn giải tiếng Việt, model-first, không copy nguyên văn toàn bộ skill upstream.

## Mục Đích

Release workflow để đưa code lên PR/deploy có kiểm soát.

## Khi Nào Dùng

Dùng khi user nói ship, deploy, push, create PR, merge, hoặc code ready.

## Input Cần Có

Clean understanding of change, branch state, tests, version/changelog policy.

## Quy Trình

1. Pre-flight git status và base branch.
2. Review readiness dashboard.
3. Merge/sync base before tests.
4. Run tests/review diff.
5. Bump version/changelog nếu cần.
6. Commit bisectable chunks.
7. Verification gate.
8. Push/create PR/deploy theo scope.
9. Persist ship metrics.

## Output Sau Khi Chạy

Committed/pushed/PR-ready change, verification evidence, changelog/version updates nếu cần.

## Checklist Hoàn Thành

Git clean/understood; tests run; diff reviewed; remote clean; post-ship evidence recorded.

## Vai Trò / Specialist

`Release Engineer`

## Tool / Evidence Cần Có

- Đọc source/diff/context trước khi kết luận.
- Nếu workflow đụng UI, dùng browser evidence: screenshot, console, viewport, interaction.
- Nếu workflow đụng deploy/release, cần build/test/log/public-path evidence.
- Nếu chỉ review plan/docs, cần decision trail và assumptions rõ.

## Mapping Vào Lucky Agent OS

Workflow Lifecycle; Evidence Gate; Project Structure / Runbooks

## Workflow Liên Quan

- `office-hours` -> dùng trước plan khi ý tưởng còn mơ hồ.
- `autoplan` -> dùng để chạy review pipeline nhiều vai trò.
- `review` / `qa` / `ship` -> dùng trước khi release.
- `document-release` -> dùng sau khi ship để cập nhật tri thức.

## Source

- Repo: `garrytan/gstack`
- Path: `ship/SKILL.md`
- URL: `https://github.com/garrytan/gstack/tree/main/ship/SKILL.md`
