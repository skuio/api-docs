---
title: API changes — 2026-10-20
description: This release includes 116 additions, 8 changes, 35 removals. 37 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-10-20
---

This release includes 116 additions, 8 changes, 35 removals. 37 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### 17TRACK
- **Removed** `POST /api/integrations/17track/instances/{instance_id}/push-pending` — Push Pending Tracking Numbers to 17TRACK
- **Removed** `POST /api/integrations/17track/instances/{instance_id}/refresh` — Pull Tracking Updates from 17TRACK
- **Removed** `POST /register` — Register Tracking Numbers

#### BigCommerce
- **Removed** `GET /api/big-commerce/{id}/transactions` — List Transactions
- **Removed** `POST /api/big-commerce/{id}/transactions/refresh` — Refresh Transactions
- **Removed** `GET /api/big-commerce/{id}/webhook-events` — List Webhook Events
- **Removed** `DELETE /api/big-commerce/{id}/webhook-events/delete-all` — Delete All Webhook Events
- **Removed** `POST /api/big-commerce/{id}/webhook-events/process` — Process Pending Webhook Events
- **Removed** `POST /api/big-commerce/{id}/webhook-events/retry-failed` — Retry Failed Webhook Events
- **Removed** `GET /api/big-commerce/{id}/webhook-events/stats` — Get Webhook Processing Stats
- **Removed** `GET /api/big-commerce/{id}/webhooks` — Get Webhook Configurations
- **Removed** `POST /api/big-commerce/{id}/webhooks/create-all` — Create All Webhooks
- **Removed** `POST /api/big-commerce/{id}/webhooks/disable` — Disable Webhook
- **Removed** `POST /api/big-commerce/{id}/webhooks/enable` — Enable Webhook
- **Removed** `POST /api/webhooks/bc-webhook/{id}/order-created` — Order Created Webhook
- **Removed** `POST /api/webhooks/bc-webhook/{id}/order-updated` — Order Updated Webhook
- **Removed** `POST /api/webhooks/bc-webhook/{id}/product-created` — Product Created Webhook
- **Removed** `POST /api/webhooks/bc-webhook/{id}/product-updated` — Product Updated Webhook
- **Removed** `POST /api/webhooks/bc-webhook/{id}/shipment-created` — Shipment Created Webhook
- **Removed** `POST /api/webhooks/bc-webhook/{id}/shipment-updated` — Shipment Updated Webhook

#### Custom Report Builder
- **Removed** `DELETE /api/v2/custom-reports/{id}` — Delete Custom Report
- **Removed** `GET /api/v2/custom-reports/{id}` — Get Custom Report
- **Removed** `PUT /api/v2/custom-reports/{id}` — Update Custom Report
- **Removed** `POST /api/v2/custom-reports/{id}/duplicate` — Duplicate Custom Report
- **Removed** `POST /api/v2/custom-reports/{id}/export` — Export Custom Report
- **Removed** `POST /api/v2/custom-reports/{id}/run` — Run Saved Report
- **Removed** `GET /api/v2/custom-reports/{id}/schedules` — List Schedules
- **Removed** `POST /api/v2/custom-reports/{id}/schedules` — Create Schedule
- **Removed** `DELETE /api/v2/custom-reports/{id}/schedules/{id2}` — Delete Schedule
- **Removed** `PUT /api/v2/custom-reports/{id}/schedules/{id2}` — Update Schedule
- **Removed** `GET /api/v2/custom-reports/{id}/shares` — List Shares
- **Removed** `POST /api/v2/custom-reports/{id}/shares` — Add Share
- **Removed** `DELETE /api/v2/custom-reports/{id}/shares/{id2}` — Remove Share
- **Removed** `POST /api/v2/custom-reports/{id}/toggle-favorite` — Toggle Favorite
- **Removed** `GET /api/v2/report-builder/field-values/sales_orders/order_status` — Get Distinct Field Values (Autocomplete)

### Incompatible changes

#### Custom Report Builder
- **Changed** `GET /api/v2/custom-reports` — List Custom Reports
  - removed parameter(s): `page`, `per_page`
