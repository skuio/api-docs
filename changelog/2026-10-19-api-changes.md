---
title: API changes — 2026-10-19
description: This release includes 62 additions, 3 changes, 22 removals. 22 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-10-19
---

This release includes 62 additions, 3 changes, 22 removals. 22 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### eBay
- **Removed** `GET /api/ebay/integration-instances` — List Integration Instances
- **Removed** `PUT /api/ebay/{integrationInstance}/legacy-products/archive` — Archive Legacy Products
- **Removed** `POST /api/ebay/{integrationInstance}/legacy-products/archiveable` — Check Archiveable Products
- **Removed** `POST /api/ebay/{integrationInstance}/legacy-products/create-sku-products` — Create SKU Products from Listings
- **Removed** `PUT /api/ebay/{integrationInstance}/legacy-products/delete` — Delete Legacy Products (Bulk)
- **Removed** `PUT /api/ebay/{integrationInstance}/legacy-products/deleteable` — Check Deleteable Products
- **Removed** `POST /api/ebay/{integrationInstance}/legacy-products/hydrate-product-template` — Hydrate Product Template
- **Removed** `POST /api/ebay/{integrationInstance}/legacy-products/import-mappings` — Import Mappings
- **Removed** `PUT /api/ebay/{integrationInstance}/legacy-products/map` — Map Products
- **Removed** `POST /api/ebay/{integrationInstance}/legacy-products/refresh` — Refresh Legacy Products
- **Removed** `POST /api/ebay/{integrationInstance}/legacy-products/sync-inventory` — Sync Inventory
- **Removed** `PUT /api/ebay/{integrationInstance}/legacy-products/unarchive` — Unarchive Legacy Products
- **Removed** `GET /api/ebay/{integrationInstance}/legacy-products/{product}` — Show Legacy Product

#### WooCommerce
- **Removed** `DELETE /api/woo-commerce/{integration_instance}` — Delete Integration Instance
- **Removed** `GET /api/woo-commerce/{integration_instance}` — Show Integration Instance
- **Removed** `PATCH /api/woo-commerce/{integration_instance}` — Update WooCommerce Integration
- **Removed** `PUT /api/woo-commerce/{integration_instance}` — Update Integration Instance
- **Removed** `DELETE /api/woo-commerce/{integration_instance}/orders/{order}` — Delete Order
- **Removed** `PUT /api/woo-commerce/{integration_instance}/orders/{order}` — Update Order
- **Removed** `POST /api/woo-commerce/{integration_instance}/products/refresh-tracked` — Refresh Products (Tracked)
- **Removed** `DELETE /api/woo-commerce/{integration_instance}/products/{product}` — Delete Product
- **Removed** `PUT /api/woo-commerce/{integration_instance}/products/{product}` — Update Product

## Added

### Adjustments & Transfers
- `GET /api/warehouses/transfers/{transfer}` — Get Warehouse Transfer

### Billing & Invoices
- `GET /api/portal/invoices/by-order/{salesOrder}` — List Invoices for Sales Order

### Fulfillments
- `GET /api/v2/sales-order-fulfillments/export/download` — Download Fulfillments Export

### PayPal
- `POST /api/sales-invoices/{salesInvoiceId}/paypal-payment-links` — Create PayPal Pay Link for Sales Invoice

### Sales Channel Product Templates
- `GET /api/sales-channel-product-templates` — List Sales Channel Product Templates

### Sales Credits
- `POST /api/sales-credits/{salesCredit}/reconcile-invoice-application` — Reconcile Sales Credit Invoice Application

