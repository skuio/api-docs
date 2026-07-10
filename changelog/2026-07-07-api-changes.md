---
title: API changes — 2026-07-07
description: This release includes 2895 additions, 1171 changes, 3 deprecations, 1868 removals. 3036 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, deprecated, breaking]
date: 2026-07-07
---

This release includes 2895 additions, 1171 changes, 3 deprecations, 1868 removals. 3036 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Accounting
- **Removed** `DELETE /api/accounting/payments/{id}` — Delete Payment
- **Removed** `DELETE /api/accounting/transactions/{transaction}` — Delete Transaction

#### Accounting Integrations
- **Removed** `DELETE //{domain}/api/qbo/accounts` — Delete Accounts
- **Removed** `DELETE //{domain}/api/qbo/bills` — Delete Bills
- **Removed** `DELETE //{domain}/api/qbo/credit-memos` — Delete Credit Memos
- **Removed** `DELETE //{domain}/api/qbo/customers` — Delete Customers
- **Removed** `DELETE //{domain}/api/qbo/customers/{qboCustomer}/unlink-sku-customer` — Unlink SKU Customer
- **Removed** `DELETE //{domain}/api/qbo/integrations/{id}` — Delete Integration
- **Removed** `DELETE //{domain}/api/qbo/invoices` — Delete Invoices
- **Removed** `DELETE //{domain}/api/qbo/items` — Delete Items
- **Removed** `DELETE //{domain}/api/qbo/journals` — Delete Journals
- **Removed** `DELETE //{domain}/api/qbo/payments` — Delete Payments
- **Removed** `DELETE //{domain}/api/qbo/purchase-orders` — Delete Purchase Orders
- **Removed** `DELETE //{domain}/api/qbo/tax-codes` — Delete Tax Codes
- **Removed** `DELETE //{domain}/api/qbo/tax-rates` — Delete Tax Rates
- **Removed** `DELETE //{domain}/api/qbo/vendors` — Delete Vendors
- **Removed** `DELETE //{domain}/api/xero/integrations/{id}` — Delete Integration Instance

#### Bills
- **Removed** `DELETE /api/bills/1` — Delete Bill

#### Custom Fields
- **Removed** `DELETE //{domain}/api/custom-field-values/{custom_field_value}` — Delete Custom Field Value
- **Removed** `DELETE //{domain}/api/custom-fields/{custom_field}` — Delete Custom Field

#### Organization
- **Removed** `DELETE //{protocol}{domain}/api/product-brands` — Bulk Delete Product Brands
- **Removed** `DELETE //{protocol}{domain}/api/product-brands/1` — Delete Product Brand
- **Removed** `DELETE /api/attribute-groups/1` — Delete Attribute Group
- **Removed** `DELETE /api/attributes/1` — Delete Attribute

#### Products
- **Removed** `DELETE //{domain}/api/products` — Bulk Delete Products
- **Removed** `DELETE //{domain}/api/products/{id}` — Delete Product
- **Removed** `DELETE //{domain}/api/products/{productId}/attributes` — Delete Product Attributes

