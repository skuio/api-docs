---
title: API changes — 2026-09-16
description: This release includes 22 additions, 1 removal. 1 breaking change — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-09-16
---

This release includes 22 additions, 1 removal. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Agent Console
- **Removed** `POST /api/support/agent/releases` — Record Support Release

## Added

### Inventory Movements
- `GET /api/v2/inventory-movements/list/export/download` — Download Inventory Movements Export

### Organization
- `GET /api/v2/product-types` — List Product Types
- `POST /api/v2/product-types` — Create Product Type
- `GET /api/v2/product-types/proposals/{trackedJobLog}` — Get Product Type Proposal Run
- `POST /api/v2/product-types/proposals/{trackedJobLog}/apply` — Apply Product Type Proposals
- `POST /api/v2/product-types/propose` — Propose Product Types
- `GET /api/v2/product-types/tree` — Get Product Type Tree
- `GET /api/v2/product-types/{type}` — Get Product Type
- `PUT /api/v2/product-types/{type}` — Update Product Type
- `PUT /api/v2/product-types/{type}/archive` — Archive Product Type
- `POST /api/v2/product-types/{type}/merge` — Merge Product Type
- `PUT /api/v2/product-types/{type}/unarchive` — Unarchive Product Type

### Product Listings
- `POST /api/v2/listing-drafts/bulk` — Create Drafts in Bulk
- `POST /api/v2/listing-drafts/bulk-publish` — Bulk Publish Drafts
- `POST /api/v2/listing-drafts/resolve-categories` — Resolve Draft Categories
- `GET /api/v2/sales-channels/{salesChannel}/category-map` — Get Channel Category Map
- `PUT /api/v2/sales-channels/{salesChannel}/category-map` — Replace Channel Category Map
- `POST /api/v2/sales-channels/{salesChannel}/category-map/seed` — Seed Channel Category Map

### Products
- `GET /api/v2/products/{product}/channel-categories` — List Product Channel Categories
- `DELETE /api/v2/products/{product}/channel-categories/{salesChannel}` — Remove Product Channel Category Override
- `PUT /api/v2/products/{product}/channel-categories/{salesChannel}` — Set Product Channel Category Override
- `GET /api/v2/products/{product}/inbound-shipment-lines` — Get Product Inbound Shipment Lines

_Spec version 1.0.0 → 1.0.0._
