---
title: API changes — 2026-07-01
description: This release includes 2 changes.
authors: [product-team]
tags: [changed]
date: 2026-07-01
---

This release includes 2 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Changed

### Sales Channels
- `POST //{domain}/api/amazon/{integrationInstance}/products/refresh` — Refresh All Products (Tracked)
  - new response code(s): `409`

### Stock Takes
- `POST /api/stock-takes/{stockTake}/initiate` — Initiate Count
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
