---
title: API changes — 2026-07-12
description: This release includes 2 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-07-12
---

This release includes 2 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Suppliers
- `PUT /api/suppliers/{supplier}/unverify-bank-details` — Unverify Supplier Bank Details
- `PUT /api/suppliers/{supplier}/verify-bank-details` — Verify Supplier Bank Details

## Changed

### Purchase Invoices
- `GET /api/purchase-invoices` — List Purchase Invoices
  - new parameter(s): `filter[attachment_filename]`, `filter[attachments_count]`

_Spec version 1.0.0 → 1.0.0._
