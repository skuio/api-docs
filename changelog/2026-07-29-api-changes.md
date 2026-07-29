---
title: API changes — 2026-07-29
description: This release includes 54 additions.
authors: [product-team]
tags: [added]
date: 2026-07-29
---

This release includes 54 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Purchase Orders
- `POST /api/purchase-orders/submit/preview` — Preview Bulk Submit Purchase Orders

### ShipBob
- `POST /api/shipbob` — Create Instance
- `POST /api/shipbob/test-connection` — Test Connection
- `DELETE /api/shipbob/{instance}` — Delete Instance
- `GET /api/shipbob/{instance}` — Get Instance
- `PUT /api/shipbob/{instance}` — Update Instance
- `GET /api/shipbob/{instance}/dashboard` — Get Dashboard Metrics
- `GET /api/shipbob/{instance}/fulfillment-centers` — List Fulfillment Centers
- `PUT /api/shipbob/{instance}/fulfillment-centers/mappings` — Save Fulfillment Center Mappings
- `POST /api/shipbob/{instance}/fulfillment-centers/sync` — Sync Fulfillment Centers
- `GET /api/shipbob/{instance}/inventory` — List Inventory Levels
- `GET /api/shipbob/{instance}/inventory/discrepancies` — List Discrepancies
- `POST /api/shipbob/{instance}/inventory/discrepancies/stock-take` — Create Stock Take from Discrepancies
- `POST /api/shipbob/{instance}/inventory/sync` — Sync Inventory
- `GET /api/shipbob/{instance}/orders` — List Orders
- `POST /api/shipbob/{instance}/orders/refresh-order` — Refresh Order
- `GET /api/shipbob/{instance}/orders/search` — Search Orders
- `POST /api/shipbob/{instance}/orders/sync` — Sync Orders
- `GET /api/shipbob/{instance}/orders/sync-info` — Get Order Sync Info
- `GET /api/shipbob/{instance}/orders/{order}` — Get Order
- `GET /api/shipbob/{instance}/orders/{order}/raw` — Get Raw Order Data
- `GET /api/shipbob/{instance}/products` — List Products
- `POST /api/shipbob/{instance}/products/push` — Bulk Push Products
- `POST /api/shipbob/{instance}/products/sync` — Sync Products
- `GET /api/shipbob/{instance}/products/{product}` — Get Product
- `PUT /api/shipbob/{instance}/products/{product}/mapping` — Map Product
- `POST /api/shipbob/{instance}/products/{product}/push` — Push Product
- `GET /api/shipbob/{instance}/products/{product}/raw` — Get Raw Product Data
- `GET /api/shipbob/{instance}/receiving` — List Receiving Orders
- `POST /api/shipbob/{instance}/receiving/sync` — Sync Receiving Orders
- `GET /api/shipbob/{instance}/receiving/{receiving}` — Get Receiving Order
- `GET /api/shipbob/{instance}/receiving/{receiving}/box-labels` — Get Box Labels
- `GET /api/shipbob/{instance}/receiving/{receiving}/raw` — Get Raw Receiving Order Data
- `GET /api/shipbob/{instance}/returns` — List Returns
- `POST /api/shipbob/{instance}/returns/sync` — Sync Returns
- `GET /api/shipbob/{instance}/returns/{return}` — Get Return
- `GET /api/shipbob/{instance}/returns/{return}/raw` — Get Raw Return Data
- `GET /api/shipbob/{instance}/shipments` — List Shipments
- `POST /api/shipbob/{instance}/shipments/sync` — Sync Shipments
- `GET /api/shipbob/{instance}/shipments/{shipment}` — Get Shipment
- `GET /api/shipbob/{instance}/shipments/{shipment}/raw` — Get Raw Shipment Data
- `GET /api/shipbob/{instance}/shipments/{shipment}/timeline` — Get Shipment Timeline
- `GET /api/shipbob/{instance}/shipping-methods` — List Shipping Methods
- `POST /api/shipbob/{instance}/shipping-methods/auto-match` — Auto-Match Shipping Methods
- `POST /api/shipbob/{instance}/shipping-methods/bulk-map` — Bulk Map Shipping Methods
- `GET /api/shipbob/{instance}/shipping-methods/export` — Export Shipping Method Mappings
- `POST /api/shipbob/{instance}/shipping-methods/import` — Import Shipping Method Mappings
- `POST /api/shipbob/{instance}/shipping-methods/sync` — Sync Shipping Methods
- `PUT /api/shipbob/{instance}/shipping-methods/{id}/mapping` — Map Shipping Method
- `GET /api/shipbob/{instance}/test-connection` — Test Saved Connection
- `GET /api/shipbob/{instance}/webhooks/events` — List Webhook Events
- `POST /api/shipbob/{instance}/webhooks/events/{event}/replay` — Replay Webhook Event
- `POST /api/shipbob/{instance}/webhooks/subscribe` — Subscribe Webhooks
- `GET /api/shipbob/{instance}/webhooks/subscriptions` — List Webhook Subscriptions

_Spec version 1.0.0 → 1.0.0._
