---
title: API changes — 2026-06-10
description: This release 15 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-10
---

This release 15 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/starshipit/integration-instances/{integration_instance}/shipping-methods/map/{code}` — Unmap Carrier/Service
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/orders` — List Orders
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/orders/sync-info` — Get Order Sync Info
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/orders/sync-progress/{trackedJobLogId}` — Get Order Sync Progress
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/packages` — List Packages
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/packages/{package}` — Get Package
- `GET /api/starshipit/integration-instances/{integration_instance}/shipping-methods` — List Shipping Method Mappings
- `GET /api/starshipit/integration-instances/{integration_instance}/shipping-methods/export` — Export Mappings (CSV)
- `POST //{domain}/api/starshipit/integration-instances/{integration_instance}/orders/sync` — Sync Orders (Queue Job)
- `POST /api/starshipit/integration-instances/{integration_instance}/orders/refresh-order` — Refresh Single Order (Download)
- `POST /api/starshipit/integration-instances/{integration_instance}/orders/search` — Search Orders
- `POST /api/starshipit/integration-instances/{integration_instance}/orders/{order}/tracking` — Refresh Order Tracking
- `POST /api/starshipit/integration-instances/{integration_instance}/shipping-methods/import` — Import Mappings (CSV)
- `PUT /api/starshipit/integration-instances/{integration_instance}/shipping-methods/bulk-map` — Bulk Map Carrier/Services
- `PUT /api/starshipit/integration-instances/{integration_instance}/shipping-methods/map` — Map Carrier/Service

_Spec version 1.0.0 → 1.0.0._
