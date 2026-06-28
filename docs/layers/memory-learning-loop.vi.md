# Memory / Learning Loop

## Mục Đích

Chia memory thành core routing, searchable agent memory, skill procedures, project docs và wiki.

## Khi Nào Dùng

Dùng khi có lesson tái sử dụng, quyết định kiến trúc, bug pattern hoặc progress cần giữ.

## Nguồn / Workflow Đóng Góp

document-release, learn, context-save, context-restore, repo-harness

`repo-harness` nhấn mạnh memory nên nằm trong repo artifacts khi liên quan đến task: current status, active plan, handoff/resume, checks và review. Chat memory chỉ hỗ trợ, không phải source of truth cho workflow dài.

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
