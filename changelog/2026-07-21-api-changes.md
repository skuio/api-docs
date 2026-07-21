---
title: API changes — 2026-07-21
description: This release includes 6 additions.
authors: [product-team]
tags: [added]
date: 2026-07-21
---

This release includes 6 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Inventory Expiry & Shelf-Life
- `GET /api/inventory-expiry/lots/{fifoLayer}/write-off-impact` — Preview Lot Write-Off Impact

### Movement Composer
- `POST /api/v2/inventory/movements/composer` — Commit Movement
- `POST /api/v2/inventory/movements/preview-demotion-impact` — Preview Demotion Impact
- `POST /api/v2/inventory/movements/preview-release-impact` — Preview Release Impact

### Shopify
- `GET /api/shopify/{integrationInstance}/pre-start-date-orders/results/{trackedJobLogId}` — Get Pre-Start-Date Order Search Results
- `POST /api/shopify/{integrationInstance}/pre-start-date-orders/search-all` — Search All Pre-Start-Date Orders (Async)

_Spec version 1.0.0 → 1.0.0._
