# Review

> Source: `https://github.com/garrytan/gstack/tree/main/review/SKILL.md`  
> Stage: `Review`  
> Specialist: `Staff Engineer`  
> Phase 1 note: trang này là bản diễn giải tiếng Việt, model-first, không copy nguyên văn toàn bộ skill upstream.

## Mục Đích

Pre-landing review để tìm bug, completeness gap, regression risk trước khi ship.

## Khi Nào Dùng

Dùng khi có diff/PR/change set cần review theo mindset senior engineer.

## Input Cần Có

Diff, branch, test result, plan/spec nếu có.

## Quy Trình

1. Xác định scope diff.
2. Review correctness, edge cases, security, migrations, API contract, tests.
3. Ưu tiên findings theo severity.
4. Không viết summary dài trước findings.
5. Nêu test gaps và residual risk.

## Output Sau Khi Chạy

Findings có file refs, open questions, test gaps, recommendation ship/block.

## Checklist Hoàn Thành

Findings-first; có severity; có file refs; nêu test gap; không nitpick quá mức.

## Vai Trò / Specialist

`Staff Engineer`

## Tool / Evidence Cần Có

- Đọc source/diff/context trước khi kết luận.
- Nếu workflow đụng UI, dùng browser evidence: screenshot, console, viewport, interaction.
- Nếu workflow đụng deploy/release, cần build/test/log/public-path evidence.
- Nếu chỉ review plan/docs, cần decision trail và assumptions rõ.

## Mapping Vào Lucky Agent OS

Workflow Lifecycle; Evidence Gate; Tool Protocol

## Workflow Liên Quan

- `office-hours` -> dùng trước plan khi ý tưởng còn mơ hồ.
- `autoplan` -> dùng để chạy review pipeline nhiều vai trò.
- `review` / `qa` / `ship` -> dùng trước khi release.
- `document-release` -> dùng sau khi ship để cập nhật tri thức.

## Source

- Repo: `garrytan/gstack`
- Path: `review/SKILL.md`
- URL: `https://github.com/garrytan/gstack/tree/main/review/SKILL.md`
