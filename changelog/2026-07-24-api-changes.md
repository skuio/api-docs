---
title: API changes — 2026-07-24
description: This release includes 18 additions, 3 changes. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-07-24
---

This release includes 18 additions, 3 changes. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Inventory Intelligence
- **Changed** `GET /api/inventory-forecasting/schedule-runs` — List All Runs
  - removed parameter(s): `date_from`, `date_to`, `per_page`, `run_type`, `search`, `status`

## Added

### Fulfillment Orders
- `GET /api/fulfillment-orders/{fulfillmentOrder}/packing-slip-print-events` — List Fulfillment Order Packing Slip Print Events
- `PATCH /api/fulfillment-orders/{fulfillmentOrder}/packing-slip-print-events/{packingSlipPrintEvent}` — Update Packing Slip Print Event Reprint Reason
- `GET /api/fulfillment-orders/{fulfillmentOrder}/packing-slip-print-events/{packingSlipPrintEvent}/download` — Download Fulfillment Order Packing Slip Print Copy

### Ledger (Accounting v2)
- `DELETE /api/ledger/reconciliation/inventory/adjustment` — Reverse Inventory Reconciliation Adjustment

### QuickBooks Online
- `GET /api/qbo/bill-payments/{id}/activity-log` — Get Bill Payment Activity Log
- `GET /api/qbo/deposits/{id}/activity-log` — Get Deposit Activity Log
- `GET /api/qbo/items/{id}/activity-log` — Get Item Activity Log
- `GET /api/qbo/purchase-orders/{id}/activity-log` — Get Purchase Order Activity Log
- `GET /api/qbo/purchases/{id}/activity-log` — Get Purchase Activity Log
- `GET /api/qbo/vendor-credits/{id}/activity-log` — Get Vendor Credit Activity Log
- `GET /api/qbo/vendors/{id}/activity-log` — Get Vendor Activity Log

### Reporting
- `GET /api/reports/supplier-pickup-orders` — List Supplier Pickup Orders
- `GET /api/reports/supplier-pickup-orders/summary` — Get Supplier Pickup Summary

### ShipHero
- `POST /api/shiphero/integration-instances/{integration_instance}/orders/refresh-order` — Import Single Order
- `POST /api/shiphero/integration-instances/{integration_instance}/orders/search` — Search Orders by Number
- `PUT /api/shiphero/integration-instances/{integration_instance}/products/{shipHeroProduct}/mapping` — Set Product SKU Mapping

### Xero
- `POST /api/xero/v2/contacts/{contact}/link-sku-entity` — Link Contact to SKU Entity
- `DELETE /api/xero/v2/contacts/{contact}/unlink-sku-entity` — Unlink Contact from SKU Entity

## Changed

### Amazon
- `DELETE /api/amazon/{integrationInstance}/removal-orders/{orderId}/undo-all-receipts` — Undo All Receipts for Removal Order
  - new response code(s): `422`
- `DELETE /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/remove-receipt` — Remove Receipt (Single Shipment)
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
