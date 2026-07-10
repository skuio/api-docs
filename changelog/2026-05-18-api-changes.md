---
title: API changes — 2026-05-18
description: This release includes 55 additions, 3 changes, 19 removals. 19 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-05-18
---

This release includes 55 additions, 3 changes, 19 removals. 19 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Data Feeds
- **Removed** `DELETE //{domain}/api/data-feeds` — Bulk Delete Data Feeds
- **Removed** `GET //{domain}/api/data-feeds` — List Data Feeds
- **Removed** `POST //{domain}/api/data-feeds` — Create Data Feed
- **Removed** `GET //{domain}/api/data-feeds/1` — Show Data Feed
- **Removed** `PUT //{domain}/api/data-feeds/1/archive` — Archive Data Feed
- **Removed** `PUT //{domain}/api/data-feeds/1/unarchived` — Unarchive Data Feed
- **Removed** `DELETE //{domain}/api/data-feeds/2` — Delete Data Feed
- **Removed** `PUT //{domain}/api/data-feeds/2` — Update Data Feed
- **Removed** `PUT //{domain}/api/data-feeds/archive` — Bulk Archive Data Feeds
- **Removed** `POST //{domain}/api/data-feeds/deletable` — Check Deletable
- **Removed** `GET //{domain}/api/data-feeds/import-config/product_feed` — Get Import Config
- **Removed** `PUT //{domain}/api/data-feeds/unarchive` — Bulk Unarchive Data Feeds

#### Inventory Intelligence
- **Removed** `GET //{domain}/api/inventory-aging` — Get Inventory Aging Report
- **Removed** `GET //{domain}/api/inventory-aging/distribution` — Get Inventory Aging Distribution
- **Removed** `GET //{domain}/api/inventory-aging/export` — Export Inventory Aging to CSV
- **Removed** `GET //{domain}/api/inventory-aging/metrics` — Get Inventory Aging Metrics
- **Removed** `DELETE //{domain}/api/inventory-aging/notes/{product}` — Delete Product Note
- **Removed** `PUT //{domain}/api/inventory-aging/notes/{product}` — Update Product Note
- **Removed** `GET //{domain}/api/inventory-aging/sales-channels` — Get Sales Channels for Filter

## Added

### Carriers
- `GET /api/temu/{integration_instance}/carriers` — List Carriers
- `GET /api/temu/{integration_instance}/carriers/by-shipping-method/{shipping_method_id}` — Get Carrier by Shipping Method
- `PUT /api/temu/{integration_instance}/carriers/{temu_carrier_id}/map` — Update Carrier Mapping
- `GET /api/temu/{integration_instance}/download-carriers` — Download Carriers from Temu

### Field Mappings
- `GET /api/temu/{integration_instance}/field-mappings` — Get Field Mappings
- `PUT /api/temu/{integration_instance}/field-mappings` — Update Field Mappings
- `GET /api/temu/{integration_instance}/field-mappings/available-fields` — Get Available Fields

### Fulfillment
- `POST /api/temu/{integration_instance}/confirm-shipped-package` — Confirm Shipped Package
- `POST /api/temu/{integration_instance}/fulfill` — Submit Fulfillment
- `GET /api/temu/{integration_instance}/fulfillments` — List Fulfillments
- `GET /api/temu/{integration_instance}/fulfillments/{fulfillment}` — Get Fulfillment
- `POST /api/temu/{integration_instance}/shipment-status` — Get Shipment Status
- `POST /api/temu/{integration_instance}/unshipped-packages` — Get Unshipped Packages
- `POST /api/temu/{integration_instance}/update-shipping-type` — Update Shipping Type

### Integration Instance
- `GET /api/temu` — List Integration Instances
- `POST /api/temu` — Create Integration Instance
- `GET /api/temu/config` — Get Config
- `POST /api/temu/oauth/complete` — Complete OAuth
- `POST /api/temu/oauth/initialize` — Initialize OAuth
- `GET /api/temu/oauth/status` — Get OAuth Status
- `DELETE /api/temu/{integration_instance}` — Delete Integration Instance
- `GET /api/temu/{integration_instance}` — Get Integration Instance
- `PUT /api/temu/{integration_instance}` — Update Integration Instance
- `POST /api/temu/{integration_instance}/reconnect` — Reconnect Integration
- `GET /api/temu/{integration_instance}/test-connection` — Test Connection

### Orders
- `GET /api/temu/{integration_instance}/orders` — List Orders
- `POST /api/temu/{integration_instance}/orders/create-products-from-items` — Create Products from Order Items
- `POST /api/temu/{integration_instance}/orders/create-sku-orders` — Create SKU Orders
- `GET /api/temu/{integration_instance}/orders/export` — Export Orders
- `POST /api/temu/{integration_instance}/orders/refresh` — Refresh Orders
- `POST /api/temu/{integration_instance}/orders/refresh-order` — Refresh Single Order
- `GET /api/temu/{integration_instance}/orders/{order}` — Get Order

### Products
- `GET /api/temu/{integration_instance}/products` — List Products
- `PUT /api/temu/{integration_instance}/products/archive` — Archive Products
- `POST /api/temu/{integration_instance}/products/archiveable` — Get Archiveable Products
- `POST /api/temu/{integration_instance}/products/create-sku-products` — Create SKU Products
- `PUT /api/temu/{integration_instance}/products/delete` — Delete Products
- `PUT /api/temu/{integration_instance}/products/deleteable` — Get Deleteable Products
- `GET /api/temu/{integration_instance}/products/export` — Export Products
- `GET /api/temu/{integration_instance}/products/export-download` — Download Product Mappings CSV
- `POST /api/temu/{integration_instance}/products/import-mappings` — Import Product Mappings
- `GET /api/temu/{integration_instance}/products/latest-sync-info` — Get Latest Product Sync Info
- `PUT /api/temu/{integration_instance}/products/map` — Map Products
- `POST /api/temu/{integration_instance}/products/refresh` — Refresh Products
- `POST /api/temu/{integration_instance}/products/sync-inventory` — Sync Inventory
- `PUT /api/temu/{integration_instance}/products/unarchive` — Unarchive Products
- `GET /api/temu/{integration_instance}/products/{product}` — Get Product
- `POST /api/temu/{integration_instance}/products/{product}/create-sku-product` — Create SKU Product From Temu Product
- `DELETE /api/temu/{integration_instance}/products/{product}/map` — Unmap Single Product
- `POST /api/temu/{integration_instance}/products/{product}/map` — Map Single Product
- `POST /api/temu/{integration_instance}/products/{product}/smart-match` — Smart Match Product

### Warehouses
- `GET /api/temu/{integration_instance}/download-locations` — Download Locations from Temu
- `GET /api/temu/{integration_instance}/warehouses` — List Warehouses
- `GET /api/temu/{integration_instance}/warehouses/by-warehouse/{warehouse_id}` — Get Warehouse by Local Warehouse
- `PUT /api/temu/{integration_instance}/warehouses/{temu_warehouse}/map` — Update Warehouse Mapping

## Changed

### Products
- `POST //{domain}/api/products/{product}/images` — Add Product Image
  - new response code(s): `422`
- `POST /api/products/{product}/images` — Add Product Image
  - new response code(s): `422`

### Sales Order OCR
- `POST /api/sales-orders/ocr/{extraction_id}/create-order` — Create Sales Order from Extraction
  - new response code(s): `201`, `422`
  - removed response code(s): `200`

_Spec version 1.0.0 → 1.0.0._
