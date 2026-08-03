---
title: API changes — 2026-08-03
description: This release includes 17 additions, 4 changes. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-08-03
---

This release includes 17 additions, 4 changes. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Misc
- **Changed** `GET /api/users` — List Users
  - removed parameter(s): `limit`, `page`

## Added

### Buyers
- `POST /api/admin/portal/users/{user}/resend-invite` — Resend Buyer Invite

### Catalog
- `GET /api/square/catalog/{squareCatalogItem}` — Get Square Catalog Item

### Customers
- `GET /api/square/customers` — List Square Customers
- `POST /api/square/instances/{squareIntegrationInstance}/customers/sync` — Sync Square Customers

### Inventory
- `POST /api/square/instances/{squareIntegrationInstance}/inventory/sync` — Sync Square Inventory
- `GET /api/square/inventory` — List Square Inventory Counts

### Orders
- `POST /api/square/orders/bulk-delete` — Bulk Delete Square Orders
- `POST /api/square/orders/bulk-delete-sku-orders` — Bulk Delete SKU Orders
- `POST /api/square/orders/create-sku-orders` — Create SKU Orders (bulk)
- `POST /api/square/orders/update-sku-orders` — Update SKU Orders (bulk)
- `POST /api/square/orders/{squareOrder}/refresh` — Refresh Single Square Order
- `DELETE /api/square/orders/{squareOrder}/sku-order` — Delete Single SKU Order (unlink)

### Refunds
- `POST /api/square/instances/{squareIntegrationInstance}/refunds/sync` — Sync Square Refunds
- `GET /api/square/refunds` — List Square Refunds

### Webhooks
- `POST /api/square/instances/{squareIntegrationInstance}/webhooks/sync` — Sync Square Webhook Subscriptions
- `GET /api/square/webhooks/events` — List Webhook Events
- `GET /api/square/webhooks/subscriptions` — List Webhook Subscriptions

## Changed

### Catalog
- `GET /api/square/catalog/latest-sync-info` — Get Latest Catalog Sync Info
  - new response code(s): `422`

### Instances
- `GET /api/square/instances/{squareIntegrationInstance}/oauth/authorize-url` — Get OAuth Authorize URL
  - new response code(s): `422`

### Orders
- `GET /api/square/orders/latest-sync-info` — Get Latest Order Sync Info
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
