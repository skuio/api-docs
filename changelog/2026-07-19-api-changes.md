---
title: API changes — 2026-07-19
description: This release includes 31 additions, 1 removal. 1 breaking change — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-07-19
---

This release includes 31 additions, 1 removal. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Stores
- **Removed** `GET /api/stores/{id}` — Get Store

## Added

### eBay
- `GET /api/ebay/payout-mapping-groups` — List Global Payout Mapping Groups
- `POST /api/ebay/payout-mapping-groups` — Create Global Payout Mapping Group
- `POST /api/ebay/payout-mapping-groups/reorder` — Reorder Global Payout Mapping Groups
- `DELETE /api/ebay/payout-mapping-groups/{payoutMappingGroup}` — Delete Global Payout Mapping Group
- `PUT /api/ebay/payout-mapping-groups/{payoutMappingGroup}` — Update Global Payout Mapping Group
- `GET /api/ebay/{integrationInstance}/payout-finance-settings` — Get Payout Finance Settings
- `PUT /api/ebay/{integrationInstance}/payout-finance-settings` — Update Payout Finance Settings
- `GET /api/ebay/{integrationInstance}/payout-mapping-groups` — List Payout Mapping Groups
- `POST /api/ebay/{integrationInstance}/payout-mapping-groups` — Create Payout Mapping Group
- `POST /api/ebay/{integrationInstance}/payout-mapping-groups/reorder` — Reorder Payout Mapping Groups
- `DELETE /api/ebay/{integrationInstance}/payout-mapping-groups/{payoutMappingGroup}` — Delete Payout Mapping Group
- `PUT /api/ebay/{integrationInstance}/payout-mapping-groups/{payoutMappingGroup}` — Update Payout Mapping Group
- `GET /api/ebay/{integrationInstance}/payout-transactions` — List Payout Transactions
- `GET /api/ebay/{integrationInstance}/payout-transactions/filter-options` — Get Payout Transaction Filter Options
- `GET /api/ebay/{integrationInstance}/payout-type-mappings` — List Payout Type Mappings
- `PUT /api/ebay/{integrationInstance}/payout-type-mappings` — Update Payout Type Mappings
- `PUT /api/ebay/{integrationInstance}/payout-type-mappings/bulk-assign` — Bulk Assign Payout Type Mappings
- `GET /api/ebay/{integrationInstance}/payouts` — List Payouts
- `GET /api/ebay/{integrationInstance}/payouts/filter-options` — Get Payout Filter Options
- `POST /api/ebay/{integrationInstance}/payouts/sync` — Sync Payouts
- `GET /api/ebay/{integrationInstance}/payouts/{payout}` — Get Payout

### Purchase Orders
- `GET /api/purchase-orders/{purchase_order}/communications` — List Purchase Order Communications
- `POST /api/purchase-orders/{purchase_order}/communications` — Create Purchase Order Communication
- `POST /api/purchase-orders/{purchase_order}/communications/{communication}/read` — Mark Communication as Read
- `GET /api/v2/suppliers/{supplier}/communications` — List Supplier Communications (Cross-PO)

### Shopify
- `GET /api/shopify/{integrationInstance}/balance-transactions` — List Balance Transactions
- `GET /api/shopify/{integrationInstance}/balance-transactions/filter-options` — Get Balance Transaction Filter Options

### Stores
- `PUT /api/stores/{id}/set-default` — Set Default Store
- `GET /api/v2/stores/{store}` — Get Store
- `GET /api/v2/stores/{store}/activity-log` — Get Store Activity Log
- `GET /api/v2/stores/{store}/stats` — Get Store Stats

_Spec version 1.0.0 → 1.0.0._
