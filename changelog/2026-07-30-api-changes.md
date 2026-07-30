---
title: API changes — 2026-07-30
description: This release includes 147 additions, 2 changes, 1 removal. 3 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-07-30
---

This release includes 147 additions, 2 changes, 1 removal. 3 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Sales Orders
- **Removed** `GET /api/sales-orders/{salesOrder}/dispatch-diagnosis` — Get Sales Order Dispatch Diagnosis

### Incompatible changes

#### eBay
- **Changed** `GET /api/ebay/{integrationInstance}/legacy-products` — List Legacy Products (Integration)
  - new parameter(s): `per_page`
  - removed parameter(s): `limit`

#### Suppliers
- **Changed** `GET /api/v2/suppliers` — List Suppliers
  - removed parameter(s): `archived`, `excluded[]`, `included[]`, `limit`, `page`, `search`, `sort`

## Added

### eBay
- `GET /api/ebay/payout-mapping-groups` — List Global Payout Mapping Groups
- `POST /api/ebay/payout-mapping-groups` — Create Global Payout Mapping Group
- `POST /api/ebay/payout-mapping-groups/reorder` — Reorder Global Payout Mapping Groups
- `DELETE /api/ebay/payout-mapping-groups/{payoutMappingGroup}` — Delete Global Payout Mapping Group
- `GET /api/ebay/{integrationInstance}/payout-finance-settings` — Get Payout Finance Settings
- `GET /api/ebay/{integrationInstance}/payout-mapping-groups` — List Payout Mapping Groups
- `POST /api/ebay/{integrationInstance}/payout-mapping-groups` — Create Payout Mapping Group
- `POST /api/ebay/{integrationInstance}/payout-mapping-groups/reorder` — Reorder Payout Mapping Groups
- `DELETE /api/ebay/{integrationInstance}/payout-mapping-groups/{payoutMappingGroup}` — Delete Payout Mapping Group
- `GET /api/ebay/{integrationInstance}/payout-transactions` — List Payout Transactions
- `GET /api/ebay/{integrationInstance}/payout-transactions/filter-options` — Get Payout Transaction Filter Options
- `GET /api/ebay/{integrationInstance}/payout-type-mappings` — List Payout Type Mappings
- `GET /api/ebay/{integrationInstance}/payouts` — List Payouts
- `GET /api/ebay/{integrationInstance}/payouts/filter-options` — Get Payout Filter Options
- `POST /api/ebay/{integrationInstance}/payouts/sync` — Sync Payouts
- `GET /api/ebay/{integrationInstance}/payouts/{payout}` — Get Payout

### Product Listings
- `POST /api/content-sync/bulk-apply` — Bulk Apply Content Changes
- `POST /api/content-sync/bulk-ignore` — Bulk Ignore Content Changes
- `GET /api/content-sync/conflicts` — List Content Conflicts
- `POST /api/content-sync/conflicts/{contentChange}/resolve` — Resolve Content Conflict
- `GET /api/content-sync/drift` — List Content Drift
- `POST /api/content-sync/group-apply` — Apply Content Change Group
- `GET /api/content-sync/groups` — List Drift Groups
- `POST /api/content-sync/reconcile` — Reconcile Content Drift
- `GET /api/content-sync/summary` — Get Content Sync Summary
- `GET /api/integration-instances/{integrationInstance}/content-sync-settings` — Get Content Sync Settings
- `GET /api/product-listings/{productListing}/content-changes` — List Content Changes for Listing
- `POST /api/product-listings/{productListing}/content-changes/apply` — Apply Content Changes
- `GET /api/product-listings/{productListing}/content-changes/history` — Get Content Change History
- `POST /api/product-listings/{productListing}/content-changes/ignore` — Ignore Content Changes
- `POST /api/product-listings/{productListing}/content-changes/reconcile` — Reconcile Listing Content
- `POST /api/product-listings/{productListing}/content-changes/{contentChange}/rollback` — Roll Back Content Change
- `GET /api/product-listings/{productListing}/content-sync-rules` — Get Listing Content Rules

