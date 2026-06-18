---
title: API changes — 2026-06-18
description: This release 2 removed API endpoint(s).
authors: [product-team]
tags: [removed, breaking]
date: 2026-06-18
---

This release 2 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Removed

- `GET /api/temu/{integration_instance}/products/{product}/raw` — Get Raw Product (Live from Temu) **(breaking)**
- `POST /api/temu/{integration_instance}/products/{product}/refresh` — Refresh Single Product **(breaking)**

_Spec version 1.0.0 → 1.0.0._
