---
title: API changes — 2026-09-06
description: This release includes 5 additions, 1 change. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-09-06
---

This release includes 5 additions, 1 change. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Feed
- **Changed** `GET /api/portal/feed/inventory` — Download Inventory Feed
  - removed parameter(s): `format`

## Added

### Feed
- `DELETE /api/portal/feed/keys` — Revoke Feed Link
- `GET /api/portal/feed/keys` — Get Feed Link
- `POST /api/portal/feed/keys` — Generate Feed Link

### Locations
- `DELETE /api/admin/portal/feed-keys/{feedKey}` — Revoke Feed Link
- `GET /api/admin/portal/locations/{location}/feed-keys` — List Location Feed Links

_Spec version 1.0.0 → 1.0.0._
