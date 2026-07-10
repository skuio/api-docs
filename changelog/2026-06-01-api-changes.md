---
title: API changes — 2026-06-01
description: This release includes 1065 additions, 88 changes. 23 breaking changes — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-06-01
---

This release includes 1065 additions, 88 changes. 23 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Sales Channels
- **Changed** `GET /api/amazon/unified/awd/ledgers` — List AWD ledgers (paginated)
  - new parameter(s): `Authorization`
  - removed parameter(s): `page`, `per_page`
- **Changed** `GET /api/amazon/unified/awd/shipments` — List AWD shipments (paginated)
  - new parameter(s): `Authorization`
  - removed parameter(s): `page`, `per_page`
- **Changed** `GET /api/amazon/unified/customer-returns` — List FBA Customer Returns (Across Instances)
  - new parameter(s): `Authorization`
  - removed parameter(s): `date_from`, `date_to`, `integration_instance_ids`, `page`, `per_page`, `search`
- **Changed** `GET /api/amazon/unified/fifo-layers/cogs/consumptions` — List Consumptions across all FIFO Layers (paginated)
  - new parameter(s): `Authorization`
  - removed parameter(s): `page`, `per_page`
- **Changed** `GET /api/amazon/unified/fnsku-products` — List FNSKU Products (paginated, with reconciliation data)
  - new parameter(s): `Authorization`
  - removed parameter(s): `integration_instance_ids`, `page`, `per_page`, `search`, `sort`
- **Changed** `GET /api/amazon/unified/fnsku-products/activity-log` — Auto-Mapping Activity Log
  - new parameter(s): `Authorization`
  - removed parameter(s): `page`, `per_page`
- **Changed** `GET /api/amazon/unified/fnsku-products/mapped` — List Mapped FNSKU Products (paginated)
  - new parameter(s): `Authorization`
  - removed parameter(s): `page`, `per_page`
- **Changed** `GET /api/amazon/unified/fnsku-products/mapped-by-asin` — List Mapped FNSKUs Grouped by ASIN
  - new parameter(s): `Authorization`
  - removed parameter(s): `page`, `per_page`
- **Changed** `GET /api/amazon/unified/fnsku-products/search` — Search FNSKU products
  - new parameter(s): `Authorization`, `fnsku`
  - removed parameter(s): `q`
- **Changed** `GET /api/amazon/unified/fnsku-products/stats` — Get ASIN mapping statistics
  - new parameter(s): `Authorization`
  - removed parameter(s): `integration_instance_ids`
- **Changed** `GET /api/amazon/unified/fnsku-products/unmapped` — List Unmapped FNSKU Products (paginated)
  - new parameter(s): `Authorization`
  - removed parameter(s): `page`, `per_page`
- **Changed** `GET /api/amazon/unified/fnsku-products/unmapped-by-asin` — List Unmapped FNSKUs Grouped by ASIN
  - new parameter(s): `Authorization`
  - removed parameter(s): `page`, `per_page`
- **Changed** `GET /api/amazon/unified/legacy-inbound-shipments` — List Legacy FBA Inbound Shipments
  - removed parameter(s): `integration_instance_ids`, `page`, `per_page`, `search`
- **Changed** `GET /api/amazon/unified/new-inbound-shipments` — List Shipments
  - removed parameter(s): `integration_instance_ids`, `page`, `per_page`, `search`
- **Changed** `GET /api/amazon/unified/removal-orders` — List Removal Orders (Grouped Across Instances)
  - new parameter(s): `Authorization`
  - removed parameter(s): `date_from`, `date_to`, `disposition`, `integration_instance_ids`, `order_status`, `order_type`, `page`, `per_page`, `search`
- **Changed** `GET /api/amazon/unified/removal-orders/export` — Export Removal Orders
  - new parameter(s): `Authorization`
  - removed parameter(s): `date_from`, `date_to`, `disposition`, `integration_instance_ids`, `order_status`, `order_type`, `search`
- **Changed** `GET /api/amazon/unified/removal-shipments` — List Removal Shipments (paginated, across instances)
  - new parameter(s): `Authorization`
  - removed parameter(s): `carrier`, `date_from`, `date_to`, `disposition`, `integration_instance_ids`, `page`, `per_page`, `removal_order_type`, `search`
