# Source Note - System Design Notes

> Source: `https://github.com/liquidslr/system-design-notes`  
> Classification: Supporting Source  
> Date checked: 2026-06-27  
> Role in Lucky Agent OS: architecture/system design reference for Plan, Engineering Review, DevOps/SRE, and Evidence Gate.

## Tóm Tắt

`system-design-notes` là bộ ghi chú system design dựa trên sách `System Design Interview - An Insider's Guide` của Alex Xu. Repo không phải agent workflow, nhưng rất hữu ích để bổ sung kiến thức kiến trúc hệ thống cho các task thiết kế backend/distributed systems.

Repo gồm 28 chương, từ scaling cơ bản đến các case study như rate limiter, key-value store, URL shortener, web crawler, chat system, YouTube, Google Drive, distributed message queue, monitoring, payment, digital wallet và stock exchange.

## Vì Sao Hữu Ích Cho Lucky Agent OS

Nguồn này giúp agent không chỉ code tính năng, mà còn biết hỏi và review kiến trúc:

```text
scope -> estimate -> high-level design -> deep dive -> tradeoffs -> failure modes -> evidence
```

Nó đặc biệt phù hợp khi Lucky hỏi:

- thiết kế hệ thống/app mới;
- scale backend hiện tại;
- chọn database/cache/queue/search;
- review architecture plan;
- thiết kế notification/chat/feed/payment system;
- viết architecture doc;
- đánh giá bottleneck, consistency, availability, latency.

## Mapping Vào Lucky Agent OS

| Layer | Contribution |
| --- | --- |
| Intent Routing | Nhận diện task architecture/system design thay vì chỉ implementation. |
| Workflow Lifecycle | Bổ sung phần Plan/Review bằng 4-step system design framework. |
| Skill / Role Specialization | Tạo role Architect / Engineering Manager / Staff Engineer. |
| Tool Protocol | Ép agent estimate assumptions trước khi chọn architecture. |
| Evidence Gate | Dùng QPS/storage/latency/availability numbers làm evidence cho design. |
| Project Structure / Runbooks | Hỗ trợ architecture docs, scaling notes, operational assumptions. |

## Nội Dung Chính Của Repo

Các nhóm nội dung quan trọng:

```text
01. Scaling
02. Back Of the Envelope Estimation
03. System Design Framework
04. Rate Limiter
05. Consistent Hashing
06. Key-Value Store
07. Unique-Id Generator
08. URL Shortener
09. Web Crawler
10. Notification System
11. News Feed System
12. Chat System
13. Search Autocomplete
14. Youtube
15. Google Drive
16. Proximity Service
17. Nearby Friends
18. Google Maps
19. Distributed Message Queue
20. Metrics Monitoring and Alerting System
21. Ad Click Event Aggregation
22. Hotel Reservation System
23. Distributed Email Service
24. S3-like Object Storage
25. Real-time Gaming Leaderboard
26. Payment System
27. Digital Wallet
28. Stock Exchange
```

## Pattern 1 - 4-Step System Design Framework

Từ chương `03. System Design Framework`:

```text
1. Understand the problem and establish design scope
2. Propose high-level design and get buy-in
3. Design deep dive
4. Wrap-up
```

Áp dụng cho agent:

1. Không nhảy vào solution ngay.
2. Hỏi requirements và scale.
3. Viết assumptions rõ.
4. Đưa high-level diagram/flow trước.
5. Chọn component critical để deep dive.
6. Kết thúc bằng bottleneck, tradeoff, follow-up.

## Pattern 2 - Back-of-the-Envelope Estimation

Từ chương `02. Back Of the Envelope Estimation`:

Agent nên dùng rough numbers để kiểm design:

- DAU/MAU;
- average QPS;
- peak QPS;
- storage/day;
- total retention storage;
- bandwidth;
- cache size;
- availability nines;
- latency class.

Rule cho Lucky Agent OS:

```text
Nếu design có scale claim, phải có assumptions và rough numbers.
```

## Pattern 3 - Reusable Building Blocks

Các system design case studies lặp lại nhiều building blocks:

- load balancer;
- cache;
- CDN;
- database replication;
- sharding/partitioning;
- message queue;
- async workers;
- object storage;
- metadata database;
- rate limiter;
- consistent hashing;
- pub/sub;
- monitoring/alerting;
- failover;
- quorum/consensus;
- id generator;
- search index;
- geospatial index.

Agent nên xem đây là toolkit, không phải recipe cứng. Chỉ thêm component khi requirements/scale/tradeoff justify.

## Suggested Workflow: System Design Review

```text
1. Clarify requirements
2. Establish non-functional requirements
3. Estimate capacity
4. Propose high-level design
5. Define APIs/data model
6. Pick storage/cache/queue/search/indexing
7. Deep dive bottlenecks
8. Discuss tradeoffs
9. Define failure modes
10. Define observability and rollout plan
```

## Không Nên Copy Y Hệt

- Không copy nguyên văn nội dung sách/notes vào wiki.
- Không dùng số latency/availability như truth tuyệt đối; coi là reference.
- Không biến mọi app nhỏ thành distributed system phức tạp.
- Không dùng interview answer thay cho production runbook.
- Không chọn component vì case study có nó; phải justify bằng requirement.

## Decision

Đưa vào workflow-wiki như Supporting Source và tạo:

- checklist `docs/checklists/system-design-review.vi.md`;
- local skill `system-design-review`;
- link từ source evaluation và layer docs.

## Scorecard

| Criteria | Score | Note |
| --- | --- | --- |
| Relevance | 3/3 | Rất hợp architecture/backend/system design. |
| Actionability | 2/3 | Có framework và case studies, cần chuyển thành checklist. |
| Evidence impact | 2/3 | Estimation giúp evidence cho design claim. |
| Safety | 3/3 | Defensive/educational. |
| Stability | 2/3 | Principles ổn, nhưng số liệu có thể cũ. |
| Integration cost | 2/3 | Dễ thêm checklist/skill, không cần install. |

Total: `14/18` -> Supporting Source đủ mạnh.
