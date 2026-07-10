---
title: API changes — 2026-07-08
description: This release includes 20 additions, 21 removals. 21 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-07-08
---

This release includes 20 additions, 21 removals. 21 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Amazon
- **Removed** `GET /api/amazon/{integrationInstance}/fba-inbound/3pl-metrics` — 3PL / Supplier Turnaround Metrics (Tenant-Level)

#### Export
- **Removed** `GET /api/export/assemblies` — Export Assemblies
- **Removed** `GET /api/export/inventory-assemblies` — Export Inventory Assemblies

#### Initial Inventory
- **Removed** `GET /api/initial-inventory` — List Initial Inventory
- **Removed** `POST /api/initial-inventory` — Create Initial Inventory
- **Removed** `DELETE /api/initial-inventory/{id}` — Delete Initial Inventory
- **Removed** `GET /api/initial-inventory/{id}` — Get Initial Inventory
- **Removed** `PUT /api/initial-inventory/{id}` — Update Initial Inventory

#### Integration Instances
- **Removed** `PUT /api/integration-instances/{integration_instance}/magento/download-orders` — Download Magento Orders
- **Removed** `PUT /api/integration-instances/{integration_instance}/magento/download-products` — Download Magento Products
- **Removed** `GET /api/integration-instances/{integration_instance}/magento/download-stores` — Download Magento Stores
- **Removed** `DELETE /api/integration-instances/{integration_instance}/magento/store/mapping` — Delete Magento Payment Method Mapping
- **Removed** `GET /api/integration-instances/{integration_instance}/magento/store/mapping` — Get Magento Store Mappings
- **Removed** `POST /api/integration-instances/{integration_instance}/magento/store/mapping` — Map Magento Stores
- **Removed** `GET /api/integration-instances/{integration_instance}/magento/stores` — Get Magento Stores

#### Magento
- **Removed** `PUT /api/magento/{integration_instance}/download-orders` — Download Orders
- **Removed** `PUT /api/magento/{integration_instance}/download-products` — Download Products
- **Removed** `GET /api/magento/{integration_instance}/inventory-sources` — List Inventory Sources
- **Removed** `POST /api/magento/{integration_instance}/inventory-sources` — Download Inventory Sources
- **Removed** `GET /api/magento/{integration_instance}/product-attributes` — List Product Attributes

#### Trackstar
- **Removed** `POST /api/trackstar/integration-instances/{integration_instance}/orders/{order}/sync-detail` — Sync Order Detail

## Added

### Feature Flags
- `GET /api/features` — Get Feature Flags

### TikTok Shop
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/inventory/recache` — Recache Inventory
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/inventory/sync` — Sync Inventory to TikTok Shop

### Trackstar
- `GET /api/trackstar/integration-instances/{integration_instance}/connection` — Get Connection Info
- `POST /api/trackstar/integration-instances/{integration_instance}/connection/refresh` — Refresh Connection
- `GET /api/trackstar/integration-instances/{integration_instance}/order-shipments` — List Order Shipments
- `GET /api/trackstar/integration-instances/{integration_instance}/order-shipments/{order_shipment}` — Get Order Shipment
- `POST /api/trackstar/integration-instances/{integration_instance}/orders/refresh-order` — Download Order from Trackstar
- `POST /api/trackstar/integration-instances/{integration_instance}/orders/search` — Search Orders
- `GET /api/trackstar/integration-instances/{integration_instance}/orders/sync-info` — Get Orders Sync Info
- `GET /api/trackstar/integration-instances/{integration_instance}/orders/{order}/activity-log` — Order Activity Log
- `GET /api/trackstar/integration-instances/{integration_instance}/orders/{order}/raw` — Get Raw Order from Trackstar
- `GET /api/trackstar/integration-instances/{integration_instance}/products/sync-info` — Get Products Sync Info
- `GET /api/trackstar/integration-instances/{integration_instance}/products/{product}/activity-log` — Product Activity Log
- `GET /api/trackstar/integration-instances/{integration_instance}/products/{product}/raw` — Get Raw Product from Trackstar

### Walmart
- `GET /api/walmart/wfs/suppliers/{supplier}/3pl-metrics` — Get Supplier WFS Turnaround Metrics
- `GET /api/walmart/wfs/warehouses/{warehouse}/3pl-metrics` — Get Warehouse WFS Turnaround Metrics
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/3pl-metrics` — Get 3PL Turnaround Metrics
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/unit-mix.csv` — Portal — Download WFS Unit-Mix Spreadsheet (CSV, public)
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/fulfillment/prep-sheet.csv` — Download Prep & Pack Sheet (CSV)

_Spec version 1.0.0 → 1.0.0._
