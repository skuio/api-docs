---
title: API changes — 2026-06-29
description: This release includes 91 additions.
authors: [product-team]
tags: [added]
date: 2026-06-29
---

This release includes 91 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Accounting Integrations
- `GET //{domain}/api/xero/v2/journals` — List Journals (V2)
- `GET //{domain}/api/xero/v2/journals/4821` — Get Journal Detail (V2)
- `POST /api/qbo/accounts/adopt-chart` — Adopt QuickBooks Chart of Accounts (hard-replace)
- `POST /api/xero/accounts/adopt-chart` — Adopt Xero Chart of Accounts (hard-replace)
- `POST /api/xero/accounts/create` — Create Account in Xero (asset)
- `POST /api/xero/accounts/nominal-code-mappings` — Map Nominal Codes → Xero Accounts
- `GET /api/xero/accounts/nominal-code-suggestions` — Nominal Code → Xero Account Suggestions
- `POST /api/xero/bank-transactions/download` — Sync Bank Transactions from Xero
- `GET /api/xero/v2/bank-transactions` — List Bank Transactions
- `GET /api/xero/v2/bank-transactions/{bankTransaction}` — Get Bank Transaction Detail

### Fulfillments
- `POST /api/sales-orders/{salesOrder}/provider-fulfillment-snapshots/import` — Import Provider Fulfillment Orphan
- `POST /api/sales-orders/{salesOrder}/provider-fulfillment-snapshots/repair` — Repair Provider Fulfillment Orphan