- **Changed** `GET /api/amazon/unified/removal-shipments/export` — Export Removal Shipments (across instances)
  - new parameter(s): `Authorization`
  - removed parameter(s): `carrier`, `date_from`, `date_to`, `disposition`, `integration_instance_ids`, `removal_order_type`, `search`
- **Changed** `GET /api/amazon/unified/transactions` — List Transactions (paginated, cross-instance)
  - new parameter(s): `Authorization`
  - removed parameter(s): `date_from`, `date_to`, `integration_instance_ids`, `page`, `per_page`, `processed`, `search`, `transaction_status`, `transaction_type`
- **Changed** `GET /api/amazon/unified/transactions/statistics` — Statistics (grouped breakdowns)
  - new parameter(s): `Authorization`
  - removed parameter(s): `date_from`, `date_to`, `integration_instance_ids`, `processed`, `search`, `transaction_status`, `transaction_type`
- **Changed** `GET /api/amazon/{integrationInstance}/products` — List Amazon Products for Integration
  - new parameter(s): `filter[archived]`, `per_page`
  - removed parameter(s): `archived`, `limit`, `search`
- **Changed** `GET /api/amazon/{integrationInstance}/removal-orders` — List Removal Orders (DataTable)
  - new parameter(s): `Authorization`
  - removed parameter(s): `archived`, `page`, `per_page`
- **Changed** `GET /api/amazon/{integrationInstance}/removal-shipments` — List Removal Shipments (DataTable)
  - new parameter(s): `Authorization`, `limit`
  - removed parameter(s): `per_page`

## Added

### Accounting Integrations
- `DELETE //{domain}/api/qbo/accounts` — Delete Accounts
- `DELETE //{domain}/api/qbo/bills` — Delete Bills
- `DELETE //{domain}/api/qbo/credit-memos` — Delete Credit Memos
- `DELETE //{domain}/api/qbo/customers` — Delete Customers
- `DELETE //{domain}/api/qbo/customers/{qboCustomer}/unlink-sku-customer` — Unlink SKU Customer
- `DELETE //{domain}/api/qbo/integrations/{id}` — Delete Integration
- `DELETE //{domain}/api/qbo/invoices` — Delete Invoices
- `DELETE //{domain}/api/qbo/items` — Delete Items
- `DELETE //{domain}/api/qbo/journals` — Delete Journals
- `DELETE //{domain}/api/qbo/payments` — Delete Payments
- `DELETE //{domain}/api/qbo/purchase-orders` — Delete Purchase Orders
- `DELETE //{domain}/api/qbo/tax-codes` — Delete Tax Codes
- `DELETE //{domain}/api/qbo/tax-rates` — Delete Tax Rates
- `DELETE //{domain}/api/qbo/vendors` — Delete Vendors
- `DELETE //{domain}/api/xero/integrations/{id}` — Delete Integration Instance

