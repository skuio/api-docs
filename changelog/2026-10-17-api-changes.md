---
title: API changes — 2026-10-17
description: This release includes 62 additions, 92 changes, 20 removals. 20 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-10-17
---

This release includes 62 additions, 92 changes, 20 removals. 20 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Amazon
- **Removed** `GET /api/amazon/{integrationInstance}/fnsku-products/{fnskuProduct}` — Show FNSKU Product

#### ShipBob
- **Removed** `GET /api/shipbob/{instance}/inventory/discrepancies` — List Discrepancies
- **Removed** `POST /api/shipbob/{instance}/inventory/discrepancies/stock-take` — Create Stock Take from Discrepancies

#### Shipfusion
- **Removed** `POST /api/shipfusion/integration-instances/{integration_instance}/inventory/create-stock-take` — Create Stock Take from Discrepancies
- **Removed** `GET /api/shipfusion/integration-instances/{integration_instance}/inventory/discrepancies` — Get Inventory Discrepancies
- **Removed** `GET /api/shipfusion/integration-instances/{integration_instance}/inventory/without-shipfusion-inventory` — Get Products Without Shipfusion Inventory
- **Removed** `GET /api/shipfusion/integration-instances/{integration_instance}/inventory/without-sku-products` — Get Items Without SKU Products

#### ShipHero
- **Removed** `POST /api/shiphero/integration-instances/{integration_instance}/inventory/create-stock-take` — Create Stock Take From Discrepancies
- **Removed** `GET /api/shiphero/integration-instances/{integration_instance}/inventory/discrepancies` — Get Inventory Discrepancies
- **Removed** `GET /api/shiphero/integration-instances/{integration_instance}/inventory/without-shiphero-inventory` — Get SKU Products Without ShipHero Inventory
- **Removed** `GET /api/shiphero/integration-instances/{integration_instance}/inventory/without-sku-products` — Get Items Without SKU Products

#### Trackstar
- **Removed** `POST /api/trackstar/integration-instances/{integration_instance}/inventory/create-stock-take` — Create Stock Take from Discrepancies
- **Removed** `GET /api/trackstar/integration-instances/{integration_instance}/inventory/discrepancies` — Inventory Discrepancies
- **Removed** `GET /api/trackstar/integration-instances/{integration_instance}/inventory/without-sku-products` — Items Without SKU Products
- **Removed** `GET /api/trackstar/integration-instances/{integration_instance}/inventory/without-trackstar-inventory` — SKU Products Without Trackstar Inventory

#### Veracore
- **Removed** `POST /api/veracore/integration-instances/{integration_instance}/inventory/create-stock-take` — Create Stock Take From Discrepancies
- **Removed** `GET /api/veracore/integration-instances/{integration_instance}/inventory/discrepancies` — Get Inventory Discrepancies
- **Removed** `GET /api/veracore/integration-instances/{integration_instance}/inventory/discrepancy-stats` — Get Inventory Discrepancy Stats
- **Removed** `GET /api/veracore/integration-instances/{integration_instance}/inventory/without-sku-products` — Get Inventory Without SKU.io Products
- **Removed** `GET /api/veracore/integration-instances/{integration_instance}/inventory/without-veracore-inventory` — Get Products Without Veracore Inventory

## Added

### 3PL Inventory Comparison
- `GET /api/3pl-inventory/integration-instances/{integrationInstance}/settings` — Get 3PL Inventory Comparison Settings
- `PUT /api/3pl-inventory/integration-instances/{integrationInstance}/settings` — Update 3PL Inventory Comparison Settings
- `GET /api/3pl-inventory/integration-instances/{integrationInstance}/snapshots` — List 3PL Inventory Snapshots
- `POST /api/3pl-inventory/integration-instances/{integrationInstance}/snapshots` — Capture 3PL Inventory Snapshot
- `POST /api/3pl-inventory/integration-instances/{integrationInstance}/snapshots/{snapshot}/export` — Export 3PL Inventory Comparison Lines
- `GET /api/3pl-inventory/integration-instances/{integrationInstance}/snapshots/{snapshot}/lines` — List 3PL Inventory Comparison Lines
- `GET /api/3pl-inventory/integration-instances/{integrationInstance}/snapshots/{snapshot}/lines/{line}/bridge` — Get 3PL Inventory Comparison Line Detail
- `POST /api/3pl-inventory/integration-instances/{integrationInstance}/snapshots/{snapshot}/stock-takes` — Accept 3PL Counts
- `POST /api/3pl-inventory/integration-instances/{integrationInstance}/snapshots/{snapshot}/stock-takes/preview` — Preview Accepting 3PL Counts
- `GET /api/3pl-inventory/integration-instances/{integrationInstance}/summary` — Get 3PL Inventory Comparison Summary
- `GET /api/3pl-inventory/overview` — List 3PL Inventory Comparison Overview

