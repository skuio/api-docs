---
title: API changes — 2026-10-25
description: This release includes 14 additions.
authors: [product-team]
tags: [added]
date: 2026-10-25
---

This release includes 14 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Payment Terms
- `GET /api/payment-terms/sales-billing-presets` — List Sales Billing Presets

### Sales Invoices
- `GET /api/sales-orders/{salesOrder}/billing` — Get Sales Order Billing
- `POST /api/sales-orders/{salesOrder}/billing/lines/{lineKey}/raise` — Raise Sales Order Billing Line
- `POST /api/sales-orders/{salesOrder}/billing/lines/{lineKey}/retry` — Retry Sales Order Billing Line
- `POST /api/sales-orders/{salesOrder}/payment-requests` — Create Payment Request
- `GET /api/sales-payment-requests` — List Payment Requests
- `POST /api/sales-payment-requests/{salesPaymentRequestId}/paypal-payment-links` — Create Payment Request PayPal Pay Link
- `GET /api/sales-payment-requests/{salesPaymentRequest}` — Get Payment Request
- `GET /api/sales-payment-requests/{salesPaymentRequest}/email-preview` — Preview Payment Request Email
- `GET /api/sales-payment-requests/{salesPaymentRequest}/pdf` — Download Payment Request PDF
- `POST /api/sales-payment-requests/{salesPaymentRequest}/send` — Send Payment Request
- `POST /api/sales-payment-requests/{salesPaymentRequest}/stripe-checkout` — Create Payment Request Stripe Invoice
- `POST /api/sales-payment-requests/{salesPaymentRequest}/void` — Void Payment Request

### Sales Orders
- `POST /api/sales-orders/{salesOrder}/release-billing-hold` — Release Billing Hold

_Spec version 1.0.0 → 1.0.0._
