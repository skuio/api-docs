---
title: API changes — 2026-08-07
description: This release includes 5 additions, 3 changes, 2 removals. 2 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-08-07
---

This release includes 5 additions, 3 changes, 2 removals. 2 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### PDF Templates
- **Removed** `POST /api/pdf-templates/preview-sales-order` — Preview Packing Slip for a Sales Order
- **Removed** `GET /api/pdf-templates/search-sales-orders` — List Sales Orders for Preview

## Added

### Ledger (Accounting v2)
- `GET /api/ledger/settings/document-numbering` — Get Document Numbering Settings
- `PUT /api/ledger/settings/document-numbering` — Update Document Numbering Settings

### PDF Templates
- `GET /api/pdf-template-assets/{id}/usage` — Get Template Asset Usage
- `GET /api/pdf-templates/{id}/sample-records` — List Sample Records for Preview

### Walmart
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/fulfillment/shipping-details-email` — Send WFS Inbound Shipping Details Email (stage 2)

## Changed

### PDF Templates
- `DELETE /api/pdf-template-assets/{id}` — Delete Template Asset
  - new response code(s): `409`
- `PUT /api/pdf-templates/{id}` — Update PDF Template
  - new response code(s): `409`
- `DELETE /api/pdf-templates/{id}/store-override` — Delete Store Override
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
