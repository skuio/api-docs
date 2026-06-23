---
title: API changes — 2026-06-23
description: This release 12 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-23
---

This release 12 added API endpoint(s).

<!-- truncate -->

## Added

- `GET /api/fulfillment-orders/{fulfillmentOrder}/move-preview` — Preview Fulfillment Order Move (Coverage)
- `POST /api/quotes/bulk-archive` — Bulk Archive Quotes
- `POST /api/quotes/bulk-delete` — Bulk Delete Quotes
- `POST /api/quotes/bulk-expire` — Bulk Expire Quotes
- `POST /api/quotes/bulk-send` — Bulk Send Quotes
- `POST /api/quotes/bulk-unarchive` — Bulk Unarchive Quotes
- `POST /api/quotes/{quote}/allocation` — Set Quote Inventory Allocation
- `POST /api/quotes/{quote}/lines/bulk-update` — Bulk Update Lines
- `POST /api/quotes/{quote}/lines/bulk-warehouse` — Bulk Set Line Warehouse
- `POST /api/quotes/{quote}/lines/reorder` — Reorder Lines
- `POST /api/quotes/{quote}/lines/{line}/convert-to-revenue` — Convert Line to Revenue
- `PUT /api/quotes/{quote}/lines/{line}` — Update Quote Line

_Spec version 1.0.0 → 1.0.0._
