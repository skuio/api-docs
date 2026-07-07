---
title: API changes — 2026-07-07
description: This release 8 added, 17 changed, 8 removed API endpoint(s).
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-07-07
---

This release 8 added, 17 changed, 8 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `DELETE /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}` — Cancel Inbound Shipment
- `GET /api/walmart/{integrationInstance}/wfs/inbound-products` — Search Inbound Products
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments` — List Inbound Shipments
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}` — Get Inbound Shipment
- `GET /api/walmart/{integrationInstance}/wfs/source-warehouses` — List Source Warehouses
- `POST /api/walmart/{integrationInstance}/wfs/inbound-products/resolve` — Resolve Inbound Identifiers (Bulk)
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments` — Create WFS Inbound Shipment
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/refresh-tracked` — Refresh Shipments (Tracked Job)

## Changed

- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}` — Portal: View Packet
  - new parameter(s): `domain`
  - new response code(s): `404`
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/documents/{document}/download` — Portal: Download Document
  - new parameter(s): `domain`
  - new response code(s): `422`
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/activity-log` — Get Activity Log **(breaking)**
  - new parameter(s): `domain`
  - removed parameter(s): `Authorization`
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/allocations` — List Source Allocations **(breaking)**
  - new parameter(s): `domain`
  - removed parameter(s): `Authorization`
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/fulfillment` — Get Fulfillment Packet **(breaking)**
  - new parameter(s): `domain`
  - removed parameter(s): `Authorization`
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/items` — Get Shipment Items **(breaking)**
  - new parameter(s): `domain`
  - removed parameter(s): `Authorization`
  - removed response code(s): `422`
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/label` — Get Inbound Shipment Label **(breaking)**
  - new parameter(s): `domain`
  - removed parameter(s): `Authorization`
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/placement-preview` — Get Placement Preview **(breaking)**
  - new parameter(s): `domain`
  - removed parameter(s): `Authorization`
  - removed response code(s): `422`
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/reconciliation` — Get Reconciliation **(breaking)**
  - new parameter(s): `domain`
  - removed parameter(s): `Authorization`
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/acknowledge` — Portal: Acknowledge
  - new parameter(s): `Content-Type`, `domain`
  - new response code(s): `422`
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/box-contents` — Portal: Submit Box Contents
  - new parameter(s): `domain`
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/kits-built` — Portal: Confirm Kits Built
  - new parameter(s): `Content-Type`, `domain`
  - new response code(s): `422`
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/carrier-rate-quotes` — Get Carrier Rate Quotes **(breaking)**
  - new parameter(s): `domain`
  - removed parameter(s): `Authorization`
  - removed response code(s): `422`
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/fulfillment` — Build/Update Fulfillment Packet **(breaking)**
  - new parameter(s): `domain`
  - removed parameter(s): `Authorization`
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/fulfillment/rotate-token` — Rotate Portal Token **(breaking)**
  - new parameter(s): `Content-Type`, `domain`
  - removed parameter(s): `Authorization`
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/reconciliation/resolve` — Resolve Discrepancy **(breaking)**
  - new parameter(s): `domain`
  - removed parameter(s): `Authorization`
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/source` — Set Source **(breaking)**
  - new parameter(s): `domain`
  - removed parameter(s): `Authorization`
  - removed response code(s): `422`

## Removed

- `DELETE /api/walmart/{id}/wfs/inbound-shipments/{id2}` — Cancel WFS Inbound Shipment **(breaking)**
- `GET /api/walmart/{id}/wfs/inbound-products` — Search WFS Inbound Products **(breaking)**
- `GET /api/walmart/{id}/wfs/inbound-shipments` — List WFS Inbound Shipments **(breaking)**
- `GET /api/walmart/{id}/wfs/inbound-shipments/{id2}` — Get WFS Inbound Shipment **(breaking)**
- `GET /api/walmart/{id}/wfs/source-warehouses` — WFS Source Warehouses **(breaking)**
- `POST /api/walmart/{id}/wfs/inbound-products/resolve` — Resolve WFS Inbound Identifiers **(breaking)**
- `POST /api/walmart/{id}/wfs/inbound-shipments` — Create WFS Inbound Shipment **(breaking)**
- `POST /api/walmart/{id}/wfs/inbound-shipments/refresh-tracked` — Refresh WFS Inbound Shipments **(breaking)**

_Spec version 1.0.0 → 1.0.0._
