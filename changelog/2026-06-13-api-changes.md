---
title: API changes — 2026-06-13
description: This release 13 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-13
---

This release 13 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/api-shipping-providers/inbound-events/bulk-delete` — Bulk Delete Events
- `DELETE /api/api-shipping-providers/{provider-id}` — Delete Provider
- `DELETE /api/api-shipping-providers/{provider-id}/inbound-events/delete-all` — Delete All Events for Instance
- `DELETE /api/api-shipping-providers/{provider-id}/tokens/{token-id}` — Revoke Token
- `GET /api/api-shipping-providers/inbound-events/{event-id}` — Show Inbound Event
- `GET /api/api-shipping-providers/{provider-id}` — Show Provider
- `GET /api/api-shipping-providers/{provider-id}/dashboard` — Get Dashboard Stats
- `GET /api/api-shipping-providers/{provider-id}/inbound-events` — List Inbound Events (Paginated)
- `GET /api/api-shipping-providers/{provider-id}/inbound-events/stats` — Get Inbound Event Stats
- `GET /api/api-shipping-providers/{provider-id}/tokens` — List Tokens
- `POST /api/api-shipping-providers` — Create Provider
- `POST /api/api-shipping-providers/{provider-id}/tokens` — Generate Token
- `PUT /api/api-shipping-providers/{provider-id}` — Update Provider

_Spec version 1.0.0 → 1.0.0._
