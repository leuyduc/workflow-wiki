# Lucky Agent OS Layers

7 layer này là xương sống model-first của workflow-wiki. Nguồn bên ngoài chỉ được đưa vào core nếu cải thiện ít nhất một layer.

| Layer | Mục đích | Khi dùng |
|---|---|---|
| [Intent Routing](./intent-routing.vi.md) | Agent phân loại task trước khi làm để chọn đúng workflow, skill, tool và mức evidence. | Dùng khi request mơ hồ, task có nhiều cách làm, hoặc cần chọn giữa quick/deep/design/devops/security/research. |
| [Workflow Lifecycle](./workflow-lifecycle.vi.md) | Vòng đời Think -> Plan -> Build -> Review -> Test -> Ship -> Reflect giúp agent không nhảy thẳng vào code. | Dùng cho task lớn, nhiều bước, hoặc cần có dấu vết quyết định. |
| [Skill / Role Specialization](./skill-role-specialization.vi.md) | Tách vai trò như founder, engineering manager, designer, QA, reviewer, release engineer để giảm blind spot. | Dùng khi một agent đơn lẻ dễ bỏ sót góc nhìn sản phẩm/kỹ thuật/design/security. |
| [Tool Protocol](./tool-protocol.vi.md) | Luật dùng tool: đọc trước khi sửa, search trước khi đoán, browser cho visual, không destructive nếu chưa được phép. | Dùng cho mọi task có file/code/web/server/tool side effect. |
| [Evidence Gate](./evidence-gate.vi.md) | Không claim done nếu chưa có evidence phù hợp với bề mặt thật. | Dùng cho browser QA, deploy, cron, CLI/TUI, security, review, production fixes. |
| [Memory / Learning Loop](./memory-learning-loop.vi.md) | Chia memory thành core routing, searchable agent memory, skill procedures, project docs và wiki. | Dùng khi có lesson tái sử dụng, quyết định kiến trúc, bug pattern hoặc progress cần giữ. |
| [Project Structure / Runbooks](./project-structure-runbooks.vi.md) | Repo tự mô tả cách agent nên làm việc: AGENTS.md, rules, workflows, runbooks, memory, hooks, evidence. | Dùng khi tạo repo mới, chuẩn hóa project, deploy/runbook hoặc handoff cho agent khác. |
