---
title: API changes — 2026-05-27
description: This release 6 added, 2 changed API endpoint(s).
authors: [product-team]
tags: [added, changed]
date: 2026-05-27
---

This release 6 added, 2 changed API endpoint(s).

<!-- truncate -->

## Added

- `GET /api/fulfillment-orders/{fulfillmentOrder}` — Get Fulfillment Order Detail
- `GET /api/sales-orders/{salesOrder}/fulfillment-orders` — List Fulfillment Orders for a Sales Order
- `PATCH /api/fulfillment-orders/{fulfillmentOrder}/move` — Move Fulfillment Order to Different Warehouse
- `POST /api/fulfillment-orders` — Create Fulfillment Order
- `POST /api/fulfillment-orders/{fulfillmentOrder}/cancel` — Cancel Fulfillment Order
- `POST /api/fulfillment-orders/{fulfillmentOrder}/submit` — Submit Fulfillment Order to Provider

## Changed

- `POST /api/supplier-inventories/5/import` — Execute Import
  - new response code(s): 202
  - removed response code(s): 201
- `POST /api/supplier-inventories/5/import/validate` — Validate Import
  - new response code(s): 422

_Spec version 1.0.0 → 1.0.0._
