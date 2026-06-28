# Tool Protocol

## Mục Đích

Luật dùng tool: đọc trước khi sửa, search trước khi đoán, browser cho visual, không destructive nếu chưa được phép.

## Khi Nào Dùng

Dùng cho mọi task có file/code/web/server/tool side effect.

## Nguồn / Workflow Đóng Góp

AGENTS, hermes-evolution, devops-sre-runbook-router

Supporting source: [System Design Notes](../sources/system-design-notes.vi.md) bổ sung protocol estimate assumptions trước khi chọn architecture.

Supporting source: [Prompt Master](../sources/prompt-master.vi.md) bổ sung target-tool-first prompting và prompt quality checklist.

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
