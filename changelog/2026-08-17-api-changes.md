---
title: API changes — 2026-08-17
description: This release includes 4 additions, 1 removal. 1 breaking change — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-08-17
---

This release includes 4 additions, 1 removal. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Purchase Invoices
- **Removed** `GET /api/purchase-invoices/{purchaseOrderId}/print` — Print Purchase Invoice PDF

## Added

### Amazon
- `GET /api/amazon/unified/fnsku-products/unknown-items` — List Unknown Item FNSKUs
- `POST /api/amazon/unified/fnsku-products/{fnskuProduct}/mark-unknown` — Mark FNSKU as Unknown Item
- `POST /api/amazon/unified/fnsku-products/{fnskuProduct}/unmark-unknown` — Unmark FNSKU as Unknown Item

### Purchase Invoices
- `GET /api/purchase-invoices/{purchaseInvoice}/print` — Print Purchase Invoice PDF

_Spec version 1.0.0 → 1.0.0._
