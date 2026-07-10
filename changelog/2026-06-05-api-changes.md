---
title: API changes — 2026-06-05
description: This release includes 8 additions, 2 changes, 2 removals. 2 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-06-05
---

This release includes 8 additions, 2 changes, 2 removals. 2 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Inbound Shipments
- **Removed** `GET //{protocol}{domain}/api/inbound-shipments` — List Inbound Shipments

#### Sales Channels
- **Removed** `GET //{domain}/api/shopify/install/{claimToken}/status` — Poll Claim Status

## Added

### Fulfillment Orders
- `GET /api/export/fulfillment-orders/packing-slips` — Print Packing Slips
- `POST /api/fulfillment-orders/bulk-cancel` — Bulk Cancel Fulfillment Orders
- `POST /api/fulfillment-orders/bulk-submit` — Bulk Submit Fulfillment Orders
- `GET /api/fulfillment-orders/list` — List Fulfillment Orders (Data Table)
- `GET /api/fulfillment-orders/{fulfillmentOrder}/line-items` — Get Fulfillment Order Line Items
- `POST /api/fulfillment-orders/{fulfillmentOrder}/record-shipment` — Record Shipment
- `GET /api/fulfillment-orders/{fulfillmentOrder}/shipping-provider-options` — Get Shipping Provider Options

### Sales Orders
- `GET /api/sales-orders/{salesOrder}/fulfillments` — List Order Shipments

## Changed

### Export
- `GET /api/export/download` — Download Export File
  - new response code(s): `404`

### Sales Channels
- `POST //{domain}/api/shopify/install/{claimToken}/claim` — Claim Install (Attach to Existing Workspace)
  - new response code(s): `401`, `404`
  - removed response code(s): `202`

_Spec version 1.0.0 → 1.0.0._
