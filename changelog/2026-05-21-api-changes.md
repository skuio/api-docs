---
title: API changes — 2026-05-21
description: This release includes 5 additions.
authors: [product-team]
tags: [added]
date: 2026-05-21
---

This release includes 5 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Customers
- `DELETE /api/customers/{customer}/sales-credits/{salesCredit}/allocations/{allocation}` — Unallocate Sales Credit from Order

### Merged Shipments
- `DELETE /api/sales-orders/{salesOrderId}/payments/{payment}` — Delete Sales Order Payment

### Products
- `POST /api/temu/{integration_instance}/products/refresh-tracked` — Refresh Products (Tracked)

### Purchase Orders
- `PATCH /api/purchase-order-lines/{purchase_order_line}` — Update PO Line

### Sales Orders
- `POST /api/sales-orders/close` — Bulk Close Sales Orders

_Spec version 1.0.0 → 1.0.0._
