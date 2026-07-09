---
title: API changes — 2026-07-09
description: This release 8 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-07-09
---

This release 8 added API endpoint(s).

<!-- truncate -->

## Added

- `GET /api/consignment/inventory` — List Consignment Inventory
- `GET /api/consignment/settings` — Get Consignment Aging Settings
- `GET /api/consignment/suppliers/{supplier}/statement` — Get Consignment Statement of Account
- `GET /api/purchase-orders/{purchaseOrder}/consignment/settlement-preview` — Get Consignment Settlement Preview
- `POST /api/consignment/settlements/{settlement}/share` — Share Consignment Settlement Report
- `POST /api/purchase-orders/{purchaseOrder}/consignment/returns` — Return Unsold Consigned Stock
- `POST /api/purchase-orders/{purchaseOrder}/consignment/settlements` — Create Consignment Settlement
- `PUT /api/consignment/settings` — Update Consignment Aging Settings

_Spec version 1.0.0 → 1.0.0._
