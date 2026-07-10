---
title: API changes — 2026-06-30
description: This release includes 19 additions, 2 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-06-30
---

This release includes 19 additions, 2 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Accounting Integrations
- `GET //{domain}/api/xero/v2/accounts/{account}` — Get Account (V2)

### Ledger (Accounting v2)
- `POST /api/ledger/entries/{entry}/fetch-remote` — Fetch Latest From Provider
- `POST /api/ledger/entries/{entry}/sync` — Resync Entry to Provider (synchronous)
- `POST /api/ledger/reconciliation/bank-statements/{bankStatementImport}/enable-sync` — Enable Sync on Matched Lines

### Merchandise Planning
- `GET //{domain}/api/open-to-buy/merchandise-plans` — List Merchandise Plans
- `POST //{domain}/api/open-to-buy/merchandise-plans` — Create Merchandise Plan
- `POST //{domain}/api/open-to-buy/merchandise-plans/seed` — Seed Plan From Forecast / Last Year
- `GET //{domain}/api/open-to-buy/merchandise-plans/{merchandisePlan}` — Get Merchandise Plan
- `PATCH //{domain}/api/open-to-buy/merchandise-plans/{merchandisePlan}` — Update Merchandise Plan (cell save / cash cap)
- `GET //{domain}/api/open-to-buy/merchandise-plans/{merchandisePlan}/otb` — Get OTB Breakdown

### Sales Channels
- `GET //{domain}/api/shopify/{integrationInstance}/fulfillment-orders` — List Fulfillment Orders
- `GET //{domain}/api/shopify/{integrationInstance}/fulfillment-orders/{fulfillmentOrder}/detailed` — Get Fulfillment Order Detailed
- `GET //{domain}/api/shopify/{integrationInstance}/fulfillments/{fulfillment}/detailed` — Get Fulfillment Detailed

### Sales Order Lines
- `POST /api/sales-order-lines/{salesOrderLine}/replace` — Replace Line Product(s)

### Shipping Providers
- `GET //{domain}/api/shipfusion/integration-instances/{integration_instance}/orders/{order}/raw` — Get Raw Order Data
- `GET //{domain}/api/shipfusion/integration-instances/{integration_instance}/packages` — List Packages
- `GET //{domain}/api/shipfusion/integration-instances/{integration_instance}/packages/{package}` — Get Package
- `POST //{domain}/api/shiphero/integration-instances/{integration_instance}/orders/import` — Import Orders
- `GET //{domain}/api/shiphero/integration-instances/{integration_instance}/orders/import-info` — Get Order Import Info

## Changed

### Ledger (Accounting v2)
- `POST /api/ledger/reconciliation/bank-statements` — Upload Statement Screenshot
  - removed response code(s): `422`

### Returns & RMAs
- `POST /api/rmas/{rma}/cancel` — Cancel RMA
  - new parameter(s): `Content-Type`
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
