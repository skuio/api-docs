---
title: API changes — 2026-11-27
description: This release includes 6 additions, 1 change, 1 removal. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-11-27
---

This release includes 6 additions, 1 change, 1 removal. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Purchase Orders
- **Removed** `POST /api/purchase-orders/{purchase_order}/split-by-destination` — Split Purchase Order by Destination

## Added

### Configuration
- `DELETE /api/financial-alerts/classifications` — Bulk Delete Classifications

### Purchase Orders
- `GET /api/purchase-orders/{purchase_order}/line-allocations` — Get Purchase Order Line Allocations
- `PUT /api/purchase-orders/{purchase_order}/line-allocations` — Update Purchase Order Line Allocations

### Sales Orders
- `GET /api/sales-orders/{salesOrder}/shipping-address-type` — Get Sales Order Address Type
- `POST /api/sales-orders/{salesOrder}/shipping-address-type/recheck` — Re-check Sales Order Address Type

### TikTok Posting
- `POST /api/tiktok-posting/posts/{tikTokPost}/deleted-in-tiktok` — Mark TikTok Post Deleted in TikTok

## Changed

### Configuration
- `DELETE /api/financial-alerts/classifications/{classification}` — Delete Classification
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
