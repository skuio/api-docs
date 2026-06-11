---
title: API changes — 2026-06-11
description: This release 50 added, 1 removed API endpoint(s).
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-06-11
---

This release 50 added, 1 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `DELETE //{domain}/api/shipstation/integration-instances/{integration_instance}` — Delete Integration Instance
- `DELETE //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods/map/ups|ups_ground` — Unmap Shipping Method
- `DELETE //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-subscriptions/{subscription}` — Unsubscribe Webhook
- `GET //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments` — List Shipments
- `GET //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments/sync-info` — Shipments Sync Info
- `GET //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments/{shipment}` — Get Shipment
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}` — Get Integration Instance
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/dashboard` — Get Dashboard Metrics
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders` — List Orders
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders-chart` — Get Orders Chart (Date Range)
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/sync-info` — Sync Info
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/sync-progress/{trackedJobLogId}` — Sync Progress
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}` — Get Order
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}/detail` — Get Order Detail (raw JSON)
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}/webhook-events` — Get Order Webhook Events
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods` — List Shipping Methods
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods/export` — Export Shipping Method Mappings (CSV)
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/warehouses` — List Warehouses
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-events` — List Webhook Events
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-events/{webhook_event}` — Get Webhook Event
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-subscriptions` — List Webhook Configurations
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-test/events/{eventId}/payload` — Get Test Event Payload
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-test/recent-events` — List Recent Test Events
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-test/topics` — List Webhook Topics
- `GET //{domain}/api/shipstation/webhook-test/status` — Get Webhook Test Status (Global)
- `POST //{domain}/api/shipstation/integration-instances` — Create Integration Instance
- `POST //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments/sync` — Sync Shipments
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/refresh-order` — Refresh Single Order
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/search` — Search Orders (Live)
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/submit-fulfillment` — Submit Fulfillment
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/sync` — Sync Orders
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}/link-fulfillment` — Link Order to Fulfillment
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}/sync-detail` — Sync Order Detail
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}/tracking` — Refresh Order Tracking
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}/unlink-fulfillment` — Unlink Order from Fulfillment
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods/import` — Import Shipping Method Mappings (CSV)
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods/sync` — Sync Shipping Methods
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/test-connection` — Test Connection
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/warehouses/sync` — Sync Warehouses
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/warehouses/{shipstationId}/link` — Link Warehouse
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-events/{webhook_event}/retry` — Retry Webhook Event
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-subscriptions` — Subscribe to Webhook Event
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-subscriptions/sync` — Sync Subscriptions from ShipStation
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-test/process` — Process Test Webhook
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-test/validate` — Validate Test Payload
- `POST //{domain}/webhooks/tiktok-shop` — Receive Webhook (TikTok → SKU.io)
- `PUT //{domain}/api/shipstation/integration-instances/{integration_instance}` — Update Integration Instance
- `PUT //{domain}/api/shipstation/integration-instances/{integration_instance}/fulfillment-routing` — Update Fulfillment Routing
- `PUT //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods/bulk-map` — Bulk Map Shipping Methods
- `PUT //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods/map` — Map Shipping Method

## Removed

- `POST //{domain}/api/tiktok-shop/webhooks` — Receive Webhook (TikTok → SKU.io) **(breaking)**

_Spec version 1.0.0 → 1.0.0._
