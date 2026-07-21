---
title: API changes — 2026-07-21
description: This release includes 47 additions.
authors: [product-team]
tags: [added]
date: 2026-07-21
---

This release includes 47 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Adjustments & Transfers
- `POST /api/v2/inventory-allocations/pull-stock` — Pull Stock To Line
- `GET /api/v2/inventory-allocations/pull-stock-donors` — List Pull-Stock Donors

### Fulfillment Orders
- `POST /api/fulfillment-orders/{fulfillmentOrder}/accept-discrepancy` — Accept Fulfillment Order Discrepancy
- `POST /api/fulfillment-orders/{fulfillmentOrder}/reopen-discrepancy` — Reopen Fulfillment Order Discrepancy

### Inventory Expiry & Shelf-Life
- `GET /api/inventory-expiry/lots/{fifoLayer}/write-off-impact` — Preview Lot Write-Off Impact

### Inventory Intelligence
- `GET /api/inventory-forecasting/accuracy` — List Forecast Accuracy
- `POST /api/inventory-forecasting/accuracy/evaluate` — Evaluate Forecast Accuracy
- `GET /api/inventory-forecasting/anomalies` — List Demand Anomalies
- `POST /api/inventory-forecasting/anomalies/bulk-resolve` — Bulk Resolve Demand Anomalies
- `POST /api/inventory-forecasting/anomalies/detect` — Detect Demand Anomalies
- `POST /api/inventory-forecasting/anomalies/{id}/resolve` — Resolve Demand Anomaly
- `GET /api/inventory-forecasting/promo-windows` — List Promo Windows
- `POST /api/inventory-forecasting/promo-windows` — Create Promo Window
- `DELETE /api/inventory-forecasting/promo-windows/{id}` — Delete Promo Window
- `GET /api/inventory-forecasting/promo-windows/{id}` — Get Promo Window
- `PUT /api/inventory-forecasting/promo-windows/{id}` — Update Promo Window
- `POST /api/inventory-forecasting/promo-windows/{id}/measure` — Measure Promo Lift
- `GET /api/inventory-forecasting/schedule-runs/{runId}/accuracy` — Get Run Forecast Accuracy
- `GET /api/inventory-forecasting/schedule-runs/{runId}/lines` — List Forecast Run Lines
- `POST /api/inventory-forecasting/schedule-runs/{runId}/lines` — Persist Forecast Run Lines
- `GET /api/inventory-forecasting/schedule-runs/{runId}/lines/{productId}` — Get Forecast Run Line

### Movement Composer
- `POST /api/v2/inventory/movements/composer` — Commit Movement
- `POST /api/v2/inventory/movements/preview-demotion-impact` — Preview Demotion Impact
- `POST /api/v2/inventory/movements/preview-release-impact` — Preview Release Impact

### Product Listings
- `POST /api/v2/listing-drafts/{draft}/preview-against-product` — Preview Draft Against Product

### Reporting
- `GET /api/reporting/irr/products/{product}/cash-flows` — Get Product Cash-Flow Proof
- `GET /api/reporting/irr/suppliers/{supplier}/cash-flows` — Get Supplier Cash-Flow Proof

### Returns & RMAs
- `GET /api/returns/reconciliation/recent` — List Recently Received Returns
- `GET /api/returns/reconciliation/unmatched` — List Unmatched Returns
- `POST /api/returns/reconciliation/{returnReceipt}/link` — Link Return Receipt to RMA

### Serial Numbers
- `GET /api/v2/products/{product}/serial-numbers` — List Product Serial Numbers
- `GET /api/v2/serial-numbers` — List Serial Numbers
- `POST /api/v2/serial-numbers/quarantine` — Quarantine Serial Numbers
- `GET /api/v2/serial-numbers/recall-impact` — Serial Recall Impact
- `POST /api/v2/serial-numbers/release` — Release Serial Numbers
- `GET /api/v2/serial-numbers/{serialNumber}` — Get Serial Number

### ShipHero
- `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit` — List Inventory Changes
- `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit/export` — Export Inventory Audit
- `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit/kpi-stats` — Get Inventory Audit KPI Stats
- `POST /api/shiphero/integration-instances/{integration_instance}/inventory-audit/sync` — Sync Inventory Audit
- `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit/sync-info` — Get Inventory Audit Sync Info
- `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit/{inventoryChange}` — Get Inventory Change
- `GET /api/shiphero/integration-instances/{integration_instance}/products` — List Products
- `GET /api/shiphero/integration-instances/{integration_instance}/products/{sku}` — Get Product

### Shopify
- `GET /api/shopify/{integrationInstance}/pre-start-date-orders/results/{trackedJobLogId}` — Get Pre-Start-Date Order Search Results
- `POST /api/shopify/{integrationInstance}/pre-start-date-orders/search-all` — Search All Pre-Start-Date Orders (Async)

### Suppliers
- `PUT /api/v2/suppliers/{supplier}/messaging-contact` — Set Supplier WhatsApp Contact

_Spec version 1.0.0 → 1.0.0._
