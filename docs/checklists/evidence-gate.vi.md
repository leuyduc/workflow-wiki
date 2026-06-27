# Checklist: Evidence Gate

Dùng checklist này khi task có claim đã test, deploy, fix, review hoặc verify.

## Trước Khi Làm

- [ ] Xác định task type: UI, deploy, DevOps, cron, CLI/TUI, security, research, code review.
- [ ] Xác định evidence tối thiểu cần có.
- [ ] Xác định có cần tạo `.hermes/evidence/<date>-<slug>/` không.
- [ ] Xác định secret/token/log nhạy cảm cần tránh hoặc redact.

## Trong Khi Làm

- [ ] Chạy real surface phù hợp, không chỉ suy luận.
- [ ] Lưu hoặc tóm tắt command/output cần thiết.
- [ ] Với browser: screenshot, viewport, console, overflow/interaction.
- [ ] Với deploy: build, local curl, public curl, logs.
- [ ] Với cron: dry run, stdout behavior, cron listing, log path.
- [ ] Với security: scope, artifacts, findings, safe recommendations.

## Trước Khi Báo Done

- [ ] Evidence đủ để support claim.
- [ ] Nêu rõ phần chưa verify nếu có.
- [ ] Không leak secret trong final answer hoặc file.
- [ ] Nếu lesson tái sử dụng, cập nhật docs/skill/memory.

## Final Report Format

```text
Đã làm:
- ...

Bằng chứng:
- ...

Chưa kiểm tra / rủi ro còn lại:
- ...

Bước tiếp theo:
1. ...
```
