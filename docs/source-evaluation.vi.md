# Source Evaluation - Cách Đánh Giá Nguồn Cho Workflow Wiki

Tài liệu này dùng để quyết định một repo, bài viết, system prompt, hình ảnh, tool hoặc framework có nên được đưa vào `workflow-wiki` hay không.

Mục tiêu là tránh biến wiki thành một bộ sưu tập rời rạc. Mọi nguồn phải được đánh giá theo Lucky Agent OS và 7 layer trong `docs/core-thesis.vi.md`.

## Nguyên tắc

```text
Không thêm nguồn vì nó hay.
Chỉ thêm nguồn nếu nó cải thiện operating model hoặc hành vi agent.
```

Nguồn bên ngoài là nguyên liệu. Không nguồn nào tự động trở thành core chỉ vì nổi tiếng, nhiều sao, hoặc có prompt nghe mạnh.

## Phân loại nguồn

Mỗi nguồn phải được gắn một trong các nhãn sau.

### 1. Core Source

Nguồn đóng góp trực tiếp vào operating model.

Điều kiện:

- map rõ vào ít nhất một layer;
- có workflow/pattern có thể áp dụng;
- giúp agent làm việc tốt hơn, an toàn hơn, có evidence hơn;
- đủ ổn định hoặc có phần nguyên tắc không phụ thuộc version.

Ví dụ hiện tại:

- `gstack` cho workflow lifecycle;
- `oh-my-openagent` cho orchestration/evidence/agent OS;
- project structure pattern cho repo self-describing.

### 2. Supporting Source

Nguồn hỗ trợ một phần cụ thể nhưng không định hình model.

Ví dụ:

- một bài viết về browser QA;
- một checklist security;
- một guide DevOps;
- một template PR.

Supporting source có thể sinh checklist/skill nhỏ nhưng không nên chiếm navigation chính.

### 3. Inspiration Only

Nguồn chỉ truyền cảm hứng, không copy và không dùng như rule.

Ví dụ:

- leaked/purported system prompt;
- infographic;
- Twitter thread;
- demo agent workflow chưa kiểm chứng.

Với nhóm này, chỉ extract principle, không copy nội dung nguyên văn.

### 4. Experimental

Nguồn có tiềm năng nhưng chưa đủ kiểm chứng.

Điều kiện:

- có idea hay nhưng chưa rõ áp dụng;
- repo đang đổi nhanh;
- thiếu docs hoặc thiếu evidence;
- cần thử nghiệm trong một project nhỏ trước.

Không đưa vào core cho đến khi có usage evidence.

### 5. Rejected / Not Now

Nguồn không phù hợp.

Lý do thường gặp:

- nhiều hype nhưng ít workflow;
- làm agent phức tạp hơn nhưng không tăng evidence;
- quá vendor-specific;
- vi phạm safety boundary;
- khuyến khích hành vi không được phép;
- không áp dụng được vào Lucky workflow.

## 7-layer mapping checklist

Một nguồn đáng đưa vào wiki nếu cải thiện ít nhất một layer.

| Layer | Câu hỏi đánh giá |
| --- | --- |
| Intent Routing | Nó giúp agent phân loại task tốt hơn không? |
| Workflow Lifecycle | Nó cải thiện Think/Plan/Build/Review/Test/Ship/Reflect không? |
| Skill / Role Specialization | Nó định nghĩa role, skill, hoặc handoff tốt hơn không? |
| Tool Protocol | Nó làm tool use rõ hơn, an toàn hơn, repeatable hơn không? |
| Evidence Gate | Nó tăng chất lượng verify/evidence không? |
| Memory / Learning Loop | Nó giúp lưu/học/khôi phục context tốt hơn không? |
| Project Structure / Runbooks | Nó giúp repo/project tự mô tả hoặc vận hành tốt hơn không? |

Nếu không map được layer nào, không đưa vào core.

## Scorecard

Chấm mỗi nguồn theo thang 0-3.

| Tiêu chí | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| Relevance | Không liên quan | Liên quan mơ hồ | Liên quan rõ | Rất khớp Lucky workflow |
| Actionability | Chỉ ý tưởng | Có guideline | Có checklist/workflow | Có thể biến thành skill/runbook ngay |
| Evidence impact | Không tăng verify | Tăng nhẹ | Có evidence pattern | Enforce được evidence gate |
| Safety | Rủi ro cao | Cần lọc nhiều | An toàn nếu có boundary | Safety-aware sẵn |
| Stability | Hype/unstable | Đang đổi nhanh | Khá ổn | Nguyên tắc bền vững |
| Integration cost | Quá nặng | Cần nhiều setup | Vừa phải | Dễ tích hợp |

