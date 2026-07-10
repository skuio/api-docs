---
title: API changes — 2026-07-10
description: This release includes 129 additions, 5 changes. 4 breaking changes — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-07-10
---

This release includes 129 additions, 5 changes. 4 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Custom Fields
- **Changed** `GET /api/custom-fields` — List Custom Fields
  - new parameter(s): `limit`, `page`
  - removed parameter(s): `entity_type`

#### Sales Credits
- **Changed** `GET /api/v2/sales-credits` — List Sales Credits
  - new parameter(s): `archived`, `excluded[]`, `included[]`, `limit`, `search`, `sort`
  - removed parameter(s): `per_page`

#### Suppliers
- **Changed** `GET /api/v2/suppliers` — List Suppliers
  - new parameter(s): `archived`, `excluded[]`, `included[]`, `limit`, `search`, `sort`
  - removed parameter(s): `per_page`

#### Trackstar
- **Changed** `GET /api/trackstar/integration-instances/{integration_instance}/shipping-methods` — List Shipping Methods
  - removed parameter(s): `page`, `per_page`

## Added

### Accounting
- `POST /api/accounting/payments` — Create Payment
- `DELETE /api/accounting/payments/{id}` — Delete Payment
- `GET /api/accounting/payments/{id}` — Get Payment

### Adjustments & Transfers
- `GET /api/inventory-adjustments` — List Inventory Adjustments
- `POST /api/v2/inventory-allocations/evaluate-releases` — Evaluate Releases
- `DELETE /api/v2/inventory-allocations/{inventoryAllocation}/pin-bin` — Clear Bin Reservation
- `GET /api/v2/location-transfers` — List Location Transfers
- `POST /api/v2/location-transfers` — Create Location Transfer
- `GET /api/v2/location-transfers/{locationTransfer}` — Get Location Transfer
- `GET /api/v2/put-away/queue` — Get Put-Away Queue

### Bills
- `GET /api/bills/{id}/activity-log` — Get Bill Activity Log
- `GET /api/bills/{id}/documents` — List Bill Documents
- `GET /api/bills/{id}/notes` — List Bill Notes
- `POST /api/bills/{id}/notes` — Add Bill Note
- `DELETE /api/bills/{id}/notes/{id2}` — Delete Bill Note
- `GET /api/bills/{id}/payments` — List Bill Payments
- `POST /api/bills/{id}/payments` — Add Bill Payment
- `DELETE /api/bills/{id}/payments/{id2}` — Delete Bill Payment

### Cost Categories
- `GET /api/cost-categories` — List Cost Categories
- `POST /api/cost-categories` — Create Cost Category
- `GET /api/cost-categories/fuzzy-match` — Fuzzy Match Cost Category
- `DELETE /api/cost-categories/{cost_category}` — Delete Cost Category
- `GET /api/cost-categories/{cost_category}` — Get Cost Category
- `POST /api/cost-categories/{cost_category}/archive` — Archive Cost Category
- `POST /api/cost-categories/{cost_category}/merge` — Merge Cost Category
- `POST /api/cost-categories/{cost_category}/unarchive` — Unarchive Cost Category

### Costing
- `GET /api/fifo-layers` — List FIFO Layers

### CSV Templates
- `GET /api/csv-templates` — List CSV Templates

### Financials
- `POST /api/financials/daily-summary` — Create Daily Financial Summary
- `DELETE /api/financials/daily-summary/{daily_summary}` — Delete Daily Financial Summary
- `GET /api/financials/daily-summary/{daily_summary}` — Get Daily Financial Summary

### Fulfillment Orders
- `POST /api/fulfillment-orders/{fulfillmentOrder}/apply-line-update` — Apply Fulfillment Order Line Update

### Initial Inventory
- `GET /api/initial-inventory` — List Initial Inventory
- `POST /api/initial-inventory` — Create Initial Inventory
- `DELETE /api/initial-inventory/{id}` — Delete Initial Inventory
- `GET /api/initial-inventory/{id}` — Get Initial Inventory

### Inventory
- `GET /api/v2/inventory/location-quantities` — List Location Quantities
- `GET /api/v2/inventory/location-quantities/export` — Export Location Quantities

### Magento 1
- `POST /api/magento1/instances/{integrationInstance}/orders/bulk-delete` — Delete Orders
- `POST /api/magento1/instances/{integrationInstance}/orders/fetch-single` — Download Single Order
- `POST /api/magento1/instances/{integrationInstance}/orders/search` — Search Orders
- `POST /api/magento1/instances/{integrationInstance}/products/fetch-single` — Download Single Product
- `POST /api/magento1/instances/{integrationInstance}/products/search` — Search Products

