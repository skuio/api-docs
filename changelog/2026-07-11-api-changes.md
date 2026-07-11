---
title: API changes — 2026-07-11
description: This release includes 12 additions.
authors: [product-team]
tags: [added]
date: 2026-07-11
---

This release includes 12 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### eBay
- `GET /api/ebay-global-reports/blemished-auto-list-instances` — List Blemished Auto-List eBay Instances
- `POST /api/ebay-global-reports/uncovered-blemished-products/list` — Auto-List Blemished Products on eBay
- `GET /api/ebay/{integrationInstance}/blemished-auto-list-settings` — Get Blemished Auto-List Settings
- `PUT /api/ebay/{integrationInstance}/blemished-auto-list-settings` — Update Blemished Auto-List Settings

### Purchase Invoices
- `GET /api/purchase-invoices/aging-report` — Get Payables Aging Report
- `GET /api/purchase-invoices/supplier-payments` — List Supplier Payments
- `POST /api/purchase-invoices/supplier-payments` — Record Supplier Payment
- `GET /api/purchase-invoices/supplier-payments/allocation-suggestion` — Get Allocation Suggestion
- `DELETE /api/purchase-invoices/supplier-payments/{supplierPayment}` — Reverse Supplier Payment
- `GET /api/purchase-invoices/supplier-payments/{supplierPayment}` — Get Supplier Payment
- `GET /api/purchase-invoices/{purchaseInvoice}/calendar.ics` — Download Due-Date Calendar Event

### Sales Orders
- `GET /api/sales-orders/list/export/download` — Download Sales Orders Export

_Spec version 1.0.0 → 1.0.0._
