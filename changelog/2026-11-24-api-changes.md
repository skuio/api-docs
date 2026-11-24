---
title: API changes — 2026-11-24
description: This release includes 18 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-11-24
---

This release includes 18 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Adjustments & Transfers
- `POST /api/v2/location-transfers/preview` — Preview Location Transfer

### Amazon
- `GET /api/amazon/unified/reserve` — Get Reserve Reconciliation

### Guardrails
- `PUT /api/advertising/products/{product}/auto-resume` — Update Ad Health Product Auto Resume

### Inventory Expiry & Shelf-Life
- `GET /api/inventory-expiry/lots/{fifoLayer}/quarantine-impact` — Preview Quarantine Impact

### Organization
- `GET /api/v2/attributes/{attribute_id}/detail` — Get Attribute Detail
- `POST /api/v2/attributes/{attribute_id}/fill-missing` — Fill Missing Attribute Values
- `GET /api/v2/attributes/{attribute_id}/insights` — Get Attribute Insights
- `POST /api/v2/attributes/{attribute_id}/merge` — Merge Attribute Values
- `POST /api/v2/attributes/{attribute_id}/merge/preview` — Preview Attribute Value Merge
- `GET /api/v2/attributes/{attribute_id}/usage` — List Attribute Usage
- `GET /api/v2/attributes/{attribute_id}/value-detail` — Get Attribute Value Detail

### Product Listings
- `GET /api/integration-instances/{integrationInstance}/content-sync-overview` — Get Content Sync Overview
- `POST /api/integration-instances/{integrationInstance}/content-sync/compare-existing` — Compare Existing Products Content

### Shopify
- `POST /api/shopify/{integration_instance_id}/vendor-suppliers/apply` — Apply Shopify Vendor Suppliers
- `GET /api/shopify/{integration_instance_id}/vendor-suppliers/preview` — Preview Shopify Vendor Suppliers
- `PUT /api/shopify/{integration_instance_id}/vendor-target` — Update Shopify Vendor Target
- `GET /api/shopify/{integration_instance_id}/vendor-usage` — Get Shopify Vendor Usage

### SPS Commerce
- `PUT /api/spscommerce/fulfillments/{salesOrderFulfillment}/packing/weights` — Update Shipment Carton Weights

## Changed

### Lot Compliance
- `DELETE /api/v2/fifo-layers/{fifoLayer}/retention-samples/{sample}` — Delete Lot Retention Sample
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
