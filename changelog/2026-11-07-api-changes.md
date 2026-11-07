---
title: API changes — 2026-11-07
description: This release includes 84 additions, 2 changes, 5 removals. 6 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-11-07
---

This release includes 84 additions, 2 changes, 5 removals. 6 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Bills
- **Removed** `DELETE /api/bills/{id}` — Delete Bill
- **Removed** `GET /api/bills/{id}` — Get Bill
- **Removed** `PUT /api/bills/{id}` — Update Bill
- **Removed** `GET /api/bills/{id}/documents` — List Bill Documents
- **Removed** `PATCH /api/bills/{id}/lines` — Update Bill Lines

### Incompatible changes

#### Products
- **Changed** `GET /api/v2/products/{product}/activity-log` — Get Product Activity Log
  - removed parameter(s): `filter[search]`, `page`, `per_page`

## Added

### Accounting
- `GET /api/accounting/bill-sync` — Get Bill Sync Settings
- `PUT /api/accounting/bill-sync` — Update Bill Sync Settings
- `GET /api/accounting/bill-sync/duplicates` — List Waiting Bill Duplicates
- `POST /api/accounting/bill-sync/duplicates/{operation}/link` — Link Waiting Bill Duplicate
- `POST /api/accounting/bill-sync/duplicates/{operation}/not-duplicate` — Mark Waiting Bill Not a Duplicate
- `POST /api/accounting/bill-sync/preview` — Preview Bill Sync Change
- `GET /api/accounting/bill-sync/rules` — List Bill Sync Supplier Rules
- `POST /api/accounting/bill-sync/rules` — Create Bill Sync Supplier Rule
- `DELETE /api/accounting/bill-sync/rules/{rule}` — Delete Bill Sync Supplier Rule

### Bills
- `GET /api/accounting/provider-bills/review` — List Provider Bills to Review
- `POST /api/accounting/provider-bills/review/backfill` — Load Older Provider Bills
- `PATCH /api/accounting/provider-bills/review/bulk` — Bulk Classify Provider Bills
- `POST /api/accounting/provider-bills/review/commit` — Bring Provider Bills into SKU.io
- `GET /api/accounting/provider-bills/review/documents` — List Unmatched Provider Bill Invoices
- `POST /api/accounting/provider-bills/review/documents` — Upload Provider Bill Invoices
- `POST /api/accounting/provider-bills/review/fetch-attachments` — Fetch Provider Bill Files
- `GET /api/accounting/provider-bills/review/purchase-orders` — List Purchase Orders for a Provider Bill Supplier
- `GET /api/accounting/provider-bills/review/summary` — Get Provider Bill Review Summary
- `GET /api/accounting/provider-bills/review/{remoteId}` — Get Provider Bill
- `PATCH /api/accounting/provider-bills/review/{remoteId}` — Classify Provider Bill
- `POST /api/accounting/provider-bills/review/{remoteId}/documents` — Upload Provider Bill Invoice
- `POST /api/accounting/provider-bills/review/{remoteId}/header-change/resolve` — Keep Provider Bill Header Change
- `POST /api/accounting/provider-bills/review/{remoteId}/not-duplicate` — Mark Provider Bill Not a Duplicate
- `POST /api/accounting/provider-bills/review/{remoteId}/restore` — Restore Provider Bill
- `POST /api/accounting/provider-bills/review/{remoteId}/totals` — Resolve Provider Bill Invoice Total
- `POST /api/bills/duplicate-check` — Check Bill for Duplicates
- `POST /api/bills/duplicate-decisions` — Record Bill Duplicate Decision
- `POST /api/bills/ocr/documents/{document}/bills/{bill}` — Link Document to Bill
- `POST /api/bills/ocr/files` — Upload Bill Invoice File
- `GET /api/bills/ocr/status` — Get Bill Invoice Reading Status
- `POST /api/bills/ocr/suggest-accounts` — Suggest Bill Line Accounts
- `POST /api/bills/ocr/upload` — Upload Bill Invoice for Reading
- `POST /api/bills/ocr/{extraction}/document` — Create Document from Invoice Extraction
- `POST /api/bills/preview-posting` — Preview Bill Posting
- `DELETE /api/bills/{bill}` — Delete Bill
- `GET /api/bills/{bill}` — Get Bill
- `PUT /api/bills/{bill}` — Update Bill
- `GET /api/bills/{bill}/documents` — List Bill Documents
- `PATCH /api/bills/{bill}/lines` — Update Bill Lines
- `POST /api/bills/{bill}/link-provider-document` — Link Bill to Provider Bill
- `PUT /api/bills/{bill}/with-lines` — Save Bill with Lines