#### Sales Channels
- **Removed** `DELETE //{domain}/api/amazon-inbound-shortages/{amazonInboundShortage}` — Delete Inbound Shortage
- **Removed** `DELETE //{domain}/api/amazon/instances/{integrationInstance}/notification-subscriptions` — Tear Down All Subscriptions
- **Removed** `DELETE //{domain}/api/amazon/integration-instances/{integrationInstance}/ledgers` — Delete AWD Ledgers
- **Removed** `DELETE //{domain}/api/amazon/reimbursement-cases/{reimbursementCase}` — Delete reimbursement case
- **Removed** `DELETE //{domain}/api/amazon/unified/awd/initial-inventory` — Delete AWD initial inventory
- **Removed** `DELETE //{domain}/api/amazon/unified/awd/ledgers` — Delete AWD ledgers
- **Removed** `DELETE //{domain}/api/amazon/unified/awd/shipments` — Delete AWD shipments
- **Removed** `DELETE //{domain}/api/amazon/unified/fee-mappings/{feeMapping}` — Delete Fee Mapping
- **Removed** `DELETE //{domain}/api/amazon/unified/financial-event-groups/{financialEventGroup}/accounting-transactions` — Delete Accounting Transactions
- **Removed** `DELETE //{domain}/api/amazon/unified/settlement-mapping-groups/{settlementMappingGroup}` — Delete Mapping Group
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}` — Delete Amazon Integration Instance
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/awd/ledgers` — Delete AWD Ledgers
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/items/{draft_inbound_plan_item}` — Remove Item from Draft Plan
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}` — Delete Draft Inbound Plan
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/boxes/{box}` — Delete Box
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/fba/carton-templates/{carton_template}` — Delete Carton Template
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/finances/settlement-mapping-groups/{settlementMappingGroup}` — Delete Mapping Group
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/orders/{order}` — Delete Order
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/outbound/{id}` — Delete Outbound Fulfillment
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/products/{product}/map` — Unmap Single Product
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/removal-orders/{orderId}/undo-all-receipts` — Undo All Receipts for Removal Order
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/removal-orders/{removalOrderId}/clear-warehouse` — Clear Receiving Warehouse
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/removal-shipment-discards/{discard}` — Remove Single Discard
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/reconcile-pretracking` — Undo Reconcile Pre-Tracking (Straddle)
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/remove-receipt` — Remove Receipt (Single Shipment)
- **Removed** `DELETE //{domain}/api/amazon/{integrationInstance}/shipping-method-mappings/{mapping}` — Delete Shipping Method Mapping
- **Removed** `DELETE //{domain}/api/big-commerce/{integrationInstance}` — Delete Integration Instance
- **Removed** `DELETE //{domain}/api/ebay/integration-instances/{integrationInstance}` — Delete Integration Instance
- **Removed** `DELETE //{domain}/api/ebay/{integrationInstance}/legacy-products/{product}` — Delete Legacy Product
- **Removed** `DELETE //{domain}/api/shopify/webhook-events/bulk-delete` — Bulk Delete Events
- **Removed** `DELETE //{domain}/api/shopify/{integrationInstance}/orders/{order}` — Delete Single Order
- **Removed** `DELETE //{domain}/api/shopify/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order (Keep Shopify Order)
- **Removed** `DELETE //{domain}/api/shopify/{integrationInstance}/products/{product}/map` — Unmap Product
- **Removed** `DELETE //{domain}/api/shopify/{integrationInstance}/webhook-events/delete-all` — Delete All Events for Integration
- **Removed** `DELETE //{domain}/api/temu/{integrationInstance}/orders/{order}` — Delete Order
- **Removed** `DELETE //{domain}/api/temu/{integrationInstance}/orders/{order}/sku-order` — Delete Linked SKU Order
- **Removed** `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}` — Disconnect Integration Instance
- **Removed** `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}` — Delete Order
- **Removed** `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}/sku-order` — Delete Linked SKU Order
- **Removed** `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/payment-method-mappings` — Delete Payment Method Mapping
- **Removed** `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}` — Delete Product
- **Removed** `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}/map` — Unmap Product SKU
- **Removed** `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/shipping-method-mappings/{skuShippingMethodId}` — Delete Shipping Method Mapping
- **Removed** `DELETE //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/warehouse-mappings/{tiktokShopWarehouseId}` — Delete Warehouse Mapping
- **Removed** `DELETE //{domain}/api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}` — Delete Integration Instance
- **Removed** `DELETE //{domain}/api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/payment-method-mappings` — Delete Payment Method Mapping
- **Removed** `DELETE //{domain}/api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/shipping-method-mappings/{skuShippingMethodId}` — Delete Shipping Method Mapping
- **Removed** `DELETE //{domain}/api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/warehouse-mappings/{tiktokShopWarehouseId}` — Delete Warehouse Mapping
- **Removed** `DELETE //{domain}/api/tiktok-shop/webhook-events` — Delete All Webhook Events
- **Removed** `DELETE //{domain}/api/tiktok-shop/webhook-events/{tikTokShopWebhookEvent}` — Delete Webhook Event
- **Removed** `DELETE //{domain}/api/walmart/{integrationInstance}` — Delete Integration Instance
- **Removed** `DELETE //{domain}/api/walmart/{integrationInstance}/products/{product}/map` — Unmap Single Product
- **Removed** `DELETE //{domain}/api/woo-commerce/{integration_instance}` — Delete Integration Instance
- **Removed** `DELETE //{domain}/api/woo-commerce/{integration_instance}/orders/{order}` — Delete Order
- **Removed** `DELETE //{domain}/api/woo-commerce/{integration_instance}/products/{product}` — Delete Product
- **Removed** `DELETE /api/channel-partners/1` — Delete Channel Partner

