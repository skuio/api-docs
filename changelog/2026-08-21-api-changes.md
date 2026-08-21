---
title: API changes — 2026-08-21
description: This release includes 9 additions.
authors: [product-team]
tags: [added]
date: 2026-08-21
---

This release includes 9 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Product Listings
- `POST /api/v2/listings/validate-requirements` — Validate Requirements

### Walmart
- `GET /api/walmart/{integrationInstance}/routing` — Get Carrier Routing
- `PUT /api/walmart/{integrationInstance}/routing/fallback` — Set Routing Fallback
- `PUT /api/walmart/{integrationInstance}/routing/families/{shippingCarrier}` — Set Carrier Family Default
- `PUT /api/walmart/{integrationInstance}/routing/methods/{shippingMethod}` — Set Shipping Method Carrier
- `POST /api/walmart/{integrationInstance}/routing/rules` — Create Text Rule
- `PUT /api/walmart/{integrationInstance}/routing/rules/reorder` — Reorder Text Rules
- `DELETE /api/walmart/{integrationInstance}/routing/rules/{rule}` — Delete Text Rule
- `PUT /api/walmart/{integrationInstance}/routing/rules/{rule}` — Update Text Rule

_Spec version 1.0.0 → 1.0.0._
