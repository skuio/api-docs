---
title: API changes — 2026-06-24
description: This release 4 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-24
---

This release 4 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/export/fulfillment-orders/{fulfillmentOrder}/packing-slip/cache` — Clear FO Packing Slip Cache
- `DELETE /api/export/sales-order-fulfillments/{salesOrderFulfillment}/packing-slip/cache` — Clear Shipment Packing Slip Cache
- `GET /api/export/fulfillment-orders/{fulfillmentOrder}/packing-slip/cache-status` — Get FO Packing Slip Cache Status
- `GET /api/export/sales-order-fulfillments/{salesOrderFulfillment}/packing-slip/cache-status` — Get Shipment Packing Slip Cache Status

_Spec version 1.0.0 → 1.0.0._
