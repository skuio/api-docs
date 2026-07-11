---
title: API changes — 2026-07-11
description: This release includes 15 additions, 5 changes. 5 breaking changes — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-07-11
---

This release includes 15 additions, 5 changes. 5 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Purchase Orders
- **Changed** `GET /api/purchase-orders` — List Purchase Orders (list view)
  - removed parameter(s): `table_specifications`

#### Sales Credits
- **Changed** `GET /api/sales-credits` — List Sales Credits
  - removed parameter(s): `table_specifications`

#### Suppliers
- **Changed** `GET /api/suppliers` — List Suppliers
  - removed parameter(s): `table_specifications`
- **Changed** `GET /api/suppliers/{supplier}/pricing-tiers` — Get Supplier Pricing Tiers
  - removed parameter(s): `table_specifications`
- **Changed** `GET /api/suppliers/{supplier}/warehouses` — Get Supplier Warehouses
  - removed parameter(s): `table_specifications`

## Added

### Channel Refunds
- `POST /api/channel-refund-requests/{channelRefundRequest}/check-status` — Check Channel Refund Status
- `POST /api/channel-refund-requests/{channelRefundRequest}/retry` — Retry Channel Refund Request
- `GET /api/sales-orders/{salesOrder}/channel-refund/context` — Get Channel Refund Context
- `GET /api/sales-orders/{salesOrder}/channel-refunds` — List Channel Refund Requests
- `POST /api/sales-orders/{salesOrder}/channel-refunds` — Issue Channel Refund

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
- `GET /api/purchase-invoices/{purchaseInvoice}/calendar.ics` — Download Due-Date Calendar Event

### Sales Orders
- `GET /api/sales-orders/list/export/download` — Download Sales Orders Export

_Spec version 1.0.0 → 1.0.0._
