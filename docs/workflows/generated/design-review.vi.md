# Design Review

> Source: `https://github.com/garrytan/gstack/tree/main/design-review/SKILL.md`  
> Stage: `Review`  
> Specialist: `Designer Who Codes`  
> Phase 1 note: trang này là bản diễn giải tiếng Việt, model-first, không copy nguyên văn toàn bộ skill upstream.

## Mục Đích

UI đã build cần review bằng mắt thiết kế và sửa visual inconsistency.

## Khi Nào Dùng

Dùng khi giao diện nhìn chưa ổn, cần polish, hoặc Lucky yêu cầu nhìn như người dùng thật.

## Input Cần Có

URL hoặc local app, screenshots, design intent, codebase path.

## Quy Trình

1. Mở browser hoặc inspect visual surface.
2. Tìm spacing, hierarchy, typography, alignment, color, motion, AI-slop patterns.
3. Ưu tiên bug ảnh hưởng cảm nhận.
4. Patch UI nhỏ, giữ design system.
5. Re-test desktop/mobile và console.

## Output Sau Khi Chạy

Danh sách issue visual, patches, screenshots/evidence trước-sau nếu có.

## Checklist Hoàn Thành

Có browser evidence; console checked; no obvious overflow; UI states chính ổn.

## Vai Trò / Specialist

`Designer Who Codes`

## Tool / Evidence Cần Có

- Đọc source/diff/context trước khi kết luận.
- Nếu workflow đụng UI, dùng browser evidence: screenshot, console, viewport, interaction.
- Nếu workflow đụng deploy/release, cần build/test/log/public-path evidence.
- Nếu chỉ review plan/docs, cần decision trail và assumptions rõ.

## Mapping Vào Lucky Agent OS

Evidence Gate; Tool Protocol; Skill / Role Specialization

## Workflow Liên Quan

- `office-hours` -> dùng trước plan khi ý tưởng còn mơ hồ.
- `autoplan` -> dùng để chạy review pipeline nhiều vai trò.
- `review` / `qa` / `ship` -> dùng trước khi release.
- `document-release` -> dùng sau khi ship để cập nhật tri thức.

## Source

- Repo: `garrytan/gstack`
- Path: `design-review/SKILL.md`
- URL: `https://github.com/garrytan/gstack/tree/main/design-review/SKILL.md`