### QuickBooks Online
- `POST /api/qbo/accounts/refresh-single` — Pull Account from QuickBooks
- `POST /api/qbo/accounts/refresh-tracked` — Refresh Accounts in Background
- `POST /api/qbo/accounts/search-qbo` — Search Accounts in QuickBooks
- `GET /api/qbo/accounts/sync-info` — Get Accounts Sync Info
- `GET /api/qbo/bill-payments/{id}/activity-log` — Get Bill Payment Activity Log
- `POST /api/qbo/bills/refresh-single` — Pull Bill from QuickBooks
- `POST /api/qbo/bills/refresh-tracked` — Refresh Bills in Background
- `POST /api/qbo/bills/search-qbo` — Search Bills in QuickBooks
- `GET /api/qbo/bills/sync-info` — Get Bills Sync Info
- `POST /api/qbo/credit-memos/refresh-single` — Pull Credit Memo from QuickBooks
- `POST /api/qbo/credit-memos/refresh-tracked` — Refresh Credit Memos in Background
- `POST /api/qbo/credit-memos/search-qbo` — Search Credit Memos in QuickBooks
- `GET /api/qbo/credit-memos/sync-info` — Get Credit Memos Sync Info
- `POST /api/qbo/customers/refresh-single` — Pull Customer from QuickBooks
- `POST /api/qbo/customers/refresh-tracked` — Refresh Customers in Background
- `POST /api/qbo/customers/search-qbo` — Search Customers in QuickBooks
- `GET /api/qbo/customers/sync-info` — Get Customers Sync Info
- `GET /api/qbo/deposits/{id}/activity-log` — Get Deposit Activity Log
- `POST /api/qbo/invoices/refresh-single` — Pull Invoice from QuickBooks
- `POST /api/qbo/invoices/refresh-tracked` — Refresh Invoices in Background
- `POST /api/qbo/invoices/search-qbo` — Search Invoices in QuickBooks
- `GET /api/qbo/invoices/sync-info` — Get Invoices Sync Info
- `GET /api/qbo/items/sync-info` — Get Items Sync Info
- `GET /api/qbo/items/{id}/activity-log` — Get Item Activity Log
- `GET /api/qbo/journals/sync-info` — Get Journals Sync Info
- `GET /api/qbo/payments/sync-info` — Get Payments Sync Info
- `GET /api/qbo/purchase-orders/sync-info` — Get Purchase Orders Sync Info
- `GET /api/qbo/purchase-orders/{id}/activity-log` — Get Purchase Order Activity Log
- `GET /api/qbo/purchases/{id}/activity-log` — Get Purchase Activity Log
- `GET /api/qbo/tax-codes/sync-info` — Get Tax Codes Sync Info
- `GET /api/qbo/tax-rates/sync-info` — Get Tax Rates Sync Info
- `GET /api/qbo/vendor-credits/{id}/activity-log` — Get Vendor Credit Activity Log
- `GET /api/qbo/vendors/sync-info` — Get Vendors Sync Info
- `GET /api/qbo/vendors/{id}/activity-log` — Get Vendor Activity Log

### Reporting
- `GET /api/reporting/realtime-inventory/pivot` — Get Realtime Inventory Pivot

### ShipHero
- `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit` — List Inventory Changes
- `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit/export` — Export Inventory Audit
- `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit/kpi-stats` — Get Inventory Audit KPI Stats
- `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit/sync-info` — Get Inventory Audit Sync Info
- `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit/{inventoryChange}` — Get Inventory Change
- `GET /api/shiphero/integration-instances/{integration_instance}/products` — List Products
- `GET /api/shiphero/integration-instances/{integration_instance}/products/{sku}` — Get Product

### Shopify
- `GET /api/shopify/{integrationInstance}/balance-transactions` — List Balance Transactions
- `GET /api/shopify/{integrationInstance}/balance-transactions/filter-options` — Get Balance Transaction Filter Options
- `GET /api/shopify/{integrationInstance}/costs/last-sync` — Get Last Cost Sync
- `GET /api/shopify/{integrationInstance}/costs/sync-progress/{trackedJobLogId}` — Get Cost Sync Progress
- `GET /api/shopify/{integrationInstance}/pre-start-date-orders/results/{trackedJobLogId}` — Get Pre-Start-Date Order Search Results
- `GET /api/shopify/{integrationInstance}/products/{product}/raw-graphql` — Get Raw Product (GraphQL)

### Veracore
- `GET /api/veracore/integration-instances/{integration_instance}/expected-arrivals` — Get Expected Arrivals
- `GET /api/veracore/integration-instances/{integration_instance}/expected-arrivals/summary` — Get Expected Arrival Summary
- `DELETE /api/veracore/integration-instances/{integration_instance}/expected-arrivals/{expectedArrival}` — Cancel Expected Arrival
- `GET /api/veracore/integration-instances/{integration_instance}/expected-arrivals/{expectedArrival}` — Get Expected Arrival
- `GET /api/veracore/integration-instances/{integration_instance}/inventory` — Get Inventory
- `GET /api/veracore/integration-instances/{integration_instance}/inventory-changes` — Get Inventory Changes
- `GET /api/veracore/integration-instances/{integration_instance}/inventory-changes/summary` — Get Inventory Change Summary
- `GET /api/veracore/integration-instances/{integration_instance}/inventory-changes/{change}` — Get Inventory Change
- `GET /api/veracore/integration-instances/{integration_instance}/inventory/discrepancies` — Get Inventory Discrepancies
- `GET /api/veracore/integration-instances/{integration_instance}/inventory/summary` — Get Inventory Summary
- `GET /api/veracore/integration-instances/{integration_instance}/inventory/without-sku-products` — Get Inventory Without SKU.io Products
- `GET /api/veracore/integration-instances/{integration_instance}/inventory/without-veracore-inventory` — Get Products Without Veracore Inventory
- `GET /api/veracore/integration-instances/{integration_instance}/products` — Get Products
- `GET /api/veracore/integration-instances/{integration_instance}/products/{product}` — Get Product
- `DELETE /api/veracore/integration-instances/{integration_instance}/products/{product}/mapping` — Delete Product Mapping
- `GET /api/veracore/integration-instances/{integration_instance}/products/{product}/raw` — Get Product Raw Payload
- `GET /api/veracore/integration-instances/{integration_instance}/warehouse-mappings` — Get Warehouse Mappings
- `DELETE /api/veracore/integration-instances/{integration_instance}/warehouse-mappings/{warehouseMapping}` — Delete Warehouse Mapping

### Xero
- `DELETE /api/xero/v2/contacts/{contact}/unlink-sku-entity` — Unlink Contact from SKU Entity

_…plus 47 more (see the API reference)._

_Spec version 1.0.0 → 1.0.0._
