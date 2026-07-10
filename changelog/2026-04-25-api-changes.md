---
title: API changes — 2026-04-25
description: This release includes 1070 additions, 1070 removals. 1070 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-04-25
---

This release includes 1070 additions, 1070 removals. 1070 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Accounting
- **Removed** `DELETE /api/accounting/payments/:id` — Delete Payment
- **Removed** `DELETE /api/accounting/transactions/:transaction` — Delete Transaction

#### Accounting Integrations
- **Removed** `DELETE /api/qbo/customers/:qboCustomer/unlink-sku-customer` — Unlink SKU Customer
- **Removed** `DELETE /api/qbo/integrations/:id` — Delete Integration

#### Adjustments & Transfers
- **Removed** `DELETE /api/inventory-adjustments/:inventory_adjustment` — Delete Inventory Adjustment

#### Assemblies
- **Removed** `DELETE /api/assemblies/:assembly` — Delete Assembly

#### Channel Partners
- **Removed** `DELETE /api/channel-partners/:integrationInstanceId` — Delete Channel Partner
- **Removed** `DELETE /api/channel-partners/:integrationInstanceId/inbound-events/delete-all` — Delete All Events for Instance
- **Removed** `DELETE /api/channel-partners/:integrationInstanceId/tokens/:tokenId` — Revoke Token

#### Configuration
- **Removed** `DELETE /api/financial-alerts/:financial_alert` — Delete Financial Alert
- **Removed** `DELETE /api/financial-alerts/classifications/:classification` — Delete Classification
- **Removed** `DELETE /api/financial-line-types/:financial_line_type` — Delete Financial Line Type
- **Removed** `DELETE /api/incoterms/:incoterm` — Delete Incoterm
- **Removed** `DELETE /api/nominal-codes/:nominal_code` — Delete Nominal Code
- **Removed** `DELETE /api/payment-types/:payment_type` — Delete Payment Type

#### CSV Templates
- **Removed** `DELETE /api/csv-templates/:csv_template` — Delete CSV Template

#### Custom Fields
- **Removed** `DELETE /api/custom-field-values/:custom_field_value` — Delete Custom Field Value
- **Removed** `DELETE /api/custom-fields/:custom_field` — Delete Custom Field

#### Customers
- **Removed** `DELETE /api/customers/:customer` — Delete Customer

#### Discount Codes
- **Removed** `DELETE /api/discount-codes/:discount_code` — Delete Discount Code

#### Financials
- **Removed** `DELETE /api/financials/daily-summary/:daily_summary` — Delete Daily Financial Summary

#### Inbound Shipments
- **Removed** `DELETE /api/inbound-shipments/:inbound_shipment` — Delete Inbound Shipment
- **Removed** `DELETE /api/inbound-shipments/:inbound_shipment/bills/:bill` — Delete Bill

#### Initial Inventory
- **Removed** `DELETE /api/initial-inventory/:id` — Delete Initial Inventory

#### Integration Instances
- **Removed** `DELETE /api/integration-instances/:integration_instance` — Delete Integration Instance
- **Removed** `DELETE /api/integration-instances/:integration_instance/listings` — Bulk Delete Listings
- **Removed** `DELETE /api/integration-instances/:integration_instance/listings/:id` — Delete Single Listing
- **Removed** `DELETE /api/integration-instances/:integration_instance/magento/store/mapping` — Delete Magento Payment Method Mapping

#### Inventory Intelligence
- **Removed** `DELETE /api/inventory-aging/notes/:product` — Delete Product Note
- **Removed** `DELETE /api/inventory-forecasting/configurations/:configuration` — Delete Configuration
- **Removed** `DELETE /api/inventory-forecasting/schedules/:schedule` — Delete Schedule

#### Jobs & Logs
- **Removed** `DELETE /api/tracked-job-logs/:tracked_job_log` — Delete Tracked Job Log

#### Misc
- **Removed** `DELETE /api/addresses/:address` — Delete Address
- **Removed** `DELETE /api/custom-fields/:customField` — Delete Custom Field
- **Removed** `DELETE /api/discount-codes/:discountCode` — Delete Discount Code
- **Removed** `DELETE /api/notes/:note` — Delete Note
- **Removed** `DELETE /api/table-views/:tableView` — Delete Table View

#### Organization
- **Removed** `DELETE /api/categories/:category` — Delete Category

#### Pricing
- **Removed** `DELETE /api/product-pricing-tiers/:product_pricing_tier` — Delete Pricing Tier

