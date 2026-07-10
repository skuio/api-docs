---
title: API changes — 2026-05-17
description: This release includes 385 additions, 421 changes, 50 removals. 176 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-05-17
---

This release includes 385 additions, 421 changes, 50 removals. 176 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Adjustments & Transfers
- **Removed** `GET /api/v2/inventory-allocations` — List Allocations
- **Removed** `GET /api/v2/inventory-allocations/backorders` — List Backorders
- **Removed** `GET /api/v2/inventory-allocations/backorders/export` — Export Backorders
- **Removed** `GET /api/v2/inventory-allocations/breakdown` — Get Breakdown
- **Removed** `POST /api/v2/inventory-allocations/check-release-availability` — Check Release Availability
- **Removed** `POST /api/v2/inventory-allocations/compact-priorities` — Compact Priorities
- **Removed** `POST /api/v2/inventory-allocations/delete-fulfillments` — Delete Fulfillments
- **Removed** `POST /api/v2/inventory-allocations/evaluate-releases` — Evaluate Releases
- **Removed** `GET /api/v2/inventory-allocations/export` — Export Allocations
- **Removed** `GET /api/v2/inventory-allocations/product/{productId}/analysis` — Product Analysis
- **Removed** `GET /api/v2/inventory-allocations/product/{productId}/coverage-options` — Coverage Options
- **Removed** `POST /api/v2/inventory-allocations/rebalance-coverages` — Rebalance Coverages
- **Removed** `POST /api/v2/inventory-allocations/release-allocations` — Release Allocations
- **Removed** `POST /api/v2/inventory-allocations/release-selected` — Release Selected
- **Removed** `POST /api/v2/inventory-allocations/reset-priorities` — Reset Priorities
- **Removed** `GET /api/v2/inventory-allocations/search-suppliers` — Search Suppliers
- **Removed** `POST /api/v2/inventory-allocations/submit-fulfillments` — Submit Fulfillments
- **Removed** `GET /api/v2/inventory-allocations/summary` — Get Summary
- **Removed** `GET /api/v2/inventory-allocations/supplier/{supplierId}/analysis` — Supplier Analysis
- **Removed** `GET /api/v2/inventory-allocations/suppliers` — List Suppliers
- **Removed** `POST /api/v2/inventory-allocations/switch-supplier-options` — Switch Supplier Options
- **Removed** `POST /api/v2/inventory-allocations/switch-suppliers` — Switch Suppliers
- **Removed** `POST /api/v2/inventory-allocations/sync-coverages` — Sync Coverages
- **Removed** `POST /api/v2/inventory-allocations/unreserve` — Unreserve
- **Removed** `GET /api/v2/inventory-allocations/{allocation}` — Get Allocation
- **Removed** `POST /api/v2/inventory-allocations/{allocation}/reassign-coverage` — Reassign Coverage
- **Removed** `POST /api/v2/inventory-allocations/{allocation}/reorder` — Reorder Allocation
- **Removed** `GET /api/v2/warehouse-transfers` — List Warehouse Transfers
- **Removed** `GET /api/v2/warehouse-transfers/filter-options` — Get Filter Options
- **Removed** `GET /api/v2/warehouse-transfers/receipts/{receipt}` — Get Receipt Detail
- **Removed** `GET /api/v2/warehouse-transfers/receipts/{receipt}/activity-log` — Get Receipt Activity Log
- **Removed** `GET /api/v2/warehouse-transfers/receipts/{receipt}/fifo-layers` — Get Receipt FIFO Layers
- **Removed** `GET /api/v2/warehouse-transfers/receipts/{receipt}/inventory-movements` — Get Receipt Inventory Movements
- **Removed** `PATCH /api/v2/warehouse-transfers/receipts/{receipt}/lines/{line}` — Update Receipt Line Quantity
- **Removed** `GET /api/v2/warehouse-transfers/receipts/{receipt}/lines/{line}/quantity-preview` — Preview Receipt Line Quantity Change
- **Removed** `GET /api/v2/warehouse-transfers/shipments/{shipment}` — Get Shipment Detail
- **Removed** `GET /api/v2/warehouse-transfers/shipments/{shipment}/activity-log` — Get Shipment Activity Log
- **Removed** `GET /api/v2/warehouse-transfers/shipments/{shipment}/inventory-movements` — Get Shipment Inventory Movements
- **Removed** `PATCH /api/v2/warehouse-transfers/shipments/{shipment}/lines/{line}` — Update Shipment Line Quantity
- **Removed** `GET /api/v2/warehouse-transfers/shipments/{shipment}/lines/{line}/quantity-preview` — Preview Shipment Line Quantity Change
- **Removed** `GET /api/v2/warehouse-transfers/{warehouseTransfer}` — Get Warehouse Transfer
- **Removed** `GET /api/v2/warehouse-transfers/{warehouseTransfer}/activity-log` — Get Activity Log
- **Removed** `GET /api/v2/warehouse-transfers/{warehouseTransfer}/allocations` — Get Allocations
- **Removed** `GET /api/v2/warehouse-transfers/{warehouseTransfer}/browse-products` — Browse Products
- **Removed** `GET /api/v2/warehouse-transfers/{warehouseTransfer}/fifo-layers` — Get FIFO Layers
- **Removed** `POST /api/v2/warehouse-transfers/{warehouseTransfer}/generate-accounting-transactions` — Generate Accounting Transactions
- **Removed** `GET /api/v2/warehouse-transfers/{warehouseTransfer}/inventory-movements` — Get Inventory Movements
- **Removed** `GET /api/v2/warehouse-transfers/{warehouseTransfer}/line-items` — Get Line Items
- **Removed** `GET /api/v2/warehouse-transfers/{warehouseTransfer}/tab-counts` — Get Tab Counts
- **Removed** `POST /api/warehouses/transfers/{transfer}/receiving-discrepancy` — Create Receiving Discrepancy

### Incompatible changes

