---
title: API changes — 2026-06-02
description: This release includes 21 additions, 2 changes, 1046 removals. 1046 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-06-02
---

This release includes 21 additions, 2 changes, 1046 removals. 1046 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Accounting Integrations
- **Removed** `DELETE /api/qbo/accounts` — Delete Accounts
- **Removed** `DELETE /api/qbo/bills` — Delete Bills
- **Removed** `DELETE /api/qbo/credit-memos` — Delete Credit Memos
- **Removed** `DELETE /api/qbo/customers` — Delete Customers
- **Removed** `DELETE /api/qbo/customers/{qboCustomer}/unlink-sku-customer` — Unlink SKU Customer
- **Removed** `DELETE /api/qbo/integrations/{id}` — Delete Integration
- **Removed** `DELETE /api/qbo/invoices` — Delete Invoices
- **Removed** `DELETE /api/qbo/items` — Delete Items
- **Removed** `DELETE /api/qbo/journals` — Delete Journals
- **Removed** `DELETE /api/qbo/payments` — Delete Payments
- **Removed** `DELETE /api/qbo/purchase-orders` — Delete Purchase Orders
- **Removed** `DELETE /api/qbo/tax-codes` — Delete Tax Codes
- **Removed** `DELETE /api/qbo/tax-rates` — Delete Tax Rates
- **Removed** `DELETE /api/qbo/vendors` — Delete Vendors
- **Removed** `DELETE /api/xero/integrations/{id}` — Delete Integration Instance

