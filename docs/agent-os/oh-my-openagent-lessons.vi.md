# Bài học từ oh-my-openagent

> Nguồn tham khảo: `https://github.com/code-yeongyu/oh-my-openagent`, đọc ở commit `db6ed60` trong bản clone tạm. Repo đang refactor mạnh, nên tài liệu này chỉ chắt lọc pattern hữu ích cho Lucky/Hermes/Codex, không xem cấu trúc upstream là ổn định.

## Tóm tắt

`oh-my-openagent` là một agent orchestration harness hơn là một plugin đơn giản. Ý tưởng chính là biến một coding agent đơn lẻ thành một hệ điều hành nhỏ cho AI development:

```text
intent detection
-> planning agent
-> plan gap review
-> execution orchestrator
-> specialist workers
-> hooks / tools / MCP
-> evidence-bound QA
-> PR / release workflow
```

Điểm đáng học nhất: agent không chỉ trả lời hoặc code. Agent phải có role, workflow, evidence, hook, memory, skill, runbook và safety gate.

## Những phần đã đọc

- `README.md`
- `AGENTS.md`
- `docs/guide/overview.md`
- `docs/guide/orchestration.md`
- `docs/reference/features.md`
- `docs/reference/web-terminal-visual-qa.md`
- cấu trúc `.agents/`, `.opencode/`, `.omo/`, `packages/`, `docs/`, `.github/workflows/`

## Pattern hữu ích

### 1. Multi-harness architecture

Repo đang đi theo hướng tách core logic khỏi adapter cho từng harness:

```text
core packages
-> MCP packages
-> skills / shared skills
-> harness adapters: OpenCode, Codex, future harnesses
-> platform / web / distribution
```

Bài học cho Hermes:

- không nên gắn workflow chặt với một UI hoặc provider;
- skill/router/runbook nên là core;
- Telegram, CLI, browser, Codex, Hermes TUI chỉ là adapter;
- cùng một workflow nên chạy được qua nhiều surface.

### 2. Planning và execution tách riêng

`oh-my-openagent` có mô hình:

```text
Prometheus: phỏng vấn, làm rõ scope, viết plan
Metis: bắt gap, hidden intention, ambiguity
Momus: review plan theo tiêu chí clarity / verification / context
Atlas: execute plan, delegate worker, verify kết quả
```

Bài học cho Lucky workflow:

```text
intake
-> clarify / interview
-> plan
-> plan review
-> execute
-> verify
-> evidence
-> docs / skill update
```

Task lớn không nên vừa nghĩ vừa sửa code liên tục. Tách phase giúp giảm drift và giảm sửa nhầm.

### 3. Category-based routing

Repo không chỉ route theo model name. Nó route theo category:

- `visual-engineering`
- `ultrabrain`
- `deep`
- `quick`
- `writing`
- `artistry`
- `unspecified-low`
- `unspecified-high`

Bài học cho Hermes:

```text
intent/category -> skill set -> tool set -> model/delegation strategy -> evidence requirement
```

Ví dụ cho Lucky:

| Category | Skill / workflow |
| --- | --- |
| `visual-engineering` | `design-taste-frontend` + `open-design` + `agent-browser` |
| `website-clone` | `ai-website-cloner-template` + browser QA |
| `devops-sre` | `devops-sre-runbook-router` |
| `security-review` | `reverse-skill-router` + `self-review-security` |
| `research` | `agent-reach` + source hygiene |
| `writing/docs` | workflow-wiki docs style |
| `quick` | direct edit + small verification |
| `deep` | plan + delegate + review + evidence |

### 4. Evidence gate

Trong `AGENTS.md`, repo nhấn rất mạnh:

```text
No evidence file == no QA == no commit == no push.
```

Dù tone upstream khá aggressive, nguyên tắc rất đúng.

Bài học cho Hermes:

- không claim "đã test" nếu không có output/evidence;
- không claim browser QA nếu không có screenshot/console/viewport;
- không claim deploy OK nếu chưa check local + public path;
- không claim security clean nếu chưa scan đúng scope;
- evidence nên lưu thành file khi task quan trọng.

Gợi ý layout:

```text
.hermes/evidence/<YYYYMMDD>-<slug>/
├── summary.md
├── commands.txt
├── test-output.txt
├── logs/
├── screenshots/
└── verification.md
```

### 5. QA không chỉ là test xanh

Repo phân biệt rõ:

- typecheck không phải QA đầy đủ;
- unit test không thay thế real harness smoke;
- TUI/plugin/hook phải drive real surface;
- thay đổi hook phải prove event fired;
- phải chứng minh không chạm real config/state khi chạy sandbox.

Bài học cho Lucky:

- web UI: build + browser screenshot + console + responsive;
- DevOps: local curl + nginx Host header + public curl + logs;
- CLI/TUI: run command + capture terminal + verify text/exit code;
- cron/watchdog: dry run + stdout behavior + cron target;
- security/reverse: scope + artifact + report.

### 6. Terminal visual QA

`docs/reference/web-terminal-visual-qa.md` mô tả cách biến terminal/TUI transcript thành evidence:

```text
terminal.txt
terminal-ansi.txt
terminal.html
terminal.png
metadata.json
```

Bài học cho Hermes:

- TUI/CLI output cũng có thể visual QA như web;
- trước khi lưu screenshot/log phải redact token/cookie/header;
- evidence phải có metadata và cleanup receipt;
- không rely vào screenshot để che secret.

