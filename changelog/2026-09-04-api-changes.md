---
title: API changes — 2026-09-04
description: This release includes 8 additions, 2 removals. 2 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-09-04
---

This release includes 8 additions, 2 removals. 2 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Walmart
- **Removed** `POST /api/walmart/{integrationInstance}/wfs/removals/sync` — Sync WFS Removals
- **Removed** `POST /api/walmart/{integrationInstance}/wfs/removals/{removal}/materialize` — Materialize WFS Removal

## Added

### Amazon
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/change-ship-from` — Change Ship-From on Amazon

### Ledger (Accounting v2)
- `GET /api/ledger/reports/restatement-log` — List Restatement Log

### Walmart
- `GET /api/walmart/{integrationInstance}/wfs/removals/candidates` — List WFS Removal Candidates
- `POST /api/walmart/{integrationInstance}/wfs/removals/{reference}/cancel` — Cancel WFS Removal
- `POST /api/walmart/{integrationInstance}/wfs/removals/{reference}/disposed` — Mark WFS Removal Disposed
- `POST /api/walmart/{integrationInstance}/wfs/removals/{reference}/materialize` — Materialize WFS Removal
- `POST /api/walmart/{integrationInstance}/wfs/removals/{reference}/shipment` — Record WFS Removal Shipment
- `POST /api/walmart/{integrationInstance}/wfs/removals/{reference}/submitted` — Mark WFS Removal Submitted

_Spec version 1.0.0 → 1.0.0._
