---
title: API changes — 2026-05-10
description: This release includes 52 additions.
authors: [product-team]
tags: [added]
date: 2026-05-10
---

This release includes 52 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Integration Instances
- `GET /api/faire/instances` — List Faire Instances
- `POST /api/faire/instances` — Create Faire Instance
- `DELETE /api/faire/instances/{integrationInstance}` — Delete Faire Instance
- `GET /api/faire/instances/{integrationInstance}` — Get Faire Instance
- `PUT /api/faire/instances/{integrationInstance}` — Update Faire Instance
- `POST /api/faire/instances/{integrationInstance}/financial-line-overrides/backfill` — Apply Financial Line Backfill
- `POST /api/faire/instances/{integrationInstance}/financial-line-overrides/preview-backfill` — Preview Financial Line Backfill

### Inventory
- `GET /api/faire/inventory` — List Faire Inventory
- `POST /api/faire/inventory/push` — Push Inventory to Faire
- `POST /api/faire/inventory/refresh` — Refresh Inventory Snapshot
- `GET /api/faire/inventory/summary` — Get Faire Inventory Summary (Legacy)

### OAuth Authorization
- `POST /api/faire/instances/{integrationInstance}/access-token` — Set Access Token Manually
- `GET /api/faire/instances/{integrationInstance}/authorization-url` — Get Authorization URL
- `POST /api/faire/instances/{integrationInstance}/revoke` — Revoke Authorization
- `GET /api/faire/oauth/config` — Get OAuth Config
- `GET /faire/callback` — OAuth Callback (Faire → SKU)

### Orders
- `POST /api/faire/instances/{integrationInstance}/orders/bulk-archive` — Bulk Archive Faire Orders
- `POST /api/faire/instances/{integrationInstance}/orders/bulk-delete-sku-orders` — Bulk Delete SKU Orders
- `POST /api/faire/instances/{integrationInstance}/orders/bulk-unarchive` — Bulk Unarchive Faire Orders
- `POST /api/faire/instances/{integrationInstance}/orders/bulk-update-sku-orders` — Bulk Update SKU Orders
- `GET /api/faire/instances/{integrationInstance}/orders/latest-sync-info` — Get Orders Latest Sync Info
- `POST /api/faire/instances/{integrationInstance}/orders/refresh-tracked` — Refresh Orders from Faire (Tracked)
- `DELETE /api/faire/instances/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order from Faire Order
- `POST /api/faire/instances/{integrationInstance}/orders/{order}/update-sku-order` — Update SKU Order from Faire Order
- `GET /api/faire/orders` — List Faire Orders
- `GET /api/faire/orders/filter-options` — Get Order Filter Options (Distinct Values)
- `GET /api/faire/orders/{order}` — Get Faire Order
- `POST /api/faire/orders/{order}/archive` — Archive Faire Order
- `POST /api/faire/orders/{order}/refetch` — Refetch Order from Faire
- `POST /api/faire/orders/{order}/submit-tracking` — Submit Tracking to Faire (FBM)
- `POST /api/faire/orders/{order}/unarchive` — Unarchive Faire Order

### Products
- `GET /api/faire/instances/{integrationInstance}/products` — List Products for Instance (Variants Listing)
- `POST /api/faire/instances/{integrationInstance}/products/bulk` — Bulk Operation (Synchronous)
- `GET /api/faire/instances/{integrationInstance}/products/bulk-progress/{trackedJobLogId}` — Bulk Operation Progress
- `POST /api/faire/instances/{integrationInstance}/products/bulk-tracked` — Bulk Operation (Tracked)
- `GET /api/faire/instances/{integrationInstance}/products/filter-options` — Get Variant Filter Options (Distinct Product Types)
- `GET /api/faire/instances/{integrationInstance}/products/latest-sync-info` — Get Products Latest Sync Info
- `POST /api/faire/instances/{integrationInstance}/products/refresh-tracked` — Refresh Products from Faire (Tracked)
- `GET /api/faire/instances/{integrationInstance}/products/{option}` — Get Variant Detail
- `POST /api/faire/instances/{integrationInstance}/products/{option}/create-sku-product` — Create SKU.io Product from Variant
- `DELETE /api/faire/instances/{integrationInstance}/products/{option}/map` — Unmap Single Variant
- `POST /api/faire/instances/{integrationInstance}/products/{option}/map` — Map Single Variant to SKU.io Product
- `GET /api/faire/instances/{integrationInstance}/products/{option}/raw` — Get Raw Data from Faire (Variant)
- `POST /api/faire/instances/{integrationInstance}/products/{option}/smart-match` — Find Smart-Match Candidates
- `GET /api/faire/products` — List Faire Products

### Shipping Method Mappings
- `GET /api/faire/instances/{integrationInstance}/shipping-method-mappings` — List Shipping Method Mappings
- `POST /api/faire/instances/{integrationInstance}/shipping-method-mappings/bulk-update` — Bulk Update Shipping Method Mappings
- `DELETE /api/faire/instances/{integrationInstance}/shipping-method-mappings/{mappingId}` — Delete Shipping Method Mapping

### Sync Actions
- `POST /api/faire/instances/{integrationInstance}/sync-inventory` — Sync Inventory
- `POST /api/faire/instances/{integrationInstance}/sync-orders` — Sync Orders
- `POST /api/faire/instances/{integrationInstance}/sync-products` — Sync Products

### Webhooks
- `POST /api/webhooks/faire` — Webhook - Inventory Quantity Updated

_Spec version 1.0.0 → 1.0.0._
