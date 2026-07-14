---
title: API changes — 2026-07-14
description: This release includes 10 additions, 5 changes, 5 removals. 5 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-07-14
---

This release includes 10 additions, 5 changes, 5 removals. 5 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Suppliers
- **Removed** `GET /api/suppliers/{supplier}/ap-summary` — Get Supplier AP Summary
- **Removed** `GET /api/suppliers/{supplier}/payables` — List Supplier Payables
- **Removed** `GET /api/suppliers/{supplier}/statement` — Get Supplier Statement
- **Removed** `GET /api/suppliers/{supplier}/statement/export` — Export Supplier Statement

#### Vendor Credits
- **Removed** `GET /api/vendor-credits/{vendor_credit}/invoice/preview` — Preview Credit Note

## Added

### Bills
- `POST /api/bills/{bill}/reset-due-date` — Reset Bill Due Date to Term

### Outsourced Production
- `GET /api/manufacturing/manufacturing-orders/{manufacturingOrder}/backflush-preview` — Get Backflush Preview

### Purchase Invoices
- `POST /api/purchase-invoices/{purchaseInvoice}/reset-due-date` — Reset Invoice Due Date to Term

### Purchase Orders
- `GET /api/purchase-orders/{purchase_order}/changes-since-sent` — Get Changes Since Last Sent
- `GET /api/purchase-orders/{purchase_order}/snapshots` — List Purchase Order Revisions
- `GET /api/purchase-orders/{purchase_order}/snapshots/{snapshot}` — Get Purchase Order Revision
- `GET /api/purchase-orders/{purchase_order}/supplier-responses` — List Supplier Responses
- `POST /api/purchase-orders/{purchase_order}/supplier-responses` — Record Supplier Response
- `POST /api/purchase-orders/{purchase_order}/supplier-responses/{response}/apply` — Apply Supplier Confirmed Changes

### Vendor Credits
- `GET /api/vendor-credits/{vendor_credit}/pdf` — Get Vendor Credit PDF

## Changed

### BOMs
- `POST /api/manufacturing/boms/{id}/activate` — Activate BOM
  - removed response code(s): `200`

### Contractors
- `DELETE /api/manufacturing/contractors/{supplier}` — Delete Contractor
  - new response code(s): `422`

### Manufacturing Orders
- `POST /api/manufacturing/manufacturing-orders/{id}/confirm` — Confirm Manufacturing Order
  - removed response code(s): `200`
- `POST /api/manufacturing/manufacturing-orders/{id}/start` — Start Manufacturing Order
  - removed response code(s): `200`
- `GET /api/manufacturing/manufacturing-orders/{manufacturingOrder}/print` — Download Work Order PDF
  - new response code(s): `500`

_Spec version 1.0.0 → 1.0.0._
