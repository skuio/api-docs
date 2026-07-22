---
title: API changes — 2026-07-22
description: This release includes 14 additions, 2 removals. 2 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-07-22
---

This release includes 14 additions, 2 removals. 2 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### UI Utilities
- **Removed** `GET /api/pdf-templates/purchase_order/store-overrides` — Get Store Overrides by Type
- **Removed** `DELETE /api/pdf-templates/{id}` — Delete PDF Template

## Added

### Inventory Intelligence
- `POST /api/inventory-forecasting/lead-time-coverage/products` — List Measured Lead Time Coverage Products
- `POST /api/inventory-forecasting/lead-time-coverage/summary` — Get Measured Lead Time Coverage Summary
- `GET /api/inventory-forecasting/lead-time-coverage/{supplierProduct}/purchase-orders` — List Measured Lead Time Contributing Purchase Orders
- `POST /api/inventory-forecasting/promo-windows/suggest` — Suggest Promo Windows

### PDF Templates
- `GET /api/pdf-template-assets` — List Template Assets
- `POST /api/pdf-template-assets` — Upload Template Asset
- `DELETE /api/pdf-template-assets/{id}` — Delete Template Asset
- `POST /api/pdf-templates/preview-sales-order` — Preview Packing Slip for a Sales Order
- `GET /api/pdf-templates/search-sales-orders` — List Sales Orders for Preview
- `POST /api/pdf-templates/{id}/validate` — Validate PDF Template
- `GET /api/pdf-templates/{id}/versions` — List PDF Template Versions
- `GET /api/pdf-templates/{id}/versions/{versionId}` — Get PDF Template Version
- `POST /api/pdf-templates/{id}/versions/{versionId}/restore` — Restore PDF Template Version
- `GET /api/pdf-templates/{type}/store-overrides` — List Store Overrides

_Spec version 1.0.0 → 1.0.0._
