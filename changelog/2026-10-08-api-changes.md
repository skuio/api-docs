---
title: API changes — 2026-10-08
description: This release includes 21 additions, 5 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-10-08
---

This release includes 21 additions, 5 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Custom Report Builder
- `POST /api/v2/report-builder/sql/export` — Export SQL Statement Results
- `POST /api/v2/report-builder/sql/run` — Run SQL Statement
- `GET /api/v2/report-builder/sql/schema` — Get SQL Schema
- `POST /api/v2/report-builder/sql/validate` — Validate SQL Statement

### Products
- `GET /api/products/{product}/three-pl-costs` — Get Product 3PL Costs

### ShipBob
- `GET /api/shipbob/{instance}/bills` — List Bills
- `GET /api/shipbob/{instance}/bills/fee-types` — List Bill Fee Types
- `POST /api/shipbob/{instance}/bills/reattribute` — Re-attribute Bills
- `GET /api/shipbob/{instance}/bills/reference-types` — List Bill Reference Types
- `GET /api/shipbob/{instance}/bills/sales-channels` — List Bill Sales Channels
- `GET /api/shipbob/{instance}/bills/summary` — Get Bills Summary
- `POST /api/shipbob/{instance}/bills/sync` — Sync Bills
- `GET /api/shipbob/{instance}/bills/{transaction}` — Get Bill
- `POST /api/shipbob/{instance}/bills/{transaction}/unvoid` — Unvoid Bill
- `POST /api/shipbob/{instance}/bills/{transaction}/void` — Void Bill
- `GET /api/shipbob/{instance}/fee-mappings` — List Fee Mappings
- `PUT /api/shipbob/{instance}/fee-mappings/{mapping}` — Update Fee Mapping
- `GET /api/shipbob/{instance}/invoices` — List Billing Invoices

### Shopify
- `POST /api/shopify/{integrationInstance}/reserve-by-tag/apply` — Reserve Matching Orders by Tag
- `GET /api/shopify/{integrationInstance}/reserve-by-tag/preview` — Preview Reserve Orders by Tag
- `POST /api/shopify/{integrationInstance}/reserve-by-tag/release` — Release Tag Holds

## Changed

### Custom Report Builder
- `POST /api/v2/custom-reports` — Create Custom Report
  - new response code(s): `201`
  - removed response code(s): `200`
- `POST /api/v2/custom-reports/{id}/export` — Export Custom Report
  - removed response code(s): `200`
- `POST /api/v2/custom-reports/{id}/shares` — Add Share
  - removed response code(s): `200`

### ShipBob
- `DELETE /api/shipbob/{instance}` — Delete Instance
  - new response code(s): `422`

### TikTok Shop
- `GET /api/tiktok-shop/oauth/init` — OAuth Init
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
