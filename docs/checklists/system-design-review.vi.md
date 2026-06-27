# Checklist: System Design Review

Dùng khi thiết kế hoặc review backend/distributed system, architecture plan, data pipeline, API platform, scaling strategy.

## 1. Requirements

- [ ] Functional requirements rõ.
- [ ] Non-functional requirements rõ: latency, availability, consistency, durability, security.
- [ ] User/client chính được xác định.
- [ ] Scope được cắt rõ: MVP vs later.
- [ ] Constraints hiện có được ghi lại.

## 2. Capacity Estimate

- [ ] DAU/MAU hoặc active users estimate.
- [ ] Average QPS và peak QPS.
- [ ] Read/write ratio.
- [ ] Storage/day và retention.
- [ ] Bandwidth hoặc payload size nếu liên quan.
- [ ] Cache size estimate nếu dùng cache.
- [ ] Assumptions có đơn vị rõ.

## 3. High-Level Design

- [ ] Có component diagram hoặc text architecture.
- [ ] Client/API/service boundary rõ.
- [ ] Data stores được chọn có lý do.
- [ ] Cache/CDN/queue/search chỉ thêm nếu justify được.
- [ ] Sync vs async flow rõ.
- [ ] Critical path latency được cân nhắc.

## 4. Data Model / API

- [ ] Core entities rõ.
- [ ] Read/write path rõ.
- [ ] API endpoints hoặc event schema sơ bộ.
- [ ] Id generation strategy nếu cần.
- [ ] Index/partition key/sharding key nếu cần.

## 5. Deep Dive

- [ ] Bottleneck chính được chọn để deep dive.
- [ ] Failure modes được nêu.
- [ ] Consistency tradeoff rõ.
- [ ] Backpressure/rate limiting nếu có traffic spikes.
- [ ] Idempotency/retry semantics nếu có payment/event/queue.

## 6. Reliability / Operations

- [ ] Monitoring/metrics/logging/tracing tối thiểu.
- [ ] Alerting condition rõ.
- [ ] Backup/restore hoặc disaster recovery nếu có data quan trọng.
- [ ] Rollout/canary/migration strategy nếu thay đổi production.
- [ ] Security/privacy constraints nếu có user data/payment/location.

## 7. Wrap-Up

- [ ] Tradeoffs được tóm tắt.
- [ ] Alternatives được nêu nếu có.
- [ ] Open questions rõ.
- [ ] Next step cụ thể: prototype, benchmark, implementation plan, or docs.

## Final Report Format

```text
Architecture summary:
- ...

Assumptions / estimates:
- ...

Design:
- ...

Tradeoffs / risks:
- ...

Evidence / validation needed:
- ...

Next steps:
1. ...
```
