---
title: API changes — 2026-06-23
description: This release includes 110 additions, 202 removals. 202 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-06-23
---

This release includes 110 additions, 202 removals. 202 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Data Feeds
- **Removed** `DELETE //{domain}/api/data-feeds` — Bulk Delete Data Feeds
- **Removed** `GET //{domain}/api/data-feeds` — List Data Feeds
- **Removed** `GET //{domain}/api/data-feeds/1` — Show Data Feed
- **Removed** `DELETE //{domain}/api/data-feeds/2` — Delete Data Feed
- **Removed** `GET //{domain}/api/data-feeds/import-config/product_feed` — Get Import Config
- **Removed** `DELETE /api/data-feeds` — Bulk Delete Data Feeds
- **Removed** `GET /api/data-feeds` — List Data Feeds
- **Removed** `GET /api/data-feeds/1` — Show Data Feed
- **Removed** `DELETE /api/data-feeds/2` — Delete Data Feed
- **Removed** `GET /api/data-feeds/import-config/product_feed` — Get Import Config

#### Export
- **Removed** `GET /api/export/assemblies` — Export Assemblies
- **Removed** `GET /api/export/attribute-groups` — Export Attribute Groups
- **Removed** `GET /api/export/attributes` — Export Attributes
- **Removed** `GET /api/export/categories` — Export Categories
- **Removed** `GET /api/export/customers` — Export Customers
- **Removed** `GET /api/export/daily-financials` — Export Daily Financials
- **Removed** `GET /api/export/download` — Download Export File
- **Removed** `GET /api/export/fifo-layers` — Export FIFO Layers
- **Removed** `GET /api/export/financial-alerts` — Export Financial Alerts
- **Removed** `GET /api/export/initial-inventory/{warehouse}/export` — Export Initial Inventory
- **Removed** `GET /api/export/integration-instances/{integration_instance}/listings/export/csv` — Export Integration Listings (CSV)
- **Removed** `GET /api/export/integration-instances/{integration_instance}/listings/{format}` — Export Integration Listings by Format
- **Removed** `GET /api/export/inventory-adjustments` — Export Inventory Adjustments
- **Removed** `GET /api/export/inventory-assemblies` — Export Inventory Assemblies
- **Removed** `GET /api/export/inventory-movements` — Export Inventory Movements
- **Removed** `GET /api/export/nominal-codes` — Export Nominal Codes
- **Removed** `GET /api/export/product-brands` — Export Product Brands
- **Removed** `GET /api/export/product-pricing-tiers` — Export Product Pricing Tiers
- **Removed** `GET /api/export/products` — Export Products
- **Removed** `GET /api/export/purchase-orders` — Export Purchase Orders
- **Removed** `GET /api/export/purchase-orders/{id}/export-lines` — Export Purchase Order Lines
- **Removed** `GET /api/export/purchase-orders/{purchase_order}/invoice/csv` — Download Purchase Order Invoice CSV
- **Removed** `GET /api/export/purchase-orders/{purchase_order}/invoice/pdf` — Download Purchase Order Invoice PDF
- **Removed** `GET /api/export/purchase-orders/{purchase_order}/invoice/snappy-pdf` — Download Purchase Order Invoice Snappy PDF
- **Removed** `GET /api/export/purchase-orders/{purchase_order}/picklist/pdf` — Download Purchase Order Picklist PDF
- **Removed** `GET /api/export/sales-credits` — Export Sales Credits
- **Removed** `GET /api/export/sales-order-fulfillments` — Export Sales Order Fulfillments
- **Removed** `GET /api/export/sales-order-fulfillments/packing-slips` — Export Sales Order Fulfillment Packing Slips
- **Removed** `GET /api/export/sales-order-line-financials` — Export Sales Order Line Financials
- **Removed** `GET /api/export/sales-orders` — Export Sales Orders
- **Removed** `GET /api/export/sales-orders/packing-slips` — Export Sales Order Packing Slips
- **Removed** `GET /api/export/sales-orders/{id}/export-lines` — Export Sales Order Lines
- **Removed** `GET /api/export/sales-orders/{sales_order}/invoice/pdf` — Download Sales Order Invoice PDF
- **Removed** `GET /api/export/sales-orders/{sales_order}/packing-slip/pdf` — Download Sales Order Packing Slip PDF
- **Removed** `GET /api/export/ship-by-schedule` — Export Ship By Schedule
- **Removed** `GET /api/export/shipping-methods` — Export Shipping Methods
- **Removed** `GET /api/export/stock-takes` — Export Stock Takes
- **Removed** `GET /api/export/stock-takes/{stock_take}/export-lines` — Export Stock Take Lines
- **Removed** `GET /api/export/stores` — Export Stores
- **Removed** `GET /api/export/supplier-pricing-tiers` — Export Supplier Pricing Tiers
- **Removed** `GET /api/export/suppliers` — Export Suppliers
- **Removed** `GET /api/export/suppliers/{supplier}/inventory` — Export Supplier Inventory
- **Removed** `GET /api/export/tags` — Export Tags
- **Removed** `GET /api/export/v2/accounting-transactions` — Export Accounting Transactions (CSV)
- **Removed** `GET /api/export/v2/financial-alerts` — Export Financial Alerts (V2)
- **Removed** `GET /api/export/v2/profitability-drilldown` — Export Profitability Drilldown
- **Removed** `GET /api/export/v2/sales-order-line-financials` — Export Sales Order Line Financials (V2)
- **Removed** `GET /api/export/warehouse-transfers` — Export Warehouse Transfers
- **Removed** `GET /api/export/warehouse-transfers/{id}/export-lines` — Export Warehouse Transfer Lines
- **Removed** `GET /api/export/warehouses` — Export Warehouses
- **Removed** `GET /api/export/xero/accounts` — Export Xero Accounts

