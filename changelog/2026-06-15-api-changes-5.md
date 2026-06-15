---
title: API changes — 2026-06-15
description: This release 17 added, 10 removed API endpoint(s).
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-06-15
---

This release 17 added, 10 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/dashboard` — Show Dashboard Metrics
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/discrepancies` — Get Inventory Discrepancies
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/last-synced-at` — Get Last Synced At
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/product-movements` — Get Product Inventory Movements
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/without-shiphero-inventory` — Get SKU Products Without ShipHero Inventory
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/without-sku-products` — Get Items Without SKU Products
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/orders` — List Orders
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/orders/sync-progress/{trackedJobLogId}` — Get Order Sync Progress
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/orders/{order}` — Show Order
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/orders/{order}/detail` — Get Order Detail
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/warehouses` — List Warehouses
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/warehouses/download` — Download Warehouses from ShipHero
- `POST //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/create-stock-take` — Create Stock Take From Discrepancies
- `POST //{domain}/api/shiphero/integration-instances/{integration_instance}/inventory/refresh` — Refresh Inventory
- `POST //{domain}/api/shiphero/integration-instances/{integration_instance}/orders/sync` — Sync Orders
- `POST //{domain}/api/shiphero/integration-instances/{integration_instance}/orders/{order}/sync-detail` — Sync Single Order Detail
- `PUT //{domain}/api/shiphero/integration-instances/{integration_instance}/warehouses/map` — Map Warehouses

## Removed

- `GET //{domain}/api/shiphero/{integration_instance}/inventory/discrepancies` — Get Inventory Discrepancies **(breaking)**
- `GET //{domain}/api/shiphero/{integration_instance}/inventory/last-synced-at` — Get Last Synced At **(breaking)**
- `GET //{domain}/api/shiphero/{integration_instance}/inventory/product-movements` — Get Product Inventory Movements **(breaking)**
- `GET //{domain}/api/shiphero/{integration_instance}/inventory/without-shiphero-inventory` — Get SKU Products Without ShipHero Inventory **(breaking)**
- `GET //{domain}/api/shiphero/{integration_instance}/inventory/without-sku-products` — Get Items Without SKU Products **(breaking)**
- `GET //{domain}/api/shiphero/{integration_instance}/warehouses` — List Warehouses **(breaking)**
- `GET //{domain}/api/shiphero/{integration_instance}/warehouses/download` — Download Warehouses from ShipHero **(breaking)**
- `POST //{domain}/api/shiphero/{integration_instance}/inventory/create-stock-take` — Create Stock Take From Discrepancies **(breaking)**
- `POST //{domain}/api/shiphero/{integration_instance}/inventory/refresh` — Refresh Inventory **(breaking)**
- `PUT //{domain}/api/shiphero/{integration_instance}/warehouses/map` — Map Warehouses **(breaking)**

_Spec version 1.0.0 → 1.0.0._
