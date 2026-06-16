---
title: API changes — 2026-06-16
description: This release 18 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-16
---

This release 18 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/artworks/{artwork}` — Archive Artwork
- `DELETE /api/decoration-cost-rules/{decoration_cost_rule}` — Delete Decoration Cost Rule
- `DELETE /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decorations/{decoration}` — Remove Line Decoration
- `GET /api/artworks` — List Artworks
- `GET /api/artworks/{artwork}` — Get Artwork
- `GET /api/decoration-cost-rules` — List Decoration Cost Rules
- `GET /api/decoration-cost-rules/{decoration_cost_rule}` — Show Decoration Cost Rule
- `GET /api/sales-orders/{salesOrder}/decoration-orders` — List Decoration Orders
- `GET /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decorations` — List Line Decorations
- `POST /api/artworks` — Create Artwork
- `POST /api/decoration-cost-rules` — Create Decoration Cost Rule
- `POST /api/sales-orders/{salesOrder}/decoration-orders` — Create Decoration Orders (Bulk)
- `POST /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decoration-orders` — Create Line Decoration Orders
- `POST /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decorations` — Add Line Decoration
- `POST /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decorations/{decoration}/reprice` — Reprice Line Decoration
- `PUT /api/artworks/{artwork}` — Update Artwork
- `PUT /api/decoration-cost-rules/{decoration_cost_rule}` — Update Decoration Cost Rule
- `PUT /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decorations/{decoration}` — Update Line Decoration

_Spec version 1.0.0 → 1.0.0._
