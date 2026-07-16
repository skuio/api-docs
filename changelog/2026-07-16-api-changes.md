---
title: API changes — 2026-07-16
description: This release includes 129 additions, 4 changes, 25 removals. 27 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-07-16
---

This release includes 129 additions, 4 changes, 25 removals. 27 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Amazon
- **Removed** `GET /api/amazon/{integrationInstance}/orders/export` — Export Orders

#### Export
- **Removed** `POST /api/export/create-download-file` — Start Async Export
- **Removed** `GET /api/export/integration-instances/{integration_instance}/listings/{format}` — Export Integration Listings by Format

#### Integration Instances
- **Removed** `DELETE /api/integration-instances/{integration_instance}/listings` — Bulk Delete Listings
- **Removed** `GET /api/integration-instances/{integration_instance}/listings` — List Listings (Sales Channel Products)
- **Removed** `POST /api/integration-instances/{integration_instance}/listings/create-sku-products` — Create SKU Products from Listings
- **Removed** `POST /api/integration-instances/{integration_instance}/listings/deletable` — Check Listing Deletability
- **Removed** `GET /api/integration-instances/{integration_instance}/listings/mapping-info` — Get Listing Mapping Info
- **Removed** `PUT /api/integration-instances/{integration_instance}/map-listing` — Map Listing to SKU Product
- **Removed** `PUT /api/integration-instances/{integration_instance}/orders/archive` — Bulk Archive Channel Orders
- **Removed** `PUT /api/integration-instances/{integration_instance}/orders/create-sku` — Create SKU Orders from Channel Orders
- **Removed** `PUT /api/integration-instances/{integration_instance}/orders/unarchived` — Bulk Unarchive Channel Orders
- **Removed** `PUT /api/integration-instances/{integration_instance}/unmap-listing` — Unmap Listing from SKU Product

#### Product Listings
- **Removed** `PUT /api/product-listings/{product_listing}` — Update Product Listing

#### Reporting
- **Removed** `GET /api/reporting/most-profitable-products` — Get Most Profitable Products
- **Removed** `GET /api/reporting/orders` — Get Dashboard Orders
- **Removed** `GET /api/reporting/products` — Get Dashboard Products
- **Removed** `GET /api/reporting/top-selling-products` — Get Top Selling Products

#### Temu
- **Removed** `GET /api/temu/{integrationInstance}/orders/export` — Export Orders

#### UI Utilities
- **Removed** `GET /api/table-views` — List Table Views
- **Removed** `POST /api/table-views` — Create Table View
- **Removed** `PUT /api/table-views/set-default-view/{viewId}` — Set Default View
- **Removed** `DELETE /api/table-views/{tableView}` — Delete Table View
- **Removed** `GET /api/table-views/{tableView}` — Get Table View
- **Removed** `PUT /api/table-views/{tableView}` — Update Table View

### Incompatible changes

#### eBay
- **Changed** `GET /api/ebay/{integrationInstance}/legacy-products` — List Legacy Products (Integration)
  - new parameter(s): `per_page`
  - removed parameter(s): `limit`

#### Suppliers
- **Changed** `GET /api/suppliers/{supplier}/pricing-tiers` — Get Supplier Pricing Tiers
  - new parameter(s): `per_page`
  - removed parameter(s): `excluded[]`, `included[]`

## Added

### Alerts
- `GET /api/alert-preferences/mine` — Get My Notification Preferences
- `POST /api/alert-preferences/mine/preset` — Apply My Notification Preset
- `GET /api/alert-subscriptions` — Get Alert Audience
- `GET /api/alert-subscriptions/counts` — Get Alert Audience Counts

### Connection
- `POST /api/magento2/install` — Install
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/test-connection` — Test Instance Connection
- `POST /api/magento2/test-connection` — Test Connection

### Customers
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/customers` — List Customers
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/customers/filter-options` — Get Customer Filter Options
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/customers/refresh` — Refresh Customers
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/customers/search` — Search Customers
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/customers/{customer}` — Get Customer
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/customers/{customer}/refresh` — Refresh Single Customer

### Dashboard
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/dashboard` — Get Instance Dashboard