### Agent Runner Job API
- `GET /api/automation/runner/download` — Download Agent Runner Program
- `POST /api/automation/runner/heartbeat` — Send Agent Runner Heartbeat
- `GET /api/automation/runner/jobs/next` — Claim Next Agent Job
- `POST /api/automation/runner/jobs/{job}/complete` — Complete Agent Job
- `POST /api/automation/runner/jobs/{job}/fail` — Fail Agent Job
- `POST /api/automation/runner/jobs/{job}/progress` — Report Agent Job Progress

### Agent Runners
- `GET /api/automation/runners` — List Agent Runners
- `POST /api/automation/runners` — Create Agent Runner
- `GET /api/automation/runners/{runner}/jobs` — List Agent Runner Jobs
- `POST /api/automation/runners/{runner}/revoke` — Revoke Agent Runner
- `POST /api/automation/runners/{runner}/rotate` — Rotate Agent Runner Token

### Odoo 3PL
- `GET /api/odoo-3pl/{integration_instance}/inventory` — List Inventory Levels

### Record Actions
- `GET /api/automation/record-actions` — List Record Actions
- `GET /api/automation/record-actions/pinned` — List Pinned Record Actions
- `GET /api/automation/record-actions/runs` — List Record Action Runs
- `GET /api/automation/record-actions/runs/{execution}` — Get Record Action Run
- `POST /api/automation/record-actions/{workflow}/run` — Run Record Action

### Sales Orders
- `GET /api/sales-orders/{salesOrder}/channel-shipping-labels` — List Sales Channel Shipping Labels

### Success Plans
- `GET /api/success-plan` — Get Success Plan
- `POST /api/success-plan/attachments` — Upload Success Plan Attachment
- `GET /api/success-plan/attachments/{attachment}` — Download Success Plan Attachment
- `POST /api/success-plan/check-ins/year-end` — Start Year-End Count Check-in
- `POST /api/success-plan/check-ins/{checkIn}/answer` — Answer Check-in
- `POST /api/success-plan/check-ins/{checkIn}/skip` — Skip Check-in
- `POST /api/success-plan/check-ins/{checkIn}/snooze` — Snooze Check-in
- `GET /api/success-plan/consent` — Get Sharing Consent
- `PUT /api/success-plan/consent` — Update Sharing Consent
- `POST /api/success-plan/goal-met/{goal}/respond` — Respond to Goal Met
- `POST /api/success-plan/goals` — Create Success Plan Goal
- `PATCH /api/success-plan/goals/{goal}` — Update Success Plan Goal
- `POST /api/success-plan/goals/{goal}/archive` — Archive Success Plan Goal
- `POST /api/success-plan/goals/{goal}/baseline` — Correct Goal Baseline
- `POST /api/success-plan/goals/{goal}/met` — Mark Success Plan Goal Met
- `GET /api/success-plan/goals/{goal}/readings` — List Goal Readings
- `POST /api/success-plan/goals/{goal}/readings` — Add Goal Reading
- `GET /api/success-plan/profile` — Get Success Plan Profile
- `PUT /api/success-plan/profile` — Update Success Plan Profile
- `POST /api/success-plan/publications/{publication}/decision` — Decide on Draft
- `GET /api/success-plan/readings/{reading}/records` — List Reading Records
- `GET /api/success-plan/settings/exclusions` — Get Packaging Exclusions
- `PUT /api/success-plan/settings/exclusions` — Update Packaging Exclusions
- `POST /api/success-plan/settings/exclusions/recompute` — Recompute Measured History
- `GET /api/success-plan/story` — List Story Entries
- `POST /api/success-plan/story/{entry}/removal-request` — Request Quote Removal
- `GET /api/success-plan/taxonomy` — Get Profile Taxonomy
- `GET /api/success-plan/templates` — Get Goal Templates
- `GET /api/success-plan/templates/{template}/suggestion` — Get Goal Template Suggestion

