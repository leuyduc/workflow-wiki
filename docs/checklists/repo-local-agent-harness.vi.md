# Repo-local Agent Harness Checklist

Checklist này dùng để quyết định một repo có nên dùng workflow kiểu `repo-harness` hay không, và nếu có thì cần những artifact tối thiểu nào.

Mục tiêu không phải là cài nhiều tool. Mục tiêu là làm cho repo tự trả lời được:

```text
Agent đang làm gì?
Scope là gì?
Bằng chứng xong ở đâu?
Session sau tiếp tục từ đâu?
```

## 1. Fit Check

Chỉ cân nhắc repo-local harness khi có ít nhất 2 điều kiện đúng:

- [ ] Task/project kéo dài nhiều ngày hoặc nhiều session.
- [ ] Có nhiều agent, nhiều người, hoặc nhiều tool cùng làm repo.
- [ ] Repo đủ lớn để việc đọc lại context tốn token/thời gian.
- [ ] Có deploy/production/security impact.
- [ ] Cần review rõ ràng trước khi merge.
- [ ] Lucky thường yêu cầu “tiếp tục workflow loop” cho repo này.

Nếu không đạt, chỉ cần `AGENTS.md` + checklist nhẹ.

## 2. Minimum Repo Artifacts

Một repo AI-friendly tối thiểu nên có:

- [ ] `AGENTS.md` mô tả cách agent làm việc trong repo.
- [ ] `plans/` cho plan đã duyệt hoặc roadmap.
- [ ] `tasks/current.md` hoặc equivalent để orient session mới.
- [ ] `tasks/contracts/` cho task scope nếu task lớn/rủi ro.
- [ ] `tasks/reviews/` cho human review card hoặc review notes.
- [ ] `.ai/handoff/` hoặc `.ai/harness/handoff/` cho resume packet.
- [ ] `.ai/checks/` hoặc `.ai/harness/checks/` cho evidence/check output.

Không cần đủ mọi thứ ngay. Bắt đầu từ `AGENTS.md`, `plans/`, `handoff`, `checks`.

## 3. Task Contract

Trước task lớn, tạo contract ngắn có:

- [ ] Goal rõ ràng.
- [ ] Allowed paths.
- [ ] Forbidden paths.
- [ ] Expected file changes.
- [ ] Required verification commands.
- [ ] Evidence location.
- [ ] Done criteria.
- [ ] Rollback note.
- [ ] Human review trigger.

Nếu agent không thể điền contract, task chưa đủ rõ để làm tự động.

## 4. Handoff / Resume Packet

Cuối session hoặc trước khi compact, ghi handoff có:

- [ ] Current state.
- [ ] Files touched.
- [ ] Commands run and result.
- [ ] Known failures.
- [ ] Next exact step.
- [ ] Do not redo.
- [ ] Open questions.
- [ ] Residual risk.

Handoff tốt phải giúp agent session sau bắt đầu trong dưới 2 phút.

## 5. Evidence Gate

Không claim done nếu thiếu evidence phù hợp:

- [ ] Build/test/lint command đã chạy, hoặc nêu rõ không chạy được.
- [ ] Browser screenshot/console/viewport nếu UI.
- [ ] Curl/log/service status nếu deploy/devops.
- [ ] Review file hoặc self-review nếu multi-file/refactor.
- [ ] Risk/rollback note nếu có production impact.
- [ ] Evidence path được ghi trong final report.

## 6. Hook / Automation Boundary

Nếu dùng hooks hoặc tool automation:

- [ ] Hook chỉ là guardrail, không phải source of truth.
- [ ] Hook có thể tắt/rollback khi gây lỗi.
- [ ] Hook không đọc/in secrets.
- [ ] Hook không chạy destructive command tự động.
- [ ] Hook output ngắn, không spam session.
- [ ] User-level config được review trước khi apply.

## 7. Safe Adoption Protocol

Trước khi cài tool như `repo-harness` vào repo thật:

- [ ] Test trong sandbox repo.
- [ ] Chạy dry-run trước, ví dụ `repo-harness adopt --dry-run --json`.
- [ ] Review danh sách file sẽ tạo/sửa.
- [ ] Check git status sạch hoặc hiểu rõ dirty changes.
- [ ] Không chạy `curl | sh` nếu chưa review script hoặc chưa tin nguồn.
- [ ] Không apply user-level hooks khi chưa hiểu tác động lên Claude/Codex.

## 8. Done Definition

Repo-local harness được coi là hữu ích khi:

- [ ] Session mới đọc repo là biết task hiện tại.
- [ ] Agent biết scope được sửa và không được sửa.
- [ ] Có checklist/evidence để claim done.
- [ ] Có handoff để tiếp tục nếu bị ngắt.
- [ ] Human reviewer có một màn hình để quyết định pass/fail.
- [ ] Overhead ít hơn thời gian/context tiết kiệm được.

## Anti-patterns

- Cài harness nặng vào repo nhỏ chỉ vì nó hay.
- Tạo nhiều artifact nhưng không ai đọc.
- Để `tasks/current.md` stale rồi vẫn coi là source of truth.
- Cho hook tự động sửa hoặc deploy mà không có approval.
- Claim done dựa trên handoff text thay vì check/evidence.
- Biến plan thành nhật ký dài thay vì contract hành động.

## Lightweight Template

Nếu chưa muốn cài tool, dùng layout nhẹ:

```text
AGENTS.md
plans/
tasks/current.md
tasks/contracts/
tasks/reviews/
.ai/handoff/resume.md
.ai/checks/latest.md
```

Một repo có layout nhẹ nhưng được dùng đều đặn tốt hơn một harness phức tạp bị bỏ quên.
