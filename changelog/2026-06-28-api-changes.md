---
title: API changes — 2026-06-28
description: This release 16 added, 3 changed API endpoint(s).
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-06-28
---

This release 16 added, 3 changed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `DELETE /api/integrations/17track/instances/{instance_id}` — Delete instance
- `GET /api/integrations/17track/instances/{instance_id}` — Show instance
- `GET /api/integrations/17track/instances/{instance_id}/activity` — List activity entries
- `GET /api/integrations/17track/instances/{instance_id}/trackings` — List trackings (instance-scoped)
- `GET /api/integrations/17track/instances/{instance_id}/webhooks` — Webhook events (audit listing)
- `GET /api/shipment-trackings/{shipment_tracking_id}` — Show tracking
- `PATCH /api/integrations/17track/instances/{instance_id}` — Update instance
- `POST /api/integrations/17track/instances/{instance_id}/push-pending` — Sync TO 17TRACK — push pending
- `POST /api/integrations/17track/instances/{instance_id}/refresh` — Sync FROM 17TRACK — manual poll
- `POST /api/shipment-trackings/{shipment_tracking_id}/refresh` — Refresh tracking
- `POST /changecarrier` — Change carrier
- `POST /getquota` — Get quota
- `POST /gettrackinfo` — Get tracking info
- `POST /register` — Register tracking numbers
- `POST /retrack` — Retrack
- `POST /stoptrack` — Stop tracking

## Changed

- `POST /api/shipment-trackings/backfill` — Backfill — bulk historical register
  - removed response code(s): `422`
- `POST /api/shipment-trackings/register` — Register tracking — manual
  - new response code(s): `404`
- `POST /webhooks/seventeentrack/{webhook_token}` — Webhook ingress (from 17TRACK) **(breaking)**
  - new parameter(s): `sign`
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `404`

_Spec version 1.0.0 → 1.0.0._
