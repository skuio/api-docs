---
title: API changes — 2026-09-15
description: This release includes 15 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-09-15
---

This release includes 15 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Attachments
- `GET /api/support/attachments/{attachment}/inline` — Inline Support Attachment (signed URL)

### MRP Planning
- `GET /api/manufacturing/mrp/planning-policies/coverage` — Get Planning Policy Coverage

### Product Listings
- `POST /api/ai/listing-content` — Generate Listing Content
- `GET /api/v2/listings/catalogs` — List Channel Catalogs
- `POST /api/v2/listings/catalogs` — Create Channel Catalog
- `DELETE /api/v2/listings/catalogs/{channelCatalog}` — Delete Channel Catalog
- `GET /api/v2/listings/catalogs/{channelCatalog}` — Get Channel Catalog
- `PUT /api/v2/listings/catalogs/{channelCatalog}` — Update Channel Catalog
- `GET /api/v2/listings/catalogs/{channelCatalog}/impact` — Get Catalog Impact
- `GET /api/v2/listings/catalogs/{channelCatalog}/preview` — List Eligible Products
- `GET /api/v2/sales-channels/{salesChannel}/attribute-mappings/field-names` — List Channel Field Names

### Products
- `GET /api/v2/products/{product}/unlotted-stock` — Get Product Unlotted Stock

### Sales Channel Listing Profiles
- `GET /api/v2/sales-channels/{salesChannel}/listing-profiles/schema` — Get Listing Profile Schema
- `GET /api/v2/sales-channels/{salesChannel}/listing-profiles/{profile}/mappings` — List Listing Profile Mappings
- `PUT /api/v2/sales-channels/{salesChannel}/listing-profiles/{profile}/mappings` — Replace Listing Profile Mappings

## Changed

### Inventory Expiry & Shelf-Life
- `GET /api/inventory-expiry/lot-backfill/template` — Download Lot Backfill Template (CSV)
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