#### Sales Reps
- **Removed** `DELETE //{domain}/api/sales-reps/{sales_rep}` — Delete Sales Rep

#### Shipping Providers
- **Removed** `DELETE //{domain}/api/3pl/tokens/{integrationInstance}` — Delete 3PL Integration Token
- **Removed** `DELETE //{domain}/api/odoo-3pl/{integration_instance}` — Delete Integration Instance
- **Removed** `DELETE //{domain}/api/shipfusion/integration-instances/{integration_instance}` — Delete Integration Instance
- **Removed** `DELETE //{domain}/api/shipfusion/integration-instances/{integration_instance}/orders/SF-12345` — Delete Order
- **Removed** `DELETE //{domain}/api/shipfusion/integration-instances/{integration_instance}/warehouse-mappings/IL` — Delete Warehouse Mapping
- **Removed** `DELETE //{domain}/api/shiphero/integration-instances/{integration_instance}` — Delete Integration Instance
- **Removed** `DELETE //{domain}/api/shipmyorders/integration-instances/{integration_instance}` — Delete Integration Instance
- **Removed** `DELETE //{domain}/api/shipmyorders/invoices` — Bulk Delete Invoices
- **Removed** `DELETE //{domain}/api/shipmyorders/invoices/{id}` — Delete Invoice
- **Removed** `DELETE //{domain}/api/shipstation/integration-instances/{integration_instance}` — Delete Integration Instance
- **Removed** `DELETE //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods/map/ups|ups_ground` — Unmap Shipping Method
- **Removed** `DELETE //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-subscriptions/{subscription}` — Unsubscribe Webhook
- **Removed** `DELETE //{domain}/api/trackstar/integration-instances/{integration_instance}` — Delete Integration Instance
- **Removed** `DELETE //{domain}/api/trackstar/integration-instances/{integration_instance}/warehouse-mappings/{warehouse_mapping}` — Delete Warehouse Mapping
- **Removed** `DELETE //{domain}/api/veracore/integration-instances/{integration_instance}` — Delete Integration Instance

#### Webhook Events
- **Removed** `DELETE /api/big-commerce/1/webhook-events/delete-all` — Delete All Webhook Events

_…plus 1768 more (see the API reference)._

### Incompatible changes

#### 17TRACK
- **Changed** `DELETE /api/integrations/17track/instances/{instance}` — Disconnect 17TRACK Instance
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Accounting
- **Changed** `DELETE /api/accounting/transactions` — Bulk Delete Transactions
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`

#### Adjustments & Transfers
- **Changed** `DELETE /api/inventory-adjustments` — Bulk Delete Inventory Adjustments
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/inventory-adjustments/{inventory_adjustment}` — Delete Inventory Adjustment
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Allocations
- **Changed** `DELETE /api/vendor-credits/{vendor_credit}/allocations/{vendor_credit_allocation}` — Unallocate (Delete Allocation)
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### API Shipping Provider
- **Changed** `DELETE /api/api-shipping-providers/inbound-events/bulk-delete` — Bulk Delete Events
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/api-shipping-providers/{provider-id}` — Delete Provider
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/api-shipping-providers/{provider-id}/inbound-events/delete-all` — Delete All Events for Instance
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/api-shipping-providers/{provider-id}/tokens/{token-id}` — Revoke Token
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Applications
- **Changed** `DELETE /api/vendor-deposit-applications/{applicationId}` — Unapply Deposit Application
  - removed parameter(s): `Accept`, `Authorization`
  - new response code(s): `401`, `403`, `404`, `429`

#### Assemblies
- **Changed** `DELETE /api/assemblies` — Bulk Delete Assemblies
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/assemblies/{assembly}` — Delete Assembly
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Attachments
- **Changed** `DELETE /api/vendor-credits/{vendorCredit}/attachments/{attachment}` — Delete Vendor Credit Attachment
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/vendor-deposits/{vendorDepositId}/attachments/{attachmentId}` — Delete Vendor Deposit Attachment
  - removed parameter(s): `Accept`, `Authorization`
  - new response code(s): `401`, `403`, `404`, `429`

#### Authentication
- **Changed** `DELETE /api/auth/token` — Sign Out of All Sessions (Global Logout)
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `429`

#### Bills
- **Changed** `DELETE /api/bills` — Bulk Delete Bills
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`

