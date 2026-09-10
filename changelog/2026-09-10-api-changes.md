---
title: API changes — 2026-09-10
description: This release includes 15 additions.
authors: [product-team]
tags: [added]
date: 2026-09-10
---

This release includes 15 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Inventory Debt
- `GET /api/inventory/debt/claims` — List Inventory Debt Claims
- `POST /api/inventory/debt/claims/create-stock-take` — Create Catch-Up Stock Takes
- `POST /api/inventory/debt/claims/settle` — Settle Inventory Debt Claims
- `POST /api/inventory/debt/claims/settle-preview` — Preview Inventory Debt Settlement
- `POST /api/inventory/debt/claims/stock-take-preview` — Preview Catch-Up Stock Takes
- `GET /api/inventory/debt/claims/{inventoryDebtClaim}` — Get Inventory Debt Claim
- `GET /api/inventory/debt/resolve-policy` — Resolve Inventory Debt Policy

### Ledger (Accounting v2)
- `POST /api/ledger/connections/{connectionId}/tax-rate-mappings/apply` — Apply Tax Rate Mappings
- `POST /api/ledger/connections/{connectionId}/tax-rate-mappings/auto-map` — Auto-Map Tax Rates

### Sales Channel Product Templates
- `GET /api/v2/sales-channels/{salesChannel}/product-templates` — List Product Templates for a Sales Channel
- `POST /api/v2/sales-channels/{salesChannel}/product-templates` — Create Product Template
- `DELETE /api/v2/sales-channels/{salesChannel}/product-templates/{template}` — Delete Product Template
- `GET /api/v2/sales-channels/{salesChannel}/product-templates/{template}` — Get Product Template
- `PUT /api/v2/sales-channels/{salesChannel}/product-templates/{template}` — Update Product Template

### Xero
- `POST /api/xero/v2/sync-status/{entity}/sync-now` — Sync Entity From Xero

_Spec version 1.0.0 → 1.0.0._
