---
title: API changes — 2026-11-16
description: This release includes 5 additions, 3 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-11-16
---

This release includes 5 additions, 3 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Adjustments & Transfers
- `POST /api/v2/inventory-allocations/release-stale` — Release Stale Allocations

### Ledger (Accounting v2)
- `PUT /api/ledger/entries/needs-attention/assignments` — Assign Needs-Attention Entries

### Warehouses
- `GET /api/v2/warehouse-locations/locations-off-impact` — Get Locations-Off Impact
- `POST /api/v2/warehouse-locations/reconcile` — Reconcile Locations
- `GET /api/v2/warehouse-locations/reconcile-preview` — Get Location Reconcile Preview

## Changed

### Ledger (Accounting v2)
- `POST /api/ledger/reconciliation/inventory/adjustment` — Post Inventory Reconciliation Adjustment
  - new response code(s): `409`

### Stock Takes
- `DELETE /api/stock-takes` — Bulk Delete Stock Takes
  - new response code(s): `422`
- `DELETE /api/stock-takes/{stock_take}` — Delete Stock Take
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