### Workflow Callbacks
- `POST /api/automation/callbacks/{wait}/complete` — Complete Workflow Callback
- `POST /api/automation/callbacks/{wait}/fail` — Fail Workflow Callback
- `POST /api/automation/callbacks/{wait}/progress` — Report Workflow Callback Progress

### Workflow Executions
- `POST /api/automation/workflow-executions/{execution}/cancel` — Cancel Workflow Execution

## Changed

### 3PL
- `POST /api/3pl/tokens` — Create 3PL Integration Token
  - removed response code(s): `200`
- `DELETE /api/3pl/tokens/{integrationInstance}` — Delete 3PL Integration Token
  - removed response code(s): `200`

### Amazon
- `GET /api/amazon/unified/ledgers/export/download` — Download Ledger Export
  - new response code(s): `404`
  - removed response code(s): `200`

### BigCommerce
- `POST /api/big-commerce/{integrationInstance}/fulfillments/{salesOrderFulfillment}/submit` — Submit Fulfillment
  - new response code(s): `409`

### BOMs
- `GET /api/manufacturing/boms/list/export` — Export BOMs
  - new response code(s): `422`
- `DELETE /api/manufacturing/boms/{id}` — Delete BOM
  - new response code(s): `422`
  - removed response code(s): `200`
- `POST /api/manufacturing/boms/{id}/activate` — Activate BOM
  - removed response code(s): `200`
- `POST /api/manufacturing/boms/{id}/deactivate` — Deactivate BOM
  - removed response code(s): `200`
- `POST /api/manufacturing/boms/{id}/restore` — Restore BOM
  - removed response code(s): `200`

### Customers
- `POST /api/square/instances/{squareIntegrationInstance}/customers/sync` — Sync Square Customers
  - removed response code(s): `200`

### Document Inbox
- `POST /api/document-inbox/customer_po/{extraction_id}/reclassify` — Reclassify Document Type
  - removed response code(s): `200`

### eBay
- `POST /api/ebay/{integrationInstance}/orders/update-sku-orders` — Update SKU Orders from Channel Orders
  - removed response code(s): `200`

### Inventory
- `POST /api/square/instances/{squareIntegrationInstance}/inventory/sync` — Sync Square Inventory
  - removed response code(s): `200`

### Manufacturing Orders
- `POST /api/manufacturing/manufacturing-orders/{id}/close` — Close Manufacturing Order
  - removed response code(s): `200`
- `POST /api/manufacturing/manufacturing-orders/{id}/complete` — Complete Manufacturing Order
  - removed response code(s): `200`
- `POST /api/manufacturing/manufacturing-orders/{id}/confirm` — Confirm Manufacturing Order
  - removed response code(s): `200`
- `POST /api/manufacturing/manufacturing-orders/{id}/reopen` — Reopen Manufacturing Order
  - removed response code(s): `200`

### Misc
- `POST /api/notes` — Create Note
  - new response code(s): `404`

### Orders
- `POST /api/square/orders/bulk-delete` — Bulk Delete Square Orders
  - removed response code(s): `200`
- `POST /api/square/orders/bulk-delete-sku-orders` — Bulk Delete SKU Orders
  - removed response code(s): `200`
- `POST /api/square/orders/create-sku-orders` — Create SKU Orders (bulk)
  - removed response code(s): `200`
- `POST /api/square/orders/update-sku-orders` — Update SKU Orders (bulk)
  - removed response code(s): `200`
- `POST /api/square/orders/{squareOrder}/refresh` — Refresh Single Square Order
  - removed response code(s): `200`
- `DELETE /api/square/orders/{squareOrder}/sku-order` — Delete Single SKU Order (unlink)
  - removed response code(s): `200`