#### Bulk Operations
- **Changed** `DELETE /api/vendor-credits` — Bulk Delete Vendor Credits
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`

#### CSV Templates
- **Changed** `DELETE /api/csv-templates/{csv_template}` — Delete CSV Template
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Custom Fields
- **Changed** `DELETE /api/custom-field-values/{custom_field_value}` — Delete Custom Field Value
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/custom-fields/{customField}` — Delete Custom Field
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Customers
- **Changed** `DELETE /api/customers` — Bulk Delete Customers
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/customers/{customer_id}/sku-mappings/{mapping_id}` — Delete SKU Mapping
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/customers/{customer}` — Delete Customer
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/customers/{customer}/sales-credits/{salesCredit}/allocations/{allocation}` — Unallocate Sales Credit from Order
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Discount Codes
- **Changed** `DELETE /api/discount-codes/{discountCode}` — Delete Discount Code
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Faire
- **Changed** `DELETE /api/faire/instances/{integrationInstance}` — Delete Faire Instance
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/faire/instances/{integrationInstance}/orders/{order}/sku-order` — Delete Linked Sales Order
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/faire/instances/{integrationInstance}/products/{option}/map` — Unmap Single Variant
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Financial Alerts
- **Changed** `DELETE /api/financial-alerts/classifications/{classification}` — Delete Classification
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/financial-alerts/{financial_alert}` — Delete Financial Alert
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Financial Line Types
- **Changed** `DELETE /api/financial-line-types` — Bulk Delete Financial Line Types
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/financial-line-types/{financial_line_type}` — Delete Financial Line Type
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Incoterms
- **Changed** `DELETE /api/incoterms` — Bulk Delete Incoterms
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/incoterms/{incoterm}` — Delete Incoterm
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Initial Inventory
- **Changed** `DELETE /api/initial-inventory/{id}` — Delete Initial Inventory
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Integration Instances
- **Changed** `DELETE /api/integration-instances/{integration_instance}` — Delete Integration Instance
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/integration-instances/{integration_instance}/listings` — Bulk Delete Listings
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/integration-instances/{integration_instance}/listings/{id}` — Delete Single Listing
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/integration-instances/{integration_instance}/magento/store/mapping` — Delete Magento Payment Method Mapping
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Inventory
- **Changed** `DELETE /api/inventory-forecasting/configurations/{configuration}` — Delete Forecast Configuration
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/v2/inventory/holds/{reservation}` — Delete Inventory Hold
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Inventory Intelligence
- **Changed** `DELETE /api/inventory-forecasting/configurations/default` — Clear My Default Configuration
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `429`

#### Jobs & Logs
- **Changed** `DELETE /api/tracked-job-logs/{tracked_job_log}` — Delete Tracked Job Log
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Ledger (Accounting v2)
- **Changed** `DELETE /api/ledger/entries/{entry}/nominal-overrides` — Remove Nominal Override
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/ledger/opening-balance` — Delete Opening Balance
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/ledger/reconciliation/bank-statements/lines/{bankStatementLine}/dismissals` — Restore Dismissed Suggestions
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/ledger/reconciliation/bank-statements/lines/{bankStatementLine}/match` — Clear Line Match
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/ledger/reconciliation/bank-statements/{bankStatementImport}` — Delete Statement Import
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Misc
- **Changed** `DELETE /api/addresses/{address}` — Delete Address
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/notes/{note}` — Delete Note
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/sales-reps/{id}` — Delete Sales Rep
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/user-api/{token}` — Delete API Key
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### MO Operations
- **Changed** `DELETE /api/manufacturing/mo-operations/{moOperation}` — Delete MO Operation
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### MRP Planning
- **Changed** `DELETE /api/manufacturing/mrp/bill-of-resources/{billOfResource}` — Delete Bill of Resource
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/manufacturing/mrp/distribution-network/{distributionNetwork}` — Delete Distribution Edge
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/manufacturing/mrp/mps/{mpsEntry}` — Delete MPS Entry
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/manufacturing/mrp/planning-calendars/{planningCalendar}` — Delete Planning Calendar
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/manufacturing/mrp/scenarios/{mrpScenario}` — Delete Scenario
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Nominal Codes
- **Changed** `DELETE /api/nominal-codes` — Bulk Delete Nominal Codes
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/nominal-codes/{nominal_code}` — Delete Nominal Code
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Notes
- **Changed** `DELETE /api/vendor-credits/{vendorCredit}/notes/{noteId}` — Delete Vendor Credit Note
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### OCR
- **Changed** `DELETE /api/vendor-credits/ocr/{extraction}` — Delete Vendor Credit Extraction
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Organization
- **Changed** `DELETE /api/attribute-groups` — Bulk Delete Attribute Groups
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/attributes` — Bulk Delete Attributes
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/categories` — Bulk Delete Categories
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/categories/{category}` — Delete Category
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/product-brands` — Bulk Delete Product Brands
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`

#### Payment Terms
- **Changed** `DELETE /api/payment-terms` — Bulk Delete Payment Terms
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`

