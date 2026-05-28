---
title: API changes — 2026-05-26
description: This release 1 added, 4 changed API endpoint(s).
authors: [product-team]
tags: [added, changed]
date: 2026-05-26
---

This release 1 added, 4 changed API endpoint(s).

<!-- truncate -->

## Added

- `GET //{domain}/api/purchase-orders/{purchase_order}/lines-for-receiving` — Get PO Lines for Receiving

## Changed

- `GET //{domain}/api/purchase-orders/list` — List Purchase Orders (Vue3 List)
  - new parameter(s): `filter[logistics_<slug>_actual][on_or_before]`, `filter[logistics_<slug>_estimate][on_or_after]`
- `GET //{protocol}{domain}/api/inbound-shipments` — List Inbound Shipments
  - new parameter(s): `filter[logistics_<slug>_actual][is_empty]`, `filter[logistics_<slug>_estimate][on_or_after]`, `filter_groups[conjunction]`
- `GET /api/inbound-shipments` — List Inbound Shipments
  - new parameter(s): `filter[logistics_<slug>_actual][is_empty]`, `filter[logistics_<slug>_estimate][on_or_after]`, `filter_groups[conjunction]`
- `GET /api/purchase-orders/list` — List Purchase Orders (Vue3 List)
  - new parameter(s): `filter[logistics_<slug>_actual][on_or_before]`, `filter[logistics_<slug>_estimate][on_or_after]`

_Spec version 1.0.0 → 1.0.0._
