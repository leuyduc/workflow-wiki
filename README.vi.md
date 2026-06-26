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
