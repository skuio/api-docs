---
title: API changes — 2026-05-29
description: This release 8 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-05-29
---

This release 8 added API endpoint(s).

<!-- truncate -->

## Added

- `GET /api/shopify/{integrationInstance}/products/{product}/revenue-conversion/affected-orders` — Get Affected Orders
- `GET /api/shopify/{integrationInstance}/products/{product}/revenue-conversion/preview` — Preview Revenue Conversion
- `GET /api/starshipit/integration-instances/{integration_instance}/orders-chart` — Get Orders Chart (Date Range)
- `GET /api/starshipit/integration-instances/{integration_instance}/orders/{order}` — Get Order
- `GET /api/starshipit/integration-instances/{integration_instance}/orders/{order}/label` — Download Label (PDF base64)
- `GET /api/starshipit/integration-instances/{integration_instance}/orders/{order}/packing-slip` — Download Packing Slip (PDF base64)
- `GET /api/starshipit/integration-instances/{integration_instance}/orders/{order}/webhook-events` — Get Order Webhook Events
- `POST /api/shopify/{integrationInstance}/products/{product}/revenue-conversion` — Convert Product Lines to Revenue

_Spec version 1.0.0 → 1.0.0._