- **Changed** `GET /api/v2/report-builder/users` — Search Share Recipients
  - removed parameter(s): `search`

## Added

### 17TRACK
- `POST /api/integrations/17track/instances/{instance}/push-pending` — Push Pending Tracking Numbers to 17TRACK
- `POST /api/integrations/17track/instances/{instance}/refresh` — Pull Tracking Updates from 17TRACK

### BigCommerce
- `GET /api/big-commerce/{integrationInstance}/transactions` — List BigCommerce Transactions
- `POST /api/big-commerce/{integrationInstance}/transactions/refresh` — Refresh BigCommerce Transactions
- `GET /api/big-commerce/{integrationInstance}/webhook-events` — List BigCommerce Webhook Events
- `DELETE /api/big-commerce/{integrationInstance}/webhook-events/delete-all` — Delete All BigCommerce Webhook Events
- `POST /api/big-commerce/{integrationInstance}/webhook-events/process` — Process Pending BigCommerce Webhook Events
- `POST /api/big-commerce/{integrationInstance}/webhook-events/retry-failed` — Retry Failed BigCommerce Webhook Events
- `GET /api/big-commerce/{integrationInstance}/webhook-events/stats` — Get BigCommerce Webhook Event Stats
- `GET /api/big-commerce/{integrationInstance}/webhooks` — List BigCommerce Webhook Configurations
- `POST /api/big-commerce/{integrationInstance}/webhooks/create-all` — Create All BigCommerce Webhooks
- `POST /api/big-commerce/{integrationInstance}/webhooks/disable` — Disable BigCommerce Webhook
- `POST /api/big-commerce/{integrationInstance}/webhooks/enable` — Enable BigCommerce Webhook
- `POST /api/webhooks/bc-webhook/{integration_instance}/order-created` — Receive Order Created Webhook
- `POST /api/webhooks/bc-webhook/{integration_instance}/order-updated` — Receive Order Updated Webhook
- `POST /api/webhooks/bc-webhook/{integration_instance}/product-created` — Receive Product Created Webhook
- `POST /api/webhooks/bc-webhook/{integration_instance}/product-updated` — Receive Product Updated Webhook
- `POST /api/webhooks/bc-webhook/{integration_instance}/shipment-created` — Receive Shipment Created Webhook
- `POST /api/webhooks/bc-webhook/{integration_instance}/shipment-updated` — Receive Shipment Updated Webhook

### Custom Report Builder
- `DELETE /api/v2/custom-reports/{customReport}` — Delete Custom Report
- `GET /api/v2/custom-reports/{customReport}` — Get Custom Report
- `POST /api/v2/custom-reports/{customReport}/duplicate` — Duplicate Custom Report
- `POST /api/v2/custom-reports/{customReport}/export` — Export Custom Report
- `POST /api/v2/custom-reports/{customReport}/run` — Run Custom Report
- `GET /api/v2/custom-reports/{customReport}/schedules` — List Report Schedules
- `POST /api/v2/custom-reports/{customReport}/schedules` — Create Report Schedule
- `DELETE /api/v2/custom-reports/{customReport}/schedules/{schedule}` — Delete Report Schedule
- `GET /api/v2/custom-reports/{customReport}/shares` — List Custom Report Shares
- `POST /api/v2/custom-reports/{customReport}/shares` — Share Custom Report
- `DELETE /api/v2/custom-reports/{customReport}/shares/{userId}` — Remove Custom Report Share
- `POST /api/v2/custom-reports/{customReport}/toggle-favorite` — Toggle Custom Report Favorite
- `GET /api/v2/custom-reports/{customReport}/versions` — List Report Versions
- `GET /api/v2/custom-reports/{customReport}/versions/{version}` — Get Report Version
- `POST /api/v2/custom-reports/{customReport}/versions/{version}/restore` — Restore Report Version
- `POST /api/v2/report-builder/ai-build` — Build Report Definition With AI
- `POST /api/v2/report-builder/export` — Export Ad-Hoc Report
- `GET /api/v2/report-builder/field-values/{entity}/{field}` — List Distinct Field Values

