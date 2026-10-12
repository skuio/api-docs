---
title: API changes — 2026-10-12
description: This release includes 52 additions, 3 changes, 1 removal. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-10-12
---

This release includes 52 additions, 3 changes, 1 removal. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### 3PL
- **Removed** `POST /api/3pl/orders/fulfillmentOrder/acknowledge` — Acknowledge Order

## Added

### 3PL
- `POST /api/3pl/orders/{fulfillmentOrder}/acknowledge` — Acknowledge Order

### Applications
- `GET /api/admin/portal/applications/{application}/resale-certificate` — Download Resale Certificate

### PayPal
- `POST /api/paypal-payment-links/{id}/cancel` — Cancel PayPal Pay Link
- `GET /api/paypal-payment-links/{id}/email-preview` — Preview PayPal Pay Link Email
- `POST /api/paypal/captures/{captureId}/refund` — Refund PayPal Payment
- `DELETE /api/paypal/integrations/{id}` — Delete PayPal Integration
- `PATCH /api/paypal/integrations/{id}` — Rename PayPal Integration
- `DELETE /api/paypal/integrations/{id}/transactions/{transactionId}/review` — Unmark PayPal Transaction Reviewed
- `POST /api/paypal/integrations/{id}/transactions/{transactionId}/review` — Mark PayPal Transaction Reviewed
- `GET /api/sales-orders/{salesOrderId}/paypal-payment-links` — List Sales Order PayPal Pay Links
- `POST /api/sales-orders/{salesOrderId}/paypal-payment-links/email-preview` — Preview New PayPal Pay Link Email

### Pinnacle
- `POST /api/pinnacle/instances` — Create Integration Instance
- `DELETE /api/pinnacle/instances/{instance}` — Delete Integration Instance
- `GET /api/pinnacle/instances/{instance}` — Get Integration Instance
- `PUT /api/pinnacle/instances/{instance}` — Update Integration Instance
- `GET /api/pinnacle/instances/{instance}/dashboard` — Get Dashboard
- `GET /api/pinnacle/instances/{instance}/delivery-types` — List Delivery Type Mappings
- `PUT /api/pinnacle/instances/{instance}/delivery-types` — Update Delivery Type Mappings
- `POST /api/pinnacle/instances/{instance}/delivery-types/auto-match` — Auto-Match Delivery Types
- `PUT /api/pinnacle/instances/{instance}/delivery-types/bulk` — Bulk Map Delivery Types
- `GET /api/pinnacle/instances/{instance}/delivery-types/export` — Export Delivery Type Mappings (CSV)
- `POST /api/pinnacle/instances/{instance}/delivery-types/import` — Import Delivery Type Mappings (CSV)
- `GET /api/pinnacle/instances/{instance}/orders` — List Orders
- `GET /api/pinnacle/instances/{instance}/orders/{order}` — Get Order
- `GET /api/pinnacle/instances/{instance}/orders/{order}/activity` — List Order Activity
- `POST /api/pinnacle/instances/{instance}/orders/{order}/cancel` — Cancel Order
- `GET /api/pinnacle/instances/{instance}/orders/{order}/raw` — Get Order Raw Payloads
- `POST /api/pinnacle/instances/{instance}/orders/{order}/refresh` — Refresh Order Tracking
- `GET /api/pinnacle/instances/{instance}/shipments` — List Shipments
- `GET /api/pinnacle/instances/{instance}/shipments/{shipment}` — Get Shipment
- `GET /api/pinnacle/instances/{instance}/shipments/{shipment}/pods/{index}` — Download Proof of Delivery
- `GET /api/pinnacle/instances/{instance}/sync-info` — Get Sync Info
- `POST /api/pinnacle/instances/{instance}/sync/orders` — Sync Orders
- `POST /api/pinnacle/instances/{instance}/sync/pods` — Sync Proofs of Delivery
- `POST /api/pinnacle/instances/{instance}/sync/tracking` — Sync Tracking
- `POST /api/pinnacle/instances/{instance}/test-connection` — Test Instance Connection
- `GET /api/pinnacle/instances/{instance}/warehouses` — List Origin Warehouses
- `PUT /api/pinnacle/instances/{instance}/warehouses` — Update Origin Warehouse
- `GET /api/pinnacle/instances/{instance}/webhook` — Get Webhook Endpoint
- `GET /api/pinnacle/instances/{instance}/webhook-events` — List Webhook Events
- `GET /api/pinnacle/instances/{instance}/webhook-events/{webhookEvent}` — Get Webhook Event
- `GET /api/pinnacle/instances/{instance}/webhook-events/{webhookEvent}/raw` — Get Webhook Event Raw Body
- `POST /api/pinnacle/instances/{instance}/webhook/rotate-key` — Rotate Webhook Key
- `GET /api/pinnacle/options` — Get Connection Options
- `POST /api/pinnacle/test` — Test Connection Credentials
- `POST /webhooks/pinnacle/{webhook_token}` — Receive Tracking Webhook

### Trackstar
- `POST /api/trackstar/integration-instances/{integration_instance}/products/push` — Push Products to WMS
- `GET /api/trackstar/integration-instances/{integration_instance}/products/push/capability` — Get Product Push Capability
- `GET /api/trackstar/integration-instances/{integration_instance}/products/pushable` — List Pushable SKU Products

### Warehouses
- `GET /api/warehouses/{warehouse}/provider-routing-rules` — Get Warehouse Provider Routing Rules
- `PUT /api/warehouses/{warehouse}/provider-routing-rules` — Replace Warehouse Provider Routing Rules
- `POST /api/warehouses/{warehouse}/provider-routing-rules/preview` — Preview Warehouse Provider Routing Rules

## Changed

### Sales Credits
- `DELETE /api/sales-credits/{salesCredit}/payments/{payment}` — Delete Payment
  - new response code(s): `422`
- `DELETE /api/sales-credits/{sales_credit}` — Delete Sales Credit
  - new response code(s): `422`

### Sales Orders
- `POST /api/sales-orders/{salesOrder}/mark-for-pickup` — Mark Sales Order for Pickup
  - new response code(s): `409`

_Spec version 1.0.0 → 1.0.0._