#### Accounting
- **Changed** `GET /api/accounting/transactions/needing-sync` — Get Transactions Needing Sync
  - removed parameter(s): `link_type`, `transaction_ids[]`, `type`
- **Changed** `GET /api/accounting/transactions/needing-sync/count` — Get Transactions Needing Sync Count
  - removed parameter(s): `link_type`, `type`
- **Changed** `GET /api/accounting/v3/transactions` — List Transactions (V3 - Paginated)
  - removed parameter(s): `filter[has_error]`, `filter[nominal_code]`, `filter[search]`, `filter[status]`, `filter[sync_enabled]`, `filter[transaction_date.from]`, `filter[transaction_date.to]`, `filter[type]`, `sort`
- **Changed** `GET /api/accounting/v3/transactions/export` — Start Export Job
  - removed parameter(s): `columns`, `filter[transaction_date.from]`, `filter[type]`, `ids`, `sort`

#### Accounting Integrations
- **Changed** `GET /api/qbo/accounts` — List Accounts
  - removed parameter(s): `filter[account_type]`, `filter[active]`, `filter[classification]`, `filter[has_conflict]`, `filter[include_archived]`, `filter[name]`, `filter[search]`, `filter[sync_status]`, `sort`
- **Changed** `GET /api/qbo/accounts/export` — Export Accounts
  - removed parameter(s): `active`, `end_date`, `start_date`
- **Changed** `GET /api/qbo/bills` — List Bills
  - removed parameter(s): `filter[search]`, `filter[sync_status]`, `sort`
- **Changed** `GET /api/qbo/conflicts/{entityType}` — List Conflicts by Entity Type
  - removed parameter(s): `include_resolved`, `status[]`
- **Changed** `GET /api/qbo/credit-memos` — List Credit Memos
  - removed parameter(s): `filter[search]`, `sort`
- **Changed** `GET /api/qbo/customers` — List Customers
  - removed parameter(s): `filter[company_name]`, `filter[display_name]`, `filter[linked]`, `filter[search]`, `sort`
- **Changed** `GET /api/qbo/invoices` — List Invoices
  - removed parameter(s): `filter[customer_name]`, `filter[doc_number]`, `filter[search]`, `filter[status]`, `filter[sync_status]`, `sort`
- **Changed** `GET /api/qbo/items` — List Items
  - removed parameter(s): `filter[search]`, `sort`
- **Changed** `GET /api/qbo/vendors` — List Vendors
  - removed parameter(s): `filter[search]`, `sort`

#### Adjustments & Transfers
- **Changed** `GET /api/inventory-adjustments` — List Inventory Adjustments
  - removed parameter(s): `filter[product_id]`, `filter[warehouse_id]`, `included[]`
- **Changed** `GET /api/inventory-adjustments/{inventoryAdjustment}/activity-log` — Get Activity Log
  - removed parameter(s): `filter[search]`, `page`

#### Configuration
- **Changed** `GET /api/nominal-codes` — List Nominal Codes (DataTable)
  - removed parameter(s): `archived`, `excluded[]`, `filter[code]`, `filter[name]`, `filter[type]`, `included[]`, `search`, `sort`, `table_specifications`

#### Custom Fields
- **Changed** `GET /api/custom-fields` — List Custom Fields
  - removed parameter(s): `archived`, `search`, `sort`

#### Customers
- **Changed** `GET /api/v2/customers` — List Customers
  - removed parameter(s): `search`

#### Data Imports
- **Changed** `GET /api/v2/data-imports/{dataImport}/validation-results` — Get Validation Results
  - removed parameter(s): `filter`

#### Discount Codes
- **Changed** `GET /api/discount-codes` — List Discount Codes
  - removed parameter(s): `archived`, `limit`, `page`, `search`, `sort`

#### Document Inbox
- **Changed** `GET /api/document-inbox` — List Inbox Documents
  - removed parameter(s): `page`, `per_page`, `search`, `status`, `type`

#### Export
- **Changed** `GET /api/export/v2/accounting-transactions` — Export Accounting Transactions (CSV)
  - removed parameter(s): `filter[has_error]`, `filter[nominal_code]`, `filter[search]`, `filter[status]`, `filter[sync_enabled]`, `filter[transaction_date.from]`, `filter[transaction_date.to]`, `filter[type]`, `sort`
- **Changed** `GET /api/export/v2/profitability-drilldown` — Export Profitability Drilldown
  - removed parameter(s): `flt_ids[]`

#### FIFO Layers
- **Changed** `GET /api/v2/fifo-layers` — List FIFO Layers
  - removed parameter(s): `filter[archived]`, `filter[condition]`, `filter[product_id]`, `filter[warehouse_id]`, `filter_groups[children][0][condition][column]`, `filter_groups[children][0][condition][operator]`, `filter_groups[children][0][condition][value]`, `filter_groups[children][0][type]`, `filter_groups[conjunction]`

#### Financials
- **Changed** `GET /api/v2/financials/daily-summary` — Daily Financial Summary
  - removed parameter(s): `sales_channel_id`

#### Inbound Shipments
- **Changed** `GET /api/inbound-shipment-receipts/{receipt}/activity-log` — Get Activity Log
  - removed parameter(s): `filter[causer_id]`, `filter[date_from]`, `filter[date_to]`, `filter[event]`, `filter[search]`
- **Changed** `GET /api/inbound-shipment-receipts/{receipt}/fifo-layers` — Get FIFO Layers
  - removed parameter(s): `filter[condition]`, `filter[product_id]`, `filter[warehouse_id]`, `sort`
- **Changed** `GET /api/inbound-shipment-receipts/{receipt}/inventory-movements` — Get Inventory Movements
  - removed parameter(s): `filter[inventory_status]`, `filter[product_id]`, `filter[type]`, `filter[warehouse_id]`, `sort`

#### Inventory
- **Changed** `GET /api/faire/inventory` — List Faire Inventory
  - removed parameter(s): `filter[instance_id]`, `filter[integration_instance_ids]`
