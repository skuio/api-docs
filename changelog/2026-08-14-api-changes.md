---
title: API changes — 2026-08-14
description: This release includes 11 additions, 1 change. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-08-14
---

This release includes 11 additions, 1 change. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Lot Genealogy
- **Changed** `GET /api/manufacturing/lot-genealogy/batches` — Search Batch Numbers (Typeahead)
  - removed parameter(s): `search`

## Added

### Faire
- `GET /api/faire/instances/{integrationInstance}/products/csv-mappings` — Download Product Mappings CSV
- `POST /api/faire/instances/{integrationInstance}/products/csv-mappings` — Upload Product Mappings CSV
- `POST /api/faire/instances/{integrationInstance}/products/csv-mappings/validate` — Validate Product Mappings CSV

### Ledger (Accounting v2)
- `GET /api/ledger/connections/{connectionId}/tax-rate-mappings` — List Tax Rate Mappings
- `POST /api/ledger/connections/{connectionId}/tax-rate-mappings/refresh` — Refresh Provider Tax Codes
- `PUT /api/ledger/connections/{connectionId}/tax-rate-mappings/{taxRateId}` — Update Tax Rate Mapping
- `GET /api/ledger/connections/{connectionId}/tax-treatment` — Get Tax Treatment
- `PUT /api/ledger/connections/{connectionId}/tax-treatment` — Update Tax Treatment
- `POST /api/ledger/reconciliation/inventory/period-entries/sync` — Sync Inventory Reconciliation Period Entries
- `GET /api/ledger/reconciliation/inventory/period-inventory` — Get Inventory Reconciliation Period Inventory

### Organization
- `POST /api/product-brands/reorder` — Reorder Product Brands

_Spec version 1.0.0 → 1.0.0._
