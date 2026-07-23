---
title: API changes — 2026-07-23
description: This release includes 14 additions.
authors: [product-team]
tags: [added]
date: 2026-07-23
---

This release includes 14 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Faire
- `POST /api/faire/instances/{integrationInstance}/reuse-connection` — Reuse Existing Connection
- `POST /api/faire/instances/{integrationInstance}/validate-connection` — Validate Connection

### Ledger (Accounting v2)
- `POST /api/ledger/reconciliation/inventory/adjustment` — Post Inventory Reconciliation Adjustment
- `POST /api/ledger/reconciliation/inventory/adjustment/counter-account` — Ensure Adjustment Counter Account
- `GET /api/ledger/reconciliation/inventory/adjustment/journal` — Get Inventory Reconciliation Adjustment Journal
- `GET /api/ledger/reconciliation/inventory/adjustment/preview` — Get Inventory Reconciliation Adjustment Preview
- `DELETE /api/ledger/reconciliation/inventory/baseline` — Clear Inventory Reconciliation Baseline
- `GET /api/ledger/reconciliation/inventory/baseline` — Get Inventory Reconciliation Baseline
- `PUT /api/ledger/reconciliation/inventory/baseline` — Set Inventory Reconciliation Baseline
- `GET /api/ledger/reconciliation/inventory/opening-breakdown` — Get Inventory Reconciliation Opening Breakdown
- `GET /api/ledger/reconciliation/inventory/unsynced` — Get Inventory Reconciliation Awaiting-Sync Items

### Product Listings
- `GET /api/v2/products/channel-lifecycle/channels` — List Channels for Products
- `POST /api/v2/products/channel-lifecycle/dispatch` — Run Bulk Channel Action
- `GET /api/v2/products/channel-lifecycle/eligibility` — Get Channel Action Eligibility

_Spec version 1.0.0 → 1.0.0._
