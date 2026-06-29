---
title: API changes — 2026-06-29
description: This release 89 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-29
---

This release 89 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/ledger/entries/{entry}/nominal-overrides` — Remove Nominal Override
- `DELETE /api/ledger/opening-balance` — Delete Opening Balance
- `DELETE /api/ledger/reconciliation/bank-statements/lines/{bankStatementLine}/match` — Clear Line Match
- `DELETE /api/ledger/reconciliation/bank-statements/{bankStatementImport}` — Delete Statement Import
- `GET //{domain}/api/xero/v2/journals` — List Journals (V2)
- `GET //{domain}/api/xero/v2/journals/4821` — Get Journal Detail (V2)
- `GET /api/ledger/accounts/{nominalCode}` — Get Account Overview
- `GET /api/ledger/accounts/{nominalCode}/lines` — List Account Lines
- `GET /api/ledger/batches` — List Batches
- `GET /api/ledger/batches/{batch}` — Get Batch
- `GET /api/ledger/batches/{batch}/activity-log` — Get Batch Activity
- `GET /api/ledger/batches/{batch}/history` — Get Batch History
- `GET /api/ledger/batches/{batch}/members` — List Batch Members
- `GET /api/ledger/connections` — List Connections
- `GET /api/ledger/dashboard` — Get Dashboard Summary
- `GET /api/ledger/entries` — List Journal Entries
- `GET /api/ledger/entries/by-source` — Ledger Entry By Source
- `GET /api/ledger/entries/by-source-list` — Ledger Entries By Source (list)
- `GET /api/ledger/entries/export` — Export Journal Entries
- `GET /api/ledger/entries/needs-attention` — Needs-Attention Groups
- `GET /api/ledger/entries/source-types` — List Source Types (Source filter options)
- `GET /api/ledger/entries/{entry}` — Get Journal Entry
- `GET /api/ledger/entries/{entry}/lines` — Get Journal Entry Lines
- `GET /api/ledger/generation/candidates` — List Generation Candidates
- `GET /api/ledger/opening-balance` — Get Opening Balance Overview
- `GET /api/ledger/opening-balance/provider-preview` — Preview Opening Balances from Provider
- `GET /api/ledger/opening-balance/transition` — Get Pending Start Date Transition
- `GET /api/ledger/outbox/failures` — List Outbox Failures
- `GET /api/ledger/payments` — List Payments
- `GET /api/ledger/reconciliation/bank-statements` — List Statement Imports
- `GET /api/ledger/reconciliation/bank-statements/{bankStatementImport}` — Get Statement Import
- `GET /api/ledger/reconciliation/bank-statements/{bankStatementImport}/suggestions` — Line Match Suggestions
- `GET /api/ledger/reconciliation/inventory` — Inventory Divergence
- `GET /api/ledger/reconciliation/inventory/accounts` — Inventory Recon Accounts (Earmark Suggestions)
- `GET /api/ledger/reconciliation/inventory/daily` — Inventory Daily Divergence Series
- `GET /api/ledger/reconciliation/inventory/sync-estimate` — Provider GL Sync Estimate (pre-flight, zero-API)
- `GET /api/ledger/reconciliation/matches` — Reconciliation Matches
- `GET /api/ledger/reconciliation/payments` — List Provider Payments
- `GET /api/ledger/reconciliation/report` — Reconciliation Report
- `GET /api/ledger/reconciliation/window` — Reconciliation Window
- `GET /api/ledger/settings/generation` — Get Generation Status
- `GET /api/ledger/settings/granularity` — Get Granularity Matrix
- `GET /api/ledger/setup/status` — Get Setup Status
- `GET /api/xero/accounts/nominal-code-suggestions` — Nominal Code → Xero Account Suggestions
- `GET /api/xero/v2/bank-transactions` — List Bank Transactions
- `GET /api/xero/v2/bank-transactions/{bankTransaction}` — Get Bank Transaction Detail
- `POST /api/ledger/batches/{batch}/rebuild` — Rebuild Batch
- `POST /api/ledger/entries/bulk` — Bulk Entry Action
- `POST /api/ledger/entries/repost-all` — Repost All Entries (chart change)
- `POST /api/ledger/entries/resolve-from-transactions` — Resolve Ledger Entries From Transactions
- `POST /api/ledger/entries/selection-summary` — Selection Summary
- `POST /api/ledger/entries/{entry}/nominal-overrides` — Set Nominal Override (account remap)
- `POST /api/ledger/entries/{entry}/rebuild` — Rebuild Journal Entry
- `POST /api/ledger/entries/{entry}/recreate` — Recreate Accounting Transaction (after void/delete)
- `POST /api/ledger/entries/{entry}/reference-override` — Set Reference Override
- `POST /api/ledger/entries/{entry}/sync-override` — Set Sync Override
- `POST /api/ledger/generation/run` — Run Generation Now
- `POST /api/ledger/opening-balance/apply` — Apply Opening Balance
- `POST /api/ledger/opening-balance/equity-account` — Create Opening Balance Equity Account
- `POST /api/ledger/opening-balance/rebuild` — Rebuild Opening Balance
- `POST /api/ledger/opening-balance/transition/apply` — Apply Start Date Transition
- `POST /api/ledger/opening-balance/transition/rollback` — Rollback Start Date Transition
- `POST /api/ledger/outbox/failures/retry` — Retry Outbox Failures
- `POST /api/ledger/reconciliation/auto-match` — Auto-Match
- `POST /api/ledger/reconciliation/backfill` — Backfill Provider Cache
- `POST /api/ledger/reconciliation/bank-statements` — Upload Statement Screenshot
- `POST /api/ledger/reconciliation/bank-statements/lines/{bankStatementLine}/match` — Confirm Line Match
- `POST /api/ledger/reconciliation/bank-statements/{bankStatementImport}/auto-match` — Auto-match Single-candidate Lines
- `POST /api/ledger/reconciliation/bank-statements/{bankStatementImport}/push-to-xero` — Push Matched Lines to Xero
- `POST /api/ledger/reconciliation/bank-statements/{bankStatementImport}/unmatch-all` — Unmatch All Lines
- `POST /api/ledger/reconciliation/dismiss` — Dismiss Provider Document
- `POST /api/ledger/reconciliation/inventory/capture-provider` — Capture Provider Inventory Balances (metered)
- `POST /api/ledger/reconciliation/inventory/rebuild` — Rebuild Inventory Daily Series
- `POST /api/ledger/reconciliation/inventory/resume-journals` — Resume Provider GL Journals Sync
- `POST /api/ledger/reconciliation/inventory/sync-journals` — Sync Provider GL Journals
- `POST /api/ledger/reconciliation/link` — Link Remote Document
- `POST /api/ledger/reconciliation/payments/import` — Import Provider Payments
- `POST /api/ledger/reconciliation/restore` — Restore Provider Document
- `POST /api/ledger/setup/apply-suggested-chart` — Apply Suggested Chart (manual setup)
- `POST /api/qbo/accounts/adopt-chart` — Adopt QuickBooks Chart of Accounts (hard-replace)
- `POST /api/xero/accounts/adopt-chart` — Adopt Xero Chart of Accounts (hard-replace)
- `POST /api/xero/accounts/create` — Create Account in Xero (asset)
- `POST /api/xero/accounts/nominal-code-mappings` — Map Nominal Codes → Xero Accounts
- `POST /api/xero/bank-transactions/download` — Sync Bank Transactions from Xero
- `PUT /api/ledger/accounts/{nominalCode}/type` — Update Account Type
- `PUT /api/ledger/opening-balance` — Upsert Opening Balance Draft
- `PUT /api/ledger/reconciliation/inventory/accounts` — Save Earmarked Inventory Accounts
- `PUT /api/ledger/settings/generation` — Update Generation Switch
- `PUT /api/ledger/settings/granularity` — Update Granularity Matrix

_Spec version 1.0.0 → 1.0.0._
