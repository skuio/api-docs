---
title: API changes — 2026-06-21
description: This release includes 70 additions, 4 changes, 71 removals. 71 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-06-21
---

This release includes 70 additions, 4 changes, 71 removals. 71 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Carriers
- **Removed** `GET /api/temu/{integration_instance}/carriers` — List Carriers
- **Removed** `GET /api/temu/{integration_instance}/carriers/by-shipping-method/{shipping_method_id}` — Get Carrier by Shipping Method
- **Removed** `PUT /api/temu/{integration_instance}/carriers/{temu_carrier_id}/map` — Update Carrier Mapping
- **Removed** `GET /api/temu/{integration_instance}/download-carriers` — Download Carriers from Temu

#### Field Mappings
- **Removed** `GET /api/temu/{integration_instance}/field-mappings` — Get Field Mappings
- **Removed** `PUT /api/temu/{integration_instance}/field-mappings` — Update Field Mappings
- **Removed** `GET /api/temu/{integration_instance}/field-mappings/available-fields` — Get Available Fields

#### Fulfillment
- **Removed** `POST /api/temu/{integration_instance}/confirm-shipped-package` — Confirm Shipped Package
- **Removed** `POST /api/temu/{integration_instance}/fulfill` — Submit Fulfillment
- **Removed** `GET /api/temu/{integration_instance}/fulfillments` — List Fulfillments
- **Removed** `GET /api/temu/{integration_instance}/fulfillments/{fulfillment}` — Get Fulfillment
- **Removed** `POST /api/temu/{integration_instance}/shipment-status` — Get Shipment Status
- **Removed** `POST /api/temu/{integration_instance}/unshipped-packages` — Get Unshipped Packages
- **Removed** `POST /api/temu/{integration_instance}/update-shipping-type` — Update Shipping Type

#### Integration Instance
- **Removed** `GET /api/temu` — List Integration Instances
- **Removed** `POST /api/temu` — Create Integration Instance
- **Removed** `DELETE /api/temu/{integration_instance}` — Delete Integration Instance
- **Removed** `GET /api/temu/{integration_instance}` — Get Integration Instance
- **Removed** `PUT /api/temu/{integration_instance}` — Update Integration Instance
- **Removed** `POST /api/temu/{integration_instance}/reconnect` — Reconnect Integration
- **Removed** `GET /api/temu/{integration_instance}/test-connection` — Test Connection

