---
title: API changes — 2026-07-18
description: This release includes 10 additions.
authors: [product-team]
tags: [added]
date: 2026-07-18
---

This release includes 10 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Contractors
- `PATCH /api/manufacturing/contractors/{supplier}` — Update Contractor

### Documents
- `GET /api/documents` — List Documents for a Record
- `GET /api/documents/{documentId}/file` — Stream Document File

### Ledger (Accounting v2)
- `POST /api/ledger/close/periods/{period}/capture-provider-balances` — Capture Provider Trial Balances
- `GET /api/ledger/close/periods/{period}/sync-breakdown` — Sync Breakdown (why not synced)
- `GET /api/ledger/period-locks` — Get Lock Dates
- `POST /api/ledger/period-locks/apply-suggestion` — Apply Provider Lock Suggestion
- `PATCH /api/ledger/period-locks/provider/{connectionId}` — Toggle Provider Lock Enforcement
- `GET /api/ledger/reports/lock-date-exceptions` — List Lock Date Exceptions
- `GET /api/ledger/reports/lock-date-exceptions/summary` — Get Lock Date Exceptions Summary

_Spec version 1.0.0 → 1.0.0._