#### Inventory Intelligence
- **Removed** `GET //{domain}/api/inventory-aging` — Get Inventory Aging Report
- **Removed** `GET //{domain}/api/inventory-aging/distribution` — Get Inventory Aging Distribution
- **Removed** `GET //{domain}/api/inventory-aging/export` — Export Inventory Aging to CSV
- **Removed** `GET //{domain}/api/inventory-aging/metrics` — Get Inventory Aging Metrics
- **Removed** `DELETE //{domain}/api/inventory-aging/notes/{product}` — Delete Product Note
- **Removed** `GET //{domain}/api/inventory-aging/sales-channels` — Get Sales Channels for Filter
- **Removed** `GET /api/inventory-aging` — Get Inventory Aging Report
- **Removed** `GET /api/inventory-aging/distribution` — Get Inventory Aging Distribution
- **Removed** `GET /api/inventory-aging/export` — Export Inventory Aging to CSV
- **Removed** `GET /api/inventory-aging/metrics` — Get Inventory Aging Metrics
- **Removed** `DELETE /api/inventory-aging/notes/{product}` — Delete Product Note
- **Removed** `GET /api/inventory-aging/sales-channels` — Get Sales Channels for Filter
- **Removed** `GET /api/inventory-forecasting/download/{filename}` — Download Export File
- **Removed** `GET /api/inventory-forecasting/job/{jobId}/status` — Get Job Status
- **Removed** `GET /api/inventory-forecasting/sales-orders` — Get Sales Orders (Drill-Down)
- **Removed** `GET /api/inventory-forecasting/schedule-runs` — List All Runs
- **Removed** `GET /api/inventory-forecasting/schedule-runs/recent` — Get Recent Runs
- **Removed** `GET /api/inventory-forecasting/schedule-runs/{runId}` — Get Run Details
- **Removed** `GET /api/inventory-forecasting/schedules` — List Schedules
- **Removed** `GET /api/inventory-forecasting/schedules/limits` — Get Schedule Limits
- **Removed** `GET /api/inventory-forecasting/schedules/statistics` — Get Schedule Statistics
- **Removed** `GET /api/inventory-forecasting/schedules/timeline` — Get Schedule Timeline
- **Removed** `GET /api/inventory-forecasting/schedules/today` — Get Today's Schedules
- **Removed** `DELETE /api/inventory-forecasting/schedules/{schedule}` — Delete Schedule
- **Removed** `GET /api/inventory-forecasting/schedules/{schedule}` — Get Schedule
- **Removed** `GET /api/inventory-forecasting/schedules/{schedule}/activity-log` — Get Schedule Activity Log
- **Removed** `GET /api/inventory-forecasting/schedules/{schedule}/runs` — Get Schedule Runs
- **Removed** `GET /api/inventory-forecasting/test-data` — List Test Scenarios

#### Reporting
- **Removed** `GET /api/product-data-health/metrics` — Get Product Data Health Metrics
- **Removed** `GET /api/reporting/accounting-cogs` — Get Accounting COGS
- **Removed** `GET /api/reporting/accounting-cogs/drilldown` — Drilldown Accounting COGS
- **Removed** `GET /api/reporting/accounting-cogs/export` — Export Accounting COGS
- **Removed** `GET /api/reporting/accounting/income-statement` — Get Accounting Income Statement
- **Removed** `GET /api/reporting/cogs` — Get Monthly COGS
- **Removed** `GET /api/reporting/financials-by-brand` — Financials by Brand
- **Removed** `GET /api/reporting/financials-by-product-type` — Financials by Product Type
- **Removed** `GET /api/reporting/financials-by-sales-channel` — Financials by Sales Channel
- **Removed** `DELETE /api/reporting/inventory-planning/schedules/{scheduledReport}` — Delete Scheduled Report
- **Removed** `DELETE /api/reporting/sales-tax/nexus/registrations/{taxNexusRegistration}` — Delete Sales-Tax Registration

