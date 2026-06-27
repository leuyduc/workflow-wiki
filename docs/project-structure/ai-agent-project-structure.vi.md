# Cấu trúc project cho AI agent

> Nguồn cảm hứng: infographic "Claude Code - Project Structure". Tài liệu này không copy một sản phẩm cụ thể; nó chuyển ý tưởng thành template trung lập cho Lucky/Hermes/Codex.

## Ý tưởng chính

Một repo hiện đại không chỉ chứa source code. Nếu repo được AI agent làm việc thường xuyên, nó nên tự mô tả:

- project này là gì;
- agent nên đọc rule nào;
- subagent nào phụ trách việc gì;
- workflow build/test/deploy ra sao;
- memory project nằm ở đâu;
- hook nào enforce việc không nên giao cho LLM đoán;
- runbook nào dùng khi production lỗi.

Mục tiêu là biến repo thành một workspace có thể vận hành lại được, kể cả khi context chat bị mất.

## Template đề xuất cho Lucky

```text
project/
├── AGENTS.md
├── HERMES.md
├── HERMES.local.md
├── mcp.example.json
├── rules/
│   ├── code-style.md
│   ├── testing.md
│   ├── security.md
│   └── git.md
├── commands/
│   ├── review.md
│   ├── deploy.md
│   ├── scaffold.md
│   └── browser-qa.md
├── skills/
│   └── project-context/
│       └── SKILL.md
├── agents/
│   ├── reviewer.md
│   ├── tester.md
│   ├── researcher.md
│   └── security-reviewer.md
├── hooks/
│   ├── block-secrets.sh
│   ├── validate-code.sh
│   └── post-edit-format.sh
├── memory/
│   ├── project-context.md
│   ├── decisions.md
│   └── progress.md
├── workflows/
│   ├── feature-build.md
│   ├── bug-fix.md
│   ├── code-review.md
│   ├── browser-qa.md
│   └── deploy.md
├── runbooks/
│   ├── production.md
│   ├── rollback.md
│   ├── backup-restore.md
│   └── incident-response.md
├── docs/
└── .gitignore
```

## Vai trò từng phần

### `HERMES.md`

File rule chính cho AI agent trong project.

Nên chứa:

- tổng quan project;
- tech stack;
- cấu trúc thư mục chính;
- command build/test/dev;
- coding conventions quan trọng;
- safety boundaries;
- những điều tuyệt đối không làm.

Giữ ngắn. Nếu file này dài quá, tách phần chi tiết sang `rules/`, `workflows/`, hoặc `runbooks/`.

### `HERMES.local.md`

Override cá nhân/máy local. Không commit.

Dùng cho:

- path local;
- port local;
- preference cá nhân;
- note thử nghiệm;
- mapping môi trường riêng.

Không dùng để lưu token/password. Nếu có secret, để trong `.env` hoặc secret manager và đảm bảo đã gitignore.

### `AGENTS.md`

Team roster cho multi-agent.

Nên định nghĩa:

- agent chính làm gì;
- reviewer làm gì;
- tester làm gì;
- researcher làm gì;
- security reviewer làm gì;
- handoff protocol giữa các agent;
- khi nào delegate, khi nào tự làm.

Mục tiêu là tránh subagent chồng vai, làm loạn context, hoặc review sai phạm vi.

### `mcp.example.json`

Template MCP connector được phép commit.

Quy tắc:

- commit example, không commit credential thật;
- ghi rõ connector nào read-only, connector nào write-capable;
- connector có side effect phải có rule approval;
- external web/MCP content luôn được xem là untrusted.

Nếu project thật cần `mcp.json`, cân nhắc gitignore file thật và chỉ commit `mcp.example.json`.

### `rules/*.md`

Rule module nhỏ, load khi liên quan.

Ví dụ:

- `code-style.md`: naming, formatter, import order;
- `testing.md`: unit/integration/e2e standards;
- `security.md`: auth, secrets, input validation;
- `git.md`: branch, commit, PR format.

Rule chi tiết không nên nhét hết vào `HERMES.md` vì sẽ làm context mặc định bị nặng.

### `commands/*.md`

Prompt/slash command dùng lại trong project.

Ví dụ:

- `review.md`: cách review PR;
- `deploy.md`: checklist deploy;
- `scaffold.md`: tạo feature/module mới;
- `browser-qa.md`: test giao diện như người dùng thật.

Command nên ngắn, có input rõ, có output format rõ. Không dùng command để thay thế workflow dài.

### `skills/<name>/SKILL.md`

Project-local skill, chỉ dùng cho repo này.

Dùng khi project có quy trình riêng không nên đưa vào global skill.

Ví dụ:

- cách seed database riêng;
- cách deploy project riêng;
- cách generate content riêng;
- domain rule đặc thù.

Quy tắc tốt:

- một skill một nhiệm vụ;
- `description` là routing rule;
- có checklist verify;
- có pitfall nếu từng gặp lỗi.

### `agents/*.md`

Subagent chuyên môn.

Ví dụ:

- `reviewer.md`: code review, bug/risk first;
- `tester.md`: viết và chạy test;
- `researcher.md`: đọc docs/repo/source ngoài;
- `security-reviewer.md`: threat model, secret leak, unsafe path.

