---
title: API changes — 2026-07-29
description: This release includes 205 additions, 1 change, 100 removals. 101 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-07-29
---

This release includes 205 additions, 1 change, 100 removals. 101 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### eBay
- **Removed** `GET /api/ebay/payout-mapping-groups` — List Global Payout Mapping Groups
- **Removed** `POST /api/ebay/payout-mapping-groups` — Create Global Payout Mapping Group
- **Removed** `POST /api/ebay/payout-mapping-groups/reorder` — Reorder Global Payout Mapping Groups
- **Removed** `DELETE /api/ebay/payout-mapping-groups/{payoutMappingGroup}` — Delete Global Payout Mapping Group
- **Removed** `PUT /api/ebay/payout-mapping-groups/{payoutMappingGroup}` — Update Global Payout Mapping Group
- **Removed** `GET /api/ebay/{integrationInstance}/payout-finance-settings` — Get Payout Finance Settings
- **Removed** `PUT /api/ebay/{integrationInstance}/payout-finance-settings` — Update Payout Finance Settings
- **Removed** `GET /api/ebay/{integrationInstance}/payout-mapping-groups` — List Payout Mapping Groups
- **Removed** `POST /api/ebay/{integrationInstance}/payout-mapping-groups` — Create Payout Mapping Group
- **Removed** `POST /api/ebay/{integrationInstance}/payout-mapping-groups/reorder` — Reorder Payout Mapping Groups
- **Removed** `DELETE /api/ebay/{integrationInstance}/payout-mapping-groups/{payoutMappingGroup}` — Delete Payout Mapping Group
- **Removed** `PUT /api/ebay/{integrationInstance}/payout-mapping-groups/{payoutMappingGroup}` — Update Payout Mapping Group
- **Removed** `GET /api/ebay/{integrationInstance}/payout-transactions` — List Payout Transactions
- **Removed** `GET /api/ebay/{integrationInstance}/payout-transactions/filter-options` — Get Payout Transaction Filter Options
- **Removed** `GET /api/ebay/{integrationInstance}/payout-type-mappings` — List Payout Type Mappings
- **Removed** `PUT /api/ebay/{integrationInstance}/payout-type-mappings` — Update Payout Type Mappings
- **Removed** `PUT /api/ebay/{integrationInstance}/payout-type-mappings/bulk-assign` — Bulk Assign Payout Type Mappings
- **Removed** `GET /api/ebay/{integrationInstance}/payouts` — List Payouts
- **Removed** `GET /api/ebay/{integrationInstance}/payouts/filter-options` — Get Payout Filter Options
- **Removed** `POST /api/ebay/{integrationInstance}/payouts/sync` — Sync Payouts
- **Removed** `GET /api/ebay/{integrationInstance}/payouts/{payout}` — Get Payout

#### Integration Instances
- **Removed** `DELETE /api/magento2/integration-instances/{magento2IntegrationInstance}` — Delete Instance
- **Removed** `GET /api/magento2/integration-instances/{magento2IntegrationInstance}` — Get Instance
- **Removed** `PATCH /api/magento2/integration-instances/{magento2IntegrationInstance}` — Update Instance

