---
title: API changes — 2026-05-20
description: This release includes 19 additions.
authors: [product-team]
tags: [added]
date: 2026-05-20
---

This release includes 19 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Pre-Start-Date Orders
- `GET /api/temu/{integration_instance}/pre-start-date-orders` — Query Pre-Start-Date Orders
- `POST /api/temu/{integration_instance}/pre-start-date-orders/import` — Import Pre-Start-Date Orders
- `GET /api/temu/{integration_instance}/pre-start-date-orders/search` — Search Pre-Start-Date Order

### Returns & Refunds
- `GET /api/temu/{integration_instance}/parent-after-sales` — List Parent After-Sales
- `POST /api/temu/{integration_instance}/parent-after-sales/refresh` — Refresh Parent After-Sales

### Webhooks
- `DELETE /api/temu/webhook-events/bulk-delete` — Bulk Delete Events
- `POST /api/temu/webhook-events/bulk-reprocess` — Bulk Reprocess Events
- `GET /api/temu/webhook-events/{event_id}` — Show Event
- `POST /api/temu/webhook-events/{event_id}/process` — Process Event (single)
- `POST /api/temu/webhook-events/{event_id}/reprocess` — Reprocess Event (single)
- `GET /api/temu/{integration_instance}/webhook-events` — List Webhook Events
- `DELETE /api/temu/{integration_instance}/webhook-events/delete-all` — Delete All Events for Instance
- `POST /api/temu/{integration_instance}/webhook-events/process` — Process Pending Events
- `POST /api/temu/{integration_instance}/webhook-events/retry-failed` — Retry Failed Events
- `GET /api/temu/{integration_instance}/webhook-events/stats` — Webhook Event Stats
- `GET /api/temu/{integration_instance}/webhooks/configurations` — List Webhook Configurations
- `POST /api/temu/{integration_instance}/webhooks/configurations/enable-all` — Enable All Webhooks
- `POST /api/temu/{integration_instance}/webhooks/configurations/{event_code}/disable` — Disable Webhook Subscription
- `POST /api/temu/{integration_instance}/webhooks/configurations/{event_code}/enable` — Enable Webhook Subscription

_Spec version 1.0.0 → 1.0.0._
