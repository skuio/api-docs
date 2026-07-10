---
title: API changes — 2026-05-25
description: This release includes 310 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-05-25
---

This release includes 310 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Configuration
- `DELETE //{domain}/api/financial-line-types` — Bulk Delete Financial Line Types
- `GET //{domain}/api/financial-line-types` — List Financial Line Types
- `DELETE //{domain}/api/financial-line-types/{financial_line_type}` — Delete Financial Line Type
- `GET //{domain}/api/financial-line-types/{financial_line_type}` — Show Financial Line Type
- `DELETE //{domain}/api/payment-terms` — Bulk Delete Payment Terms
- `GET //{domain}/api/payment-terms` — List Payment Terms
- `GET //{domain}/api/payment-terms/1` — Show Payment Term
- `DELETE //{domain}/api/payment-terms/3` — Delete Payment Term

### Custom Report Schedules
- `DELETE /api/v2/custom-reports/1/schedules/1` — Delete Schedule

### Custom Report Shares
- `DELETE /api/v2/custom-reports/1/shares/2` — Remove Share

### Custom Reports (CRUD)
- `DELETE /api/v2/custom-reports/1` — Delete Custom Report

### Jobs & Logs
- `GET //{domain}/api/tracked-job-logs` — List Tracked Job Logs
- `GET //{domain}/api/tracked-job-logs/retry/{trackedJobLog}` — Retry Job
- `DELETE //{domain}/api/tracked-job-logs/{tracked_job_log}` — Delete Tracked Job Log
- `GET //{domain}/api/tracked-job-logs/{tracked_job_log}` — Show Tracked Job Log

### Payments
- `GET /api/stripe/integrations/{id}` — Show Integration Instance
- `GET /api/stripe/integrations/{id}/invoices` — List Invoices by Instance
- `GET /api/stripe/sales-orders/{salesOrderId}/invoices` — List Invoices for Sales Order
- `GET /api/stripe/webhook-events` — List Webhook Events
- `GET /api/stripe/webhook-events/{id}` — Show Webhook Event

### Purchase Orders
- `GET //{domain}/api/purchase-orders/{purchase_order}/shipment-line-options` — Get PO Lines for Shipment Picker
- `GET /api/purchase-orders/{purchase_order}/lines-for-receiving` — Get PO Lines for Receiving
- `GET /api/purchase-orders/{purchase_order}/shipment-line-options` — Get PO Lines for Shipment Picker

### Queue Admin
- `DELETE /api/v2/queue-admin/paused-classes/{pausedClass}` — Unpause Class

