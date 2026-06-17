---
title: API changes — 2026-06-17
description: This release 3 added, 1 changed API endpoint(s).
authors: [product-team]
tags: [added, changed]
date: 2026-06-17
---

This release 3 added, 1 changed API endpoint(s).

<!-- truncate -->

## Added

- `GET //{domain}/api/v2/products/{product}/lots-expiry` — Get Product Lots & Expiry
- `GET //{domain}/api/v2/products/{product}/lots/{fifoLayer}/genealogy` — Get Product Lot Genealogy
- `POST /api/stock-takes/{stockTake}/reallocation-preview` — Reallocation Preview

## Changed

- `PUT /api/stock-takes/{stock_take}` — Update Stock Take
  - new response code(s): `400`

_Spec version 1.0.0 → 1.0.0._
