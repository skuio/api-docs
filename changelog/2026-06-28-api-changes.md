---
title: API changes — 2026-06-28
description: This release includes 16 additions, 3 changes. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-06-28
---

This release includes 16 additions, 3 changes. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### 17track sku.io apis
- **Changed** `POST /webhooks/seventeentrack/{webhook_token}` — Webhook ingress (from 17TRACK)
  - new parameter(s): `sign`
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `404`

## Added

### 17track apis
- `POST /changecarrier` — Change carrier
- `POST /getquota` — Get quota
- `POST /gettrackinfo` — Get tracking info
- `POST /register` — Register tracking numbers
- `POST /retrack` — Retrack
- `POST /stoptrack` — Stop tracking

### 17track sku.io apis
- `DELETE /api/integrations/17track/instances/{instance_id}` — Delete instance
- `GET /api/integrations/17track/instances/{instance_id}` — Show instance
- `PATCH /api/integrations/17track/instances/{instance_id}` — Update instance
- `GET /api/integrations/17track/instances/{instance_id}/activity` — List activity entries
- `POST /api/integrations/17track/instances/{instance_id}/push-pending` — Sync TO 17TRACK — push pending
- `POST /api/integrations/17track/instances/{instance_id}/refresh` — Sync FROM 17TRACK — manual poll
- `GET /api/integrations/17track/instances/{instance_id}/trackings` — List trackings (instance-scoped)
- `GET /api/integrations/17track/instances/{instance_id}/webhooks` — Webhook events (audit listing)
- `GET /api/shipment-trackings/{shipment_tracking_id}` — Show tracking
- `POST /api/shipment-trackings/{shipment_tracking_id}/refresh` — Refresh tracking

## Changed

### 17track sku.io apis
- `POST /api/shipment-trackings/backfill` — Backfill — bulk historical register
  - removed response code(s): `422`
- `POST /api/shipment-trackings/register` — Register tracking — manual
  - new response code(s): `404`

_Spec version 1.0.0 → 1.0.0._
