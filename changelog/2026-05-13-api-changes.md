---
title: API changes — 2026-05-13
description: This release includes 81 additions, 1 change, 3 removals. 3 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-05-13
---

This release includes 81 additions, 1 change, 3 removals. 3 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Purchase Order Shipments
- **Removed** `DELETE /api/purchase-order-shipments/receipts/{receipt}` — Delete Receipt
- **Removed** `PUT /api/purchase-order-shipments/receipts/{receipt}` — Update Receipt
- **Removed** `POST /api/purchase-order-shipments/receive` — Receive Shipment

## Added

### Applications
- `DELETE /api/vendor-deposit-applications/{applicationId}` — Unapply Application
- `POST /api/vendor-deposits/{vendorDepositId}/applications` — Apply To Purchase Invoices

### Attachments
- `GET /api/vendor-deposits/{vendorDepositId}/attachments` — List Attachments
- `POST /api/vendor-deposits/{vendorDepositId}/attachments` — Upload Attachment
- `DELETE /api/vendor-deposits/{vendorDepositId}/attachments/{attachmentId}` — Delete Attachment
- `GET /api/vendor-deposits/{vendorDepositId}/attachments/{attachmentId}` — Download Attachment

### Bulk Operations
- `POST /api/vendor-deposits/bulk-archive` — Bulk Archive
- `POST /api/vendor-deposits/bulk-delete` — Bulk Delete
- `POST /api/vendor-deposits/bulk-unarchive` — Bulk Unarchive

### Customers
- `GET /api/woo-commerce/1/customers` — List Customers
- `POST /api/woo-commerce/1/customers/sync` — Sync Customers

### Dashboard
- `GET /api/big-commerce/dashboard` — Get BigCommerce Dashboard Metrics
- `GET /api/ebay/dashboard` — Get eBay Dashboard Metrics
- `GET /api/walmart/dashboard` — Get Walmart Dashboard Metrics
- `GET /api/woo-commerce/dashboard` — Get WooCommerce Dashboard Metrics

### Inbound Webhooks (BigCommerce -> SKU.io)
- `POST /api/webhooks/bc-webhook/1/order-created` — Order Created Webhook
- `POST /api/webhooks/bc-webhook/1/order-updated` — Order Updated Webhook
- `POST /api/webhooks/bc-webhook/1/product-created` — Product Created Webhook
- `POST /api/webhooks/bc-webhook/1/product-updated` — Product Updated Webhook
- `POST /api/webhooks/bc-webhook/1/shipment-created` — Shipment Created Webhook
- `POST /api/webhooks/bc-webhook/1/shipment-updated` — Shipment Updated Webhook

### Inbound Webhooks (WooCommerce -> SKU.io)
- `POST /api/webhooks/wc-webhook/1/order.created` — Order Created Webhook
- `POST /api/webhooks/wc-webhook/1/order.deleted` — Order Deleted Webhook
- `POST /api/webhooks/wc-webhook/1/order.updated` — Order Updated Webhook
- `POST /api/webhooks/wc-webhook/1/product.created` — Product Created Webhook
- `POST /api/webhooks/wc-webhook/1/product.deleted` — Product Deleted Webhook
- `POST /api/webhooks/wc-webhook/1/product.updated` — Product Updated Webhook

### Inventory
- `DELETE /api/inventory-forecasting/configurations/default` — Clear My Default Configuration
- `GET /api/inventory-forecasting/configurations/default` — Show My Default Configuration
- `POST /api/inventory-forecasting/configurations/{configuration}/set-default` — Set as My Default Configuration

### Payments & Refunds
- `POST /api/vendor-deposits/{vendorDepositId}/payments` — Record Payment
- `POST /api/vendor-deposits/{vendorDepositId}/refunds` — Refund Deposit

### Products
- `GET /api/v2/products/list/export/download` — Download Export File

### Purchase Order Shipments
- `DELETE /api/inbound-shipments/receipts/{receipt}` — Delete Receipt
- `PUT /api/inbound-shipments/receipts/{receipt}` — Update Receipt
- `POST /api/inbound-shipments/receive` — Receive Shipment

### Refunds
- `GET /api/woo-commerce/1/refunds` — List Refunds
- `POST /api/woo-commerce/1/refunds/refresh` — Refresh Refunds

