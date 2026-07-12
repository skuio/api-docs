---
title: API changes — 2026-07-12
description: This release includes 7 additions, 1 change, 4 removals. 4 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-07-12
---

This release includes 7 additions, 1 change, 4 removals. 4 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Sales Orders
- **Removed** `GET /api/sales-orders/{salesOrder}/split-by-availability` — Preview Sales Order Split by Availability
- **Removed** `GET /api/sales-orders/{salesOrder}/split-by-supplier` — Preview Sales Order Split by Supplier
- **Removed** `GET /api/sales-orders/{salesOrder}/split-by-weight/{maxWeight}` — Preview Sales Order Split by Weight
- **Removed** `GET /api/sales-orders/{salesOrder}/split-one-each-order` — Preview Sales Order Split into Single-Item Orders

## Added

### Ledger (Accounting v2)
- `POST /api/ledger/entries/{entry}/refresh` — Refresh Journal Entry
- `POST /api/ledger/entries/{entry}/relink` — Link Entry to Existing Document
- `GET /api/ledger/entries/{entry}/relink-candidates` — List Relink Candidates
- `POST /api/ledger/reconciliation/auto-match/preview` — Preview Auto-Match
- `GET /api/ledger/reconciliation/excluded` — List Excluded SKU Entries

### Suppliers
- `PUT /api/suppliers/{supplier}/unverify-bank-details` — Unverify Supplier Bank Details
- `PUT /api/suppliers/{supplier}/verify-bank-details` — Verify Supplier Bank Details

## Changed

### Purchase Invoices
- `GET /api/purchase-invoices` — List Purchase Invoices
  - new parameter(s): `filter[attachment_filename]`, `filter[attachments_count]`

_Spec version 1.0.0 → 1.0.0._
