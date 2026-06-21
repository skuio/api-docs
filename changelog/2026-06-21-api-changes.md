---
title: API changes — 2026-06-21
description: This release 69 added, 4 changed, 70 removed API endpoint(s).
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-06-21
---

This release 69 added, 4 changed, 70 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `DELETE //{domain}/api/temu/{integrationInstance}/orders/{order}` — Delete Order
- `DELETE //{domain}/api/temu/{integrationInstance}/orders/{order}/sku-order` — Delete Linked SKU Order
- `DELETE /api/temu/{integrationInstance}/products/{product}/map` — Unmap Product
- `DELETE /api/temu/{integrationInstance}/webhook-events/delete-all` — Delete All Events (per instance)
- `GET //{domain}/api/temu/{integrationInstance}/orders` — List Orders
- `GET //{domain}/api/temu/{integrationInstance}/orders/latest-sync-info` — Get Latest Sync Info
- `GET //{domain}/api/temu/{integrationInstance}/orders/{order}` — Show Order
- `GET //{domain}/api/temu/{integrationInstance}/orders/{order}/activity-log` — Order Activity Log
- `GET //{domain}/api/temu/{integrationInstance}/orders/{order}/raw` — Get Raw Order (from Temu API)
- `GET /api/temu/webhook-events/{eventId}` — Get Event Details
- `GET /api/temu/{integrationInstance}/carriers` — List Carriers
- `GET /api/temu/{integrationInstance}/carriers/by-shipping-method/{shipping_method_id}` — Check Mapping by Shipping Method
- `GET /api/temu/{integrationInstance}/download-carriers` — Download Carriers (Sync from Temu)
- `GET /api/temu/{integrationInstance}/download-locations` — Download Warehouses (Sync from Temu)
- `GET /api/temu/{integrationInstance}/field-mappings` — Get Field Mappings
- `GET /api/temu/{integrationInstance}/field-mappings/available-fields` — Get Available Fields
- `GET /api/temu/{integrationInstance}/fulfillments` — List Fulfillments
- `GET /api/temu/{integrationInstance}/fulfillments/{fulfillment}` — Show Fulfillment
- `GET /api/temu/{integrationInstance}/inventory` — List Inventory (Comparison)
- `GET /api/temu/{integrationInstance}/inventory/locations` — List Locations
- `GET /api/temu/{integrationInstance}/inventory/recache-progress/{trackedJobLogId}` — Recache Progress
- `GET /api/temu/{integrationInstance}/inventory/summary` — Inventory Summary
- `GET /api/temu/{integrationInstance}/inventory/sync-progress/{trackedJobLogId}` — Sync Progress
- `GET /api/temu/{integrationInstance}/parent-after-sales` — List Parent After-Sales
- `GET /api/temu/{integrationInstance}/pre-start-date-orders` — Query Pre-Start-Date Orders
- `GET /api/temu/{integrationInstance}/pre-start-date-orders/search` — Search Pre-Start-Date Order
- `GET /api/temu/{integrationInstance}/products` — List Products
- `GET /api/temu/{integrationInstance}/products/latest-sync-info` — Latest Sync Info
- `GET /api/temu/{integrationInstance}/products/{product}` — Show Product
- `GET /api/temu/{integrationInstance}/products/{product}/orders` — Get Orders for Product
- `GET /api/temu/{integrationInstance}/products/{product}/raw` — Get Raw Product
- `GET /api/temu/{integrationInstance}/test-connection` — Test Connection
- `GET /api/temu/{integrationInstance}/warehouses` — List Warehouses
- `GET /api/temu/{integrationInstance}/warehouses/by-warehouse/{warehouse_id}` — Check Mapping by Local Warehouse
- `GET /api/temu/{integrationInstance}/webhook-events` — List Webhook Events
- `GET /api/temu/{integrationInstance}/webhook-events/stats` — Get Processing Stats
- `GET /api/temu/{integrationInstance}/webhooks/configurations` — List Webhook Configurations
- `POST //{domain}/api/temu/{integrationInstance}/orders/bulk-archive` — Bulk Archive Orders
- `POST //{domain}/api/temu/{integrationInstance}/orders/bulk-unarchive` — Bulk Unarchive Orders
- `POST //{domain}/api/temu/{integrationInstance}/orders/create-sku-orders` — Create SKU Orders (Bulk)
- `POST //{domain}/api/temu/{integrationInstance}/orders/refresh-tracked` — Refresh Orders (Tracked)
- `POST //{domain}/api/temu/{integrationInstance}/orders/{order}/archive` — Archive Order
- `POST //{domain}/api/temu/{integrationInstance}/orders/{order}/unarchive` — Unarchive Order
- `POST //{domain}/api/temu/{integration_instance}/orders/create-products-from-items` — Create Products From Order Items
- `POST /api/temu/sandbox/initialize` — Sandbox Initialize
- `POST /api/temu/webhook-events/{eventId}/process` — Process Event By Id
- `POST /api/temu/webhook-events/{eventId}/reprocess` — Reprocess Event By Id
- `POST /api/temu/{integrationInstance}/confirm-shipped-package` — Confirm Shipped Package
- `POST /api/temu/{integrationInstance}/fulfill` — Submit Fulfillment to Temu
- `POST /api/temu/{integrationInstance}/inventory/recache` — Recache Inventory (Recompute SKU.io Quantities)
- `POST /api/temu/{integrationInstance}/inventory/sync` — Sync Inventory to Temu (Push)
- `POST /api/temu/{integrationInstance}/parent-after-sales/refresh` — Refresh Parent After-Sales
- `POST /api/temu/{integrationInstance}/pre-start-date-orders/import` — Import Pre-Start-Date Orders
- `POST /api/temu/{integrationInstance}/products/refresh-tracked` — Refresh Products (Tracked)
- `POST /api/temu/{integrationInstance}/products/{product}/create-sku-product` — Create SKU Product
- `POST /api/temu/{integrationInstance}/products/{product}/map` — Map Product to SKU Product
- `POST /api/temu/{integrationInstance}/products/{product}/smart-match` — Smart Match
- `POST /api/temu/{integrationInstance}/reconnect` — Reconnect Integration
- `POST /api/temu/{integrationInstance}/shipment-status` — Get Shipment Status
- `POST /api/temu/{integrationInstance}/unshipped-packages` — Get Unshipped Packages
- `POST /api/temu/{integrationInstance}/update-shipping-type` — Update Shipping Type
- `POST /api/temu/{integrationInstance}/webhook-events/process` — Process Pending Events
- `POST /api/temu/{integrationInstance}/webhook-events/retry-failed` — Retry Failed Events
- `POST /api/temu/{integrationInstance}/webhooks/configurations/enable-all` — Enable All Webhook Subscriptions
- `POST /api/temu/{integrationInstance}/webhooks/configurations/{eventCode}/disable` — Disable Webhook Subscription
- `POST /api/temu/{integrationInstance}/webhooks/configurations/{eventCode}/enable` — Enable Webhook Subscription
- `PUT /api/temu/{integrationInstance}/carriers/{temu_carrier_id}/map` — Map Carrier to Shipping Method
- `PUT /api/temu/{integrationInstance}/field-mappings` — Update Field Mappings
- `PUT /api/temu/{integrationInstance}/warehouses/{temu_warehouse}/map` — Map Warehouse to Local Warehouse

