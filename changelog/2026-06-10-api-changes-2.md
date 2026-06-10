---
title: API changes — 2026-06-10
description: This release 4 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-10
---

This release 4 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE //{domain}/api/amazon/instances/{integrationInstance}/notification-subscriptions` — Tear Down All Subscriptions
- `GET //{domain}/api/amazon/instances/{integrationInstance}/notification-subscriptions` — List Notification Subscriptions (with health)
- `GET //{domain}/api/amazon/notification-events` — List Notification Events (audit log, paginated)
- `POST //{domain}/api/amazon/instances/{integrationInstance}/notification-subscriptions/resync` — Resync (Reconcile) Subscriptions

_Spec version 1.0.0 → 1.0.0._
