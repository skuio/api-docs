---
title: API changes — 2026-06-21
description: This release 1 added, 1 removed API endpoint(s).
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-06-21
---

This release 1 added, 1 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/allocations` — List Plan Allocations

## Removed

- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/create-warehouse-transfer` — Create Warehouse Transfer **(breaking)**

_Spec version 1.0.0 → 1.0.0._
