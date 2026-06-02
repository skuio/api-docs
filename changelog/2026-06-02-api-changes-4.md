---
title: API changes — 2026-06-02
description: This release 7 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-02
---

This release 7 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/sales-order-fulfillments/{salesOrderFulfillment}` — Void Shipment
- `GET /api/fulfillment-orders` — Dispatch Board — Active FOs Across All Orders
- `GET /api/fulfillment-orders/{fulfillmentOrder}/activity-log` — Get Fulfillment Order Activity Log
- `GET /api/sales-order-lines/{salesOrderLine}/suggest-warehouse` — Suggest Fulfillment Warehouse
- `PATCH /api/fulfillment-orders/{fulfillmentOrder}/shipping` — Edit Fulfillment Order Shipping Details
- `POST /api/fulfillment-orders/{fulfillmentOrder}/merge` — Merge Fulfillment Orders
- `POST /api/sales-order-lines/{salesOrderLine}/split-across-warehouses` — Split Line Across Warehouses

_Spec version 1.0.0 → 1.0.0._
