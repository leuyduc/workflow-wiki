# Workflow Wiki

Workflow Wiki là một trang wiki kiêm sổ tay vận hành cho các dự án có dùng AI, team, vai trò công việc và playbook theo ngành. Nguồn kiến thức đầu tiên của dự án là repository `gstack` của Garry Tan.

## Mục Đích

Dự án này biến kiến thức workflow thành một website dễ đọc, dễ tìm và dễ điều hướng:

```text
gstack knowledge source
-> ingest / parse / normalize
-> generate structured docs
-> publish as wiki
-> search / browse by stage, role, workflow, prompt, checklist
```

Trang này giúp Lucky và cộng sự hiểu cách vận hành workflow dự án qua nhiều công việc, vai trò và ngành nghề khác nhau.

## Nên Đọc Gì Trước

Nếu mới vào dự án, nên đọc theo thứ tự này:

1. `AGENTS.md` - entrypoint cho Codex, Antigravity, Hermes hoặc agent khác đọc trước khi làm việc.
2. `README.vi.md` - hiểu nhanh mục tiêu của dự án.
3. `docs/gstack-overview.vi.md` - hiểu tổng quan `gstack` là gì và vì sao dùng làm nguồn dữ liệu.
4. `docs/hermes-evolution/from-fable-5-prompt.vi.md` - xem bài học có thể áp dụng để tiến hóa Hermes.
5. `docs/agent-os/oh-my-openagent-lessons.vi.md` - xem bài học agent OS, orchestration và evidence gate từ `oh-my-openagent`.
6. `docs/project-structure/ai-agent-project-structure.vi.md` - xem template cấu trúc repo cho AI agent.
7. `PLAN.md` - hiểu roadmap tổng thể, MVP scope và các phase tiếp theo.
8. `ARCHITECTURE.md` - hiểu kiến trúc ingest/sync/publish của wiki.
9. `docs/stages/lifecycle.md` - hiểu vòng đời workflow: Think -> Plan -> Build -> Review -> Test -> Ship -> Reflect.
10. `docs/workflows/index.md` - xem danh sách workflow ưu tiên.
11. `docs/prompts/index.md` - xem prompt mẫu để ingest, QA và chuyển skill thành workflow page.
12. `docs/checklists/index.md` - xem checklist MVP, workflow page và browser QA.
13. `scripts/sync-gstack.ts` - phần này dành cho AI/dev đọc để hiểu hướng sync dữ liệu từ `gstack`.

Tóm lại: người đọc nên bắt đầu từ `README.vi.md` và `docs/gstack-overview.vi.md`; AI/dev muốn build tiếp thì đọc thêm `PLAN.md`, `ARCHITECTURE.md` và `scripts/sync-gstack.ts`.

## Định Hướng Ban Đầu

- Làm MVP dạng static docs/wiki trước.
- Dùng `gstack` làm nguồn kiến thức workflow đầu tiên.
- Chuẩn hóa mỗi skill thành một trang workflow gồm input, quy trình, output, checklist và workflow liên quan.
- Sau đó mở rộng thêm AI search, hướng dẫn theo vai trò, playbook theo ngành và workflow graph.

## Stack Đề Xuất

MVP:

- VitePress
- Markdown
- TypeScript sync scripts
- GitHub source control
- Static deploy

Tương lai:

- AI search / RAG
- Workflow graph
- Admin import pipeline
- Điều hướng theo vai trò

## Lệnh Hữu Ích

```bash
npm install
npm run dev
npm run build
npm run sync:gstack
```

## Nguồn Dữ Liệu

Nguồn kiến thức chính:

```text
https://github.com/garrytan/gstack
```

Tài liệu tổng quan tiếng Việt:

```text
docs/gstack-overview.vi.md
```

## Ghi Chú Ngôn Ngữ

- Tài liệu dành cho người đọc nên ưu tiên tiếng Việt.
- Các prompt, schema, script, frontmatter hoặc nội dung để AI/tool đọc có thể giữ tiếng Anh nếu rõ ràng và tiện xử lý hơn.
