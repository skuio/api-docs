---
title: API changes — 2026-06-17
description: This release 2 added, 4 changed, 5 removed API endpoint(s).
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-06-17
---

This release 2 added, 4 changed, 5 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `GET /api/reporting/landed-cost-breakdown/result/{trackedJobLog}` — Get Generated Report Result
- `POST /api/reporting/landed-cost-breakdown` — Generate Report with Multiple Filters

## Changed

- `POST //{domain}/api/v2/products/import` — Import Products
  - new response code(s): `202`
  - removed response code(s): `201`, `422`
- `POST //{domain}/api/v2/products/import-supplier-links` — Import Supplier Links
  - new response code(s): `202`
  - removed response code(s): `201`
- `POST /api/v2/products/import` — Execute Import
  - new response code(s): `202`
  - removed response code(s): `200`
- `POST /api/v2/products/import-supplier-links` — Import Supplier Links
  - new response code(s): `202`
  - removed response code(s): `201`

## Removed

- `GET /api/reporting/landed-cost-breakdown` — Get Report with Multiple Filters **(breaking)**
- `POST //{domain}/api/purchase-orders/build` — Build PO (Forecast) **(breaking)**
- `POST //{domain}/api/purchase-orders/build-export` — Export Builder Results **(breaking)**
- `POST /api/purchase-orders/build` — Build PO (Forecast) **(breaking)**
- `POST /api/purchase-orders/build-export` — Export Builder Results **(breaking)**

_Spec version 1.0.0 → 1.0.0._
