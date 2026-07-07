---
title: API changes — 2026-07-07
description: This release 59 removed API endpoint(s).
authors: [product-team]
tags: [removed, breaking]
date: 2026-07-07
---

This release 59 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Removed

- `DELETE /api/financials/daily-summary/{daily_summary}` — Delete Daily Financial Summary **(breaking)**
- `GET /api/amazon/{integrationInstance}/orders/filter-options` — Get Filter Options **(breaking)**
- `GET /api/amazon/{integrationInstance}/products/filter-options` — Get Product Filter Options **(breaking)**
- `GET /api/amazon/{integrationInstance}/setup-step` — Get Setup Wizard Step **(breaking)**
- `GET /api/ebay` — List Integration Instances (DataTable Global) **(breaking)**
- `GET /api/ebay/legacy-products` — List Legacy Products (DataTable Global) **(breaking)**
- `GET /api/ebay/orders` — List Orders (DataTable Global) **(breaking)**
- `GET /api/export/daily-financials` — Export Daily Financials **(breaking)**
- `GET /api/export/purchase-orders/{purchase_order}/invoice/snappy-pdf` — Download Purchase Order Invoice Snappy PDF **(breaking)**
- `GET /api/incoterms/create` — Get Create Form Data **(breaking)**
- `GET /api/incoterms/{incoterm}/edit` — Get Edit Form Data **(breaking)**
- `GET /api/initial-inventory/create` — Get Create Form Data **(breaking)**
- `GET /api/initial-inventory/{id}/edit` — Get Edit Form Data **(breaking)**
- `GET /api/integration-instances/{integration_instance}/orders` — List Sales Channel Orders **(breaking)**
- `GET /api/inventory-forecasting/test-data` — List Test Scenarios **(breaking)**
- `GET /api/nominal-codes/create` — Get Create Form Data **(breaking)**
- `GET /api/nominal-codes/{nominal_code}/edit` — Get Edit Form Data **(breaking)**
- `GET /api/product-pricing-tiers/create` — Get Create Form Data **(breaking)**
- `GET /api/product-pricing-tiers/{product_pricing_tier}/edit` — Get Edit Form Data **(breaking)**
- `GET /api/products/create` — Get Create Product Form **(breaking)**
- `GET /api/products/{product}/edit` — Get Edit Product Form **(breaking)**
- `GET /api/purchase-orders` — List Purchase Orders (DataTable) **(breaking)**
- `GET /api/purchase-orders/{purchase_order}/lines` — Get PO Lines (DataTable) **(breaking)**
- `GET /api/sales-credits` — List Sales Credits **(breaking)**
- `GET /api/sales-reps/list` — Get Sales Reps for Dropdown **(breaking)**
- `GET /api/shipstation/integration-instances/{integration_instance}/webhook-test/events/{eventId}/payload` — Get Test Event Payload **(breaking)**
- `GET /api/shipstation/integration-instances/{integration_instance}/webhook-test/recent-events` — List Recent Test Events **(breaking)**
- `GET /api/shipstation/integration-instances/{integration_instance}/webhook-test/topics` — List Webhook Topics **(breaking)**
- `GET /api/shipstation/submit-orders` — Submit Orders to ShipStation **(breaking)**
- `GET /api/shipstation/webhook-test/status` — Get Webhook Test Status (Global) **(breaking)**
- `GET /api/shopify/{integrationInstance}/orders/filter-options` — Get Filter Options **(breaking)**
- `GET /api/shopify/{integrationInstance}/products/filter-options` — Get Filter Options **(breaking)**
- `GET /api/table-views` — List Table Views **(breaking)**
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/filter-options` — Get Filter Options **(breaking)**
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/products/filter-options` — Get Product Filter Options **(breaking)**
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/webhook-test/topics` — Webhook Test — Topics & Sample Payloads **(breaking)**
- `GET /api/tiktok-shop/webhook-test/status` — Webhook Test — Status **(breaking)**
- `GET /api/v2/sales-credits/filter-options` — Sales Credits Filter Options **(breaking)**
- `GET /api/v2/warehouse-transfers/filter-options` — Get Filter Options **(breaking)**
- `GET /api/xero/tax-rates` — List Tax Rates (Legacy) **(breaking)**
- `PATCH /api/amazon/{integrationInstance}/setup-step` — Update Setup Wizard Step **(breaking)**
- `POST /api/ai/filter-suggestions` — Generate Filter Tree from Prompt **(breaking)**
- `POST /api/amazon/inventory-valuation/dashboard/run-scheduled-job` — Run Scheduled Job **(breaking)**
- `POST /api/amazon/unified/awd/reset-access` — Reset AWD access denied flag **(breaking)**
- `POST /api/amazon/unified/fnsku-products/resolve-filtered-ids` — Resolve Filtered IDs (for bulk ops) **(breaking)**
- `POST /api/amazon/{integrationInstance}/removal-orders/backfill-straddle` — Backfill Straddle Removals (One-Time Repair) **(breaking)**
- `POST /api/financials/daily-summary` — Create Daily Financial Summary **(breaking)**
- `POST /api/inventory-forecasting/test-data/reset` — Reset Test Data **(breaking)**
- `POST /api/inventory-forecasting/test-data/seed` — Seed Test Data **(breaking)**
- `POST /api/reporting/sales-channel-coverage` — Get Sales Channel Coverage (Legacy) **(breaking)**
- `POST /api/shipstation/integration-instances/{integration_instance}/webhook-test/process` — Process Test Webhook **(breaking)**
- `POST /api/shipstation/integration-instances/{integration_instance}/webhook-test/validate` — Validate Test Payload **(breaking)**
- `POST /api/suppliers/{supplier}/csv-sample` — Download PO CSV Sample **(breaking)**
- `POST /api/table-views` — Create Table View **(breaking)**
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/webhook-test/process` — Webhook Test — Process (Replay) **(breaking)**
- `POST /api/tracked-job-logs` — Create Tracked Job Log **(breaking)**
- `PUT /api/financials/daily-summary/{daily_summary}` — Update Daily Financial Summary **(breaking)**
- `PUT /api/shipstation/update-order/{sales_order_fulfillment}` — Update ShipStation Order from Fulfillment **(breaking)**
- `PUT /api/tracked-job-logs/{tracked_job_log}` — Update Tracked Job Log **(breaking)**

_Spec version 1.0.0 → 1.0.0._
