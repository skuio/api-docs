---
title: API changes — 2026-07-25
description: This release includes 23 additions.
authors: [product-team]
tags: [added]
date: 2026-07-25
---

This release includes 23 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Organization
- `POST /api/attributes/{attributeId}/option-swatch` — Set Attribute Option Swatch

### Walmart
- `GET /api/walmart/{integrationInstance}/account/partner-configurations` — Get Partner Configurations
- `GET /api/walmart/{integrationInstance}/account/shipping-configurations` — Get Shipping Configurations
- `POST /api/walmart/{integrationInstance}/item-settings/disputes/contest` — Contest Duplicate-Listing Dispute
- `POST /api/walmart/{integrationInstance}/item-settings/disputes/status` — Get Duplicate-Listing Dispute Status
- `POST /api/walmart/{integrationInstance}/item-settings/lag-time` — Bulk Update Fulfilment Lag Time
- `POST /api/walmart/{integrationInstance}/item-settings/match` — Set Up Item by Match
- `POST /api/walmart/{integrationInstance}/item-settings/return-overrides` — Set Return Overrides
- `POST /api/walmart/{integrationInstance}/item-tools/associations` — Get Item Associations
- `POST /api/walmart/{integrationInstance}/item-tools/catalog-search` — Search My Catalogue
- `GET /api/walmart/{integrationInstance}/item-tools/count` — Get Item Count by Status
- `GET /api/walmart/{integrationInstance}/item-tools/count/groups` — Get Item Count by Group
- `GET /api/walmart/{integrationInstance}/item-tools/search` — Search Walmart Catalogue
- `POST /api/walmart/{integrationInstance}/pricing-programs/cap-sku` — Enroll Catalogue in CAP Program
- `GET /api/walmart/{integrationInstance}/pricing-programs/incentives` — List Price-Incentive Items
- `POST /api/walmart/{integrationInstance}/pricing-programs/incentives/funded/enroll` — Enroll SKUs in Walmart-Funded Incentives
- `PUT /api/walmart/{integrationInstance}/pricing-programs/incentives/funded/status` — Set Walmart-Funded Incentive Status
- `POST /api/walmart/{integrationInstance}/pricing-programs/incentives/reduced-referral/enroll` — Enroll SKUs in Reduced-Referral-Fee Incentives
- `GET /api/walmart/{integrationInstance}/pricing-programs/strategies` — List Repricer Strategies
- `POST /api/walmart/{integrationInstance}/pricing-programs/strategies` — Create Repricer Strategy
- `POST /api/walmart/{integrationInstance}/pricing-programs/strategies/assign` — Assign SKUs to Repricer Strategy
- `DELETE /api/walmart/{integrationInstance}/pricing-programs/strategies/{strategyCollectionId}` — Delete Repricer Strategy
- `PUT /api/walmart/{integrationInstance}/pricing-programs/strategies/{strategyCollectionId}` — Update Repricer Strategy

_Spec version 1.0.0 → 1.0.0._
