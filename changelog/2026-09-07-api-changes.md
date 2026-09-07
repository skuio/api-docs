---
title: API changes — 2026-09-07
description: This release includes 5 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-09-07
---

This release includes 5 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Reporting
- `GET /api/reporting/sales-rep-commissions/group-commissions` — Get Commissions by Group
- `GET /api/reporting/sales-rep-commissions/monthly-breakdown-by-group` — Get Monthly Breakdown by Group
- `GET /api/reporting/sales-rep-commissions/monthly-breakdown-by-rep` — Get Monthly Breakdown by Rep
- `GET /api/reporting/sales-rep-commissions/performance` — List Sales Rep Performance
- `GET /api/reporting/sales-rep-commissions/performance-summary` — Get Performance Summary

## Changed

### ShipHero
- `POST /api/shiphero/integration-instances/{integration_instance}/inventory/refresh` — Refresh Inventory
  - new response code(s): `202`, `409`
  - removed response code(s): `200`

_Spec version 1.0.0 → 1.0.0._
