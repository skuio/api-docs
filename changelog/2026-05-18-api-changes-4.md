---
title: API changes — 2026-05-18
description: This release 19 removed API endpoint(s).
authors: [product-team]
tags: [removed, breaking]
date: 2026-05-18
---

This release 19 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Removed

- `DELETE //{domain}/api/data-feeds` — Bulk Delete Data Feeds **(breaking)**
- `DELETE //{domain}/api/data-feeds/2` — Delete Data Feed **(breaking)**
- `DELETE //{domain}/api/inventory-aging/notes/{product}` — Delete Product Note **(breaking)**
- `GET //{domain}/api/data-feeds` — List Data Feeds **(breaking)**
- `GET //{domain}/api/data-feeds/1` — Show Data Feed **(breaking)**
- `GET //{domain}/api/data-feeds/import-config/product_feed` — Get Import Config **(breaking)**
- `GET //{domain}/api/inventory-aging` — Get Inventory Aging Report **(breaking)**
- `GET //{domain}/api/inventory-aging/distribution` — Get Inventory Aging Distribution **(breaking)**
- `GET //{domain}/api/inventory-aging/export` — Export Inventory Aging to CSV **(breaking)**
- `GET //{domain}/api/inventory-aging/metrics` — Get Inventory Aging Metrics **(breaking)**
- `GET //{domain}/api/inventory-aging/sales-channels` — Get Sales Channels for Filter **(breaking)**
- `POST //{domain}/api/data-feeds` — Create Data Feed **(breaking)**
- `POST //{domain}/api/data-feeds/deletable` — Check Deletable **(breaking)**
- `PUT //{domain}/api/data-feeds/1/archive` — Archive Data Feed **(breaking)**
- `PUT //{domain}/api/data-feeds/1/unarchived` — Unarchive Data Feed **(breaking)**
- `PUT //{domain}/api/data-feeds/2` — Update Data Feed **(breaking)**
- `PUT //{domain}/api/data-feeds/archive` — Bulk Archive Data Feeds **(breaking)**
- `PUT //{domain}/api/data-feeds/unarchive` — Bulk Unarchive Data Feeds **(breaking)**
- `PUT //{domain}/api/inventory-aging/notes/{product}` — Update Product Note **(breaking)**

_Spec version 1.0.0 → 1.0.0._
