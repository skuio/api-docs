---
title: API changes — 2026-10-09
description: This release includes 109 additions, 5 changes. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-10-09
---

This release includes 109 additions, 5 changes. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Amazon
- **Changed** `GET /api/amazon/unified/fba-inventory` — List FBA Inventory
  - removed parameter(s): `integration_instance_ids`, `page`, `per_page`, `search`

## Added

### Amazon
- `GET /api/amazon/unified/fba-inventory/floor-status-counts` — Get FBA Floor Status Counts
- `GET /api/amazon/unified/fba-stock-floors/by-product/{product}` — List FBA Minimums for a Product
- `GET /api/amazon/{integrationInstance}/fba-route-lead-times` — List Route Lead Times
- `POST /api/amazon/{integrationInstance}/fba-route-lead-times/remeasure` — Re-measure Route Lead Times
- `GET /api/amazon/{integrationInstance}/fba-route-lead-times/samples` — List Route Lead Time Samples
- `DELETE /api/amazon/{integrationInstance}/fba-stock-floors` — Delete FBA Minimum or Clear Region Default
- `GET /api/amazon/{integrationInstance}/fba-stock-floors` — List FBA Minimums
- `POST /api/amazon/{integrationInstance}/fba-stock-floors/bulk` — Bulk Set FBA Minimums
- `GET /api/amazon/{integrationInstance}/fba-stock-floors/defaults` — Get FBA Minimum Region Defaults
- `GET /api/amazon/{integrationInstance}/fba-stock-floors/export` — Export FBA Minimums

### Inventory Intelligence
- `GET /api/inventory-forecasting/runs/latest` — Get Latest Plan
- `GET /api/inventory-forecasting/runs/{runId}` — Get Plan
- `GET /api/inventory-forecasting/runs/{runId}/lines` — List Plan Lines
- `GET /api/inventory-forecasting/runs/{runId}/lines/{lineId}/explosion` — Get Plan Line Breakdown
- `POST /api/inventory-forecasting/runs/{runId}/orders` — Generate Orders from Plan

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
- `GET /api/shiprush/instances/{integration_instance}/webhooks` — List Webhook Events
- `POST /api/shiprush/instances/{integration_instance}/webhooks/bulk-re-process` — Bulk Re-process Webhook Events
- `GET /api/shiprush/instances/{integration_instance}/webhooks/endpoint` — Get Endpoint Info
- `GET /api/shiprush/instances/{integration_instance}/webhooks/{webhookEvent}` — Get Webhook Event
- `POST /api/shiprush/instances/{integration_instance}/webhooks/{webhookEvent}/re-process` — Re-process Webhook Event

