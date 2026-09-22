---
title: API changes — 2026-09-22
description: This release includes 9 additions.
authors: [product-team]
tags: [added]
date: 2026-09-22
---

This release includes 9 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### BOMs
- `GET /api/manufacturing/boms/import/template` — Download BOM Import Template
- `GET /api/manufacturing/boms/list/export` — Export BOMs
- `GET /api/manufacturing/boms/operations/import/template` — Download BOM Operations Import Template
- `GET /api/manufacturing/boms/outputs/import/template` — Download BOM Output Lines Import Template

### Product Listings
- `POST /api/v2/listing-drafts/prepare-ready` — Prepare Ready-to-List Drafts

### Units of Measure
- `GET /api/manufacturing/products/{product}/density` — Get Product Density
- `PUT /api/manufacturing/products/{product}/density` — Update Product Density
- `POST /api/manufacturing/products/{product}/density/suggest` — Suggest Product Density
- `DELETE /api/manufacturing/units-of-measure` — Bulk Delete Units of Measure

_Spec version 1.0.0 → 1.0.0._
