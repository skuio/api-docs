---
title: API changes — 2026-05-15
description: This release 1 added, 1 changed API endpoint(s).
authors: [product-team]
tags: [added, changed]
date: 2026-05-15
---

This release 1 added, 1 changed API endpoint(s).

<!-- truncate -->

## Added

- `POST /api/warehouses/transfers/{transfer}/receiving-discrepancy` — Create Receiving Discrepancy

## Changed

- `GET /api/amazon/unified/awd/ledgers` — List AWD Ledgers
  - new parameter(s): filter[event_type], filter[has_provisional_cogs], filter[link_status], filter[reconciled], filter[search], integration_instance_ids, sort

_Spec version 1.0.0 → 1.0.0._
