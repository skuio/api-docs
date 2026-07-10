---
title: API changes — 2026-07-10
description: This release 9 added, 4 changed API endpoint(s).
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-07-10
---

This release 9 added, 4 changed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `GET /api/trackstar/integration-instances/{integration_instance}/shipping-methods/export` — Export Shipping Method Mappings
- `GET /api/v2/brands/{brand}` — Get Brand Detail Summary
- `GET /api/v2/brands/{brand}/activity-log` — Get Brand Activity Log
- `PATCH /api/purchase-orders/{purchase_order}/invoice-reminders` — Manage Invoice Reminders
- `POST /api/fulfillment-orders/{fulfillmentOrder}/apply-line-update` — Apply Fulfillment Order Line Update
- `POST /api/trackstar/integration-instances/{integration_instance}/shipping-methods/auto-match` — Auto-match Shipping Methods
- `POST /api/trackstar/integration-instances/{integration_instance}/shipping-methods/import` — Import Shipping Method Mappings
- `PUT /api/suppliers/{supplier}/invoice-reminders` — Update Supplier Invoice Reminders
- `PUT /api/trackstar/integration-instances/{integration_instance}/shipping-methods/bulk-map` — Bulk Map Shipping Methods

## Changed

- `GET /api/trackstar/integration-instances/{integration_instance}/shipping-methods` — List Shipping Methods **(breaking)**
  - removed parameter(s): `page`, `per_page`
- `GET /api/v2/sales-credits` — List Sales Credits **(breaking)**
  - new parameter(s): `archived`, `excluded[]`, `included[]`, `limit`, `search`, `sort`
  - removed parameter(s): `per_page`
- `GET /api/v2/suppliers` — List Suppliers **(breaking)**
  - new parameter(s): `archived`, `excluded[]`, `included[]`, `limit`, `search`, `sort`
  - removed parameter(s): `per_page`
- `GET /api/v2/return-reasons` — List Return Reasons
  - new parameter(s): `archived`, `limit`, `page`, `search`, `sort`

_Spec version 1.0.0 → 1.0.0._
