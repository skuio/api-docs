---
title: API changes — 2026-06-17
description: This release includes 16 additions, 5 changes, 5 removals. 5 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-06-17
---

This release includes 16 additions, 5 changes, 5 removals. 5 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Landed Cost Breakdown
- **Removed** `GET /api/reporting/landed-cost-breakdown` — Get Report with Multiple Filters

#### Purchase Orders
- **Removed** `POST //{domain}/api/purchase-orders/build` — Build PO (Forecast)
- **Removed** `POST //{domain}/api/purchase-orders/build-export` — Export Builder Results
- **Removed** `POST /api/purchase-orders/build` — Build PO (Forecast)
- **Removed** `POST /api/purchase-orders/build-export` — Export Builder Results

## Added

### Inbound Shipments
- `POST /api/inbound-shipments/{inbound_shipment}/mark-as-planned` — Mark As Planned
- `POST /api/inbound-shipments/{inbound_shipment}/unmark-as-planned` — Unmark As Planned

### Landed Cost Breakdown
- `POST /api/reporting/landed-cost-breakdown` — Generate Report with Multiple Filters
- `GET /api/reporting/landed-cost-breakdown/result/{trackedJobLog}` — Get Generated Report Result

### Products
- `GET //{domain}/api/v2/products/{product}/lots-expiry` — Get Product Lots & Expiry
- `GET //{domain}/api/v2/products/{product}/lots/{fifoLayer}/genealogy` — Get Product Lot Genealogy

### Sales Channels
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/refresh-from-amazon` — Refresh Inbound Plans From Amazon
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/refresh-single` — Refresh Single Inbound Plan
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/search` — Search Inbound Plans
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/sync-info` — Inbound Plan Sync Info
- `POST //{domain}/api/amazon/{integrationInstance}/new-inbound/plans/bulk-void` — Bulk Void Inbound Plans
- `GET //{domain}/api/amazon/{integrationInstance}/new-inbound/plans/list` — List Inbound Plans (Tab)

### Sales Orders
- `DELETE /api/sales-orders` — Bulk Delete Sales Orders
- `DELETE /api/sales-orders/tracked` — Bulk Delete Sales Orders (Tracked)

### Shipping Providers
- `POST //{domain}/api/shipstation/integration-instances/{integrationInstance}/cost-line-type/preview` — Preview Cost Line Type Impact

### Stock Takes
- `POST /api/stock-takes/{stockTake}/reallocation-preview` — Reallocation Preview

## Changed

### Product Import
- `POST /api/v2/products/import` — Execute Import
  - new response code(s): `202`
  - removed response code(s): `200`

### Products
- `POST //{domain}/api/v2/products/import` — Import Products
  - new response code(s): `202`
  - removed response code(s): `201`, `422`
- `POST //{domain}/api/v2/products/import-supplier-links` — Import Supplier Links
  - new response code(s): `202`
  - removed response code(s): `201`
- `POST /api/v2/products/import-supplier-links` — Import Supplier Links
  - new response code(s): `202`
  - removed response code(s): `201`

### Stock Takes
- `PUT /api/stock-takes/{stock_take}` — Update Stock Take
  - new response code(s): `400`

_Spec version 1.0.0 → 1.0.0._
