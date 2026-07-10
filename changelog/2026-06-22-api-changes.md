---
title: API changes — 2026-06-22
description: This release includes 13 additions.
authors: [product-team]
tags: [added]
date: 2026-06-22
---

This release includes 13 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Fulfillments
- `PUT /api/sales-order-fulfillments/{salesOrderFulfillment}` — Fulfill / Update Shipment (with optional lot allocation)

### POS / Register
- `POST /api/pos/checkout` — POS Checkout (Cash or Card)
- `GET /api/pos/payment-config` — Get Payment Config (in-browser SDK)
- `GET /api/pos/register-session/current` — Get Current Register Session
- `POST /api/pos/register-sessions` — Open Register Session
- `POST /api/pos/register-sessions/{registerSession}/close` — Close Register Session
- `GET /api/pos/settings` — Get POS Settings
- `PUT /api/pos/settings` — Update POS Settings
- `GET /api/pos/square/locations` — List Square Locations
- `GET /api/pos/transactions` — List POS Transactions
- `GET /api/pos/transactions/{posTransaction}/receipt` — Get POS Receipt
- `POST /api/pos/transactions/{posTransaction}/refund` — Refund POS Sale (Return)

### Sales Channels
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/create-warehouse-transfer` — Create Warehouse Transfer

_Spec version 1.0.0 → 1.0.0._
