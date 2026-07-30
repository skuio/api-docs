---
title: API changes — 2026-07-30
description: This release includes 14 additions, 1 change. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-07-30
---

This release includes 14 additions, 1 change. 1 breaking change — action required.

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

## Added

### Product Listings
- `POST /api/content-sync/bulk-apply` — Bulk Apply Content Changes
- `POST /api/content-sync/bulk-ignore` — Bulk Ignore Content Changes
- `GET /api/content-sync/conflicts` — List Content Conflicts
- `POST /api/content-sync/conflicts/{contentChange}/resolve` — Resolve Content Conflict
- `GET /api/content-sync/drift` — List Content Drift
- `POST /api/content-sync/reconcile` — Reconcile Content Drift
- `GET /api/content-sync/summary` — Get Content Sync Summary
- `GET /api/integration-instances/{integrationInstance}/content-sync-settings` — Get Content Sync Settings
- `PUT /api/integration-instances/{integrationInstance}/content-sync-settings` — Update Content Sync Settings
- `GET /api/product-listings/{productListing}/content-changes` — List Content Changes for Listing
- `POST /api/product-listings/{productListing}/content-changes/apply` — Apply Content Changes
- `GET /api/product-listings/{productListing}/content-changes/history` — Get Content Change History
- `POST /api/product-listings/{productListing}/content-changes/ignore` — Ignore Content Changes
- `POST /api/product-listings/{productListing}/content-changes/reconcile` — Reconcile Listing Content

_Spec version 1.0.0 → 1.0.0._