#### QuickBooks Online
- **Removed** `POST /api/qbo/accounts/refresh-single` — Pull Account from QuickBooks
- **Removed** `POST /api/qbo/accounts/refresh-tracked` — Refresh Accounts in Background
- **Removed** `POST /api/qbo/accounts/search-qbo` — Search Accounts in QuickBooks
- **Removed** `GET /api/qbo/accounts/sync-info` — Get Accounts Sync Info
- **Removed** `GET /api/qbo/bill-payments/{id}/activity-log` — Get Bill Payment Activity Log
- **Removed** `POST /api/qbo/bills/refresh-single` — Pull Bill from QuickBooks
- **Removed** `POST /api/qbo/bills/refresh-tracked` — Refresh Bills in Background
- **Removed** `POST /api/qbo/bills/search-qbo` — Search Bills in QuickBooks
- **Removed** `GET /api/qbo/bills/sync-info` — Get Bills Sync Info
- **Removed** `POST /api/qbo/credit-memos/refresh-single` — Pull Credit Memo from QuickBooks
- **Removed** `POST /api/qbo/credit-memos/refresh-tracked` — Refresh Credit Memos in Background
- **Removed** `POST /api/qbo/credit-memos/search-qbo` — Search Credit Memos in QuickBooks
- **Removed** `GET /api/qbo/credit-memos/sync-info` — Get Credit Memos Sync Info
- **Removed** `POST /api/qbo/customers/refresh-single` — Pull Customer from QuickBooks
- **Removed** `POST /api/qbo/customers/refresh-tracked` — Refresh Customers in Background
- **Removed** `POST /api/qbo/customers/search-qbo` — Search Customers in QuickBooks
- **Removed** `GET /api/qbo/customers/sync-info` — Get Customers Sync Info
- **Removed** `GET /api/qbo/deposits/{id}/activity-log` — Get Deposit Activity Log
- **Removed** `POST /api/qbo/invoices/refresh-single` — Pull Invoice from QuickBooks
- **Removed** `POST /api/qbo/invoices/refresh-tracked` — Refresh Invoices in Background
- **Removed** `POST /api/qbo/invoices/search-qbo` — Search Invoices in QuickBooks
- **Removed** `GET /api/qbo/invoices/sync-info` — Get Invoices Sync Info
- **Removed** `POST /api/qbo/items/refresh-single` — Pull Item from QuickBooks
- **Removed** `POST /api/qbo/items/refresh-tracked` — Refresh Items in Background
- **Removed** `POST /api/qbo/items/search-qbo` — Search Items in QuickBooks
- **Removed** `GET /api/qbo/items/sync-info` — Get Items Sync Info
- **Removed** `GET /api/qbo/items/{id}/activity-log` — Get Item Activity Log
- **Removed** `POST /api/qbo/journals/refresh-single` — Pull Journal from QuickBooks
- **Removed** `POST /api/qbo/journals/refresh-tracked` — Refresh Journals in Background
- **Removed** `POST /api/qbo/journals/search-qbo` — Search Journals in QuickBooks
- **Removed** `GET /api/qbo/journals/sync-info` — Get Journals Sync Info
- **Removed** `POST /api/qbo/payments/refresh-single` — Pull Payment from QuickBooks
- **Removed** `POST /api/qbo/payments/refresh-tracked` — Refresh Payments in Background
- **Removed** `POST /api/qbo/payments/search-qbo` — Search Payments in QuickBooks
- **Removed** `GET /api/qbo/payments/sync-info` — Get Payments Sync Info
- **Removed** `POST /api/qbo/purchase-orders/refresh-single` — Pull Purchase Order from QuickBooks
- **Removed** `POST /api/qbo/purchase-orders/refresh-tracked` — Refresh Purchase Orders in Background
- **Removed** `POST /api/qbo/purchase-orders/search-qbo` — Search Purchase Orders in QuickBooks
- **Removed** `GET /api/qbo/purchase-orders/sync-info` — Get Purchase Orders Sync Info
- **Removed** `GET /api/qbo/purchase-orders/{id}/activity-log` — Get Purchase Order Activity Log
- **Removed** `GET /api/qbo/purchases/{id}/activity-log` — Get Purchase Activity Log
- **Removed** `POST /api/qbo/tax-codes/refresh-single` — Pull Tax Code from QuickBooks
- **Removed** `POST /api/qbo/tax-codes/refresh-tracked` — Refresh Tax Codes in Background
- **Removed** `POST /api/qbo/tax-codes/search-qbo` — Search Tax Codes in QuickBooks
- **Removed** `GET /api/qbo/tax-codes/sync-info` — Get Tax Codes Sync Info
- **Removed** `POST /api/qbo/tax-rates/refresh-single` — Pull Tax Rate from QuickBooks
- **Removed** `POST /api/qbo/tax-rates/refresh-tracked` — Refresh Tax Rates in Background
- **Removed** `POST /api/qbo/tax-rates/search-qbo` — Search Tax Rates in QuickBooks
- **Removed** `GET /api/qbo/tax-rates/sync-info` — Get Tax Rates Sync Info
- **Removed** `GET /api/qbo/vendor-credits/{id}/activity-log` — Get Vendor Credit Activity Log
- **Removed** `POST /api/qbo/vendors/refresh-single` — Pull Vendor from QuickBooks
- **Removed** `POST /api/qbo/vendors/refresh-tracked` — Refresh Vendors in Background
- **Removed** `POST /api/qbo/vendors/search-qbo` — Search Vendors in QuickBooks
- **Removed** `GET /api/qbo/vendors/sync-info` — Get Vendors Sync Info
- **Removed** `GET /api/qbo/vendors/{id}/activity-log` — Get Vendor Activity Log

