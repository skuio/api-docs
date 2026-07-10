---
title: API changes — 2026-06-07
description: This release includes 3 additions, 5 removals. 5 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-06-07
---

This release includes 3 additions, 5 removals. 5 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Inventory
- **Removed** `GET /api/inventory/forecast` — Get Inventory Forecast
- **Removed** `POST /api/inventory/forecast/purchase-orders` — Create Purchase Orders from Forecast
- **Removed** `POST /api/inventory/forecast/refresh` — Refresh Forecast
- **Removed** `GET /api/inventory/forecast/status` — Get Forecast Status
- **Removed** `GET /api/inventory/forecast/total-cost` — Get Forecast Total Cost

## Added

### Costing
- `GET /api/cogs-revaluation` — List Inventory Revaluations

### Fulfillments
- `DELETE /api/sales-order-fulfillments` — Bulk Void Shipments

### Getting Started
- `POST /api/broadcasting/auth` — Authorize Broadcast Channel

_Spec version 1.0.0 → 1.0.0._
