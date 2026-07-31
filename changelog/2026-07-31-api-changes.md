---
title: API changes — 2026-07-31
description: This release includes 14 additions.
authors: [product-team]
tags: [added]
date: 2026-07-31
---

This release includes 14 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Documents
- `POST /api/documents` — Upload Document
- `DELETE /api/documents/{document}` — Delete Document
- `PATCH /api/documents/{document}` — Update Document Description

### Getting Started
- `GET /api/me` — Verify Token

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
