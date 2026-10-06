---
title: API changes — 2026-10-06
description: This release includes 7 additions, 12 removals. 12 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-10-06
---

This release includes 7 additions, 12 removals. 12 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Data Feeds
- **Removed** `DELETE /api/data-feeds` — Bulk Delete Data Feeds
- **Removed** `POST /api/data-feeds` — Create Data Feed
- **Removed** `PUT /api/data-feeds/archive` — Bulk Archive Data Feeds
- **Removed** `POST /api/data-feeds/deletable` — Check Data Feeds Deletable
- **Removed** `GET /api/data-feeds/import-config/product_feed` — Get Import Config
- **Removed** `PUT /api/data-feeds/unarchive` — Bulk Unarchive Data Feeds
- **Removed** `DELETE /api/data-feeds/{id}` — Delete Data Feed
- **Removed** `GET /api/data-feeds/{id}` — Get Data Feed
- **Removed** `PUT /api/data-feeds/{id}` — Update Data Feed
- **Removed** `PUT /api/data-feeds/{id}/archive` — Archive Data Feed
- **Removed** `PUT /api/data-feeds/{id}/unarchived` — Unarchive Data Feed

#### Reference Data (Read-Only)
- **Removed** `GET /api/v2/data-feeds` — List Data Feeds

## Added

### Fulfillment Orders
- `PATCH /api/fulfillment-orders/{fulfillmentOrder}/signature` — Update Fulfillment Order Signature Requirement

### Products
- `GET /api/v2/products/{product}/channel-exclusions` — List Product Channel Availability
- `DELETE /api/v2/products/{product}/channel-exclusions/{salesChannel}` — Allow Product On Channel
- `PUT /api/v2/products/{product}/channel-exclusions/{salesChannel}` — Exclude Product From Channel

### Shipfusion
- `GET /api/shipfusion/integration-instances/{integration_instance}/webhook-urls` — Get Webhook URLs

### Shippit
- `GET /api/shippit/instances/{integration_instance}/fulfillment-routing` — Get Fulfillment Routing
- `PUT /api/shippit/instances/{integration_instance}/fulfillment-routing` — Update Fulfillment Routing

_Spec version 1.0.0 → 1.0.0._
