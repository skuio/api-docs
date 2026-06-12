---
title: API changes — 2026-06-12
description: This release 4 added, 17 removed API endpoint(s).
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-06-12
---

This release 4 added, 17 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `DELETE /api/bills` — Bulk Delete Bills
- `GET /api/bills/1/line-items` — Get Bill Line Items
- `GET /api/bills/list` — List Bills
- `GET /api/bills/list/export` — Export Bills

## Removed

- `DELETE //{domain}/api/financial-line-types` — Bulk Delete Financial Line Types **(breaking)**
- `DELETE //{domain}/api/financial-line-types/{financial_line_type}` — Delete Financial Line Type **(breaking)**
- `DELETE //{domain}/api/payment-terms` — Bulk Delete Payment Terms **(breaking)**
- `DELETE //{domain}/api/payment-terms/3` — Delete Payment Term **(breaking)**
- `GET //{domain}/api/financial-line-types` — List Financial Line Types **(breaking)**
- `GET //{domain}/api/financial-line-types/{financial_line_type}` — Show Financial Line Type **(breaking)**
- `GET //{domain}/api/payment-terms` — List Payment Terms **(breaking)**
- `GET //{domain}/api/payment-terms/1` — Show Payment Term **(breaking)**
- `POST //{domain}/api/financial-line-types` — Create Financial Line Type **(breaking)**
- `POST //{domain}/api/payment-terms` — Create Payment Term **(breaking)**
- `POST //{domain}/api/payment-terms/deletable` — Check Deletable **(breaking)**
- `PUT //{domain}/api/financial-line-types/{financial_line_type}` — Update Financial Line Type **(breaking)**
- `PUT //{domain}/api/payment-terms/1/archive` — Archive Payment Term **(breaking)**
- `PUT //{domain}/api/payment-terms/1/unarchived` — Unarchive Payment Term **(breaking)**
- `PUT //{domain}/api/payment-terms/3` — Update Payment Term **(breaking)**
- `PUT //{domain}/api/payment-terms/archive` — Bulk Archive Payment Terms **(breaking)**
- `PUT //{domain}/api/payment-terms/unarchive` — Bulk Unarchive Payment Terms **(breaking)**

_Spec version 1.0.0 → 1.0.0._
