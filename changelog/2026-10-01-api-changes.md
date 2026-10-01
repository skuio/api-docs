---
title: API changes — 2026-10-01
description: This release includes 27 additions.
authors: [product-team]
tags: [added]
date: 2026-10-01
---

This release includes 27 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Amazon
- `GET /api/amazon/unified/fba-loss-events` — List FBA Loss Events
- `POST /api/amazon/unified/fba-loss-events/link` — Link FBA Losses
- `GET /api/amazon/unified/fba-loss-events/summary` — Get FBA Loss Event Status Summary
- `GET /api/amazon/unified/fba-loss-events/{lossEvent}` — Get FBA Loss Event
- `PATCH /api/amazon/unified/fba-loss-events/{lossEvent}` — Update FBA Loss Event Recoverability
- `POST /api/amazon/unified/fba-loss-events/{lossEvent}/links` — Link Record to FBA Loss Event
- `DELETE /api/amazon/unified/fba-loss-events/{lossEvent}/links/{link}` — Delete FBA Loss Event Link
- `GET /api/amazon/unified/fba-reappearance` — List FBA Missing & Reappearing Inventory
- `GET /api/amazon/unified/fba-reappearance/summary` — Get FBA Missing & Reappearing Summary
- `GET /api/amazon/unified/fba-reimbursement-cogs` — List FBA Reimbursement COGS Postings
- `GET /api/amazon/unified/fba-reimbursement-cogs/summary` — Get FBA Reimbursement COGS Summary
- `GET /api/amazon/unified/fba-reimbursement-cogs/{posting}` — Get FBA Reimbursement COGS Posting
- `POST /api/amazon/unified/fba-reimbursement-cogs/{posting}/post-to-open-period` — Post FBA Reimbursement COGS Posting to Open Period
- `GET /api/amazon/unified/fba-reimbursement-reconciliation` — List FBA Reimbursement Reconciliation Exceptions
- `GET /api/amazon/unified/fba-reimbursement-reconciliation/adjustment-breakdown` — Get FBA Inventory Adjustment Breakdown
- `GET /api/amazon/unified/fba-reimbursement-reconciliation/summary` — Get FBA Reimbursement Reconciliation Summary
- `POST /api/amazon/unified/fba-reimbursement-reconciliation/{exception}/explain` — Explain FBA Reimbursement Reconciliation Exception
- `POST /api/amazon/unified/fba-reimbursement-reconciliation/{exception}/reopen` — Reopen FBA Reimbursement Reconciliation Exception
- `GET /api/amazon/unified/fba-reimbursements/cost-summary` — Get FBA Reimbursement Cost Summary
- `GET /api/amazon/unified/reimbursement-cases/{reimbursementCase}/fee-filing` — Get Reimbursement Case Fee Filing
- `POST /api/amazon/unified/reimbursement-cases/{reimbursementCase}/supplier-invoice` — Upload Reimbursement Case Supplier Invoice

### Financials
- `GET /api/v2/financials/daily-summary/aggregates` — Get Daily Financial Summary Column Totals
- `GET /api/v2/financials/sales-order-lines/aggregates` — Get Sales Order Financials Column Totals

### Products
- `GET /api/products/conditions` — List Product Conditions
- `POST /api/products/conditions` — Create Product Condition

### Reporting
- `GET /api/reporting/inventory-planning/aggregates` — Get Inventory Planning Column Totals
- `GET /api/reporting/realtime-inventory/aggregates` — Get Real-Time Inventory Column Totals

_Spec version 1.0.0 → 1.0.0._
