---
title: API changes — 2026-05-27
description: This release includes 7 additions, 2 changes, 33 removals. 33 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-05-27
---

This release includes 7 additions, 2 changes, 33 removals. 33 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Jobs & Logs
- **Removed** `GET //{domain}/api/tracked-job-logs` — List Tracked Job Logs
- **Removed** `POST //{domain}/api/tracked-job-logs` — Create Tracked Job Log
- **Removed** `GET //{domain}/api/tracked-job-logs/retry/{trackedJobLog}` — Retry Job
- **Removed** `DELETE //{domain}/api/tracked-job-logs/{tracked_job_log}` — Delete Tracked Job Log
- **Removed** `GET //{domain}/api/tracked-job-logs/{tracked_job_log}` — Show Tracked Job Log
- **Removed** `PUT //{domain}/api/tracked-job-logs/{tracked_job_log}` — Update Tracked Job Log

#### Tags
- **Removed** `DELETE //{domain}/api/tags` — Bulk Delete Tags
- **Removed** `GET //{domain}/api/tags` — List Tags
- **Removed** `POST //{domain}/api/tags` — Create Tag
- **Removed** `GET //{domain}/api/tags/1` — Show Tag
- **Removed** `PUT //{domain}/api/tags/1/archive` — Archive Tag
- **Removed** `PUT //{domain}/api/tags/1/unarchived` — Unarchive Tag
- **Removed** `DELETE //{domain}/api/tags/5` — Delete Tag
- **Removed** `PUT //{domain}/api/tags/5` — Update Tag
- **Removed** `PUT //{domain}/api/tags/archive` — Bulk Archive Tags
- **Removed** `POST //{domain}/api/tags/deletable` — Check Deletable
- **Removed** `POST //{domain}/api/tags/import` — Import Tags
- **Removed** `POST //{domain}/api/tags/import/preview` — Preview Import Tags
- **Removed** `PUT //{domain}/api/tags/unarchive` — Bulk Unarchive Tags

#### UI Utilities
- **Removed** `GET //{domain}/api/table-views` — List Table Views
- **Removed** `POST //{domain}/api/table-views` — Create Table View
- **Removed** `PUT //{domain}/api/table-views/set-default-view/{viewId}` — Set Default View
- **Removed** `DELETE //{domain}/api/table-views/{table_view}` — Delete Table View
- **Removed** `GET //{domain}/api/table-views/{table_view}` — Get Table View
- **Removed** `PUT //{domain}/api/table-views/{table_view}` — Update Table View

#### Users
- **Removed** `GET //{domain}/api/users` — List Users (DataTable)
- **Removed** `POST //{domain}/api/users` — Register User (Self-registration)
- **Removed** `GET //{domain}/api/users/list` — Get User Lookup List
- **Removed** `POST //{domain}/api/users/store-user` — Invite User
- **Removed** `DELETE //{domain}/api/users/{user}` — Delete (Deactivate) / Restore User
- **Removed** `GET //{domain}/api/users/{user}` — Show User
- **Removed** `PUT //{domain}/api/users/{user}` — Update User
- **Removed** `POST /api/users` — Register User (Self-registration)

## Added

### Fulfillment Orders
- `POST /api/fulfillment-orders` — Create Fulfillment Order
- `GET /api/fulfillment-orders/{fulfillmentOrder}` — Get Fulfillment Order Detail
- `POST /api/fulfillment-orders/{fulfillmentOrder}/cancel` — Cancel Fulfillment Order
- `PATCH /api/fulfillment-orders/{fulfillmentOrder}/move` — Move Fulfillment Order to Different Warehouse
- `POST /api/fulfillment-orders/{fulfillmentOrder}/submit` — Submit Fulfillment Order to Provider
- `GET /api/sales-orders/{salesOrder}/fulfillment-orders` — List Fulfillment Orders for a Sales Order

### Misc
- `GET /api/low-stock-items/export` — Export Low Stock Items

## Changed

### Suppliers
- `POST /api/supplier-inventories/5/import` — Execute Import
  - new response code(s): `202`
  - removed response code(s): `201`
- `POST /api/supplier-inventories/5/import/validate` — Validate Import
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
