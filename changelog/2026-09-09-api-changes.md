---
title: API changes — 2026-09-09
description: This release includes 28 additions, 3 changes. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-09-09
---

This release includes 28 additions, 3 changes. 1 breaking change — action required.

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

## Changed

### Amazon
- `POST /api/amazon/{integrationInstance}/outbound/create-fulfillment/{amazonFulfillmentOrder}/{salesOrder}` — Create Fulfillment
  - new response code(s): `409`

### Temu
- `POST /api/temu/{integrationInstance}/fulfill` — Submit Fulfillment to Temu
  - new response code(s): `400`

_Spec version 1.0.0 → 1.0.0._
