---
title: API changes — 2026-08-24
description: This release includes 15 additions, 1 change, 1 deprecation, 2 removals. 2 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, deprecated, breaking]
date: 2026-08-24
---

This release includes 15 additions, 1 change, 1 deprecation, 2 removals. 2 breaking changes — action required.

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

### Price Sync
- `GET /api/v2/sales-channels/{integrationInstance}/prices/comparison` — List Price Comparison
- `GET /api/v2/sales-channels/{integrationInstance}/prices/comparison/summary` — Get Price Comparison Summary
- `GET /api/v2/sales-channels/{integrationInstance}/prices/eligibility` — Get Price Push Eligibility
- `DELETE /api/v2/sales-channels/{integrationInstance}/prices/guardrail-overrides` — Delete Guardrail Exceptions
- `GET /api/v2/sales-channels/{integrationInstance}/prices/guardrail-overrides` — List Guardrail Exceptions
- `POST /api/v2/sales-channels/{integrationInstance}/prices/guardrail-overrides` — Create or Replace Guardrail Exception
- `GET /api/v2/sales-channels/{integrationInstance}/prices/guardrail-overrides/counts` — Get Guardrail Exception Counts
- `PATCH /api/v2/sales-channels/{integrationInstance}/prices/master` — Update Master of Price
- `POST /api/v2/sales-channels/{integrationInstance}/prices/push` — Start Price Push
- `GET /api/v2/sales-channels/{integrationInstance}/prices/runs` — List Price Push Runs
- `GET /api/v2/sales-channels/{integrationInstance}/prices/runs/{run}/lines` — List Price Push Run Lines
- `GET /api/v2/sales-channels/{integrationInstance}/prices/settings` — Get Price Sync Status
- `PATCH /api/v2/sales-channels/{integrationInstance}/prices/settings` — Update Price Push Settings

### Starshipit
- `GET /api/starshipit/integration-instances/{integration_instance}/activity-log` — Get Activity Log

## Changed

### Walmart
- `POST /api/walmart/{integrationInstance}/prices/push` — Push Prices
  - new response code(s): `202`
  - removed response code(s): `201`

## Deprecated

### Walmart
- `POST /api/walmart/{integrationInstance}/prices/push` — Push Prices

_Spec version 1.0.0 → 1.0.0._