#### Orders
- **Removed** `DELETE /api/temu/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order
- **Removed** `GET /api/temu/{integration_instance}/orders` — List Orders
- **Removed** `POST /api/temu/{integration_instance}/orders/create-products-from-items` — Create Products from Order Items
- **Removed** `POST /api/temu/{integration_instance}/orders/create-sku-orders` — Create SKU Orders
- **Removed** `GET /api/temu/{integration_instance}/orders/export` — Export Orders
- **Removed** `POST /api/temu/{integration_instance}/orders/refresh` — Refresh Orders
- **Removed** `POST /api/temu/{integration_instance}/orders/refresh-order` — Refresh Single Order
- **Removed** `GET /api/temu/{integration_instance}/orders/{order}` — Get Order

#### Pre-Start-Date Orders
- **Removed** `GET /api/temu/{integration_instance}/pre-start-date-orders` — Query Pre-Start-Date Orders
- **Removed** `POST /api/temu/{integration_instance}/pre-start-date-orders/import` — Import Pre-Start-Date Orders
- **Removed** `GET /api/temu/{integration_instance}/pre-start-date-orders/search` — Search Pre-Start-Date Order

#### Products
- **Removed** `GET /api/temu/{integration_instance}/products` — List Products
- **Removed** `PUT /api/temu/{integration_instance}/products/archive` — Archive Products
- **Removed** `POST /api/temu/{integration_instance}/products/archiveable` — Get Archiveable Products
- **Removed** `POST /api/temu/{integration_instance}/products/create-sku-products` — Create SKU Products
- **Removed** `PUT /api/temu/{integration_instance}/products/delete` — Delete Products
- **Removed** `PUT /api/temu/{integration_instance}/products/deleteable` — Get Deleteable Products
- **Removed** `GET /api/temu/{integration_instance}/products/export` — Export Products
- **Removed** `GET /api/temu/{integration_instance}/products/export-download` — Download Product Mappings CSV
- **Removed** `POST /api/temu/{integration_instance}/products/import-mappings` — Import Product Mappings
- **Removed** `GET /api/temu/{integration_instance}/products/latest-sync-info` — Get Latest Product Sync Info
- **Removed** `PUT /api/temu/{integration_instance}/products/map` — Map Products
- **Removed** `POST /api/temu/{integration_instance}/products/refresh` — Refresh Products
- **Removed** `POST /api/temu/{integration_instance}/products/refresh-tracked` — Refresh Products (Tracked)
- **Removed** `POST /api/temu/{integration_instance}/products/sync-inventory` — Sync Inventory
- **Removed** `PUT /api/temu/{integration_instance}/products/unarchive` — Unarchive Products
- **Removed** `GET /api/temu/{integration_instance}/products/{product}` — Get Product
- **Removed** `POST /api/temu/{integration_instance}/products/{product}/create-sku-product` — Create SKU Product From Temu Product
- **Removed** `DELETE /api/temu/{integration_instance}/products/{product}/map` — Unmap Single Product
- **Removed** `POST /api/temu/{integration_instance}/products/{product}/map` — Map Single Product
- **Removed** `POST /api/temu/{integration_instance}/products/{product}/smart-match` — Smart Match Product

#### Returns & Refunds
- **Removed** `GET /api/temu/{integration_instance}/parent-after-sales` — List Parent After-Sales
- **Removed** `POST /api/temu/{integration_instance}/parent-after-sales/refresh` — Refresh Parent After-Sales

#### Sales Channels
- **Removed** `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/create-warehouse-transfer` — Create Warehouse Transfer

#### Warehouses
- **Removed** `GET /api/temu/{integration_instance}/download-locations` — Download Locations from Temu
- **Removed** `GET /api/temu/{integration_instance}/warehouses` — List Warehouses
- **Removed** `GET /api/temu/{integration_instance}/warehouses/by-warehouse/{warehouse_id}` — Get Warehouse by Local Warehouse
- **Removed** `PUT /api/temu/{integration_instance}/warehouses/{temu_warehouse}/map` — Update Warehouse Mapping

#### Webhooks
- **Removed** `GET /api/temu/webhook-events/{event_id}` — Show Event
- **Removed** `POST /api/temu/webhook-events/{event_id}/process` — Process Event (single)
- **Removed** `POST /api/temu/webhook-events/{event_id}/reprocess` — Reprocess Event (single)
- **Removed** `GET /api/temu/{integration_instance}/webhook-events` — List Webhook Events
- **Removed** `DELETE /api/temu/{integration_instance}/webhook-events/delete-all` — Delete All Events for Instance
- **Removed** `POST /api/temu/{integration_instance}/webhook-events/process` — Process Pending Events
- **Removed** `POST /api/temu/{integration_instance}/webhook-events/retry-failed` — Retry Failed Events
- **Removed** `GET /api/temu/{integration_instance}/webhook-events/stats` — Webhook Event Stats
- **Removed** `GET /api/temu/{integration_instance}/webhooks/configurations` — List Webhook Configurations
- **Removed** `POST /api/temu/{integration_instance}/webhooks/configurations/enable-all` — Enable All Webhooks
- **Removed** `POST /api/temu/{integration_instance}/webhooks/configurations/{event_code}/disable` — Disable Webhook Subscription
- **Removed** `POST /api/temu/{integration_instance}/webhooks/configurations/{event_code}/enable` — Enable Webhook Subscription

## Added

### Sales Channels
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/allocations` — List Plan Allocations
- `GET //{domain}/api/temu/{integrationInstance}/orders` — List Orders
- `POST //{domain}/api/temu/{integrationInstance}/orders/bulk-archive` — Bulk Archive Orders
- `POST //{domain}/api/temu/{integrationInstance}/orders/bulk-unarchive` — Bulk Unarchive Orders
- `POST //{domain}/api/temu/{integrationInstance}/orders/create-sku-orders` — Create SKU Orders (Bulk)
- `GET //{domain}/api/temu/{integrationInstance}/orders/latest-sync-info` — Get Latest Sync Info
- `POST //{domain}/api/temu/{integrationInstance}/orders/refresh-tracked` — Refresh Orders (Tracked)
- `DELETE //{domain}/api/temu/{integrationInstance}/orders/{order}` — Delete Order
- `GET //{domain}/api/temu/{integrationInstance}/orders/{order}` — Show Order
- `GET //{domain}/api/temu/{integrationInstance}/orders/{order}/activity-log` — Order Activity Log
- `POST //{domain}/api/temu/{integrationInstance}/orders/{order}/archive` — Archive Order
- `GET //{domain}/api/temu/{integrationInstance}/orders/{order}/raw` — Get Raw Order (from Temu API)
- `DELETE //{domain}/api/temu/{integrationInstance}/orders/{order}/sku-order` — Delete Linked SKU Order
- `POST //{domain}/api/temu/{integrationInstance}/orders/{order}/unarchive` — Unarchive Order
- `POST //{domain}/api/temu/{integration_instance}/orders/create-products-from-items` — Create Products From Order Items
- `POST /api/temu/sandbox/initialize` — Sandbox Initialize
- `GET /api/temu/webhook-events/{eventId}` — Get Event Details
- `POST /api/temu/webhook-events/{eventId}/process` — Process Event By Id
- `POST /api/temu/webhook-events/{eventId}/reprocess` — Reprocess Event By Id
- `GET /api/temu/{integrationInstance}/carriers` — List Carriers
- `GET /api/temu/{integrationInstance}/carriers/by-shipping-method/{shipping_method_id}` — Check Mapping by Shipping Method
- `PUT /api/temu/{integrationInstance}/carriers/{temu_carrier_id}/map` — Map Carrier to Shipping Method
- `POST /api/temu/{integrationInstance}/confirm-shipped-package` — Confirm Shipped Package
- `GET /api/temu/{integrationInstance}/download-carriers` — Download Carriers (Sync from Temu)
- `GET /api/temu/{integrationInstance}/download-locations` — Download Warehouses (Sync from Temu)
- `GET /api/temu/{integrationInstance}/field-mappings` — Get Field Mappings
- `PUT /api/temu/{integrationInstance}/field-mappings` — Update Field Mappings
- `GET /api/temu/{integrationInstance}/field-mappings/available-fields` — Get Available Fields
- `POST /api/temu/{integrationInstance}/fulfill` — Submit Fulfillment to Temu
- `GET /api/temu/{integrationInstance}/fulfillments` — List Fulfillments
- `GET /api/temu/{integrationInstance}/fulfillments/{fulfillment}` — Show Fulfillment
- `GET /api/temu/{integrationInstance}/inventory` — List Inventory (Comparison)
- `GET /api/temu/{integrationInstance}/inventory/locations` — List Locations
- `POST /api/temu/{integrationInstance}/inventory/recache` — Recache Inventory (Recompute SKU.io Quantities)
- `GET /api/temu/{integrationInstance}/inventory/recache-progress/{trackedJobLogId}` — Recache Progress
- `GET /api/temu/{integrationInstance}/inventory/summary` — Inventory Summary
- `POST /api/temu/{integrationInstance}/inventory/sync` — Sync Inventory to Temu (Push)
- `GET /api/temu/{integrationInstance}/inventory/sync-progress/{trackedJobLogId}` — Sync Progress
- `GET /api/temu/{integrationInstance}/parent-after-sales` — List Parent After-Sales
- `POST /api/temu/{integrationInstance}/parent-after-sales/refresh` — Refresh Parent After-Sales
- `GET /api/temu/{integrationInstance}/pre-start-date-orders` — Query Pre-Start-Date Orders
- `POST /api/temu/{integrationInstance}/pre-start-date-orders/import` — Import Pre-Start-Date Orders
- `GET /api/temu/{integrationInstance}/pre-start-date-orders/search` — Search Pre-Start-Date Order
- `GET /api/temu/{integrationInstance}/products` — List Products
- `GET /api/temu/{integrationInstance}/products/latest-sync-info` — Latest Sync Info
- `POST /api/temu/{integrationInstance}/products/refresh-tracked` — Refresh Products (Tracked)
- `GET /api/temu/{integrationInstance}/products/{product}` — Show Product
- `POST /api/temu/{integrationInstance}/products/{product}/create-sku-product` — Create SKU Product
- `DELETE /api/temu/{integrationInstance}/products/{product}/map` — Unmap Product
- `POST /api/temu/{integrationInstance}/products/{product}/map` — Map Product to SKU Product
- `GET /api/temu/{integrationInstance}/products/{product}/orders` — Get Orders for Product
- `GET /api/temu/{integrationInstance}/products/{product}/raw` — Get Raw Product
- `POST /api/temu/{integrationInstance}/products/{product}/smart-match` — Smart Match
- `POST /api/temu/{integrationInstance}/reconnect` — Reconnect Integration
- `POST /api/temu/{integrationInstance}/shipment-status` — Get Shipment Status
- `GET /api/temu/{integrationInstance}/test-connection` — Test Connection
- `POST /api/temu/{integrationInstance}/unshipped-packages` — Get Unshipped Packages
- `POST /api/temu/{integrationInstance}/update-shipping-type` — Update Shipping Type
- `GET /api/temu/{integrationInstance}/warehouses` — List Warehouses
- `GET /api/temu/{integrationInstance}/warehouses/by-warehouse/{warehouse_id}` — Check Mapping by Local Warehouse
- `PUT /api/temu/{integrationInstance}/warehouses/{temu_warehouse}/map` — Map Warehouse to Local Warehouse
- `GET /api/temu/{integrationInstance}/webhook-events` — List Webhook Events
- `DELETE /api/temu/{integrationInstance}/webhook-events/delete-all` — Delete All Events (per instance)
- `POST /api/temu/{integrationInstance}/webhook-events/process` — Process Pending Events
- `POST /api/temu/{integrationInstance}/webhook-events/retry-failed` — Retry Failed Events
- `GET /api/temu/{integrationInstance}/webhook-events/stats` — Get Processing Stats
- `GET /api/temu/{integrationInstance}/webhooks/configurations` — List Webhook Configurations
- `POST /api/temu/{integrationInstance}/webhooks/configurations/enable-all` — Enable All Webhook Subscriptions
- `POST /api/temu/{integrationInstance}/webhooks/configurations/{eventCode}/disable` — Disable Webhook Subscription
- `POST /api/temu/{integrationInstance}/webhooks/configurations/{eventCode}/enable` — Enable Webhook Subscription

## Changed

### Sales Channels
- `POST /api/temu/oauth/complete` — Complete OAuth
  - new response code(s): `201`, `500`
  - removed response code(s): `200`
- `POST /api/temu/oauth/initialize` — Initialize OAuth
  - new response code(s): `422`
- `DELETE /api/temu/webhook-events/bulk-delete` — Bulk Delete Events
  - new parameter(s): `Authorization`
- `POST /api/temu/webhook-events/bulk-reprocess` — Bulk Reprocess Events
  - new parameter(s): `Authorization`

_Spec version 1.0.0 → 1.0.0._