### Merchandise Planning
- `GET /api/open-to-buy/merchandise-plans` — List Merchandise Plans
- `POST /api/open-to-buy/merchandise-plans` — Create Merchandise Plan
- `POST /api/open-to-buy/merchandise-plans/seed` — Seed Plan From Forecast / Last Year
- `GET /api/open-to-buy/merchandise-plans/{merchandisePlan}` — Get Merchandise Plan
- `PATCH /api/open-to-buy/merchandise-plans/{merchandisePlan}` — Update Merchandise Plan (cell save / cash cap)
- `GET /api/open-to-buy/merchandise-plans/{merchandisePlan}/otb` — Get OTB Breakdown

### Organization
- `GET /api/attribute-groups` — List Attribute Groups
- `GET /api/attributes` — List Attributes
- `GET /api/categories` — List Categories
- `GET /api/product-brands` — List Product Brands
- `GET /api/v2/brands/{brand}` — Get Brand Detail Summary
- `GET /api/v2/brands/{brand}/activity-log` — Get Brand Activity Log

### Pick Lists
- `GET /api/export/pick-lists/{pickList}/pdf` — Download Pick List PDF
- `GET /api/v2/pick-lists` — List Pick Lists
- `POST /api/v2/pick-lists` — Create Pick List
- `POST /api/v2/pick-lists/bulk-archive` — Bulk Archive Pick Lists
- `POST /api/v2/pick-lists/bulk-delete` — Bulk Delete Pick Lists
- `POST /api/v2/pick-lists/bulk-unarchive` — Bulk Unarchive Pick Lists
- `GET /api/v2/pick-lists/export` — Export Pick Lists
- `DELETE /api/v2/pick-lists/{pickList}` — Delete Pick List
- `GET /api/v2/pick-lists/{pickList}` — Get Pick List
- `POST /api/v2/pick-lists/{pickList}/fulfill` — Fulfill Pick List

### Pricing
- `GET /api/product-pricing-tiers` — List Pricing Tiers

### Products
- `GET /api/consignment/valuation-summary` — Get Consignment Valuation Summary
- `GET /api/products` — List Products
- `GET /api/products/create` — Get Create Product Form
- `GET /api/products/import/fields` — Get Import Fields
- `GET /api/products/import/template` — Download Import Template
- `POST /api/products/import/validate` — Validate Import
- `GET /api/products/{productId}/fifo-layers` — Get Product FIFO Layers
- `GET /api/products/{productId}/inventory-movements` — Get Product Inventory Movements
- `GET /api/products/{product}/edit` — Get Edit Product Form
- `GET /api/products/{product}/listings` — List Product Listings
- `GET /api/v2/products/{product}/active-reservations` — Get Product Active Reservations
- `GET /api/v2/products/{product}/reservation-integrity` — Get Product Reservation Integrity

### Square
- `POST /api/square/instances/{squareIntegrationInstance}/payouts/sync` — Sync payouts
- `POST /api/square/orders/submit-fulfillments` — Submit fulfillments
- `GET /api/square/payouts` — List payouts
- `GET /api/square/payouts/{squarePayout}` — Get payout
- `GET /api/square/payouts/{squarePayout}/entries` — List payout entries

### Suppliers
- `PATCH /api/purchase-orders/{purchase_order}/invoice-reminders` — Manage Invoice Reminders

### Trackstar
- `POST /api/trackstar/integration-instances/{integration_instance}/shipping-methods/auto-match` — Auto-match Shipping Methods
- `GET /api/trackstar/integration-instances/{integration_instance}/shipping-methods/export` — Export Shipping Method Mappings
- `POST /api/trackstar/integration-instances/{integration_instance}/shipping-methods/import` — Import Shipping Method Mappings

### Warehouses
- `GET /api/lookup/warehouse-locations` — Lookup Warehouse Locations
- `GET /api/v2/lpns` — List LPNs
- `POST /api/v2/lpns` — Create LPN
- `GET /api/v2/lpns/{warehouseLpn}` — Get LPN
- `POST /api/v2/lpns/{warehouseLpn}/contents` — Add Stock to LPN
- `POST /api/v2/lpns/{warehouseLpn}/contents/bulk` — Bulk Import Stock to LPN
- `GET /api/v2/product-warehouse-locations` — List Product Warehouse Locations
- `POST /api/v2/product-warehouse-locations` — Create Product Warehouse Location
- `DELETE /api/v2/product-warehouse-locations/{productWarehouseLocation}` — Delete Product Warehouse Location
- `GET /api/v2/warehouse-locations` — List Warehouse Locations
- `GET /api/v2/warehouse-locations/slotting-suggestions` — Get Slotting Suggestions
- `DELETE /api/v2/warehouse-locations/{warehouseLocation}` — Delete Warehouse Location
- `GET /api/v2/warehouse-locations/{warehouseLocation}` — Get Warehouse Location

_…plus 29 more (see the API reference)._

## Changed

### Returns & RMAs
- `GET /api/v2/return-reasons` — List Return Reasons
  - new parameter(s): `archived`, `limit`, `page`, `search`, `sort`

_Spec version 1.0.0 → 1.0.0._
