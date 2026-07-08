---
name: subscribe-to-webhooks
title: Subscribe to SKU.io webhooks
description: Register a webhook endpoint, choose event types, and consume pushed events instead of polling.
provider: SKU.io
guide: https://developer.sku.io/docs/guides/webhooks
event_catalog: https://developer.sku.io/webhooks/events.json
---

# Subscribe to SKU.io webhooks

Get pushed events (order created, shipment dispatched, inventory changed) instead of polling. Base URL `https://{tenant}.sku.io`; `Authorization: Bearer <token>` + `Accept: application/json`.

## Steps

1. **Discover event types** — `GET /api/webhook-events` lists every event you can subscribe to. The full payload envelope, signing, and delivery semantics are in the catalog `https://developer.sku.io/webhooks/events.json`.
2. **Create a subscription** — `POST /api/webhooks` with your receiver `url` and the event type(s) to subscribe to.
3. **List / manage** — `GET /api/webhooks` to see current subscriptions.
4. **Verify each delivery** — validate the signature on the incoming request against your subscription's secret before trusting the payload. See the [Webhooks guide](https://developer.sku.io/docs/guides/webhooks) for the signing scheme.

## Consuming deliveries — critical

- Your receiver must respond `2xx` quickly and do heavy work asynchronously; slow receivers get retried and may be disabled.
- Deliveries can arrive out of order and more than once — treat handlers as idempotent (key on the event id).
- Do **not** call paths under `/webhooks/` or `/api/webhooks/*/{token}` yourself — those are inbound receivers for platform callbacks, not client-callable endpoints.

## Reference

- Guide: https://developer.sku.io/docs/guides/webhooks
- Event catalog: https://developer.sku.io/webhooks/events.json
- Endpoints: https://developer.sku.io/docs/api/get-api-webhook-events , https://developer.sku.io/docs/api/post-api-webhooks , https://developer.sku.io/docs/api/get-api-webhooks
