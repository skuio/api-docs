---
title: API changes — 2026-11-04
description: This release includes 21 additions.
authors: [product-team]
tags: [added]
date: 2026-11-04
---

This release includes 21 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Configuration
- `GET /api/payment-types/accounting-accounts` — Get Payment Type Bank Accounts

### Guardrails
- `POST /api/advertising/signals/{signal}/propose` — Propose Guardrail Signal Fix

### Purchase Orders
- `GET /api/purchase-orders/{purchaseOrder}/cash-flow/export` — Export Purchase Order Cash Flow

### Storefront
- `GET /api/storefront/payout-mappings/fallback-settings` — Get Storefront Payout Fallback Settings
- `PUT /api/storefront/payout-mappings/fallback-settings` — Update Storefront Payout Fallback Settings
- `GET /api/storefront/payout-mappings/groups` — List Storefront Payout Mapping Groups
- `POST /api/storefront/payout-mappings/groups` — Create Storefront Payout Mapping Group
- `POST /api/storefront/payout-mappings/groups/reorder` — Reorder Storefront Payout Mapping Groups
- `DELETE /api/storefront/payout-mappings/groups/{storefrontPayoutMappingGroup}` — Delete Storefront Payout Mapping Group
- `PUT /api/storefront/payout-mappings/groups/{storefrontPayoutMappingGroup}` — Update Storefront Payout Mapping Group
- `GET /api/storefront/payout-mappings/type-mappings` — List Storefront Payout Type Mappings
- `PUT /api/storefront/payout-mappings/type-mappings` — Update Storefront Payout Type Mappings
- `PUT /api/storefront/payout-mappings/type-mappings/bulk-assign` — Bulk Assign Storefront Payout Type Mappings
- `GET /api/storefront/payout-mappings/type-mappings/export` — Export Storefront Payout Type Mappings
- `POST /api/storefront/payout-mappings/type-mappings/import` — Import Storefront Payout Type Mappings
- `GET /api/storefront/payouts` — List Storefront Payouts
- `GET /api/storefront/payouts/{storefrontPayout}` — Get Storefront Payout
- `POST /api/storefront/payouts/{storefrontPayout}/refresh-lines` — Re-read Storefront Payout Lines
- `GET /api/storefront/{integrationInstance}/finance-settings` — Get Storefront Accounting Settings
- `PUT /api/storefront/{integrationInstance}/finance-settings` — Update Storefront Accounting Settings
- `POST /api/storefront/{integrationInstance}/payouts/sync` — Sync Storefront Payouts

_Spec version 1.0.0 → 1.0.0._
