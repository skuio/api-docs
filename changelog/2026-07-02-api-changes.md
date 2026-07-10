---
title: API changes — 2026-07-02
description: This release includes 4 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-07-02
---

This release includes 4 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Ledger (Accounting v2)
- `GET /api/ledger/entries/provider-statuses` — List Provider Statuses (Provider Status filter options)
- `POST /api/ledger/payments/{payment}/sync` — Sync Payment to Provider (manual retry)
- `POST /api/ledger/reconciliation/bank-statements/lines/{bankStatementLine}/dismiss-match` — Dismiss Line Match Suggestion
- `DELETE /api/ledger/reconciliation/bank-statements/lines/{bankStatementLine}/dismissals` — Restore Dismissed Suggestions

## Changed

### Vendor Credits
- `POST /api/vendor-credits` — Create Vendor Credit
  - new response code(s): `422`
  - removed response code(s): `200`

_Spec version 1.0.0 → 1.0.0._