Gợi ý quyết định:

```text
Total 14-18: có thể đưa vào core docs/skill.
Total 9-13: supporting source hoặc experimental.
Total 5-8: inspiration only.
Total <5: không đưa vào.
```

Không dùng score một cách máy móc. Score chỉ giúp ép mình giải thích vì sao thêm nguồn.

## Source brief template

Mỗi nguồn nên có một brief ngắn trước khi viết docs dài.

```text
Source:
URL:
Date checked:
Classification: Core / Supporting / Inspiration / Experimental / Rejected
Summary:
Contributes to layers:
- ...
Useful patterns:
- ...
Do not copy:
- ...
Risks:
- ...
Decision:
- Add docs / Add skill / Add checklist / Reference only / Reject
```

## Decision matrix

| Decision | Khi nào dùng | Output |
| --- | --- | --- |
| Add to core | nguồn đóng góp lớn vào model | docs core/layer + README/sidebar link |
| Add as source note | nguồn hữu ích nhưng source-specific | `docs/sources/*.vi.md` hoặc folder hiện có |
| Convert to skill | có procedure lặp lại | local `SKILL.md` |
| Convert to checklist | có verification steps | `docs/checklists/*.md` |
| Add to runbook | liên quan vận hành production | `runbooks/*.md` hoặc devops skill |
| Reference only | chỉ truyền cảm hứng | link ngắn, không route chính |
| Reject | không phù hợp | ghi lý do nếu đã tốn công research |

## Những câu hỏi phải trả lời trước khi thêm nguồn

1. Nguồn này giải quyết vấn đề gì của Lucky?
2. Nó map vào layer nào trong Lucky Agent OS?
3. Nó có giúp agent làm tốt hơn hoặc an toàn hơn không?
4. Nó có tạo ra workflow/checklist/skill/runbook cụ thể không?
5. Phần nào không nên copy?
6. Có rủi ro vendor lock-in, hype, safety, secret, hoặc complexity không?
7. Nếu thêm vào, người đọc sẽ hiểu giá trị nhanh hơn hay bị loãng hơn?

## Áp dụng với các nguồn hiện có

| Source | Classification | Lý do |
| --- | --- | --- |
| `gstack` | Core Source | định nghĩa lifecycle và role/workflow product team |
| `oh-my-openagent` | Core/Supporting Source | mạnh về orchestration, evidence gate, agent OS; không copy tone/hype |
| Claude Code project structure image | Inspiration -> Supporting | hữu ích cho repo layout; không phụ thuộc Claude |
| Fable 5 prompt case study | Inspiration Only | chỉ extract style/tool/memory principle, không copy prompt |
| DevOps/SRE skill research | Supporting/Core for ops layer | cần cho production runbook và evidence |
| Browser QA practice | Core for Evidence Gate | Lucky yêu cầu visual/browser-in-loop nhiều lần |
| `liquidslr/system-design-notes` | Supporting Source | bổ sung architecture/system design framework, estimation và building blocks cho Plan/Engineering Review |
| `nidhinjs/prompt-master` | Supporting Source | bổ sung target-tool routing, prompt quality checklist và anti-patterns cho first-turn quality |

## Anti-patterns

Tránh các lỗi sau:

- thêm repo vì nhiều sao nhưng không map vào layer;
- viết summary dài nhưng không có checklist/action;
- copy nguyên văn prompt/policy từ nguồn không tin cậy;
- đưa tool vào core khi chưa có safety boundary;
- thêm source mới mà không cập nhật core model;
- tạo quá nhiều docs source-specific khiến wiki thành scrapbook;
- đánh giá nguồn theo cảm giác thay vì scorecard.

## Review cadence

Định kỳ nên review lại wiki:

- nguồn nào đã thành core thật;
- nguồn nào chỉ là inspiration;
- docs nào trùng lặp;
- skill nào đã thay thế docs dài;
- layer nào đang thiếu;
- nguồn nào nên prune hoặc merge.

## Kết luận

Một nguồn có giá trị khi nó giúp Lucky Agent OS vận hành tốt hơn.

```text
Source value = contribution to operating model + improvement in agent behavior + verifiable workflow impact.
```
