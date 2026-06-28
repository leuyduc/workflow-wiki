# Model Split Workflow - GPT-5.5 Plan, Gemini Flash Code, Review Gate

Workflow này dùng khi muốn tách vai trò model theo điểm mạnh:

```text
GPT-5.5 = architect / planner
Gemini 3.5 Flash = fast implementation worker
Reviewer = correctness, security, maintainability, evidence gate
```

Tên model có thể thay bằng model thực tế đang có trong toolchain. Nguyên tắc quan trọng không phải tên model, mà là tách pha:

```text
Think deeply -> define contract -> code fast -> verify hard -> learn back
```

## Khi Nào Dùng

Dùng workflow này cho:

- feature nhiều module;
- refactor có rủi ro;
- hệ thống cần interface rõ trước khi code;
- task có thể chia thành nhiều slice độc lập;
- cần tốc độ code nhưng vẫn giữ kiến trúc và review.

Không nên dùng cho:

- bug một dòng;
- task cần khám phá liên tục trong codebase;
- code security-critical mà chưa có reviewer mạnh;
- khi plan chưa đủ rõ để giao cho code model.

## Vai Trò

| Pha | Model / Role | Nhiệm vụ |
| --- | --- | --- |
| Plan | GPT-5.5 hoặc strongest reasoning model | kiến trúc, module boundary, interface, risks, task contracts |
| Code | Gemini 3.5 Flash hoặc fast coding model | implement đúng contract, không tự mở rộng scope |
| Review | GPT-5.5 / Codex / human / specialized reviewer | review bug, security, error handling, tests, maintainability |
| Verify | Tooling thật | test, build, lint, browser/devops evidence |
| Reflect | Hermes/workflow wiki/skill memory | lưu lesson, update checklist nếu reusable |

## Operating Contract

Không chuyển từ Plan sang Code nếu thiếu contract.

Minimum contract cho mỗi slice:

```text
Goal:
Files allowed:
Files forbidden:
Interfaces/types to implement:
Input/output behavior:
Error handling requirements:
Security/privacy requirements:
Test requirements:
Acceptance criteria:
Stop conditions:
Review focus:
```

## Quy Trình

### 1. Intake

Agent nhận yêu cầu và xác định:

- mục tiêu người dùng;
- repo/workdir;
- constraints;
- deadline/tốc độ mong muốn;
- mức risk: low / medium / high;
- evidence cần có.

Nếu thiếu thông tin quan trọng, hỏi tối đa 3 câu.

### 2. GPT-5.5 Plan

Reasoning model tạo plan với output bắt buộc:

- architecture overview;
- module map;
- data flow;
- interface/type/API contract;
- migration/backward compatibility nếu có;
- task breakdown theo slice nhỏ;
- dependencies giữa slice;
- risk register;
- test plan;
- done definition.

Plan tốt phải đủ để code model làm mà không phải đoán ý.

### 3. Plan Review Trước Khi Code

Trước khi giao cho Gemini Flash, kiểm tra plan:

- có scope không;
- có interface rõ không;
- task có nhỏ đủ không;
- có test/evidence không;
- có security/error handling không;
- có fallback/rollback không.

Nếu plan mơ hồ, quay lại GPT-5.5 để refine.

### 4. Gemini Flash Code

Fast model chỉ nhận một slice tại một thời điểm.

Prompt cho code model phải có:

- file paths cụ thể;
- contract cụ thể;
- không được sửa ngoài scope;
- expected output;
- verification command;
- stop condition;
- final summary format.

Code model không nên tự thiết kế lại kiến trúc. Nếu gặp thiếu thông tin, nó phải dừng và báo `BLOCKED`, không bịa.

### 5. Local Verification

Sau mỗi slice:

- chạy test liên quan;
- chạy typecheck/lint nếu có;
- build nếu chạm build surface;
- browser/devops verification nếu task yêu cầu;
- ghi command + result.

Không gộp nhiều slice rồi mới verify nếu rủi ro cao.

### 6. Mandatory Code Review

Review là bắt buộc dù code do model nào viết.

Reviewer tập trung vào:

- logic bug;
- edge cases;
- error handling;
- auth/security/privacy;
- input validation;
- race condition/concurrency;
- resource leak;
- backward compatibility;
- test gaps;
- over-engineering hoặc scope drift.

Nếu reviewer tìm issue nghiêm trọng, quay lại pha Code với patch contract nhỏ.

### 7. Acceptance Gate

Chỉ claim done khi:

- implementation khớp contract;
- required tests/build pass hoặc lý do không chạy được được ghi rõ;
- review không còn blocking finding;
- evidence path/commands được báo cáo;
- risk còn lại được nêu.

### 8. Reflect / Learning Loop

Sau task lớn:

- cập nhật docs nếu interface/runbook thay đổi;
- lưu lesson vào skill/memory nếu pattern tái sử dụng;
- tạo handoff nếu còn pending work;
- ghi slice nào nên tiếp tục ở workflow loop sau.

## Những Ý Cần Bổ Sung So Với Plan Ban Đầu

### A. Planner không chỉ viết plan, phải viết contract

Nếu chỉ có “kiến trúc tổng thể” thì Gemini Flash vẫn phải đoán. GPT-5.5 cần xuất task contract đủ chặt cho từng slice.

### B. Thêm Risk Register

Mỗi plan cần bảng:

| Risk | Impact | Mitigation | Review focus |
| --- | --- | --- | --- |

Đặc biệt cho error handling và security vì đây thường là điểm yếu của AI-generated code.

### C. Thêm Interface Freeze

Trước khi code, freeze các interface chính:

- function signatures;
- API routes;
- event names;
- data schemas;
- database migration shape;
- public component props.

Nếu cần đổi interface trong lúc code, quay lại planner/reviewer trước.

### D. Thêm Stop Condition

Fast code model phải biết khi nào dừng:

```text
Stop if required file is missing.
Stop if contract conflicts with existing architecture.
Stop if implementation requires security-sensitive decision.
Stop if tests fail for unrelated reasons after inspection.
```

### E. Thêm Security/Error Handling Checklist

Không để code model tối ưu tốc độ mà bỏ qua:

- validation;
- authz/authn;
- secrets handling;
- logging không lộ PII/token;
- timeout/retry;
- failure modes;
- rollback.

### F. Thêm Handoff Giữa Model

Output của GPT-5.5 phải đủ cho Gemini. Output của Gemini phải đủ cho reviewer.

```text
Planner -> Code: contract, files, tests, risk
Code -> Reviewer: changed files, decisions, tests, known gaps
Reviewer -> Code: findings, exact fix scope
```

### G. Thêm Fallback

Nếu Gemini Flash làm sai quá 2 vòng:

- chuyển slice đó về stronger coding/reasoning model;
- hoặc chia nhỏ slice hơn;
- hoặc human review trước khi tiếp tục.

## Anti-patterns

- Đưa prompt mơ hồ cho fast model rồi hy vọng nó tự hiểu.
- Cho code model sửa toàn repo.
- Bỏ review vì code chạy được.
- Dùng model mạnh để code toàn bộ mà không có contract.
- Dùng model nhanh để quyết định architecture/security.
- Không ghi evidence và handoff.
- Review chỉ nhìn style, không nhìn error/security/test gaps.

## Final Report Format

```text
Đã làm:
- ...

Plan source:
- model/role used
- contract path hoặc summary

Code slices:
- slice, files changed, model/role used

Bằng chứng:
- command/test/build/browser evidence

Review:
- reviewer, findings, fixed/not fixed

Rủi ro còn lại:
- ...

Next loop:
- ...
```
