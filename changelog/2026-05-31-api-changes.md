---
title: API changes — 2026-05-31
description: This release includes 5 additions.
authors: [product-team]
tags: [added]
date: 2026-05-31
---

This release includes 5 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Fulfillment Orders
- `POST /api/fulfillment-orders/{fulfillmentOrder}/force-fail-submission` — Force-Fail Fulfillment Order Submission
- `POST /api/fulfillment-orders/{fulfillmentOrder}/retry-submission` — Retry Fulfillment Order Submission
- `POST /api/fulfillment-orders/{fulfillmentOrder}/split` — Split Fulfillment Order

### Fulfillments
- `PATCH /api/v2/sales-order-fulfillments/{salesOrderFulfillment}/shipping-details` — Edit Shipping Details

### Orders
- `DELETE /api/temu/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order

_Spec version 1.0.0 → 1.0.0._
