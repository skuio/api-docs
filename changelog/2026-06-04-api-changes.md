---
title: API changes — 2026-06-04
description: This release includes 7 additions.
authors: [product-team]
tags: [added]
date: 2026-06-04
---

This release includes 7 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Sales Channels
- `POST //{domain}/api/shopify` — Create Integration
- `GET //{domain}/api/shopify/config` — Get OAuth Config
- `GET //{domain}/api/shopify/install/{claimToken}` — Show Install (Claim Page)
- `POST //{domain}/api/shopify/install/{claimToken}/claim` — Claim Install (Sign Up or Attach)
- `GET //{domain}/api/shopify/install/{claimToken}/status` — Poll Claim Status
- `GET //{domain}/api/shopify/{integrationInstance}/authorization-url` — Get Authorization URL

### Shipping Providers
- `POST //{domain}/api/3pl/orders/fulfillmentOrder/fulfill` — Fulfill Order

_Spec version 1.0.0 → 1.0.0._
