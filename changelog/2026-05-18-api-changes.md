---
title: API changes — 2026-05-18
description: This release 55 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-05-18
---

This release 55 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/temu/{integration_instance}` — Delete Integration Instance
- `DELETE /api/temu/{integration_instance}/products/{product}/map` — Unmap Single Product
- `GET /api/temu` — List Integration Instances
- `GET /api/temu/config` — Get Config
- `GET /api/temu/oauth/status` — Get OAuth Status
- `GET /api/temu/{integration_instance}` — Get Integration Instance
- `GET /api/temu/{integration_instance}/carriers` — List Carriers
- `GET /api/temu/{integration_instance}/carriers/by-shipping-method/{shipping_method_id}` — Get Carrier by Shipping Method
- `GET /api/temu/{integration_instance}/download-carriers` — Download Carriers from Temu
- `GET /api/temu/{integration_instance}/download-locations` — Download Locations from Temu
- `GET /api/temu/{integration_instance}/field-mappings` — Get Field Mappings
- `GET /api/temu/{integration_instance}/field-mappings/available-fields` — Get Available Fields
- `GET /api/temu/{integration_instance}/fulfillments` — List Fulfillments
- `GET /api/temu/{integration_instance}/fulfillments/{fulfillment}` — Get Fulfillment
- `GET /api/temu/{integration_instance}/orders` — List Orders
- `GET /api/temu/{integration_instance}/orders/export` — Export Orders
- `GET /api/temu/{integration_instance}/orders/{order}` — Get Order
- `GET /api/temu/{integration_instance}/products` — List Products
- `GET /api/temu/{integration_instance}/products/export` — Export Products
- `GET /api/temu/{integration_instance}/products/export-download` — Download Product Mappings CSV
- `GET /api/temu/{integration_instance}/products/latest-sync-info` — Get Latest Product Sync Info
- `GET /api/temu/{integration_instance}/products/{product}` — Get Product
- `GET /api/temu/{integration_instance}/test-connection` — Test Connection
- `GET /api/temu/{integration_instance}/warehouses` — List Warehouses
- `GET /api/temu/{integration_instance}/warehouses/by-warehouse/{warehouse_id}` — Get Warehouse by Local Warehouse
- `POST /api/temu` — Create Integration Instance
- `POST /api/temu/oauth/complete` — Complete OAuth
- `POST /api/temu/oauth/initialize` — Initialize OAuth
- `POST /api/temu/{integration_instance}/confirm-shipped-package` — Confirm Shipped Package
- `POST /api/temu/{integration_instance}/fulfill` — Submit Fulfillment
- `POST /api/temu/{integration_instance}/orders/create-products-from-items` — Create Products from Order Items
- `POST /api/temu/{integration_instance}/orders/create-sku-orders` — Create SKU Orders
- `POST /api/temu/{integration_instance}/orders/refresh` — Refresh Orders
- `POST /api/temu/{integration_instance}/orders/refresh-order` — Refresh Single Order
- `POST /api/temu/{integration_instance}/products/archiveable` — Get Archiveable Products
- `POST /api/temu/{integration_instance}/products/create-sku-products` — Create SKU Products
- `POST /api/temu/{integration_instance}/products/import-mappings` — Import Product Mappings
- `POST /api/temu/{integration_instance}/products/refresh` — Refresh Products
- `POST /api/temu/{integration_instance}/products/sync-inventory` — Sync Inventory
- `POST /api/temu/{integration_instance}/products/{product}/create-sku-product` — Create SKU Product From Temu Product
- `POST /api/temu/{integration_instance}/products/{product}/map` — Map Single Product
- `POST /api/temu/{integration_instance}/products/{product}/smart-match` — Smart Match Product
- `POST /api/temu/{integration_instance}/reconnect` — Reconnect Integration
- `POST /api/temu/{integration_instance}/shipment-status` — Get Shipment Status
- `POST /api/temu/{integration_instance}/unshipped-packages` — Get Unshipped Packages
- `POST /api/temu/{integration_instance}/update-shipping-type` — Update Shipping Type
- `PUT /api/temu/{integration_instance}` — Update Integration Instance
- `PUT /api/temu/{integration_instance}/carriers/{temu_carrier_id}/map` — Update Carrier Mapping
- `PUT /api/temu/{integration_instance}/field-mappings` — Update Field Mappings
- `PUT /api/temu/{integration_instance}/products/archive` — Archive Products
- `PUT /api/temu/{integration_instance}/products/delete` — Delete Products
- `PUT /api/temu/{integration_instance}/products/deleteable` — Get Deleteable Products
- `PUT /api/temu/{integration_instance}/products/map` — Map Products
- `PUT /api/temu/{integration_instance}/products/unarchive` — Unarchive Products
- `PUT /api/temu/{integration_instance}/warehouses/{temu_warehouse}/map` — Update Warehouse Mapping

_Spec version 1.0.0 → 1.0.0._
