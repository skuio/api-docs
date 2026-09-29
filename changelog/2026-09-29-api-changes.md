---
title: API changes — 2026-09-29
description: This release includes 8 additions.
authors: [product-team]
tags: [added]
date: 2026-09-29
---

This release includes 8 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Amazon
- `GET /api/amazon/unified/reimbursement-cases/{reimbursementCase}/shipment-filing` — Get Reimbursement Case Shipment Filing

### Fulfillments
- `POST /api/sales-order-fulfillments/lines/{salesOrderFulfillmentLine}/assign-serials` — Assign Missing Serials to a Shipment Line

### Sales Orders
- `POST /api/sales-order-fulfillments/{salesOrderFulfillment}/reverse-to-pre-tracked` — Reverse Sales Order Fulfillment to Pre-Tracked
- `POST /api/sales-orders/mark-shipped-before-tracking` — Mark Sales Orders Shipped Before Tracking
- `POST /api/sales-orders/mark-shipped-before-tracking/preview` — Preview Mark Sales Orders Shipped Before Tracking
- `POST /api/sales-orders/{salesOrder}/mark-shipped-before-tracking` — Mark Sales Order Shipped Before Tracking
- `POST /api/sales-orders/{salesOrder}/pre-tracked-fulfillment/push` — Retry Mark Sales Order Fulfilled in Shopify

### Users
- `POST /api/users/{user}/resend-invite` — Resend User Invite

_Spec version 1.0.0 → 1.0.0._