### Sales Channels
- `GET //{domain}/amazon/callback` — OAuth Callback (Web)
- `GET //{domain}/api/amazon` — List Amazon Integration Instances
- `DELETE //{domain}/api/amazon-inbound-shortages/{amazonInboundShortage}` — Delete Inbound Shortage
- `DELETE //{domain}/api/amazon/integration-instances/{integrationInstance}/ledgers` — Delete AWD Ledgers
- `GET //{domain}/api/amazon/integration-instances/{integrationInstance}/ledgers` — List AWD Ledgers (per integration instance)
- `GET //{domain}/api/amazon/integration-instances/{integrationInstance}/ledgers/linkable-for-sales-order-line/{salesOrderLineId}` — Get Linkable Ledgers for Sales Order Line
- `GET //{domain}/api/amazon/integration-instances/{integrationInstance}/ledgers/{awdLedger}` — Show AWD Ledger
- `GET //{domain}/api/amazon/integration-instances/{integrationInstance}/ledgers/{awdLedger}/linkable-destination-warehouses` — Get Linkable Destination Warehouses
- `GET //{domain}/api/amazon/integration-instances/{integrationInstance}/ledgers/{awdLedger}/linkable-sales-order-lines` — Get Linkable Sales Order Lines (for AWD ledger)
- `GET //{domain}/api/amazon/inventory-valuation/cost-source-breakdown` — Cost Source Breakdown
- `GET //{domain}/api/amazon/inventory-valuation/cost-source-event-breakdown` — Cost Source Event Breakdown
- `GET //{domain}/api/amazon/inventory-valuation/cost-source-layer-drilldown` — Cost Source Layer Drilldown
- `GET //{domain}/api/amazon/inventory-valuation/dashboard` — Get Dashboard Data
- `GET //{domain}/api/amazon/inventory-valuation/fifo-layers/{layerId}/revert-eligibility` — Check FIFO Layer Revert Eligibility
- `GET //{domain}/api/amazon/list` — List Amazon Integration Instances (Simple Dropdown)
- `GET //{domain}/api/amazon/mappings/available-fields` — Get available fields
- `GET //{domain}/api/amazon/reimbursement-cases` — List reimbursement cases
- `GET //{domain}/api/amazon/reimbursement-cases/summary` — Reimbursement cases headline summary
- `DELETE //{domain}/api/amazon/reimbursement-cases/{reimbursementCase}` — Delete reimbursement case
- `GET //{domain}/api/amazon/reimbursement-cases/{reimbursementCase}` — Show reimbursement case
- `GET //{domain}/api/amazon/reimbursement-cases/{reimbursementCase}/activity-log` — Reimbursement case activity log
- `GET //{domain}/api/amazon/reimbursement-cases/{reimbursementCase}/notes` — List reimbursement case notes
- `DELETE //{domain}/api/amazon/unified/awd/initial-inventory` — Delete AWD initial inventory
- `GET //{domain}/api/amazon/unified/awd/initial-inventory/details` — Get AWD initial inventory details
- `GET //{domain}/api/amazon/unified/awd/initial-inventory/status` — Get AWD initial inventory status
- `GET //{domain}/api/amazon/unified/awd/initial-inventory/summary` — Get AWD initial inventory summary
- `DELETE //{domain}/api/amazon/unified/awd/ledgers` — Delete AWD ledgers
- `GET //{domain}/api/amazon/unified/awd/ledgers` — List AWD ledgers (paginated)
- `GET //{domain}/api/amazon/unified/awd/ship-from-mappings` — List ship-from mappings (paginated)
- `DELETE //{domain}/api/amazon/unified/awd/shipments` — Delete AWD shipments
- `DELETE //{domain}/api/amazon/unified/fee-mappings/{feeMapping}` — Delete Fee Mapping
- `DELETE //{domain}/api/amazon/unified/financial-event-groups/{financialEventGroup}/accounting-transactions` — Delete Accounting Transactions
- `DELETE //{domain}/api/amazon/unified/settlement-mapping-groups/{settlementMappingGroup}` — Delete Mapping Group
- `DELETE //{domain}/api/amazon/{integrationInstance}` — Delete Amazon Integration Instance
- `DELETE //{domain}/api/amazon/{integrationInstance}/awd/ledgers` — Delete AWD Ledgers
- `DELETE //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/items/{draft_inbound_plan_item}` — Remove Item from Draft Plan
- `DELETE //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}` — Delete Draft Inbound Plan
- `DELETE //{domain}/api/amazon/{integrationInstance}/finances/settlement-mapping-groups/{settlementMappingGroup}` — Delete Mapping Group
- `DELETE //{domain}/api/amazon/{integrationInstance}/orders/{order}` — Delete Order
- `DELETE //{domain}/api/amazon/{integrationInstance}/outbound/{id}` — Delete Outbound Fulfillment
- `DELETE //{domain}/api/amazon/{integrationInstance}/products/{product}/map` — Unmap Single Product
- `DELETE //{domain}/api/amazon/{integrationInstance}/removal-orders/{orderId}/undo-all-receipts` — Undo All Receipts for Removal Order
- `DELETE //{domain}/api/amazon/{integrationInstance}/removal-orders/{removalOrderId}/clear-warehouse` — Clear Receiving Warehouse
- `DELETE //{domain}/api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/remove-receipt` — Remove Receipt (Single Shipment)
- `DELETE //{domain}/api/big-commerce/{integrationInstance}` — Delete Integration Instance
- `DELETE //{domain}/api/ebay/integration-instances/{integrationInstance}` — Delete Integration Instance
- `DELETE //{domain}/api/ebay/{integrationInstance}/legacy-products/{product}` — Delete Legacy Product
- `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}` — Disconnect Integration Instance
- `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}` — Delete Order
- `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}/sku-order` — Delete Linked SKU Order
- `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/payment-method-mappings` — Delete Payment Method Mapping
- `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}` — Delete Product
- `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}/map` — Unmap Product SKU
- `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/shipping-method-mappings/{skuShippingMethodId}` — Delete Shipping Method Mapping
- `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/warehouse-mappings/{tiktokShopWarehouseId}` — Delete Warehouse Mapping
- `DELETE //{domain}/api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}` — Delete Integration Instance
- `DELETE //{domain}/api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/payment-method-mappings` — Delete Payment Method Mapping
- `DELETE //{domain}/api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/shipping-method-mappings/{skuShippingMethodId}` — Delete Shipping Method Mapping
- `DELETE //{domain}/api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/warehouse-mappings/{tiktokShopWarehouseId}` — Delete Warehouse Mapping
- `DELETE //{domain}/api/tiktok-shop/webhook-events` — Delete All Webhook Events
- `DELETE //{domain}/api/tiktok-shop/webhook-events/{tikTokShopWebhookEvent}` — Delete Webhook Event
- `DELETE //{domain}/api/walmart/{integrationInstance}` — Delete Integration Instance
- `DELETE //{domain}/api/walmart/{integrationInstance}/products/{product}/map` — Unmap Single Product
- `DELETE //{domain}/api/woo-commerce/{integration_instance}` — Delete Integration Instance
- `DELETE //{domain}/api/woo-commerce/{integration_instance}/orders/{order}` — Delete Order
- `DELETE //{domain}/api/woo-commerce/{integration_instance}/products/{product}` — Delete Product
- `DELETE /api/amazon/integration-instances/{integrationInstance}/ledgers` — Delete AWD Ledgers
- `DELETE /api/amazon/reimbursement-cases/{reimbursementCase}` — Delete reimbursement case
- `DELETE /api/amazon/unified/awd/initial-inventory` — Delete AWD initial inventory
- `DELETE /api/amazon/unified/awd/ledgers` — Delete AWD ledgers
- `DELETE /api/amazon/unified/awd/shipments` — Delete AWD shipments

