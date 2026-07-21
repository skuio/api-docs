---
title: API changes — 2026-07-21
description: This release includes 25 additions.
authors: [product-team]
tags: [added]
date: 2026-07-21
---

This release includes 25 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Adjustments & Transfers
- `POST /api/v2/inventory-allocations/pull-stock` — Pull Stock To Line
- `GET /api/v2/inventory-allocations/pull-stock-donors` — List Pull-Stock Donors

### Inventory Expiry & Shelf-Life
- `GET /api/inventory-expiry/lots/{fifoLayer}/write-off-impact` — Preview Lot Write-Off Impact

### Movement Composer
- `POST /api/v2/inventory/movements/composer` — Commit Movement
- `POST /api/v2/inventory/movements/preview-demotion-impact` — Preview Demotion Impact
- `POST /api/v2/inventory/movements/preview-release-impact` — Preview Release Impact

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

_Spec version 1.0.0 → 1.0.0._
