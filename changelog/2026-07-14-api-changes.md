---
title: API changes — 2026-07-14
description: This release includes 12 additions, 7 removals. 7 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-07-14
---

This release includes 12 additions, 7 removals. 7 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Outsourced Production
- **Removed** `POST /api/manufacturing/manufacturing-orders/{id}/outsource` — Outsource MO
- **Removed** `POST /api/manufacturing/manufacturing-orders/{id}/outsourced-receipt` — Record Outsourced Receipt

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
- `POST /api/manufacturing/manufacturing-orders/{manufacturingOrder}/outsource` — Outsource MO
- `POST /api/manufacturing/manufacturing-orders/{manufacturingOrder}/outsourced-receipt` — Record Outsourced Receipt

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

_Spec version 1.0.0 → 1.0.0._
