---
title: API changes — 2026-11-13
description: This release includes 36 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-11-13
---

This release includes 36 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Fulfillment Orders
- `GET /api/fulfillment-orders/export/download` — Download Fulfillment Orders Export

### Ledger (Accounting v2)
- `GET /api/ledger/gift-card-breakage` — Get Gift Card Breakage
- `PUT /api/ledger/gift-card-breakage` — Update Gift Card Breakage Policy
- `POST /api/ledger/gift-card-breakage/record` — Record Gift Card Breakage

### Pick Lists
- `GET /api/v2/pick-lists/mpn-brands` — List MPN Pick Brands
- `PUT /api/v2/pick-lists/mpn-brands` — Update MPN Pick Brands

### Shiptheory
- `POST /api/shiptheory` — Create Shiptheory Instance
- `POST /api/shiptheory/test-connection` — Test Shiptheory Connection
- `DELETE /api/shiptheory/{integration_instance}` — Delete Shiptheory Instance
- `GET /api/shiptheory/{integration_instance}` — Get Shiptheory Instance
- `PUT /api/shiptheory/{integration_instance}` — Update Shiptheory Instance
- `GET /api/shiptheory/{integration_instance}/activity-log` — List Shiptheory Activity Log
- `GET /api/shiptheory/{integration_instance}/dashboard` — Get Shiptheory Dashboard Metrics
- `GET /api/shiptheory/{integration_instance}/delivery-services` — List Shiptheory Delivery Services
- `POST /api/shiptheory/{integration_instance}/delivery-services/auto-match` — Auto-Match Shiptheory Delivery Services
- `POST /api/shiptheory/{integration_instance}/delivery-services/bulk-map` — Bulk Map Shiptheory Delivery Services
- `GET /api/shiptheory/{integration_instance}/delivery-services/export-csv` — Export Shiptheory Delivery Service Mappings CSV
- `POST /api/shiptheory/{integration_instance}/delivery-services/import-csv` — Import Shiptheory Delivery Service Mappings CSV
- `POST /api/shiptheory/{integration_instance}/delivery-services/sync` — Sync Shiptheory Delivery Services
- `PUT /api/shiptheory/{integration_instance}/delivery-services/{service}/mapping` — Map Shiptheory Delivery Service
- `GET /api/shiptheory/{integration_instance}/orders` — List Shiptheory Orders
- `POST /api/shiptheory/{integration_instance}/orders/sync` — Sync Shiptheory Orders
- `GET /api/shiptheory/{integration_instance}/orders/{order}` — Get Shiptheory Order
- `GET /api/shiptheory/{integration_instance}/orders/{order}/label` — Get Shiptheory Order Label
- `GET /api/shiptheory/{integration_instance}/orders/{order}/raw` — Get Shiptheory Order Raw JSON
- `GET /api/shiptheory/{integration_instance}/package-sizes` — List Shiptheory Package Sizes
- `POST /api/shiptheory/{integration_instance}/package-sizes/sync` — Sync Shiptheory Package Sizes
- `GET /api/shiptheory/{integration_instance}/shipments` — List Shiptheory Shipments
- `POST /api/shiptheory/{integration_instance}/shipments/sync` — Sync Shiptheory Shipments
- `GET /api/shiptheory/{integration_instance}/shipments/{shipment}` — Get Shiptheory Shipment
- `GET /api/shiptheory/{integration_instance}/shipments/{shipment}/label` — Get Shiptheory Shipment Label
- `GET /api/shiptheory/{integration_instance}/shipments/{shipment}/raw` — Get Shiptheory Shipment Raw JSON
- `POST /api/shiptheory/{integration_instance}/test-connection` — Test Saved Shiptheory Connection
- `GET /api/shiptheory/{integration_instance}/warehouses` — List Shiptheory Warehouse Mappings
- `PUT /api/shiptheory/{integration_instance}/warehouses/{warehouse}/mapping` — Map Shiptheory Warehouse

### Shopify
- `PUT /api/shopify/{integrationInstance}/payment-method-mappings/hold-setting` — Update Unmapped Gateway Hold Setting

## Changed

### Fulfillment Orders
- `GET /api/fulfillment-orders/export` — Export Fulfillment Orders
  - new response code(s): `200`

_Spec version 1.0.0 → 1.0.0._
