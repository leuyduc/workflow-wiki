# Checklist: Prompt Quality

Dùng khi viết, sửa hoặc tối ưu prompt cho Codex, Antigravity, Claude Code, Cursor, ChatGPT, Gemini, image/video tools hoặc agent khác.

## 1. Target Tool

- [ ] Target tool/model rõ ràng.
- [ ] Nếu target tool mơ hồ, hỏi lại trước khi viết prompt.
- [ ] Prompt style phù hợp tool: agentic IDE, reasoning model, browser agent, image model, search AI, etc.

## 2. Intent Extraction

- [ ] Task cụ thể, không dùng verb mơ hồ như “help”, “improve”, “fix everything”.
- [ ] Output format rõ.
- [ ] Constraints rõ.
- [ ] Input/context đi kèm rõ.
- [ ] Audience rõ nếu user-facing.
- [ ] Success criteria rõ.
- [ ] Examples có nếu format-critical.

## 3. Agentic Prompt Contract

Với Codex, Antigravity, Claude Code, Cursor hoặc coding agent:

- [ ] Starting state rõ.
- [ ] Target state rõ.
- [ ] File/directory scope rõ.
- [ ] Allowed actions rõ.
- [ ] Forbidden actions rõ.
- [ ] Stop conditions rõ.
- [ ] Checkpoints nếu task dài.
- [ ] Verification steps rõ.
- [ ] Final report format rõ.

## 4. Safety / Boundaries

- [ ] Có “ask before” cho destructive actions.
- [ ] Không cho phép xoá file, thêm dependency, đổi schema, deploy hoặc chạy command nguy hiểm nếu chưa được approve.
- [ ] Không yêu cầu bypass safety.
- [ ] Không đưa secret/token vào prompt.

## 5. Evidence / Done Criteria

- [ ] “Done when” rõ.
- [ ] Test/build/browser/deploy evidence được yêu cầu nếu liên quan.
- [ ] Nếu UI: yêu cầu screenshot/console/responsive.
- [ ] Nếu DevOps: yêu cầu local + public health check/logs.
- [ ] Nếu research: yêu cầu source URLs và confidence.

## 6. Token Efficiency Audit

- [ ] Mỗi câu trong prompt đều thay đổi output hoặc giảm rủi ro.
- [ ] Không giải thích theory nếu target tool chỉ cần instruction.
- [ ] Không thêm CoT cho reasoning-native models.
- [ ] Không gộp hai task độc lập vào một prompt.
- [ ] Không dùng reference mơ hồ như “cái đã nói ở trên” nếu prompt sẽ dùng ở session khác.

## Final Prompt Skeleton

```text
Target tool: <tool>

Context:
<starting state and relevant background>

Task:
<specific action>

Scope:
<files/areas allowed>

Constraints:
<must / must not>

Done when:
<binary success criteria>

Verification:
<tests/browser/build/logs/evidence>

Stop and ask before:
<dangerous or irreversible actions>

Final report:
<format>
```