### Shipping Providers
- `GET //{domain}/api/3pl/asns` — List ASNs (Advanced Shipping Notices)
- `GET //{domain}/api/3pl/orders` — List Orders (Outbound Fulfillments)
- `GET //{domain}/api/3pl/products` — List Products
- `DELETE //{domain}/api/3pl/tokens/{integrationInstance}` — Delete 3PL Integration Token
- `DELETE //{domain}/api/shipfusion/integration-instances/{integration_instance}` — Delete Integration Instance
- `DELETE //{domain}/api/shipfusion/integration-instances/{integration_instance}/orders/SF-12345` — Delete Order
- `DELETE //{domain}/api/shipfusion/integration-instances/{integration_instance}/warehouse-mappings/IL` — Delete Warehouse Mapping
- `DELETE //{domain}/api/shiphero/integration-instances/{integration_instance}` — Delete Integration Instance
- `DELETE //{domain}/api/shipmyorders/integration-instances/{integration_instance}` — Delete Integration Instance
- `DELETE //{domain}/api/shipmyorders/invoices` — Bulk Delete Invoices
- `DELETE //{domain}/api/shipmyorders/invoices/{id}` — Delete Invoice
- `DELETE //{domain}/api/trackstar/integration-instances/{integration_instance}` — Delete Integration Instance
- `DELETE //{domain}/api/trackstar/integration-instances/{integration_instance}/warehouse-mappings/{warehouse_mapping}` — Delete Warehouse Mapping
- `DELETE //{domain}/api/veracore/integration-instances/{integration_instance}` — Delete Integration Instance

_…plus 965 more (see the API reference)._

## Changed

### Sales Channels
- `GET /api/amazon/unified/awd/initial-inventory/status` — Get AWD initial inventory status
  - new parameter(s): `Authorization`
- `GET /api/amazon/unified/awd/initial-inventory/summary` — Get AWD initial inventory summary
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/awd/refresh` — Refresh AWD shipments (dispatch jobs)
  - new parameter(s): `Authorization`, `Content-Type`
  - new response code(s): `422`
- `GET /api/amazon/unified/awd/ship-from-mappings` — List ship-from mappings (paginated)
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/awd/shipments/process` — Process AWD shipments
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/customer-returns/bulk-mark-reviewed` — Bulk Mark Customer Returns as Reviewed
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/customer-returns/bulk-mark-unreviewed` — Bulk Mark Customer Returns as Unreviewed
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/fifo-layers/cogs/bulk-update` — Bulk Update COGS
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/fifo-layers/cogs/import` — Execute COGS Import
  - new parameter(s): `Authorization`
