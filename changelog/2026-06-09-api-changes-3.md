---
title: API changes — 2026-06-09
description: This release 1 changed API endpoint(s).
authors: [product-team]
tags: [changed, breaking]
date: 2026-06-09
---

This release 1 changed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Changed

- `GET /api/v2/financials/daily-summary` — Daily Financial Summary **(breaking)**
  - removed parameter(s): `date_from`, `date_to`

_Spec version 1.0.0 → 1.0.0._
