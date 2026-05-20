---
title: API changes — 2026-05-20
description: This release 19 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-05-20
---

This release 19 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/temu/webhook-events/bulk-delete` — Bulk Delete Events
- `DELETE /api/temu/{integration_instance}/webhook-events/delete-all` — Delete All Events for Instance
- `GET /api/temu/webhook-events/{event_id}` — Show Event
- `GET /api/temu/{integration_instance}/parent-after-sales` — List Parent After-Sales
- `GET /api/temu/{integration_instance}/pre-start-date-orders` — Query Pre-Start-Date Orders
- `GET /api/temu/{integration_instance}/pre-start-date-orders/search` — Search Pre-Start-Date Order
- `GET /api/temu/{integration_instance}/webhook-events` — List Webhook Events
- `GET /api/temu/{integration_instance}/webhook-events/stats` — Webhook Event Stats
- `GET /api/temu/{integration_instance}/webhooks/configurations` — List Webhook Configurations
- `POST /api/temu/webhook-events/bulk-reprocess` — Bulk Reprocess Events
- `POST /api/temu/webhook-events/{event_id}/process` — Process Event (single)
- `POST /api/temu/webhook-events/{event_id}/reprocess` — Reprocess Event (single)
- `POST /api/temu/{integration_instance}/parent-after-sales/refresh` — Refresh Parent After-Sales
- `POST /api/temu/{integration_instance}/pre-start-date-orders/import` — Import Pre-Start-Date Orders
- `POST /api/temu/{integration_instance}/webhook-events/process` — Process Pending Events
- `POST /api/temu/{integration_instance}/webhook-events/retry-failed` — Retry Failed Events
- `POST /api/temu/{integration_instance}/webhooks/configurations/enable-all` — Enable All Webhooks
- `POST /api/temu/{integration_instance}/webhooks/configurations/{event_code}/disable` — Disable Webhook Subscription
- `POST /api/temu/{integration_instance}/webhooks/configurations/{event_code}/enable` — Enable Webhook Subscription

_Spec version 1.0.0 → 1.0.0._
