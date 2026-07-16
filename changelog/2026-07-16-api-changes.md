---
title: API changes — 2026-07-16
description: This release includes 16 additions, 2 changes, 24 removals. 26 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-07-16
---

This release includes 16 additions, 2 changes, 24 removals. 26 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Amazon
- **Removed** `GET /api/amazon/{integrationInstance}/orders/export` — Export Orders

#### Export
- **Removed** `POST /api/export/create-download-file` — Start Async Export
- **Removed** `GET /api/export/integration-instances/{integration_instance}/listings/{format}` — Export Integration Listings by Format

#### Integration Instances
- **Removed** `DELETE /api/integration-instances/{integration_instance}/listings` — Bulk Delete Listings
- **Removed** `GET /api/integration-instances/{integration_instance}/listings` — List Listings (Sales Channel Products)
- **Removed** `POST /api/integration-instances/{integration_instance}/listings/create-sku-products` — Create SKU Products from Listings
- **Removed** `POST /api/integration-instances/{integration_instance}/listings/deletable` — Check Listing Deletability
- **Removed** `GET /api/integration-instances/{integration_instance}/listings/mapping-info` — Get Listing Mapping Info
- **Removed** `PUT /api/integration-instances/{integration_instance}/map-listing` — Map Listing to SKU Product
- **Removed** `PUT /api/integration-instances/{integration_instance}/orders/archive` — Bulk Archive Channel Orders
- **Removed** `PUT /api/integration-instances/{integration_instance}/orders/create-sku` — Create SKU Orders from Channel Orders
- **Removed** `PUT /api/integration-instances/{integration_instance}/orders/unarchived` — Bulk Unarchive Channel Orders
- **Removed** `PUT /api/integration-instances/{integration_instance}/unmap-listing` — Unmap Listing from SKU Product

#### Reporting
- **Removed** `GET /api/reporting/most-profitable-products` — Get Most Profitable Products
- **Removed** `GET /api/reporting/orders` — Get Dashboard Orders
- **Removed** `GET /api/reporting/products` — Get Dashboard Products
- **Removed** `GET /api/reporting/top-selling-products` — Get Top Selling Products

#### Temu
- **Removed** `GET /api/temu/{integrationInstance}/orders/export` — Export Orders

#### UI Utilities
- **Removed** `GET /api/table-views` — List Table Views
- **Removed** `POST /api/table-views` — Create Table View
- **Removed** `PUT /api/table-views/set-default-view/{viewId}` — Set Default View
- **Removed** `DELETE /api/table-views/{tableView}` — Delete Table View
- **Removed** `GET /api/table-views/{tableView}` — Get Table View
- **Removed** `PUT /api/table-views/{tableView}` — Update Table View

### Incompatible changes

#### eBay
- **Changed** `GET /api/ebay/{integrationInstance}/legacy-products` — List Legacy Products (Integration)
  - new parameter(s): `per_page`
  - removed parameter(s): `limit`

#### Suppliers
- **Changed** `GET /api/suppliers/{supplier}/pricing-tiers` — Get Supplier Pricing Tiers
  - new parameter(s): `per_page`
  - removed parameter(s): `excluded[]`, `included[]`

## Added

### Data Imports
- `GET /api/v2/data-imports/template` — Download Import Template

### eBay
- `PUT /api/ebay/{integrationInstance}/orders/archive` — Bulk Archive eBay Orders
- `PUT /api/ebay/{integrationInstance}/orders/unarchive` — Bulk Unarchive eBay Orders
- `POST /api/ebay/{integrationInstance}/orders/update-sku-orders` — Update SKU Orders from Channel Orders

### Products
- `GET /api/v2/products/{product}/sales` — List Product Sales

### Purchase Orders
- `GET /api/purchase-orders/{purchase_order}/lines` — Get PO Lines

### Reference Data (Read-Only)
- `GET /api/v2/incoterms/export` — Export Incoterms
- `GET /api/v2/incoterms/{incoterm}` — Get Incoterm
- `GET /api/v2/incoterms/{incoterm}/activity-log` — Get Incoterm Activity Log

### ShipStation
- `GET /api/odoo-3pl/{integration_instance}/shipping-methods` — List Shipping Methods
- `POST /api/odoo-3pl/{integration_instance}/shipping-methods/auto-match` — Auto-Match Shipping Methods
- `PUT /api/odoo-3pl/{integration_instance}/shipping-methods/bulk-map` — Bulk Map Shipping Methods
- `GET /api/odoo-3pl/{integration_instance}/shipping-methods/export` — Export Shipping Method Mappings
- `POST /api/odoo-3pl/{integration_instance}/shipping-methods/import` — Import Shipping Method Mappings
- `POST /api/odoo-3pl/{integration_instance}/shipping-methods/sync` — Sync Shipping Methods
- `PUT /api/odoo-3pl/{integration_instance}/shipping-methods/{shippingMethodId}/mapping` — Update Shipping Method Mapping

_Spec version 1.0.0 → 1.0.0._
