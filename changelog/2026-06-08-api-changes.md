---
title: API changes — 2026-06-08
description: This release includes 15 additions, 5 removals. 5 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-06-08
---

This release includes 15 additions, 5 removals. 5 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Payments
- **Removed** `GET //{domain}/api/stripe/integrations/{id}/invoices` — List Invoices by Instance
- **Removed** `POST //{domain}/api/stripe/invoices` — Send Invoice
- **Removed** `POST //{domain}/api/stripe/invoices/{id}/refunds` — Issue Refund
- **Removed** `POST //{domain}/api/stripe/invoices/{id}/void` — Void Invoice
- **Removed** `GET //{domain}/api/stripe/sales-orders/{salesOrderId}/invoices` — List Invoices for Sales Order

## Added

### API
- `GET /api/record-locks/{recordType}/{recordId}` — Get Lock State
- `POST /api/record-locks/{recordType}/{recordId}/acquire` — Acquire Lock
- `POST /api/record-locks/{recordType}/{recordId}/heartbeat` — Heartbeat Lock
- `POST /api/record-locks/{recordType}/{recordId}/release` — Release Lock
- `POST /api/record-locks/{recordType}/{recordId}/request-edit` — Request Edit Access
- `POST /api/record-locks/{recordType}/{recordId}/takeover` — Take Over Lock

### Payments
- `GET /api/stripe/integrations/{id}/invoices` — List Invoices by Instance
- `POST /api/stripe/invoices` — Send Invoice
- `GET /api/stripe/invoices/{id}` — Show Invoice
- `GET /api/stripe/invoices/{id}/activity-log` — Get Invoice Activity Log
- `POST /api/stripe/invoices/{id}/refunds` — Issue Refund
- `POST /api/stripe/invoices/{id}/void` — Void Invoice
- `GET /api/stripe/sales-orders/{salesOrderId}/invoices` — List Invoices for Sales Order

### Sales Channels
- `POST //{domain}/api/amazon/unified/reports/{reportId}/request-raw-data-download` — Request Raw Data Download

### Sales Orders
- `GET /api/sales-orders/{salesOrder}/financials` — Get Sales Order Financials (Proforma)

_Spec version 1.0.0 → 1.0.0._
