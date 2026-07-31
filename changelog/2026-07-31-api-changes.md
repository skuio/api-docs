---
title: API changes — 2026-07-31
description: This release includes 15 additions, 1 removal. 1 breaking change — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-07-31
---

This release includes 15 additions, 1 removal. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Product Listings
- **Removed** `GET /api/v2/listings/coverage` — Get Catalog Coverage Matrix

## Added

### Documents
- `POST /api/documents` — Upload Document
- `DELETE /api/documents/{document}` — Delete Document
- `PATCH /api/documents/{document}` — Update Document Description

### Getting Started
- `GET /api/me` — Verify Token

### Product Listings
- `GET /api/v2/listings/publish` — Get Publish Matrix

### Reporting
- `GET /api/reporting/suppliers/{supplier}/margin-ladder` — Get Supplier Margin Ladder

### Shopify
- `GET /api/shopify/dashboard` — Get Shopify Dashboard

### Stock Takes
- `GET /api/stock-takes/{stockTake}/documents` — List Stock Take Attachments
- `POST /api/stock-takes/{stockTake}/documents` — Upload Stock Take Attachment
- `DELETE /api/stock-takes/{stockTake}/documents/{document}` — Delete Stock Take Attachment
- `PATCH /api/stock-takes/{stockTake}/documents/{document}` — Update Stock Take Attachment Description
- `GET /api/stock-takes/{stockTake}/documents/{document}/file` — Stream Stock Take Attachment File

### Suppliers
- `GET /api/suppliers/{supplier}/price-list` — List Supplier Price List
- `GET /api/suppliers/{supplier}/price-list/export` — Export Supplier Price List
- `GET /api/suppliers/{supplier}/price-list/meta` — Get Supplier Price List Metadata

_Spec version 1.0.0 → 1.0.0._
