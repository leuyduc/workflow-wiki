# Tổng Quan Về GStack

`gstack` là một bộ workflow/skill mã nguồn mở của Garry Tan dùng để biến AI coding agent thành một đội ngũ làm sản phẩm có quy trình rõ ràng.

Thay vì chỉ hỏi AI kiểu "code giúp tôi tính năng này", `gstack` chia công việc thành nhiều vai trò chuyên môn như trong một startup thật:

- CEO / Founder
- Engineering Manager
- Designer
- Staff Engineer
- QA Lead
- Security Officer
- Release Engineer
- Technical Writer

Mỗi vai trò được đóng gói thành một skill hoặc slash command. Các skill này nối với nhau thành một quy trình làm việc từ ý tưởng đến release.

## Ý Tưởng Chính

Triết lý cốt lõi của `gstack` là:

```text
Think -> Plan -> Build -> Review -> Test -> Ship -> Reflect
```

Nghĩa là một dự án không nên bắt đầu bằng việc code ngay. Trước khi build, agent cần hiểu vấn đề, phản biện scope, lên kiến trúc, kiểm thiết kế, review code, test bằng browser thật, ship có kiểm soát và ghi lại bài học.

## GStack Giải Quyết Vấn Đề Gì?

Khi dùng AI coding agent, các lỗi thường gặp là:

- Agent hiểu sai yêu cầu nhưng vẫn code tiếp.
- Code nhanh nhưng thiếu review, thiếu test.
- UI nhìn giống "AI slop".
- Agent sửa lan man ngoài phạm vi.
- Không có quy trình QA bằng browser thật.
- Docs bị lệch so với code.
- Không có cơ chế học lại từ các lần làm trước.

`gstack` giải quyết bằng cách ép agent đi qua các workflow có vai trò rõ ràng, checklist rõ ràng và output rõ ràng.

## Các Nhóm Workflow Quan Trọng

### 1. Think - Hiểu Vấn Đề

Các workflow trong nhóm này giúp làm rõ ý tưởng trước khi code.

Ví dụ:

```text
/office-hours
/plan-ceo-review
```

Mục tiêu:

- Hỏi các câu hỏi ép người dùng làm rõ vấn đề.
- Tìm pain thật thay vì chỉ làm feature được yêu cầu.
- Phản biện giả định.
- Đề xuất hướng triển khai hẹp nhất nhưng có giá trị.

### 2. Plan - Lập Kế Hoạch

Các workflow này biến ý tưởng thành kế hoạch có thể thực thi.

Ví dụ:

```text
/autoplan
/plan-eng-review
/plan-design-review
/plan-devex-review
/spec
```

Mục tiêu:

- Xác định scope.
- Chốt kiến trúc.
- Xác định data flow.
- Lập test matrix.
- Kiểm tra thiết kế trước khi code.
- Viết spec đủ rõ để agent khác có thể thực thi.

### 3. Build - Triển Khai

Nhóm này hỗ trợ agent trong lúc build.

Ví dụ:

```text
/design-html
/codex
/careful
/freeze
/guard
```

Mục tiêu:

- Biến thiết kế thành HTML/CSS có thể ship.
- Dùng agent/model khác review độc lập.
- Khóa phạm vi chỉnh sửa để tránh sửa nhầm file.
- Cảnh báo trước các lệnh nguy hiểm.

### 4. Review - Kiểm Tra Chất Lượng

Nhóm này kiểm tra bug, kiến trúc, bảo mật và thiết kế.

Ví dụ:

```text
/review
/investigate
/design-review
/devex-review
/cso
```

Mục tiêu:

- Tìm bug có thể lọt qua CI.
- Điều tra nguyên nhân gốc thay vì đoán mò.
- Bắt lỗi UI/UX và "AI slop".
- Kiểm tra developer experience.
- Kiểm tra bảo mật theo OWASP/STRIDE.

### 5. Test - QA Bằng Browser Thật

Đây là phần rất quan trọng của `gstack`.

Ví dụ:

```text
/qa
/qa-only
/browse
/open-gstack-browser
/setup-browser-cookies
```

Mục tiêu:

- Mở browser thật.
- Click, scroll, fill form như người dùng.
- Chụp screenshot.
- Kiểm console errors.
- Test authenticated pages bằng cookie.
- Tìm bug bằng mắt thay vì chỉ đọc code.

