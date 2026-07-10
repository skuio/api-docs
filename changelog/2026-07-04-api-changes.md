---
title: API changes — 2026-07-04
description: This release includes 18 additions.
authors: [product-team]
tags: [added]
date: 2026-07-04
---

This release includes 18 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Purchase Orders
- `GET /api/purchase-orders/awaiting-invoices` — List Awaiting-Invoice POs
- `POST /api/purchase-orders/{purchase_order}/request-invoice` — Request Invoice (Single PO)

### Sales Channels
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/fulfillment-portal/{token}/box-contents` — Submit Box Contents (3PL Portal)
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/fulfillment-portal/{token}/pallets` — Submit Pallets (3PL Portal)
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/bulk` — Bulk Map / Unmap / Create / Remap Product SKUs (Sync)
- `GET //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/bulk-progress/{tracked_job_log_id}` — Get Bulk Mapping Progress
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/bulk-tracked` — Bulk Map Product SKUs (Tracked)
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/create-products-from-mappings` — Create Products from Mappings (Bulk, Queued)
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/csv-mappings/apply` — Apply CSV Mappings
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/csv-mappings/validate` — Validate CSV Mappings
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/map-to-existing-skus` — Map to Existing SKUs (Bulk, Queued)
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/skus/{product_sku_id}/create-sku-product` — Create SKU.io Product from SKU
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/skus/{product_sku_id}/smart-match` — Smart Match SKU to SKU.io Products
- `GET //{domain}/api/tiktok-shop/products/skus` — List Product SKUs (Flattened Mapping List)

### Shipment Trackings
- `POST /api/shipment-trackings/register-parcels` — Register Parcel Trackings (Multi-Parcel)
- `POST /api/shipment-trackings/{tracking}/change-carrier` — Change Shipment Tracking Carrier
- `POST /api/shipment-trackings/{tracking}/retrack` — Re-track Shipment Tracking

### Suppliers
- `POST /api/suppliers/{supplier}/request-invoices` — Request Invoices (Consolidated)

_Spec version 1.0.0 → 1.0.0._
