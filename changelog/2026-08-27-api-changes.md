---
title: API changes — 2026-08-27
description: This release includes 10 additions, 1 change. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-08-27
---

This release includes 10 additions, 1 change. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Products
- **Changed** `GET /api/v2/products/{product}/inventory-tally` — Get Product Inventory Tally
  - removed parameter(s): `inventory_status`

## Added

### Amazon
- `GET /api/amazon/unified/awd/ledgers/export` — Export AWD Ledgers
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/submit-verification-batch` — Submit Verification (Batch)

### Products
- `GET /api/v2/products/{product}/fulfillment-debt-summary` — Get Product Fulfillment Debt Summary

### Reporting
- `GET /api/reporting/inventory-cogs` — Get Inventory COGS
- `GET /api/reporting/inventory-cogs/drilldown` — Get Inventory COGS Drilldown
- `GET /api/reporting/inventory-cogs/drilldown/export` — Export Inventory COGS Drilldown
- `GET /api/reporting/inventory-cogs/export` — Export Inventory COGS Report
- `GET /api/reporting/inventory-value-change` — Get Inventory Value Change
- `GET /api/reporting/inventory-value-change/transactions` — List Inventory Value Change Transactions
- `GET /api/reporting/inventory-value-change/transactions/export` — Export Inventory Value Change Transactions

_Spec version 1.0.0 → 1.0.0._