### Sales Invoices
- `GET /api/export/sales-invoices/{salesInvoice}/pdf` — Download Sales Invoice PDF
- `GET /api/reports/ar-aging` — Get AR Aging Report
- `DELETE /api/sales-invoice-allocations/{salesInvoiceAllocation}` — Delete Sales Invoice Payment Allocation
- `GET /api/sales-invoices` — List Sales Invoices
- `POST /api/sales-invoices` — Create Sales Invoice
- `POST /api/sales-invoices/bulk/archive` — Bulk Archive Sales Invoices
- `POST /api/sales-invoices/bulk/email` — Bulk Email Sales Invoices
- `POST /api/sales-invoices/bulk/issue` — Bulk Issue Sales Invoices
- `POST /api/sales-invoices/bulk/pdf` — Bulk Download Sales Invoice PDFs
- `POST /api/sales-invoices/bulk/unarchive` — Bulk Unarchive Sales Invoices
- `POST /api/sales-invoices/bulk/void` — Bulk Void Sales Invoices
- `GET /api/sales-invoices/export` — Export Sales Invoices
- `GET /api/sales-invoices/export/download` — Download Sales Invoice Export
- `POST /api/sales-invoices/preview-totals` — Preview Sales Invoice Totals
- `GET /api/sales-invoices/summary` — Get Sales Invoice Summary
- `GET /api/sales-invoices/uninvoiced-shipments` — List Uninvoiced Shipments
- `DELETE /api/sales-invoices/{salesInvoice}` — Delete Sales Invoice
- `GET /api/sales-invoices/{salesInvoice}` — Get Sales Invoice
- `PUT /api/sales-invoices/{salesInvoice}` — Update Sales Invoice
- `GET /api/sales-invoices/{salesInvoice}/activity-log` — Get Sales Invoice Activity Log
- `POST /api/sales-invoices/{salesInvoice}/allocations` — Allocate Payment to Sales Invoice
- `POST /api/sales-invoices/{salesInvoice}/credit-notes` — Create Credit Note for Sales Invoice
- `GET /api/sales-invoices/{salesInvoice}/documents` — List Sales Invoice Documents
- `POST /api/sales-invoices/{salesInvoice}/documents` — Upload Sales Invoice Document
- `DELETE /api/sales-invoices/{salesInvoice}/documents/{document}` — Delete Sales Invoice Document
- `PATCH /api/sales-invoices/{salesInvoice}/documents/{document}` — Update Sales Invoice Document Description
- `GET /api/sales-invoices/{salesInvoice}/documents/{document}/file` — Download Sales Invoice Document File
- `POST /api/sales-invoices/{salesInvoice}/email` — Email Sales Invoice
- `POST /api/sales-invoices/{salesInvoice}/issue` — Issue Sales Invoice
- `GET /api/sales-invoices/{salesInvoice}/notes` — List Sales Invoice Notes
- `POST /api/sales-invoices/{salesInvoice}/notes` — Create Sales Invoice Note
- `DELETE /api/sales-invoices/{salesInvoice}/notes/{noteId}` — Delete Sales Invoice Note
- `PUT /api/sales-invoices/{salesInvoice}/notes/{noteId}/toggle-pin` — Toggle Sales Invoice Note Pin
- `POST /api/sales-invoices/{salesInvoice}/payments` — Record Sales Invoice Payment
- `POST /api/sales-invoices/{salesInvoice}/refresh-from-order` — Refresh Sales Invoice from Order
- `POST /api/sales-invoices/{salesInvoice}/supplementary` — Create Supplementary Sales Invoice
- `PUT /api/sales-invoices/{salesInvoice}/tags` — Update Sales Invoice Tags
- `POST /api/sales-invoices/{salesInvoice}/void` — Void Sales Invoice
- `DELETE /api/sales-order-fulfillments/{salesOrderFulfillment}/skip-invoice` — Undo Skip Shipment Invoice
- `POST /api/sales-order-fulfillments/{salesOrderFulfillment}/skip-invoice` — Skip Shipment Invoice
- `GET /api/sales-orders/{salesOrder}/invoice-preview` — Get Sales Order Invoice Preview
- `GET /api/sales-orders/{salesOrder}/invoices` — Get Sales Order Billing Summary
- `POST /api/sales-orders/{salesOrder}/invoices/bulk-from-shipments` — Bulk Create Sales Invoices from Shipments
- `PUT /api/sales-orders/{salesOrder}/invoicing-policy` — Update Sales Order Invoicing Policy
- `DELETE /api/sales-orders/{salesOrder}/settle-billing` — Unsettle Sales Order Billing
- `POST /api/sales-orders/{salesOrder}/settle-billing` — Settle Sales Order Billing
- `GET /api/settings/sales-invoices` — Get Sales Invoice Settings
- `PUT /api/settings/sales-invoices` — Update Sales Invoice Settings

### Sales Orders
- `POST /api/sales-orders/{salesOrder}/request-payment` — Request Sales Order Payment

### SPS Commerce
- `POST /api/sales-invoices/{salesInvoice}/edi/regenerate` — Regenerate Sales Invoice 810
- `POST /api/sales-invoices/{salesInvoice}/edi/send` — Send Sales Invoice 810

### WooCommerce
- `POST /api/woo-commerce/{id}/products/refresh-tracked` — Refresh Products (Tracked)
- `DELETE /api/woo-commerce/{integrationInstance}` — Delete Integration Instance
- `GET /api/woo-commerce/{integrationInstance}` — Show Integration Instance
- `PATCH /api/woo-commerce/{integrationInstance}` — Update WooCommerce Integration
- `PUT /api/woo-commerce/{integrationInstance}` — Update Integration Instance

## Changed

### PayPal
- `POST /api/paypal/captures/{captureId}/refund` — Refund PayPal Payment
  - new response code(s): `409`

### Sales Orders
- `POST /api/sales-orders/{salesOrder}/fulfill` — Fulfill Sales Order
  - new response code(s): `502`

### Special Order List
- `GET /api/admin/portal/special-order-list/items` — List Special Order Items
  - new parameter(s): `active`, `page`, `per_page`, `search`

_Spec version 1.0.0 → 1.0.0._
