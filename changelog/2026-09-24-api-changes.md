---
title: API changes — 2026-09-24
description: This release includes 5 additions.
authors: [product-team]
tags: [added]
date: 2026-09-24
---

This release includes 5 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Product Listings
- `POST /api/ai/listing-content/bulk` — Bulk Generate & Apply Listing Content

### Sales Order Lines
- `POST /api/sales-order-lines/{salesOrderLine}/unlock-warehouse` — Unlock Sales Order Line Warehouse

### Shopify
- `GET /api/shopify/{integrationInstance}/location-audit` — Get Location Audit Summary
- `GET /api/shopify/{integrationInstance}/location-audit/lines` — List Location Audit Lines
- `POST /api/shopify/{integrationInstance}/location-audit/move` — Move Location Audit Lines to Mapped Warehouse

_Spec version 1.0.0 → 1.0.0._
