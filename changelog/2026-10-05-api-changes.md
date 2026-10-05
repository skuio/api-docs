---
title: API changes — 2026-10-05
description: This release includes 5 additions.
authors: [product-team]
tags: [added]
date: 2026-10-05
---

This release includes 5 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### PayPal
- `GET /api/paypal/integrations/{id}` — Get PayPal Integration
- `GET /api/paypal/integrations/{id}/pay-links` — List PayPal Pay Links
- `GET /api/paypal/integrations/{id}/transactions` — List PayPal Transactions
- `POST /api/paypal/integrations/{id}/transactions/import` — Import PayPal Transactions
- `GET /api/paypal/integrations/{id}/transactions/summary` — Get PayPal Transaction Summary

_Spec version 1.0.0 → 1.0.0._
