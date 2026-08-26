---
title: API changes — 2026-08-26
description: This release includes 13 additions, 3 changes, 5 removals. 7 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-08-26
---

This release includes 13 additions, 3 changes, 5 removals. 7 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Jobs & Logs
- **Removed** `GET /api/tracked-job-logs` — List Tracked Job Logs
- **Removed** `POST /api/tracked-job-logs` — Create Tracked Job Log
- **Removed** `DELETE /api/tracked-job-logs/{tracked_job_log}` — Delete Tracked Job Log
- **Removed** `PUT /api/tracked-job-logs/{tracked_job_log}` — Update Tracked Job Log

#### Products
- **Removed** `PATCH /api/products/{product}/default-financial-line-type` — Update Product Default Financial Line Type

### Incompatible changes

#### Amazon
- **Changed** `GET /api/amazon/unified/ledgers` — List Ledgers
  - removed parameter(s): `date_from`, `date_to`, `event_type`, `integration_instance_ids`, `page`, `per_page`, `search`, `sort`, `status`
- **Changed** `GET /api/amazon/unified/ledgers/export` — Export Ledgers
  - removed parameter(s): `date_from`, `date_to`, `event_type`, `integration_instance_ids`, `search`, `status`
  - new response code(s): `422`

## Added

### Amazon
- `PATCH /api/amazon/{integrationInstance}/products/{product}/revenue-mapping` — Set Revenue Line Mapping

### BigCommerce
- `PATCH /api/big-commerce/{integrationInstance}/products/{product}/revenue-mapping` — Set Revenue Line Mapping

### eBay
- `PATCH /api/ebay/{integrationInstance}/products/{product}/revenue-mapping` — Set Revenue Line Mapping

### Faire
- `PATCH /api/faire/instances/{integrationInstance}/products/{option}/revenue-mapping` — Set Revenue Line Mapping

### Inventory Movements
- `GET /api/v2/inventory-movements/aggregates` — Get Inventory Movement Aggregates

### Magento 1
- `PATCH /api/magento1/instances/{integrationInstance}/products/{product}/revenue-mapping` — Set Revenue Line Mapping

### Price Sync
- `GET /api/v2/sales-channels/{integrationInstance}/prices/pricing-tiers/coverage` — Get Pricing Level Coverage

### Products
- `PATCH /api/products/{product}/revenue-mapping` — Set Product Revenue Mapping

### Shopify
- `PATCH /api/shopify/{integrationInstance}/products/{product}/revenue-mapping` — Set Revenue Line Mapping

### Temu
- `PATCH /api/temu/{integrationInstance}/products/{product}/revenue-mapping` — Set Revenue Line Mapping

### TikTok Shop
- `PATCH /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/products/skus/{tikTokShopProductSku}/revenue-mapping` — Set Revenue Line Mapping

### Walmart
- `PATCH /api/walmart/{integrationInstance}/products/{product}/revenue-mapping` — Set Revenue Line Mapping

### WooCommerce
- `PATCH /api/woo-commerce/{integrationInstance}/products/{product}/revenue-mapping` — Set Revenue Line Mapping

## Changed

### Price Sync
- `GET /api/v2/sales-channels/{integrationInstance}/prices/comparison` — List Price Comparison
  - new parameter(s): `filter[priced_from]`

_Spec version 1.0.0 → 1.0.0._
