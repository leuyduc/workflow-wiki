# Evidence Gate

## Mục Đích

Không claim done nếu chưa có evidence phù hợp với bề mặt thật.

## Khi Nào Dùng

Dùng cho browser QA, deploy, cron, CLI/TUI, security, review, production fixes.

## Nguồn / Workflow Đóng Góp

oh-my-openagent-lessons, qa, design-review, ship, agent-evidence-gate

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