### Data Imports
- `GET /api/v2/data-imports/template` — Download Import Template

### eBay
- `POST /api/ebay/{integrationInstance}/orders/update-sku-orders` — Update SKU Orders from Channel Orders

### Integration Instances
- `GET /api/magento2/integration-instances` — List Instances
- `DELETE /api/magento2/integration-instances/{magento2IntegrationInstance}` — Delete Instance
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}` — Get Instance
- `PATCH /api/magento2/integration-instances/{magento2IntegrationInstance}` — Update Instance

### Inventory Sources (MSI)
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/inventory-sources-cache` — List Cached MSI Sources
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/inventory-sources/refresh` — Refresh MSI Sources from Magento
- `PATCH /api/magento2/integration-instances/{magento2IntegrationInstance}/inventory-sources/{sourceCode}/master-of-stock` — Update Master of Stock for a Source

### Ledger (Accounting v2)
- `GET /api/ledger/entries/{entry}/sync-inspection` — Get Entry Sync Inspection

### OAuth
- `POST /api/magento2/oauth/callback` — OAuth Callback

### Odoo 3PL
- `GET /api/odoo-3pl/{integration_instance}/shipping-methods` — List Shipping Methods
- `POST /api/odoo-3pl/{integration_instance}/shipping-methods/auto-match` — Auto-Match Shipping Methods
- `GET /api/odoo-3pl/{integration_instance}/shipping-methods/export` — Export Shipping Method Mappings
- `POST /api/odoo-3pl/{integration_instance}/shipping-methods/import` — Import Shipping Method Mappings

### Orders
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/orders/import-pre-start-date` — Pre-Start-Date Orders — Import
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/orders/pre-start-date-search` — Pre-Start-Date Orders — Search Specific Order
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/orders/refresh` — Refresh Orders
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/orders/{magento2Order}` — Get Order By ID

### Product Listings
- `GET /api/v2/listing-drafts` — List Drafts
- `GET /api/v2/listing-drafts/mappable-product-fields` — List Mappable Product Fields
- `GET /api/v2/listing-drafts/{draft}` — Get Draft
- `GET /api/v2/listings/coverage` — Get Catalog Coverage Matrix
- `GET /api/v2/products/{product}/publish-readiness` — Get Publish-Readiness Snapshot

### Products
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/products` — List Products
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/products/bulk-archive` — Bulk Archive Products
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/products/bulk-delete-magento-records` — Bulk Delete Magento Records
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/products/bulk-map` — Bulk Map Products
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/products/bulk-unarchive` — Bulk Unarchive Products
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/products/bulk-unmap` — Bulk Unmap Products
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/products/field-mappings` — Get Field Mappings
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/products/filter-options` — Get Products Filter Options
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/products/latest-sync-info` — Get Products Latest Sync Info
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/products/refresh` — Refresh Products
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/products/search` — Search Products (Magento live)
- `DELETE /api/magento2/integration-instances/{magento2IntegrationInstance}/products/{product}` — Delete Product
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/products/{product}` — Get Product
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/products/{product}/archive` — Archive Product
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/products/{product}/create-sku-product` — Create SKU Product From Magento
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/products/{product}/map` — Map Product
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/products/{product}/orders` — Get Orders For Product
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/products/{product}/raw` — Get Raw Product Payload
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/products/{product}/refresh-single` — Refresh Single Product
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/products/{product}/smart-match` — Smart Match SKU Product
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/products/{product}/unarchive` — Unarchive Product
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/products/{product}/unmap` — Unmap Product
- `GET /api/v2/products/{product}/sales` — List Product Sales

### Purchase Orders
- `GET /api/purchase-orders/{purchase_order}/lines` — Get PO Lines

