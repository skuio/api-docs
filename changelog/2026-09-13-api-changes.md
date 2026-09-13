---
title: API changes — 2026-09-13
description: This release includes 4 additions, 2 removals. 2 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-09-13
---

This release includes 4 additions, 2 removals. 2 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### ShipBob
- **Removed** `POST /api/shipbob/{instance}/products/push` — Bulk Push Products
- **Removed** `POST /api/shipbob/{instance}/products/{product}/push` — Push Product

## Added

### ShipBob
- `GET /api/shipbob/{instance}/activity-log` — Get Activity Log
- `POST /api/shipbob/{instance}/products/auto-match` — Auto-Match Products
- `GET /api/shipbob/{instance}/products/summary` — Get Products Summary
- `DELETE /api/shipbob/{instance}/products/{product}/mapping` — Unmap Product

_Spec version 1.0.0 → 1.0.0._
