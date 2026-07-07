---
title: API changes — 2026-06-23
description: This release 67 added, 202 removed API endpoint(s).
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-06-23
---

This release 67 added, 202 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `DELETE /api/manufacturing/mrp/bill-of-resources/{billOfResource}` — Delete Bill of Resource
- `DELETE /api/manufacturing/mrp/distribution-network/{distributionNetwork}` — Delete Distribution Edge
- `DELETE /api/manufacturing/mrp/mps/{mpsEntry}` — Delete MPS Entry
- `DELETE /api/manufacturing/mrp/planning-calendars/{planningCalendar}` — Delete Planning Calendar
- `DELETE /api/manufacturing/mrp/scenarios/{mrpScenario}` — Delete Scenario
- `DELETE /api/vendor-credits/{vendor_credit}/shipments/{vendor_credit_shipment}` — Delete Return Shipment
- `GET /api/manufacturing/lot-genealogy/affected-lots-by-sales-orders` — Affected Lots & Suppliers (Recall, by Sales Orders)
- `GET /api/manufacturing/lot-genealogy/affected-lots-by-sales-orders/export` — Export Affected Lots & Suppliers CSV (Recall, by Sales Orders)
- `GET /api/manufacturing/lot-genealogy/affected-sales-orders` — Affected Sales Orders (Recall)
- `GET /api/manufacturing/lot-genealogy/affected-sales-orders/export` — Export Affected Sales Orders CSV (Recall)
- `GET /api/manufacturing/lot-genealogy/batches` — Search Batch Numbers (Typeahead)
- `GET /api/manufacturing/lot-genealogy/by-sales-orders` — Trace by Sales Orders (Recall, Backward)
- `GET /api/manufacturing/lot-genealogy/sales-order-refs` — Resolve Sales Order Ids → Numbers (Recall)
- `GET /api/manufacturing/mrp/bill-of-resources` — List Bill of Resources
- `GET /api/manufacturing/mrp/bill-of-resources/{billOfResource}` — Get Bill of Resource
- `GET /api/manufacturing/mrp/distribution-network` — List Distribution Network
- `GET /api/manufacturing/mrp/mps` — List MPS Entries
- `GET /api/manufacturing/mrp/mps/grid` — Get MPS Grid
- `GET /api/manufacturing/mrp/planning-calendars` — List Planning Calendars
- `GET /api/manufacturing/mrp/planning-calendars/{planningCalendar}` — Get Planning Calendar
- `GET /api/manufacturing/mrp/planning-policies` — List Planning Policies
- `GET /api/manufacturing/mrp/planning-policies/{product}` — Get Planning Policy
- `GET /api/manufacturing/mrp/runs` — List MRP Runs
- `GET /api/manufacturing/mrp/runs/{mrpRun}` — Get MRP Run
- `GET /api/manufacturing/mrp/runs/{mrpRun}/action-messages` — List Run Action Messages
- `GET /api/manufacturing/mrp/runs/{mrpRun}/action-messages/counts` — Get Action Message Counts
- `GET /api/manufacturing/mrp/runs/{mrpRun}/capacity/heatmap` — Get Capacity Heatmap
- `GET /api/manufacturing/mrp/runs/{mrpRun}/capacity/load-profile` — Get Capacity Load Profile
- `GET /api/manufacturing/mrp/runs/{mrpRun}/capacity/rough-cut` — Get Rough-Cut Capacity Plan
- `GET /api/manufacturing/mrp/runs/{mrpRun}/items/{product}/time-phased` — Get Item Time-Phased Grid
- `GET /api/manufacturing/mrp/runs/{mrpRun}/planned-orders` — List Run Planned Orders
- `GET /api/manufacturing/mrp/runs/{mrpRun}/planned-orders/{plannedOrder}/pegging` — Get Planned Order Pegging
- `GET /api/manufacturing/mrp/scenarios` — List Scenarios
- `GET /api/manufacturing/mrp/scenarios/compare` — Compare Runs
- `GET /api/manufacturing/mrp/scenarios/{mrpScenario}` — Get Scenario
- `GET /api/manufacturing/mrp/work-centers/{workCenter}/calendar` — Get Work Center Calendar
- `GET /api/products/{productId}/available-lots` — Get Available Lots (FEFO)
- `GET /api/v2/products/{product}/lots-expiry` — Get Product Lots & Expiry
- `GET /api/v2/products/{product}/lots/{fifoLayer}/genealogy` — Get Product Lot Genealogy
- `GET /api/vendor-credits/{vendor_credit}/shipments` — List Return Shipments
- `PATCH /api/manufacturing/mrp/planned-orders/{plannedOrder}` — Update Planned Order
- `PATCH /api/vendor-credits/{vendor_credit}/shipments/{vendor_credit_shipment}/status` — Update Shipment Status
- `POST /api/manufacturing/lot-genealogy/resolve-sales-order-numbers` — Bulk Resolve Sales Order Numbers (Recall import)
- `POST /api/manufacturing/mrp/action-messages/accept` — Accept Action Messages
- `POST /api/manufacturing/mrp/action-messages/dismiss` — Dismiss Action Messages
- `POST /api/manufacturing/mrp/atp` — ATP Check
- `POST /api/manufacturing/mrp/bill-of-resources` — Create Bill of Resource
- `POST /api/manufacturing/mrp/ctp` — CTP Check
- `POST /api/manufacturing/mrp/distribution-network` — Create Distribution Edge
- `POST /api/manufacturing/mrp/planned-orders/accept` — Accept Planned Orders
- `POST /api/manufacturing/mrp/planned-orders/dismiss` — Dismiss Planned Orders
- `POST /api/manufacturing/mrp/planned-orders/firm` — Firm Planned Orders
- `POST /api/manufacturing/mrp/planned-orders/release` — Release Planned Orders
- `POST /api/manufacturing/mrp/planned-orders/unfirm` — Unfirm Planned Orders
- `POST /api/manufacturing/mrp/planning-calendars` — Create Planning Calendar
- `POST /api/manufacturing/mrp/planning-policies/bulk-apply` — Bulk Apply Planning Policy
- `POST /api/manufacturing/mrp/runs` — Start MRP Run
- `POST /api/manufacturing/mrp/scenarios` — Create Scenario
- `POST /api/vendor-credits/{vendor_credit}/shipments` — Create Return Shipment
- `PUT /api/manufacturing/mrp/bill-of-resources/{billOfResource}` — Update Bill of Resource
- `PUT /api/manufacturing/mrp/distribution-network/{distributionNetwork}` — Update Distribution Edge
- `PUT /api/manufacturing/mrp/mps` — Upsert MPS Entry
- `PUT /api/manufacturing/mrp/planning-calendars/{planningCalendar}` — Update Planning Calendar
- `PUT /api/manufacturing/mrp/planning-policies/{product}` — Upsert Planning Policy
- `PUT /api/manufacturing/mrp/scenarios/{mrpScenario}` — Update Scenario
- `PUT /api/manufacturing/mrp/work-centers/{workCenter}/calendar` — Upsert Work Center Calendar
- `PUT /api/vendor-credits/{vendor_credit}/shipments/{vendor_credit_shipment}` — Update Return Shipment

