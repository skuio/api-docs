---
title: API changes — 2026-10-06
description: This release includes 52 additions, 12 removals. 12 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-10-06
---

This release includes 52 additions, 12 removals. 12 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Data Feeds
- **Removed** `DELETE /api/data-feeds` — Bulk Delete Data Feeds
- **Removed** `POST /api/data-feeds` — Create Data Feed
- **Removed** `PUT /api/data-feeds/archive` — Bulk Archive Data Feeds
- **Removed** `POST /api/data-feeds/deletable` — Check Data Feeds Deletable
- **Removed** `GET /api/data-feeds/import-config/product_feed` — Get Import Config
- **Removed** `PUT /api/data-feeds/unarchive` — Bulk Unarchive Data Feeds
- **Removed** `DELETE /api/data-feeds/{id}` — Delete Data Feed
- **Removed** `GET /api/data-feeds/{id}` — Get Data Feed
- **Removed** `PUT /api/data-feeds/{id}` — Update Data Feed
- **Removed** `PUT /api/data-feeds/{id}/archive` — Archive Data Feed
- **Removed** `PUT /api/data-feeds/{id}/unarchived` — Unarchive Data Feed

#### Reference Data (Read-Only)
- **Removed** `GET /api/v2/data-feeds` — List Data Feeds

## Added

### Fulfillment Orders
- `PATCH /api/fulfillment-orders/{fulfillmentOrder}/signature` — Update Fulfillment Order Signature Requirement

### Products
- `GET /api/v2/products/{product}/channel-exclusions` — List Product Channel Availability
- `DELETE /api/v2/products/{product}/channel-exclusions/{salesChannel}` — Allow Product On Channel
- `PUT /api/v2/products/{product}/channel-exclusions/{salesChannel}` — Exclude Product From Channel

### Shipfusion
- `GET /api/shipfusion/integration-instances/{integration_instance}/webhook-urls` — Get Webhook URLs

### Shippit
- `GET /api/shippit/instances/{integration_instance}/fulfillment-routing` — Get Fulfillment Routing
- `PUT /api/shippit/instances/{integration_instance}/fulfillment-routing` — Update Fulfillment Routing

### Shippo
- `GET /api/fulfillment-orders/{fulfillmentOrder}/shippo/eligibility` — Get Label Eligibility
- `GET /api/fulfillment-orders/{fulfillmentOrder}/shippo/labels` — List Fulfillment Order Labels
- `POST /api/fulfillment-orders/{fulfillmentOrder}/shippo/labels` — Purchase Label
- `POST /api/fulfillment-orders/{fulfillmentOrder}/shippo/rates` — Get Shipping Rates
- `POST /api/shippo/instances` — Create Integration Instance
- `DELETE /api/shippo/instances/{integration_instance}` — Delete Integration Instance
- `GET /api/shippo/instances/{integration_instance}` — Get Integration Instance
- `PUT /api/shippo/instances/{integration_instance}` — Update Integration Instance
- `GET /api/shippo/instances/{integration_instance}/activity` — List Activity
- `GET /api/shippo/instances/{integration_instance}/carriers` — List Carrier Accounts
- `POST /api/shippo/instances/{integration_instance}/carriers/sync` — Sync Carriers
- `GET /api/shippo/instances/{integration_instance}/dashboard` — Get Dashboard Metrics
- `GET /api/shippo/instances/{integration_instance}/labels` — List Labels
- `POST /api/shippo/instances/{integration_instance}/labels/sync` — Sync Labels
- `GET /api/shippo/instances/{integration_instance}/labels/{label}` — Get Label
- `GET /api/shippo/instances/{integration_instance}/labels/{label}/download` — Download Label
- `GET /api/shippo/instances/{integration_instance}/labels/{label}/raw` — Get Raw Label Payload
- `POST /api/shippo/instances/{integration_instance}/labels/{label}/refund` — Refund Label
- `GET /api/shippo/instances/{integration_instance}/orders` — List Orders
- `POST /api/shippo/instances/{integration_instance}/orders/sync` — Sync Orders
- `GET /api/shippo/instances/{integration_instance}/orders/{order}` — Get Order
- `GET /api/shippo/instances/{integration_instance}/orders/{order}/activity` — List Order Activity
- `GET /api/shippo/instances/{integration_instance}/orders/{order}/raw` — Get Raw Order Payload
- `GET /api/shippo/instances/{integration_instance}/service-levels` — List Service Levels
- `POST /api/shippo/instances/{integration_instance}/service-levels/auto-match` — Auto-Match Service Levels
- `POST /api/shippo/instances/{integration_instance}/service-levels/bulk-map` — Bulk Map Service Levels
- `GET /api/shippo/instances/{integration_instance}/service-levels/export` — Export Service Level Mappings
- `POST /api/shippo/instances/{integration_instance}/service-levels/import` — Import Service Level Mappings
- `PATCH /api/shippo/instances/{integration_instance}/service-levels/{serviceLevel}` — Update Service Level
- `PUT /api/shippo/instances/{integration_instance}/settings` — Update Integration Settings
- `POST /api/shippo/instances/{integration_instance}/sync-tracking` — Sync Tracking
- `POST /api/shippo/instances/{integration_instance}/test-connection` — Test Saved Connection
- `GET /api/shippo/instances/{integration_instance}/warehouses` — List Warehouse Mappings
- `DELETE /api/shippo/instances/{integration_instance}/warehouses/{warehouseId}` — Unmap Warehouse
- `PUT /api/shippo/instances/{integration_instance}/warehouses/{warehouseId}` — Save Warehouse Mapping
- `PATCH /api/shippo/instances/{integration_instance}/warehouses/{warehouseId}/toggle` — Toggle Warehouse Mapping
- `GET /api/shippo/instances/{integration_instance}/webhooks` — List Webhook Events
- `DELETE /api/shippo/instances/{integration_instance}/webhooks/subscribe` — Unsubscribe Webhooks
- `POST /api/shippo/instances/{integration_instance}/webhooks/subscribe` — Subscribe Webhooks
- `GET /api/shippo/instances/{integration_instance}/webhooks/subscription` — Get Webhook Subscription
- `GET /api/shippo/instances/{integration_instance}/webhooks/{webhookEvent}` — Get Webhook Event
- `GET /api/shippo/instances/{integration_instance}/webhooks/{webhookEvent}/raw` — Get Raw Webhook Event Payload
- `POST /api/shippo/instances/{integration_instance}/webhooks/{webhookEvent}/retry` — Retry Webhook Event
- `POST /api/shippo/test` — Test Connection
- `POST /webhooks/shippo/{webhook_token}` — Receive Webhook

_Spec version 1.0.0 → 1.0.0._
