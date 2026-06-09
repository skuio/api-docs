---
title: API changes — 2026-06-09
description: This release 10 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-09
---

This release 10 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/return-disposition-policies/{returnDispositionPolicy}` — Delete Disposition Policy
- `GET //{protocol}{domain}/api/inbound-shipments` — List Inbound Shipments
- `GET /api/return-disposition-policies` — List Disposition Policies
- `GET /api/return-disposition-policies/{returnDispositionPolicy}` — Get Disposition Policy
- `POST /api/return-disposition-policies` — Create Disposition Policy
- `POST /api/return-disposition-policies/reorder` — Reorder Disposition Policies
- `POST /api/return-receipts/{returnReceipt}/lines/bulk-disposition` — Bulk Set Disposition on Lines
- `POST /api/sales-orders/bulk-email` — Bulk Email Customers About Orders
- `POST /api/sales-orders/bulk-email/preview` — Preview Bulk Customer Email
- `PUT /api/return-disposition-policies/{returnDispositionPolicy}` — Update Disposition Policy

_Spec version 1.0.0 → 1.0.0._