#### Payment Types
- **Changed** `DELETE /api/payment-types` — Bulk Delete Payment Types
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/payment-types/{payment_type}` — Delete Payment Type
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Pricing
- **Changed** `DELETE /api/product-pricing-tiers` — Bulk Delete Pricing Tiers
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/product-pricing-tiers/{product_pricing_tier}` — Delete Pricing Tier
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Product Pro Forma
- **Changed** `DELETE /api/v2/pro-forma/scenarios/{scenarioId}` — Delete Scenario
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`

#### Products
- **Changed** `DELETE /api/products` — Bulk Delete Products
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/products/{id}` — Delete Product
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/products/{productId}/attributes` — Delete Product Attributes
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `404`, `429`

#### Report Templates
- **Changed** `DELETE /api/report-templates/{report_template}` — Delete Report Template
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Return Shipments
- **Changed** `DELETE /api/vendor-credits/{vendor_credit}/shipments/{vendor_credit_shipment}` — Delete Return Shipment
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Roles & Permissions
- **Changed** `DELETE /api/roles/{role}` — Delete Role
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Sales Channel Product Templates
- **Changed** `DELETE /api/sales-channel-product-templates/{sales_channel_product_template}` — Delete Sales Channel Product Template
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Sales Channels
- **Changed** `DELETE /api/channel-partners/inbound-events/bulk-delete` — Bulk Delete Events
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`

#### Starshipit
- **Changed** `DELETE /api/starshipit/integration-instances/{integration_instance}/shipping-methods/map/{code}` — Unmap Carrier/Service
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `429`

#### Stock Takes
- **Changed** `DELETE /api/stock-takes` — Bulk Delete Stock Takes
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/stock-takes/{stock_take}` — Delete Stock Take
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Store Email Templates
- **Changed** `DELETE /api/store-email-templates` — Bulk Delete Store Email Templates
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`

#### Stores
- **Changed** `DELETE /api/stores` — Bulk Delete Stores
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`

#### Subscriptions
- **Changed** `DELETE /api/subscription-offerings/{subscription_offering}` — Delete Subscription Offering
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/subscription-offerings/{subscription_offering}/editions/{edition}` — Delete Edition for Offering
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Tags
- **Changed** `DELETE /api/tags` — Bulk Delete Tags
  - removed parameter(s): `Accept`, `Content-Type`
  - new response code(s): `401`, `403`, `429`

#### Temu
- **Changed** `DELETE /api/temu/webhook-events/bulk-delete` — Bulk Delete Events
  - removed parameter(s): `Accept`, `Authorization`, `Content-Type`
  - new response code(s): `401`, `403`, `429`
