---
title: API changes — 2026-07-08
description: This release 4 added, 1 removed API endpoint(s).
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-07-08
---

This release 4 added, 1 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `GET /api/trackstar/integration-instances/{integration_instance}/order-shipments` — List Order Shipments
- `GET /api/trackstar/integration-instances/{integration_instance}/order-shipments/{order_shipment}` — Get Order Shipment
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/3pl-metrics` — Get 3PL Turnaround Metrics
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/fulfillment/prep-sheet.csv` — Download Prep & Pack Sheet (CSV)

## Removed

- `GET /api/amazon/{integrationInstance}/fba-inbound/3pl-metrics` — 3PL / Supplier Turnaround Metrics (Tenant-Level) **(breaking)**

_Spec version 1.0.0 → 1.0.0._
