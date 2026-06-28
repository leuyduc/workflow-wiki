# Source Note - Prompt Master

> Source: `https://github.com/nidhinjs/prompt-master`  
> Classification: Supporting Source  
> Date checked: 2026-06-27  
> Role in Lucky Agent OS: prompt quality, target-tool routing, first-turn quality, and tool protocol.

## Tóm Tắt

`prompt-master` là một Claude skill chuyên tạo, sửa và tối ưu prompt cho nhiều AI tool. Giá trị chính không nằm ở việc viết prompt dài hơn, mà ở việc viết prompt đúng tool, đúng intent, ít token thừa, có scope boundary và success criteria.

Core insight:

```text
The best prompt is not the longest.
It's the one where every word is load-bearing.
```

## Vì Sao Hữu Ích Cho Lucky Agent OS

Workflow-wiki đã có `AGENTS.md` để agent hiểu cách làm việc. `prompt-master` bổ sung phần người dùng/agent nên mở task bằng prompt như thế nào để Codex, Antigravity, Claude Code hoặc các tool khác bắt đầu đúng ngay từ turn đầu.

Nó giúp giảm:

- prompt mơ hồ;
- scope quá rộng;
- agent tự ý làm quá nhiều;
- thiếu file/path anchor;
- thiếu stop condition;
- thiếu success criteria;
- re-prompt nhiều lần;
- dùng sai style cho từng tool/model.

## Mapping Vào Lucky Agent OS

| Layer | Contribution |
| --- | --- |
| Intent Routing | Target-tool-first: xác định prompt dành cho Claude Code, Codex, Antigravity, Cursor, image AI, etc. |
| Tool Protocol | Mỗi tool/model có prompt contract riêng. |
| Evidence Gate | Prompt phải có done criteria và verification steps. |
| Memory / Learning Loop | Memory block giúp chuyển session/tool mà không mất context. |
| Project Structure / Runbooks | File scope, do-not-touch list, stop conditions cho agentic IDE/coding agents. |

## Pattern 1 - Target Tool First

Rule quan trọng:

```text
Không viết prompt nếu chưa biết target tool.
```

Ví dụ:

- Claude Code/Codex: cần starting state, target state, file scope, forbidden actions, stop conditions, verification.
- Cursor/Windsurf: cần file path, function name, current behavior, desired change.
- Antigravity: cần outcome, artifact/plan before execution, browser verification, autonomy level.
- o3/reasoning models: prompt ngắn, không thêm chain-of-thought instruction.
- Gemini: cần grounding/citation/format lock cho factual tasks.
- Midjourney/image tools: cần descriptors/parameters/negative prompt, không prose dài.

## Pattern 2 - 9-Dimension Intent Extraction

Trước khi viết prompt, extract 9 dimension:

```text
Task
Target tool
Output format
Constraints
Input
Context
Audience
Success criteria
Examples
```

Thiếu dimension critical thì hỏi tối đa 3 câu hỏi làm rõ.

## Pattern 3 - Credit-Killing Patterns

`references/patterns.md` liệt kê 37 pattern làm tốn token và gây re-prompt. Những pattern quan trọng cho Lucky:

- vague task verb;
- two tasks in one prompt;
- no success criteria;
- over-permissive agent;
- emotional task description;
- build-the-whole-thing;
- implicit reference;
- no project context;
- undefined audience;
- missing output format;
- vague aesthetic adjectives;
- no scope boundary;
- no stop condition for agents;
- no file path for IDE AI;
- wrong template for tool;
- adding CoT to reasoning models;
- expecting inter-session memory;
- unlocked filesystem;
- no human review trigger;
- context rot on long sessions.

## Pattern 4 - Agentic Prompt Contract

Prompt cho coding agent nên có:

```text
Target tool
Starting state
Target state
File/directory scope
Allowed actions
Forbidden actions
Stop conditions
Checkpoints
Verification steps
Final report format
```

Ví dụ stop condition:

```text
Stop and ask before deleting files, adding dependencies, changing database schema, or running destructive commands.
```

## Pattern 5 - Token Efficiency Audit

Sau khi draft prompt:

- bỏ câu không thay đổi output;
- bỏ explanation nếu user không cần;
- giữ output contract;
- giữ constraints và success criteria;
- tránh prompt quá dài cho local/reasoning models.

## Không Nên Copy Y Hệt

- Không copy mọi model profile/version claim như truth vĩnh viễn.
- Không thêm chain-of-thought instruction cho reasoning-native models.
- Không biến mọi prompt thành prompt dài.
- Không dùng image/video prompt templates nếu task không liên quan.
- Không dùng prompt engineering để bypass safety hoặc authority boundary.

## Decision

Đưa vào workflow-wiki như Supporting Source và tạo:

- checklist `docs/checklists/prompt-quality.vi.md`;
- patch local skill `prompt-engineering`;
- link từ source evaluation và sidebar.

## Scorecard

| Criteria | Score | Note |
| --- | --- | --- |
| Relevance | 3/3 | Rất hợp first-turn quality và tool protocol. |
| Actionability | 3/3 | Có pipeline, dimension extraction, anti-patterns. |
| Evidence impact | 2/3 | Done criteria/verification improve evidence. |
| Safety | 2/3 | Cần lọc version claims và CoT/safety boundaries. |
| Stability | 2/3 | Principles ổn, tool profiles thay đổi theo thời gian. |
| Integration cost | 3/3 | Dễ thêm checklist/skill patch. |

Total: `15/18` -> Supporting Source mạnh.
