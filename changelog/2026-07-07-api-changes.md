---
title: API changes — 2026-07-07
description: This release 1 added, 1 removed API endpoint(s).
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-07-07
---

This release 1 added, 1 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/packing/submit` — Submit Packing Information

## Removed

- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/packing-groups/{packing_group}/submit` — Submit Packing Group **(breaking)**

_Spec version 1.0.0 → 1.0.0._