#### Sales Channels
- **Removed** `GET /amazon/callback` — OAuth Callback (Web)
- **Removed** `GET /api/amazon` — List Amazon Integration Instances
- **Removed** `DELETE /api/amazon-inbound-shortages/{amazonInboundShortage}` — Delete Inbound Shortage
- **Removed** `DELETE /api/amazon/integration-instances/{integrationInstance}/ledgers` — Delete AWD Ledgers
- **Removed** `GET /api/amazon/integration-instances/{integrationInstance}/ledgers` — List AWD Ledgers (per integration instance)
- **Removed** `GET /api/amazon/integration-instances/{integrationInstance}/ledgers/linkable-for-sales-order-line/{salesOrderLineId}` — Get Linkable Ledgers for Sales Order Line
- **Removed** `GET /api/amazon/integration-instances/{integrationInstance}/ledgers/{awdLedger}` — Show AWD Ledger
- **Removed** `GET /api/amazon/integration-instances/{integrationInstance}/ledgers/{awdLedger}/linkable-destination-warehouses` — Get Linkable Destination Warehouses
- **Removed** `GET /api/amazon/integration-instances/{integrationInstance}/ledgers/{awdLedger}/linkable-sales-order-lines` — Get Linkable Sales Order Lines (for AWD ledger)
- **Removed** `GET /api/amazon/inventory-valuation/cost-source-breakdown` — Cost Source Breakdown
- **Removed** `GET /api/amazon/inventory-valuation/cost-source-event-breakdown` — Cost Source Event Breakdown
- **Removed** `GET /api/amazon/inventory-valuation/cost-source-layer-drilldown` — Cost Source Layer Drilldown
- **Removed** `GET /api/amazon/inventory-valuation/dashboard` — Get Dashboard Data
- **Removed** `GET /api/amazon/inventory-valuation/fifo-layers/{layerId}/revert-eligibility` — Check FIFO Layer Revert Eligibility
- **Removed** `GET /api/amazon/list` — List Amazon Integration Instances (Simple Dropdown)
- **Removed** `GET /api/amazon/mappings/available-fields` — Get available fields
- **Removed** `GET /api/amazon/reimbursement-cases` — List reimbursement cases
- **Removed** `GET /api/amazon/reimbursement-cases/summary` — Reimbursement cases headline summary
- **Removed** `DELETE /api/amazon/reimbursement-cases/{reimbursementCase}` — Delete reimbursement case
- **Removed** `GET /api/amazon/reimbursement-cases/{reimbursementCase}` — Show reimbursement case
- **Removed** `GET /api/amazon/reimbursement-cases/{reimbursementCase}/activity-log` — Reimbursement case activity log
- **Removed** `GET /api/amazon/reimbursement-cases/{reimbursementCase}/notes` — List reimbursement case notes
- **Removed** `DELETE /api/amazon/unified/awd/initial-inventory` — Delete AWD initial inventory
- **Removed** `GET /api/amazon/unified/awd/initial-inventory/details` — Get AWD initial inventory details
- **Removed** `GET /api/amazon/unified/awd/initial-inventory/status` — Get AWD initial inventory status
- **Removed** `GET /api/amazon/unified/awd/initial-inventory/summary` — Get AWD initial inventory summary
- **Removed** `DELETE /api/amazon/unified/awd/ledgers` — Delete AWD ledgers
- **Removed** `GET /api/amazon/unified/awd/ledgers` — List AWD ledgers (paginated)
- **Removed** `GET /api/amazon/unified/awd/ship-from-mappings` — List ship-from mappings (paginated)
- **Removed** `DELETE /api/amazon/unified/awd/shipments` — Delete AWD shipments
- **Removed** `DELETE /api/amazon/unified/fee-mappings/{feeMapping}` — Delete Fee Mapping
- **Removed** `DELETE /api/amazon/unified/financial-event-groups/{financialEventGroup}/accounting-transactions` — Delete Accounting Transactions
- **Removed** `DELETE /api/amazon/unified/settlement-mapping-groups/{settlementMappingGroup}` — Delete Mapping Group
- **Removed** `DELETE /api/amazon/{integrationInstance}` — Delete Amazon Integration Instance
- **Removed** `DELETE /api/amazon/{integrationInstance}/awd/ledgers` — Delete AWD Ledgers
- **Removed** `DELETE /api/amazon/{integrationInstance}/draft-inbound-plans/items/{draft_inbound_plan_item}` — Remove Item from Draft Plan
- **Removed** `DELETE /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}` — Delete Draft Inbound Plan
- **Removed** `DELETE /api/amazon/{integrationInstance}/finances/settlement-mapping-groups/{settlementMappingGroup}` — Delete Mapping Group
- **Removed** `DELETE /api/amazon/{integrationInstance}/orders/{order}` — Delete Order
- **Removed** `DELETE /api/amazon/{integrationInstance}/outbound/{id}` — Delete Outbound Fulfillment
- **Removed** `DELETE /api/amazon/{integrationInstance}/products/{product}/map` — Unmap Single Product
- **Removed** `DELETE /api/amazon/{integrationInstance}/removal-orders/{orderId}/undo-all-receipts` — Undo All Receipts for Removal Order
- **Removed** `DELETE /api/amazon/{integrationInstance}/removal-orders/{removalOrderId}/clear-warehouse` — Clear Receiving Warehouse
- **Removed** `DELETE /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/remove-receipt` — Remove Receipt (Single Shipment)
- **Removed** `DELETE /api/big-commerce/{integrationInstance}` — Delete Integration Instance
- **Removed** `DELETE /api/ebay/integration-instances/{integrationInstance}` — Delete Integration Instance
- **Removed** `DELETE /api/ebay/{integrationInstance}/legacy-products/{product}` — Delete Legacy Product
- **Removed** `DELETE /api/shopify/webhook-events/bulk-delete` — Bulk Delete Events
- **Removed** `DELETE /api/shopify/{integrationInstance}/orders/{order}` — Delete Single Order
- **Removed** `DELETE /api/shopify/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order (Keep Shopify Order)
- **Removed** `DELETE /api/shopify/{integrationInstance}/products/{product}/map` — Unmap Product
- **Removed** `DELETE /api/shopify/{integrationInstance}/webhook-events/delete-all` — Delete All Events for Integration
- **Removed** `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}` — Disconnect Integration Instance
- **Removed** `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}` — Delete Order
- **Removed** `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}/sku-order` — Delete Linked SKU Order
- **Removed** `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/payment-method-mappings` — Delete Payment Method Mapping
- **Removed** `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}` — Delete Product
- **Removed** `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}/map` — Unmap Product SKU
- **Removed** `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/shipping-method-mappings/{skuShippingMethodId}` — Delete Shipping Method Mapping
- **Removed** `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/warehouse-mappings/{tiktokShopWarehouseId}` — Delete Warehouse Mapping
- **Removed** `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}` — Delete Integration Instance
- **Removed** `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/payment-method-mappings` — Delete Payment Method Mapping
- **Removed** `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/shipping-method-mappings/{skuShippingMethodId}` — Delete Shipping Method Mapping
- **Removed** `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/warehouse-mappings/{tiktokShopWarehouseId}` — Delete Warehouse Mapping
- **Removed** `DELETE /api/tiktok-shop/webhook-events` — Delete All Webhook Events
- **Removed** `DELETE /api/tiktok-shop/webhook-events/{tikTokShopWebhookEvent}` — Delete Webhook Event
- **Removed** `DELETE /api/walmart/{integrationInstance}` — Delete Integration Instance
- **Removed** `DELETE /api/walmart/{integrationInstance}/products/{product}/map` — Unmap Single Product
- **Removed** `DELETE /api/woo-commerce/{integration_instance}` — Delete Integration Instance
- **Removed** `DELETE /api/woo-commerce/{integration_instance}/orders/{order}` — Delete Order
- **Removed** `DELETE /api/woo-commerce/{integration_instance}/products/{product}` — Delete Product

#### Shipping Providers
- **Removed** `GET /api/3pl/asns` — List ASNs (Advanced Shipping Notices)
- **Removed** `GET /api/3pl/orders` — List Orders (Outbound Fulfillments)
- **Removed** `GET /api/3pl/products` — List Products
- **Removed** `DELETE /api/3pl/tokens/{integrationInstance}` — Delete 3PL Integration Token
- **Removed** `DELETE /api/shipfusion/integration-instances/{integration_instance}` — Delete Integration Instance
- **Removed** `DELETE /api/shipfusion/integration-instances/{integration_instance}/orders/SF-12345` — Delete Order
- **Removed** `DELETE /api/shipfusion/integration-instances/{integration_instance}/warehouse-mappings/IL` — Delete Warehouse Mapping
- **Removed** `DELETE /api/shiphero/integration-instances/{integration_instance}` — Delete Integration Instance
- **Removed** `DELETE /api/shipmyorders/integration-instances/{integration_instance}` — Delete Integration Instance
- **Removed** `DELETE /api/shipmyorders/invoices` — Bulk Delete Invoices
- **Removed** `DELETE /api/shipmyorders/invoices/{id}` — Delete Invoice
- **Removed** `DELETE /api/trackstar/integration-instances/{integration_instance}` — Delete Integration Instance
- **Removed** `DELETE /api/trackstar/integration-instances/{integration_instance}/warehouse-mappings/{warehouse_mapping}` — Delete Warehouse Mapping
- **Removed** `DELETE /api/veracore/integration-instances/{integration_instance}` — Delete Integration Instance

_…plus 946 more (see the API reference)._

## Added

### Fulfillment Orders
- `GET /api/fulfillment-orders` — Dispatch Board — Active FOs Across All Orders
- `GET /api/fulfillment-orders/{fulfillmentOrder}/activity-log` — Get Fulfillment Order Activity Log
- `POST /api/fulfillment-orders/{fulfillmentOrder}/merge` — Merge Fulfillment Orders
- `PATCH /api/fulfillment-orders/{fulfillmentOrder}/shipping` — Edit Fulfillment Order Shipping Details

### Fulfillments
- `DELETE /api/sales-order-fulfillments/{salesOrderFulfillment}` — Void Shipment

### Sales Channels
- `GET //{domain}/api/amazon/unified/shipments` — List FBA Shipments Detail (paginated, across instances)
- `GET //{domain}/api/amazon/unified/shipments/kpi-stats` — FBA Shipments Detail — KPI Stats
- `GET //{domain}/api/amazon/unified/shipments/{shipment}` — Show FBA Shipment Detail Row
- `GET //{domain}/api/amazon/{integrationInstance}/inbound/shipments/{shipment}/activity-log` — Get Activity Log for Inbound Shipment
- `GET //{domain}/api/amazon/{integrationInstance}/inbound/shipments/{shipment}/items` — Get Items For Inbound Shipment
- `GET //{domain}/api/amazon/{integrationInstance}/inbound/shipments/{shipment}/receipts` — Get Inbound Shipment Receipts
- `POST //{domain}/api/amazon/{integrationInstance}/removal-shipment-discards/bulk-remove` — Bulk Remove Discards
- `DELETE //{domain}/api/amazon/{integrationInstance}/removal-shipment-discards/{discard}` — Remove Single Discard
- `GET //{domain}/api/amazon/{integrationInstance}/shipping-method-mappings` — List Shipping Method Mappings
- `PUT //{domain}/api/amazon/{integrationInstance}/shipping-method-mappings` — Save Shipping Method Mappings (bulk upsert)
- `GET //{domain}/api/amazon/{integrationInstance}/shipping-method-mappings/export` — Export Shipping Method Mappings (CSV)
- `POST //{domain}/api/amazon/{integrationInstance}/shipping-method-mappings/import` — Import Shipping Method Mappings (CSV)
- `DELETE //{domain}/api/amazon/{integrationInstance}/shipping-method-mappings/{mapping}` — Delete Shipping Method Mapping

### Sales Order Lines
- `POST /api/sales-order-lines/{salesOrderLine}/split-across-warehouses` — Split Line Across Warehouses
- `GET /api/sales-order-lines/{salesOrderLine}/suggest-warehouse` — Suggest Fulfillment Warehouse

### Shipping Providers
- `GET /api/shipstation/integration-instances/{integrationInstance}/fulfillments` — List Fulfillments

## Changed

### Sales Channels
- `PUT //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}` — Update Draft Inbound Plan
  - new response code(s): `400`

### Shipping Providers
- `POST //{domain}/api/shipstation/{integration_instance}/download-shipping-services` — Download Shipping Services
  - new response code(s): `400`

_Spec version 1.0.0 → 1.0.0._