- **Changed** `GET /api/faire/inventory/summary` — Get Faire Inventory Summary (Legacy)
  - removed parameter(s): `filter[instance_id]`, `filter[integration_instance_ids]`
- **Changed** `GET /api/inventory-forecasting/configurations` — List Forecast Configurations
  - removed parameter(s): `created_by`, `forecast_type`, `search`, `supplier_id`
- **Changed** `GET /api/inventory-forecasting/configurations/paginated` — List Forecast Configurations (Paginated)
  - removed parameter(s): `created_by`, `forecast_type`, `search`, `supplier_id`
- **Changed** `DELETE /api/inventory-forecasting/configurations/{configuration}` — Delete Forecast Configuration
  - removed parameter(s): `force`
  - new response code(s): `204`, `422`
  - removed response code(s): `200`

#### Inventory Adjustments
- **Changed** `GET /api/v2/inventory-adjustments` — List Inventory Adjustments
  - removed parameter(s): `filter[product_id]`, `filter[warehouse_id]`

#### Inventory Intelligence
- **Changed** `GET /api/inventory-aging` — Get Inventory Aging Report
  - removed parameter(s): `age_bracket`, `brand_id`, `excluded_sales_channel_ids`, `has_listings`, `has_sales`, `listing_filter`, `max_margin`, `min_margin`, `min_quantity`, `sales_channel_ids`, `sales_period`, `search`, `supplier_id`, `view`, `warehouse_id`
  - new response code(s): `422`
- **Changed** `GET /api/inventory-aging/distribution` — Get Inventory Aging Distribution
  - removed parameter(s): `warehouse_id`
- **Changed** `GET /api/inventory-aging/export` — Export Inventory Aging to CSV
  - removed parameter(s): `age_bracket`, `view`, `warehouse_id`
- **Changed** `GET /api/inventory-aging/metrics` — Get Inventory Aging Metrics
  - removed parameter(s): `age_bracket`, `search`, `warehouse_id`

#### Inventory Movements
- **Changed** `GET /api/v2/inventory-movements` — List Inventory Movements
  - removed parameter(s): `filter[inventory_status]`, `filter[type]`, `filter[warehouse_id]`
- **Changed** `GET /api/v2/inventory-movements/list/export` — Export Inventory Movements
  - removed parameter(s): `columns`, `filter[inventory_status]`, `filter[search]`, `filter[type]`, `filter[warehouse]`, `ids`, `sort`

#### Jobs & Logs
- **Changed** `GET /api/tracked-job-logs` — List Tracked Job Logs
  - removed parameter(s): `archived`, `search`, `sort`

#### Landed Cost Invoice OCR
- **Changed** `GET /api/landed-cost-invoices/ocr` — List Extractions (Inbox)
  - removed parameter(s): `date_from`, `date_to`, `page`, `per_page`, `search`, `source`, `status`, `supplier_id`

#### Misc
- **Changed** `GET /api/activity` — List Activity
  - removed parameter(s): `filter[subject_id]`, `filter[subject_type]`
- **Changed** `GET /api/integration-instances` — List Integration Instances
  - removed parameter(s): `filter[type]`
- **Changed** `GET /api/low-stock-items` — Get Low Stock Items
  - removed parameter(s): `warehouse_id`

