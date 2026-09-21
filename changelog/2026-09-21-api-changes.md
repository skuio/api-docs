---
title: API changes — 2026-09-21
description: This release includes 5 additions, 1 change, 1 removal. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-09-21
---

This release includes 5 additions, 1 change, 1 removal. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Adjustments & Transfers
- **Removed** `POST /api/warehouses/transfers/{transfer}/asn` — Send Warehouse Transfer ASN

## Added

### Adjustments & Transfers
- `POST /api/warehouses/transfers/{warehouseTransfer}/asn` — Send Warehouse Transfer ASN
- `PATCH /api/warehouses/transfers/{warehouseTransfer}/lines` — Update Transfer Lines (Bulk)

### Product Listings
- `POST /api/v2/listings/buy-box/refresh` — Refresh Amazon Buy Box

### Sales Channel Product Templates
- `GET /api/v2/listings/catalogue-enrichment` — Catalogue Enrichment Report
- `GET /api/v2/sales-channel-product-templates/{template}/readiness` — Get Template Readiness Matrix

## Changed

### Jobs & Logs
- `GET /api/tracked-job-logs/retry/{trackedJobLog}` — Retry Job
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
