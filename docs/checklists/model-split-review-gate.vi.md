# Model Split Review Gate Checklist

Checklist này dùng cho workflow:

```text
Strong reasoning model plans -> fast model codes -> mandatory review -> evidence gate
```

## 1. Intake

- [ ] Repo/workdir đã xác định.
- [ ] Mục tiêu người dùng rõ.
- [ ] Constraints/risk đã ghi.
- [ ] Evidence cần có đã xác định.
- [ ] Nếu thiếu thông tin, đã hỏi tối đa 3 câu.

## 2. Plan Gate

Không chuyển sang code nếu chưa có:

- [ ] Architecture overview.
- [ ] Module boundary.
- [ ] Interface/API/type contract.
- [ ] Task breakdown theo slice nhỏ.
- [ ] Dependencies giữa slice.
- [ ] Risk register.
- [ ] Test plan.
- [ ] Acceptance criteria.
- [ ] Stop conditions.

## 3. Code Slice Gate

Mỗi slice giao cho code model phải có:

- [ ] Goal cụ thể.
- [ ] File paths được sửa.
- [ ] File paths không được sửa.
- [ ] Interface cần implement.
- [ ] Error handling requirement.
- [ ] Security/privacy requirement.
- [ ] Test/verification command.
- [ ] Done criteria.
- [ ] `BLOCKED` condition nếu thiếu thông tin.

## 4. Implementation Discipline

- [ ] Code model không tự đổi architecture.
- [ ] Không sửa ngoài scope.
- [ ] Không bỏ qua failing tests.
- [ ] Không hardcode secrets/tokens.
- [ ] Không log PII/token.
- [ ] Không thêm dependency nếu chưa được contract cho phép.

## 5. Verification

- [ ] Tests liên quan đã chạy.
- [ ] Typecheck/lint đã chạy nếu có.
- [ ] Build đã chạy nếu chạm build surface.
- [ ] Browser/devops verification đã chạy nếu task yêu cầu.
- [ ] Command + result được ghi lại.

## 6. Mandatory Review

Reviewer phải kiểm tra:

- [ ] Logic bug.
- [ ] Edge cases.
- [ ] Error handling.
- [ ] Security/auth/privacy.
- [ ] Input validation.
- [ ] Race/concurrency/resource leak.
- [ ] Backward compatibility.
- [ ] Test gaps.
- [ ] Scope drift.

## 7. Acceptance

Chỉ claim done khi:

- [ ] Code khớp contract.
- [ ] Review không còn blocking finding.
- [ ] Required checks pass hoặc lý do không chạy được được ghi rõ.
- [ ] Evidence path/commands có trong final report.
- [ ] Residual risk được nêu.
- [ ] Handoff/next loop được ghi nếu còn việc.

## Fallback

Nếu fast model fail quá 2 vòng:

- [ ] Chia slice nhỏ hơn; hoặc
- [ ] Chuyển sang stronger coding model; hoặc
- [ ] Dừng để human/strong reviewer quyết định.
