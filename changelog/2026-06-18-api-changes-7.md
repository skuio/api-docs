---
title: API changes — 2026-06-18
description: This release 13 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-18
---

This release 13 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/quotes/{quote}` — Delete Quote
- `DELETE /api/quotes/{quote}/lines/{line}` — Remove Quote Line
- `GET /api/quotes` — List Quotes
- `GET /api/quotes/{quote}` — Show Quote
- `POST /api/quotes` — Create Quote
- `POST /api/quotes/{quote}/accept` — Accept Quote
- `POST /api/quotes/{quote}/convert` — Convert Quote
- `POST /api/quotes/{quote}/decline` — Decline Quote
- `POST /api/quotes/{quote}/expire` — Expire Quote
- `POST /api/quotes/{quote}/lines` — Add Quote Line
- `POST /api/quotes/{quote}/revise` — Revise Quote
- `POST /api/quotes/{quote}/send` — Send Quote
- `PUT /api/quotes/{quote}` — Update Quote

_Spec version 1.0.0 → 1.0.0._