#### ShipHero
- **Removed** `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit` — List Inventory Changes
- **Removed** `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit/export` — Export Inventory Audit
- **Removed** `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit/kpi-stats` — Get Inventory Audit KPI Stats
- **Removed** `POST /api/shiphero/integration-instances/{integration_instance}/inventory-audit/sync` — Sync Inventory Audit
- **Removed** `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit/sync-info` — Get Inventory Audit Sync Info
- **Removed** `GET /api/shiphero/integration-instances/{integration_instance}/inventory-audit/{inventoryChange}` — Get Inventory Change
- **Removed** `POST /api/shiphero/integration-instances/{integration_instance}/orders/refresh-order` — Import Single Order
- **Removed** `POST /api/shiphero/integration-instances/{integration_instance}/orders/search` — Search Orders by Number
- **Removed** `GET /api/shiphero/integration-instances/{integration_instance}/products` — List Products
- **Removed** `PUT /api/shiphero/integration-instances/{integration_instance}/products/{shipHeroProduct}/mapping` — Set Product SKU Mapping
- **Removed** `GET /api/shiphero/integration-instances/{integration_instance}/products/{sku}` — Get Product

#### Shopify
- **Removed** `GET /api/shopify/{integrationInstance}/balance-transactions` — List Balance Transactions
- **Removed** `GET /api/shopify/{integrationInstance}/balance-transactions/filter-options` — Get Balance Transaction Filter Options
- **Removed** `GET /api/shopify/{integrationInstance}/costs/last-sync` — Get Last Cost Sync
- **Removed** `POST /api/shopify/{integrationInstance}/costs/sync` — Sync Costs to Shopify
- **Removed** `GET /api/shopify/{integrationInstance}/costs/sync-progress/{trackedJobLogId}` — Get Cost Sync Progress
- **Removed** `GET /api/shopify/{integrationInstance}/pre-start-date-orders/results/{trackedJobLogId}` — Get Pre-Start-Date Order Search Results
- **Removed** `POST /api/shopify/{integrationInstance}/pre-start-date-orders/search-all` — Search All Pre-Start-Date Orders (Async)
- **Removed** `GET /api/shopify/{integrationInstance}/products/{product}/raw-graphql` — Get Raw Product (GraphQL)

#### Xero
- **Removed** `POST /api/xero/v2/contacts/{contact}/link-sku-entity` — Link Contact to SKU Entity
- **Removed** `DELETE /api/xero/v2/contacts/{contact}/unlink-sku-entity` — Unlink Contact from SKU Entity

### Incompatible changes

#### eBay
- **Changed** `GET /api/ebay/{integrationInstance}/legacy-products` — List Legacy Products (Integration)
  - new parameter(s): `limit`
  - removed parameter(s): `per_page`

## Added

### Amazon
- `GET /api/amazon/{integrationInstance}/orders/export` — Export Orders
- `GET /api/amazon/{integrationInstance}/removal-orders/{orderId}/undo-all-receipts/preview-impact` — Preview Undo All Receipts Impact
- `GET /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/remove-receipt/preview-impact` — Preview Removal Receipt Remove Impact

### Analytics
- `GET /api/admin/portal/analytics` — Get Portal Analytics

### Applications
- `GET /api/admin/portal/applications` — List Applications

