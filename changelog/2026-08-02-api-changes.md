---
title: API changes — 2026-08-02
description: This release includes 7 additions, 2 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-08-02
---

This release includes 7 additions, 2 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Veracore
- `GET /api/veracore/integration-instances/{integration_instance}/inventory/discrepancy-stats` — Get Inventory Discrepancy Stats
- `GET /api/veracore/integration-instances/{integration_instance}/products/export` — Export Products
- `GET /api/veracore/integration-instances/{integration_instance}/report-tasks/{report_task}` — Get Report Task
- `GET /api/veracore/integration-instances/{integration_instance}/report-tasks/{report_task}/raw` — Get Report Task Raw Payload
- `GET /api/veracore/purchase-orders/{purchaseOrder}/expected-arrival` — Get Expected Arrival For Purchase Order

### Webhooks
- `POST /api/webhook-subscriptions/{id}/disable` — Disable Webhook Subscription
- `POST /api/webhook-subscriptions/{id}/enable` — Enable Webhook Subscription

## Changed

### Webhooks
- `GET /api/webhook-subscriptions` — List Webhook Subscriptions
  - new response code(s): `422`
- `POST /api/webhook-subscriptions` — Create Webhook Subscription
  - new response code(s): `409`
  - removed response code(s): `200`

_Spec version 1.0.0 → 1.0.0._