#### Products
- **Removed** `DELETE /api/products/:id` — Delete Product
- **Removed** `DELETE /api/products/:productId/attributes` — Delete Product Attributes

#### Purchase Invoices
- **Removed** `DELETE /api/purchase-invoices/:purchaseInvoice/notes/:noteId` — Delete Note
- **Removed** `DELETE /api/purchase-invoices/:purchaseInvoiceId/payments/:payment` — Delete Payment
- **Removed** `DELETE /api/purchase-invoices/:purchase_invoice` — Delete Purchase Invoice

#### Purchase Order Shipments
- **Removed** `DELETE /api/purchase-order-shipments/:shipment/notes/:noteId` — Delete Note
- **Removed** `DELETE /api/purchase-order-shipments/receipts/:receipt` — Delete Receipt

#### Purchase Orders
- **Removed** `DELETE /api/purchase-orders/:purchase_order` — Delete Purchase Order
- **Removed** `DELETE /api/purchase-orders/:purchase_order/notes/:noteId` — Delete Note

#### Purchase Receipts
- **Removed** `DELETE /api/purchase-receipts/:receipt/notes/:noteId` — Delete Note

#### Report Templates
- **Removed** `DELETE /api/report-templates/:report_template` — Delete Report Template

#### Reporting
- **Removed** `DELETE /api/reporting/inventory-planning/schedules/:scheduledReport` — Delete Scheduled Report

#### Returns & RMAs
- **Removed** `DELETE /api/return-reasons/:return_reason` — Delete Return Reason
- **Removed** `DELETE /api/return-receipts/:returnReceipt/lines/:returnReceiptLine` — Remove Line from Return Receipt
- **Removed** `DELETE /api/return-receipts/:return_receipt` — Delete Return Receipt
- **Removed** `DELETE /api/return-receipts/lines/:returnReceiptLine` — Delete Return Receipt Line (standalone)
- **Removed** `DELETE /api/rmas/:rma` — Delete RMA
- **Removed** `DELETE /api/rmas/:rma/lines/:rmaLine` — Remove Line from RMA
- **Removed** `DELETE /api/rmas/:rma/shipping` — Clear Shipping Details

#### Sales Channel Product Templates
- **Removed** `DELETE /api/sales-channel-product-templates/:sales_channel_product_template` — Delete Sales Channel Product Template

#### Sales Channels
- **Removed** `DELETE /api/amazon-inbound-shortages/:amazonInboundShortage` — Delete Inbound Shortage
- **Removed** `DELETE /api/amazon/:integrationInstance` — Delete Integration Instance
- **Removed** `DELETE /api/amazon/:integrationInstance/awd/ledgers` — Delete AWD Ledgers
- **Removed** `DELETE /api/amazon/:integrationInstance/draft-inbound-plans/:draft_inbound_plan` — Delete Draft Inbound Plan
- **Removed** `DELETE /api/amazon/:integrationInstance/draft-inbound-plans/items/:draft_inbound_plan_item` — Remove Item from Draft Plan
- **Removed** `DELETE /api/amazon/:integrationInstance/finances/settlement-mapping-groups/:settlementMappingGroup` — Delete Mapping Group
- **Removed** `DELETE /api/amazon/:integrationInstance/orders/:order` — Delete Order
- **Removed** `DELETE /api/amazon/:integrationInstance/outbound/:id` — Delete Outbound Fulfillment
- **Removed** `DELETE /api/amazon/:integrationInstance/removal-orders/:orderId/undo-all-receipts` — Undo All Receipts for Order
- **Removed** `DELETE /api/amazon/:integrationInstance/removal-orders/:removalOrderId/clear-warehouse` — Clear Warehouse
- **Removed** `DELETE /api/amazon/:integrationInstance/removal-shipments/:removalShipment/remove-receipt` — Remove Receipt
- **Removed** `DELETE /api/amazon/unified/fee-mappings/:feeMapping` — Delete Fee Mapping
- **Removed** `DELETE /api/amazon/unified/financial-event-groups/:financialEventGroup/accounting-transactions` — Delete Accounting Transactions
- **Removed** `DELETE /api/amazon/unified/settlement-mapping-groups/:settlementMappingGroup` — Delete Mapping Group
- **Removed** `DELETE /api/big-commerce/:integrationInstance` — Delete Integration Instance
- **Removed** `DELETE /api/ebay/:integrationInstance/legacy-products/:product` — Delete Legacy Product
- **Removed** `DELETE /api/ebay/integration-instances/:integrationInstance` — Delete Integration Instance
- **Removed** `DELETE /api/shopify/:integrationInstance/orders/:order` — Delete Single Order
- **Removed** `DELETE /api/shopify/:integrationInstance/orders/:order/sku-order` — Delete SKU Order (Keep Shopify Order)
- **Removed** `DELETE /api/shopify/:integrationInstance/products/:product/map` — Unmap Product
- **Removed** `DELETE /api/shopify/:integrationInstance/webhook-events/delete-all` — Delete All Events for Integration