### Approvals
- `GET /api/portal/approvals` — List Approval Queue
- `GET /api/portal/approvals/mine` — List My Pending Approvals

### Authentication
- `GET /api/portal/auth/sso/{company}/callback` — Complete SSO Sign-In
- `GET /api/portal/auth/sso/{company}/redirect` — Start SSO Sign-In

### Billing & Invoices
- `GET /api/portal/account/statement` — Get Account Statement
- `GET /api/portal/invoices` — List Invoices
- `GET /api/portal/invoices/{invoice}` — Get Invoice
- `GET /api/portal/invoices/{invoice}/pdf` — Download Invoice PDF
- `GET /api/portal/payments` — List Payments

### Buyers
- `GET /api/admin/portal/companies/{company}/users` — List Company Buyers

### Cart
- `DELETE /api/portal/cart` — Empty Cart
- `GET /api/portal/cart` — Get Cart
- `DELETE /api/portal/cart/lines/{line}` — Remove Cart Line

### Catalog
- `GET /api/portal/catalog/filters` — Get Catalog Filters
- `GET /api/portal/catalog/products` — List Catalog Products
- `GET /api/portal/catalog/products/{product}` — Get Catalog Product
- `DELETE /api/portal/catalog/products/{product}/notify-me` — Unsubscribe from Back-in-Stock Alert

### Catalogs
- `GET /api/admin/portal/catalogs` — List Catalogs
- `DELETE /api/admin/portal/catalogs/{catalog}` — Delete Catalog
- `GET /api/admin/portal/catalogs/{catalog}` — Get Catalog
- `DELETE /api/admin/portal/catalogs/{catalog}/rules/{rule}` — Delete Catalog Rule

### Checkout & Orders
- `GET /api/portal/addresses` — List Addresses
- `GET /api/portal/orders` — List Orders
- `GET /api/portal/orders/{order}` — Get Order
- `GET /api/portal/orders/{order}/documents/{type}` — Download Order Document
- `GET /api/portal/shipping-methods` — List Shipping Methods

### Companies
- `GET /api/admin/portal/companies` — List Companies
- `GET /api/admin/portal/companies/{company}` — Get Company

### Integration Instances
- `DELETE /api/magento2/integration-instances/{instanceId}` — Delete Instance
- `GET /api/magento2/integration-instances/{instanceId}` — Get Instance

### Ledger (Accounting v2)
- `GET /api/ledger/reconciliation/inventory/chain` — Get Inventory Reconciliation Chain
- `GET /api/ledger/reconciliation/inventory/period` — Get Inventory Reconciliation Period
- `GET /api/ledger/reconciliation/inventory/period-entries` — Get Inventory Reconciliation Period Entries

### Lists & Reorder
- `GET /api/portal/lists` — List Saved Lists
- `DELETE /api/portal/lists/{list}` — Delete Saved List
- `GET /api/portal/lists/{list}` — Get Saved List
- `DELETE /api/portal/lists/{list}/lines/{line}` — Remove List Line

### Locations
- `GET /api/admin/portal/companies/{company}/locations` — List Company Locations
- `DELETE /api/admin/portal/companies/{company}/locations/{location}` — Detach Location

### Magento 2
- `GET /api/magento2/integration-instances/{instanceId}/inventory/items` — List Inventory Items
- `GET /api/magento2/integration-instances/{instanceId}/inventory/summary` — Inventory Summary
- `GET /api/magento2/integration-instances/{instanceId}/webhooks` — List Sync Runs
- `GET /api/magento2/integration-instances/{instanceId}/webhooks/schedule` — Polling Schedule
- `GET /api/magento2/integration-instances/{instanceId}/webhooks/summary` — Run Summary
- `GET /api/magento2/integration-instances/{instanceId}/webhooks/{runId}` — Show Sync Run

### Notifications
- `GET /api/portal/notifications/preferences` — Get Notification Preferences

### Pricing
- `GET /api/admin/portal/pricing/customer-overrides` — List Price Overrides
- `DELETE /api/admin/portal/pricing/customer-overrides/{override}` — Delete Price Override
- `GET /api/admin/portal/pricing/quantity-breaks` — List Quantity Breaks
- `DELETE /api/admin/portal/pricing/quantity-breaks/{quantityBreak}` — Delete Quantity Break

