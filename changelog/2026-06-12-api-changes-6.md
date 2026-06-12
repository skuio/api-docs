---
title: API changes — 2026-06-12
description: This release 1 added, 2 changed API endpoint(s).
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-06-12
---

This release 1 added, 2 changed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `DELETE /api/sales-reps/{id}` — Delete Sales Rep

## Changed

- `GET /api/reporting/most-profitable-products` — Get Most Profitable Products **(breaking)**
  - removed parameter(s): `filter[end_date]`, `filter[start_date]`
- `GET /api/reporting/top-selling-products` — Get Top Selling Products **(breaking)**
  - removed parameter(s): `filter[end_date]`, `filter[start_date]`

_Spec version 1.0.0 → 1.0.0._
