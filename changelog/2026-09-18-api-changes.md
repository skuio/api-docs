---
title: API changes — 2026-09-18
description: This release includes 2 additions, 1 removal. 1 breaking change — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-09-18
---

This release includes 2 additions, 1 removal. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Sales Channel Product Templates
- **Removed** `GET /api/sales-channel-product-templates` — List Sales Channel Product Templates

## Added

### Sales Channel Product Templates
- `GET /api/v2/sales-channel-product-templates` — List Sales Channel Product Templates
- `POST /api/v2/sales-channel-product-templates/bulk-destroy` — Bulk Delete Sales Channel Product Templates

_Spec version 1.0.0 → 1.0.0._