_…plus 102 more (see the API reference)._

## Added

### Fulfillment Orders
- `GET /api/fulfillment-orders/{fulfillmentOrder}/move-preview` — Preview Fulfillment Order Move (Coverage)

### Integration Instances
- `POST /api/integrations/17track/instances` — Create 17TRACK Instance
- `DELETE /api/integrations/17track/instances/{instance}` — Disconnect 17TRACK Instance
- `GET /api/integrations/17track/instances/{instance}` — Get 17TRACK Instance (Dashboard)
- `PATCH /api/integrations/17track/instances/{instance}` — Update 17TRACK Instance
- `GET /api/integrations/17track/instances/{instance}/activity` — List Instance Activity Log
- `GET /api/integrations/17track/instances/{instance}/trackings` — List Instance Trackings
- `GET /api/integrations/17track/instances/{instance}/webhooks` — List Instance Webhook Events
- `POST /api/integrations/17track/test` — Test Connection

### Lot Genealogy
- `GET /api/manufacturing/lot-genealogy/affected-lots-by-sales-orders` — Affected Lots & Suppliers (Recall, by Sales Orders)
- `GET /api/manufacturing/lot-genealogy/affected-lots-by-sales-orders/export` — Export Affected Lots & Suppliers CSV (Recall, by Sales Orders)
- `GET /api/manufacturing/lot-genealogy/affected-sales-orders` — Affected Sales Orders (Recall)
- `GET /api/manufacturing/lot-genealogy/affected-sales-orders/export` — Export Affected Sales Orders CSV (Recall)
- `GET /api/manufacturing/lot-genealogy/batches` — Search Batch Numbers (Typeahead)
- `GET /api/manufacturing/lot-genealogy/by-sales-orders` — Trace by Sales Orders (Recall, Backward)
- `POST /api/manufacturing/lot-genealogy/resolve-sales-order-numbers` — Bulk Resolve Sales Order Numbers (Recall import)
- `GET /api/manufacturing/lot-genealogy/sales-order-refs` — Resolve Sales Order Ids → Numbers (Recall)

### MRP Planning
- `POST /api/manufacturing/mrp/action-messages/accept` — Accept Action Messages
- `POST /api/manufacturing/mrp/action-messages/dismiss` — Dismiss Action Messages
- `POST /api/manufacturing/mrp/atp` — ATP Check
- `GET /api/manufacturing/mrp/bill-of-resources` — List Bill of Resources
- `POST /api/manufacturing/mrp/bill-of-resources` — Create Bill of Resource
- `DELETE /api/manufacturing/mrp/bill-of-resources/{billOfResource}` — Delete Bill of Resource
- `GET /api/manufacturing/mrp/bill-of-resources/{billOfResource}` — Get Bill of Resource
- `PUT /api/manufacturing/mrp/bill-of-resources/{billOfResource}` — Update Bill of Resource
- `POST /api/manufacturing/mrp/ctp` — CTP Check
- `GET /api/manufacturing/mrp/distribution-network` — List Distribution Network
- `POST /api/manufacturing/mrp/distribution-network` — Create Distribution Edge
- `DELETE /api/manufacturing/mrp/distribution-network/{distributionNetwork}` — Delete Distribution Edge
- `GET /api/manufacturing/mrp/mps` — List MPS Entries
- `GET /api/manufacturing/mrp/mps/grid` — Get MPS Grid
- `DELETE /api/manufacturing/mrp/mps/{mpsEntry}` — Delete MPS Entry
- `POST /api/manufacturing/mrp/planned-orders/accept` — Accept Planned Orders
- `POST /api/manufacturing/mrp/planned-orders/dismiss` — Dismiss Planned Orders
- `POST /api/manufacturing/mrp/planned-orders/firm` — Firm Planned Orders
- `POST /api/manufacturing/mrp/planned-orders/release` — Release Planned Orders
- `POST /api/manufacturing/mrp/planned-orders/unfirm` — Unfirm Planned Orders
- `PATCH /api/manufacturing/mrp/planned-orders/{plannedOrder}` — Update Planned Order
- `GET /api/manufacturing/mrp/planning-calendars` — List Planning Calendars
- `POST /api/manufacturing/mrp/planning-calendars` — Create Planning Calendar
- `DELETE /api/manufacturing/mrp/planning-calendars/{planningCalendar}` — Delete Planning Calendar
- `GET /api/manufacturing/mrp/planning-calendars/{planningCalendar}` — Get Planning Calendar
- `GET /api/manufacturing/mrp/planning-policies` — List Planning Policies
- `POST /api/manufacturing/mrp/planning-policies/bulk-apply` — Bulk Apply Planning Policy
- `GET /api/manufacturing/mrp/planning-policies/{product}` — Get Planning Policy
- `GET /api/manufacturing/mrp/runs` — List MRP Runs
- `POST /api/manufacturing/mrp/runs` — Start MRP Run
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
- `POST /api/manufacturing/mrp/scenarios` — Create Scenario
- `GET /api/manufacturing/mrp/scenarios/compare` — Compare Runs
- `DELETE /api/manufacturing/mrp/scenarios/{mrpScenario}` — Delete Scenario
- `GET /api/manufacturing/mrp/scenarios/{mrpScenario}` — Get Scenario
- `GET /api/manufacturing/mrp/work-centers/{workCenter}/calendar` — Get Work Center Calendar