### SPS Commerce
- `GET /api/spscommerce/fulfillments/{salesOrderFulfillment}/packing` — Get Shipment Packing
- `POST /api/spscommerce/fulfillments/{salesOrderFulfillment}/packing/auto-pack` — Auto-Pack Shipment
- `POST /api/spscommerce/fulfillments/{salesOrderFulfillment}/packing/finalize` — Finalize Shipment Packing
- `POST /api/spscommerce/fulfillments/{salesOrderFulfillment}/packing/labels` — Generate Carton Labels
- `GET /api/spscommerce/fulfillments/{salesOrderFulfillment}/packing/labels/pdf` — Download Carton Labels (PDF)
- `GET /api/spscommerce/fulfillments/{salesOrderFulfillment}/packing/labels/zpl` — Download Carton Labels (ZPL)
- `POST /api/spscommerce/fulfillments/{salesOrderFulfillment}/packing/reopen` — Reopen Shipment Packing
- `GET /api/spscommerce/integrations` — List SPS Commerce Integrations
- `POST /api/spscommerce/integrations/complete` — Complete SPS Commerce Integration Setup
- `POST /api/spscommerce/integrations/initialize` — Initialize SPS Commerce OAuth Flow
- `DELETE /api/spscommerce/integrations/{id}` — Delete SPS Commerce Integration
- `GET /api/spscommerce/integrations/{id}/label-templates` — List Carton Label Templates
- `PATCH /api/spscommerce/integrations/{id}/settings` — Update SPS Commerce Settings
- `GET /api/spscommerce/integrations/{id}/test-connection` — Test SPS Commerce Connection
- `GET /api/spscommerce/{integrationInstance}/acknowledgments` — List Acknowledgments
- `GET /api/spscommerce/{integrationInstance}/acknowledgments/metrics` — Get Acknowledgment Statistics
- `GET /api/spscommerce/{integrationInstance}/acknowledgments/{acknowledgment}` — Get Acknowledgment
- `GET /api/spscommerce/{integrationInstance}/acknowledgments/{acknowledgment}/xml` — Download Acknowledgment XML
- `GET /api/spscommerce/{integrationInstance}/asn` — List ASN
- `POST /api/spscommerce/{integrationInstance}/asn` — Send ASN
- `GET /api/spscommerce/{integrationInstance}/asn/metrics` — Get Ship Notice Statistics
- `GET /api/spscommerce/{integrationInstance}/asn/{advanceShipNotice}` — Get ASN
- `GET /api/spscommerce/{integrationInstance}/asn/{advanceShipNotice}/xml` — Download ASN XML
- `GET /api/spscommerce/{integrationInstance}/documents` — List EDI Documents
- `POST /api/spscommerce/{integrationInstance}/documents/{document}/resend` — Resend EDI Document
- `GET /api/spscommerce/{integrationInstance}/documents/{document}/xml` — Download EDI Document XML
- `GET /api/spscommerce/{integrationInstance}/item-mappings` — List Item Mappings
- `POST /api/spscommerce/{integrationInstance}/item-mappings` — Create Item Mapping
- `GET /api/spscommerce/{integrationInstance}/item-mappings/unmatched` — List Unmatched Items
- `DELETE /api/spscommerce/{integrationInstance}/item-mappings/{mapping}` — Delete Item Mapping
- `DELETE /api/spscommerce/{integrationInstance}/purchase-orders` — Delete Purchase Orders
- `GET /api/spscommerce/{integrationInstance}/purchase-orders` — List Purchase Orders
- `POST /api/spscommerce/{integrationInstance}/purchase-orders/acknowledge` — Send Acknowledgment (855)
- `POST /api/spscommerce/{integrationInstance}/purchase-orders/archive` — Archive Purchase Orders
- `GET /api/spscommerce/{integrationInstance}/purchase-orders/export` — Export Purchase Orders
- `GET /api/spscommerce/{integrationInstance}/purchase-orders/metrics` — Get Purchase Order Statistics
- `POST /api/spscommerce/{integrationInstance}/purchase-orders/poll` — Poll for New Purchase Orders
- `POST /api/spscommerce/{integrationInstance}/purchase-orders/unarchive` — Unarchive Purchase Orders
- `GET /api/spscommerce/{integrationInstance}/purchase-orders/{purchaseOrder}` — Get Purchase Order
- `POST /api/spscommerce/{integrationInstance}/purchase-orders/{purchaseOrder}/retry` — Retry Purchase Order Conversion
- `GET /api/spscommerce/{integrationInstance}/purchase-orders/{purchaseOrder}/xml` — Download Raw XML

_…plus 9 more (see the API reference)._

## Changed

### Fulfillment Orders
- `GET /api/fulfillment-orders/export` — Export Fulfillment Orders
  - removed response code(s): `200`

### Inventory Intelligence
- `POST /api/inventory-forecasting/build` — Build Forecast
  - new response code(s): `202`
- `GET /api/inventory-forecasting/configurations` — List Configurations
  - new parameter(s): `created_by`, `forecast_type`, `search`, `supplier_id`
- `DELETE /api/inventory-forecasting/configurations/{configuration}` — Delete Configuration
  - new parameter(s): `force`

_Spec version 1.0.0 → 1.0.0._