### Odoo 3PL
- `POST /api/odoo-3pl` — Create Odoo 3PL Integration Instance
- `POST /api/odoo-3pl/test-connection` — Test Odoo 3PL Connection (Unsaved Credentials)
- `DELETE /api/odoo-3pl/{integration_instance}` — Delete Odoo 3PL Integration Instance
- `GET /api/odoo-3pl/{integration_instance}` — Get Odoo 3PL Integration Instance
- `GET /api/odoo-3pl/{integration_instance}/activity-log` — List Odoo 3PL Activity Log
- `GET /api/odoo-3pl/{integration_instance}/dashboard` — Get Odoo 3PL Dashboard Metrics
- `POST /api/odoo-3pl/{integration_instance}/inventory/sync` — Sync Odoo 3PL Inventory
- `GET /api/odoo-3pl/{integration_instance}/locations` — List Odoo 3PL Locations
- `POST /api/odoo-3pl/{integration_instance}/locations/sync` — Sync Odoo 3PL Locations
- `GET /api/odoo-3pl/{integration_instance}/orders` — List Odoo 3PL Orders
- `POST /api/odoo-3pl/{integration_instance}/orders/sync` — Sync Odoo 3PL Orders
- `GET /api/odoo-3pl/{integration_instance}/orders/{orderId}` — Get Odoo 3PL Order
- `GET /api/odoo-3pl/{integration_instance}/orders/{orderId}/raw` — Get Raw Odoo 3PL Order Data
- `DELETE /api/odoo-3pl/{integration_instance}/products` — Delete Odoo 3PL Products
- `GET /api/odoo-3pl/{integration_instance}/products` — List Odoo 3PL Products
- `POST /api/odoo-3pl/{integration_instance}/products/push` — Push Products to Odoo 3PL
- `GET /api/odoo-3pl/{integration_instance}/products/pushable` — List Pushable SKU.io Products
- `POST /api/odoo-3pl/{integration_instance}/products/sync` — Sync Odoo 3PL Products
- `GET /api/odoo-3pl/{integration_instance}/products/{productId}` — Get Odoo 3PL Product
- `GET /api/odoo-3pl/{integration_instance}/products/{productId}/raw` — Get Raw Odoo 3PL Product Data
- `POST /api/odoo-3pl/{integration_instance}/products/{skuProductId}/push` — Push Product to Odoo 3PL
- `GET /api/odoo-3pl/{integration_instance}/receipts` — List Odoo 3PL Receipts
- `POST /api/odoo-3pl/{integration_instance}/receipts/sync` — Sync Odoo 3PL Receipts
- `GET /api/odoo-3pl/{integration_instance}/receipts/{receiptId}` — Get Odoo 3PL Receipt
- `GET /api/odoo-3pl/{integration_instance}/shipments` — List Odoo 3PL Shipments
- `POST /api/odoo-3pl/{integration_instance}/shipments/sync` — Sync Odoo 3PL Shipments
- `GET /api/odoo-3pl/{integration_instance}/shipments/{shipmentId}` — Get Odoo 3PL Shipment
- `GET /api/odoo-3pl/{integration_instance}/shipments/{shipmentId}/raw` — Get Raw Odoo 3PL Shipment Data
- `POST /api/odoo-3pl/{integration_instance}/test-connection` — Test Odoo 3PL Connection

### PayPal
- `POST /api/paypal/integrations` — Create PayPal Integration
- `POST /api/paypal/integrations/{id}/authorize` — Start PayPal Authorization
- `POST /api/paypal/integrations/{id}/disconnect` — Disconnect PayPal Integration
- `POST /api/paypal/integrations/{id}/status` — Refresh PayPal Integration Status
- `GET /api/paypal/oauth/callback` — Complete PayPal Authorization (OAuth Callback)
- `GET /api/paypal/webhook-events` — List PayPal Webhook Events
- `GET /api/paypal/webhook-events/{id}` — Get PayPal Webhook Event
- `POST /api/paypal/webhook-events/{id}/replay` — Replay PayPal Webhook Event
- `GET /api/public/paypal/pay/{token}` — Get Public Pay Page
- `POST /api/public/paypal/pay/{token}/capture` — Capture Public Pay Page Payment
- `POST /api/public/paypal/pay/{token}/checkout` — Create Public Pay Page Checkout

