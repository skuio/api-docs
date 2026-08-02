---
title: API changes — 2026-08-02
description: This release includes 13 additions, 2 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-08-02
---

This release includes 13 additions, 2 changes.

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

### Workflow Evaluations
- `DELETE /api/automation/workflow-evaluations/{evaluation}` — Delete Workflow Evaluation
- `GET /api/automation/workflow-evaluations/{evaluation}` — Show Workflow Evaluation
- `PUT /api/automation/workflow-evaluations/{evaluation}` — Update Workflow Evaluation
- `POST /api/automation/workflow-evaluations/{evaluation}/run` — Run Workflow Evaluation
- `GET /api/automation/workflows/{workflow}/evaluations` — List Workflow Evaluations
- `POST /api/automation/workflows/{workflow}/evaluations` — Create Workflow Evaluation

## Changed

### Webhooks
- `GET /api/webhook-subscriptions` — List Webhook Subscriptions
  - new response code(s): `422`
- `POST /api/webhook-subscriptions` — Create Webhook Subscription
  - new response code(s): `409`
  - removed response code(s): `200`

_Spec version 1.0.0 → 1.0.0._