#### Orders
- **Changed** `DELETE /api/faire/instances/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order from Faire Order
  - removed parameter(s): `archive_faire_order`
  - new response code(s): `404`
- **Changed** `GET /api/faire/orders` — List Faire Orders
  - removed parameter(s): `filter[archived]`, `filter[currency_code]`, `filter[has_sku_order]`, `filter[has_unmapped_items]`, `filter[instance_id]`, `filter[integration_instance_ids]`, `filter[ordered_at]`, `filter[retailer_country_code]`, `filter[retailer_name]`, `filter[search]`, `filter[status]`, `filter[tracking_submission_status]`, `page`, `per_page`, `sort`
- **Changed** `GET /api/faire/orders/filter-options` — Get Order Filter Options (Distinct Values)
  - removed parameter(s): `filter[instance_id]`, `filter[integration_instance_ids]`

#### Organization
- **Changed** `GET /api/attribute-groups` — List Attribute Groups (DataTable)
  - removed parameter(s): `archived`
- **Changed** `GET /api/attributes` — List Attributes (DataTable)
  - removed parameter(s): `archived`
- **Changed** `GET /api/categories` — List Categories (DataTable)
  - removed parameter(s): `archived`, `excluded[]`, `filter[name]`, `included[]`, `search`, `sort`, `table_specifications`
- **Changed** `GET /api/categories/for-manage` — List Categories for Manage
  - removed parameter(s): `parent_id`
- **Changed** `GET /api/product-brands` — List Product Brands
  - removed parameter(s): `excluded[]`, `included[]`, `table_specifications`

#### Pricing
- **Changed** `GET /api/product-pricing-tiers` — List Pricing Tiers (DataTable)
  - removed parameter(s): `archived`, `excluded[]`, `filter[currency_code]`, `filter[name]`, `included[]`, `search`, `sort`, `table_specifications`

#### Products
- **Changed** `GET /api/faire/instances/{integrationInstance}/products` — List Products for Instance (Variants Listing)
  - removed parameter(s): `page`
- **Changed** `GET /api/faire/products` — List Faire Products
  - removed parameter(s): `filter[instance_id]`, `filter[integration_instance_ids]`

#### Purchase Order Shipments
- **Changed** `GET /api/purchase-order-shipments/{shipment}/activity-log` — Get Activity Log
  - removed parameter(s): `filter[search]`, `page`

#### Reporting
- **Changed** `GET /api/reporting/accounting/income-statement` — Get Accounting Income Statement
  - removed parameter(s): `filter[end_date]`, `filter[start_date]`, `trailing_days`
- **Changed** `GET /api/reporting/inventory-planning` — Get Inventory Planning Report
  - removed parameter(s): `filter[warehouse_id]`, `filter[warehouse_id][is]`, `filter_groups`
- **Changed** `GET /api/reporting/inventory-planning/export` — Export Inventory Planning Report
  - removed parameter(s): `columns`, `filter[warehouse_id]`
- **Changed** `GET /api/reporting/inventory-planning/summary` — Get Inventory Planning Summary
  - removed parameter(s): `filter[warehouse_id]`
- **Changed** `GET /api/reporting/profitability/drilldown` — Get Profitability Drilldown
  - removed parameter(s): `flt_ids[]`
- **Changed** `GET /api/reporting/profitability/trend` — Get Profitability Trend
  - removed parameter(s): `metrics[]`
- **Changed** `GET /api/reporting/realtime-inventory` — Get Realtime Inventory
  - removed parameter(s): `filter[search]`, `filter[warehouse_id]`, `search`, `warehouse_id`
- **Changed** `GET /api/reporting/realtime-inventory/export` — Export Realtime Inventory
  - removed parameter(s): `filter[search]`, `filter[warehouse_id]`
- **Changed** `GET /api/reporting/sales-channel-coverage/export` — Export Sales Channel Coverage (async)
  - removed parameter(s): `filter[instance_ids]`, `filter[integration_ids]`, `filter[product_types]`, `filter[search]`
- **Changed** `GET /api/reporting/sales-channel-coverage/paginated` — Get Sales Channel Coverage (Paginated)
  - removed parameter(s): `filter[instance_ids]`, `filter[integration_ids]`, `filter[product_types]`, `filter[search]`, `in_stock_only`, `sort`

#### Returns & RMAs
- **Changed** `GET /api/return-receipts` — List Return Receipts
  - removed parameter(s): `blind_only`, `page`, `per_page`, `rma_id`, `search`, `warehouse_id`

#### Sales Channel Product Templates
- **Changed** `GET /api/sales-channel-product-templates` — List Sales Channel Product Templates
  - removed parameter(s): `filter[sales_channel_id]`

#### Sales Channels
- **Changed** `GET /api/amazon/inventory-valuation/cost-source-layer-drilldown` — Cost Source Layer Drilldown
  - removed parameter(s): `integration_instance_ids`
- **Changed** `GET /api/amazon/unified/awd/ledgers` — List AWD Ledgers
  - removed parameter(s): `filter[event_type]`, `filter[has_provisional_cogs]`, `filter[link_status]`, `filter[reconciled]`, `filter[search]`, `integration_instance_ids`, `sort`
- **Changed** `GET /api/amazon/unified/transactions/export` — Export Transactions
  - removed parameter(s): `columns`, `filter[search]`, `format`, `ids`, `scope`, `sort`
- **Changed** `GET /api/big-commerce/{integrationInstance}/orders` — List Orders
  - removed parameter(s): `table_specifications`
- **Changed** `GET /api/big-commerce/{integrationInstance}/products` — List Products
  - removed parameter(s): `table_specifications`
- **Changed** `GET /api/ebay/integration-instances` — List Integration Instances (DataTable)
  - removed parameter(s): `archived`, `search`, `sort`
- **Changed** `GET /api/ebay/legacy-products` — List Legacy Products (DataTable Global)
  - removed parameter(s): `search`
- **Changed** `GET /api/ebay/orders` — List Orders (DataTable Global)
  - removed parameter(s): `search`, `sort`
- **Changed** `GET /api/ebay/{integrationInstance}/legacy-products` — List Legacy Products (Integration)
  - removed parameter(s): `archived`, `excluded[]`, `included[]`, `search`, `sort`
- **Changed** `GET /api/ebay/{integrationInstance}/orders` — List Orders (Integration)
  - removed parameter(s): `archived`, `search`, `sort`

#### Shipping Providers
- **Changed** `GET /api/shipfusion/integration-instances/{integration_instance}/inventory/discrepancies` — Get Inventory Discrepancies
  - removed parameter(s): `warehouse`
- **Changed** `GET /api/shipfusion/integration-instances/{integration_instance}/inventory/product-movements` — Get Product Inventory Movements
  - removed parameter(s): `limit`
- **Changed** `GET /api/shipfusion/integration-instances/{integration_instance}/inventory/without-shipfusion-inventory` — Get Products Without Shipfusion Inventory
  - removed parameter(s): `warehouse`
- **Changed** `GET /api/shipfusion/integration-instances/{integration_instance}/inventory/without-sku-products` — Get Items Without SKU Products
  - removed parameter(s): `warehouse`
- **Changed** `GET /api/shipfusion/integration-instances/{integration_instance}/orders` — List Orders
  - removed parameter(s): `has_fulfillment`, `search`, `status`
- **Changed** `GET /api/shipfusion/integration-instances/{integration_instance}/warehouse-shipments` — List Warehouse Shipments
  - removed parameter(s): `search`, `status`
- **Changed** `GET /api/shipfusion/integration-instances/{integration_instance}/webhook-events` — List Webhook Events
  - removed parameter(s): `event_type`, `page`, `processed`, `search`
- **Changed** `GET /api/trackstar/integration-instances/{integration_instance}/bills` — List Bills
  - removed parameter(s): `filter[charge_type]`, `filter[date_from]`, `filter[date_to]`, `filter[object_id]`, `filter[object_type]`, `filter[search]`, `sort`
- **Changed** `GET /api/trackstar/integration-instances/{integration_instance}/inventory` — List Inventory
  - removed parameter(s): `warehouse_id`
- **Changed** `GET /api/trackstar/integration-instances/{integration_instance}/inventory/discrepancies` — Inventory Discrepancies
  - removed parameter(s): `warehouse_id`
- **Changed** `GET /api/trackstar/integration-instances/{integration_instance}/inventory/without-sku-products` — Items Without SKU Products
  - removed parameter(s): `warehouse_id`
- **Changed** `GET /api/trackstar/integration-instances/{integration_instance}/inventory/without-trackstar-inventory` — SKU Products Without Trackstar Inventory
  - removed parameter(s): `warehouse_id`
- **Changed** `GET /api/trackstar/integration-instances/{integration_instance}/orders` — List Orders
  - removed parameter(s): `filter[date_from]`, `filter[date_to]`, `filter[has_fulfillment]`, `filter[search]`, `filter[status]`, `sort`
- **Changed** `GET /api/trackstar/integration-instances/{integration_instance}/products` — List Products
  - removed parameter(s): `active_only`, `search`
- **Changed** `GET /api/trackstar/integration-instances/{integration_instance}/shipping-methods` — List Shipping Methods
  - removed parameter(s): `carrier`, `carrier_id`

#### Store Email Templates
- **Changed** `GET /api/store-email-templates` — List Store Email Templates (DataTable)
  - removed parameter(s): `archived`

#### Suppliers
- **Changed** `GET /api/supplier-inventories` — List Supplier Inventories (DataTable)
  - removed parameter(s): `filter[id]`, `filter[product_id]`, `filter[search]`, `filter[sku]`, `filter[warehouse_id]`, `per_page`
- **Changed** `GET /api/supplier-inventories/1/our-inventory` — List Our Inventory for Supplier
  - removed parameter(s): `filter[product_id]`, `filter[search]`, `filter[sku]`, `filter[stock_status]`, `filter[warehouse_id]`, `page`, `per_page`, `sort`
- **Changed** `GET /api/supplier-inventories/1/our-inventory/stats` — Get Our Inventory Stats for Supplier
  - removed parameter(s): `filter[product_id]`, `filter[search]`, `filter[sku]`, `filter[stock_status]`, `filter[warehouse_id]`
- **Changed** `GET /api/supplier-pricing-tiers` — List Supplier Pricing Tiers
  - removed parameter(s): `excluded[]`, `included[]`, `table_specifications`

#### UI Utilities
- **Changed** `GET /api/data-tables` — Query DataTable Model
  - removed parameter(s): `filter`, `saved_view_id`
  - new response code(s): `400`

_…plus 26 more (see the API reference)._

## Added

### Channel Partners
- `DELETE /api/channel-partners/{integrationInstanceId}` — Delete Channel Partner
- `DELETE /api/channel-partners/{integrationInstanceId}/inbound-events/delete-all` — Delete All Events for Instance
- `DELETE /api/channel-partners/{integrationInstanceId}/tokens/{tokenId}` — Revoke Token

### Costing
- `GET //{domain}/api/cogs-revaluation/bulk-fifo-report` — Get Bulk FIFO COGS Report
- `GET //{domain}/api/cogs-revaluation/export-fifo-changes/42` — Export FIFO Layer Changes (CSV)
- `GET //{domain}/api/cogs-revaluation/fifo-report/501` — Get FIFO COGS Report
- `GET //{domain}/api/cogs-revaluation/product-report/101` — Get Product COGS Report
- `GET //{domain}/api/cogs-revaluation/recently-rebuilt-products` — Get Recently Rebuilt Products
- `GET //{domain}/api/cogs-revaluation/tracked-job/42` — Get Tracked Job Status
- `GET //{domain}/api/cogs-revaluation/unified-tracking/42` — Get Unified Tracking Data
- `GET //{domain}/api/cogs-revaluation/variation-by-product` — Get Variation by Product Report
- `GET //{domain}/api/cogs/sku-health` — List SKU COGS Health
- `GET //{domain}/api/cogs/sku-health/101` — Show SKU COGS Health Detail
- `GET //{domain}/api/cogs/sku-health/101/consumption-timeline` — Get Consumption Timeline
- `GET //{domain}/api/cogs/sku-health/101/fifo-layers` — Get FIFO Layers
- `GET //{domain}/api/cogs/sku-health/101/fifo-layers-timeline` — Get FIFO Layers Timeline
- `GET //{domain}/api/cogs/sku-health/101/initial-inventory` — Get Initial Inventory
- `GET //{domain}/api/cogs/sku-health/101/layers/501/consumptions` — Get Layer Consumptions
- `GET //{domain}/api/cogs/sku-health/101/warehouse-breakdown` — Get Warehouse Breakdown
- `GET //{domain}/api/cogs/sku-health/summary` — Get SKU COGS Health Summary
- `GET //{domain}/api/cogs/sku-health/value-sources` — Get All Value Sources

