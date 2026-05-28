---
title: API changes — 2026-05-28
description: This release 21 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-05-28
---

This release 21 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/amazon/{integrationInstance}/products/{product}/map` — Unmap Product
- `GET /api/amazon/mappings/available-fields` — Get Available Fields
- `GET /api/amazon/{integrationInstance}/mappings` — Get Field Mappings
- `GET /api/amazon/{integrationInstance}/products/{product}/orders` — Get Orders for Product
- `GET /api/amazon/{integrationInstance}/products/{product}/raw` — Get Raw Product from Amazon
- `GET /api/amazon/{integrationInstance}/setup-step` — Get Setup Step
- `GET /tiktok-shop/callback` — OAuth Callback
- `PATCH /api/amazon/{integrationInstance}/setup-step` — Update Setup Step
- `POST /api/amazon/unified/customer-returns/bulk-mark-reviewed` — Bulk Mark Reviewed
- `POST /api/amazon/unified/customer-returns/bulk-mark-unreviewed` — Bulk Mark Unreviewed
- `POST /api/amazon/unified/removal-orders/bulk-archive` — Bulk Archive Removal Orders
- `POST /api/amazon/unified/removal-orders/bulk-unarchive` — Bulk Unarchive Removal Orders
- `POST /api/amazon/unified/removal-orders/bulk-unprocess` — Bulk Unprocess Removal Orders
- `POST /api/amazon/unified/removal-shipments/bulk-archive` — Bulk Archive Removal Shipments
- `POST /api/amazon/unified/removal-shipments/bulk-unarchive` — Bulk Unarchive Removal Shipments
- `POST /api/amazon/{integrationInstance}/products/{product}/archive` — Archive Product
- `POST /api/amazon/{integrationInstance}/products/{product}/create-sku-product` — Create SKU Product from Listing
- `POST /api/amazon/{integrationInstance}/products/{product}/map` — Map Product to SKU Product
- `POST /api/amazon/{integrationInstance}/products/{product}/refresh` — Refresh Product from Amazon
- `POST /api/amazon/{integrationInstance}/products/{product}/unarchive` — Unarchive Product
- `PUT /api/amazon/{integrationInstance}/mappings` — Update Field Mappings

_Spec version 1.0.0 → 1.0.0._
