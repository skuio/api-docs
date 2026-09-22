---
title: API changes — 2026-09-22
description: This release includes 21 additions, 2 changes, 3 removals. 4 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-09-22
---

This release includes 21 additions, 2 changes, 3 removals. 4 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Work Centers
- **Removed** `DELETE /api/manufacturing/work-centers/{id}` — Delete Work Center
- **Removed** `GET /api/manufacturing/work-centers/{id}` — Get Work Center
- **Removed** `PUT /api/manufacturing/work-centers/{id}` — Update Work Center

### Incompatible changes

#### Work Centers
- **Changed** `GET /api/manufacturing/work-centers` — List Work Centers
  - removed parameter(s): `per_page`

## Added

### BOMs
- `GET /api/manufacturing/boms/import/template` — Download BOM Import Template
- `GET /api/manufacturing/boms/list/export` — Export BOMs
- `GET /api/manufacturing/boms/operations/import/template` — Download BOM Operations Import Template
- `GET /api/manufacturing/boms/outputs/import/template` — Download BOM Output Lines Import Template

### MRP Planning
- `GET /api/manufacturing/mrp/mps/export` — Export MPS Entries
- `GET /api/manufacturing/mrp/mps/import/template` — Download MPS Import Template
- `GET /api/manufacturing/mrp/planning-policies/export` — Export Planning Policies
- `GET /api/manufacturing/mrp/planning-policies/import/template` — Download Planning Policy Import Template
- `DELETE /api/manufacturing/mrp/runs/{mrpRun}` — Discard MRP Run
- `GET /api/manufacturing/mrp/runs/{mrpRun}/action-messages/export` — Export Action Messages
- `POST /api/manufacturing/mrp/runs/{mrpRun}/cancel` — Cancel MRP Run
- `GET /api/manufacturing/mrp/runs/{mrpRun}/planned-orders/export` — Export Planned Orders
- `GET /api/manufacturing/mrp/runs/{mrpRun}/time-phased/export` — Export Time-Phased Plan

### Product Listings
- `POST /api/v2/listing-drafts/prepare-ready` — Prepare Ready-to-List Drafts

### Units of Measure
- `GET /api/manufacturing/products/{product}/density` — Get Product Density
- `PUT /api/manufacturing/products/{product}/density` — Update Product Density
- `POST /api/manufacturing/products/{product}/density/suggest` — Suggest Product Density
- `DELETE /api/manufacturing/units-of-measure` — Bulk Delete Units of Measure

### Work Centers
- `DELETE /api/manufacturing/work-centers/{workCenter}` — Delete Work Center
- `GET /api/manufacturing/work-centers/{workCenter}` — Get Work Center
- `PUT /api/manufacturing/work-centers/{workCenter}` — Update Work Center

## Changed

### Work Centers
- `POST /api/manufacturing/work-centers` — Create Work Center
  - new response code(s): `201`
  - removed response code(s): `200`

_Spec version 1.0.0 → 1.0.0._
