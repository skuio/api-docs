---
title: API changes — 2026-11-26
description: This release includes 9 additions.
authors: [product-team]
tags: [added]
date: 2026-11-26
---

This release includes 9 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Adjustments & Transfers
- `GET /api/v2/warehouse-transfers/{warehouseTransfer}/network-send-expiry` — Get Network Send Expiry

### Amazon
- `GET /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/lot-suggestions` — Get Lot Suggestions

### Inventory Expiry & Shelf-Life
- `PUT /api/lots/bulk-edit` — Bulk Edit Lots
- `POST /api/lots/bulk-edit/import` — Import Bulk Lot Edit CSV
- `POST /api/lots/bulk-edit/import/preview` — Preview Bulk Lot Edit CSV
- `GET /api/lots/bulk-edit/template` — Download Bulk Lot Edit Template (CSV)
- `POST /api/lots/{fifoLayer}/move` — Move Lot Quantity
- `GET /api/lots/{fifoLayer}/move-targets` — Get Lot Move Targets

### Inventory Intelligence
- `GET /api/inventory-aging/network-units` — List Lot-Tracked Units at Units-Only Networks

_Spec version 1.0.0 → 1.0.0._