### Costing
- `POST /api/cost-entries/ai-allocation/bulk` — Bulk Allocate Cost Entries with AI
- `GET /api/cost-entries/{costEntry}/ai-allocation` — Get Latest Cost Entry AI Allocation
- `POST /api/cost-entries/{costEntry}/ai-allocation` — Propose Cost Entry Allocations with AI
- `GET /api/cost-entries/{costEntry}/ai-allocation/{batch}` — Get Cost Entry AI Allocation Batch
- `POST /api/cost-entries/{costEntry}/ai-allocation/{batch}/confirm` — Confirm Cost Entry AI Allocation Proposals
- `PATCH /api/cost-entries/{costEntry}/ai-allocation/{batch}/proposals/{proposal}` — Update Cost Entry AI Allocation Proposal
- `POST /api/cost-entries/{costEntry}/ai-allocation/{batch}/reject` — Reject Cost Entry AI Allocation Batch
- `POST /api/cost-entries/{costEntry}/ai-allocation/{batch}/undo` — Undo Cost Entry AI Allocation

### Ledger (Accounting v2)
- `GET /api/ledger/close/closed-ranges` — List Closed Unlocked Months
- `GET /api/ledger/close/hard-date` — Get Hard Close Date
- `POST /api/ledger/close/hard-date` — Move Hard Close Date
- `POST /api/ledger/close/hard-date/opening` — Lock Before Opening Baseline
- `POST /api/ledger/close/hard-date/preview` — Preview Hard Close Date Move
- `DELETE /api/ledger/close/periods/{period}/checklist/{item}/override` — Remove Close Override
- `POST /api/ledger/close/periods/{period}/checklist/{item}/override` — Record Close Override
- `GET /api/ledger/close/periods/{period}/history` — Get Period History
- `POST /api/ledger/close/periods/{period}/re-sign-off` — Re-Sign Period
- `POST /api/ledger/close/periods/{period}/re-sign-off/checks` — Run Re-Sign-Off Checks
- `GET /api/ledger/close/periods/{period}/re-sign-off/preview` — Preview Re-Sign-Off Checks
- `GET /api/ledger/close/periods/{period}/restatement` — Get Period Restatement
- `POST /api/ledger/close/periods/{period}/restatement/recheck` — Recheck Period Restatement
- `POST /api/ledger/close/periods/{period}/take-over-preparation` — Take Over Close Preparation
- `GET /api/ledger/go-live-readiness` — Get Go-Live Readiness
- `PUT /api/ledger/go-live-readiness/accountant-review` — Update Go-Live Accountant Review
- `POST /api/ledger/go-live-readiness/run` — Run Go-Live Readiness Checks
- `PUT /api/ledger/go-live-readiness/settings` — Update Go-Live Readiness Settings
- `GET /api/ledger/trust` — Get Cost and Count Trust
- `POST /api/ledger/trust/overrides` — Create Trust Override
- `DELETE /api/ledger/trust/overrides/{id}` — Delete Trust Override
- `PUT /api/ledger/trust/self-report` — Update Cost Confidence
- `PUT /api/ledger/trust/warehouses/{warehouse}/audit-trail` — Update Warehouse Audit Trail Rating

### NuORDER
- `GET /api/nuorder/instances/{integrationInstance}/orders/lookup` — Look Up NuORDER Order Numbers

### Product Lifecycle
- `GET /api/v2/products/{product}/lifecycle/cancelled-schedules` — List Cancelled Lifecycle Schedules
- `DELETE /api/v2/products/{product}/noos` — Clear Product NOOS Pin

### Products
- `GET /api/products/availability-dates` — List Product Availability Dates
- `GET /api/products/{product}/availability-date` — Get Product Availability Date

### Purchase Orders
- `DELETE /api/purchase-orders/{purchaseOrder}/cash-forecast` — Reset Purchase Order Cash Forecast
- `GET /api/purchase-orders/{purchaseOrder}/cash-forecast` — Get Purchase Order Cash Forecast
- `PUT /api/purchase-orders/{purchaseOrder}/cash-forecast` — Save Purchase Order Cash Forecast
- `POST /api/purchase-orders/{purchaseOrder}/cash-forecast/preview` — Preview Purchase Order Cash Forecast

### Repairs & Warranty
- `GET /api/repairs/intake/warehouses` — List Repair Warehouses
- `GET /api/repairs/loaners/eligible-serials` — List Eligible Loaner Serials

### SPS Commerce
- `PUT /api/spscommerce/fulfillments/{salesOrderFulfillment}/packing/carrier-pickup` — Record Shipment Carrier Pickup

## Changed

### Ledger (Accounting v2)
- `GET /api/ledger/close/periods/{period}/reports/{report}` — Get Close Report
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