#### Sales Credits
- **Removed** `DELETE /api/sales-credits/:salesCredit/notes/:noteId` — Delete Note
- **Removed** `DELETE /api/sales-credits/:salesCredit/payments/:payment` — Delete Payment
- **Removed** `DELETE /api/sales-credits/:sales_credit` — Delete Sales Credit

#### Sales Reps
- **Removed** `DELETE /api/sales-reps/:sales_rep` — Delete Sales Rep

#### Shipping Providers
- **Removed** `DELETE /api/3pl/tokens/:integrationInstance` — Delete 3PL Integration Token
- **Removed** `DELETE /api/shiphero/integration-instances/:integration_instance` — Delete Integration Instance
- **Removed** `DELETE /api/shipmyorders/integration-instances/:integration_instance` — Delete Integration Instance
- **Removed** `DELETE /api/shipmyorders/invoices/:id` — Delete Invoice
- **Removed** `DELETE /api/trackstar/integration-instances/:integration_instance` — Delete Integration Instance
- **Removed** `DELETE /api/trackstar/integration-instances/:integration_instance/warehouse-mappings/:warehouse_mapping` — Delete Warehouse Mapping

#### Stock Takes
- **Removed** `DELETE /api/stock-takes/:stock_take` — Delete Stock Take

#### Subscriptions
- **Removed** `DELETE /api/subscription-offerings/:subscription_offering` — Delete Subscription Offering
- **Removed** `DELETE /api/subscription-offerings/:subscription_offering/editions/:edition` — Delete Edition for Offering

#### Suppliers
- **Removed** `DELETE /api/supplier-products/:supplier_product` — Delete Supplier Product
- **Removed** `DELETE /api/supplier-products/:supplier_product/notes/:note` — Delete Note
- **Removed** `DELETE /api/suppliers/:supplier` — Delete Supplier
- **Removed** `DELETE /api/suppliers/:supplier/pricing-tiers/:tierId` — Delete Pricing Tier from Supplier

#### UI Utilities
- **Removed** `DELETE /api/data-tables/saved-views/:saved_view` — Delete Saved View
- **Removed** `DELETE /api/data-tables/saved-views/:saved_view/unset-default` — Unset User Default
- **Removed** `DELETE /api/table-views/:table_view` — Delete Table View

_…plus 970 more (see the API reference)._

## Added

### Accounting
- `DELETE /api/accounting/payments/{id}` — Delete Payment
- `DELETE /api/accounting/transactions/{transaction}` — Delete Transaction

### Accounting Integrations
- `DELETE /api/qbo/customers/{qboCustomer}/unlink-sku-customer` — Unlink SKU Customer
- `DELETE /api/qbo/integrations/{id}` — Delete Integration

### Adjustments & Transfers
- `DELETE /api/inventory-adjustments/{inventory_adjustment}` — Delete Inventory Adjustment

### Assemblies
- `DELETE /api/assemblies/{assembly}` — Delete Assembly

### Channel Partners
- `DELETE /api/channel-partners/{integrationInstanceId}` — Delete Channel Partner
- `DELETE /api/channel-partners/{integrationInstanceId}/inbound-events/delete-all` — Delete All Events for Instance
- `DELETE /api/channel-partners/{integrationInstanceId}/tokens/{tokenId}` — Revoke Token

### Configuration
- `DELETE /api/financial-alerts/classifications/{classification}` — Delete Classification
- `DELETE /api/financial-alerts/{financial_alert}` — Delete Financial Alert
- `DELETE /api/financial-line-types/{financial_line_type}` — Delete Financial Line Type
- `DELETE /api/incoterms/{incoterm}` — Delete Incoterm
- `DELETE /api/nominal-codes/{nominal_code}` — Delete Nominal Code
- `DELETE /api/payment-types/{payment_type}` — Delete Payment Type

