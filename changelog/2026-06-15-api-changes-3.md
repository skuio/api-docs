---
title: API changes — 2026-06-15
description: This release 3 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-15
---

This release 3 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE //{domain}/api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/reconcile-pretracking` — Undo Reconcile Pre-Tracking (Straddle)
- `POST //{domain}/api/amazon/{integrationInstance}/removal-orders/backfill-straddle` — Backfill Straddle Removals (One-Time Repair)
- `POST //{domain}/api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/reconcile-pretracking` — Reconcile Pre-Tracking Units (Straddle)

_Spec version 1.0.0 → 1.0.0._
