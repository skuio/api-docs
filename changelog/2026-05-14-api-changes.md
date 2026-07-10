---
title: API changes — 2026-05-14
description: This release includes 4 additions, 1 change. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-05-14
---

This release includes 4 additions, 1 change. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Products
- **Changed** `GET /api/faire/instances/{integrationInstance}/products` — List Products for Instance (Variants Listing)
  - new parameter(s): `filter[has_sku.is]`, `filter[mapped.is]`
  - removed parameter(s): `filter[has_sku]`, `filter[mapped]`

## Added

### Purchase Invoices
- `POST /api/purchase-invoices/{purchaseInvoice}/resolve-with-credit` — Resolve with Vendor Credit
- `GET /api/purchase-invoices/{purchaseInvoice}/variance-resolution-preview` — Variance Resolution Preview

### Purchase Orders
- `DELETE /api/purchase-order-line-short-close-events/{short_close_event}` — Undo Short-Close
- `POST /api/purchase-order-lines/{purchase_order_line}/short-close` — Short-Close PO Line

_Spec version 1.0.0 → 1.0.0._
