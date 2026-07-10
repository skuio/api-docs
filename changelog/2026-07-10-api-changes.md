---
title: API changes — 2026-07-10
description: This release includes 33 additions, 4 changes. 3 breaking changes — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-07-10
---

This release includes 33 additions, 4 changes. 3 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Sales Credits
- **Changed** `GET /api/v2/sales-credits` — List Sales Credits
  - new parameter(s): `archived`, `excluded[]`, `included[]`, `limit`, `search`, `sort`
  - removed parameter(s): `per_page`

#### Suppliers
- **Changed** `GET /api/v2/suppliers` — List Suppliers
  - new parameter(s): `archived`, `excluded[]`, `included[]`, `limit`, `search`, `sort`
  - removed parameter(s): `per_page`

#### Trackstar
- **Changed** `GET /api/trackstar/integration-instances/{integration_instance}/shipping-methods` — List Shipping Methods
  - removed parameter(s): `page`, `per_page`

## Added

### Accounting
- `POST /api/accounting/payments` — Create Payment
- `DELETE /api/accounting/payments/{id}` — Delete Payment
- `GET /api/accounting/payments/{id}` — Get Payment
- `PUT /api/accounting/payments/{id}` — Update Payment

### Bills
- `GET /api/bills/{id}/activity-log` — Get Bill Activity Log
- `GET /api/bills/{id}/documents` — List Bill Documents
- `GET /api/bills/{id}/notes` — List Bill Notes
- `POST /api/bills/{id}/notes` — Add Bill Note
- `DELETE /api/bills/{id}/notes/{id2}` — Delete Bill Note
- `PUT /api/bills/{id}/notes/{id2}/toggle-pin` — Toggle Bill Note Pin
- `GET /api/bills/{id}/payments` — List Bill Payments
- `POST /api/bills/{id}/payments` — Add Bill Payment
- `DELETE /api/bills/{id}/payments/{id2}` — Delete Bill Payment
- `PUT /api/bills/{id}/payments/{id2}` — Update Bill Payment
- `PUT /api/bills/{id}/tags` — Sync Bill Tags

### Financials
- `POST /api/financials/daily-summary` — Create Daily Financial Summary
- `DELETE /api/financials/daily-summary/{daily_summary}` — Delete Daily Financial Summary
- `GET /api/financials/daily-summary/{daily_summary}` — Get Daily Financial Summary
- `PUT /api/financials/daily-summary/{daily_summary}` — Update Daily Financial Summary

### Fulfillment Orders
- `POST /api/fulfillment-orders/{fulfillmentOrder}/apply-line-update` — Apply Fulfillment Order Line Update

### Organization
- `GET /api/v2/brands/{brand}` — Get Brand Detail Summary
- `GET /api/v2/brands/{brand}/activity-log` — Get Brand Activity Log

### Square
- `POST /api/square/instances/{squareIntegrationInstance}/payouts/sync` — Sync payouts
- `POST /api/square/orders/submit-fulfillments` — Submit fulfillments
- `GET /api/square/payouts` — List payouts
- `GET /api/square/payouts/{squarePayout}` — Get payout
- `GET /api/square/payouts/{squarePayout}/entries` — List payout entries

### Suppliers
- `PATCH /api/purchase-orders/{purchase_order}/invoice-reminders` — Manage Invoice Reminders
- `PUT /api/suppliers/{supplier}/invoice-reminders` — Update Supplier Invoice Reminders

### Trackstar
- `POST /api/trackstar/integration-instances/{integration_instance}/shipping-methods/auto-match` — Auto-match Shipping Methods
- `PUT /api/trackstar/integration-instances/{integration_instance}/shipping-methods/bulk-map` — Bulk Map Shipping Methods
- `GET /api/trackstar/integration-instances/{integration_instance}/shipping-methods/export` — Export Shipping Method Mappings
- `POST /api/trackstar/integration-instances/{integration_instance}/shipping-methods/import` — Import Shipping Method Mappings

## Changed

### Returns & RMAs
- `GET /api/v2/return-reasons` — List Return Reasons
  - new parameter(s): `archived`, `limit`, `page`, `search`, `sort`

_Spec version 1.0.0 → 1.0.0._
