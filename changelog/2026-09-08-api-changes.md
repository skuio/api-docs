---
title: API changes — 2026-09-08
description: This release includes 6 additions.
authors: [product-team]
tags: [added]
date: 2026-09-08
---

This release includes 6 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Products
- `GET /api/v2/products/{product}/component-revisions` — List Composition Revisions
- `POST /api/v2/products/{product}/component-revisions` — Apply or Schedule a Recipe Change
- `GET /api/v2/products/{product}/component-revisions/{revision}` — Get Composition Revision
- `GET /api/v2/products/{product}/component-revisions/{revision}/affected-orders` — List Orders Affected by a Correction
- `POST /api/v2/products/{product}/component-revisions/{revision}/rewrite-orders` — Rewrite Affected Orders
- `GET /api/v2/products/{product}/composition` — Resolve Composition As Of Date

_Spec version 1.0.0 → 1.0.0._