- `GET /api/amazon/unified/fifo-layers/cogs/import/template` — Download COGS Import Template (CSV)
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/fifo-layers/cogs/import/validate` — Validate COGS Import
  - new parameter(s): `Authorization`
  - new response code(s): `422`
- `POST /api/amazon/unified/fnsku-products/bulk-link` — Bulk Link (to single product)
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/fnsku-products/bulk-reconcile` — Bulk Reconcile
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/fnsku-products/bulk-unreconcile` — Bulk Unreconcile
  - new parameter(s): `Authorization`
- `GET /api/amazon/unified/fnsku-products/export` — Export FNSKU Products (unpaginated)
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/fnsku-products/map-by-asin` — Map all FNSKUs for an ASIN to a Product
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/fnsku-products/map-single-fnsku` — Map Single FNSKU to a Product
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/fnsku-products/reconcile-all` — Reconcile All (tracked job)
  - new parameter(s): `Authorization`, `Content-Type`
- `POST /api/amazon/unified/legacy-inbound-shipments/process-all` — Process All Unprocessed Shipments (dispatch tracked job)
  - new parameter(s): `Content-Type`
- `POST /api/amazon/unified/legacy-inbound-shipments/refresh` — Refresh All Shipments (dispatch tracked job)
  - new parameter(s): `Content-Type`
- `POST /api/amazon/unified/new-inbound-shipments/process-all` — Process All (Apply Unprocessed Shipments)
  - new parameter(s): `Content-Type`
- `POST /api/amazon/unified/new-inbound-shipments/refresh` — Refresh All (Sync from Amazon)
  - new parameter(s): `Content-Type`
- `POST /api/amazon/unified/removal-orders/bulk-archive` — Bulk Archive Removal Orders
  - new parameter(s): `Authorization`
  - removed response code(s): `422`
- `POST /api/amazon/unified/removal-orders/bulk-unarchive` — Bulk Unarchive Removal Orders
  - new parameter(s): `Authorization`
  - removed response code(s): `422`
- `POST /api/amazon/unified/removal-orders/bulk-unprocess` — Bulk Unprocess Removal Orders
  - new parameter(s): `Authorization`
  - removed response code(s): `422`
- `POST /api/amazon/unified/removal-shipments/bulk-archive` — Bulk Archive Removal Shipments
  - new parameter(s): `Authorization`
  - removed response code(s): `422`
- `POST /api/amazon/unified/removal-shipments/bulk-unarchive` — Bulk Unarchive Removal Shipments
  - new parameter(s): `Authorization`
  - removed response code(s): `422`
