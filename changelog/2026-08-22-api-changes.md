---
title: API changes — 2026-08-22
description: This release includes 14 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-08-22
---

This release includes 14 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Accounting
- `GET /api/accounting/sync-settings/connection` — Get Connection Status
- `POST /api/accounting/sync-settings/connection` — Verify and Reactivate Connection

### Adjustments & Transfers
- `GET /api/v2/inventory-allocations/releasable-backorders` — List Releasable Backorders
- `POST /api/v2/inventory-allocations/releasable-backorders/release` — Release Backorders and Dispatch Fulfillment

### Products
- `POST /api/products/barcode-lookup/bulk` — Bulk Barcode Lookup

### ShipHero
- `GET /api/shiphero/integration-instances/{integration_instance}/shipping-methods` — List Shipping Method Mappings
- `DELETE /api/shiphero/integration-instances/{integration_instance}/shipping-methods/mappings` — Clear Shipping Method Mapping
- `PUT /api/shiphero/integration-instances/{integration_instance}/shipping-methods/mappings` — Map Shipping Method Value
- `PUT /api/shiphero/integration-instances/{integration_instance}/shipping-methods/mappings/bulk` — Bulk Map Shipping Method Values
- `POST /api/shiphero/integration-instances/{integration_instance}/shipping-methods/rules` — Create Text Rule
- `PUT /api/shiphero/integration-instances/{integration_instance}/shipping-methods/rules/reorder` — Reorder Text Rules
- `DELETE /api/shiphero/integration-instances/{integration_instance}/shipping-methods/rules/{rule}` — Delete Text Rule
- `PUT /api/shiphero/integration-instances/{integration_instance}/shipping-methods/rules/{rule}` — Update Text Rule

### Shopify
- `GET /api/shopify/{integrationInstance}/products/mapping-breakdown` — Get Product Mapping Breakdown

## Changed

### Walmart
- `POST /api/walmart/{integrationInstance}/fulfillments/{salesOrderFulfillment}/submit` — Submit Walmart Fulfillment
  - new response code(s): `409`

_Spec version 1.0.0 → 1.0.0._
