---
title: API changes — 2026-06-16
description: This release includes 25 additions, 6 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-06-16
---

This release includes 25 additions, 6 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Adjustments & Transfers
- `POST //{domain}/api/v2/inventory-allocations/{allocation}/move` — Move To Line
- `GET //{domain}/api/v2/inventory-allocations/{allocation}/move-targets` — Get Move Targets

### Artwork
- `GET /api/artworks` — List Artworks
- `POST /api/artworks` — Create Artwork
- `DELETE /api/artworks/{artwork}` — Archive Artwork
- `GET /api/artworks/{artwork}` — Get Artwork
- `PUT /api/artworks/{artwork}` — Update Artwork

### Decoration Cost Rules
- `GET /api/decoration-cost-rules` — List Decoration Cost Rules
- `POST /api/decoration-cost-rules` — Create Decoration Cost Rule
- `DELETE /api/decoration-cost-rules/{decoration_cost_rule}` — Delete Decoration Cost Rule
- `GET /api/decoration-cost-rules/{decoration_cost_rule}` — Show Decoration Cost Rule
- `PUT /api/decoration-cost-rules/{decoration_cost_rule}` — Update Decoration Cost Rule

### Decoration Orders
- `GET /api/sales-orders/{salesOrder}/decoration-orders` — List Decoration Orders
- `POST /api/sales-orders/{salesOrder}/decoration-orders` — Create Decoration Orders (Bulk)
- `POST /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decoration-orders` — Create Line Decoration Orders

### Line Decorations
- `GET /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decorations` — List Line Decorations
- `POST /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decorations` — Add Line Decoration
- `DELETE /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decorations/{decoration}` — Remove Line Decoration
- `PUT /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decorations/{decoration}` — Update Line Decoration
- `POST /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decorations/{decoration}/reprice` — Reprice Line Decoration

### Roles & Permissions
- `PUT /api/users/roles/bulk` — Bulk Update User Roles

### Sales Channels
- `PUT //{domain}/api/amazon-ads/{integrationInstance}/settings` — Update Amazon Ads Settings
- `GET //{domain}/api/amazon/{integrationInstance}/inbound/shipments/{shipment}/process-preview` — Preview Process with Stock Take
- `POST //{domain}/api/amazon/{integrationInstance}/inbound/shipments/{shipment}/process-with-stock-take` — Process Inbound with Stock Take

### Shipping Providers
- `GET //{domain}/api/shipmyorders/v2/invoices` — List Invoices (Vue 3)

## Changed

### Data Imports
- `POST /api/v2/data-imports` — Upload Data Import
  - new response code(s): `403`
- `POST /api/v2/data-imports/{dataImport}/execute` — Execute Data Import
  - new response code(s): `403`

### Sales Channels
- `POST //{domain}/api/amazon/{integrationInstance}/products/create-sku-products` — Create SKU.io Products (Bulk)
  - new response code(s): `400`
- `POST //{domain}/api/big-commerce/{integrationInstance}/products/create-sku-products` — Create SKU Products from BigCommerce
  - new response code(s): `400`
- `POST //{domain}/api/walmart/{integrationInstance}/products/create-sku-products` — Create SKU Products from Walmart
  - new response code(s): `400`
- `POST //{domain}/api/woo-commerce/{integration_instance}/products/create-sku-products` — Create SKU Products from WooCommerce
  - new response code(s): `400`

_Spec version 1.0.0 → 1.0.0._
