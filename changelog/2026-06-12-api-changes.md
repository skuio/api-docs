---
title: API changes — 2026-06-12
description: This release includes 16 additions, 3 changes, 17 removals. 19 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-06-12
---

This release includes 16 additions, 3 changes, 17 removals. 19 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Configuration
- **Removed** `DELETE //{domain}/api/financial-line-types` — Bulk Delete Financial Line Types
- **Removed** `GET //{domain}/api/financial-line-types` — List Financial Line Types
- **Removed** `POST //{domain}/api/financial-line-types` — Create Financial Line Type
- **Removed** `DELETE //{domain}/api/financial-line-types/{financial_line_type}` — Delete Financial Line Type
- **Removed** `GET //{domain}/api/financial-line-types/{financial_line_type}` — Show Financial Line Type
- **Removed** `PUT //{domain}/api/financial-line-types/{financial_line_type}` — Update Financial Line Type
- **Removed** `DELETE //{domain}/api/payment-terms` — Bulk Delete Payment Terms
- **Removed** `GET //{domain}/api/payment-terms` — List Payment Terms
- **Removed** `POST //{domain}/api/payment-terms` — Create Payment Term
- **Removed** `GET //{domain}/api/payment-terms/1` — Show Payment Term
- **Removed** `PUT //{domain}/api/payment-terms/1/archive` — Archive Payment Term
- **Removed** `PUT //{domain}/api/payment-terms/1/unarchived` — Unarchive Payment Term
- **Removed** `DELETE //{domain}/api/payment-terms/3` — Delete Payment Term
- **Removed** `PUT //{domain}/api/payment-terms/3` — Update Payment Term
- **Removed** `PUT //{domain}/api/payment-terms/archive` — Bulk Archive Payment Terms
- **Removed** `POST //{domain}/api/payment-terms/deletable` — Check Deletable
- **Removed** `PUT //{domain}/api/payment-terms/unarchive` — Bulk Unarchive Payment Terms

### Incompatible changes

#### Reporting
- **Changed** `GET /api/reporting/most-profitable-products` — Get Most Profitable Products
  - removed parameter(s): `filter[end_date]`, `filter[start_date]`
- **Changed** `GET /api/reporting/top-selling-products` — Get Top Selling Products
  - removed parameter(s): `filter[end_date]`, `filter[start_date]`

## Added

### Adjustments & Transfers
- `POST //{domain}/api/warehouses/transfers/{transfer}/shipments` — Create Shipment

### Bills
- `DELETE /api/bills` — Bulk Delete Bills
- `GET /api/bills/1/line-items` — Get Bill Line Items
- `GET /api/bills/list` — List Bills
- `GET /api/bills/list/export` — Export Bills

### Document Inbox
- `POST /api/document-inbox/customer_po/{extraction_id}/reclassify` — Reclassify Document Type

### Misc
- `DELETE /api/sales-reps/{id}` — Delete Sales Rep

### Product Pro Forma
- `POST /api/v2/pro-forma/amazon-fees` — Get Amazon Fee Estimate (Live)
- `GET /api/v2/pro-forma/context` — Get Analyzer Context
- `GET /api/v2/pro-forma/history` — Get Channel History
- `PATCH /api/v2/pro-forma/products/{productId}/assumptions` — Update Product Assumptions
- `GET /api/v2/pro-forma/rate-cards` — List Active Rate Cards
- `GET /api/v2/pro-forma/scenarios` — List Scenarios
- `POST /api/v2/pro-forma/scenarios` — Create Scenario
- `DELETE /api/v2/pro-forma/scenarios/{scenarioId}` — Delete Scenario
- `PATCH /api/v2/pro-forma/scenarios/{scenarioId}` — Update Scenario

## Changed

### Settings
- `PUT /api/v2/settings/{slug}` — Update Setting
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
