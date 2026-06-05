---
title: API changes — 2026-06-05
description: This release 8 added, 1 removed API endpoint(s).
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-06-05
---

This release 8 added, 1 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `GET /api/export/fulfillment-orders/packing-slips` — Print Packing Slips
- `GET /api/fulfillment-orders/list` — List Fulfillment Orders (Data Table)
- `GET /api/fulfillment-orders/{fulfillmentOrder}/line-items` — Get Fulfillment Order Line Items
- `GET /api/fulfillment-orders/{fulfillmentOrder}/shipping-provider-options` — Get Shipping Provider Options
- `GET /api/sales-orders/{salesOrder}/fulfillments` — List Order Shipments
- `POST /api/fulfillment-orders/bulk-cancel` — Bulk Cancel Fulfillment Orders
- `POST /api/fulfillment-orders/bulk-submit` — Bulk Submit Fulfillment Orders
- `POST /api/fulfillment-orders/{fulfillmentOrder}/record-shipment` — Record Shipment

## Removed

- `GET //{protocol}{domain}/api/inbound-shipments` — List Inbound Shipments **(breaking)**

_Spec version 1.0.0 → 1.0.0._
