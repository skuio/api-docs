---
title: API changes — 2026-06-05
description: This release 1 changed, 1 removed API endpoint(s).
authors: [product-team]
tags: [changed, removed, breaking]
date: 2026-06-05
---

This release 1 changed, 1 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Changed

- `POST //{domain}/api/shopify/install/{claimToken}/claim` — Claim Install (Attach to Existing Workspace)
  - new response code(s): `401`, `404`
  - removed response code(s): `202`

## Removed

- `GET //{domain}/api/shopify/install/{claimToken}/status` — Poll Claim Status **(breaking)**

_Spec version 1.0.0 → 1.0.0._
