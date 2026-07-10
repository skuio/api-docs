---
title: API changes — 2026-05-19
description: This release includes 10 additions, 2 changes. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-05-19
---

This release includes 10 additions, 2 changes. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Inbound Shipments
- **Changed** `GET /api/inbound-shipments/{inbound_shipment}/available-purchase-orders` — Available Purchase Orders
  - removed parameter(s): `per_page`, `search`

## Added

### Reporting
- `GET /api/reporting/products/leaderboard` — Get Product Leaderboard
- `GET /api/reporting/products/overview` — Get Product Overview
- `POST /api/reporting/products/rebuild-snapshots` — Rebuild Product Metric Snapshots
- `GET /api/reporting/products/scorecard-settings` — Get Scorecard Settings
- `PUT /api/reporting/products/scorecard-settings` — Update Scorecard Settings
- `GET /api/reporting/products/{product}/analytics` — Get Product Analytics
- `GET /api/reporting/products/{product}/channels` — Get Product Channel Breakdown
- `GET /api/reporting/products/{product}/channels/{salesChannel}` — Get Product Channel Drilldown
- `GET /api/reporting/products/{product}/scorecard` — Get Product Scorecard
- `GET /api/reporting/products/{product}/scorecard-summary` — Get Product Scorecard Summary

## Changed

### Shipping Providers
- `POST /api/3pl/asns/receipt` — Receive ASN (Report Receipt)
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