### Products
- `GET /api/products/{productId}/available-lots` — Get Available Lots (FEFO)
- `GET /api/v2/products/{product}/lots-expiry` — Get Product Lots & Expiry
- `GET /api/v2/products/{product}/lots/{fifoLayer}/genealogy` — Get Product Lot Genealogy

### Quotes
- `POST /api/quotes/bulk-archive` — Bulk Archive Quotes
- `POST /api/quotes/bulk-delete` — Bulk Delete Quotes
- `POST /api/quotes/bulk-expire` — Bulk Expire Quotes
- `POST /api/quotes/bulk-send` — Bulk Send Quotes
- `POST /api/quotes/bulk-unarchive` — Bulk Unarchive Quotes
- `POST /api/quotes/{quote}/allocation` — Set Quote Inventory Allocation
- `POST /api/quotes/{quote}/lines/bulk-update` — Bulk Update Lines
- `POST /api/quotes/{quote}/lines/bulk-warehouse` — Bulk Set Line Warehouse
- `POST /api/quotes/{quote}/lines/reorder` — Reorder Lines
- `POST /api/quotes/{quote}/lines/{line}/convert-to-revenue` — Convert Line to Revenue

### Return Shipments
- `GET /api/vendor-credits/{vendor_credit}/shipments` — List Return Shipments
- `POST /api/vendor-credits/{vendor_credit}/shipments` — Create Return Shipment
- `DELETE /api/vendor-credits/{vendor_credit}/shipments/{vendor_credit_shipment}` — Delete Return Shipment
- `PATCH /api/vendor-credits/{vendor_credit}/shipments/{vendor_credit_shipment}/status` — Update Shipment Status

### Returns
- `POST /api/walmart/{integrationInstance}/returns/refresh-tracked` — Refresh Returns

### Shipment Trackings
- `GET /api/shipment-trackings` — List Shipment Trackings
- `POST /api/shipment-trackings/backfill` — Backfill Shipment Trackings
- `POST /api/shipment-trackings/register` — Register Shipment Tracking
- `GET /api/shipment-trackings/{tracking}` — Get Shipment Tracking (Timeline Drawer)
- `POST /api/shipment-trackings/{tracking}/refresh` — Refresh Shipment Tracking

### Webhooks
- `POST /webhooks/walmart/{webhook_token}` — Receive Walmart Webhook

### Webhooks (Incoming — Documentation Only)
- `POST /webhooks/seventeentrack/{webhook_token}` — 17TRACK Webhook (TRACKING_UPDATED)

### WFS
- `GET /api/walmart/1/wfs/inbound-products` — Search WFS Inbound Products
- `POST /api/walmart/1/wfs/inbound-products/resolve` — Resolve WFS Inbound Identifiers
- `GET /api/walmart/1/wfs/inbound-shipments` — List WFS Inbound Shipments
- `GET /api/walmart/1/wfs/inbound-shipments/7` — Get WFS Inbound Shipment
- `POST /api/walmart/1/wfs/inbound-shipments/refresh-tracked` — Refresh WFS Inbound Shipments
- `GET /api/walmart/1/wfs/inventory` — List WFS Inventory
- `POST /api/walmart/1/wfs/inventory/refresh-tracked` — Refresh WFS Inventory
- `GET /api/walmart/1/wfs/replenishment` — WFS Replenishment Grid
- `GET /api/walmart/1/wfs/replenishment/settings` — Get WFS Replenishment Settings
- `GET /api/walmart/1/wfs/settings` — Get WFS Settings
- `GET /api/walmart/1/wfs/source-warehouses` — WFS Source Warehouses
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments` — Create WFS Inbound Shipment
- `GET /api/walmart/{integrationInstance}/wfs/replenishment/candidates` — WFS Candidate Grid

_…plus 10 more (see the API reference)._

_Spec version 1.0.0 → 1.0.0._
