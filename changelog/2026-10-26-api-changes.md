---
title: API changes — 2026-10-26
description: This release includes 48 additions.
authors: [product-team]
tags: [added]
date: 2026-10-26
---

This release includes 48 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Account Rules
- `GET /api/product-account-map` — Get Account Map
- `GET /api/product-account-map/anomalies` — List Account Anomalies
- `POST /api/product-account-map/anomalies/dismiss` — Dismiss Account Anomaly
- `POST /api/product-account-map/anomalies/use-rule` — Use Rule For All Flagged Products
- `GET /api/product-account-rules` — List Account Rules
- `POST /api/product-account-rules` — Create Account Rule
- `GET /api/product-account-rules/export` — Export Account Rules
- `POST /api/product-account-rules/import` — Import Account Rules
- `GET /api/product-account-rules/import-template` — Get Account Rules Import Template
- `POST /api/product-account-rules/preview` — Preview Account Rule
- `POST /api/product-account-rules/reapply` — Re-apply Account Rules
- `POST /api/product-account-rules/remap` — Re-map Unsynced Journal Entries
- `POST /api/product-account-rules/reorder` — Reorder Account Rules
- `POST /api/product-account-rules/setup/apply` — Apply Guided Setup
- `GET /api/product-account-rules/setup/dimensions` — Get Guided Setup Dimensions
- `POST /api/product-account-rules/setup/preview` — Preview Guided Setup
- `DELETE /api/product-account-rules/{rule}` — Delete Account Rule
- `GET /api/product-account-rules/{rule}` — Get Account Rule
- `PUT /api/product-account-rules/{rule}` — Update Account Rule
- `POST /api/product-account-rules/{rule}/activate` — Activate Account Rule
- `POST /api/product-account-rules/{rule}/archive` — Archive Account Rule
- `POST /api/product-account-rules/{rule}/deactivate` — Deactivate Account Rule
- `POST /api/product-account-rules/{rule}/duplicate` — Duplicate Account Rule
- `POST /api/product-account-rules/{rule}/unarchive` — Unarchive Account Rule
- `GET /api/products/accounts` — Get Accounts for Products
- `GET /api/products/{product}/accounts` — Get Product Accounts

### BILL.com
- `GET /api/billcom/bills` — List BILL Bills
- `DELETE /api/billcom/bills/{bill}/link` — Unlink BILL Bill
- `POST /api/billcom/bills/{bill}/link` — Link BILL Bill To Payable
- `GET /api/billcom/instances` — List BILL Instances
- `POST /api/billcom/instances` — Connect BILL Instance
- `DELETE /api/billcom/instances/{instance}` — Disconnect BILL Instance
- `PATCH /api/billcom/instances/{instance}/settings` — Update BILL Instance Settings
- `POST /api/billcom/instances/{instance}/test-connection` — Test BILL Connection
- `GET /api/billcom/instances/{instance}/webhook` — Get BILL Webhook Subscription
- `POST /api/billcom/instances/{instance}/webhook` — Re-register BILL Webhook Subscription
- `GET /api/billcom/payments` — List BILL Payments
- `POST /api/billcom/payments/reconcile` — Reconcile BILL Payments
- `GET /api/billcom/push/{payableType}/{payableId}` — Get Payable BILL Status
- `POST /api/billcom/push/{payableType}/{payableId}` — Push Payable To BILL
- `GET /api/billcom/vendors` — List BILL Vendors
- `POST /api/billcom/vendors/create-from-supplier` — Create BILL Vendor From Supplier
- `POST /api/billcom/vendors/sync` — Sync BILL Vendors
- `DELETE /api/billcom/vendors/{vendor}/match` — Unmatch BILL Vendor
- `POST /api/billcom/vendors/{vendor}/match` — Match BILL Vendor To Supplier
- `GET /api/billcom/webhook-events` — List BILL Webhook Events
- `GET /api/billcom/webhook-events/{id}` — Get BILL Webhook Event
- `POST /api/billcom/webhook-events/{id}/replay` — Replay BILL Webhook Event

_Spec version 1.0.0 → 1.0.0._
