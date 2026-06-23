---
title: API changes — 2026-06-23
description: This release 14 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-23
---

This release 14 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/integrations/17track/instances/{instance}` — Disconnect 17TRACK Instance
- `GET /api/integrations/17track/instances/{instance}` — Get 17TRACK Instance (Dashboard)
- `GET /api/integrations/17track/instances/{instance}/activity` — List Instance Activity Log
- `GET /api/integrations/17track/instances/{instance}/trackings` — List Instance Trackings
- `GET /api/integrations/17track/instances/{instance}/webhooks` — List Instance Webhook Events
- `GET /api/shipment-trackings` — List Shipment Trackings
- `GET /api/shipment-trackings/{tracking}` — Get Shipment Tracking (Timeline Drawer)
- `PATCH /api/integrations/17track/instances/{instance}` — Update 17TRACK Instance
- `POST /api/integrations/17track/instances` — Create 17TRACK Instance
- `POST /api/integrations/17track/test` — Test Connection
- `POST /api/shipment-trackings/backfill` — Backfill Shipment Trackings
- `POST /api/shipment-trackings/register` — Register Shipment Tracking
- `POST /api/shipment-trackings/{tracking}/refresh` — Refresh Shipment Tracking
- `POST /webhooks/seventeentrack/{webhook_token}` — 17TRACK Webhook (TRACKING_UPDATED)

_Spec version 1.0.0 → 1.0.0._
