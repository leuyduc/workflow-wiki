# Plan Design Review

> Source: `https://github.com/garrytan/gstack/tree/main/plan-design-review/SKILL.md`  
> Stage: `Plan`  
> Specialist: `Designer Who Codes`  
> Phase 1 note: trang này là bản diễn giải tiếng Việt, model-first, không copy nguyên văn toàn bộ skill upstream.

## Mục Đích

Plan có UI/UX cần được kiểm trước khi build để tránh AI slop và flow yếu.

## Khi Nào Dùng

Dùng khi plan đụng tới giao diện, onboarding, visual hierarchy, layout, interaction.

## Input Cần Có

Plan/spec, target users, existing UI patterns, screenshots/mockups nếu có.

## Quy Trình

1. Xác định UI scope.
2. Kiểm hierarchy, spacing, information architecture, interaction states.
3. Đặt taste/visual direction.
4. Challenge generic layout và duplicate CTA.
5. Đưa ra design acceptance criteria.

## Output Sau Khi Chạy

Design-ready plan với visual direction, state coverage, responsive concerns, anti-slop checklist.

## Checklist Hoàn Thành

Có state/error/empty/loading; có mobile concern; có visual hierarchy; có criteria browser QA.

## Vai Trò / Specialist

`Designer Who Codes`

## Tool / Evidence Cần Có

- Đọc source/diff/context trước khi kết luận.
- Nếu workflow đụng UI, dùng browser evidence: screenshot, console, viewport, interaction.
- Nếu workflow đụng deploy/release, cần build/test/log/public-path evidence.
- Nếu chỉ review plan/docs, cần decision trail và assumptions rõ.

## Mapping Vào Lucky Agent OS

Workflow Lifecycle; Skill / Role Specialization; Evidence Gate

## Workflow Liên Quan

- `office-hours` -> dùng trước plan khi ý tưởng còn mơ hồ.
- `autoplan` -> dùng để chạy review pipeline nhiều vai trò.
- `review` / `qa` / `ship` -> dùng trước khi release.
- `document-release` -> dùng sau khi ship để cập nhật tri thức.

## Source

- Repo: `garrytan/gstack`
- Path: `plan-design-review/SKILL.md`
- URL: `https://github.com/garrytan/gstack/tree/main/plan-design-review/SKILL.md`