### QuickBooks Online
- `DELETE /api/qbo/bills` — Delete Bills
  - removed response code(s): `200`
- `POST /api/qbo/bills/archive` — Archive Bills
  - removed response code(s): `200`
- `POST /api/qbo/bills/refresh` — Refresh Bills
  - removed response code(s): `200`
- `POST /api/qbo/bills/unarchive` — Unarchive Bills
  - removed response code(s): `200`
- `DELETE /api/qbo/credit-memos` — Delete Credit Memos
  - removed response code(s): `200`
- `POST /api/qbo/credit-memos/archive` — Archive Credit Memos
  - removed response code(s): `200`
- `POST /api/qbo/credit-memos/refresh` — Refresh Credit Memos
  - removed response code(s): `200`
- `POST /api/qbo/credit-memos/unarchive` — Unarchive Credit Memos
  - removed response code(s): `200`
- `DELETE /api/qbo/customers` — Delete Customers
  - removed response code(s): `200`
- `POST /api/qbo/customers/archive` — Archive Customers
  - removed response code(s): `200`
- `POST /api/qbo/customers/refresh` — Refresh Customers
  - removed response code(s): `200`
- `POST /api/qbo/customers/refresh-sku-customers` — Refresh SKU Customers from QBO
  - removed response code(s): `200`
- `POST /api/qbo/customers/unlink-sku-customers` — Unlink SKU Customers (Bulk)
  - removed response code(s): `200`
- `POST /api/qbo/customers/{qboCustomer}/link-sku-customer` — Link SKU Customer
  - removed response code(s): `200`
- `DELETE /api/qbo/customers/{qboCustomer}/unlink-sku-customer` — Unlink SKU Customer
  - removed response code(s): `200`
- `DELETE /api/qbo/invoices` — Delete Invoices
  - removed response code(s): `200`
- `POST /api/qbo/invoices/archive` — Archive Invoices
  - removed response code(s): `200`
- `POST /api/qbo/invoices/refresh` — Refresh Invoices
  - removed response code(s): `200`
- `DELETE /api/qbo/items` — Delete Items
  - removed response code(s): `200`
- `POST /api/qbo/items/archive` — Archive Items
  - removed response code(s): `200`
- `POST /api/qbo/items/refresh` — Refresh Items
  - removed response code(s): `200`
- `DELETE /api/qbo/journals` — Delete Journals
  - removed response code(s): `200`
- `POST /api/qbo/journals/archive` — Archive Journals
  - removed response code(s): `200`
- `POST /api/qbo/journals/refresh` — Refresh Journals
  - removed response code(s): `200`
- `PUT /api/qbo/payment-type-mappings/{paymentTypeId}` — Update Payment Type Mapping
  - removed response code(s): `200`
- `DELETE /api/qbo/payments` — Delete Payments
  - removed response code(s): `200`
- `POST /api/qbo/payments/archive` — Archive Payments
  - removed response code(s): `200`
- `POST /api/qbo/payments/refresh` — Refresh Payments
  - removed response code(s): `200`
- `DELETE /api/qbo/purchase-orders` — Delete Purchase Orders
  - removed response code(s): `200`
- `POST /api/qbo/purchase-orders/archive` — Archive Purchase Orders
  - removed response code(s): `200`
- `POST /api/qbo/purchase-orders/refresh` — Refresh Purchase Orders
  - removed response code(s): `200`
- `PUT /api/qbo/tax-code-mappings/{taxRateId}` — Update Tax Code Mapping
  - removed response code(s): `200`
- `DELETE /api/qbo/tax-codes` — Delete Tax Codes
  - removed response code(s): `200`
- `POST /api/qbo/tax-codes/archive` — Archive Tax Codes
  - removed response code(s): `200`
- `POST /api/qbo/tax-codes/refresh` — Refresh Tax Codes
  - removed response code(s): `200`
- `DELETE /api/qbo/tax-rates` — Delete Tax Rates
  - removed response code(s): `200`
- `POST /api/qbo/tax-rates/archive` — Archive Tax Rates
  - removed response code(s): `200`
- `POST /api/qbo/tax-rates/refresh` — Refresh Tax Rates
  - removed response code(s): `200`
