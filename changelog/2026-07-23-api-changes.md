---
title: API changes — 2026-07-23
description: This release includes 30 additions.
authors: [product-team]
tags: [added]
date: 2026-07-23
---

This release includes 30 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Airtable
- `GET /api/airtable/authorize` — Get OAuth Authorize URL
- `GET /api/airtable/datasets` — List Syncable Datasets
- `DELETE /api/airtable/instances/{instance}` — Disconnect Airtable
- `GET /api/airtable/instances/{instance}/bases` — List Airtable Bases
- `GET /api/airtable/instances/{instance}/bases/{baseId}/tables` — List Base Tables
- `GET /api/airtable/instances/{instance}/inbound-changes` — List Inbound Changes
- `POST /api/airtable/instances/{instance}/inbound-changes/apply` — Apply Inbound Changes
- `POST /api/airtable/instances/{instance}/inbound-changes/reject` — Reject Inbound Changes
- `GET /api/airtable/instances/{instance}/mappings` — List Mappings
- `POST /api/airtable/instances/{instance}/mappings` — Create Mapping
- `DELETE /api/airtable/instances/{instance}/mappings/{mapping}` — Delete Mapping
- `PATCH /api/airtable/instances/{instance}/mappings/{mapping}` — Update Mapping
- `POST /api/airtable/instances/{instance}/mappings/{mapping}/sync` — Sync Mapping
- `POST /api/airtable/instances/{instance}/provision-template` — Provision Template Table
- `GET /api/airtable/instances/{instance}/whoami` — Verify Connection
- `GET /api/airtable/integrations` — List Airtable Connections

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
