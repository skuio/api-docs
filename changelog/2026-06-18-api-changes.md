---
title: API changes — 2026-06-18
description: This release includes 14 additions.
authors: [product-team]
tags: [added]
date: 2026-06-18
---

This release includes 14 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Quotes
- `GET /api/quotes` — List Quotes
- `POST /api/quotes` — Create Quote
- `DELETE /api/quotes/{quote}` — Delete Quote
- `GET /api/quotes/{quote}` — Show Quote
- `PUT /api/quotes/{quote}` — Update Quote
- `POST /api/quotes/{quote}/accept` — Accept Quote
- `POST /api/quotes/{quote}/convert` — Convert Quote
- `POST /api/quotes/{quote}/decline` — Decline Quote
- `POST /api/quotes/{quote}/expire` — Expire Quote
- `POST /api/quotes/{quote}/lines` — Add Quote Line
- `DELETE /api/quotes/{quote}/lines/{line}` — Remove Quote Line
- `POST /api/quotes/{quote}/revise` — Revise Quote
- `POST /api/quotes/{quote}/send` — Send Quote

### Shipping Providers
- `POST //{domain}/api/trackstar/integration-instances/{integrationInstance}/cost-line-type/preview` — Preview Cost Line Type Impact

_Spec version 1.0.0 → 1.0.0._
