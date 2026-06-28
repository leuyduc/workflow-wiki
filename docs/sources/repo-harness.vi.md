# repo-harness - Repo-local Agent Harness

## Nguồn

```text
URL: https://github.com/Ancienttwo/repo-harness
Checked: 2026-06-28
Observed version: 0.8.1
Package: repo-harness on npm
Classification: Supporting/Core-adjacent Source
```

`repo-harness` là một hệ thống CLI + hook + repo contract để biến một repository thành môi trường làm việc có trạng thái bền cho Claude/Codex và các coding agent.

Nó không phải framework web. Giá trị chính của nó là workflow architecture: plan, task contract, handoff, checks, review evidence và hook lifecycle đều được lưu trong repo thay vì chỉ nằm trong chat.

## Vì Sao Nguồn Này Hữu Ích

Lucky Agent OS cần một cách để biến câu nói như:

```text
tiếp tục workflow loop tiếp theo
```

thành hành động có source of truth rõ ràng. `repo-harness` cho thấy một implementation pattern khá đầy đủ:

```text
repo files > chat memory
plan > contract > worktree > verify > review > closeout
handoff file > vague recap
checks/evidence > verbal done claim
```

## Map Vào Lucky Agent OS

| Layer | Bài học từ repo-harness |
| --- | --- |
| Intent Routing | Tách `init`, `adopt`, `migrate`, `audit`, `repair`, `check`, `ship` thay vì một prompt chung. |
| Workflow Lifecycle | Chuẩn hóa vòng plan -> contract -> implement -> verify -> review -> closeout. |
| Skill / Role Specialization | Có command facade và skill router cho từng loại workflow. |
| Tool Protocol | Hooks và CLI command là protocol rõ hơn prompt tự do. |
| Evidence Gate | Check result, review file, human review card và run trace là điều kiện để claim done. |
| Memory / Learning Loop | Handoff/resume/current task nằm trong repo nên session sau đọc lại được. |
| Project Structure / Runbooks | Repo có `.ai/harness`, `.ai/context`, `plans/`, `tasks/`, `docs/`, `AGENTS.md`. |

## Pattern Nên Học

### 1. File-backed session state

Agent không nên phụ thuộc vào lịch sử chat dài. Repo nên có file để trả lời:

- đang làm task nào;
- plan nào đang active;
- contract nào giới hạn scope;
- checks nào đã chạy;
- bước tiếp theo là gì;
- risk/rollback còn lại là gì.

Áp dụng vào Lucky workflow:

```text
AGENTS.md
plans/
tasks/current.md
tasks/contracts/
tasks/reviews/
.ai/handoff/ hoặc .ai/harness/handoff/
.ai/checks/ hoặc .ai/harness/checks/
```

### 2. Task contract trước khi sửa lớn

Với task nhiều file hoặc rủi ro cao, agent cần contract ngắn trước khi code:

```text
Goal:
Allowed paths:
Forbidden paths:
Expected changes:
Verification:
Done criteria:
Rollback:
Human review trigger:
```

Contract này giúp chặn hai lỗi phổ biến:

- agent sửa lan sang vùng không liên quan;
- agent claim xong khi chưa có evidence.

### 3. Handoff/resume thật

Handoff tốt không phải recap dài. Nó phải giúp session sau hành động ngay:

```text
Current state:
Files touched:
Commands already run:
Known failures:
Next exact step:
Do not redo:
Residual risk:
```

### 4. Human Review Card

Reviewer không nên phải đọc toàn bộ chat để quyết định. Một card tốt cần:

```text
Verdict:
Change type:
Planned files vs actual files:
Commands passed:
External acceptance:
Residual risk:
Rollback path:
Reviewer action:
```

### 5. Hook lifecycle là guardrail, không phải source of truth

Hooks hữu ích để nhắc agent đọc context, kiểm tra scope, ghi trace hoặc cảnh báo security. Nhưng source of truth vẫn là repo files.

Áp dụng vào Lucky Agent OS:

```text
Hooks accelerate workflow.
Repo artifacts define workflow.
```

## Khi Nào Nên Dùng Pattern Này

Dùng repo-local harness khi:

- project kéo dài nhiều ngày;
- có nhiều agent hoặc nhiều session cùng làm;
- repo lớn, đọc lại context tốn token;
- cần review/audit trước khi merge;
- task có production/security/deploy impact;
- Lucky thường nói “tiếp tục workflow loop” và cần agent tự biết next step.

Không cần dùng khi:

- task một file nhỏ;
- prototype throwaway;
- repo chưa có git discipline;
- người dùng chỉ muốn hỏi đáp nhanh;
- overhead file/hook lớn hơn lợi ích.

## Đánh Giá Thực Dụng

### Dấu hiệu dùng được thật

- Có npm package `repo-harness@0.8.1`.
- Có CLI public surface: `init`, `adopt`, `doctor`, `security`, `mcp`, `run`.
- Có khoảng hơn 100 test files trong `tests/`.
- Có changelog dài và release checks.
- Có self-hosting: chính repo dùng `AGENTS.md`, plans, tasks, harness docs.

### Rủi ro

- Phụ thuộc Bun.
- Install/adopt có thể ghi nhiều file vào repo và user-level config.
- Hook runtime phức tạp; nếu stale có thể gây khó debug.
- `curl | sh` trong README không nên chạy mù trên máy chính.
- Có thể overkill cho repo nhỏ.

## Cách Thử An Toàn

Không chạy thẳng trên repo chính. Dùng repo sandbox trước:

```bash
mkdir /tmp/repo-harness-test
cd /tmp/repo-harness-test
git init
repo-harness adopt --dry-run --json
```

Chỉ cân nhắc apply khi đã hiểu output sẽ tạo/sửa gì.

## Scorecard

| Tiêu chí | Điểm | Lý do |
| --- | ---: | --- |
| Relevance | 3 | Rất khớp mục tiêu repo-local agent workflow. |
| Actionability | 3 | Có CLI, hooks, file layout, checks, review cards. |
| Evidence impact | 3 | Evidence/check/review là core flow. |
| Safety | 2 | Có security scan/fail-closed, nhưng hooks/config vẫn cần cẩn trọng. |
| Stability | 2 | Có release, nhưng surface còn đổi nhanh. |
| Integration cost | 1 | Nặng, cần Bun và có nhiều repo/user-level side effects. |
| Total | 14/18 | Nên đưa vào wiki, nhưng không cài mặc định. |

## Quyết Định

`repo-harness` nên được dùng như source kiến trúc cho Lucky Agent OS, đặc biệt cho repo-local workflow, handoff và evidence gate.

Không nên copy nguyên hệ thống vào mọi repo. Nên extract thành checklist và template nhẹ trước, rồi chỉ adopt tool thật ở repo sandbox hoặc repo lớn cần workflow governance.

## Output Từ Nguồn Này

- [Repo-local Agent Harness Checklist](../checklists/repo-local-agent-harness.vi.md)
- Có thể tạo skill local để đánh giá repo nào nên áp dụng harness pattern.

## Không Nên Copy Y Hệt

- Không áp dụng hook runtime vào mọi project nhỏ.
- Không chạy install script pipe-to-shell khi chưa review.
- Không để harness tạo nhiều artifact nếu team chưa dùng review/check discipline.
- Không coi generated `tasks/current.md` là authority cao hơn plan/contract/check source.
- Không biến wiki thành bản sao docs của `repo-harness`; chỉ giữ operating patterns.
