---
title: API changes — 2026-05-15
description: This release includes 5 additions, 1 change, 3 removals. 3 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-05-15
---

This release includes 5 additions, 1 change, 3 removals. 3 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Shipping Method Mappings
- **Removed** `GET /api/faire/instances/{integrationInstance}/shipping-method-mappings` — List Shipping Method Mappings
- **Removed** `POST /api/faire/instances/{integrationInstance}/shipping-method-mappings/bulk-update` — Bulk Update Shipping Method Mappings
- **Removed** `DELETE /api/faire/instances/{integrationInstance}/shipping-method-mappings/{mappingId}` — Delete Shipping Method Mapping

## Added

### Adjustments & Transfers
- `GET /api/v2/inventory-allocations/backorders/export` — Export Backorders
- `GET /api/v2/inventory-allocations/product/{productId}/coverage-options` — Coverage Options
- `POST /api/v2/inventory-allocations/rebalance-coverages` — Rebalance Coverages
- `POST /api/v2/inventory-allocations/{allocation}/reassign-coverage` — Reassign Coverage
- `POST /api/warehouses/transfers/{transfer}/receiving-discrepancy` — Create Receiving Discrepancy

## Changed

### Sales Channels
- `GET /api/amazon/unified/awd/ledgers` — List AWD Ledgers
  - new parameter(s): `filter[event_type]`, `filter[has_provisional_cogs]`, `filter[link_status]`, `filter[reconciled]`, `filter[search]`, `integration_instance_ids`, `sort`

_Spec version 1.0.0 → 1.0.0._
