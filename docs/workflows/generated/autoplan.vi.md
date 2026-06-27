# Autoplan

> Source: `https://github.com/garrytan/gstack/tree/main/autoplan/SKILL.md`  
> Stage: `Plan`  
> Specialist: `Review Pipeline`  
> Phase 1 note: trang này là bản diễn giải tiếng Việt, model-first, không copy nguyên văn toàn bộ skill upstream.

## Mục Đích

Có plan rồi nhưng muốn review toàn diện tự động qua nhiều góc nhìn.

## Khi Nào Dùng

Dùng khi cần chạy CEO, design, engineering và DX review theo chuỗi, auto-decide phần không cần gu cá nhân.

## Input Cần Có

Plan/spec hiện tại, repo context, constraints, UI/devex/security scope nếu có.

## Quy Trình

1. Capture restore point.
2. Đọc context và các review skills liên quan.
3. Chạy CEO review cho strategy/scope.
4. Chạy design review nếu có UI.
5. Chạy engineering review và dual voices.
6. Chạy DX review nếu có developer-facing scope.
7. Tổng hợp decision audit trail và final approval gate.

## Output Sau Khi Chạy

Plan đã qua nhiều vai trò review, danh sách decision, implementation tasks, choices cần user quyết.

## Checklist Hoàn Thành

Review đủ strategy/design/eng/DX phù hợp; decision có lý do; tasks có acceptance criteria.

## Vai Trò / Specialist

`Review Pipeline`

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
- Path: `autoplan/SKILL.md`
- URL: `https://github.com/garrytan/gstack/tree/main/autoplan/SKILL.md`
