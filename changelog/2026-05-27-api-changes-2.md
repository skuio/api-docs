---
title: API changes — 2026-05-27
description: This release 1 added, 33 removed API endpoint(s).
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-05-27
---

This release 1 added, 33 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `GET /api/low-stock-items/export` — Export Low Stock Items

## Removed

- `DELETE //{domain}/api/table-views/{table_view}` — Delete Table View **(breaking)**
- `DELETE //{domain}/api/tags` — Bulk Delete Tags **(breaking)**
- `DELETE //{domain}/api/tags/5` — Delete Tag **(breaking)**
- `DELETE //{domain}/api/tracked-job-logs/{tracked_job_log}` — Delete Tracked Job Log **(breaking)**
- `DELETE //{domain}/api/users/{user}` — Delete (Deactivate) / Restore User **(breaking)**
- `GET //{domain}/api/table-views` — List Table Views **(breaking)**
- `GET //{domain}/api/table-views/{table_view}` — Get Table View **(breaking)**
- `GET //{domain}/api/tags` — List Tags **(breaking)**
- `GET //{domain}/api/tags/1` — Show Tag **(breaking)**
- `GET //{domain}/api/tracked-job-logs` — List Tracked Job Logs **(breaking)**
- `GET //{domain}/api/tracked-job-logs/retry/{trackedJobLog}` — Retry Job **(breaking)**
- `GET //{domain}/api/tracked-job-logs/{tracked_job_log}` — Show Tracked Job Log **(breaking)**
- `GET //{domain}/api/users` — List Users (DataTable) **(breaking)**
- `GET //{domain}/api/users/list` — Get User Lookup List **(breaking)**
- `GET //{domain}/api/users/{user}` — Show User **(breaking)**
- `POST //{domain}/api/table-views` — Create Table View **(breaking)**
- `POST //{domain}/api/tags` — Create Tag **(breaking)**
- `POST //{domain}/api/tags/deletable` — Check Deletable **(breaking)**
- `POST //{domain}/api/tags/import` — Import Tags **(breaking)**
- `POST //{domain}/api/tags/import/preview` — Preview Import Tags **(breaking)**
- `POST //{domain}/api/tracked-job-logs` — Create Tracked Job Log **(breaking)**
- `POST //{domain}/api/users` — Register User (Self-registration) **(breaking)**
- `POST //{domain}/api/users/store-user` — Invite User **(breaking)**
- `POST /api/users` — Register User (Self-registration) **(breaking)**
- `PUT //{domain}/api/table-views/set-default-view/{viewId}` — Set Default View **(breaking)**
- `PUT //{domain}/api/table-views/{table_view}` — Update Table View **(breaking)**
- `PUT //{domain}/api/tags/1/archive` — Archive Tag **(breaking)**
- `PUT //{domain}/api/tags/1/unarchived` — Unarchive Tag **(breaking)**
- `PUT //{domain}/api/tags/5` — Update Tag **(breaking)**
- `PUT //{domain}/api/tags/archive` — Bulk Archive Tags **(breaking)**
- `PUT //{domain}/api/tags/unarchive` — Bulk Unarchive Tags **(breaking)**
- `PUT //{domain}/api/tracked-job-logs/{tracked_job_log}` — Update Tracked Job Log **(breaking)**
- `PUT //{domain}/api/users/{user}` — Update User **(breaking)**

_Spec version 1.0.0 → 1.0.0._
