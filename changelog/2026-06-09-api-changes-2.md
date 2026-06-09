---
title: API changes — 2026-06-09
description: This release 15 removed API endpoint(s).
authors: [product-team]
tags: [removed, breaking]
date: 2026-06-09
---

This release 15 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Removed

- `DELETE /api/starshipit/integration-instances/{integration_instance}/shipping-methods/map/{code}` — Unmap Carrier/Service **(breaking)**
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/orders` — List Orders **(breaking)**
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/orders/sync-info` — Get Order Sync Info **(breaking)**
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/orders/sync-progress/{trackedJobLogId}` — Get Order Sync Progress **(breaking)**
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/packages` — List Packages **(breaking)**
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/packages/{package}` — Get Package **(breaking)**
- `GET /api/starshipit/integration-instances/{integration_instance}/shipping-methods` — List Shipping Method Mappings **(breaking)**
- `GET /api/starshipit/integration-instances/{integration_instance}/shipping-methods/export` — Export Mappings (CSV) **(breaking)**
- `POST //{domain}/api/starshipit/integration-instances/{integration_instance}/orders/sync` — Sync Orders (Queue Job) **(breaking)**
- `POST /api/starshipit/integration-instances/{integration_instance}/orders/refresh-order` — Refresh Single Order (Download) **(breaking)**
- `POST /api/starshipit/integration-instances/{integration_instance}/orders/search` — Search Orders **(breaking)**
- `POST /api/starshipit/integration-instances/{integration_instance}/orders/{order}/tracking` — Refresh Order Tracking **(breaking)**
- `POST /api/starshipit/integration-instances/{integration_instance}/shipping-methods/import` — Import Mappings (CSV) **(breaking)**
- `PUT /api/starshipit/integration-instances/{integration_instance}/shipping-methods/bulk-map` — Bulk Map Carrier/Services **(breaking)**
- `PUT /api/starshipit/integration-instances/{integration_instance}/shipping-methods/map` — Map Carrier/Service **(breaking)**

_Spec version 1.0.0 → 1.0.0._
