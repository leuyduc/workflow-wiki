# Gstack Openclaw Investigate

> Source: `https://github.com/garrytan/gstack/tree/main/openclaw/skills/gstack-openclaw-investigate/SKILL.md`  
> Stage: `Review`  
> Specialist: `Staff Engineer`  
> Phase 4 note: trang này là bản ingest metadata + diễn giải ngắn. Cần curate sâu hơn nếu workflow này trở thành core.

## Mục Đích

Workflow này thuộc stage `Review`, dùng để kiểm tra chất lượng/rủi ro trước khi ship.

Upstream description:

> Use when asked to debug, fix a bug, investigate an error, or do root cause analysis, and when users report errors, stack traces, unexpected behavior, or say something stopped working.

## Khi Nào Dùng

- Xem description/source upstream để xác định trigger cụ thể.

## Input Cần Có

- Mục tiêu task hoặc plan hiện tại.
- Repo/context liên quan.
- Constraint và acceptance criteria nếu có.
- Evidence expectation nếu workflow có side effect.

## Quy Trình Gợi Ý Cho Lucky Agent OS

1. Đọc source upstream nếu cần chạy workflow chính xác.
2. Xác định layer liên quan trong Lucky Agent OS.
3. Thu thập input/context trước khi hành động.
4. Thực thi workflow theo stage: Review.
5. Ghi output/evidence phù hợp.
6. Nếu học được pattern lặp lại, cập nhật skill/docs/memory.

## Heading Chính Từ Upstream

- Iron Law
- Phase 1: Root Cause Investigation
- Phase 2: Pattern Analysis
- Phase 3: Hypothesis Testing
- Phase 4: Implementation
- Phase 5: Verification & Report
- Important Rules

## Output Sau Khi Chạy

- Kết quả phù hợp với stage `Review`.
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
- Path: `openclaw/skills/gstack-openclaw-investigate/SKILL.md`
- URL: `https://github.com/garrytan/gstack/tree/main/openclaw/skills/gstack-openclaw-investigate/SKILL.md`
