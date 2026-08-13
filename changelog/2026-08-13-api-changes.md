---
title: API changes — 2026-08-13
description: This release includes 7 additions.
authors: [product-team]
tags: [added]
date: 2026-08-13
---

This release includes 7 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Amazon
- `GET /api/amazon-inbound-discrepancies` — List Inbound Discrepancies
- `GET /api/amazon-inbound-discrepancies/kpis` — Get Inbound Discrepancy KPIs

### Ledger (Accounting v2)
- `DELETE /api/ledger/accounts/{nominalCode}/integration-account` — Unlink Provider Account
- `PUT /api/ledger/accounts/{nominalCode}/integration-account` — Link Provider Account

### Reporting
- `GET /api/reporting/accounting-cogs/drilldown/export` — Export Accounting COGS Drilldown

### Xero
- `POST /api/xero/payments/download` — Sync Payments from Xero
- `GET /api/xero/v2/sync-status` — Get Mirror Sync Status

_Spec version 1.0.0 → 1.0.0._