### Reporting
- `GET /api/vendor-deposits/aging-report` — Aging Report
- `GET /api/vendor-deposits/summary-stats` — Summary Stats
- `GET /api/vendor-deposits/supplier-statement/{supplierId}` — Supplier Statement
- `GET /api/vendor-deposits/{vendorDepositId}/activity-log` — Activity Log

### Reports
- `GET /api/woo-commerce/1/reports` — Get Cached Reports
- `POST /api/woo-commerce/1/reports/refresh` — Refresh Reports

### Returns
- `GET /api/walmart/1/returns` — List Returns

### Sales Order OCR
- `POST /api/sales-orders/ocr/{extraction_id}/rescan` — Rescan Customer PO OCR

### Transactions
- `GET /api/big-commerce/1/transactions` — List Transactions
- `POST /api/big-commerce/1/transactions/refresh` — Refresh Transactions

### Vendor Deposits
- `GET /api/vendor-deposits` — List Vendor Deposits
- `POST /api/vendor-deposits` — Create Vendor Deposit
- `DELETE /api/vendor-deposits/{vendorDepositId}` — Delete Vendor Deposit
- `GET /api/vendor-deposits/{vendorDepositId}` — Show Vendor Deposit
- `PUT /api/vendor-deposits/{vendorDepositId}` — Update Vendor Deposit
- `POST /api/vendor-deposits/{vendorDepositId}/approve` — Approve Deposit
- `POST /api/vendor-deposits/{vendorDepositId}/approve-only` — Approve Only
- `POST /api/vendor-deposits/{vendorDepositId}/cancel` — Cancel Deposit
- `POST /api/vendor-deposits/{vendorDepositId}/duplicate` — Duplicate Deposit
- `POST /api/vendor-deposits/{vendorDepositId}/reject` — Reject Deposit
- `POST /api/vendor-deposits/{vendorDepositId}/submit-for-approval` — Submit For Approval
- `POST /api/vendor-deposits/{vendorDepositId}/write-off` — Write Off Deposit

### Webhook Configuration
- `GET /api/big-commerce/1/webhooks` — Get Webhook Configurations
- `POST /api/big-commerce/1/webhooks/create-all` — Create All Webhooks
- `POST /api/big-commerce/1/webhooks/disable` — Disable Webhook
- `POST /api/big-commerce/1/webhooks/enable` — Enable Webhook
- `GET /api/woo-commerce/1/webhooks/configurations` — Get Webhook Configurations
- `POST /api/woo-commerce/1/webhooks/configurations/order---created/disable` — Disable Webhook
- `POST /api/woo-commerce/1/webhooks/configurations/order---created/enable` — Enable Webhook

### Webhook Events
- `GET /api/big-commerce/1/webhook-events` — List Webhook Events
- `DELETE /api/big-commerce/1/webhook-events/delete-all` — Delete All Webhook Events
- `POST /api/big-commerce/1/webhook-events/process` — Process Pending Webhook Events
- `POST /api/big-commerce/1/webhook-events/retry-failed` — Retry Failed Webhook Events
- `GET /api/big-commerce/1/webhook-events/stats` — Get Webhook Processing Stats
- `GET /api/woo-commerce/1/webhook-events` — List Webhook Events
- `GET /api/woo-commerce/1/webhook-events/42` — Get Webhook Event Details
- `POST /api/woo-commerce/1/webhook-events/42/reprocess` — Reprocess Webhook Event by ID
- `DELETE /api/woo-commerce/1/webhook-events/bulk-delete` — Bulk Delete Webhook Events
- `POST /api/woo-commerce/1/webhook-events/bulk-reprocess` — Bulk Reprocess Webhook Events
- `DELETE /api/woo-commerce/1/webhook-events/delete-all` — Delete All Webhook Events
- `POST /api/woo-commerce/1/webhook-events/process` — Process Pending Webhook Events
- `POST /api/woo-commerce/1/webhook-events/retry-failed` — Retry Failed Webhook Events
- `GET /api/woo-commerce/1/webhook-events/stats` — Get Webhook Processing Stats

## Changed

### Inventory Intelligence
- `POST /api/inventory-forecasting/schedule-runs/{runId}/rerun` — Re-run from Run
  - new parameter(s): `Content-Type`

_Spec version 1.0.0 → 1.0.0._
