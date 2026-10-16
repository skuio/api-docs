---
title: API changes — 2026-10-16
description: This release includes 63 additions.
authors: [product-team]
tags: [added]
date: 2026-10-16
---

This release includes 63 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Storefront
- `GET /api/storefront/connect/init` — Start Store Connection
- `GET /api/storefront/instances` — List Instances
- `POST /api/storefront/instances` — Create Instance
- `DELETE /api/storefront/instances/{id}` — Delete Instance
- `GET /api/storefront/instances/{id}` — Get Instance
- `PUT /api/storefront/instances/{id}` — Update Instance
- `GET /api/storefront/instances/{id}/activity-log` — List Activity Log Entries
- `PUT /api/storefront/instances/{id}/connection` — Update Connection
- `GET /api/storefront/instances/{id}/dashboard` — Get Instance Dashboard
- `GET /api/storefront/instances/{id}/fulfillments` — List Fulfillments
- `GET /api/storefront/instances/{id}/fulfillments/stats` — Get Fulfillment Stats
- `POST /api/storefront/instances/{id}/fulfillments/{id2}/submit` — Submit Fulfillment
- `GET /api/storefront/instances/{id}/inventory` — List Inventory Comparison
- `POST /api/storefront/instances/{id}/inventory/push-tracked` — Push Inventory
- `GET /api/storefront/instances/{id}/inventory/summary` — Get Inventory Summary
- `GET /api/storefront/instances/{id}/mappings` — Get Field Mappings
- `PUT /api/storefront/instances/{id}/mappings` — Update Field Mappings
- `GET /api/storefront/instances/{id}/orders` — List Orders
- `POST /api/storefront/instances/{id}/orders/bulk-archive` — Bulk Archive Orders
- `POST /api/storefront/instances/{id}/orders/bulk-delete` — Bulk Delete Orders
- `POST /api/storefront/instances/{id}/orders/bulk-delete-sku-orders` — Bulk Delete SKU Orders
- `POST /api/storefront/instances/{id}/orders/bulk-unarchive` — Bulk Unarchive Orders
- `POST /api/storefront/instances/{id}/orders/create-sku-orders` — Bulk Create SKU Orders
- `GET /api/storefront/instances/{id}/orders/filter-options` — Get Order Filter Options
- `GET /api/storefront/instances/{id}/orders/latest-sync-info` — Get Latest Order Sync Info
- `POST /api/storefront/instances/{id}/orders/refresh-tracked` — Refresh Orders from Store
- `POST /api/storefront/instances/{id}/orders/update-sku-orders` — Bulk Update SKU Orders
- `DELETE /api/storefront/instances/{id}/orders/{id2}` — Delete Order
- `GET /api/storefront/instances/{id}/orders/{id2}` — Get Order
- `GET /api/storefront/instances/{id}/orders/{id2}/activity-log` — Get Order Activity Log
- `POST /api/storefront/instances/{id}/orders/{id2}/archive` — Archive Order
- `POST /api/storefront/instances/{id}/orders/{id2}/create-sku-order` — Create SKU Order
- `POST /api/storefront/instances/{id}/orders/{id2}/push-cancellation` — Push Order Cancellation
- `GET /api/storefront/instances/{id}/orders/{id2}/raw` — Get Raw Order from Store
- `POST /api/storefront/instances/{id}/orders/{id2}/refetch` — Refetch Order from Store
- `DELETE /api/storefront/instances/{id}/orders/{id2}/sku-order` — Delete SKU Order
- `POST /api/storefront/instances/{id}/orders/{id2}/unarchive` — Unarchive Order
- `POST /api/storefront/instances/{id}/orders/{id2}/update-sku-order` — Update SKU Order
- `GET /api/storefront/instances/{id}/products` — List Store Products
- `PUT /api/storefront/instances/{id}/products/archive` — Bulk Archive Store Products
- `POST /api/storefront/instances/{id}/products/archiveable` — Check Store Products Are Archiveable
- `POST /api/storefront/instances/{id}/products/bulk-map` — Bulk Map Store Products By SKU
- `POST /api/storefront/instances/{id}/products/create-sku-products` — Bulk Create SKU.io Products From Store Products
- `PUT /api/storefront/instances/{id}/products/delete` — Bulk Delete Store Products
- `PUT /api/storefront/instances/{id}/products/deleteable` — Check Store Products Are Deleteable
- `GET /api/storefront/instances/{id}/products/export` — Export Store Products
- `GET /api/storefront/instances/{id}/products/latest-sync-info` — Get Catalogue Sync Info
- `PUT /api/storefront/instances/{id}/products/map` — Bulk Map Store Products
- `GET /api/storefront/instances/{id}/products/push-summary` — Get Product Push Summary
- `POST /api/storefront/instances/{id}/products/push-tracked` — Push Products To Store
- `POST /api/storefront/instances/{id}/products/refresh-tracked` — Import Store Catalogue
- `PUT /api/storefront/instances/{id}/products/unarchive` — Bulk Unarchive Store Products
- `GET /api/storefront/instances/{id}/products/{id2}` — Get Store Product
- `POST /api/storefront/instances/{id}/products/{id2}/create-sku-product` — Create SKU.io Product From Store Product
- `DELETE /api/storefront/instances/{id}/products/{id2}/map` — Unmap Store Product
- `POST /api/storefront/instances/{id}/products/{id2}/map` — Map Store Product
- `GET /api/storefront/instances/{id}/products/{id2}/orders` — List Orders For Store Product
- `GET /api/storefront/instances/{id}/products/{id2}/raw` — Get Raw Store Product Payload
- `POST /api/storefront/instances/{id}/products/{id2}/smart-match` — Get Product Match Suggestions
- `POST /api/storefront/instances/{id}/products/{id2}/sync` — Sync Store Product
- `POST /api/storefront/instances/{id}/test-connection` — Test Stored Connection
- `GET /api/storefront/instances/{id}/warehouses` — List Warehouses
- `POST /api/storefront/test-connection` — Test Store Credentials

_Spec version 1.0.0 → 1.0.0._
