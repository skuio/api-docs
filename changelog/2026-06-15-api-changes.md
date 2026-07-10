---
title: API changes — 2026-06-15
description: This release includes 40 additions, 5 changes, 10 removals. 10 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-06-15
---

This release includes 40 additions, 5 changes, 10 removals. 10 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Shipping Providers
- **Removed** `POST //{domain}/api/shiphero/{integration_instance}/inventory/create-stock-take` — Create Stock Take From Discrepancies
- **Removed** `GET //{domain}/api/shiphero/{integration_instance}/inventory/discrepancies` — Get Inventory Discrepancies
- **Removed** `GET //{domain}/api/shiphero/{integration_instance}/inventory/last-synced-at` — Get Last Synced At
- **Removed** `GET //{domain}/api/shiphero/{integration_instance}/inventory/product-movements` — Get Product Inventory Movements
- **Removed** `POST //{domain}/api/shiphero/{integration_instance}/inventory/refresh` — Refresh Inventory
- **Removed** `GET //{domain}/api/shiphero/{integration_instance}/inventory/without-shiphero-inventory` — Get SKU Products Without ShipHero Inventory
- **Removed** `GET //{domain}/api/shiphero/{integration_instance}/inventory/without-sku-products` — Get Items Without SKU Products
- **Removed** `GET //{domain}/api/shiphero/{integration_instance}/warehouses` — List Warehouses
- **Removed** `GET //{domain}/api/shiphero/{integration_instance}/warehouses/download` — Download Warehouses from ShipHero
- **Removed** `PUT //{domain}/api/shiphero/{integration_instance}/warehouses/map` — Map Warehouses

## Added

### Bills
- `GET /api/bills/eligible-payees` — Get Eligible Bill Payees
- `GET /api/bills/payees` — Get Bill Payees

### Event Catalog
- `GET /api/webhook-events` — List Events
- `GET /api/webhook-events/{event}/sample` — Get Event Sample

### Import & Export
- `POST /api/vendor-credits/import` — Import Vendor Credits
- `GET /api/vendor-credits/import/template` — Download Import Template
- `POST /api/vendor-credits/import/validate` — Validate Import
- `GET /api/vendor-credits/list/export` — Export Vendor Credits

### Integration Instances
- `GET /api/integrations` — List Integrations (Picker)

### Sales Channels
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/refresh-amazon-plan` — Refresh from Amazon
- `POST //{domain}/api/amazon/{integrationInstance}/removal-orders/backfill-straddle` — Backfill Straddle Removals (One-Time Repair)
- `DELETE //{domain}/api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/reconcile-pretracking` — Undo Reconcile Pre-Tracking (Straddle)
- `POST //{domain}/api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/reconcile-pretracking` — Reconcile Pre-Tracking Units (Straddle)

### Sales Credits
- `POST /api/sales-credits/import` — Import Sales Credits
- `GET /api/sales-credits/import/template` — Download Import Template
- `POST /api/sales-credits/import/validate` — Validate Import
- `GET /api/sales-credits/list/export` — Export Sales Credits

### Shipping Providers
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/dashboard` — Show Dashboard Metrics
- `POST //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/create-stock-take` — Create Stock Take From Discrepancies
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/discrepancies` — Get Inventory Discrepancies
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/last-synced-at` — Get Last Synced At
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/product-movements` — Get Product Inventory Movements
- `POST //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/refresh` — Refresh Inventory
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/without-shiphero-inventory` — Get SKU Products Without ShipHero Inventory
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/without-sku-products` — Get Items Without SKU Products
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/orders` — List Orders
- `POST //{domain}/api/shiphero/integration-instances/{integration_instance}/orders/sync` — Sync Orders
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/orders/sync-progress/{trackedJobLogId}` — Get Order Sync Progress
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/orders/{order}` — Show Order
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/orders/{order}/detail` — Get Order Detail
- `POST //{domain}/api/shiphero/integration-instances/{integration_instance}/orders/{order}/sync-detail` — Sync Single Order Detail
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/warehouses` — List Warehouses
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/warehouses/download` — Download Warehouses from ShipHero
- `PUT //{domain}/api/shiphero/integration-instances/{integration_instance}/warehouses/map` — Map Warehouses

### Subscriptions
- `GET /api/webhook-subscriptions` — List Subscriptions
- `POST /api/webhook-subscriptions` — Create Subscription
- `DELETE /api/webhook-subscriptions/{id}` — Delete Subscription
- `GET /api/webhook-subscriptions/{id}` — Get Subscription
- `GET /api/webhook-subscriptions/{id}/deliveries` — List Deliveries
- `POST /api/webhook-subscriptions/{id}/test` — Send Test Delivery

## Changed

### Integration Instances
- `POST /api/integration-instances` — Create Integration Instance
  - new response code(s): `400`

### Shipping Providers
- `POST //{domain}/api/shipmyorders/integration-instances` — Create Integration Instance
  - new response code(s): `400`
  - removed response code(s): `200`
- `POST //{domain}/api/shipmyorders/inventory/refresh` — Refresh Inventory
  - new response code(s): `410`
  - removed response code(s): `200`

### Subscriptions
- `POST /api/subscription-offerings/{subscription_offering}/product-listings/{product_listing}/link` — Link Product Listing
  - new response code(s): `422`
- `POST /api/subscription-offerings/{subscription_offering}/product-listings/{product_listing}/unlink` — Unlink Product Listing
  - new response code(s): `400`, `422`

_Spec version 1.0.0 → 1.0.0._
