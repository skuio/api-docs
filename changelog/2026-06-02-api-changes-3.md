---
title: API changes — 2026-06-02
description: This release 9 added, 1046 removed API endpoint(s).
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-06-02
---

This release 9 added, 1046 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `DELETE //{domain}/api/amazon/{integrationInstance}/removal-shipment-discards/{discard}` — Remove Single Discard
- `GET //{domain}/api/amazon/unified/shipments` — List FBA Shipments Detail (paginated, across instances)
- `GET //{domain}/api/amazon/unified/shipments/kpi-stats` — FBA Shipments Detail — KPI Stats
- `GET //{domain}/api/amazon/unified/shipments/{shipment}` — Show FBA Shipment Detail Row
- `GET //{domain}/api/amazon/{integrationInstance}/inbound/shipments/{shipment}/activity-log` — Get Activity Log for Inbound Shipment
- `GET //{domain}/api/amazon/{integrationInstance}/inbound/shipments/{shipment}/items` — Get Items For Inbound Shipment
- `GET //{domain}/api/amazon/{integrationInstance}/inbound/shipments/{shipment}/receipts` — Get Inbound Shipment Receipts
- `GET /api/shipstation/integration-instances/{integrationInstance}/fulfillments` — List Fulfillments
- `POST //{domain}/api/amazon/{integrationInstance}/removal-shipment-discards/bulk-remove` — Bulk Remove Discards

## Removed

