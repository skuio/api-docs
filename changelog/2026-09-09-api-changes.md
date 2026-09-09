---
title: API changes — 2026-09-09
description: This release includes 87 additions, 3 changes. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-09-09
---

This release includes 87 additions, 3 changes. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Products
- **Changed** `GET /api/v2/products/{product}/warehouse-transfer-lines` — Get Product Warehouse Transfer Lines
  - removed parameter(s): `status`
  - new response code(s): `422`

## Added

### Amazon
- `GET /api/amazon/unified/cost-exceptions` — List Cost Exceptions
- `POST /api/amazon/unified/cost-exceptions/bulk-resolve` — Bulk Resolve Cost Exceptions
- `GET /api/amazon/unified/cost-exceptions/summary` — Get Cost Exceptions Summary
- `POST /api/amazon/unified/cost-exceptions/{costException}/resolve` — Resolve Cost Exception
- `GET /api/amazon/unified/fnsku-products/remap-preview-by-asin` — Preview ASIN Remap
- `GET /api/amazon/unified/fnsku-products/{fnskuProduct}/mapping-periods` — Get FNSKU Mapping History
- `GET /api/amazon/unified/fnsku-products/{fnskuProduct}/remap-preview` — Preview FNSKU Remap
- `POST /api/amazon/unified/fulfillment-orders/bulk-archive` — Bulk Archive MCF Orders
- `POST /api/amazon/unified/fulfillment-orders/bulk-create-sales-orders` — Bulk Create Sales Orders from MCF Orders
- `POST /api/amazon/unified/fulfillment-orders/bulk-delete` — Bulk Delete MCF Orders
- `POST /api/amazon/unified/fulfillment-orders/bulk-map` — Bulk Map MCF Orders to Sales Orders
- `POST /api/amazon/unified/fulfillment-orders/bulk-restore` — Bulk Restore MCF Orders
- `POST /api/amazon/unified/fulfillment-orders/bulk-resync` — Bulk Re-sync MCF Orders from Amazon
- `POST /api/amazon/unified/fulfillment-orders/bulk-unarchive` — Bulk Unarchive MCF Orders
- `POST /api/amazon/unified/fulfillment-orders/bulk-unmap` — Bulk Unmap MCF Orders
- `GET /api/amazon/unified/fulfillment-orders/export` — Export MCF Fulfillment Orders
- `GET /api/amazon/unified/fulfillment-orders/match-suggestions` — Get MCF Order Match Suggestions for Multiple Orders
- `POST /api/amazon/unified/fulfillment-orders/{fulfillmentOrderId}/restore` — Restore MCF Order
- `DELETE /api/amazon/unified/fulfillment-orders/{fulfillmentOrder}` — Delete MCF Order
- `POST /api/amazon/unified/fulfillment-orders/{fulfillmentOrder}/archive` — Archive MCF Order
- `POST /api/amazon/unified/fulfillment-orders/{fulfillmentOrder}/create-sales-order` — Create Sales Order from MCF Order
- `POST /api/amazon/unified/fulfillment-orders/{fulfillmentOrder}/map` — Map MCF Order to Sales Order
- `GET /api/amazon/unified/fulfillment-orders/{fulfillmentOrder}/match-suggestions` — Get MCF Order Match Suggestions
- `POST /api/amazon/unified/fulfillment-orders/{fulfillmentOrder}/resync` — Re-sync MCF Order from Amazon
- `POST /api/amazon/unified/fulfillment-orders/{fulfillmentOrder}/unarchive` — Unarchive MCF Order
- `POST /api/amazon/unified/fulfillment-orders/{fulfillmentOrder}/unmap` — Unmap MCF Order

### Products
- `GET /api/v2/products/import-recipes/template` — Download Recipe Import Template

### Purchase Invoices
- `POST /api/purchase-invoices/{purchaseInvoice}/inbound-shipments/auto-link` — Auto-Link Inbound Shipments

