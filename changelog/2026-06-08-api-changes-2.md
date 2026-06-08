---
title: API changes — 2026-06-08
description: This release 7 added, 5 removed API endpoint(s).
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-06-08
---

This release 7 added, 5 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `GET /api/stripe/integrations/{id}/invoices` — List Invoices by Instance
- `GET /api/stripe/invoices/{id}` — Show Invoice
- `GET /api/stripe/invoices/{id}/activity-log` — Get Invoice Activity Log
- `GET /api/stripe/sales-orders/{salesOrderId}/invoices` — List Invoices for Sales Order
- `POST /api/stripe/invoices` — Send Invoice
- `POST /api/stripe/invoices/{id}/refunds` — Issue Refund
- `POST /api/stripe/invoices/{id}/void` — Void Invoice

## Removed

- `GET //{domain}/api/stripe/integrations/{id}/invoices` — List Invoices by Instance **(breaking)**
- `GET //{domain}/api/stripe/sales-orders/{salesOrderId}/invoices` — List Invoices for Sales Order **(breaking)**
- `POST //{domain}/api/stripe/invoices` — Send Invoice **(breaking)**
- `POST //{domain}/api/stripe/invoices/{id}/refunds` — Issue Refund **(breaking)**
- `POST //{domain}/api/stripe/invoices/{id}/void` — Void Invoice **(breaking)**

_Spec version 1.0.0 → 1.0.0._
