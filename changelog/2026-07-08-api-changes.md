---
title: API changes — 2026-07-08
description: This release 7 removed API endpoint(s).
authors: [product-team]
tags: [removed, breaking]
date: 2026-07-08
---

This release 7 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Removed

- `DELETE /api/initial-inventory/{id}` — Delete Initial Inventory **(breaking)**
- `GET /api/export/assemblies` — Export Assemblies **(breaking)**
- `GET /api/export/inventory-assemblies` — Export Inventory Assemblies **(breaking)**
- `GET /api/initial-inventory` — List Initial Inventory **(breaking)**
- `GET /api/initial-inventory/{id}` — Get Initial Inventory **(breaking)**
- `POST /api/initial-inventory` — Create Initial Inventory **(breaking)**
- `PUT /api/initial-inventory/{id}` — Update Initial Inventory **(breaking)**

_Spec version 1.0.0 → 1.0.0._