### Custom Fields
- `GET //{domain}/api/custom-field-values` — List Custom Field Values
- `DELETE //{domain}/api/custom-field-values/{custom_field_value}` — Delete Custom Field Value
- `GET //{domain}/api/custom-field-values/{custom_field_value}` — Show Custom Field Value
- `GET //{domain}/api/custom-fields` — List Custom Fields
- `DELETE //{domain}/api/custom-fields/{custom_field}` — Delete Custom Field
- `GET //{domain}/api/custom-fields/{custom_field}` — Show Custom Field

### Customers
- `DELETE /api/customers` — Bulk Delete Customers
- `DELETE /api/customers/{customer_id}/sku-mappings/{mapping_id}` — Delete SKU Mapping
- `DELETE /api/customers/{customer}` — Delete Customer

### Data Feeds
- `DELETE //{domain}/api/data-feeds` — Bulk Delete Data Feeds
- `GET //{domain}/api/data-feeds` — List Data Feeds
- `GET //{domain}/api/data-feeds/1` — Show Data Feed
- `DELETE //{domain}/api/data-feeds/2` — Delete Data Feed
- `GET //{domain}/api/data-feeds/import-config/product_feed` — Get Import Config

### Discount Codes
- `GET //{domain}/api/discount-codes` — List Discount Codes
- `DELETE //{domain}/api/discount-codes/{discount_code}` — Delete Discount Code
- `GET //{domain}/api/discount-codes/{discount_code}` — Get Discount Code

