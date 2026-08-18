---
title: API changes — 2026-08-18
description: This release includes 5 additions.
authors: [product-team]
tags: [added]
date: 2026-08-18
---

This release includes 5 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Setup & Readiness
- `GET /api/integrations/readiness` — Get Integration Readiness

### Shopify
- `GET /api/shopify/{integrationInstance}/reconciliation` — Get Shopify Reconciliation Ledger
- `GET /api/shopify/{integrationInstance}/setup` — Get Shopify Setup State
- `POST /api/shopify/{integrationInstance}/setup/defer` — Defer Shopify Setup
- `PUT /api/shopify/{integrationInstance}/setup/order-history` — Set Shopify Order-History Start

_Spec version 1.0.0 → 1.0.0._
