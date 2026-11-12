---
title: API changes — 2026-11-12
description: This release includes 30 additions, 2 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-11-12
---

This release includes 30 additions, 2 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Build to Order
- `POST /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/build-to-order/raise` — Raise a Manufacturing Order for a Sales Order Line

### Configurable Products
- `GET /api/configurable-products` — List Configurable Products
- `POST /api/configurable-products/bulk-create` — Bulk Create Products from Configurable Products
- `POST /api/configurable-products/bulk-relink-open-lines` — Bulk Re-link Open Lines to Mapped Products
- `POST /api/configurable-products/bulk-use-base-product` — Bulk Use Base Product for Configurable Products
- `GET /api/configurable-products/lines/{salesOrderLineId}/move` — Check Line Move to Configured Product
- `POST /api/configurable-products/lines/{salesOrderLineId}/move` — Move Line to Configured Product
- `POST /api/configurable-products/mapping-check` — Check Listing Mappings for Configured Products
- `GET /api/configurable-products/mismapped-listings` — List Listings Mapped to Configured Products
- `POST /api/configurable-products/mismapped-listings/{listingId}/remap-to-base` — Re-map Listing to Base Product
- `GET /api/configurable-products/{id}` — Get Configurable Product
- `POST /api/configurable-products/{id}/create-product` — Create Product from Configurable Product
- `POST /api/configurable-products/{id}/map` — Map Configurable Product to Product
- `DELETE /api/configurable-products/{id}/mapping` — Delete Configurable Product Mapping
- `POST /api/configurable-products/{id}/relink-open-lines` — Re-link Open Lines to Mapped Product
- `POST /api/configurable-products/{id}/use-base-product` — Use Base Product for Configurable Product

### Integration Instances
- `GET /api/integration-instances/{integration_instance}/deletion-impact` — Get Integration Instance Deletion Impact

### Make to Order
- `GET /api/manufacturing/make-to-order` — List Make to Order Lines
- `POST /api/manufacturing/make-to-order/dismiss` — Dismiss Make to Order Lines
- `POST /api/manufacturing/make-to-order/exclude-products` — Exclude Products from Make to Order
- `GET /api/manufacturing/make-to-order/filter-options` — List Make to Order Filter Options
- `POST /api/manufacturing/make-to-order/make` — Make Sales Order Lines
- `POST /api/manufacturing/make-to-order/restore` — Restore Make to Order Lines
- `GET /api/manufacturing/make-to-order/summary` — Get Make to Order Summary

### Manufacturing Orders
- `POST /api/manufacturing/manufacturing-orders/{manufacturingOrder}/apply-line-options` — Apply Line Options to Manufacturing Order
- `POST /api/manufacturing/manufacturing-orders/{manufacturingOrder}/dismiss-line-options-change` — Dismiss Line Options Change on Manufacturing Order

### Purchase Invoices
- `POST /api/purchase-invoices/{purchaseInvoice}/match-override` — Override Purchase Invoice 3-Way Match for Payment

### Reporting
- `GET /api/reports/line-option-values` — Get Line Option Values Report

### Sales Order Lines
- `PUT /api/sales-order-lines/{salesOrderLine}/options` — Replace Sales Order Line Options

### Sales Orders
- `POST /api/sales-orders/{salesOrder}/resync-totals` — Resync Sales Order Totals

## Changed

### Integration Instances
- `DELETE /api/integration-instances/{integration_instance}` — Delete Integration Instance
  - new response code(s): `422`

### TikTok Shop
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}/map` — Map Product SKU
  - new response code(s): `201`

_Spec version 1.0.0 → 1.0.0._