### Inventory Intelligence
- `GET //{domain}/api/inventory-aging` — Get Inventory Aging Report
- `GET //{domain}/api/inventory-aging/distribution` — Get Inventory Aging Distribution
- `GET //{domain}/api/inventory-aging/export` — Export Inventory Aging to CSV
- `GET //{domain}/api/inventory-aging/metrics` — Get Inventory Aging Metrics
- `DELETE //{domain}/api/inventory-aging/notes/{product}` — Delete Product Note
- `GET //{domain}/api/inventory-aging/sales-channels` — Get Sales Channels for Filter

### Organization
- `DELETE //{protocol}{domain}/api/product-brands` — Bulk Delete Product Brands
- `DELETE //{protocol}{domain}/api/product-brands/1` — Delete Product Brand

### Products
- `DELETE //{domain}/api/products` — Bulk Delete Products
- `GET //{domain}/api/products` — List Products
- `GET //{domain}/api/products/attributes` — Get All Attributes for Products
- `GET //{domain}/api/products/barcode-lookup` — Barcode Lookup
- `GET //{domain}/api/products/by-sku` — Get Product by SKU
- `GET //{domain}/api/products/constants` — Get Product Constants
- `GET //{domain}/api/products/create` — Get Create Product Form
- `GET //{domain}/api/products/generate-sku-pattern/{product}` — Generate Blemished SKU Pattern
- `GET //{domain}/api/products/import/fields` — Get Import Fields
- `GET //{domain}/api/products/import/template` — Download Import Template
- `GET //{domain}/api/products/merge/template` — Download Merge Template
- `GET //{domain}/api/products/merge/{session_id}/preview` — Get Merge Preview
- `GET //{domain}/api/products/search` — Search Products
- `DELETE //{domain}/api/products/{id}` — Delete Product
- `GET //{domain}/api/products/{id}` — Get Product
- `DELETE //{domain}/api/products/{productId}/attributes` — Delete Product Attributes
- `GET //{domain}/api/products/{productId}/attributes` — Get Product Attributes
- `GET //{domain}/api/products/{productId}/attributes-grouped` — Get Product Attributes Grouped
- `GET //{domain}/api/products/{productId}/bundles` — Get Product Bundles
- `GET //{domain}/api/products/{productId}/components` — Get Product Components
- `GET //{domain}/api/products/{productId}/fifo-layers` — Get Product FIFO Layers
- `GET //{domain}/api/products/{productId}/inventory` — Get Product Inventory
- `GET //{domain}/api/products/{productId}/inventory-movements` — Get Product Inventory Movements
- `GET //{domain}/api/products/{productId}/potential-bundles` — Get Potential Bundles
- `GET //{domain}/api/products/{productId}/suppliers` — Get Product Suppliers
- `GET //{domain}/api/products/{product}/edit` — Get Edit Product Form
- `GET //{domain}/api/products/{product}/get-sales-channel-inventory` — Get Sales Channel Inventory
- `GET //{domain}/api/products/{product}/images` — List Product Images
- `GET //{domain}/api/products/{product}/last-purchase-price` — Get Last Purchase Price
- `GET //{domain}/api/products/{product}/listings` — List Product Listings
- `GET //{domain}/api/products/{product}/variations` — Get Product Variations
- `GET //{domain}/api/products/{product}/variations/attributes` — Get Variation Attributes
- `GET //{domain}/api/products/{warehouseId}/{productId}/inventory-fba` — Get FBA Inventory

### Purchase Orders
- `DELETE //{domain}/api/purchase-orders` — Bulk Delete
- `GET //{domain}/api/purchase-orders` — List Purchase Orders (DataTable)
- `GET //{domain}/api/purchase-orders/import-lines/template` — Download Lines Import Template
- `GET //{domain}/api/purchase-orders/import/template` — Download Import Template
- `GET //{domain}/api/purchase-orders/list` — List Purchase Orders (Vue3 List)
- `GET //{domain}/api/purchase-orders/list/export` — Export Purchase Orders
- `GET //{domain}/api/purchase-orders/{purchaseOrder}/invoices` — List PO Invoices
- `DELETE //{domain}/api/purchase-orders/{purchase_order}` — Delete Purchase Order
- `GET //{domain}/api/purchase-orders/{purchase_order}` — Get Purchase Order
- `GET //{domain}/api/purchase-orders/{purchase_order}/activity-log` — Activity Log
- `GET //{domain}/api/purchase-orders/{purchase_order}/bills/{bill}` — Get Bill
- `GET //{domain}/api/purchase-orders/{purchase_order}/dropship-shipments` — Get Dropship Shipments
- `DELETE //{domain}/api/purchase-orders/{purchase_order}/notes/{noteId}` — Delete Note

### Returns & RMAs
- `DELETE //{domain}/api/return-receipts/lines/{returnReceiptLine}` — Delete Return Receipt Line (standalone)
- `DELETE //{domain}/api/return-receipts/{returnReceipt}/lines/{returnReceiptLine}` — Remove Line from Return Receipt
- `DELETE //{domain}/api/return-receipts/{return_receipt}` — Delete Return Receipt

### Sales Channels
- `DELETE /api/walmart/{integrationInstance}/products/{product}/map` — Unmap Single Product

### Sales Reps
- `DELETE //{domain}/api/sales-reps/{sales_rep}` — Delete Sales Rep

### Sub Sales Channels
- `DELETE /api/sub-sales-channels/1` — Delete Sub Sales Channel

### Suppliers
- `DELETE //{protocol}{domain}/api/supplier-pricing-tiers` — Bulk Delete Pricing Tiers
- `DELETE //{protocol}{domain}/api/supplier-pricing-tiers/2` — Delete Supplier Pricing Tier

_…plus 285 more (see the API reference)._

## Changed

### Adjustments & Transfers
- `DELETE /api/inventory-adjustments/{inventory_adjustment}` — Delete Inventory Adjustment
  - new response code(s): `400`
- `GET /api/inventory-adjustments/{inventory_adjustment}` — Get Inventory Adjustment
  - new response code(s): `404`

