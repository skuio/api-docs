---
title: API changes — 2026-07-24
description: This release includes 6 additions, 2 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-07-24
---

This release includes 6 additions, 2 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Fulfillment Orders
- `GET /api/fulfillment-orders/{fulfillmentOrder}/packing-slip-print-events` — List Fulfillment Order Packing Slip Print Events
- `PATCH /api/fulfillment-orders/{fulfillmentOrder}/packing-slip-print-events/{packingSlipPrintEvent}` — Update Packing Slip Print Event Reprint Reason
- `GET /api/fulfillment-orders/{fulfillmentOrder}/packing-slip-print-events/{packingSlipPrintEvent}/download` — Download Fulfillment Order Packing Slip Print Copy

### ShipHero
- `POST /api/shiphero/integration-instances/{integration_instance}/orders/refresh-order` — Import Single Order
- `POST /api/shiphero/integration-instances/{integration_instance}/orders/search` — Search Orders by Number
- `PUT /api/shiphero/integration-instances/{integration_instance}/products/{shipHeroProduct}/mapping` — Set Product SKU Mapping

## Changed

### Amazon
- `DELETE /api/amazon/{integrationInstance}/removal-orders/{orderId}/undo-all-receipts` — Undo All Receipts for Removal Order
  - new response code(s): `422`
- `DELETE /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/remove-receipt` — Remove Receipt (Single Shipment)
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