- **Changed** `DELETE /api/temu/{integrationInstance}/products/{product}/map` — Unmap Product
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/temu/{integrationInstance}/webhook-events/delete-all` — Delete All Events (per instance)
  - removed parameter(s): `Accept`, `Authorization`, `Content-Type`
  - new response code(s): `401`, `403`, `404`, `429`

#### UI Utilities
- **Changed** `DELETE /api/table-views/{tableView}` — Delete Table View
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Users
- **Changed** `DELETE /api/users/{user}` — Delete (Deactivate) / Restore User
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `429`

#### Vendor Credits
- **Changed** `DELETE /api/vendor-credits/{vendor_credit}` — Delete Vendor Credit
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Vendor Deposits
- **Changed** `DELETE /api/vendor-deposits/{vendorDepositId}` — Delete Vendor Deposit
  - removed parameter(s): `Accept`, `Authorization`
  - new response code(s): `401`, `403`, `404`, `429`

#### Walmart
- **Changed** `DELETE /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}` — Cancel Inbound Shipment
  - removed parameter(s): `Accept`, `Authorization`
  - new response code(s): `401`, `403`, `404`, `429`
- **Changed** `DELETE /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/carrier-rate-quote` — Void WFS Inbound Carrier Rate Quote
  - removed parameter(s): `Accept`, `Authorization`
  - new response code(s): `401`, `403`, `404`, `429`

#### Webhooks
- **Changed** `DELETE /api/webhook-subscriptions/{id}` — Delete Webhook Subscription
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

#### Workflow Credentials
- **Changed** `DELETE /api/automation/workflow-credentials/{uuid}` — Delete Workflow Credential
  - removed parameter(s): `Accept`
  - new response code(s): `401`, `403`, `404`, `429`

_…plus 1068 more (see the API reference)._

## Added

### 3PL
- `DELETE /api/3pl/tokens/{integrationInstance}` — Delete 3PL Integration Token

### Accounting
- `DELETE /api/accounting/transactions/{id}` — Delete Transaction

### Amazon
- `DELETE /api/amazon-ads/{integrationInstance}` — Delete Amazon Ads Connection
- `DELETE /api/amazon-inbound-shortages/{amazonInboundShortage}` — Delete Inbound Shortage
- `DELETE /api/amazon/instances/{integrationInstance}/notification-subscriptions` — Tear Down All Subscriptions
- `DELETE /api/amazon/unified/awd/initial-inventory` — Delete AWD initial inventory
- `DELETE /api/amazon/unified/awd/ledgers` — Delete AWD ledgers
- `DELETE /api/amazon/unified/awd/shipments` — Delete AWD shipments
- `DELETE /api/amazon/unified/fee-mappings/{feeMapping}` — Delete Fee Mapping
- `DELETE /api/amazon/unified/financial-event-groups/{financialEventGroup}/accounting-transactions` — Delete Accounting Transactions
- `DELETE /api/amazon/unified/reimbursement-cases/{reimbursementCase}` — Delete Reimbursement Case
- `DELETE /api/amazon/unified/settlement-mapping-groups/{settlementMappingGroup}` — Delete Mapping Group
- `DELETE /api/amazon/unified/settlement-type-mappings/overrides/{id}` — Delete Settlement Type Mapping Override
- `DELETE /api/amazon/{integrationInstance}` — Delete Amazon Integration Instance
- `DELETE /api/amazon/{integrationInstance}/awd/ledgers` — Delete AWD Ledgers
- `DELETE /api/amazon/{integrationInstance}/draft-inbound-plans/items/{draft_inbound_plan_item}` — Remove Item from Draft Plan
- `DELETE /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}` — Delete Draft Inbound Plan
- `DELETE /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/boxes/{box}` — Delete Box
- `DELETE /api/amazon/{integrationInstance}/fba/carton-templates/{carton_template}` — Delete Carton Template
- `DELETE /api/amazon/{integrationInstance}/finances/settlement-mapping-groups/{settlementMappingGroup}` — Delete Mapping Group
- `DELETE /api/amazon/{integrationInstance}/orders/{order}` — Delete Order
- `DELETE /api/amazon/{integrationInstance}/outbound/{id}` — Delete Outbound Fulfillment
- `DELETE /api/amazon/{integrationInstance}/products/{product}/map` — Unmap Single Product
- `DELETE /api/amazon/{integrationInstance}/removal-orders/{orderId}/undo-all-receipts` — Undo All Receipts for Removal Order
- `DELETE /api/amazon/{integrationInstance}/removal-orders/{removalOrderId}/clear-warehouse` — Clear Receiving Warehouse
- `DELETE /api/amazon/{integrationInstance}/removal-shipment-discards/{discard}` — Remove Single Discard
- `DELETE /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/reconcile-pretracking` — Undo Reconcile Pre-Tracking (Straddle)
- `DELETE /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/remove-receipt` — Remove Receipt (Single Shipment)
- `DELETE /api/amazon/{integrationInstance}/shipping-method-mappings/{mapping}` — Delete Shipping Method Mapping

### Amortization Schedules
- `DELETE /api/amortization-schedules/{amortizationSchedule}` — Delete Amortization Schedule

### Artwork
- `DELETE /api/artworks/{artwork}` — Archive Artwork

### BigCommerce
- `DELETE /api/big-commerce/{id}/webhook-events/delete-all` — Delete All Webhook Events
- `DELETE /api/big-commerce/{integrationInstance}` — Delete Integration Instance
- `DELETE /api/big-commerce/{integrationInstance}/orders/{order}` — Delete Order
- `DELETE /api/big-commerce/{integrationInstance}/orders/{order}/sku-order` — Delete Linked SKU.io Order
- `DELETE /api/big-commerce/{integrationInstance}/products/{product}/map` — Unmap Product

### Bills
- `DELETE /api/bills/{id}` — Delete Bill

### BOMs
- `DELETE /api/manufacturing/boms` — Bulk Delete BOMs
- `DELETE /api/manufacturing/boms/{id}` — Delete BOM

### Channel Partners
- `DELETE /api/channel-partners/{id}` — Delete Channel Partner
- `DELETE /api/channel-partners/{id}/inbound-events/delete-all` — Delete All Inbound Events
- `DELETE /api/channel-partners/{id}/tokens/{id2}` — Revoke API Token

### Contractors
- `DELETE /api/manufacturing/contractors/{supplier}` — Delete Contractor

### Costing
- `DELETE /api/cost-allocations/{costAllocation}` — Delete Cost Allocation
- `DELETE /api/cost-entries/{costEntry}` — Delete Cost Entry
- `DELETE /api/cost-entries/{costEntry}/allocations` — Delete Cost Entry Allocations
- `DELETE /api/cost-entry-types/{costEntryType}` — Delete Cost Entry Type

### Customers
- `DELETE /api/customers/{customer}/addresses/{address}` — Delete Customer Address

### Data Feeds
- `DELETE /api/data-feeds` — Bulk Delete Data Feeds
- `DELETE /api/data-feeds/{id}` — Delete Data Feed

### Decoration Cost Rules
- `DELETE /api/decoration-cost-rules/{decoration_cost_rule}` — Delete Decoration Cost Rule

### Decoration Methods
- `DELETE /api/decoration-methods/{decoration_method}` — Delete Decoration Method

### Decoration Placements
- `DELETE /api/decoration-placements/{decoration_placement}` — Delete Decoration Placement

### eBay
- `DELETE /api/ebay/{integrationInstance}` — Delete eBay Integration
- `DELETE /api/ebay/{integrationInstance}/legacy-products/{product}` — Delete Legacy Product
- `DELETE /api/ebay/{integrationInstance}/orders/{order}` — Delete eBay Order
- `DELETE /api/ebay/{integrationInstance}/orders/{order}/sku-order` — Delete Linked Sales Order
- `DELETE /api/ebay/{integrationInstance}/products/{product}/map` — Unmap eBay Listing

### Fulfillment Orders
- `DELETE /api/export/fulfillment-orders/{fulfillmentOrder}/packing-slip/cache` — Clear Fulfillment Order Packing Slip Cache
- `DELETE /api/fulfillment-orders/merge-group/{mergeGroup}` — Delete Fulfillment Order Merge Group

### Fulfillments
- `DELETE /api/export/sales-order-fulfillments/{salesOrderFulfillment}/packing-slip/cache` — Clear Shipment Packing Slip Cache

### Google Calendar
- `DELETE /api/google-calendar/integrations/{id}` — Delete Google Calendar Connection
- `DELETE /api/google-calendar/subscriptions/{featureKey}` — Delete Calendar Sync Subscription

### Inbound Shipments
- `DELETE /api/inbound-shipments/{inbound_shipment}` — Delete Inbound Shipment
- `DELETE /api/inbound-shipments/{inbound_shipment}/bills/{bill}` — Delete Bill

### Inventory Intelligence
- `DELETE /api/inventory-aging/notes/{product}` — Delete Product Note
- `DELETE /api/inventory-forecasting/schedules/{schedule}` — Delete Schedule

### Landed Cost Invoice OCR
- `DELETE /api/landed-cost-invoices/ocr/{landed_cost_extraction_id}` — Delete Extraction

### Manage
- `DELETE /api/customers/{customer}/payment-methods/{paymentMethod}` — Remove Card On File

### Manufacturing Orders
- `DELETE /api/manufacturing/manufacturing-orders/{id}` — Delete Manufacturing Order

### Organization
- `DELETE /api/attribute-groups/{id}` — Delete Attribute Group
- `DELETE /api/attributes/{id}` — Delete Attribute
- `DELETE /api/product-brands/{id}` — Delete Product Brand

### Payment Terms
- `DELETE /api/payment-terms/{id}` — Delete Payment Term

### Products
- `DELETE /api/delete-image` — Delete Uploaded Image
- `DELETE /api/product-images/{productImage}` — Delete Product Image

### Purchase Invoice OCR
- `DELETE /api/purchase-invoices/ocr/{purchase_extraction_id}` — Delete Extraction

### Purchase Invoices
- `DELETE /api/purchase-invoices` — Bulk Delete Purchase Invoices
- `DELETE /api/purchase-invoices/{purchaseInvoiceId}/payments/{payment}` — Delete Payment
- `DELETE /api/purchase-invoices/{purchaseInvoice}/attachments/{attachment}` — Delete Purchase Invoice Attachment
- `DELETE /api/purchase-invoices/{purchaseInvoice}/notes/{noteId}` — Delete Note
- `DELETE /api/purchase-invoices/{purchase_invoice}` — Delete Purchase Invoice

### Purchase Order Shipments
- `DELETE /api/inbound-shipments/receipts/{receipt}` — Delete Receipt
- `DELETE /api/purchase-order-shipments/{shipment}/notes/{noteId}` — Delete Note

### Purchase Orders
- `DELETE /api/purchase-order-line-billing-settlements/{purchase_order_line}` — Unsettle PO Line Billing
- `DELETE /api/purchase-order-line-short-close-events/{short_close_event}` — Undo Short-Close
- `DELETE /api/purchase-orders` — Bulk Delete Purchase Orders
- `DELETE /api/purchase-orders/{purchase_order}` — Delete Purchase Order
- `DELETE /api/purchase-orders/{purchase_order}/notes/{noteId}` — Delete Note

### Purchase Receipts
- `DELETE /api/purchase-receipts/{receipt}/notes/{noteId}` — Delete Purchase Receipt Note

### QuickBooks Online
- `DELETE /api/qbo/accounts` — Delete Accounts
- `DELETE /api/qbo/bills` — Delete Bills
- `DELETE /api/qbo/credit-memos` — Delete Credit Memos

### UI Utilities
- `DELETE /api/pdf-templates/{id}` — Delete PDF Template
- `DELETE /api/pdf-templates/{id}/store-override` — Delete Store Override

### Units of Measure
- `DELETE /api/manufacturing/units-of-measure/{unitOfMeasure}` — Delete Unit of Measure

### Work Centers
- `DELETE /api/manufacturing/work-centers` — Bulk Delete Work Centers
- `DELETE /api/manufacturing/work-centers/{id}` — Delete Work Center

### Workflow Executions
- `DELETE /api/automation/workflow-executions/{execution}` — Delete Workflow Execution

### Workflows
- `DELETE /api/automation/workflows/{workflow}` — Delete Workflow

_…plus 2795 more (see the API reference)._

## Changed

### Products
- `GET /api/v2/products/import-supplier-links/template` — Download Supplier Link Template
  - new response code(s): `401`, `403`, `429`
- `GET /api/v2/products/list/export` — Export Product List
  - new response code(s): `401`, `403`, `429`
- `GET /api/v2/products/list/export/download` — Download Export File
  - new response code(s): `401`, `403`, `429`

## Deprecated

### Faire
- `GET /api/faire/inventory` — List Faire Inventory
- `POST /api/faire/inventory/push` — Push Inventory to Faire
- `GET /api/faire/inventory/summary` — Get Faire Inventory Summary

_Spec version 1.0.0 → 1.0.0._
