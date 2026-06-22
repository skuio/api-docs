---
title: API changes — 2026-06-22
description: This release 11 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-22
---

This release 11 added API endpoint(s).

<!-- truncate -->

## Added

- `GET /api/pos/payment-config` — Get Payment Config (in-browser SDK)
- `GET /api/pos/register-session/current` — Get Current Register Session
- `GET /api/pos/settings` — Get POS Settings
- `GET /api/pos/square/locations` — List Square Locations
- `GET /api/pos/transactions` — List POS Transactions
- `GET /api/pos/transactions/{posTransaction}/receipt` — Get POS Receipt
- `POST /api/pos/checkout` — POS Checkout (Cash or Card)
- `POST /api/pos/register-sessions` — Open Register Session
- `POST /api/pos/register-sessions/{registerSession}/close` — Close Register Session
- `POST /api/pos/transactions/{posTransaction}/refund` — Refund POS Sale (Return)
- `PUT /api/pos/settings` — Update POS Settings

_Spec version 1.0.0 → 1.0.0._
