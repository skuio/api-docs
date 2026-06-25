---
title: API changes — 2026-06-25
description: This release 34 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-25
---

This release 34 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}` — Cancel WFS Inbound Shipment
- `DELETE /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/carrier-rate-quote` — Void WFS Inbound Carrier Rate Quote
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}` — Portal — Get WFS Fulfilment Order (public, token-gated)
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/documents/{document}/download` — Portal — Download WFS Fulfilment Document (public)
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/activity-log` — Get WFS Inbound Activity Log
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/allocations` — Get WFS Inbound Allocations
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/errors` — Get WFS Inbound Shipment Errors
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/fulfillment` — Get WFS Inbound Fulfilment Packet
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/items` — Get WFS Inbound Shipment Items
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/label` — Download WFS Inbound Shipment Label
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/placement-preview` — Estimate WFS Inbound Placement Charges
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/reconciliation` — Get WFS Inbound Reconciliation
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/suggested-package` — Get WFS Inbound Suggested Package
- `GET /api/walmart/{integrationInstance}/wfs/inventory/compliance-holds` — WFS Compliance Holds
- `GET /api/walmart/{integrationInstance}/wfs/inventory/health-report` — WFS Inventory Health Report
- `GET /api/walmart/{integrationInstance}/wfs/inventory/log` — WFS Inventory Log
- `GET /api/walmart/{integrationInstance}/wfs/mcf-orders` — List MCF Orders
- `GET /api/walmart/{integrationInstance}/wfs/mcf-orders/{mcfOrder}` — Get MCF Order
- `POST /api/walmart/{integrationInstance}/returns/{return}/refund` — Refund Return
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/acknowledge` — Portal — Acknowledge Ready to Ship (public)
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/box-contents` — Portal — Submit WFS Box Contents (public)
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/kits-built` — Portal — Mark Kits Built (public)
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/preview` — Preview WFS Inbound Shipment
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/carrier-label` — Print WFS Inbound Carrier Label
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/carrier-rate-quote/confirm` — Confirm WFS Inbound Carrier Rate Quote
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/carrier-rate-quotes` — Get WFS Inbound Carrier Rate Quotes
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/fulfillment` — Build WFS Inbound Fulfilment Packet
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/fulfillment/rotate-token` — Rotate WFS Inbound Fulfilment Portal Token
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/reconciliation/resolve` — Resolve WFS Inbound Discrepancy
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/tracking` — Submit WFS Inbound Shipment Tracking
- `POST /api/walmart/{integrationInstance}/wfs/mcf-orders/{mcfOrder}/cancel` — Cancel MCF Order
- `POST /api/walmart/{integrationInstance}/wfs/mcf-orders/{mcfOrder}/promise-options` — MCF Order Promise Options
- `POST /api/walmart/{integrationInstance}/wfs/mcf-orders/{mcfOrder}/sync-status` — Sync MCF Order Status
- `PUT /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/quantities` — Update WFS Inbound Shipment Quantities

_Spec version 1.0.0 → 1.0.0._
