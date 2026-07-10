---
title: API changes — 2026-06-24
description: This release includes 6 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-06-24
---

This release includes 6 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Fulfillment Orders
- `DELETE /api/export/fulfillment-orders/{fulfillmentOrder}/packing-slip/cache` — Clear FO Packing Slip Cache
- `GET /api/export/fulfillment-orders/{fulfillmentOrder}/packing-slip/cache-status` — Get FO Packing Slip Cache Status
- `GET /api/fulfillment-orders/export` — Export Fulfillment Orders (Data Table)
- `GET /api/fulfillment-orders/{fulfillmentOrder}/merge-candidates` — List Merge Candidates

### Fulfillments
- `DELETE /api/export/sales-order-fulfillments/{salesOrderFulfillment}/packing-slip/cache` — Clear Shipment Packing Slip Cache
- `GET /api/export/sales-order-fulfillments/{salesOrderFulfillment}/packing-slip/cache-status` — Get Shipment Packing Slip Cache Status

## Changed

### Accounting Integrations
- `PUT //{domain}/api/qbo/custom-field-mappings` — Update Custom Field Mappings
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
