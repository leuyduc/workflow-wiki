# Gstack Openclaw Retro

> Source: `https://github.com/garrytan/gstack/tree/main/openclaw/skills/gstack-openclaw-retro/SKILL.md`  
> Stage: `Reflect`  
> Specialist: `Engineering Manager`  
> Phase 4 note: trang này là bản ingest metadata + diễn giải ngắn. Cần curate sâu hơn nếu workflow này trở thành core.

## Mục Đích

Workflow này thuộc stage `Reflect`, dùng để ghi lại docs/learning/context sau khi ship.

Upstream description:

> Weekly engineering retrospective. Analyzes commit history, work patterns, and code quality metrics with persistent history and trend tracking. Team-aware with per-person contributions, praise, and growth areas. Use when asked for weekly retro, what shipped this week, or engineering retrospective.

## Khi Nào Dùng

- ship fast, fix fast

## Input Cần Có

- Mục tiêu task hoặc plan hiện tại.
- Repo/context liên quan.
- Constraint và acceptance criteria nếu có.
- Evidence expectation nếu workflow có side effect.

## Quy Trình Gợi Ý Cho Lucky Agent OS

1. Đọc source upstream nếu cần chạy workflow chính xác.
2. Xác định layer liên quan trong Lucky Agent OS.
3. Thu thập input/context trước khi hành động.
4. Thực thi workflow theo stage: Reflect.
5. Ghi output/evidence phù hợp.
6. Nếu học được pattern lặp lại, cập nhật skill/docs/memory.

## Heading Chính Từ Upstream

- Arguments
- Instructions
- Step 1: Gather Raw Data
- Step 2: Compute Metrics
- Step 3: Commit Time Distribution
- Step 4: Work Session Detection
- Step 5: Commit Type Breakdown
- Step 6: Hotspot Analysis
- Step 7: PR Size Distribution
- Step 8: Focus Score + Ship of the Week
- Step 9: Team Member Analysis
- Step 10: Week-over-Week Trends (if window >= 14d)

## Output Sau Khi Chạy

- Kết quả phù hợp với stage `Reflect`.
- Decision trail hoặc evidence nếu có hành động kiểm chứng.
- Next step rõ ràng cho workflow kế tiếp.

## Checklist Hoàn Thành

- [ ] Đã hiểu trigger và scope.
- [ ] Đã đọc source/context cần thiết.
- [ ] Đã tạo output kiểm chứng được.
- [ ] Đã nêu rủi ro hoặc phần chưa verify.

## Mapping Vào Lucky Agent OS

- Workflow Lifecycle
- Skill / Role Specialization
- Evidence Gate nếu workflow có test/deploy/browser/security side effect

## Source

- Repo: `garrytan/gstack`
- Path: `openclaw/skills/gstack-openclaw-retro/SKILL.md`
- URL: `https://github.com/garrytan/gstack/tree/main/openclaw/skills/gstack-openclaw-retro/SKILL.md`
