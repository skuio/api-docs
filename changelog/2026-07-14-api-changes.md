---
title: API changes — 2026-07-14
description: This release includes 10 additions, 4 removals. 4 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-07-14
---

This release includes 10 additions, 4 removals. 4 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Purchase Orders
- **Removed** `POST /api/purchase-orders/import-lines` — Import Lines from CSV
- **Removed** `POST /api/purchase-orders/import/preview` — Preview Purchase Order Import

#### Sales Credits
- **Removed** `GET /api/sales-credits/{sales_credit}/invoice/preview` — Preview Invoice

#### Vendor Credits
- **Removed** `GET /api/vendor-credits/{vendor_credit}/invoice/preview` — Preview Credit Note

## Added

### Bills
- `POST /api/bills/{bill}/reset-due-date` — Reset Bill Due Date to Term

### Purchase Invoices
- `POST /api/purchase-invoices/supplier-payments/scan-proof` — Scan Payment Proof
- `POST /api/purchase-invoices/supplier-payments/{supplierPaymentId}/send-remittance` — Send Supplier Payment Remittance
- `GET /api/purchase-invoices/supplier-payments/{supplierPayment}/attachments` — List Supplier Payment Attachments
- `POST /api/purchase-invoices/supplier-payments/{supplierPayment}/attachments` — Upload Supplier Payment Attachment
- `DELETE /api/purchase-invoices/supplier-payments/{supplierPayment}/attachments/{attachment}` — Delete Supplier Payment Attachment
- `GET /api/purchase-invoices/supplier-payments/{supplierPayment}/attachments/{attachment}` — Download Supplier Payment Attachment
- `POST /api/purchase-invoices/{purchaseInvoice}/reset-due-date` — Reset Invoice Due Date to Term

### Sales Credits
- `GET /api/sales-credits/{sales_credit}/pdf` — Get Sales Credit PDF

### Vendor Credits
- `GET /api/vendor-credits/{vendor_credit}/pdf` — Get Vendor Credit PDF

_Spec version 1.0.0 → 1.0.0._
