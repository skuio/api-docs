---
title: API changes — 2026-10-09
description: This release includes 47 additions.
authors: [product-team]
tags: [added]
date: 2026-10-09
---

This release includes 47 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### PayPal
- `GET /api/paypal/availability` — Get PayPal Availability

### ShipBob
- `GET /api/shipbob/{instance}/fulfillment-centers/mappable-warehouses` — List Mappable Warehouses
- `GET /api/shipbob/{instance}/products/{product}/mapping-candidates` — Get Product Mapping Candidates
- `GET /api/shipbob/{instance}/webhooks/events/{event}` — Get Webhook Event

### ShipRush
- `POST /api/shiprush/instances` — Create Integration Instance
- `DELETE /api/shiprush/instances/{integration_instance}` — Delete Integration Instance
- `GET /api/shiprush/instances/{integration_instance}` — Get Integration Instance
- `PATCH /api/shiprush/instances/{integration_instance}` — Update Integration Instance
- `GET /api/shiprush/instances/{integration_instance}/dashboard` — Get Dashboard Metrics
- `GET /api/shiprush/instances/{integration_instance}/dashboard/daily-activity` — Get Daily Order Activity
- `GET /api/shiprush/instances/{integration_instance}/orders` — List Orders
- `POST /api/shiprush/instances/{integration_instance}/orders/bulk-cancel` — Bulk Cancel Orders
- `POST /api/shiprush/instances/{integration_instance}/orders/bulk-re-export` — Bulk Re-export Orders
- `POST /api/shiprush/instances/{integration_instance}/orders/sync` — Sync Orders
- `GET /api/shiprush/instances/{integration_instance}/orders/sync-info` — Get Sync Info
- `GET /api/shiprush/instances/{integration_instance}/orders/{order}` — Get Order
- `GET /api/shiprush/instances/{integration_instance}/orders/{order}/activity` — Get Order Activity
- `POST /api/shiprush/instances/{integration_instance}/orders/{order}/cancel` — Cancel Order
- `GET /api/shiprush/instances/{integration_instance}/orders/{order}/raw` — Get Raw Snapshot
- `POST /api/shiprush/instances/{integration_instance}/orders/{order}/re-export` — Re-export Order
- `GET /api/shiprush/instances/{integration_instance}/readiness` — Get Setup Readiness
- `POST /api/shiprush/instances/{integration_instance}/regenerate-credentials` — Regenerate Credentials
- `GET /api/shiprush/instances/{integration_instance}/shipments` — List Shipments
- `POST /api/shiprush/instances/{integration_instance}/shipments/bulk-re-process` — Bulk Re-process Shipments
- `POST /api/shiprush/instances/{integration_instance}/shipments/sync` — Sync Shipments
- `GET /api/shiprush/instances/{integration_instance}/shipments/sync-info` — Get Sync Info
- `GET /api/shiprush/instances/{integration_instance}/shipments/{shipment}` — Get Shipment
- `GET /api/shiprush/instances/{integration_instance}/shipments/{shipment}/activity` — Get Shipment Activity
- `GET /api/shiprush/instances/{integration_instance}/shipments/{shipment}/raw` — Get Raw Snapshot
- `POST /api/shiprush/instances/{integration_instance}/shipments/{shipment}/re-process` — Re-process Shipment
- `GET /api/shiprush/instances/{integration_instance}/shipping-methods` — List Shipping Methods
- `POST /api/shiprush/instances/{integration_instance}/shipping-methods` — Create Manual Mapping
- `POST /api/shiprush/instances/{integration_instance}/shipping-methods/bulk-map` — Bulk Map Shipping Methods
- `GET /api/shiprush/instances/{integration_instance}/shipping-methods/export` — Export Shipping Methods CSV
- `POST /api/shiprush/instances/{integration_instance}/shipping-methods/import` — Import Shipping Methods CSV
- `POST /api/shiprush/instances/{integration_instance}/shipping-methods/sync` — Sync Services
- `DELETE /api/shiprush/instances/{integration_instance}/shipping-methods/{shippingMethod}` — Delete Mapping
- `PATCH /api/shiprush/instances/{integration_instance}/shipping-methods/{shippingMethod}` — Update Mapping
- `GET /api/shiprush/instances/{integration_instance}/warehouses` — List Warehouse Routing
- `PUT /api/shiprush/instances/{integration_instance}/warehouses/{warehouse}` — Update Warehouse Routing
- `GET /api/shiprush/instances/{integration_instance}/webhooks` — List Webhook Events
- `POST /api/shiprush/instances/{integration_instance}/webhooks/bulk-re-process` — Bulk Re-process Webhook Events
- `GET /api/shiprush/instances/{integration_instance}/webhooks/endpoint` — Get Endpoint Info
- `GET /api/shiprush/instances/{integration_instance}/webhooks/{webhookEvent}` — Get Webhook Event
- `POST /api/shiprush/instances/{integration_instance}/webhooks/{webhookEvent}/re-process` — Re-process Webhook Event

### TikTok Shop
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{tiktok_shop_product_id}/optimize` — Apply Listing Optimization
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{tiktok_shop_product_id}/optimize/draft` — Draft Listing Optimization

_Spec version 1.0.0 → 1.0.0._