- `DELETE /api/3pl/tokens/{integrationInstance}` — Delete 3PL Integration Token **(breaking)**
- `DELETE /api/amazon-inbound-shortages/{amazonInboundShortage}` — Delete Inbound Shortage **(breaking)**
- `DELETE /api/amazon/integration-instances/{integrationInstance}/ledgers` — Delete AWD Ledgers **(breaking)**
- `DELETE /api/amazon/reimbursement-cases/{reimbursementCase}` — Delete reimbursement case **(breaking)**
- `DELETE /api/amazon/unified/awd/initial-inventory` — Delete AWD initial inventory **(breaking)**
- `DELETE /api/amazon/unified/awd/ledgers` — Delete AWD ledgers **(breaking)**
- `DELETE /api/amazon/unified/awd/shipments` — Delete AWD shipments **(breaking)**
- `DELETE /api/amazon/unified/fee-mappings/{feeMapping}` — Delete Fee Mapping **(breaking)**
- `DELETE /api/amazon/unified/financial-event-groups/{financialEventGroup}/accounting-transactions` — Delete Accounting Transactions **(breaking)**
- `DELETE /api/amazon/unified/settlement-mapping-groups/{settlementMappingGroup}` — Delete Mapping Group **(breaking)**
- `DELETE /api/amazon/{integrationInstance}` — Delete Amazon Integration Instance **(breaking)**
- `DELETE /api/amazon/{integrationInstance}/awd/ledgers` — Delete AWD Ledgers **(breaking)**
- `DELETE /api/amazon/{integrationInstance}/draft-inbound-plans/items/{draft_inbound_plan_item}` — Remove Item from Draft Plan **(breaking)**
- `DELETE /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}` — Delete Draft Inbound Plan **(breaking)**
- `DELETE /api/amazon/{integrationInstance}/finances/settlement-mapping-groups/{settlementMappingGroup}` — Delete Mapping Group **(breaking)**
- `DELETE /api/amazon/{integrationInstance}/orders/{order}` — Delete Order **(breaking)**
- `DELETE /api/amazon/{integrationInstance}/outbound/{id}` — Delete Outbound Fulfillment **(breaking)**
- `DELETE /api/amazon/{integrationInstance}/products/{product}/map` — Unmap Single Product **(breaking)**
- `DELETE /api/amazon/{integrationInstance}/removal-orders/{orderId}/undo-all-receipts` — Undo All Receipts for Removal Order **(breaking)**
- `DELETE /api/amazon/{integrationInstance}/removal-orders/{removalOrderId}/clear-warehouse` — Clear Receiving Warehouse **(breaking)**
- `DELETE /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/remove-receipt` — Remove Receipt (Single Shipment) **(breaking)**
- `DELETE /api/big-commerce/{integrationInstance}` — Delete Integration Instance **(breaking)**
- `DELETE /api/ebay/integration-instances/{integrationInstance}` — Delete Integration Instance **(breaking)**
- `DELETE /api/ebay/{integrationInstance}/legacy-products/{product}` — Delete Legacy Product **(breaking)**
- `DELETE /api/qbo/accounts` — Delete Accounts **(breaking)**
- `DELETE /api/qbo/bills` — Delete Bills **(breaking)**
- `DELETE /api/qbo/credit-memos` — Delete Credit Memos **(breaking)**
- `DELETE /api/qbo/customers` — Delete Customers **(breaking)**
- `DELETE /api/qbo/customers/{qboCustomer}/unlink-sku-customer` — Unlink SKU Customer **(breaking)**
- `DELETE /api/qbo/integrations/{id}` — Delete Integration **(breaking)**
- `DELETE /api/qbo/invoices` — Delete Invoices **(breaking)**
- `DELETE /api/qbo/items` — Delete Items **(breaking)**
- `DELETE /api/qbo/journals` — Delete Journals **(breaking)**
- `DELETE /api/qbo/payments` — Delete Payments **(breaking)**
- `DELETE /api/qbo/purchase-orders` — Delete Purchase Orders **(breaking)**
- `DELETE /api/qbo/tax-codes` — Delete Tax Codes **(breaking)**
- `DELETE /api/qbo/tax-rates` — Delete Tax Rates **(breaking)**
- `DELETE /api/qbo/vendors` — Delete Vendors **(breaking)**
- `DELETE /api/shipfusion/integration-instances/{integration_instance}` — Delete Integration Instance **(breaking)**
- `DELETE /api/shipfusion/integration-instances/{integration_instance}/orders/SF-12345` — Delete Order **(breaking)**
- `DELETE /api/shipfusion/integration-instances/{integration_instance}/warehouse-mappings/IL` — Delete Warehouse Mapping **(breaking)**
- `DELETE /api/shiphero/integration-instances/{integration_instance}` — Delete Integration Instance **(breaking)**
- `DELETE /api/shipmyorders/integration-instances/{integration_instance}` — Delete Integration Instance **(breaking)**
- `DELETE /api/shipmyorders/invoices` — Bulk Delete Invoices **(breaking)**
- `DELETE /api/shipmyorders/invoices/{id}` — Delete Invoice **(breaking)**
- `DELETE /api/shopify/webhook-events/bulk-delete` — Bulk Delete Events **(breaking)**
- `DELETE /api/shopify/{integrationInstance}/orders/{order}` — Delete Single Order **(breaking)**
- `DELETE /api/shopify/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order (Keep Shopify Order) **(breaking)**
- `DELETE /api/shopify/{integrationInstance}/products/{product}/map` — Unmap Product **(breaking)**
- `DELETE /api/shopify/{integrationInstance}/webhook-events/delete-all` — Delete All Events for Integration **(breaking)**
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}` — Disconnect Integration Instance **(breaking)**
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}` — Delete Order **(breaking)**
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}/sku-order` — Delete Linked SKU Order **(breaking)**
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/payment-method-mappings` — Delete Payment Method Mapping **(breaking)**
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}` — Delete Product **(breaking)**
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}/map` — Unmap Product SKU **(breaking)**
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/shipping-method-mappings/{skuShippingMethodId}` — Delete Shipping Method Mapping **(breaking)**
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/warehouse-mappings/{tiktokShopWarehouseId}` — Delete Warehouse Mapping **(breaking)**
- `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}` — Delete Integration Instance **(breaking)**
- `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/payment-method-mappings` — Delete Payment Method Mapping **(breaking)**
- `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/shipping-method-mappings/{skuShippingMethodId}` — Delete Shipping Method Mapping **(breaking)**
- `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/warehouse-mappings/{tiktokShopWarehouseId}` — Delete Warehouse Mapping **(breaking)**
- `DELETE /api/tiktok-shop/webhook-events` — Delete All Webhook Events **(breaking)**
- `DELETE /api/tiktok-shop/webhook-events/{tikTokShopWebhookEvent}` — Delete Webhook Event **(breaking)**
- `DELETE /api/trackstar/integration-instances/{integration_instance}` — Delete Integration Instance **(breaking)**
- `DELETE /api/trackstar/integration-instances/{integration_instance}/warehouse-mappings/{warehouse_mapping}` — Delete Warehouse Mapping **(breaking)**
- `DELETE /api/veracore/integration-instances/{integration_instance}` — Delete Integration Instance **(breaking)**
- `DELETE /api/walmart/{integrationInstance}` — Delete Integration Instance **(breaking)**
- `DELETE /api/walmart/{integrationInstance}/products/{product}/map` — Unmap Single Product **(breaking)**
- `DELETE /api/woo-commerce/{integration_instance}` — Delete Integration Instance **(breaking)**
- `DELETE /api/woo-commerce/{integration_instance}/orders/{order}` — Delete Order **(breaking)**
- `DELETE /api/woo-commerce/{integration_instance}/products/{product}` — Delete Product **(breaking)**
- `DELETE /api/xero/integrations/{id}` — Delete Integration Instance **(breaking)**
- `GET /amazon/callback` — OAuth Callback (Web) **(breaking)**
- `GET /api/3pl/asns` — List ASNs (Advanced Shipping Notices) **(breaking)**
- `GET /api/3pl/orders` — List Orders (Outbound Fulfillments) **(breaking)**
- `GET /api/3pl/products` — List Products **(breaking)**
- `GET /api/amazon` — List Amazon Integration Instances **(breaking)**
- `GET /api/amazon/integration-instances/{integrationInstance}/ledgers` — List AWD Ledgers (per integration instance) **(breaking)**
- `GET /api/amazon/integration-instances/{integrationInstance}/ledgers/linkable-for-sales-order-line/{salesOrderLineId}` — Get Linkable Ledgers for Sales Order Line **(breaking)**
- `GET /api/amazon/integration-instances/{integrationInstance}/ledgers/{awdLedger}` — Show AWD Ledger **(breaking)**
- `GET /api/amazon/integration-instances/{integrationInstance}/ledgers/{awdLedger}/linkable-destination-warehouses` — Get Linkable Destination Warehouses **(breaking)**
- `GET /api/amazon/integration-instances/{integrationInstance}/ledgers/{awdLedger}/linkable-sales-order-lines` — Get Linkable Sales Order Lines (for AWD ledger) **(breaking)**
- `GET /api/amazon/inventory-valuation/cost-source-breakdown` — Cost Source Breakdown **(breaking)**
- `GET /api/amazon/inventory-valuation/cost-source-event-breakdown` — Cost Source Event Breakdown **(breaking)**
- `GET /api/amazon/inventory-valuation/cost-source-layer-drilldown` — Cost Source Layer Drilldown **(breaking)**
- `GET /api/amazon/inventory-valuation/dashboard` — Get Dashboard Data **(breaking)**
- `GET /api/amazon/inventory-valuation/fifo-layers/{layerId}/revert-eligibility` — Check FIFO Layer Revert Eligibility **(breaking)**
- `GET /api/amazon/list` — List Amazon Integration Instances (Simple Dropdown) **(breaking)**
- `GET /api/amazon/mappings/available-fields` — Get available fields **(breaking)**
- `GET /api/amazon/reimbursement-cases` — List reimbursement cases **(breaking)**
- `GET /api/amazon/reimbursement-cases/summary` — Reimbursement cases headline summary **(breaking)**
- `GET /api/amazon/reimbursement-cases/{reimbursementCase}` — Show reimbursement case **(breaking)**
- `GET /api/amazon/reimbursement-cases/{reimbursementCase}/activity-log` — Reimbursement case activity log **(breaking)**
- `GET /api/amazon/reimbursement-cases/{reimbursementCase}/notes` — List reimbursement case notes **(breaking)**
- `GET /api/amazon/unified/awd/initial-inventory/details` — Get AWD initial inventory details **(breaking)**
- `GET /api/amazon/unified/awd/initial-inventory/status` — Get AWD initial inventory status **(breaking)**
- `GET /api/amazon/unified/awd/initial-inventory/summary` — Get AWD initial inventory summary **(breaking)**
- `GET /api/amazon/unified/awd/ledgers` — List AWD ledgers (paginated) **(breaking)**
- `GET /api/amazon/unified/awd/ship-from-mappings` — List ship-from mappings (paginated) **(breaking)**
- …plus 946 more removed endpoint(s), all breaking.
