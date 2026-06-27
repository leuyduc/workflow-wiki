# Browse

> Source: `https://github.com/garrytan/gstack/tree/main/browse/SKILL.md`  
> Stage: `Test`  
> Specialist: `QA Lead`  
> Phase 4 note: trang này là bản ingest metadata + diễn giải ngắn. Cần curate sâu hơn nếu workflow này trở thành core.

## Mục Đích

Workflow này thuộc stage `Test`, dùng để kiểm chứng bằng test/browser/benchmark.

Upstream description:

> Fast headless browser for QA testing and site dogfooding. (gstack)

## Khi Nào Dùng

- test the
site
- PLAN MODE EXCEPTION — ALWAYS RUN
- There's code here — `/qa` to see it work, or `/investigate` if something's off.
- Unshipped work on this branch — `/review` then `/ship`.
- Uncommitted changes — `/review` before committing.

## Input Cần Có

- Mục tiêu task hoặc plan hiện tại.
- Repo/context liên quan.
- Constraint và acceptance criteria nếu có.
- Evidence expectation nếu workflow có side effect.

## Quy Trình Gợi Ý Cho Lucky Agent OS

1. Đọc source upstream nếu cần chạy workflow chính xác.
2. Xác định layer liên quan trong Lucky Agent OS.
3. Thu thập input/context trước khi hành động.
4. Thực thi workflow theo stage: Test.
5. Ghi output/evidence phù hợp.
6. Nếu học được pattern lặp lại, cập nhật skill/docs/memory.

## Heading Chính Từ Upstream

- When to invoke this skill
- Preamble (run first)
- Plan Mode Safe Operations
- Skill Invocation During Plan Mode
- First-run guidance (one-time)
- Skill routing
- Artifacts Sync (skill start)
- Model-Specific Behavioral Patch (claude)
- Voice
- Completion Status Protocol
- Operational Self-Improvement
- Telemetry (run last)

## Output Sau Khi Chạy

- Kết quả phù hợp với stage `Test`.
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
- Path: `browse/SKILL.md`
- URL: `https://github.com/garrytan/gstack/tree/main/browse/SKILL.md`
