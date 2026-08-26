---
title: API changes — 2026-08-26
description: This release includes 1 addition, 3 changes, 4 removals. 6 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-08-26
---

This release includes 1 addition, 3 changes, 4 removals. 6 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Jobs & Logs
- **Removed** `GET /api/tracked-job-logs` — List Tracked Job Logs
- **Removed** `POST /api/tracked-job-logs` — Create Tracked Job Log
- **Removed** `DELETE /api/tracked-job-logs/{tracked_job_log}` — Delete Tracked Job Log
- **Removed** `PUT /api/tracked-job-logs/{tracked_job_log}` — Update Tracked Job Log

### Incompatible changes

#### Amazon
- **Changed** `GET /api/amazon/unified/ledgers` — List Ledgers
  - removed parameter(s): `date_from`, `date_to`, `event_type`, `integration_instance_ids`, `page`, `per_page`, `search`, `sort`, `status`
- **Changed** `GET /api/amazon/unified/ledgers/export` — Export Ledgers
  - removed parameter(s): `date_from`, `date_to`, `event_type`, `integration_instance_ids`, `search`, `status`

## Added

### Price Sync
- `GET /api/v2/sales-channels/{integrationInstance}/prices/pricing-tiers/coverage` — Get Pricing Level Coverage

## Changed

### Price Sync
- `GET /api/v2/sales-channels/{integrationInstance}/prices/comparison` — List Price Comparison
  - new parameter(s): `filter[priced_from]`

_Spec version 1.0.0 → 1.0.0._
