---
title: API changes — 2026-06-26
description: This release includes 4 additions.
authors: [product-team]
tags: [added]
date: 2026-06-26
---

This release includes 4 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Shipping Providers
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}/activity-log` — Get Order Activity Log
- `GET //{domain}/api/veracore/integration-instances/{integration_instance}/orders` — List Orders
- `GET //{domain}/api/veracore/integration-instances/{integration_instance}/orders/{order}` — Show Order

### WFS
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/source` — Set WFS Inbound Source

_Spec version 1.0.0 → 1.0.0._
