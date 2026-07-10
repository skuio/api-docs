---
title: API changes — 2026-07-10
description: This release 19 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-07-10
---

This release 19 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/accounting/payments/{id}` — Delete Payment
- `DELETE /api/bills/{id}/notes/{id2}` — Delete Bill Note
- `DELETE /api/bills/{id}/payments/{id2}` — Delete Bill Payment
- `DELETE /api/financials/daily-summary/{daily_summary}` — Delete Daily Financial Summary
- `GET /api/accounting/payments/{id}` — Get Payment
- `GET /api/bills/{id}/activity-log` — Get Bill Activity Log
- `GET /api/bills/{id}/documents` — List Bill Documents
- `GET /api/bills/{id}/notes` — List Bill Notes
- `GET /api/bills/{id}/payments` — List Bill Payments
- `GET /api/financials/daily-summary/{daily_summary}` — Get Daily Financial Summary
- `POST /api/accounting/payments` — Create Payment
- `POST /api/bills/{id}/notes` — Add Bill Note
- `POST /api/bills/{id}/payments` — Add Bill Payment
- `POST /api/financials/daily-summary` — Create Daily Financial Summary
- `PUT /api/accounting/payments/{id}` — Update Payment
- `PUT /api/bills/{id}/notes/{id2}/toggle-pin` — Toggle Bill Note Pin
- `PUT /api/bills/{id}/payments/{id2}` — Update Bill Payment
- `PUT /api/bills/{id}/tags` — Sync Bill Tags
- `PUT /api/financials/daily-summary/{daily_summary}` — Update Daily Financial Summary

_Spec version 1.0.0 → 1.0.0._