- `DELETE /api/qbo/vendors` — Delete Vendors
  - removed response code(s): `200`
- `POST /api/qbo/vendors/archive` — Archive Vendors
  - removed response code(s): `200`
- `POST /api/qbo/vendors/refresh` — Refresh Vendors
  - removed response code(s): `200`

### Refunds
- `POST /api/square/instances/{squareIntegrationInstance}/refunds/sync` — Sync Square Refunds
  - removed response code(s): `200`

### Returns & RMAs
- `DELETE /api/rmas/{rma}/lines/{rmaLine}` — Remove Line from RMA
  - new response code(s): `422`

### Shipfusion
- `POST /api/shipfusion/integration-instances/{integration_instance}/inventory/refresh` — Refresh Inventory
  - removed response code(s): `200`
- `POST /api/shipfusion/integration-instances/{integration_instance}/orders/sync` — Sync Orders (Queue Job)
  - removed response code(s): `200`
- `POST /api/shipfusion/integration-instances/{integration_instance}/orders/update-tracking` — Update Tracking Info
  - removed response code(s): `200`
- `DELETE /api/shipfusion/integration-instances/{integration_instance}/orders/{order}` — Delete Order
  - removed response code(s): `200`
- `POST /api/shipfusion/integration-instances/{integration_instance}/orders/{order}/sync-detail` — Sync Order Detail
  - removed response code(s): `200`
- `POST /api/shipfusion/integration-instances/{integration_instance}/warehouse-shipments/sync` — Sync Warehouse Shipments (Queue Job)
  - removed response code(s): `200`
- `POST /api/shipfusion/integration-instances/{integration_instance}/warehouse-shipments/{warehouse_shipment}/sync-detail` — Sync Warehouse Shipment Detail
  - removed response code(s): `200`
- `POST /api/shipfusion/integration-instances/{integration_instance}/webhook-events/{webhook_event}/retry` — Retry Webhook Event
  - removed response code(s): `200`

### ShipHero
- `POST /api/shiphero/integration-instances` — Create Integration Instance
  - removed response code(s): `200`
- `DELETE /api/shiphero/integration-instances/{integration_instance}` — Delete Integration Instance
  - removed response code(s): `200`
- `PUT /api/shiphero/integration-instances/{integration_instance}/warehouses/map` — Map Warehouses
  - removed response code(s): `200`

### Stripe
- `POST /api/webhooks/stripe/{integration_instance_id}` — Connect Account Webhook
  - new response code(s): `409`

### Subscriptions
- `GET /api/subscription-offerings/{subscription_offering}/resolve-for-order` — Resolve Edition for Sales Order
  - new response code(s): `422`

### Suppliers
- `DELETE /api/suppliers/{supplier}` — Delete Supplier
  - new response code(s): `400`

### TikTok Shop
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}/map` — Unmap Product SKU
  - removed response code(s): `200`
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}/map` — Map Product SKU
  - removed response code(s): `200`

### Veracore
- `POST /api/veracore/integration-instances` — Create Integration Instance
  - removed response code(s): `200`
- `DELETE /api/veracore/integration-instances/{integration_instance}` — Delete Integration Instance
  - removed response code(s): `200`
- `GET /api/veracore/integration-instances/{integration_instance}` — Show Integration Instance
  - removed response code(s): `200`
- `PUT /api/veracore/integration-instances/{integration_instance}` — Update Integration Instance
  - removed response code(s): `200`

### Walmart
- `GET /api/walmart/{integrationInstance}/item-tools/count` — Get Item Count by Status
  - new response code(s): `422`
- `GET /api/walmart/{integrationInstance}/item-tools/search` — Search Walmart Catalogue
  - new response code(s): `422`
- `POST /api/walmart/{integrationInstance}/products/{product}/sync` — Sync Walmart Product
  - new response code(s): `502`
- `GET /api/walmart/{integrationInstance}/wfs/inventory/health-report` — Get WFS Inventory Health Report
  - new response code(s): `422`

### Webhooks
- `POST /api/square/instances/{squareIntegrationInstance}/webhooks/sync` — Sync Square Webhook Subscriptions
  - removed response code(s): `200`

_Spec version 1.0.0 → 1.0.0._
