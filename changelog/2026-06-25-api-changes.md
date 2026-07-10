---
title: API changes — 2026-06-25
description: This release includes 43 additions.
authors: [product-team]
tags: [added]
date: 2026-06-25
---

This release includes 43 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Fulfillment Orders
- `PUT /api/fulfillment-orders/{fulfillmentOrder}/mark-picked-up` — Mark Fulfillment Order Picked Up
- `PUT /api/fulfillment-orders/{fulfillmentOrder}/unmark-picked-up` — Unmark Fulfillment Order Picked Up

### Fulfillments
- `GET /api/sales-orders/{salesOrder}/provider-fulfillment-snapshots` — Get Provider Fulfillment Snapshots

### Returns
- `POST /api/walmart/{integrationInstance}/returns/{return}/refund` — Refund Return

### Shipping Providers
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/orders/{order}/activity-log` — Get Order Activity Log
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/shipments` — List Shipments
- `POST //{domain}/api/shiphero/integration-instances/{integration_instance}/shipments/sync` — Sync Shipments
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/shipments/sync-info` — Get Shipments Sync Info
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/shipments/{shipment}` — Get Shipment
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/orders/{order}/activity-log` — Get Order Activity Log

### WFS
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}` — Portal — Get WFS Fulfilment Order (public, token-gated)
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/acknowledge` — Portal — Acknowledge Ready to Ship (public)
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/box-contents` — Portal — Submit WFS Box Contents (public)
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/documents/{document}/download` — Portal — Download WFS Fulfilment Document (public)
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/kits-built` — Portal — Mark Kits Built (public)
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/preview` — Preview WFS Inbound Shipment
- `DELETE /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}` — Cancel WFS Inbound Shipment
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/activity-log` — Get WFS Inbound Activity Log
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/allocations` — Get WFS Inbound Allocations
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/carrier-label` — Print WFS Inbound Carrier Label
- `DELETE /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/carrier-rate-quote` — Void WFS Inbound Carrier Rate Quote
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/carrier-rate-quote/confirm` — Confirm WFS Inbound Carrier Rate Quote
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/carrier-rate-quotes` — Get WFS Inbound Carrier Rate Quotes
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/errors` — Get WFS Inbound Shipment Errors
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/fulfillment` — Get WFS Inbound Fulfilment Packet
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/fulfillment` — Build WFS Inbound Fulfilment Packet
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/fulfillment/rotate-token` — Rotate WFS Inbound Fulfilment Portal Token
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/items` — Get WFS Inbound Shipment Items
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/label` — Download WFS Inbound Shipment Label
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/placement-preview` — Estimate WFS Inbound Placement Charges
- `PUT /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/quantities` — Update WFS Inbound Shipment Quantities
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/reconciliation` — Get WFS Inbound Reconciliation
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/reconciliation/resolve` — Resolve WFS Inbound Discrepancy
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/suggested-package` — Get WFS Inbound Suggested Package
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/tracking` — Submit WFS Inbound Shipment Tracking
- `GET /api/walmart/{integrationInstance}/wfs/inventory/compliance-holds` — WFS Compliance Holds
- `GET /api/walmart/{integrationInstance}/wfs/inventory/health-report` — WFS Inventory Health Report
- `GET /api/walmart/{integrationInstance}/wfs/inventory/log` — WFS Inventory Log
- `GET /api/walmart/{integrationInstance}/wfs/mcf-orders` — List MCF Orders
- `GET /api/walmart/{integrationInstance}/wfs/mcf-orders/{mcfOrder}` — Get MCF Order
- `POST /api/walmart/{integrationInstance}/wfs/mcf-orders/{mcfOrder}/cancel` — Cancel MCF Order
- `POST /api/walmart/{integrationInstance}/wfs/mcf-orders/{mcfOrder}/promise-options` — MCF Order Promise Options
- `POST /api/walmart/{integrationInstance}/wfs/mcf-orders/{mcfOrder}/sync-status` — Sync MCF Order Status

_Spec version 1.0.0 → 1.0.0._
