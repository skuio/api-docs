---
title: API changes — 2026-06-18
description: This release 13 removed API endpoint(s).
authors: [product-team]
tags: [removed, breaking]
date: 2026-06-18
---

This release 13 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Removed

- `DELETE /api/quotes/{quote}` — Delete Quote **(breaking)**
- `DELETE /api/quotes/{quote}/lines/{line}` — Remove Quote Line **(breaking)**
- `GET /api/quotes` — List Quotes **(breaking)**
- `GET /api/quotes/{quote}` — Show Quote **(breaking)**
- `POST /api/quotes` — Create Quote **(breaking)**
- `POST /api/quotes/{quote}/accept` — Accept Quote **(breaking)**
- `POST /api/quotes/{quote}/convert` — Convert Quote **(breaking)**
- `POST /api/quotes/{quote}/decline` — Decline Quote **(breaking)**
- `POST /api/quotes/{quote}/expire` — Expire Quote **(breaking)**
- `POST /api/quotes/{quote}/lines` — Add Quote Line **(breaking)**
- `POST /api/quotes/{quote}/revise` — Revise Quote **(breaking)**
- `POST /api/quotes/{quote}/send` — Send Quote **(breaking)**
- `PUT /api/quotes/{quote}` — Update Quote **(breaking)**

_Spec version 1.0.0 → 1.0.0._
