---
title: API changes — 2026-05-29
description: This release includes 28 additions.
authors: [product-team]
tags: [added]
date: 2026-05-29
---

This release includes 28 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Data Feeds
- `DELETE //{domain}/api/data-feeds` — Bulk Delete Data Feeds
- `GET //{domain}/api/data-feeds` — List Data Feeds
- `POST //{domain}/api/data-feeds` — Create Data Feed
- `GET //{domain}/api/data-feeds/1` — Show Data Feed
- `PUT //{domain}/api/data-feeds/1/archive` — Archive Data Feed
- `PUT //{domain}/api/data-feeds/1/unarchived` — Unarchive Data Feed
- `DELETE //{domain}/api/data-feeds/2` — Delete Data Feed
- `PUT //{domain}/api/data-feeds/2` — Update Data Feed
- `PUT //{domain}/api/data-feeds/archive` — Bulk Archive Data Feeds
- `POST //{domain}/api/data-feeds/deletable` — Check Deletable
- `GET //{domain}/api/data-feeds/import-config/product_feed` — Get Import Config
- `PUT //{domain}/api/data-feeds/unarchive` — Bulk Unarchive Data Feeds

### Inventory Intelligence
- `GET //{domain}/api/inventory-aging` — Get Inventory Aging Report
- `GET //{domain}/api/inventory-aging/distribution` — Get Inventory Aging Distribution
- `GET //{domain}/api/inventory-aging/export` — Export Inventory Aging to CSV
- `GET //{domain}/api/inventory-aging/metrics` — Get Inventory Aging Metrics
- `DELETE //{domain}/api/inventory-aging/notes/{product}` — Delete Product Note
- `PUT //{domain}/api/inventory-aging/notes/{product}` — Update Product Note
- `GET //{domain}/api/inventory-aging/sales-channels` — Get Sales Channels for Filter

### Reporting
- `GET /api/reporting/accounting-cogs/drilldown` — Drilldown Accounting COGS

### Sales Channels
- `POST /api/shopify/{integrationInstance}/products/{product}/revenue-conversion` — Convert Product Lines to Revenue
- `GET /api/shopify/{integrationInstance}/products/{product}/revenue-conversion/affected-orders` — Get Affected Orders
- `GET /api/shopify/{integrationInstance}/products/{product}/revenue-conversion/preview` — Preview Revenue Conversion

### Shipping Providers
- `GET /api/starshipit/integration-instances/{integration_instance}/orders-chart` — Get Orders Chart (Date Range)
- `GET /api/starshipit/integration-instances/{integration_instance}/orders/{order}` — Get Order
- `GET /api/starshipit/integration-instances/{integration_instance}/orders/{order}/label` — Download Label (PDF base64)
- `GET /api/starshipit/integration-instances/{integration_instance}/orders/{order}/packing-slip` — Download Packing Slip (PDF base64)
- `GET /api/starshipit/integration-instances/{integration_instance}/orders/{order}/webhook-events` — Get Order Webhook Events

_Spec version 1.0.0 → 1.0.0._
