# Prompt: Dùng Lucky Workflow Với Agent Khác

Dùng prompt này khi mở Codex, Antigravity, Claude Code, OpenCode hoặc agent khác.

```text
Đọc AGENTS.md trong repo workflow-wiki trước:
https://github.com/leuyduc/workflow-wiki

Sau đó làm việc theo Lucky Agent OS:
- classify task theo intent/category;
- đọc docs/core-thesis.vi.md và docs/source-evaluation.vi.md nếu cần hiểu model;
- route workflow/skill phù hợp;
- nếu UI/design thì dùng browser evidence;
- nếu DevOps/deploy thì dùng runbook/evidence;
- nếu security/reverse thì xác nhận scope/authorization;
- không claim done nếu chưa có evidence;
- báo cáo bằng tiếng Việt.

Task của tôi là: <task>
```

## Local Repo Prompt

```text
Before doing anything, read AGENTS.md and follow Lucky Agent OS.
Then inspect the repo, classify the task, choose the workflow, execute, verify, and report evidence.
Task: <task>
```
