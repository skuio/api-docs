---
title: API changes — 2026-08-31
description: This release includes 18 additions.
authors: [product-team]
tags: [added]
date: 2026-08-31
---

This release includes 18 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Costing
- `GET /api/cogs-revaluation/{revaluation}` — Get Inventory Revaluation
- `GET /api/cogs-revaluation/{revaluation}/activity-log` — List Inventory Revaluation Activity

### Shopify
- `GET /api/shopify/b2b/{integrationInstance}/companies` — List Company Locations
- `POST /api/shopify/b2b/{integrationInstance}/companies/sync` — Sync Companies From Shopify
- `POST /api/shopify/b2b/{integrationInstance}/company-locations/auto-map` — Auto-Map Unmapped Locations
- `PUT /api/shopify/b2b/{integrationInstance}/company-locations/{companyLocation}/mapping` — Update Company Location Mapping
- `GET /api/shopify/b2b/{integrationInstance}/preflight` — Get Preflight
- `POST /api/shopify/b2b/{integrationInstance}/preview` — Preview Publish
- `GET /api/shopify/b2b/{integrationInstance}/price-groups` — List Price Groups
- `POST /api/shopify/b2b/{integrationInstance}/price-groups/recompute` — Recompute Price Groups
- `PUT /api/shopify/b2b/{integrationInstance}/price-groups/{priceGroup}` — Rename Price Group
- `GET /api/shopify/b2b/{integrationInstance}/price-groups/{priceGroup}/members` — List Price Group Members
- `GET /api/shopify/b2b/{integrationInstance}/price-groups/{priceGroup}/prices` — List Price Group Prices
- `POST /api/shopify/b2b/{integrationInstance}/publish` — Publish Catalogs
- `GET /api/shopify/b2b/{integrationInstance}/runs` — List Sync Runs
- `GET /api/shopify/b2b/{integrationInstance}/runs/{run}/lines` — List Sync Run Lines
- `GET /api/shopify/b2b/{integrationInstance}/settings` — Get B2B Pricing Settings
- `PUT /api/shopify/b2b/{integrationInstance}/settings` — Update B2B Pricing Settings

_Spec version 1.0.0 → 1.0.0._
