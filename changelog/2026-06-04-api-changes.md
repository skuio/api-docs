---
title: API changes — 2026-06-04
description: This release 7 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-04
---

This release 7 added API endpoint(s).

<!-- truncate -->

## Added

- `GET //{domain}/api/shopify/config` — Get OAuth Config
- `GET //{domain}/api/shopify/install/{claimToken}` — Show Install (Claim Page)
- `GET //{domain}/api/shopify/install/{claimToken}/status` — Poll Claim Status
- `GET //{domain}/api/shopify/{integrationInstance}/authorization-url` — Get Authorization URL
- `POST //{domain}/api/3pl/orders/fulfillmentOrder/fulfill` — Fulfill Order
- `POST //{domain}/api/shopify` — Create Integration
- `POST //{domain}/api/shopify/install/{claimToken}/claim` — Claim Install (Sign Up or Attach)

_Spec version 1.0.0 → 1.0.0._
