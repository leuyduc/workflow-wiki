# Project Structure / Runbooks

## Mục Đích

Repo tự mô tả cách agent nên làm việc: AGENTS.md, rules, workflows, runbooks, memory, hooks, evidence.

## Khi Nào Dùng

Dùng khi tạo repo mới, chuẩn hóa project, deploy/runbook hoặc handoff cho agent khác.

## Nguồn / Workflow Đóng Góp

ai-agent-project-structure, repo-harness, ship, document-release, devops docs

`repo-harness` bổ sung pattern repo-local harness: `AGENTS.md`, `plans/`, `tasks/`, `.ai/harness`, handoff, checks và review cards. Không cần copy nguyên tool vào mọi repo, nhưng nên học cách làm repo tự mô tả trạng thái workflow.

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
