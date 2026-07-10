---
title: API changes — 2026-07-09
description: This release includes 125 additions, 1 change, 1 removal. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-07-09
---

This release includes 125 additions, 1 change, 1 removal. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### TikTok Shop
- **Removed** `GET /api/tiktok-shop/inventory` — List Inventory SKUs

## Added

### Magento
- `GET /api/magento/{integration_instance}/inventory-sources` — List Inventory Sources
- `POST /api/magento/{integration_instance}/inventory-sources` — Download Inventory Sources
- `GET /api/magento/{integration_instance}/product-attributes` — List Product Attributes

### Magento 1
- `GET /api/magento1/instances` — List Integration Instances
- `POST /api/magento1/instances` — Create Integration Instance
- `DELETE /api/magento1/instances/{integrationInstance}` — Delete Integration Instance
- `GET /api/magento1/instances/{integrationInstance}` — Get Integration Instance
- `GET /api/magento1/instances/{integrationInstance}/activity-log` — Get Activity Log
- `GET /api/magento1/instances/{integrationInstance}/inventory` — List Inventory Comparison
- `POST /api/magento1/instances/{integrationInstance}/inventory/fetch` — Fetch Inventory Levels (Tracked)
- `POST /api/magento1/instances/{integrationInstance}/inventory/push` — Push Inventory (Tracked)
- `POST /api/magento1/instances/{integrationInstance}/inventory/recache` — Recache Inventory (Tracked)
- `GET /api/magento1/instances/{integrationInstance}/inventory/summary` — Get Inventory Summary
- `GET /api/magento1/instances/{integrationInstance}/mappings` — Get Field Mappings
- `POST /api/magento1/instances/{integrationInstance}/orders/bulk-archive` — Bulk Archive Orders
- `POST /api/magento1/instances/{integrationInstance}/orders/bulk-delete-sku-orders` — Bulk Delete SKU Orders
- `POST /api/magento1/instances/{integrationInstance}/orders/bulk-unarchive` — Bulk Unarchive Orders
- `POST /api/magento1/instances/{integrationInstance}/orders/bulk-update-sku-orders` — Bulk Update SKU Orders
- `POST /api/magento1/instances/{integrationInstance}/orders/create-sku-orders` — Create SKU Orders
- `GET /api/magento1/instances/{integrationInstance}/orders/latest-sync-info` — Get Latest Sync Info
- `DELETE /api/magento1/instances/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order
- `POST /api/magento1/instances/{integrationInstance}/orders/{order}/update-sku-order` — Update SKU Order
- `GET /api/magento1/instances/{integrationInstance}/products` — List Products by Instance
- `POST /api/magento1/instances/{integrationInstance}/products/bulk` — Bulk Product Operation (Sync)
- `GET /api/magento1/instances/{integrationInstance}/products/bulk-progress/{trackedJobLogId}` — Get Bulk Operation Progress
- `POST /api/magento1/instances/{integrationInstance}/products/bulk-tracked` — Bulk Product Operation (Tracked)
- `GET /api/magento1/instances/{integrationInstance}/products/filter-options` — Get Product Filter Options
- `GET /api/magento1/instances/{integrationInstance}/products/latest-sync-info` — Get Latest Product Sync Info
- `POST /api/magento1/instances/{integrationInstance}/products/refresh-tracked` — Refresh Products (Tracked)
- `GET /api/magento1/instances/{integrationInstance}/products/{product}` — Get Product
- `POST /api/magento1/instances/{integrationInstance}/products/{product}/create-sku-product` — Create SKU Product from Magento Product
- `DELETE /api/magento1/instances/{integrationInstance}/products/{product}/map` — Unmap Product
- `POST /api/magento1/instances/{integrationInstance}/products/{product}/map` — Map Product
- `GET /api/magento1/instances/{integrationInstance}/products/{product}/raw` — Get Raw Product Data (Live)
- `POST /api/magento1/instances/{integrationInstance}/products/{product}/smart-match` — Smart-Match Product
- `POST /api/magento1/instances/{integrationInstance}/sync-inventory` — Sync Inventory
- `POST /api/magento1/instances/{integrationInstance}/sync-orders` — Sync Orders
- `POST /api/magento1/instances/{integrationInstance}/sync-products` — Sync Products
- `GET /api/magento1/orders` — List Orders
- `GET /api/magento1/orders/filter-options` — Get Order Filter Options
- `GET /api/magento1/orders/{order}` — Get Order
- `POST /api/magento1/orders/{order}/archive` — Archive Order
- `GET /api/magento1/orders/{order}/raw` — Get Raw Order Data
- `POST /api/magento1/orders/{order}/refetch` — Refetch Order
- `POST /api/magento1/orders/{order}/submit-tracking` — Submit Tracking
- `POST /api/magento1/orders/{order}/unarchive` — Unarchive Order
- `GET /api/magento1/products` — List Products (Cross-Instance)

### Products
- `GET /api/consignment/inventory` — List Consignment Inventory

### Purchase Orders
- `GET /api/consignment/settings` — Get Consignment Aging Settings
- `POST /api/consignment/settlements/{settlement}/share` — Share Consignment Settlement Report
- `GET /api/consignment/suppliers/{supplier}/statement` — Get Consignment Statement of Account
- `POST /api/purchase-orders/{purchaseOrder}/consignment/returns` — Return Unsold Consigned Stock
- `GET /api/purchase-orders/{purchaseOrder}/consignment/settlement-preview` — Get Consignment Settlement Preview
- `POST /api/purchase-orders/{purchaseOrder}/consignment/settlements` — Create Consignment Settlement

### Reporting
- `GET /api/reporting/brands/leaderboard` — Get Brand Leaderboard
- `GET /api/reporting/brands/overview` — Get Brand Overview
- `POST /api/reporting/brands/rebuild-snapshots` — Rebuild Brand Metric Snapshots
- `GET /api/reporting/brands/scorecard-settings` — Get Brand Scorecard Settings
- `GET /api/reporting/brands/{brand}/analytics` — Get Brand Analytics
- `GET /api/reporting/brands/{brand}/po-history` — Get Brand PO History
- `GET /api/reporting/brands/{brand}/products` — Get Brand Product Breakdown
- `GET /api/reporting/brands/{brand}/products/{product}` — Get Brand Product Drilldown
- `GET /api/reporting/brands/{brand}/scorecard` — Get Brand Scorecard
- `GET /api/reporting/brands/{brand}/scorecard-summary` — Get Brand Scorecard Summary

### Shippit
- `POST /api/shippit/instances` — Create Integration Instance
- `DELETE /api/shippit/instances/{integration_instance}` — Delete Integration Instance
- `GET /api/shippit/instances/{integration_instance}` — Get Integration Instance
- `GET /api/shippit/instances/{integration_instance}/activity` — List Activity
- `GET /api/shippit/instances/{integration_instance}/couriers` — List Couriers
- `POST /api/shippit/instances/{integration_instance}/couriers/sync` — Sync Couriers
- `GET /api/shippit/instances/{integration_instance}/couriers/{courier}` — Get Courier
- `POST /api/shippit/instances/{integration_instance}/couriers/{courier}/link` — Map Courier To Shipping Method
- `GET /api/shippit/instances/{integration_instance}/dashboard` — Get Dashboard Metrics
- `GET /api/shippit/instances/{integration_instance}/orders` — List Orders
- `GET /api/shippit/instances/{integration_instance}/orders/{order}` — Get Order
- `GET /api/shippit/instances/{integration_instance}/shipments` — List Shipments
- `GET /api/shippit/instances/{integration_instance}/shipments/{shipment}` — Get Shipment
- `GET /api/shippit/instances/{integration_instance}/warehouses` — List Warehouse Mappings
- `DELETE /api/shippit/instances/{integration_instance}/warehouses/{mapping}` — Unmap Warehouse
- `PATCH /api/shippit/instances/{integration_instance}/warehouses/{mapping}/toggle` — Toggle Warehouse Mapping
- `GET /api/shippit/instances/{integration_instance}/webhooks` — List Webhook Events
- `DELETE /api/shippit/instances/{integration_instance}/webhooks/subscribe` — Unsubscribe Webhook
- `GET /api/shippit/instances/{integration_instance}/webhooks/{webhookEvent}` — Get Webhook Event

### Square
- `GET /api/square/catalog` — List catalog items
- `GET /api/square/catalog/latest-sync-info` — Get latest catalog sync info
- `GET /api/square/instances` — List instances
- `DELETE /api/square/instances/{squareIntegrationInstance}` — Delete instance
- `GET /api/square/instances/{squareIntegrationInstance}` — Get instance
- `GET /api/square/instances/{squareIntegrationInstance}/oauth/authorize-url` — Get OAuth authorize URL
- `GET /api/square/locations` — List locations
- `GET /api/square/orders` — List orders
- `GET /api/square/orders/latest-sync-info` — Get latest order sync info
- `GET /api/square/orders/{squareOrder}` — Get order

### TikTok Shop
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/inventory` — List Inventory Comparison
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/inventory/fetch-live-progress/{tracked_job_log_id}` — Get Fetch Live Progress
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/inventory/recache-progress/{tracked_job_log_id}` — Get Recache Progress
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/inventory/summary` — Get Inventory Summary
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/inventory/sync-progress/{tracked_job_log_id}` — Get Sync Progress

### Trackstar
- `GET /api/trackstar/integration-instances/{integration_instance}/inbound-shipments/{inbound_shipment}/raw` — Get Inbound Shipment Raw Data
- `GET /api/trackstar/integration-instances/{integration_instance}/returns/{return}/raw` — Get Return Raw Data

_…plus 25 more (see the API reference)._

## Changed

### Trackstar
- `GET /api/trackstar/integration-instances/{integration_instance}/shipping-methods` — List Shipping Methods
  - new parameter(s): `page`, `per_page`

_Spec version 1.0.0 → 1.0.0._
