---
title: API changes — 2026-06-07
description: This release 5 removed API endpoint(s).
authors: [product-team]
tags: [removed, breaking]
date: 2026-06-07
---

This release 5 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Removed

- `GET /api/inventory/forecast` — Get Inventory Forecast **(breaking)**
- `GET /api/inventory/forecast/status` — Get Forecast Status **(breaking)**
- `GET /api/inventory/forecast/total-cost` — Get Forecast Total Cost **(breaking)**
- `POST /api/inventory/forecast/purchase-orders` — Create Purchase Orders from Forecast **(breaking)**
- `POST /api/inventory/forecast/refresh` — Refresh Forecast **(breaking)**

_Spec version 1.0.0 → 1.0.0._