## Changed

- `DELETE /api/temu/webhook-events/bulk-delete` — Bulk Delete Events
  - new parameter(s): `Authorization`
- `POST /api/temu/oauth/complete` — Complete OAuth
  - new response code(s): `201`, `500`
  - removed response code(s): `200`
- `POST /api/temu/oauth/initialize` — Initialize OAuth
  - new response code(s): `422`
- `POST /api/temu/webhook-events/bulk-reprocess` — Bulk Reprocess Events
  - new parameter(s): `Authorization`

## Removed

- `DELETE /api/temu/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order **(breaking)**
- `DELETE /api/temu/{integration_instance}` — Delete Integration Instance **(breaking)**
- `DELETE /api/temu/{integration_instance}/products/{product}/map` — Unmap Single Product **(breaking)**
- `DELETE /api/temu/{integration_instance}/webhook-events/delete-all` — Delete All Events for Instance **(breaking)**
- `GET /api/temu` — List Integration Instances **(breaking)**
- `GET /api/temu/webhook-events/{event_id}` — Show Event **(breaking)**
- `GET /api/temu/{integration_instance}` — Get Integration Instance **(breaking)**
- `GET /api/temu/{integration_instance}/carriers` — List Carriers **(breaking)**
- `GET /api/temu/{integration_instance}/carriers/by-shipping-method/{shipping_method_id}` — Get Carrier by Shipping Method **(breaking)**
- `GET /api/temu/{integration_instance}/download-carriers` — Download Carriers from Temu **(breaking)**
- `GET /api/temu/{integration_instance}/download-locations` — Download Locations from Temu **(breaking)**
- `GET /api/temu/{integration_instance}/field-mappings` — Get Field Mappings **(breaking)**
- `GET /api/temu/{integration_instance}/field-mappings/available-fields` — Get Available Fields **(breaking)**
- `GET /api/temu/{integration_instance}/fulfillments` — List Fulfillments **(breaking)**
- `GET /api/temu/{integration_instance}/fulfillments/{fulfillment}` — Get Fulfillment **(breaking)**
- `GET /api/temu/{integration_instance}/orders` — List Orders **(breaking)**
- `GET /api/temu/{integration_instance}/orders/export` — Export Orders **(breaking)**
- `GET /api/temu/{integration_instance}/orders/{order}` — Get Order **(breaking)**
- `GET /api/temu/{integration_instance}/parent-after-sales` — List Parent After-Sales **(breaking)**
- `GET /api/temu/{integration_instance}/pre-start-date-orders` — Query Pre-Start-Date Orders **(breaking)**
- `GET /api/temu/{integration_instance}/pre-start-date-orders/search` — Search Pre-Start-Date Order **(breaking)**
- `GET /api/temu/{integration_instance}/products` — List Products **(breaking)**
- `GET /api/temu/{integration_instance}/products/export` — Export Products **(breaking)**
- `GET /api/temu/{integration_instance}/products/export-download` — Download Product Mappings CSV **(breaking)**
- `GET /api/temu/{integration_instance}/products/latest-sync-info` — Get Latest Product Sync Info **(breaking)**
- `GET /api/temu/{integration_instance}/products/{product}` — Get Product **(breaking)**
- `GET /api/temu/{integration_instance}/test-connection` — Test Connection **(breaking)**
- `GET /api/temu/{integration_instance}/warehouses` — List Warehouses **(breaking)**
- `GET /api/temu/{integration_instance}/warehouses/by-warehouse/{warehouse_id}` — Get Warehouse by Local Warehouse **(breaking)**
- `GET /api/temu/{integration_instance}/webhook-events` — List Webhook Events **(breaking)**
- `GET /api/temu/{integration_instance}/webhook-events/stats` — Webhook Event Stats **(breaking)**
- `GET /api/temu/{integration_instance}/webhooks/configurations` — List Webhook Configurations **(breaking)**
- `POST /api/temu` — Create Integration Instance **(breaking)**
- `POST /api/temu/webhook-events/{event_id}/process` — Process Event (single) **(breaking)**
- `POST /api/temu/webhook-events/{event_id}/reprocess` — Reprocess Event (single) **(breaking)**
- `POST /api/temu/{integration_instance}/confirm-shipped-package` — Confirm Shipped Package **(breaking)**
- `POST /api/temu/{integration_instance}/fulfill` — Submit Fulfillment **(breaking)**
- `POST /api/temu/{integration_instance}/orders/create-products-from-items` — Create Products from Order Items **(breaking)**
- `POST /api/temu/{integration_instance}/orders/create-sku-orders` — Create SKU Orders **(breaking)**
- `POST /api/temu/{integration_instance}/orders/refresh` — Refresh Orders **(breaking)**
- `POST /api/temu/{integration_instance}/orders/refresh-order` — Refresh Single Order **(breaking)**
- `POST /api/temu/{integration_instance}/parent-after-sales/refresh` — Refresh Parent After-Sales **(breaking)**
- `POST /api/temu/{integration_instance}/pre-start-date-orders/import` — Import Pre-Start-Date Orders **(breaking)**
- `POST /api/temu/{integration_instance}/products/archiveable` — Get Archiveable Products **(breaking)**
- `POST /api/temu/{integration_instance}/products/create-sku-products` — Create SKU Products **(breaking)**
- `POST /api/temu/{integration_instance}/products/import-mappings` — Import Product Mappings **(breaking)**
- `POST /api/temu/{integration_instance}/products/refresh` — Refresh Products **(breaking)**
- `POST /api/temu/{integration_instance}/products/refresh-tracked` — Refresh Products (Tracked) **(breaking)**
- `POST /api/temu/{integration_instance}/products/sync-inventory` — Sync Inventory **(breaking)**
- `POST /api/temu/{integration_instance}/products/{product}/create-sku-product` — Create SKU Product From Temu Product **(breaking)**
- `POST /api/temu/{integration_instance}/products/{product}/map` — Map Single Product **(breaking)**
- `POST /api/temu/{integration_instance}/products/{product}/smart-match` — Smart Match Product **(breaking)**
- `POST /api/temu/{integration_instance}/reconnect` — Reconnect Integration **(breaking)**
- `POST /api/temu/{integration_instance}/shipment-status` — Get Shipment Status **(breaking)**
- `POST /api/temu/{integration_instance}/unshipped-packages` — Get Unshipped Packages **(breaking)**
- `POST /api/temu/{integration_instance}/update-shipping-type` — Update Shipping Type **(breaking)**
- `POST /api/temu/{integration_instance}/webhook-events/process` — Process Pending Events **(breaking)**
- `POST /api/temu/{integration_instance}/webhook-events/retry-failed` — Retry Failed Events **(breaking)**
- `POST /api/temu/{integration_instance}/webhooks/configurations/enable-all` — Enable All Webhooks **(breaking)**
- `POST /api/temu/{integration_instance}/webhooks/configurations/{event_code}/disable` — Disable Webhook Subscription **(breaking)**
- `POST /api/temu/{integration_instance}/webhooks/configurations/{event_code}/enable` — Enable Webhook Subscription **(breaking)**
- `PUT /api/temu/{integration_instance}` — Update Integration Instance **(breaking)**
- `PUT /api/temu/{integration_instance}/carriers/{temu_carrier_id}/map` — Update Carrier Mapping **(breaking)**
- `PUT /api/temu/{integration_instance}/field-mappings` — Update Field Mappings **(breaking)**
- `PUT /api/temu/{integration_instance}/products/archive` — Archive Products **(breaking)**
- `PUT /api/temu/{integration_instance}/products/delete` — Delete Products **(breaking)**
- `PUT /api/temu/{integration_instance}/products/deleteable` — Get Deleteable Products **(breaking)**
- `PUT /api/temu/{integration_instance}/products/map` — Map Products **(breaking)**
- `PUT /api/temu/{integration_instance}/products/unarchive` — Unarchive Products **(breaking)**
- `PUT /api/temu/{integration_instance}/warehouses/{temu_warehouse}/map` — Update Warehouse Mapping **(breaking)**

_Spec version 1.0.0 → 1.0.0._