### Reference Data (Read-Only)
- `GET /api/v2/incoterms/export` — Export Incoterms
- `GET /api/v2/incoterms/{incoterm}` — Get Incoterm
- `GET /api/v2/incoterms/{incoterm}/activity-log` — Get Incoterm Activity Log

### Shipments
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/shipments` — List Shipments
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/shipments/{shipment}` — Get Shipment

### Shipping Method Mappings
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/shipping-method-mappings` — List Shipping Method Mappings

### Sub Sales Channels
- `PATCH /api/sub-sales-channels/{subSalesChannel}/source-type` — Reclassify Source Type

### Transactions
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/transactions` — List Transactions
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/transactions/filter-options` — Get Transaction Filter Options
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/transactions/refresh` — Refresh Transactions
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/transactions/{txn}` — Get Transaction
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/transactions/{txn}/push-to-accounting` — Push Transaction to Accounting
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/transactions/{txn}/reconcile` — Toggle Reconciliation
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/transactions/{txn}/refresh` — Refresh Single Transaction

### Units of Measure
- `POST /api/manufacturing/products/{product}/units-of-measure/enable` — Enable Product Unit of Measure

### Walmart
- `GET /api/walmart/{integrationInstance}/feeds` — List Feeds
- `GET /api/walmart/{integrationInstance}/feeds/{feed}` — Get Feed
- `GET /api/walmart/{integrationInstance}/insights/seller-health` — Get Seller Health Summary
- `DELETE /api/walmart/{integrationInstance}/listings/{listing}/promotions` — Delete Promotion
- `GET /api/walmart/{integrationInstance}/oauth/authorization-url` — Get Authorization URL
- `GET /api/walmart/{integrationInstance}/orders/{order}/shipping/labels` — List Order Shipping Labels
- `GET /api/walmart/{integrationInstance}/platform-status` — Get API Platform Status
- `GET /api/walmart/{integrationInstance}/reports/payment-statement` — Get Payment Statement
- `GET /api/walmart/{integrationInstance}/reports/performance` — Get Partner Performance Report
- `GET /api/walmart/{integrationInstance}/reports/recon/dates` — List Settlement Report Dates
- `GET /api/walmart/{integrationInstance}/reports/recon/download` — Download Settlement Report
- `GET /api/walmart/{integrationInstance}/reports/requests` — List Report Requests
- `GET /api/walmart/{integrationInstance}/reports/requests/{requestId}` — Get Report Request Status
- `GET /api/walmart/{integrationInstance}/reports/requests/{requestId}/download` — Get Report Download URL
- `GET /api/walmart/{integrationInstance}/shipping/carriers` — List Supported Carriers
- `GET /api/walmart/{integrationInstance}/shipping/fulfillment-centers` — List Fulfillment Centers
- `DELETE /api/walmart/{integrationInstance}/shipping/labels/{carrier}/{trackingNumber}` — Discard Shipping Label
- `GET /api/walmart/{integrationInstance}/shipping/labels/{carrier}/{trackingNumber}/download` — Download Shipping Label
- `GET /api/walmart/{integrationInstance}/shipping/templates` — List Shipping Templates
- `GET /api/walmart/{integrationInstance}/webhook-subscriptions` — List Webhook Subscriptions
- `GET /api/walmart/{integrationInstance}/webhook-subscriptions/event-types` — List Available Event Types
- `DELETE /api/walmart/{integrationInstance}/webhook-subscriptions/{subscription}` — Delete Webhook Subscription

### Warehouse Mappings
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/warehouse-mappings` — List Warehouse Mappings

_…plus 29 more (see the API reference)._

## Changed

### BOMs
- `POST /api/manufacturing/boms` — Create BOM
  - new response code(s): `201`
  - removed response code(s): `200`

### Manufacturing Orders
- `POST /api/manufacturing/manufacturing-orders/{id}/record-production` — Record Production
  - new response code(s): `200`

_Spec version 1.0.0 → 1.0.0._