Pattern này đáng biến thành script/skill riêng sau này.

### 7. Read-only specialist agents

Một số agent upstream bị giới hạn quyền:

- `Oracle`: kiến trúc/review, read-only;
- `Librarian`: docs/research, không write;
- `Explore`: grep/codebase exploration, không write;
- `Momus`: plan reviewer, không edit.

Bài học cho Hermes:

```text
researcher/reviewer/architect/security-reviewer should be read-only by default.
executor/deployer are separate roles with stricter gates.
```

Điều này giảm rủi ro multi-agent tự ý sửa quá nhiều.

### 8. Background agents và team mode có giới hạn

Repo có background agents, tmux visualization và team mode với limit:

- max members;
- max wall-clock minutes;
- max messages per run;
- mailbox size;
- per-member worktrees;
- task list có claim/lock.

Bài học:

- multi-agent phải có bounds;
- parallelism cần task ownership rõ;
- mỗi agent cần working directory/state riêng;
- team mode không nên bật mặc định cho mọi việc.

### 9. Three-tier MCP system

Repo chia MCP thành nhiều tầng:

```text
built-in MCP
project .mcp.json
skill-embedded MCP
```

Bài học cho Hermes:

- MCP phải có permission model theo nguồn;
- project MCP không nên tự mở rộng quyền secret/env;
- skill-embedded MCP cần audit kỹ hơn;
- external web/MCP output luôn là untrusted data.

### 10. Config loading pipeline

Repo dùng pipeline kiểu:

```text
provider
-> plugin components
-> agents
-> tools
-> MCPs
-> commands
```

Bài học:

- thứ tự load config nên được tài liệu hóa;
- user config và project config phải merge có rule rõ;
- credential/env allowlist phải user-only hoặc admin-only;
- config migration phải idempotent và có backup.

### 11. Continuation after compaction

Repo có hook liên quan session compacting và auto-continue.

Bài học cho Hermes:

- trước compact phải preserve todo/current plan/evidence path;
- sau compact phải có resume instruction;
- long-running workflow không nên mất state vì context window.

### 12. Hash-anchored edit

Repo có ý tưởng hashline edit: edit theo line/content hash để tránh stale-line error.

Bài học:

- patch/edit nên validate old content;
- file reference nên có anchor ổn định;
- sau edit cần diff và syntax/test verification;
- tránh broad replace trên HTML/JS/YAML.

## Áp dụng ngay cho Hermes/Lucky

### Skill cần có: `agent-evidence-gate`

Dùng khi task có rủi ro hoặc side effect:

- deploy;
- DevOps/SRE;
- browser QA;
- security/reverse;
- CLI/TUI install/debug;
- PR/code review;
- workflow thay đổi nhiều file;
- cron/watchdog.

Rule chính:

```text
Nếu không có evidence phù hợp, không được nói task đã verify xong.
```

### Workflow cho task lớn

```text
1. Classify intent/category.
2. Load skill tương ứng.
3. Nếu task lớn: plan trước.
4. Review plan bằng checklist clarity / verification / context.
5. Execute nhỏ từng bước.
6. Store evidence nếu task quan trọng.
7. Verify qua real surface.
8. Report: changed / evidence / residual risk / next step.
9. Update docs/skill nếu lesson tái sử dụng.
```

### Evidence matrix

| Task type | Evidence tối thiểu |
| --- | --- |
| Web UI | screenshot desktop/mobile, console errors, overflow check, build result |
| Deploy | build log, local curl, nginx Host header curl, public curl, service logs |
| CLI/TUI | command output, exit code, terminal capture, config isolation proof |
| Cron/watchdog | dry run, stdout behavior, cron listing, log path |
| Security/reverse | scope/authorization, artifacts inspected, findings, safe recommendations |
| Code review | diff scope, findings with file refs, test gap, residual risk |
| Research | source URLs, extracted vs inferred claims, confidence |

## Không nên copy y hệt

- Không copy tone aggressive trong upstream `AGENTS.md`.
- Không install whole system vào Hermes khi chưa có nhu cầu rõ.
- Không copy agent names/branding như Sisyphus/Prometheus/Atlas nếu không cần.
- Không tin tuyệt đối model names hoặc roadmap vì repo đang refactor.
- Không bật team mode/multi-agent phức tạp mặc định.
- Không để MCP/project config có quyền cao mà thiếu review.

## Checklist cải tiến Hermes từ repo này

- [ ] Có category router rõ cho task type.
- [ ] Có evidence gate cho task quan trọng.
- [ ] Có `.hermes/evidence/` convention.
- [ ] Có plan-review-execute workflow cho task lớn.
- [ ] Có read-only role cho researcher/reviewer/architect.
- [ ] Có DevOps/SRE runbook evidence matrix.
- [ ] Có browser QA evidence format.
- [ ] Có terminal/TUI evidence format.
- [ ] Có config/MCP permission tiers.
- [ ] Có compaction/resume protocol cho long task.
- [ ] Có rule không commit/persist secret.

## Kết luận

`oh-my-openagent` đáng học ở tầng hệ thống vận hành agent:

```text
agent OS = intent router + specialists + hooks + MCP + evidence + workflows + runbooks
```

Đây là hướng phù hợp với Lucky: không chỉ train AI bằng kiến thức rời rạc, mà biến kiến thức thành một hệ điều hành workflow có thể tái sử dụng, kiểm chứng và mở rộng.
