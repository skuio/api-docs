---
title: API changes — 2026-07-20
description: This release includes 15 additions.
authors: [product-team]
tags: [added]
date: 2026-07-20
---

This release includes 15 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Inbound Shipments
- `DELETE /api/inbound-shipment-receipts/{receipt}` — Delete Inbound Shipment Receipt
- `GET /api/inbound-shipment-receipts/{receipt}/delete-impact` — Preview Inbound Shipment Receipt Delete Impact
- `PATCH /api/inbound-shipment-receipts/{receipt}/lines/{line}` — Update Receipt Line Quantity
- `GET /api/inbound-shipment-receipts/{receipt}/lines/{line}/quantity-preview` — Preview Receipt Line Quantity
- `POST /api/inbound-shipments/receive/preview-release-impact` — Preview Inbound Shipment Release Impact

### Purchase Order Shipments
- `GET /api/inbound-shipments/receipts/{receipt}/delete-impact` — Preview Receipt Delete Impact

### Purchase Orders
- `PUT /api/purchase-orders/{purchase_order}/communications/supplier-phone` — Set Supplier WhatsApp/SMS Number

### Reporting
- `GET /api/reporting/irr/products/{product}/reconciliation-events` — List Product Reconciliation Events
- `GET /api/reporting/irr/suppliers/{supplier}/reconciliation-events` — List Supplier Reconciliation Events

### Returns & RMAs
- `POST /api/return-receipts/preview-release-impact` — Preview Return Receipt Release Impact
- `GET /api/return-receipts/{returnReceipt}/delete-impact` — Preview Return Receipt Delete Impact

### Shopify
- `GET /api/shopify/{integrationInstance}/products/{product}/raw-graphql` — Get Raw Product (GraphQL)

### Vendor Returns
- `GET /api/vendor-returns/{vendorReturn}/activity-log` — Get Vendor Return Activity Log
- `GET /api/vendor-returns/{vendorReturn}/allocations` — List Vendor Return Allocations
- `GET /api/vendor-returns/{vendorReturn}/ship-impact` — Preview Vendor Return Ship Impact

_Spec version 1.0.0 → 1.0.0._
