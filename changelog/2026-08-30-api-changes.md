---
title: API changes — 2026-08-30
description: This release includes 21 additions.
authors: [product-team]
tags: [added]
date: 2026-08-30
---

This release includes 21 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Operation Templates
- `DELETE /api/manufacturing/operation-templates` — Bulk Delete Operation Templates

### Sales Channels
- `GET /api/channel-partners/{id}/customer-mappings` — List Customer Mappings
- `POST /api/channel-partners/{id}/customer-mappings` — Create Customer Mapping
- `POST /api/channel-partners/{id}/customer-mappings/bulk` — Bulk Customer Mappings
- `GET /api/channel-partners/{id}/customer-mappings/export` — Export Customer Mappings CSV
- `POST /api/channel-partners/{id}/customer-mappings/import` — Import Customer Mappings CSV
- `DELETE /api/channel-partners/{id}/customer-mappings/{id2}` — Delete Customer Mapping
- `PUT /api/channel-partners/{id}/customer-mappings/{id2}` — Update Customer Mapping
- `POST /api/channel-partners/{id}/customer-mappings/{id2}/apply` — Apply Customer Mapping
- `GET /api/channel-partners/{id}/customer-mappings/{id2}/impact` — Get Customer Mapping Impact
- `GET /api/channel-partners/{id}/mapping-stats` — Get Mapping Stats
- `GET /api/channel-partners/{id}/product-mappings` — List Product Mappings
- `POST /api/channel-partners/{id}/product-mappings` — Create Product Mapping
- `POST /api/channel-partners/{id}/product-mappings/auto-match` — Auto-Match Product Mappings
- `POST /api/channel-partners/{id}/product-mappings/bulk` — Bulk Product Mappings
- `GET /api/channel-partners/{id}/product-mappings/export` — Export Product Mappings CSV
- `POST /api/channel-partners/{id}/product-mappings/import` — Import Product Mappings CSV
- `DELETE /api/channel-partners/{id}/product-mappings/{id2}` — Delete Product Mapping
- `PUT /api/channel-partners/{id}/product-mappings/{id2}` — Update Product Mapping
- `POST /api/channel-partners/{id}/product-mappings/{id2}/apply` — Apply Product Mapping
- `GET /api/channel-partners/{id}/product-mappings/{id2}/impact` — Get Product Mapping Impact

_Spec version 1.0.0 → 1.0.0._