### Assemblies
- `GET /api/assemblies/inventory-data` — Get Inventory Data
  - new response code(s): `422`
- `DELETE /api/assemblies/{assembly}` — Delete Assembly
  - new response code(s): `400`
- `GET /api/assemblies/{assembly}` — Get Assembly
  - new response code(s): `404`

### Authentication
- `GET /api/auth/refresh` — Refresh Token
  - new response code(s): `400`
- `DELETE /api/auth/token` — Delete All Access Tokens
  - new response code(s): `501`

### Bills
- `GET /api/bills/1` — Get Bill
  - new response code(s): `404`

### Configuration
- `DELETE /api/financial-line-types/{financial_line_type}` — Delete Financial Line Type
  - new response code(s): `204`, `400`
  - removed response code(s): `200`
- `GET /api/financial-line-types/{financial_line_type}` — Show Financial Line Type
  - new response code(s): `404`
- `DELETE /api/incoterms/{incoterm}` — Delete Incoterm
  - new response code(s): `400`
- `GET /api/incoterms/{incoterm}` — Get Incoterm
  - new response code(s): `404`
- `DELETE /api/nominal-codes/{nominal_code}` — Delete Nominal Code
  - new response code(s): `400`
- `GET /api/nominal-codes/{nominal_code}` — Show Nominal Code
  - new response code(s): `404`
- `GET /api/payment-terms/1` — Show Payment Term
  - new response code(s): `404`
- `DELETE /api/payment-terms/3` — Delete Payment Term
  - new response code(s): `400`
- `DELETE /api/payment-types/{payment_type}` — Delete Payment Type
  - new response code(s): `400`
- `GET /api/payment-types/{payment_type}` — Get Payment Type
  - new response code(s): `404`

### Costing
- `GET /api/cogs-revaluation/export-fifo-changes/1234` — Export FIFO Layer Changes CSV
  - new response code(s): `404`
- `GET /api/cogs-revaluation/export-fifo-changes/42` — Export FIFO Layer Changes (CSV)
  - new response code(s): `404`
- `GET /api/cogs-revaluation/tracked-job/1234` — Get Tracked Job Status
  - new response code(s): `404`
- `GET /api/cogs-revaluation/tracked-job/42` — Get Tracked Job Status
  - new response code(s): `404`
- `GET /api/cogs/sku-health/101` — Show SKU COGS Health Detail
  - new response code(s): `404`

### Custom Fields
- `GET /api/custom-field-values/{custom_field_value}` — Show Custom Field Value
  - new response code(s): `404`
- `GET /api/custom-fields/{custom_field}` — Show Custom Field
  - new response code(s): `404`

### Data Feeds
- `GET /api/data-feeds/1` — Show Data Feed
  - new response code(s): `404`
- `DELETE /api/data-feeds/2` — Delete Data Feed
  - new response code(s): `400`

### Financials
- `GET /api/financials/top-products` — Top Products
  - new response code(s): `422`

### Inbound Shipments
- `GET /api/inbound-shipment-receipts/{receipt}` — Get Inbound Shipment Receipt
  - new response code(s): `404`
- `DELETE /api/inbound-shipments/{inbound_shipment}` — Delete Inbound Shipment
  - new response code(s): `422`
- `GET /api/inbound-shipments/{inbound_shipment}` — Get Inbound Shipment
  - new response code(s): `404`
- `GET /api/inbound-shipments/{inbound_shipment}/bills/{bill}` — Get Bill
  - new response code(s): `404`

### Integration Instances
- `DELETE /api/integration-instances/{integration_instance}/listings/{id}` — Delete Single Listing
  - new response code(s): `400`

### Inventory
- `DELETE /api/inventory-forecasting/configurations/default` — Clear My Default Configuration
  - new response code(s): `204`
  - removed response code(s): `200`
- `GET /api/inventory-forecasting/configurations/{configuration}` — Get Forecast Configuration
  - new response code(s): `404`
- `DELETE /api/v2/inventory/holds/{reservation}` — Delete Inventory Hold
  - new response code(s): `204`
  - removed response code(s): `200`

### Inventory Intelligence
- `DELETE /api/inventory-aging/notes/{product}` — Delete Product Note
  - new response code(s): `204`
  - removed response code(s): `200`
- `GET /api/inventory-forecasting/download/{filename}` — Download Export File
  - new response code(s): `404`
- `GET /api/inventory-forecasting/job/{jobId}/status` — Get Job Status
  - new response code(s): `404`
- `GET /api/inventory-forecasting/schedule-runs/{runId}` — Get Run Details
  - new response code(s): `404`
- `DELETE /api/inventory-forecasting/schedules/{schedule}` — Delete Schedule
  - new response code(s): `204`
  - removed response code(s): `200`

### Jobs & Logs
- `DELETE /api/tracked-job-logs/{tracked_job_log}` — Delete Tracked Job Log
  - new response code(s): `204`
  - removed response code(s): `200`
- `GET /api/tracked-job-logs/{tracked_job_log}` — Show Tracked Job Log
  - new response code(s): `404`

### Organization
- `DELETE /api/attribute-groups/1` — Delete Attribute Group
  - new response code(s): `400`
- `GET /api/attribute-groups/1` — Get Attribute Group
  - new response code(s): `404`
- `DELETE /api/attributes/1` — Delete Attribute
  - new response code(s): `400`
- `GET /api/attributes/1` — Get Attribute
  - new response code(s): `404`
- `DELETE /api/categories/{category}` — Delete Category
  - new response code(s): `400`
- `GET /api/categories/{category}` — Show Category
  - new response code(s): `404`
- `DELETE /api/product-brands/1` — Delete Product Brand
  - new response code(s): `400`
- `GET /api/product-brands/1` — Get Product Brand
  - new response code(s): `404`

### Pricing
- `DELETE /api/product-pricing-tiers/{product_pricing_tier}` — Delete Pricing Tier
  - new response code(s): `400`
