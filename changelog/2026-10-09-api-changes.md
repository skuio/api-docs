---
title: API changes — 2026-10-09
description: This release includes 6 additions.
authors: [product-team]
tags: [added]
date: 2026-10-09
---

This release includes 6 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### PayPal
- `GET /api/paypal/availability` — Get PayPal Availability

### ShipBob
- `GET /api/shipbob/{instance}/fulfillment-centers/mappable-warehouses` — List Mappable Warehouses
- `GET /api/shipbob/{instance}/products/{product}/mapping-candidates` — Get Product Mapping Candidates
- `GET /api/shipbob/{instance}/webhooks/events/{event}` — Get Webhook Event

### TikTok Shop
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{tiktok_shop_product_id}/optimize` — Apply Listing Optimization
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{tiktok_shop_product_id}/optimize/draft` — Draft Listing Optimization

_Spec version 1.0.0 → 1.0.0._
