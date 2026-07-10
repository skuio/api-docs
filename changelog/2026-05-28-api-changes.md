---
title: API changes — 2026-05-28
description: This release includes 24 additions, 5 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-05-28
---

This release includes 24 additions, 5 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Filter Suggestions
- `POST /api/ai/filter-suggestions` — Generate Filter Tree from Prompt

### Sales Channels
- `GET /api/amazon/mappings/available-fields` — Get Available Fields
- `POST /api/amazon/unified/customer-returns/bulk-mark-reviewed` — Bulk Mark Reviewed
- `POST /api/amazon/unified/customer-returns/bulk-mark-unreviewed` — Bulk Mark Unreviewed
- `POST /api/amazon/unified/removal-orders/bulk-archive` — Bulk Archive Removal Orders
- `POST /api/amazon/unified/removal-orders/bulk-unarchive` — Bulk Unarchive Removal Orders
- `POST /api/amazon/unified/removal-orders/bulk-unprocess` — Bulk Unprocess Removal Orders
- `POST /api/amazon/unified/removal-shipments/bulk-archive` — Bulk Archive Removal Shipments
- `POST /api/amazon/unified/removal-shipments/bulk-unarchive` — Bulk Unarchive Removal Shipments
- `GET /api/amazon/{integrationInstance}/mappings` — Get Field Mappings
- `PUT /api/amazon/{integrationInstance}/mappings` — Update Field Mappings
- `POST /api/amazon/{integrationInstance}/products/{product}/archive` — Archive Product
- `POST /api/amazon/{integrationInstance}/products/{product}/create-sku-product` — Create SKU Product from Listing
- `DELETE /api/amazon/{integrationInstance}/products/{product}/map` — Unmap Product
- `POST /api/amazon/{integrationInstance}/products/{product}/map` — Map Product to SKU Product
- `GET /api/amazon/{integrationInstance}/products/{product}/orders` — Get Orders for Product
- `GET /api/amazon/{integrationInstance}/products/{product}/raw` — Get Raw Product from Amazon
- `POST /api/amazon/{integrationInstance}/products/{product}/refresh` — Refresh Product from Amazon
- `POST /api/amazon/{integrationInstance}/products/{product}/unarchive` — Unarchive Product
- `POST /api/amazon/{integrationInstance}/removal-shipments/bulk-remove-receipts` — Bulk Remove Receipts
- `GET /api/amazon/{integrationInstance}/setup-step` — Get Setup Step
- `PATCH /api/amazon/{integrationInstance}/setup-step` — Update Setup Step
- `GET /tiktok-shop/callback` — OAuth Callback

### Store Email Templates
- `GET /api/store-email-templates/contexts` — List Template Contexts

## Changed

### Sales Channels
- `DELETE /api/amazon/{integrationInstance}/removal-orders/{orderId}/undo-all-receipts` — Undo All Receipts for Order
  - new response code(s): `404`
- `POST /api/amazon/{integrationInstance}/removal-shipments/receive-bulk` — Bulk Receive Removal Shipments
  - new response code(s): `422`
- `POST /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/receive` — Receive Removal Shipment
  - new parameter(s): `Content-Type`
  - new response code(s): `404`, `422`
- `DELETE /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/remove-receipt` — Remove Receipt
  - new response code(s): `404`

### Store Email Templates
- `POST /api/store-email-templates` — Create Store Email Template
  - new response code(s): `200`
  - removed response code(s): `201`, `422`

_Spec version 1.0.0 → 1.0.0._