### Ledger (Accounting v2)
- `GET /api/ledger/accounts/{nominalCode}` — Get Account Overview
- `GET /api/ledger/accounts/{nominalCode}/lines` — List Account Lines
- `PUT /api/ledger/accounts/{nominalCode}/type` — Update Account Type
- `GET /api/ledger/batches` — List Batches
- `GET /api/ledger/batches/{batch}` — Get Batch
- `GET /api/ledger/batches/{batch}/activity-log` — Get Batch Activity
- `GET /api/ledger/batches/{batch}/history` — Get Batch History
- `GET /api/ledger/batches/{batch}/members` — List Batch Members
- `POST /api/ledger/batches/{batch}/rebuild` — Rebuild Batch
- `GET /api/ledger/connections` — List Connections
- `GET /api/ledger/dashboard` — Get Dashboard Summary
- `GET /api/ledger/entries` — List Journal Entries
- `POST /api/ledger/entries/bulk` — Bulk Entry Action
- `GET /api/ledger/entries/by-source` — Ledger Entry By Source
- `GET /api/ledger/entries/by-source-list` — Ledger Entries By Source (list)
- `GET /api/ledger/entries/export` — Export Journal Entries
- `GET /api/ledger/entries/needs-attention` — Needs-Attention Groups
- `POST /api/ledger/entries/repost-all` — Repost All Entries (chart change)
- `POST /api/ledger/entries/resolve-from-transactions` — Resolve Ledger Entries From Transactions
- `POST /api/ledger/entries/selection-summary` — Selection Summary
- `GET /api/ledger/entries/source-types` — List Source Types (Source filter options)
- `GET /api/ledger/entries/{entry}` — Get Journal Entry
- `GET /api/ledger/entries/{entry}/lines` — Get Journal Entry Lines
- `DELETE /api/ledger/entries/{entry}/nominal-overrides` — Remove Nominal Override
- `POST /api/ledger/entries/{entry}/nominal-overrides` — Set Nominal Override (account remap)
- `POST /api/ledger/entries/{entry}/rebuild` — Rebuild Journal Entry
- `POST /api/ledger/entries/{entry}/recreate` — Recreate Accounting Transaction (after void/delete)
- `POST /api/ledger/entries/{entry}/reference-override` — Set Reference Override
- `POST /api/ledger/entries/{entry}/sync-override` — Set Sync Override
- `GET /api/ledger/generation/candidates` — List Generation Candidates
- `POST /api/ledger/generation/run` — Run Generation Now
- `DELETE /api/ledger/opening-balance` — Delete Opening Balance
- `GET /api/ledger/opening-balance` — Get Opening Balance Overview
- `PUT /api/ledger/opening-balance` — Upsert Opening Balance Draft
- `POST /api/ledger/opening-balance/apply` — Apply Opening Balance
- `POST /api/ledger/opening-balance/equity-account` — Create Opening Balance Equity Account
- `GET /api/ledger/opening-balance/provider-preview` — Preview Opening Balances from Provider
- `POST /api/ledger/opening-balance/rebuild` — Rebuild Opening Balance
- `GET /api/ledger/opening-balance/transition` — Get Pending Start Date Transition
- `POST /api/ledger/opening-balance/transition/apply` — Apply Start Date Transition
- `POST /api/ledger/opening-balance/transition/rollback` — Rollback Start Date Transition
- `GET /api/ledger/outbox/failures` — List Outbox Failures
- `POST /api/ledger/outbox/failures/retry` — Retry Outbox Failures
- `GET /api/ledger/payments` — List Payments
- `POST /api/ledger/reconciliation/auto-match` — Auto-Match
- `POST /api/ledger/reconciliation/backfill` — Backfill Provider Cache
- `GET /api/ledger/reconciliation/bank-statements` — List Statement Imports
- `POST /api/ledger/reconciliation/bank-statements` — Upload Statement Screenshot
- `DELETE /api/ledger/reconciliation/bank-statements/lines/{bankStatementLine}/match` — Clear Line Match
- `POST /api/ledger/reconciliation/bank-statements/lines/{bankStatementLine}/match` — Confirm Line Match
- `DELETE /api/ledger/reconciliation/bank-statements/{bankStatementImport}` — Delete Statement Import
- `GET /api/ledger/reconciliation/bank-statements/{bankStatementImport}` — Get Statement Import
- `POST /api/ledger/reconciliation/bank-statements/{bankStatementImport}/auto-match` — Auto-match Single-candidate Lines
- `POST /api/ledger/reconciliation/bank-statements/{bankStatementImport}/push-to-xero` — Push Matched Lines to Xero
- `GET /api/ledger/reconciliation/bank-statements/{bankStatementImport}/suggestions` — Line Match Suggestions
- `POST /api/ledger/reconciliation/bank-statements/{bankStatementImport}/unmatch-all` — Unmatch All Lines
- `POST /api/ledger/reconciliation/dismiss` — Dismiss Provider Document
- `GET /api/ledger/reconciliation/inventory` — Inventory Divergence
- `GET /api/ledger/reconciliation/inventory/accounts` — Inventory Recon Accounts (Earmark Suggestions)
- `PUT /api/ledger/reconciliation/inventory/accounts` — Save Earmarked Inventory Accounts
- `POST /api/ledger/reconciliation/inventory/capture-provider` — Capture Provider Inventory Balances (metered)
- `GET /api/ledger/reconciliation/inventory/daily` — Inventory Daily Divergence Series
- `POST /api/ledger/reconciliation/inventory/rebuild` — Rebuild Inventory Daily Series
- `POST /api/ledger/reconciliation/inventory/resume-journals` — Resume Provider GL Journals Sync
- `GET /api/ledger/reconciliation/inventory/sync-estimate` — Provider GL Sync Estimate (pre-flight, zero-API)
- `POST /api/ledger/reconciliation/inventory/sync-journals` — Sync Provider GL Journals
- `POST /api/ledger/reconciliation/link` — Link Remote Document
- `GET /api/ledger/reconciliation/matches` — Reconciliation Matches
- `GET /api/ledger/reconciliation/payments` — List Provider Payments
- `POST /api/ledger/reconciliation/payments/import` — Import Provider Payments
- `GET /api/ledger/reconciliation/report` — Reconciliation Report
- `POST /api/ledger/reconciliation/restore` — Restore Provider Document
- `GET /api/ledger/reconciliation/window` — Reconciliation Window
- `GET /api/ledger/settings/generation` — Get Generation Status
- `PUT /api/ledger/settings/generation` — Update Generation Switch
- `GET /api/ledger/settings/granularity` — Get Granularity Matrix
- `PUT /api/ledger/settings/granularity` — Update Granularity Matrix
- `POST /api/ledger/setup/apply-suggested-chart` — Apply Suggested Chart (manual setup)
- `GET /api/ledger/setup/status` — Get Setup Status

_Spec version 1.0.0 → 1.0.0._