### QuickBooks Online
- `GET /qbo/callback` — Complete QuickBooks Online Authorization (OAuth Callback)

### Sales Orders
- `POST /api/v2/sales-orders/{salesOrder}/channel-mappings/replace` — Replace Channel-Linked Sales Order Lines

### ShipMyOrders
- `DELETE /api/shipmyorders/integration-instances/{integration_instance}` — Delete ShipMyOrders Integration Instance
- `GET /api/shipmyorders/integration-instances/{integration_instance}` — Get ShipMyOrders Integration Instance
- `GET /api/shipmyorders/inventory/discrepancies` — List ShipMyOrders Inventory Discrepancies
- `GET /api/shipmyorders/inventory/without-sku-products` — List ShipMyOrders Products Missing in SKU.io
- `GET /api/shipmyorders/inventory/without-smo-inventory` — List SKU.io Products Missing in ShipMyOrders
- `DELETE /api/shipmyorders/invoices` — Bulk Delete ShipMyOrders Invoices
- `POST /api/shipmyorders/invoices` — Import ShipMyOrders Invoice
- `POST /api/shipmyorders/invoices/deletable` — Check ShipMyOrders Invoices Deletable
- `GET /api/shipmyorders/invoices/mapping-rules` — List ShipMyOrders Invoice Nominal Code Mapping Rules
- `POST /api/shipmyorders/invoices/mapping-rules` — Save ShipMyOrders Invoice Nominal Code Mapping Rules
- `POST /api/shipmyorders/invoices/process` — Bulk Process ShipMyOrders Invoices
- `POST /api/shipmyorders/invoices/process-all` — Process All ShipMyOrders Invoices
- `POST /api/shipmyorders/invoices/unprocess` — Bulk Unprocess ShipMyOrders Invoices
- `POST /api/shipmyorders/invoices/unprocess-all` — Unprocess All ShipMyOrders Invoices
- `DELETE /api/shipmyorders/invoices/{invoice}` — Delete ShipMyOrders Invoice
- `GET /api/shipmyorders/invoices/{invoice}` — Get ShipMyOrders Invoice
- `POST /api/shipmyorders/invoices/{invoice}/process` — Process ShipMyOrders Invoice
- `POST /api/shipmyorders/invoices/{invoice}/unprocess` — Unprocess ShipMyOrders Invoice
- `GET /api/shipmyorders/v2/invoices` — List ShipMyOrders Invoices

### Temu
- `GET /integrations/temu/callback` — Complete Temu Authorization (OAuth Callback)

### Xero
- `GET /xero/auth/callback` — Complete Xero Authorization (OAuth Callback)

_…plus 16 more (see the API reference)._

## Changed

### 17TRACK
- `POST /api/shipment-trackings/register` — Register Shipment Tracking
  - new response code(s): `404`
- `POST /api/shipment-trackings/register-parcels` — Register Parcel Trackings (Multi-Parcel)
  - new response code(s): `404`
- `POST /webhooks/seventeentrack/{webhook_token}` — 17TRACK Webhook (TRACKING_UPDATED)
  - new parameter(s): `sign`
  - new response code(s): `401`

### Purchase Orders
- `POST /api/purchase-orders/{purchase_order}/dropship` — Dropship (Ship Fulfillment)
  - new response code(s): `400`

### Sales Channels
- `PUT /api/channel/orders/{id}` — Update Order
  - new response code(s): `400`

### Stock Takes
- `POST /api/stock-takes/{stockTake}/initiate` — Initiate Count
  - new response code(s): `400`

_Spec version 1.0.0 → 1.0.0._
