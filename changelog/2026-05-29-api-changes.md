---
title: API changes — 2026-05-29
description: This release 20 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-05-29
---

This release 20 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE //{domain}/api/data-feeds` — Bulk Delete Data Feeds
- `DELETE //{domain}/api/data-feeds/2` — Delete Data Feed
- `DELETE //{domain}/api/inventory-aging/notes/{product}` — Delete Product Note
- `GET //{domain}/api/data-feeds` — List Data Feeds
- `GET //{domain}/api/data-feeds/1` — Show Data Feed
- `GET //{domain}/api/data-feeds/import-config/product_feed` — Get Import Config
- `GET //{domain}/api/inventory-aging` — Get Inventory Aging Report
- `GET //{domain}/api/inventory-aging/distribution` — Get Inventory Aging Distribution
- `GET //{domain}/api/inventory-aging/export` — Export Inventory Aging to CSV
- `GET //{domain}/api/inventory-aging/metrics` — Get Inventory Aging Metrics
- `GET //{domain}/api/inventory-aging/sales-channels` — Get Sales Channels for Filter
- `GET /api/reporting/accounting-cogs/drilldown` — Drilldown Accounting COGS
- `POST //{domain}/api/data-feeds` — Create Data Feed
- `POST //{domain}/api/data-feeds/deletable` — Check Deletable
- `PUT //{domain}/api/data-feeds/1/archive` — Archive Data Feed
- `PUT //{domain}/api/data-feeds/1/unarchived` — Unarchive Data Feed
- `PUT //{domain}/api/data-feeds/2` — Update Data Feed
- `PUT //{domain}/api/data-feeds/archive` — Bulk Archive Data Feeds
- `PUT //{domain}/api/data-feeds/unarchive` — Bulk Unarchive Data Feeds
- `PUT //{domain}/api/inventory-aging/notes/{product}` — Update Product Note

_Spec version 1.0.0 → 1.0.0._