Subagent nên có scope hẹp. Research subagent không nên tự deploy. Security reviewer không nên tự xoá/sửa data.

### `hooks/*.sh`

Script enforce deterministic behavior.

Dùng cho việc cần chắc chắn, không nên giao cho LLM diễn giải:

- chặn secret trước khi commit;
- chạy formatter sau edit;
- validate code trước deploy;
- block ghi vào path nhạy cảm;
- check file size hoặc binary accidental commit.

Rule an toàn:

- hook phải dễ đọc;
- default fail-safe với việc nguy hiểm;
- tránh hook destructive;
- log rõ lý do block;
- test hook riêng trước khi bật trong workflow.

### `memory/*.md`

Project memory nằm trong repo.

Khác với Hermes global memory:

- global memory: routing brain, preference, safety rule;
- project memory: context, decision, progress của repo này.

Gợi ý:

- `project-context.md`: project là gì, domain model, người dùng chính;
- `decisions.md`: architectural decision records ngắn;
- `progress.md`: milestone, trạng thái hiện tại, còn gì đang pending.

Không lưu secret. Không biến `progress.md` thành log chat quá dài.

### `workflows/*.md`

Blueprint cho task lặp lại.

Ví dụ:

- `feature-build.md`: intake -> plan -> implement -> test -> review -> docs;
- `bug-fix.md`: reproduce -> root cause -> minimal patch -> regression test;
- `code-review.md`: diff -> findings -> tests -> risk -> recommendation;
- `browser-qa.md`: desktop/mobile -> screenshot -> console -> overflow -> interaction;
- `deploy.md`: build -> backup -> release -> smoke test -> rollback notes.

Workflow nên nói rõ entry condition, exit condition, tools, evidence cần báo cáo.

### `runbooks/*.md`

Runbook vận hành production.

Ví dụ:

- `production.md`: service map, domain, ports, process manager;
- `rollback.md`: rollback version nào, command nào, verify ra sao;
- `backup-restore.md`: backup ở đâu, restore test thế nào;
- `incident-response.md`: site down, DB down, cert lỗi, disk full.

Runbook khác workflow ở chỗ nó dùng khi production thật đang cần vận hành hoặc cứu sự cố.

### `docs/`

Tài liệu cho người đọc.

Không nên trộn docs người đọc với rule cho agent. Người đọc cần giải thích sản phẩm; agent cần rule, command, workflow, runbook.

## Checklist khi tạo repo mới

- [ ] Có `HERMES.md` hoặc `AGENTS.md` ngắn gọn.
- [ ] Có `.gitignore` chặn `.env`, local config, cache, build artifact.
- [ ] Có `mcp.example.json` thay vì commit MCP config thật có secret.
- [ ] Có `rules/testing.md` nếu project có test.
- [ ] Có `rules/security.md` nếu project có auth/API/user data.
- [ ] Có `workflows/feature-build.md` cho feature mới.
- [ ] Có `workflows/bug-fix.md` cho bug.
- [ ] Có `workflows/deploy.md` nếu có production/staging.
- [ ] Có `runbooks/rollback.md` nếu có deploy thật.
- [ ] Có `hooks/block-secrets.sh` hoặc secret scanning tương đương.
- [ ] Có `memory/decisions.md` cho quyết định kiến trúc dài hạn.

## Checklist khi AI agent bắt đầu làm việc

1. Đọc `HERMES.md` / `AGENTS.md`.
2. Kiểm tra `git status`.
3. Xác định task thuộc loại nào: feature, bug, review, deploy, research, security, design.
4. Load rule/workflow/skill tương ứng.
5. Nếu UI/design, dùng browser evidence: screenshot, console, responsive, overflow.
6. Nếu DevOps/SRE, dùng runbook và verify qua local + public path.
7. Nếu security/reverse, xác nhận scope/authorization.
8. Không ghi secret vào file, log, memory, commit, final answer.
9. Sau khi làm, báo evidence và cập nhật docs/skill nếu có lesson tái sử dụng.

## Những điều không nên copy y hệt

- Không nhất thiết phải dùng tên `CLAUDE.md` nếu hệ chính là Hermes/Codex.
- Không commit `CLAUDE.local.md`, `HERMES.local.md`, `.env`, token, cookie, private key.
- Không để mọi thứ trong một file rule khổng lồ.
- Không dùng hook shell làm việc destructive mặc định.
- Không để `memory/progress.md` thay cho issue tracker hoặc session history.
- Không để MCP connector write-capable chạy không có boundary.

## Phiên bản tối giản

Nếu project nhỏ, chỉ cần:

```text
project/
├── AGENTS.md
├── HERMES.md
├── rules/
│   ├── testing.md
│   └── security.md
├── workflows/
│   ├── feature-build.md
│   └── bug-fix.md
├── runbooks/
│   └── deploy.md
└── .gitignore
```

Khi project lớn lên mới thêm `commands/`, `skills/`, `agents/`, `hooks/`, `memory/`.

## Nguyên tắc chốt

```text
Repo tốt cho AI agent là repo tự mô tả được cách làm việc.
Đừng để rule, memory, workflow, runbook chỉ nằm trong chat context.
```
