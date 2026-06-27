# Plan Tune

> Source: `https://github.com/garrytan/gstack/tree/main/plan-tune/SKILL.md`  
> Stage: `Plan`  
> Specialist: `Workflow Operator`  
> Phase 4 note: trang này là bản ingest metadata + diễn giải ngắn. Cần curate sâu hơn nếu workflow này trở thành core.

## Mục Đích

Workflow này thuộc stage `Plan`, dùng để biến intent thành kế hoạch có thể review/execute.

Upstream description:

> Self-tuning question sensitivity + developer psychographic for gstack (v1: observational). (gstack)

## Khi Nào Dùng

- what questions have I been asked
- plan-tune
- PLAN MODE EXCEPTION — ALWAYS RUN
- There's code here — `/qa` to see it work, or `/investigate` if something's off.
- Unshipped work on this branch — `/review` then `/ship`.

## Input Cần Có

- Mục tiêu task hoặc plan hiện tại.
- Repo/context liên quan.
- Constraint và acceptance criteria nếu có.
- Evidence expectation nếu workflow có side effect.

## Quy Trình Gợi Ý Cho Lucky Agent OS

1. Đọc source upstream nếu cần chạy workflow chính xác.
2. Xác định layer liên quan trong Lucky Agent OS.
3. Thu thập input/context trước khi hành động.
4. Thực thi workflow theo stage: Plan.
5. Ghi output/evidence phù hợp.
6. Nếu học được pattern lặp lại, cập nhật skill/docs/memory.

## Heading Chính Từ Upstream

- When to invoke this skill
- Preamble (run first)
- Plan Mode Safe Operations
- Skill Invocation During Plan Mode
- First-run guidance (one-time)
- Skill routing
- AskUserQuestion Format
- Tool resolution (read first)
- When AskUserQuestion is unavailable or a call fails
- Format
- Handling 5+ options — split, never drop
- Self-check before emitting

## Output Sau Khi Chạy

- Kết quả phù hợp với stage `Plan`.
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
- Path: `plan-tune/SKILL.md`
- URL: `https://github.com/garrytan/gstack/tree/main/plan-tune/SKILL.md`
