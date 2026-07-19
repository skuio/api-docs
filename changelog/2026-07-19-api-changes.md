---
title: API changes — 2026-07-19
description: This release includes 24 additions.
authors: [product-team]
tags: [added]
date: 2026-07-19
---

This release includes 24 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

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

### Stores
- `PUT /api/stores/{id}/set-default` — Set Default Store

_Spec version 1.0.0 → 1.0.0._