### CSV Templates
- `DELETE /api/csv-templates/{csv_template}` — Delete CSV Template

### Custom Fields
- `DELETE /api/custom-field-values/{custom_field_value}` — Delete Custom Field Value
- `DELETE /api/custom-fields/{custom_field}` — Delete Custom Field

### Customers
- `DELETE /api/customers/{customer}` — Delete Customer

### Discount Codes
- `DELETE /api/discount-codes/{discount_code}` — Delete Discount Code

### Financials
- `DELETE /api/financials/daily-summary/{daily_summary}` — Delete Daily Financial Summary

### Inbound Shipments
- `DELETE /api/inbound-shipments/{inbound_shipment}` — Delete Inbound Shipment
- `DELETE /api/inbound-shipments/{inbound_shipment}/bills/{bill}` — Delete Bill

### Initial Inventory
- `DELETE /api/initial-inventory/{id}` — Delete Initial Inventory

### Integration Instances
- `DELETE /api/integration-instances/{integration_instance}` — Delete Integration Instance
- `DELETE /api/integration-instances/{integration_instance}/listings` — Bulk Delete Listings
- `DELETE /api/integration-instances/{integration_instance}/listings/{id}` — Delete Single Listing
- `DELETE /api/integration-instances/{integration_instance}/magento/store/mapping` — Delete Magento Payment Method Mapping

### Inventory Intelligence
- `DELETE /api/inventory-aging/notes/{product}` — Delete Product Note
- `DELETE /api/inventory-forecasting/configurations/{configuration}` — Delete Configuration
- `DELETE /api/inventory-forecasting/schedules/{schedule}` — Delete Schedule

### Jobs & Logs
- `DELETE /api/tracked-job-logs/{tracked_job_log}` — Delete Tracked Job Log

### Misc
- `DELETE /api/addresses/{address}` — Delete Address
- `DELETE /api/custom-fields/{customField}` — Delete Custom Field
- `DELETE /api/discount-codes/{discountCode}` — Delete Discount Code
- `DELETE /api/notes/{note}` — Delete Note
- `DELETE /api/table-views/{tableView}` — Delete Table View

### Organization
- `DELETE /api/categories/{category}` — Delete Category

### Pricing
- `DELETE /api/product-pricing-tiers/{product_pricing_tier}` — Delete Pricing Tier

### Products
- `DELETE /api/products/{id}` — Delete Product
- `DELETE /api/products/{productId}/attributes` — Delete Product Attributes

### Purchase Invoices
- `DELETE /api/purchase-invoices/{purchaseInvoiceId}/payments/{payment}` — Delete Payment
- `DELETE /api/purchase-invoices/{purchaseInvoice}/notes/{noteId}` — Delete Note
- `DELETE /api/purchase-invoices/{purchase_invoice}` — Delete Purchase Invoice

### Purchase Order Shipments
- `DELETE /api/purchase-order-shipments/receipts/{receipt}` — Delete Receipt
- `DELETE /api/purchase-order-shipments/{shipment}/notes/{noteId}` — Delete Note

### Purchase Orders
- `DELETE /api/purchase-orders/{purchase_order}` — Delete Purchase Order
- `DELETE /api/purchase-orders/{purchase_order}/notes/{noteId}` — Delete Note

### Purchase Receipts
- `DELETE /api/purchase-receipts/{receipt}/notes/{noteId}` — Delete Note

### Report Templates
- `DELETE /api/report-templates/{report_template}` — Delete Report Template

### Reporting
- `DELETE /api/reporting/inventory-planning/schedules/{scheduledReport}` — Delete Scheduled Report

### Returns & RMAs
- `DELETE /api/return-reasons/{return_reason}` — Delete Return Reason
- `DELETE /api/return-receipts/lines/{returnReceiptLine}` — Delete Return Receipt Line (standalone)
- `DELETE /api/return-receipts/{returnReceipt}/lines/{returnReceiptLine}` — Remove Line from Return Receipt
- `DELETE /api/return-receipts/{return_receipt}` — Delete Return Receipt
- `DELETE /api/rmas/{rma}` — Delete RMA
- `DELETE /api/rmas/{rma}/lines/{rmaLine}` — Remove Line from RMA
- `DELETE /api/rmas/{rma}/shipping` — Clear Shipping Details

### Sales Channel Product Templates
- `DELETE /api/sales-channel-product-templates/{sales_channel_product_template}` — Delete Sales Channel Product Template

