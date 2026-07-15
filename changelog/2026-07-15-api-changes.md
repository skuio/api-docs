---
title: API changes — 2026-07-15
description: This release includes 4 additions.
authors: [product-team]
tags: [added]
date: 2026-07-15
---

This release includes 4 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Purchase Orders
- `DELETE /api/purchase-orders/{purchase_order}/approval-request` — Withdraw Purchase Order Approval Request
- `POST /api/purchase-orders/{purchase_order}/approval-request/approve` — Approve Purchase Order Approval Request
- `POST /api/purchase-orders/{purchase_order}/approval-request/reject` — Reject Purchase Order Approval Request
- `POST /api/purchase-orders/{purchase_order}/request-approval` — Request Purchase Order Approval

_Spec version 1.0.0 → 1.0.0._
