---
title: API changes — 2026-06-23
description: This release 17 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-23
---

This release 17 added API endpoint(s).

<!-- truncate -->

## Added

- `GET /api/walmart/1/wfs/inbound-products` — Search WFS Inbound Products
- `GET /api/walmart/1/wfs/inbound-shipments` — List WFS Inbound Shipments
- `GET /api/walmart/1/wfs/inbound-shipments/7` — Get WFS Inbound Shipment
- `GET /api/walmart/1/wfs/inventory` — List WFS Inventory
- `GET /api/walmart/1/wfs/replenishment` — WFS Replenishment Grid
- `GET /api/walmart/1/wfs/replenishment/settings` — Get WFS Replenishment Settings
- `GET /api/walmart/1/wfs/settings` — Get WFS Settings
- `GET /api/walmart/1/wfs/source-warehouses` — WFS Source Warehouses
- `GET /api/walmart/{integrationInstance}/wfs/replenishment/candidates` — WFS Candidate Grid
- `POST /api/walmart/1/wfs/inbound-products/resolve` — Resolve WFS Inbound Identifiers
- `POST /api/walmart/1/wfs/inbound-shipments/refresh-tracked` — Refresh WFS Inbound Shipments
- `POST /api/walmart/1/wfs/inventory/refresh-tracked` — Refresh WFS Inventory
- `POST /api/walmart/{integrationInstance}/returns/refresh-tracked` — Refresh Returns
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments` — Create WFS Inbound Shipment
- `POST /webhooks/walmart/{webhook_token}` — Receive Walmart Webhook
- `PUT /api/walmart/1/wfs/replenishment/settings` — Update WFS Replenishment Settings
- `PUT /api/walmart/1/wfs/settings` — Update WFS Settings

_Spec version 1.0.0 → 1.0.0._
