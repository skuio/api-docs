---
title: API changes — 2026-07-06
description: This release 21 removed API endpoint(s).
authors: [product-team]
tags: [removed, breaking]
date: 2026-07-06
---

This release 21 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Removed

- `GET //{domain}/api/amazon/{integrationInstance}/awd/ledgers` — List AWD Ledgers **(breaking)**
- `GET //{domain}/api/amazon/{integrationInstance}/awd/shipments` — List AWD Shipments **(breaking)**
- `GET //{domain}/api/amazon/{integrationInstance}/fba-inventory` — List FBA Inventory **(breaking)**
- `GET //{domain}/api/amazon/{integrationInstance}/finances/event-groups` — List Financial Event Groups **(breaking)**
- `GET //{domain}/api/amazon/{integrationInstance}/inbound/shipments` — List Inbound Shipments **(breaking)**
- `GET //{domain}/api/amazon/{integrationInstance}/inbound/shipments/export` — Export Inbound Shipments **(breaking)**
- `GET //{domain}/api/amazon/{integrationInstance}/initial-inventory` — List Initial Inventory **(breaking)**
- `GET //{domain}/api/amazon/{integrationInstance}/ledger-summaries` — List Ledger Summaries **(breaking)**
- `GET //{domain}/api/amazon/{integrationInstance}/new-inbound/shipments` — List New Inbound Shipments **(breaking)**
- `GET //{domain}/api/amazon/{integrationInstance}/removal-orders` — List Removal Orders (DataTable) **(breaking)**
- `GET //{domain}/api/amazon/{integrationInstance}/removal-orders/export` — Export Removal Orders (CSV/XLSX) **(breaking)**
- `GET //{domain}/api/amazon/{integrationInstance}/removal-shipments` — List Removal Shipments (DataTable) **(breaking)**
- `GET //{domain}/api/amazon/{integrationInstance}/removal-shipments/export` — Export Removal Shipments **(breaking)**
- `GET //{domain}/api/products/{productId}/fifo-layers` — Get Product FIFO Layers **(breaking)**
- `GET /api/attribute-groups` — List Attribute Groups (DataTable) **(breaking)**
- `GET /api/financial-alerts` — List Financial Alerts **(breaking)**
- `GET /api/financials/sales-order-lines` — List Sales Order Line Financials **(breaking)**
- `GET /api/nominal-codes` — List Nominal Codes (DataTable) **(breaking)**
- `GET /api/products/{productId}/fifo-layers` — Get Product FIFO Layers **(breaking)**
- `GET /api/tracked-job-logs` — List Tracked Job Logs **(breaking)**
- `GET /api/users` — List Users **(breaking)**

_Spec version 1.0.0 → 1.0.0._
