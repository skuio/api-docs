---
title: API changes — 2026-10-11
description: This release includes 14 additions.
authors: [product-team]
tags: [added]
date: 2026-10-11
---

This release includes 14 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Alerts
- `PUT /api/alerts/{alert}/snooze` — Snooze Alert

### Metrics
- `GET /api/channel-health/metrics` — List Channel Health Metrics
- `GET /api/channel-health/metrics/{metric}/orders` — List Orders Behind a Channel Health Metric
- `GET /api/channel-health/snapshots` — List Channel Health Snapshots
- `GET /api/channel-health/summary` — Get Channel Health Summary

### PayPal
- `POST /api/paypal-payment-links/{id}/email` — Email PayPal Pay Link
- `POST /api/paypal/integrations/{id}/api-keys` — Connect PayPal With API Keys
- `POST /api/sales-orders/{salesOrderId}/paypal-payment-links` — Create PayPal Pay Link

### Refresh
- `POST /api/channel-health/refresh` — Refresh Channel Health

### Shipment Flags
- `GET /api/channel-health/flags` — List Channel Health Flags
- `POST /api/channel-health/flags/{flag}/correct-carrier` — Correct Channel Health Flag Carrier
- `PATCH /api/channel-health/flags/{flag}/dismiss` — Dismiss Channel Health Flag

### Thresholds
- `GET /api/channel-health/thresholds` — List Channel Health Thresholds
- `PUT /api/channel-health/thresholds` — Update Channel Health Thresholds

_Spec version 1.0.0 → 1.0.0._
