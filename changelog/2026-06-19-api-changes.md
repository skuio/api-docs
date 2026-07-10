---
title: API changes — 2026-06-19
description: This release includes 5 additions.
authors: [product-team]
tags: [added]
date: 2026-06-19
---

This release includes 5 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Fulfillment Orders
- `GET /api/fulfillment-orders/board-counts` — Dispatch Board — Lifecycle Counts

### Quotes
- `POST /api/quotes/{quote}/create-order` — Create Sales Order from Quote

### Shipping Providers
- `POST //{domain}/api/3pl/orders/fulfillmentOrder/acknowledge` — Acknowledge Order

### Sub Sales Channels
- `GET //{domain}/api/sub-sales-channels` — List Sub Sales Channels
- `PATCH //{domain}/api/sub-sales-channels/{subSalesChannel}/source-type` — Reclassify Source Type

_Spec version 1.0.0 → 1.0.0._
