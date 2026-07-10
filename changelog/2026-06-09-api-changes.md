---
title: API changes — 2026-06-09
description: This release includes 10 additions, 1 change. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-06-09
---

This release includes 10 additions, 1 change. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Financials
- **Changed** `GET /api/v2/financials/daily-summary` — Daily Financial Summary
  - removed parameter(s): `date_from`, `date_to`

## Added

### Inbound Shipments
- `GET //{protocol}{domain}/api/inbound-shipments` — List Inbound Shipments

### Returns & RMAs
- `GET /api/return-disposition-policies` — List Disposition Policies
- `POST /api/return-disposition-policies` — Create Disposition Policy
- `POST /api/return-disposition-policies/reorder` — Reorder Disposition Policies
- `DELETE /api/return-disposition-policies/{returnDispositionPolicy}` — Delete Disposition Policy
- `GET /api/return-disposition-policies/{returnDispositionPolicy}` — Get Disposition Policy
- `PUT /api/return-disposition-policies/{returnDispositionPolicy}` — Update Disposition Policy
- `POST /api/return-receipts/{returnReceipt}/lines/bulk-disposition` — Bulk Set Disposition on Lines

### Sales Orders
- `POST /api/sales-orders/bulk-email` — Bulk Email Customers About Orders
- `POST /api/sales-orders/bulk-email/preview` — Preview Bulk Customer Email

_Spec version 1.0.0 → 1.0.0._
