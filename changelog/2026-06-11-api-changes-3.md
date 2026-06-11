---
title: API changes — 2026-06-11
description: This release 4 added, 1 removed API endpoint(s).
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-06-11
---

This release 4 added, 1 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `POST //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments/refresh-shipment` — Refresh Single Shipment
- `POST //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments/search` — Search Shipments
- `POST //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments/{shipment}/refresh` — Refresh Shipment From ShipStation
- `POST //{domain}/api/tiktok-shop/webhooks` — Receive Webhook (TikTok → SKU.io)

## Removed

- `GET /api/shipstation/integration-instances/{integrationInstance}/fulfillments` — List Fulfillments **(breaking)**

_Spec version 1.0.0 → 1.0.0._