### Product Substitutions
- `GET /api/product-substitutions` — List Product Substitutions
- `GET /api/product-substitutions/export` — Export Product Substitutions
- `GET /api/product-substitutions/import/template` — Download Substitution Import Template
- `DELETE /api/product-substitutions/{substitutionId}` — Delete Product Substitution
- `GET /api/products/{productId}/substitutions` — List Substitutions for a Product

### Quotes & RFQ
- `GET /api/portal/quotes` — List Quotes
- `GET /api/portal/quotes/{quote}` — Get Quote

### Registration
- `GET /api/portal/register/{token}/status` — Check Application Status

### Rep-Assisted Ordering
- `GET /api/admin/portal/locations/{location}/impersonate` — Impersonate Buyer View

### Returns
- `GET /api/portal/orders/{order}/returnable` — Get Returnable Lines
- `GET /api/portal/returns` — List Returns
- `GET /api/portal/returns/{rma}` — Get Return

### Sales Order Lines
- `GET /api/sales-order-lines/{salesOrderLineId}/swap-suggestions` — List Swap Suggestions for a Line

### Session
- `GET /api/portal/auth/profile` — Get Profile
- `GET /api/portal/me` — Get Current Buyer

### Settings
- `GET /api/admin/portal/companies/{company}/settings` — Get Company Settings
- `GET /api/admin/portal/locations/{location}/settings` — Get Location Settings
- `GET /api/admin/portal/settings` — Get Portal Settings

### ShipBob
- `DELETE /api/shipbob/{instance}` — Delete Instance
- `GET /api/shipbob/{instance}` — Get Instance
- `GET /api/shipbob/{instance}/dashboard` — Get Dashboard Metrics
- `GET /api/shipbob/{instance}/fulfillment-centers` — List Fulfillment Centers
- `GET /api/shipbob/{instance}/inventory` — List Inventory Levels
- `GET /api/shipbob/{instance}/inventory/discrepancies` — List Discrepancies
- `GET /api/shipbob/{instance}/orders` — List Orders
- `GET /api/shipbob/{instance}/orders/search` — Search Orders
- `GET /api/shipbob/{instance}/orders/sync-info` — Get Order Sync Info
- `GET /api/shipbob/{instance}/orders/{order}` — Get Order
- `GET /api/shipbob/{instance}/orders/{order}/raw` — Get Raw Order Data
- `GET /api/shipbob/{instance}/products` — List Products
- `GET /api/shipbob/{instance}/products/{product}` — Get Product
- `GET /api/shipbob/{instance}/products/{product}/raw` — Get Raw Product Data
- `GET /api/shipbob/{instance}/receiving` — List Receiving Orders
- `GET /api/shipbob/{instance}/receiving/{receiving}` — Get Receiving Order
- `GET /api/shipbob/{instance}/receiving/{receiving}/box-labels` — Get Box Labels
- `GET /api/shipbob/{instance}/receiving/{receiving}/raw` — Get Raw Receiving Order Data
- `GET /api/shipbob/{instance}/returns` — List Returns
- `GET /api/shipbob/{instance}/returns/{return}` — Get Return
- `GET /api/shipbob/{instance}/returns/{return}/raw` — Get Raw Return Data
- `GET /api/shipbob/{instance}/shipments` — List Shipments
- `GET /api/shipbob/{instance}/shipments/{shipment}` — Get Shipment
- `GET /api/shipbob/{instance}/shipments/{shipment}/raw` — Get Raw Shipment Data
- `GET /api/shipbob/{instance}/shipments/{shipment}/timeline` — Get Shipment Timeline
- `GET /api/shipbob/{instance}/shipping-methods` — List Shipping Methods
- `GET /api/shipbob/{instance}/shipping-methods/export` — Export Shipping Method Mappings

_…plus 105 more (see the API reference)._

_Spec version 1.0.0 → 1.0.0._
