---
title: API changes — 2026-07-04
description: This release 10 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-07-04
---

This release 10 added API endpoint(s).

<!-- truncate -->

## Added

- `GET //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/bulk-progress/{tracked_job_log_id}` — Get Bulk Mapping Progress
- `GET //{domain}/api/tiktok-shop/products/skus` — List Product SKUs (Flattened Mapping List)
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/bulk` — Bulk Map / Unmap / Create / Remap Product SKUs (Sync)
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/bulk-tracked` — Bulk Map Product SKUs (Tracked)
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/create-products-from-mappings` — Create Products from Mappings (Bulk, Queued)
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/csv-mappings/apply` — Apply CSV Mappings
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/csv-mappings/validate` — Validate CSV Mappings
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/map-to-existing-skus` — Map to Existing SKUs (Bulk, Queued)
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/skus/{product_sku_id}/create-sku-product` — Create SKU.io Product from SKU
- `POST //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/skus/{product_sku_id}/smart-match` — Smart Match SKU to SKU.io Products

_Spec version 1.0.0 → 1.0.0._
