---
title: API changes — 2026-07-14
description: This release includes 6 additions.
authors: [product-team]
tags: [added]
date: 2026-07-14
---

This release includes 6 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Purchase Invoices
- `POST /api/purchase-invoices/supplier-payments/scan-proof` — Scan Payment Proof
- `POST /api/purchase-invoices/supplier-payments/{supplierPaymentId}/send-remittance` — Send Supplier Payment Remittance
- `GET /api/purchase-invoices/supplier-payments/{supplierPayment}/attachments` — List Supplier Payment Attachments
- `POST /api/purchase-invoices/supplier-payments/{supplierPayment}/attachments` — Upload Supplier Payment Attachment
- `DELETE /api/purchase-invoices/supplier-payments/{supplierPayment}/attachments/{attachment}` — Delete Supplier Payment Attachment
- `GET /api/purchase-invoices/supplier-payments/{supplierPayment}/attachments/{attachment}` — Download Supplier Payment Attachment

_Spec version 1.0.0 → 1.0.0._