### Sales Channels
- `DELETE //{domain}/api/shopify/webhook-events/bulk-delete` — Bulk Delete Events
- `GET //{domain}/api/shopify/webhook-events/{eventId}` — Get Webhook Event Details
- `GET //{domain}/api/shopify/{integrationInstance}/fulfillments` — List Shopify Fulfillments
- `GET //{domain}/api/shopify/{integrationInstance}/fulfillments/mismatches` — List Fulfillment Mismatches
- `GET //{domain}/api/shopify/{integrationInstance}/fulfillments/pending` — List Pending Fulfillments
- `GET //{domain}/api/shopify/{integrationInstance}/fulfillments/stats` — Get Fulfillment Stats
- `GET //{domain}/api/shopify/{integrationInstance}/inventory` — List Inventory Comparison
- `GET //{domain}/api/shopify/{integrationInstance}/inventory/fetch-live-progress/{trackedJobLogId}` — Get Fetch Live Progress
- `GET //{domain}/api/shopify/{integrationInstance}/inventory/locations` — Get Inventory Locations
- `GET //{domain}/api/shopify/{integrationInstance}/inventory/recache-progress/{trackedJobLogId}` — Get Recache Progress
- `GET //{domain}/api/shopify/{integrationInstance}/inventory/summary` — Get Inventory Summary
- `GET //{domain}/api/shopify/{integrationInstance}/inventory/sync-progress/{trackedJobLogId}` — Get Sync Progress
- `GET //{domain}/api/shopify/{integrationInstance}/orders` — List Orders
- `GET //{domain}/api/shopify/{integrationInstance}/orders/delivery-date-preview` — Delivery Date Preview
- `GET //{domain}/api/shopify/{integrationInstance}/orders/filter-options` — Get Filter Options
- `GET //{domain}/api/shopify/{integrationInstance}/orders/latest-sync-info` — Get Latest Sync Info
- `GET //{domain}/api/shopify/{integrationInstance}/orders/metafield-keys` — Get Metafield Keys
- `GET //{domain}/api/shopify/{integrationInstance}/orders/note-attribute-names` — Get Note Attribute Names
- `GET //{domain}/api/shopify/{integrationInstance}/orders/refresh-progress/{trackedJobLogId}` — Get Refresh Progress
- `DELETE //{domain}/api/shopify/{integrationInstance}/orders/{order}` — Delete Single Order
- `GET //{domain}/api/shopify/{integrationInstance}/orders/{order}/detailed` — Get Order Detail
- `GET //{domain}/api/shopify/{integrationInstance}/orders/{order}/fulfillments` — Get Order Fulfillments
- `GET //{domain}/api/shopify/{integrationInstance}/orders/{order}/line-items` — Get Order Line Items
- `GET //{domain}/api/shopify/{integrationInstance}/orders/{order}/raw` — Get Raw Order (REST)
- `GET //{domain}/api/shopify/{integrationInstance}/orders/{order}/raw-graphql` — Get Raw Order (GraphQL)
- `GET //{domain}/api/shopify/{integrationInstance}/orders/{order}/refunds` — Get Order Refunds
- `GET //{domain}/api/shopify/{integrationInstance}/orders/{order}/shipping-lines` — Get Order Shipping Lines
- `DELETE //{domain}/api/shopify/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order (Keep Shopify Order)
- `GET //{domain}/api/shopify/{integrationInstance}/orders/{order}/transactions` — Get Order Transactions
- `GET //{domain}/api/shopify/{integrationInstance}/products` — List Products
- `GET //{domain}/api/shopify/{integrationInstance}/products/bulk-progress/{trackedJobLogId}` — Get Bulk Progress
- `GET //{domain}/api/shopify/{integrationInstance}/products/filter-options` — Get Filter Options
- `GET //{domain}/api/shopify/{integrationInstance}/products/latest-sync-info` — Get Latest Sync Info
- `GET //{domain}/api/shopify/{integrationInstance}/products/refresh-progress/{trackedJobLogId}` — Get Refresh Progress
- `DELETE //{domain}/api/shopify/{integrationInstance}/products/{product}/map` — Unmap Product
- `GET //{domain}/api/shopify/{integrationInstance}/products/{product}/orders` — Get Orders for Product
- `GET //{domain}/api/shopify/{integrationInstance}/products/{product}/raw` — Get Raw Product from Shopify
- `GET //{domain}/api/shopify/{integrationInstance}/webhook-events` — List Webhook Events
- `DELETE //{domain}/api/shopify/{integrationInstance}/webhook-events/delete-all` — Delete All Events for Integration
- `GET //{domain}/api/shopify/{integrationInstance}/webhook-events/stats` — Get Processing Stats
- `GET /api/amazon/{integrationInstance}/removal-orders/order-details` — Get Order Details (by Query)
- `GET /api/shopify/{integrationInstance}/access-scopes` — List Access Scopes
- `GET /api/shopify/{integrationInstance}/shop-plan` — Get Shop Plan
- `GET /api/tiktok-shop/config` — Get Config
- `GET /api/tiktok-shop/integration-instances` — List Integration Instances
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}` — Disconnect Integration Instance
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}` — Get Integration Instance
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/fulfillments/pending` — List Pending Fulfillments
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/fulfillments/stats` — Fulfillment Sync Stats
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/locations` — List TikTok Warehouses
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/mappings` — Get Field Mappings
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/filter-options` — Get Filter Options
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}` — Delete Order
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}/sku-order` — Delete Linked SKU Order
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/payment-method-mappings` — Delete Payment Method Mapping
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}` — Delete Product
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}/map` — Unmap Product SKU
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/shipping-method-mappings/{skuShippingMethodId}` — Delete Shipping Method Mapping
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/warehouse-mappings/{tiktokShopWarehouseId}` — Delete Warehouse Mapping
- `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}` — Delete Integration Instance
- `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/payment-method-mappings` — Delete Payment Method Mapping
- `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/shipping-method-mappings/{skuShippingMethodId}` — Delete Shipping Method Mapping
- `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/warehouse-mappings/{tiktokShopWarehouseId}` — Delete Warehouse Mapping
- `DELETE /api/tiktok-shop/webhook-events` — Delete All Webhook Events
- `DELETE /api/tiktok-shop/webhook-events/{tikTokShopWebhookEvent}` — Delete Webhook Event

### Tags
- `DELETE //{domain}/api/tags` — Bulk Delete Tags
- `GET //{domain}/api/tags` — List Tags
- `GET //{domain}/api/tags/1` — Show Tag
- `DELETE //{domain}/api/tags/5` — Delete Tag

### UI Utilities
- `GET //{domain}/api/table-views` — List Table Views
- `DELETE //{domain}/api/table-views/{table_view}` — Delete Table View
- `GET //{domain}/api/table-views/{table_view}` — Get Table View

### Users
- `GET //{domain}/api/users` — List Users (DataTable)
- `GET //{domain}/api/users/list` — Get User Lookup List
- `DELETE //{domain}/api/users/{user}` — Delete (Deactivate) / Restore User
- `GET //{domain}/api/users/{user}` — Show User

_…plus 210 more (see the API reference)._

## Changed

### Purchase Order Shipments
- `POST /api/inbound-shipments/receive` — Receive Shipment
  - new response code(s): `202`, `409`

_Spec version 1.0.0 → 1.0.0._