- `GET /api/product-pricing-tiers/{product_pricing_tier}` — Show Pricing Tier
  - new response code(s): `404`

### Products
- `GET /api/faire/instances/{integrationInstance}/products/bulk-progress/{trackedJobLogId}` — Bulk Operation Progress
  - new response code(s): `404`
- `GET /api/faire/instances/{integrationInstance}/products/{option}/raw` — Get Raw Data from Faire (Variant)
  - new response code(s): `404`
- `GET /api/products/merge/{session_id}/preview` — Get Merge Preview
  - new response code(s): `404`
- `DELETE /api/products/{id}` — Delete Product
  - new response code(s): `400`
- `GET /api/products/{id}` — Get Product
  - new response code(s): `404`

### Purchase Invoices
- `GET /api/purchase-invoices/{purchaseInvoice}/shipment-prefill` — Get Shipment Prefill (From Invoice)
  - new response code(s): `404`
- `GET /api/purchase-invoices/{purchase_invoice}` — Get Purchase Invoice
  - new response code(s): `404`

### Purchase Order Shipments
- `DELETE /api/inbound-shipments/receipts/{receipt}` — Delete Receipt
  - new response code(s): `400`
- `GET /api/purchase-order-shipments/{shipment}` — Get Shipment
  - new response code(s): `404`

### Purchase Orders
- `DELETE /api/purchase-order-line-short-close-events/{short_close_event}` — Undo Short-Close
  - new response code(s): `422`
- `DELETE /api/purchase-orders/{purchase_order}` — Delete Purchase Order
  - new response code(s): `400`
- `GET /api/purchase-orders/{purchase_order}` — Get Purchase Order
  - new response code(s): `404`

### Purchase Receipts
- `GET /api/purchase-receipts/{receipt}` — Get Purchase Receipt
  - new response code(s): `404`

### Reporting
- `DELETE /api/reporting/inventory-planning/schedules/{scheduledReport}` — Delete Scheduled Report
  - new response code(s): `204`
  - removed response code(s): `200`

### Returns & RMAs
- `DELETE /api/return-reasons/{return_reason}` — Delete Return Reason
  - new response code(s): `400`
- `GET /api/return-reasons/{return_reason}` — Get Return Reason
  - new response code(s): `404`
- `GET /api/return-receipts/{return_receipt}` — Get Return Receipt
  - new response code(s): `404`
- `DELETE /api/rmas/{rma}` — Delete RMA
  - new response code(s): `422`
- `GET /api/rmas/{rma}` — Get RMA
  - new response code(s): `404`

### Sales Channels
- `DELETE /api/big-commerce/{integrationInstance}` — Delete Integration Instance
  - new response code(s): `204`
  - removed response code(s): `200`
- `GET /api/big-commerce/{integrationInstance}` — Get Integration Instance
  - new response code(s): `404`
- `DELETE /api/channel-partners/1` — Delete Channel Partner
  - new response code(s): `204`
  - removed response code(s): `200`
- `GET /api/channel/customers/50` — Get Customer
  - new response code(s): `404`
- `GET /api/channel/orders/500` — Get Order
  - new response code(s): `403`
- `GET /api/ebay-product-settings` — List Product Settings
  - new response code(s): `422`
- `GET /api/ebay/integration-instances/{integrationInstance}` — Show Integration Instance
  - new response code(s): `404`
- `DELETE /api/shopify/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order (Keep Shopify Order)
  - new response code(s): `404`
- `DELETE /api/shopify/{integrationInstance}/products/{product}/map` — Unmap Product
  - new response code(s): `422`
- `DELETE /api/walmart/{integrationInstance}` — Delete Integration Instance
  - new response code(s): `204`
  - removed response code(s): `200`
- `DELETE /api/woo-commerce/{integration_instance}` — Delete Integration Instance
  - new response code(s): `204`
  - removed response code(s): `200`
- `DELETE /api/woo-commerce/{integration_instance}/orders/{order}` — Delete Order
  - new response code(s): `204`
  - removed response code(s): `200`
- `DELETE /api/woo-commerce/{integration_instance}/products/{product}` — Delete Product
  - new response code(s): `204`
  - removed response code(s): `200`

### Sales Order Lines
- `DELETE /api/sales-order-lines` — Delete Sales Order Line
  - new response code(s): `422`

### Sales Order OCR
- `GET /api/sales-orders/ocr/{extraction_id}` — Get OCR Extraction
  - new response code(s): `404`

### Stock Takes
- `GET /api/stock-takes/{stock_take}` — Show Stock Take
  - new response code(s): `404`

### Store Email Templates
- `GET /api/store-email-templates/1` — Get Store Email Template
  - new response code(s): `404`

### Stores
- `GET /api/stores/1` — Show Store
  - new response code(s): `404`
- `DELETE /api/stores/2` — Delete Store
  - new response code(s): `400`

### Subscriptions
- `GET /api/subscription-editions/1` — Get Subscription Edition
  - new response code(s): `404`
- `DELETE /api/subscription-offerings/{subscription_offering}` — Delete Subscription Offering
  - new response code(s): `422`

### Suppliers
- `GET /api/supplier-inventories/1` — Get Supplier Inventory
  - new response code(s): `404`
- `DELETE /api/supplier-pricing-tiers/2` — Delete Supplier Pricing Tier
  - new response code(s): `400`

### Tags
- `GET /api/tags/1` — Show Tag
  - new response code(s): `404`
- `DELETE /api/tags/5` — Delete Tag
  - new response code(s): `400`

### UI Utilities
- `GET /api/data-tables/blueprints` — List Blueprints
  - new response code(s): `400`
- `GET /api/data-tables/lookup/supplier/{field}` — Supplier Lookup
  - new response code(s): `400`
- `GET /api/pdf-templates/1` — Get PDF Template
  - new response code(s): `404`

_…plus 195 more (see the API reference)._

_Spec version 1.0.0 → 1.0.0._