Đây là phần gần với workflow mà Lucky hay yêu cầu: test như Antigravity, không đoán mò, nhìn bằng mắt như người dùng thật.

### 6. Ship - Release Có Kiểm Soát

Nhóm này chuẩn bị PR, merge, deploy và xác minh production.

Ví dụ:

```text
/ship
/land-and-deploy
/canary
/benchmark
```

Mục tiêu:

- Sync main.
- Chạy test.
- Audit coverage.
- Tạo PR.
- Merge/deploy.
- Theo dõi lỗi sau deploy.
- Đo performance trước/sau.

### 7. Reflect - Ghi Lại Và Học Tiếp

Nhóm này giúp hệ thống không bị mất context sau mỗi phiên làm việc.

Ví dụ:

```text
/document-release
/document-generate
/learn
/context-save
/context-restore
/retro
```

Mục tiêu:

- Cập nhật docs theo code đã ship.
- Sinh docs còn thiếu.
- Lưu bài học, quyết định, pattern, pitfall.
- Khôi phục context khi mở session mới.
- Tổng kết tiến độ và chất lượng làm việc.

## Vì Sao GStack Hợp Với Dự Án Workflow Wiki?

Dự án Workflow Wiki của Lucky muốn tạo một website hướng dẫn workflow cho dự án, ngành nghề và cách làm việc với AI. `gstack` là nguồn dữ liệu rất hợp vì:

- Mỗi skill có thể biến thành một trang workflow.
- Mỗi workflow có vai trò, mục tiêu và output rõ ràng.
- Có lifecycle tổng thể từ ý tưởng đến release.
- Có nhiều domain: design, QA, security, docs, deploy, review.
- Nội dung được viết theo dạng Markdown, dễ ingest và chuyển thành docs.

## Cách Biến GStack Thành Wiki

Pipeline đề xuất:

```text
gstack repository
-> đọc */SKILL.md
-> parse frontmatter và headings
-> phân loại theo stage/specialist
-> sinh markdown page
-> tạo sidebar/index/search
-> publish thành wiki
```

Mỗi skill sẽ được normalize thành dạng:

```yaml
title: QA
slug: qa
source: gstack
stage: Test
specialist: QA Lead
type: workflow
tags:
  - browser
  - testing
  - regression
inputs:
  - staging URL
  - test account
  - expected flow
outputs:
  - QA report
  - screenshots
  - bug list
related:
  - browse
  - qa-only
  - canary
  - ship
```

## Website Nên Trình Bày GStack Như Thế Nào?

Không nên chỉ list skill theo alphabet. Cách tốt hơn là trình bày theo câu hỏi người dùng thật sự cần:

- Tôi đang ở giai đoạn nào của dự án?
- Tôi nên dùng workflow nào?
- Workflow này cần input gì?
- Sau khi chạy xong phải có output gì?
- Checklist hoàn thành là gì?
- Workflow tiếp theo nên là gì?

Vì vậy website nên có các góc nhìn:

```text
Theo lifecycle: Think / Plan / Build / Review / Test / Ship / Reflect
Theo vai trò: CEO / Designer / QA / Security / Release
Theo task: design, review, debug, QA, deploy, docs
Theo prompt/checklist/template
```

## Các Workflow Nên Import Đầu Tiên

```text
office-hours
autoplan
plan-ceo-review
plan-eng-review
plan-design-review
design-consultation
design-shotgun
design-html
design-review
review
investigate
qa
qa-only
browse
open-gstack-browser
cso
ship
land-and-deploy
canary
benchmark
document-release
document-generate
learn
spec
```

## Tóm Tắt Ngắn

`gstack` là một bộ workflow để vận hành AI coding agent như một team làm sản phẩm. Nó chia quá trình build thành các giai đoạn rõ ràng, có vai trò chuyên môn, có review, có QA bằng browser thật, có release và có học lại sau mỗi vòng.

Dự án Workflow Wiki sẽ dùng `gstack` như nguồn tri thức ban đầu, rồi biến các skill đó thành tài liệu tiếng Việt dễ đọc, dễ tìm, dễ áp dụng cho nhiều dự án và ngành nghề khác nhau.
