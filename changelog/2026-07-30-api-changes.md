---
title: API changes — 2026-07-30
description: This release includes 1 change. 1 breaking change — action required.
authors: [product-team]
tags: [changed, breaking]
date: 2026-07-30
---

This release includes 1 change. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Suppliers
- **Changed** `GET /api/v2/suppliers` — List Suppliers
  - removed parameter(s): `archived`, `excluded[]`, `included[]`, `limit`, `page`, `search`, `sort`

_Spec version 1.0.0 → 1.0.0._
