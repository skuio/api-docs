---
title: API changes — 2026-07-12
description: This release includes 17 additions, 1 change, 4 removals. 4 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-07-12
---

This release includes 17 additions, 1 change, 4 removals. 4 breaking changes — action required.

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
- `GET /api/ledger/entries/{entry}/link-candidates` — List Document Link Candidates
- `POST /api/ledger/entries/{entry}/refresh` — Refresh Journal Entry
- `POST /api/ledger/entries/{entry}/relink` — Link Entry to Existing Document
- `GET /api/ledger/entries/{entry}/relink-candidates` — List Relink Candidates
- `POST /api/ledger/reconciliation/auto-match/preview` — Preview Auto-Match
- `GET /api/ledger/reconciliation/counts` — Get Reconciliation Counts
- `POST /api/ledger/reconciliation/dismiss/bulk` — Bulk Dismiss Provider Documents
- `GET /api/ledger/reconciliation/dismissed` — List Dismissed Documents
- `GET /api/ledger/reconciliation/excluded` — List Excluded SKU Entries
- `GET /api/ledger/reconciliation/link-candidates` — List Entry Link Candidates
- `GET /api/ledger/reconciliation/matched` — List Matched Entries
- `GET /api/ledger/reconciliation/provider-documents` — List Provider-only Documents
- `POST /api/ledger/reconciliation/restore/bulk` — Bulk Restore Provider Documents
- `GET /api/ledger/reconciliation/unlinked` — List Unlinked Entries

### Suppliers
- `PUT /api/suppliers/{supplier}/unverify-bank-details` — Unverify Supplier Bank Details
- `PUT /api/suppliers/{supplier}/verify-bank-details` — Verify Supplier Bank Details

### Vendor Credits
- `POST /api/vendor-credits/allocate-batch` — Batch Allocate to Purchase Invoice

## Changed

### Purchase Invoices
- `GET /api/purchase-invoices` — List Purchase Invoices
  - new parameter(s): `filter[attachment_filename]`, `filter[attachments_count]`

_Spec version 1.0.0 → 1.0.0._