- `POST /api/amazon/unified/transactions/bulk-process` — Bulk Process Transactions
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/transactions/bulk-unprocess` — Bulk Unprocess Transactions
  - new parameter(s): `Authorization`
- `GET /api/amazon/unified/transactions/export` — Export Transactions (background job)
  - new parameter(s): `Authorization`
- `GET /api/amazon/unified/transactions/export/download` — Download Export File
  - new parameter(s): `Authorization`
  - new response code(s): `404`
- `POST /api/amazon/unified/transactions/process-all` — Process All (background job)
  - new parameter(s): `Authorization`
- `GET /api/amazon/unified/transactions/process-all/status` — Process All Status
  - new parameter(s): `Authorization`
- `POST /api/amazon/unified/transactions/sync` — Sync Transactions (background job)
  - new parameter(s): `Authorization`
  - new response code(s): `422`
- `POST /api/amazon/unified/transactions/{transaction}/process` — Process Transaction
  - new parameter(s): `Authorization`, `Content-Type`
  - new response code(s): `422`
- `POST /api/amazon/unified/transactions/{transaction}/unprocess` — Unprocess Transaction
  - new parameter(s): `Authorization`, `Content-Type`
- `DELETE /api/amazon/{integrationInstance}` — Delete Amazon Integration Instance
  - new response code(s): `204`
  - removed response code(s): `200`
- `PUT /api/amazon/{integrationInstance}/mappings` — Update mappings for integration instance
  - new response code(s): `422`
- `POST /api/amazon/{integrationInstance}/new-inbound/shipments/process` — Process New Inbound Shipments
  - new response code(s): `207`
- `POST /api/amazon/{integrationInstance}/new-inbound/shipments/process-all` — Process All Unprocessed New Inbound Shipments
  - new parameter(s): `Content-Type`
- `POST /api/amazon/{integrationInstance}/products/{product}/create-sku-product` — Create SKU.io Product from Amazon Product
  - new response code(s): `422`
- `DELETE /api/amazon/{integrationInstance}/products/{product}/map` — Unmap Single Product
  - new response code(s): `422`
- `POST /api/amazon/{integrationInstance}/products/{product}/map` — Map Single Product to SKU.io Product
  - new response code(s): `422`
- `GET /api/amazon/{integrationInstance}/products/{product}/orders` — Get Orders for Product
  - new parameter(s): `page`, `per_page`
- `GET /api/amazon/{integrationInstance}/products/{product}/raw` — Get Raw Catalog Data from Amazon
  - new response code(s): `422`
- `POST /api/amazon/{integrationInstance}/products/{product}/refresh` — Refresh Single Product (Catalog Lookup)
  - new response code(s): `403`
- `POST /api/amazon/{integrationInstance}/removal-orders/archive` — Archive Removal Orders
  - new parameter(s): `Authorization`
- `GET /api/amazon/{integrationInstance}/removal-orders/export` — Export Removal Orders (CSV/XLSX)
  - new parameter(s): `Authorization`
- `GET /api/amazon/{integrationInstance}/removal-orders/order-details` — Get Order Details (by query string)
  - new parameter(s): `Authorization`
  - removed response code(s): `200`, `404`
- `POST /api/amazon/{integrationInstance}/removal-orders/set-warehouse` — Set Receiving Warehouse
  - new parameter(s): `Authorization`
- `POST /api/amazon/{integrationInstance}/removal-orders/unarchive` — Unarchive Removal Orders
  - new parameter(s): `Authorization`
- `GET /api/amazon/{integrationInstance}/removal-orders/unlinked` — Get Unlinked Removal Orders
  - new parameter(s): `Authorization`
- `GET /api/amazon/{integrationInstance}/removal-orders/{orderId}` — Get Order Details (by path)
  - new parameter(s): `Authorization`
- `DELETE /api/amazon/{integrationInstance}/removal-orders/{orderId}/undo-all-receipts` — Undo All Receipts for Removal Order
  - new parameter(s): `Authorization`
- `DELETE /api/amazon/{integrationInstance}/removal-orders/{removalOrderId}/clear-warehouse` — Clear Receiving Warehouse
  - new parameter(s): `Authorization`
- `PATCH /api/amazon/{integrationInstance}/removal-orders/{removalOrderId}/close-receiving` — Close Receiving
  - new parameter(s): `Authorization`, `Content-Type`
  - new response code(s): `422`
- `PATCH /api/amazon/{integrationInstance}/removal-orders/{removalOrderId}/resume-receiving` — Resume Receiving
  - new parameter(s): `Authorization`, `Content-Type`
- `POST /api/amazon/{integrationInstance}/removal-orders/{removalOrder}/mark-item-as-unknown` — Mark Item As Unknown
  - new parameter(s): `Authorization`, `Content-Type`
- `POST /api/amazon/{integrationInstance}/removal-orders/{removalOrder}/unmark-item-as-unknown` — Unmark Item As Unknown
  - new parameter(s): `Authorization`, `Content-Type`
- `POST /api/amazon/{integrationInstance}/removal-shipments/bulk-remove-receipts` — Bulk Remove Receipts
  - new parameter(s): `Authorization`
  - removed response code(s): `422`
- `GET /api/amazon/{integrationInstance}/removal-shipments/export` — Export Removal Shipments
  - new parameter(s): `Authorization`
- `POST /api/amazon/{integrationInstance}/removal-shipments/receive-bulk` — Bulk Receive Shipments
  - new parameter(s): `Authorization`
  - removed response code(s): `422`
- `GET /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}` — Show Removal Shipment
  - new parameter(s): `Authorization`
  - new response code(s): `404`
- `POST /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/receive` — Receive Shipment
  - new parameter(s): `Authorization`
  - removed response code(s): `404`
- `DELETE /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/remove-receipt` — Remove Receipt (Single Shipment)
  - new parameter(s): `Authorization`
  - removed response code(s): `404`

_Spec version 1.0.0 → 1.0.0._
