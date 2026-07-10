---
title: API changes — 2026-05-12
description: This release includes 8 additions.
authors: [product-team]
tags: [added]
date: 2026-05-12
---

This release includes 8 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Adjustments & Transfers
- `GET /api/v2/warehouse-transfers/receipts/{receipt}/fifo-layers` — Get Receipt FIFO Layers
- `GET /api/v2/warehouse-transfers/receipts/{receipt}/inventory-movements` — Get Receipt Inventory Movements
- `PATCH /api/v2/warehouse-transfers/receipts/{receipt}/lines/{line}` — Update Receipt Line Quantity
- `GET /api/v2/warehouse-transfers/receipts/{receipt}/lines/{line}/quantity-preview` — Preview Receipt Line Quantity Change
- `GET /api/v2/warehouse-transfers/shipments/{shipment}/inventory-movements` — Get Shipment Inventory Movements
- `PATCH /api/v2/warehouse-transfers/shipments/{shipment}/lines/{line}` — Update Shipment Line Quantity
- `GET /api/v2/warehouse-transfers/shipments/{shipment}/lines/{line}/quantity-preview` — Preview Shipment Line Quantity Change

### Misc
- `GET /api/v2/inventory-movements/list/export` — Export Inventory Movements

_Spec version 1.0.0 → 1.0.0._
