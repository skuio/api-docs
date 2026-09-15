---
title: API changes — 2026-09-15
description: This release includes 7 additions.
authors: [product-team]
tags: [added]
date: 2026-09-15
---

This release includes 7 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Product Listings
- `GET /api/v2/listings/catalogs` — List Channel Catalogs
- `POST /api/v2/listings/catalogs` — Create Channel Catalog
- `DELETE /api/v2/listings/catalogs/{channelCatalog}` — Delete Channel Catalog
- `GET /api/v2/listings/catalogs/{channelCatalog}` — Get Channel Catalog
- `PUT /api/v2/listings/catalogs/{channelCatalog}` — Update Channel Catalog
- `GET /api/v2/listings/catalogs/{channelCatalog}/impact` — Get Catalog Impact
- `GET /api/v2/listings/catalogs/{channelCatalog}/preview` — List Eligible Products

_Spec version 1.0.0 → 1.0.0._
