---
title: API changes — 2026-09-17
description: This release includes 9 additions.
authors: [product-team]
tags: [added]
date: 2026-09-17
---

This release includes 9 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Price Sync
- `POST /api/v2/sales-channels/{integrationInstance}/prices/recompute` — Recalculate Channel Prices

### Product Listings
- `POST /api/v2/product-listings/{listing}/recalculate-price` — Recalculate Listing Price

### Tickets
- `POST /api/support/tickets/{ticket}/notes` — Add Support Ticket Note

### Walmart
- `GET /api/walmart/{integrationInstance}/promotions` — List Promotions
- `POST /api/walmart/{integrationInstance}/promotions` — Schedule Promotions
- `POST /api/walmart/{integrationInstance}/promotions/end` — End Promotions
- `POST /api/walmart/{integrationInstance}/promotions/extend` — Change Promotion End Date
- `POST /api/walmart/{integrationInstance}/promotions/preview` — Preview Promotion
- `GET /api/walmart/{integrationInstance}/promotions/summary` — Get Promotion Summary

_Spec version 1.0.0 → 1.0.0._
