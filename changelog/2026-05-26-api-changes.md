---
title: API changes — 2026-05-26
description: This release includes 6 additions, 6 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-05-26
---

This release includes 6 additions, 6 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Products
- `GET /api/woo-commerce/1/products/latest-sync-info` — Get Products Latest Sync Info
- `POST /api/woo-commerce/1/products/refresh-product` — Refresh Single Product
- `POST /api/woo-commerce/1/products/refresh-tracked` — Refresh Products (Tracked)
- `POST /api/woo-commerce/1/products/search-woocommerce` — Search WooCommerce Products

### Purchase Orders
- `GET //{domain}/api/purchase-orders/{purchase_order}/lines-for-receiving` — Get PO Lines for Receiving

### Sales Channels
- `POST /api/woo-commerce/{integration_instance}/products/refresh-tracked` — Refresh Products (Tracked)

## Changed

### Inbound Shipments
- `GET //{protocol}{domain}/api/inbound-shipments` — List Inbound Shipments
  - new parameter(s): `filter[logistics_<slug>_actual][is_empty]`, `filter[logistics_<slug>_estimate][on_or_after]`, `filter_groups[conjunction]`
- `GET /api/inbound-shipments` — List Inbound Shipments
  - new parameter(s): `filter[logistics_<slug>_actual][is_empty]`, `filter[logistics_<slug>_estimate][on_or_after]`, `filter_groups[conjunction]`

### Purchase Orders
- `GET //{domain}/api/purchase-orders/list` — List Purchase Orders (Vue3 List)
  - new parameter(s): `filter[logistics_<slug>_actual][on_or_before]`, `filter[logistics_<slug>_estimate][on_or_after]`
- `GET /api/purchase-orders/list` — List Purchase Orders (Vue3 List)
  - new parameter(s): `filter[logistics_<slug>_actual][on_or_before]`, `filter[logistics_<slug>_estimate][on_or_after]`

### Users
- `DELETE /api/users/{user}` — Delete (Deactivate) / Restore User
  - new response code(s): `404`
- `PUT /api/users/{user}` — Update User
  - new response code(s): `404`

_Spec version 1.0.0 → 1.0.0._