### TikTok Shop
- `GET /api/tiktok-shop/fbt/inbound-orders/3pl-metrics` — Get Prep Performance Metrics
- `GET /api/tiktok-shop/fbt/suppliers/{supplier}/3pl-metrics` — Get Supplier Prep Performance Metrics
- `GET /api/tiktok-shop/fbt/warehouses/{warehouse}/3pl-metrics` — Get Warehouse Prep Performance Metrics
- `GET /api/tiktok-shop/{integrationInstance}/fbt/appointments` — List Delivery Appointments
- `POST /api/tiktok-shop/{integrationInstance}/fbt/appointments` — Create Delivery Appointment
- `DELETE /api/tiktok-shop/{integrationInstance}/fbt/appointments/{appointment}` — Cancel Delivery Appointment
- `GET /api/tiktok-shop/{integrationInstance}/fbt/appointments/{appointment}` — Get Delivery Appointment
- `PATCH /api/tiktok-shop/{integrationInstance}/fbt/appointments/{appointment}` — Update Delivery Appointment
- `GET /api/tiktok-shop/{integrationInstance}/fbt/goods` — List FBT Goods
- `POST /api/tiktok-shop/{integrationInstance}/fbt/goods/bind` — Bind SKUs to FBT Goods
- `GET /api/tiktok-shop/{integrationInstance}/fbt/goods/match-status` — Get FBT Goods Match Status
- `POST /api/tiktok-shop/{integrationInstance}/fbt/goods/refresh-tracked` — Refresh FBT Goods
- `POST /api/tiktok-shop/{integrationInstance}/fbt/goods/unbind` — Unbind SKUs from FBT Goods
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-orders` — List Inbound Orders
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-orders/refresh-tracked` — Refresh Inbound Orders
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-orders/{order}` — Get Inbound Order
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-orders/{order}/activity-log` — List Inbound Order Activity
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-orders/{order}/cancel` — Cancel Inbound Order
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-orders/{order}/labels` — Get Inbound Order Labels
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-orders/{order}/labels/download` — Download Inbound Order Labels
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-orders/{order}/reconciliation` — Get Inbound Order Reconciliation
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-orders/{order}/reconciliation/resolve` — Resolve Receipt Discrepancy
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-orders/{order}/ship` — Ship Inbound Order
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-orders/{order}/tracking` — Submit Inbound Order Tracking
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans` — List Inbound Plans
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/drafts` — Create Inbound Plan Draft
- `DELETE /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}` — Delete Inbound Plan Draft
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}` — Get Inbound Plan
- `PATCH /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}` — Update Inbound Plan
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/activity-log` — List Inbound Plan Activity
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/allocations` — List Inbound Plan Allocations
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/cancel` — Cancel Inbound Plan
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/cartons` — List Inbound Plan Cartons
- `PATCH /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/cartons` — Update Inbound Plan Cartons
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/duplicate` — Duplicate Inbound Plan
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/fulfillment` — Get Fulfillment Packet
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/fulfillment/build` — Build Fulfillment Packet
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/fulfillment/email/preview` — Preview Fulfillment Email
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/fulfillment/email/send` — Send Fulfillment Email
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/fulfillment/prep-sheet.csv` — Download Prep Sheet CSV
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/fulfillment/rotate-token` — Rotate Fulfillment Portal Token
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/fulfillment/shipping-details-email/send` — Send Shipping Details Email
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/items` — List Inbound Plan Items
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/materialize` — Reserve Inbound Plan Source Stock
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/placement/confirm` — Confirm Placement Option
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/placement/detail` — Get Placement Option Detail
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/placement/options` — Refresh Placement Options
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/set-source` — Set Inbound Plan Source
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-plans/{plan}/submit` — Submit Inbound Plan
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-products` — List Inbound Products
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inbound-products/resolve` — Resolve Inbound Products
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inventory` — List FBT Inventory
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inventory/log` — List FBT Inventory Log
- `POST /api/tiktok-shop/{integrationInstance}/fbt/inventory/refresh-tracked` — Refresh FBT Inventory
- `GET /api/tiktok-shop/{integrationInstance}/fbt/settings` — Get Fulfillment by TikTok Settings
- `PUT /api/tiktok-shop/{integrationInstance}/fbt/settings` — Update Fulfillment by TikTok Settings
- `GET /api/tiktok-shop/{integrationInstance}/fbt/source-warehouses` — List Source Warehouses
- `GET /api/tiktok-shop/{integrationInstance}/fbt/warehouses` — List FBT Warehouses
- `POST /api/tiktok-shop/{integrationInstance}/fbt/warehouses/refresh-tracked` — Refresh FBT Warehouses

## Changed

### Amazon
- `POST /api/amazon/{integrationInstance}/outbound/create-fulfillment/{amazonFulfillmentOrder}/{salesOrder}` — Create Fulfillment
  - new response code(s): `409`

### Temu
- `POST /api/temu/{integrationInstance}/fulfill` — Submit Fulfillment to Temu
  - new response code(s): `400`

_Spec version 1.0.0 → 1.0.0._