### Sales Channels
- `DELETE /api/amazon-inbound-shortages/{amazonInboundShortage}` — Delete Inbound Shortage
- `DELETE /api/amazon/unified/fee-mappings/{feeMapping}` — Delete Fee Mapping
- `DELETE /api/amazon/unified/financial-event-groups/{financialEventGroup}/accounting-transactions` — Delete Accounting Transactions
- `DELETE /api/amazon/unified/settlement-mapping-groups/{settlementMappingGroup}` — Delete Mapping Group
- `DELETE /api/amazon/{integrationInstance}` — Delete Integration Instance
- `DELETE /api/amazon/{integrationInstance}/awd/ledgers` — Delete AWD Ledgers
- `DELETE /api/amazon/{integrationInstance}/draft-inbound-plans/items/{draft_inbound_plan_item}` — Remove Item from Draft Plan
- `DELETE /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}` — Delete Draft Inbound Plan
- `DELETE /api/amazon/{integrationInstance}/finances/settlement-mapping-groups/{settlementMappingGroup}` — Delete Mapping Group
- `DELETE /api/amazon/{integrationInstance}/orders/{order}` — Delete Order
- `DELETE /api/amazon/{integrationInstance}/outbound/{id}` — Delete Outbound Fulfillment
- `DELETE /api/amazon/{integrationInstance}/removal-orders/{orderId}/undo-all-receipts` — Undo All Receipts for Order
- `DELETE /api/amazon/{integrationInstance}/removal-orders/{removalOrderId}/clear-warehouse` — Clear Warehouse
- `DELETE /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/remove-receipt` — Remove Receipt
- `DELETE /api/big-commerce/{integrationInstance}` — Delete Integration Instance
- `DELETE /api/ebay/integration-instances/{integrationInstance}` — Delete Integration Instance
- `DELETE /api/ebay/{integrationInstance}/legacy-products/{product}` — Delete Legacy Product
- `DELETE /api/shopify/{integrationInstance}/orders/{order}` — Delete Single Order
- `DELETE /api/shopify/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order (Keep Shopify Order)
- `DELETE /api/shopify/{integrationInstance}/products/{product}/map` — Unmap Product
- `DELETE /api/shopify/{integrationInstance}/webhook-events/delete-all` — Delete All Events for Integration

### Sales Credits
- `DELETE /api/sales-credits/{salesCredit}/notes/{noteId}` — Delete Note
- `DELETE /api/sales-credits/{salesCredit}/payments/{payment}` — Delete Payment
- `DELETE /api/sales-credits/{sales_credit}` — Delete Sales Credit

### Sales Reps
- `DELETE /api/sales-reps/{sales_rep}` — Delete Sales Rep

### Shipping Providers
- `DELETE /api/3pl/tokens/{integrationInstance}` — Delete 3PL Integration Token
- `DELETE /api/shiphero/integration-instances/{integration_instance}` — Delete Integration Instance
- `DELETE /api/shipmyorders/integration-instances/{integration_instance}` — Delete Integration Instance
- `DELETE /api/shipmyorders/invoices/{id}` — Delete Invoice
- `DELETE /api/trackstar/integration-instances/{integration_instance}` — Delete Integration Instance
- `DELETE /api/trackstar/integration-instances/{integration_instance}/warehouse-mappings/{warehouse_mapping}` — Delete Warehouse Mapping

### Stock Takes
- `DELETE /api/stock-takes/{stock_take}` — Delete Stock Take

### Subscriptions
- `DELETE /api/subscription-offerings/{subscription_offering}` — Delete Subscription Offering
- `DELETE /api/subscription-offerings/{subscription_offering}/editions/{edition}` — Delete Edition for Offering

### Suppliers
- `DELETE /api/supplier-products/{supplier_product}` — Delete Supplier Product
- `DELETE /api/supplier-products/{supplier_product}/notes/{note}` — Delete Note
- `DELETE /api/suppliers/{supplier}` — Delete Supplier
- `DELETE /api/suppliers/{supplier}/pricing-tiers/{tierId}` — Delete Pricing Tier from Supplier

### UI Utilities
- `DELETE /api/data-tables/saved-views/{saved_view}` — Delete Saved View
- `DELETE /api/data-tables/saved-views/{saved_view}/unset-default` — Unset User Default
- `DELETE /api/table-views/{table_view}` — Delete Table View

_…plus 970 more (see the API reference)._

_Spec version 1.0.0 → 1.0.0._
