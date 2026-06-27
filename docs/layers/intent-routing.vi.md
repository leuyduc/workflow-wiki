# Intent Routing

## Mục Đích

Agent phân loại task trước khi làm để chọn đúng workflow, skill, tool và mức evidence.

## Khi Nào Dùng

Dùng khi request mơ hồ, task có nhiều cách làm, hoặc cần chọn giữa quick/deep/design/devops/security/research.

## Nguồn / Workflow Đóng Góp

office-hours, plan-ceo-review, source-evaluation

## Cách Áp Dụng Cho Agent

1. Nhận diện task có chạm layer này không.
2. Load docs/workflow/skill liên quan.
3. Chọn evidence hoặc checklist phù hợp.
4. Sau khi làm xong, cập nhật docs/skill/memory nếu có lesson tái sử dụng.

## Checklist

- [ ] Layer này có được xét trong task phù hợp.
- [ ] Agent không dùng một workflow chung cho mọi việc.
- [ ] Evidence hoặc output của layer được nêu trong final report khi liên quan.

## Liên Quan

- [Core Thesis](../core-thesis.vi.md)
- [Source Evaluation](../source-evaluation.vi.md)
- [Workflow Index](../workflows/)
