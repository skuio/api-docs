---
title: API changes — 2026-10-07
description: This release includes 1 addition, 2 changes, 1 removal. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-10-07
---

This release includes 1 addition, 2 changes, 1 removal. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Subscriptions
- **Removed** `GET /api/subscription-offerings/{subscription_offering}/reports/offering-trends` — Offering Trends

## Added

### Back-in-Stock Requests
- `GET /api/admin/portal/products/{product}/back-in-stock-requests` — List Buyers Waiting for Stock

## Changed

### Inventory Intelligence
- `POST /api/inventory-forecasting/schedule-runs/{runId}/rerun` — Re-run Forecast from Previous Run
  - new response code(s): `202`
- `POST /api/inventory-forecasting/schedules/{schedule}/run` — Run Schedule Now
  - new response code(s): `202`
  - removed response code(s): `200`

_Spec version 1.0.0 → 1.0.0._
