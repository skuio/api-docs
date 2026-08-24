---
title: API changes — 2026-08-24
description: This release includes 2 additions, 2 removals. 2 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-08-24
---

This release includes 2 additions, 2 removals. 2 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### 3PL
- **Removed** `POST /api/3pl/orders/fulfillmentOrder/fulfill` — Fulfill Order
- **Removed** `POST /api/3pl/orders/{salesOrderFulfillment}/fulfill` — Fulfill Order

## Added

### 3PL
- `POST /api/3pl/orders/{fulfillmentOrder}/fulfill` — Fulfill Order

### Starshipit
- `GET /api/starshipit/integration-instances/{integration_instance}/activity-log` — Get Activity Log

_Spec version 1.0.0 → 1.0.0._