## Removed

- `DELETE //{domain}/api/data-feeds` — Bulk Delete Data Feeds **(breaking)**
- `DELETE //{domain}/api/data-feeds/2` — Delete Data Feed **(breaking)**
- `DELETE //{domain}/api/inventory-aging/notes/{product}` — Delete Product Note **(breaking)**
- `DELETE /api/data-feeds` — Bulk Delete Data Feeds **(breaking)**
- `DELETE /api/data-feeds/2` — Delete Data Feed **(breaking)**
- `DELETE /api/inventory-aging/notes/{product}` — Delete Product Note **(breaking)**
- `DELETE /api/inventory-forecasting/schedules/{schedule}` — Delete Schedule **(breaking)**
- `DELETE /api/reporting/inventory-planning/schedules/{scheduledReport}` — Delete Scheduled Report **(breaking)**
- `DELETE /api/reporting/sales-tax/nexus/registrations/{taxNexusRegistration}` — Delete Sales-Tax Registration **(breaking)**
- `GET //{domain}/api/data-feeds` — List Data Feeds **(breaking)**
- `GET //{domain}/api/data-feeds/1` — Show Data Feed **(breaking)**
- `GET //{domain}/api/data-feeds/import-config/product_feed` — Get Import Config **(breaking)**
- `GET //{domain}/api/inventory-aging` — Get Inventory Aging Report **(breaking)**
- `GET //{domain}/api/inventory-aging/distribution` — Get Inventory Aging Distribution **(breaking)**
- `GET //{domain}/api/inventory-aging/export` — Export Inventory Aging to CSV **(breaking)**
- `GET //{domain}/api/inventory-aging/metrics` — Get Inventory Aging Metrics **(breaking)**
- `GET //{domain}/api/inventory-aging/sales-channels` — Get Sales Channels for Filter **(breaking)**
- `GET /api/data-feeds` — List Data Feeds **(breaking)**
- `GET /api/data-feeds/1` — Show Data Feed **(breaking)**
- `GET /api/data-feeds/import-config/product_feed` — Get Import Config **(breaking)**
- `GET /api/export/assemblies` — Export Assemblies **(breaking)**
- `GET /api/export/attribute-groups` — Export Attribute Groups **(breaking)**
- `GET /api/export/attributes` — Export Attributes **(breaking)**
- `GET /api/export/categories` — Export Categories **(breaking)**
- `GET /api/export/customers` — Export Customers **(breaking)**
- `GET /api/export/daily-financials` — Export Daily Financials **(breaking)**
- `GET /api/export/download` — Download Export File **(breaking)**
- `GET /api/export/fifo-layers` — Export FIFO Layers **(breaking)**
- `GET /api/export/financial-alerts` — Export Financial Alerts **(breaking)**
- `GET /api/export/initial-inventory/{warehouse}/export` — Export Initial Inventory **(breaking)**
- `GET /api/export/integration-instances/{integration_instance}/listings/export/csv` — Export Integration Listings (CSV) **(breaking)**
- `GET /api/export/integration-instances/{integration_instance}/listings/{format}` — Export Integration Listings by Format **(breaking)**
- `GET /api/export/inventory-adjustments` — Export Inventory Adjustments **(breaking)**
- `GET /api/export/inventory-assemblies` — Export Inventory Assemblies **(breaking)**
- `GET /api/export/inventory-movements` — Export Inventory Movements **(breaking)**
- `GET /api/export/nominal-codes` — Export Nominal Codes **(breaking)**
- `GET /api/export/product-brands` — Export Product Brands **(breaking)**
- `GET /api/export/product-pricing-tiers` — Export Product Pricing Tiers **(breaking)**
- `GET /api/export/products` — Export Products **(breaking)**
- `GET /api/export/purchase-orders` — Export Purchase Orders **(breaking)**
- `GET /api/export/purchase-orders/{id}/export-lines` — Export Purchase Order Lines **(breaking)**
- `GET /api/export/purchase-orders/{purchase_order}/invoice/csv` — Download Purchase Order Invoice CSV **(breaking)**
- `GET /api/export/purchase-orders/{purchase_order}/invoice/pdf` — Download Purchase Order Invoice PDF **(breaking)**
- `GET /api/export/purchase-orders/{purchase_order}/invoice/snappy-pdf` — Download Purchase Order Invoice Snappy PDF **(breaking)**
- `GET /api/export/purchase-orders/{purchase_order}/picklist/pdf` — Download Purchase Order Picklist PDF **(breaking)**
- `GET /api/export/sales-credits` — Export Sales Credits **(breaking)**
- `GET /api/export/sales-order-fulfillments` — Export Sales Order Fulfillments **(breaking)**
- `GET /api/export/sales-order-fulfillments/packing-slips` — Export Sales Order Fulfillment Packing Slips **(breaking)**
- `GET /api/export/sales-order-line-financials` — Export Sales Order Line Financials **(breaking)**
- `GET /api/export/sales-orders` — Export Sales Orders **(breaking)**
- `GET /api/export/sales-orders/packing-slips` — Export Sales Order Packing Slips **(breaking)**
- `GET /api/export/sales-orders/{id}/export-lines` — Export Sales Order Lines **(breaking)**
- `GET /api/export/sales-orders/{sales_order}/invoice/pdf` — Download Sales Order Invoice PDF **(breaking)**
- `GET /api/export/sales-orders/{sales_order}/packing-slip/pdf` — Download Sales Order Packing Slip PDF **(breaking)**
- `GET /api/export/ship-by-schedule` — Export Ship By Schedule **(breaking)**
- `GET /api/export/shipping-methods` — Export Shipping Methods **(breaking)**
- `GET /api/export/stock-takes` — Export Stock Takes **(breaking)**
- `GET /api/export/stock-takes/{stock_take}/export-lines` — Export Stock Take Lines **(breaking)**
- `GET /api/export/stores` — Export Stores **(breaking)**
- `GET /api/export/supplier-pricing-tiers` — Export Supplier Pricing Tiers **(breaking)**
- `GET /api/export/suppliers` — Export Suppliers **(breaking)**
- `GET /api/export/suppliers/{supplier}/inventory` — Export Supplier Inventory **(breaking)**
- `GET /api/export/tags` — Export Tags **(breaking)**
- `GET /api/export/v2/accounting-transactions` — Export Accounting Transactions (CSV) **(breaking)**
- `GET /api/export/v2/financial-alerts` — Export Financial Alerts (V2) **(breaking)**
- `GET /api/export/v2/profitability-drilldown` — Export Profitability Drilldown **(breaking)**
- `GET /api/export/v2/sales-order-line-financials` — Export Sales Order Line Financials (V2) **(breaking)**
- `GET /api/export/warehouse-transfers` — Export Warehouse Transfers **(breaking)**
- `GET /api/export/warehouse-transfers/{id}/export-lines` — Export Warehouse Transfer Lines **(breaking)**
- `GET /api/export/warehouses` — Export Warehouses **(breaking)**
- `GET /api/export/xero/accounts` — Export Xero Accounts **(breaking)**
- `GET /api/inventory-aging` — Get Inventory Aging Report **(breaking)**
- `GET /api/inventory-aging/distribution` — Get Inventory Aging Distribution **(breaking)**
- `GET /api/inventory-aging/export` — Export Inventory Aging to CSV **(breaking)**
- `GET /api/inventory-aging/metrics` — Get Inventory Aging Metrics **(breaking)**
- `GET /api/inventory-aging/sales-channels` — Get Sales Channels for Filter **(breaking)**
- `GET /api/inventory-forecasting/download/{filename}` — Download Export File **(breaking)**
- `GET /api/inventory-forecasting/job/{jobId}/status` — Get Job Status **(breaking)**
- `GET /api/inventory-forecasting/sales-orders` — Get Sales Orders (Drill-Down) **(breaking)**
- `GET /api/inventory-forecasting/schedule-runs` — List All Runs **(breaking)**
- `GET /api/inventory-forecasting/schedule-runs/recent` — Get Recent Runs **(breaking)**
- `GET /api/inventory-forecasting/schedule-runs/{runId}` — Get Run Details **(breaking)**
- `GET /api/inventory-forecasting/schedules` — List Schedules **(breaking)**
- `GET /api/inventory-forecasting/schedules/limits` — Get Schedule Limits **(breaking)**
- `GET /api/inventory-forecasting/schedules/statistics` — Get Schedule Statistics **(breaking)**
- `GET /api/inventory-forecasting/schedules/timeline` — Get Schedule Timeline **(breaking)**
- `GET /api/inventory-forecasting/schedules/today` — Get Today's Schedules **(breaking)**
- `GET /api/inventory-forecasting/schedules/{schedule}` — Get Schedule **(breaking)**
- `GET /api/inventory-forecasting/schedules/{schedule}/activity-log` — Get Schedule Activity Log **(breaking)**
- `GET /api/inventory-forecasting/schedules/{schedule}/runs` — Get Schedule Runs **(breaking)**
- `GET /api/inventory-forecasting/test-data` — List Test Scenarios **(breaking)**
- `GET /api/product-data-health/metrics` — Get Product Data Health Metrics **(breaking)**
- `GET /api/reporting/accounting-cogs` — Get Accounting COGS **(breaking)**
- `GET /api/reporting/accounting-cogs/drilldown` — Drilldown Accounting COGS **(breaking)**
- `GET /api/reporting/accounting-cogs/export` — Export Accounting COGS **(breaking)**
- `GET /api/reporting/accounting/income-statement` — Get Accounting Income Statement **(breaking)**
- `GET /api/reporting/cogs` — Get Monthly COGS **(breaking)**
- `GET /api/reporting/financials-by-brand` — Financials by Brand **(breaking)**
- `GET /api/reporting/financials-by-product-type` — Financials by Product Type **(breaking)**
- `GET /api/reporting/financials-by-sales-channel` — Financials by Sales Channel **(breaking)**
- …plus 102 more removed endpoint(s), all breaking.
