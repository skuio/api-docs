---
title: API changes — 2026-07-17
description: This release includes 32 additions, 34 removals. 34 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-07-17
---

This release includes 32 additions, 34 removals. 34 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Accounting
- **Removed** `GET /api/accounting/batch-transactions/{batchAccountingTransaction}` — Get Batch Transaction
- **Removed** `GET /api/accounting/batch-transactions/{batchAccountingTransaction}/items` — Get Batch Transaction Items
- **Removed** `POST /api/accounting/payments` — Create Payment
- **Removed** `POST /api/accounting/payments/clear-errors` — Clear Payment Errors
- **Removed** `POST /api/accounting/payments/delete-integration-payments` — Delete Provider Payments by Payment ID
- **Removed** `GET /api/accounting/payments/needing-sync` — Get Payments Needing Sync
- **Removed** `POST /api/accounting/payments/sync-all` — Sync All Payments
- **Removed** `POST /api/accounting/payments/sync-external` — Sync Payments to External
- **Removed** `GET /api/accounting/payments/sync-status` — Get Payment Sync Status
- **Removed** `DELETE /api/accounting/payments/{id}` — Delete Payment
- **Removed** `GET /api/accounting/payments/{id}` — Get Payment
- **Removed** `PUT /api/accounting/payments/{id}` — Update Payment
- **Removed** `DELETE /api/accounting/transactions` — Bulk Delete Transactions
- **Removed** `POST /api/accounting/transactions` — Create Transaction
- **Removed** `GET /api/accounting/transactions/awaiting-sync` — Get Awaiting Sync Report
- **Removed** `POST /api/accounting/transactions/bulk-enable-sync` — Bulk Enable/Disable Sync
- **Removed** `POST /api/accounting/transactions/bulk-replace-nominal-codes` — Bulk Replace Nominal Codes
- **Removed** `POST /api/accounting/transactions/clear-errors` — Clear Transaction Errors
- **Removed** `POST /api/accounting/transactions/delete-integration-payments` — Delete Provider Payments by Transaction
- **Removed** `GET /api/accounting/transactions/needing-sync` — Get Transactions Needing Sync
- **Removed** `GET /api/accounting/transactions/needing-sync/count` — Get Transactions Needing Sync Count
- **Removed** `POST /api/accounting/transactions/refresh` — Refresh Transactions
- **Removed** `PUT /api/accounting/transactions/settings-sync` — Update Transaction Sync Settings
- **Removed** `POST /api/accounting/transactions/sync-all` — Sync All Transactions
- **Removed** `POST /api/accounting/transactions/sync-external` — Sync Transactions to External
- **Removed** `POST /api/accounting/transactions/unlink-from-integration` — Unlink Transactions from Integration
- **Removed** `GET /api/accounting/transactions/{accountingTransaction}/payments` — Get Transaction Payments
- **Removed** `DELETE /api/accounting/transactions/{id}` — Delete Transaction
- **Removed** `GET /api/accounting/transactions/{id}` — Get Transaction
- **Removed** `PUT /api/accounting/transactions/{id}` — Update Transaction
- **Removed** `GET /api/accounting/v3/payments` — List Payments
- **Removed** `GET /api/accounting/v3/transactions` — List Transactions
- **Removed** `GET /api/accounting/v3/transactions/export` — Start Export Job
- **Removed** `GET /api/accounting/v3/transactions/export/download` — Download Export File

## Added

### Ledger (Accounting v2)
- `GET /api/ledger/accounting-dimensions` — Get Accounting Dimensions
- `PUT /api/ledger/accounting-dimensions` — Update Accounting Dimensions
- `POST /api/ledger/accounting-dimensions/dimensions` — Create Accounting Dimension
- `POST /api/ledger/accounting-dimensions/refresh` — Refresh Accounting Dimensions
- `POST /api/ledger/accounting-dimensions/values` — Create Accounting Dimension Values
- `GET /api/ledger/close/periods` — List Close Periods
- `GET /api/ledger/close/periods/{period}` — Get Close Period
- `DELETE /api/ledger/close/periods/{period}/checklist/{item}/complete` — Uncomplete Checklist Item
- `POST /api/ledger/close/periods/{period}/checklist/{item}/complete` — Complete Checklist Item
- `POST /api/ledger/close/periods/{period}/close` — Close Period
- `POST /api/ledger/close/periods/{period}/export` — Export Close Pack
- `POST /api/ledger/close/periods/{period}/refresh` — Refresh Close Checklist
- `POST /api/ledger/close/periods/{period}/reopen` — Reopen Period
- `GET /api/ledger/close/periods/{period}/reports/{report}` — Get Close Report
- `POST /api/ledger/close/periods/{period}/start` — Start Period Close
- `GET /api/ledger/close/periods/{period}/verify` — Verify Closed Period

### Purchase Orders
- `POST /api/purchase-orders/{purchaseOrder}/lines/reorder` — Reorder Purchase Order Lines

### QuickBooks Online
- `GET /api/qbo/accounts/{id}/activity-log` — Get Account Activity Log
- `GET /api/qbo/bill-payments` — List Bill Payments
- `GET /api/qbo/bill-payments/{id}` — Get Bill Payment
- `GET /api/qbo/customers/{id}/activity-log` — Get Customer Activity Log
- `GET /api/qbo/deposits` — List Deposits
- `GET /api/qbo/deposits/{id}` — Get Deposit
- `GET /api/qbo/purchases` — List Purchases
- `GET /api/qbo/purchases/{id}` — Get Purchase
- `GET /api/qbo/sync-activity` — List Sync Activity
- `GET /api/qbo/vendor-credits` — List Vendor Credits
- `GET /api/qbo/vendor-credits/{id}` — Get Vendor Credit

### Sales Order Lines
- `POST /api/sales-orders/{salesOrder}/lines/reorder` — Reorder Sales Order Lines

### Shopify
- `GET /api/shopify/{integrationInstance}/costs/last-sync` — Get Last Cost Sync
- `POST /api/shopify/{integrationInstance}/costs/sync` — Sync Costs to Shopify
- `GET /api/shopify/{integrationInstance}/costs/sync-progress/{trackedJobLogId}` — Get Cost Sync Progress

_Spec version 1.0.0 → 1.0.0._
