---
title: API changes — 2026-07-09
description: This release 105 added, 1 removed API endpoint(s).
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-07-09
---

This release 105 added, 1 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `DELETE /api/magento1/instances/{integrationInstance}` — Delete Integration Instance
- `DELETE /api/magento1/instances/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order
- `DELETE /api/magento1/instances/{integrationInstance}/products/{product}/map` — Unmap Product
- `DELETE /api/shippit/instances/{integration_instance}` — Delete Integration Instance
- `DELETE /api/shippit/instances/{integration_instance}/warehouses/{mapping}` — Unmap Warehouse
- `DELETE /api/shippit/instances/{integration_instance}/webhooks/subscribe` — Unsubscribe Webhook
- `DELETE /api/square/instances/{squareIntegrationInstance}` — Delete instance
- `GET /api/magento/{integration_instance}/inventory-sources` — List Inventory Sources
- `GET /api/magento/{integration_instance}/product-attributes` — List Product Attributes
- `GET /api/magento1/instances` — List Integration Instances
- `GET /api/magento1/instances/{integrationInstance}` — Get Integration Instance
- `GET /api/magento1/instances/{integrationInstance}/inventory` — List Inventory Comparison
- `GET /api/magento1/instances/{integrationInstance}/inventory/summary` — Get Inventory Summary
- `GET /api/magento1/instances/{integrationInstance}/mappings` — Get Field Mappings
- `GET /api/magento1/instances/{integrationInstance}/orders/latest-sync-info` — Get Latest Sync Info
- `GET /api/magento1/instances/{integrationInstance}/products` — List Products by Instance
- `GET /api/magento1/instances/{integrationInstance}/products/bulk-progress/{trackedJobLogId}` — Get Bulk Operation Progress
- `GET /api/magento1/instances/{integrationInstance}/products/filter-options` — Get Product Filter Options
- `GET /api/magento1/instances/{integrationInstance}/products/latest-sync-info` — Get Latest Product Sync Info
- `GET /api/magento1/instances/{integrationInstance}/products/{product}` — Get Product
- `GET /api/magento1/instances/{integrationInstance}/products/{product}/raw` — Get Raw Product Data (Live)
- `GET /api/magento1/orders` — List Orders
- `GET /api/magento1/orders/filter-options` — Get Order Filter Options
- `GET /api/magento1/orders/{order}` — Get Order
- `GET /api/magento1/orders/{order}/raw` — Get Raw Order Data
- `GET /api/magento1/products` — List Products (Cross-Instance)
- `GET /api/shippit/instances/{integration_instance}` — Get Integration Instance
- `GET /api/shippit/instances/{integration_instance}/activity` — List Activity
- `GET /api/shippit/instances/{integration_instance}/couriers` — List Couriers
- `GET /api/shippit/instances/{integration_instance}/couriers/{courier}` — Get Courier
- `GET /api/shippit/instances/{integration_instance}/dashboard` — Get Dashboard Metrics
- `GET /api/shippit/instances/{integration_instance}/orders` — List Orders
- `GET /api/shippit/instances/{integration_instance}/orders/{order}` — Get Order
- `GET /api/shippit/instances/{integration_instance}/shipments` — List Shipments
- `GET /api/shippit/instances/{integration_instance}/shipments/{shipment}` — Get Shipment
- `GET /api/shippit/instances/{integration_instance}/warehouses` — List Warehouse Mappings
- `GET /api/shippit/instances/{integration_instance}/webhooks` — List Webhook Events
- `GET /api/shippit/instances/{integration_instance}/webhooks/{webhookEvent}` — Get Webhook Event
- `GET /api/square/catalog` — List catalog items
- `GET /api/square/catalog/latest-sync-info` — Get latest catalog sync info
- `GET /api/square/instances` — List instances
- `GET /api/square/instances/{squareIntegrationInstance}` — Get instance
- `GET /api/square/instances/{squareIntegrationInstance}/oauth/authorize-url` — Get OAuth authorize URL
- `GET /api/square/locations` — List locations
- `GET /api/square/orders` — List orders
- `GET /api/square/orders/latest-sync-info` — Get latest order sync info
- `GET /api/square/orders/{squareOrder}` — Get order
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/inventory` — List Inventory Comparison
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/inventory/fetch-live-progress/{tracked_job_log_id}` — Get Fetch Live Progress
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/inventory/recache-progress/{tracked_job_log_id}` — Get Recache Progress
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/inventory/summary` — Get Inventory Summary
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/inventory/sync-progress/{tracked_job_log_id}` — Get Sync Progress
- `GET /api/trackstar/integration-instances/{integration_instance}/inbound-shipments/{inbound_shipment}/raw` — Get Inbound Shipment Raw Data
- `GET /api/trackstar/integration-instances/{integration_instance}/returns/{return}/raw` — Get Return Raw Data
- `PATCH /api/shippit/instances/{integration_instance}/warehouses/{mapping}/toggle` — Toggle Warehouse Mapping
- `POST /api/magento/{integration_instance}/inventory-sources` — Download Inventory Sources
- `POST /api/magento1/instances` — Create Integration Instance
- `POST /api/magento1/instances/{integrationInstance}/inventory/fetch` — Fetch Inventory Levels (Tracked)
- `POST /api/magento1/instances/{integrationInstance}/inventory/push` — Push Inventory (Tracked)
- `POST /api/magento1/instances/{integrationInstance}/inventory/recache` — Recache Inventory (Tracked)
- `POST /api/magento1/instances/{integrationInstance}/orders/bulk-archive` — Bulk Archive Orders
- `POST /api/magento1/instances/{integrationInstance}/orders/bulk-delete-sku-orders` — Bulk Delete SKU Orders
- `POST /api/magento1/instances/{integrationInstance}/orders/bulk-unarchive` — Bulk Unarchive Orders
- `POST /api/magento1/instances/{integrationInstance}/orders/bulk-update-sku-orders` — Bulk Update SKU Orders
- `POST /api/magento1/instances/{integrationInstance}/orders/create-sku-orders` — Create SKU Orders
- `POST /api/magento1/instances/{integrationInstance}/orders/{order}/update-sku-order` — Update SKU Order
- `POST /api/magento1/instances/{integrationInstance}/products/bulk` — Bulk Product Operation (Sync)
- `POST /api/magento1/instances/{integrationInstance}/products/bulk-tracked` — Bulk Product Operation (Tracked)
- `POST /api/magento1/instances/{integrationInstance}/products/refresh-tracked` — Refresh Products (Tracked)
- `POST /api/magento1/instances/{integrationInstance}/products/{product}/create-sku-product` — Create SKU Product from Magento Product
- `POST /api/magento1/instances/{integrationInstance}/products/{product}/map` — Map Product
- `POST /api/magento1/instances/{integrationInstance}/products/{product}/smart-match` — Smart-Match Product
- `POST /api/magento1/instances/{integrationInstance}/sync-inventory` — Sync Inventory
- `POST /api/magento1/instances/{integrationInstance}/sync-orders` — Sync Orders
- `POST /api/magento1/instances/{integrationInstance}/sync-products` — Sync Products
- `POST /api/magento1/orders/{order}/archive` — Archive Order
- `POST /api/magento1/orders/{order}/refetch` — Refetch Order
- `POST /api/magento1/orders/{order}/submit-tracking` — Submit Tracking
- `POST /api/magento1/orders/{order}/unarchive` — Unarchive Order
- `POST /api/shippit/instances` — Create Integration Instance
- `POST /api/shippit/instances/{integration_instance}/couriers/sync` — Sync Couriers
- `POST /api/shippit/instances/{integration_instance}/couriers/{courier}/link` — Map Courier To Shipping Method
- `POST /api/shippit/instances/{integration_instance}/orders/sync` — Sync Orders
- `POST /api/shippit/instances/{integration_instance}/orders/{order}/book` — Book Order
- `POST /api/shippit/instances/{integration_instance}/shipments/sync` — Sync Shipments
- `POST /api/shippit/instances/{integration_instance}/warehouses/link` — Map Warehouse
- `POST /api/shippit/instances/{integration_instance}/webhooks/subscribe` — Subscribe Webhook
- `POST /api/shippit/test` — Test Connection
- `POST /api/square/catalog/sync` — Sync catalog
- `POST /api/square/instances` — Create instance
- `POST /api/square/instances/{squareIntegrationInstance}/sync` — Sync (locations + catalog + orders)
- `POST /api/square/instances/{squareIntegrationInstance}/test-connection` — Test connection
- `POST /api/square/locations/sync` — Sync locations
- `POST /api/square/orders/sync` — Sync orders
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/inventory/fetch-live` — Fetch Live Inventory
- `POST /api/trackstar/integration-instances/{integration_instance}/orders/{order}/sync-detail` — Sync Order Detail
- `POST /api/webhooks/square` — Receive webhook
- `PUT /api/magento/{integration_instance}/download-orders` — Download Orders
- `PUT /api/magento/{integration_instance}/download-products` — Download Products
- `PUT /api/magento1/instances/{integrationInstance}` — Update Integration Instance
- …plus 5 more added endpoint(s).

## Removed

- `GET /api/tiktok-shop/inventory` — List Inventory SKUs **(breaking)**

_Spec version 1.0.0 → 1.0.0._
