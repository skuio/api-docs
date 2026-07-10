---
title: API changes — 2026-04-30
description: This release includes 9 additions, 2 changes, 57 removals. 58 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-04-30
---

This release includes 9 additions, 2 changes, 57 removals. 58 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Channel Partners
- **Removed** `GET /api/channel-partners/inbound-events/{eventId}` — Show Inbound Event
- **Removed** `POST /api/channel-partners/inbound-events/{eventId}/reprocess` — Reprocess Inbound Event
- **Removed** `DELETE /api/channel-partners/{integrationInstanceId}` — Delete Channel Partner
- **Removed** `GET /api/channel-partners/{integrationInstanceId}` — Show Channel Partner
- **Removed** `PUT /api/channel-partners/{integrationInstanceId}` — Update Channel Partner
- **Removed** `GET /api/channel-partners/{integrationInstanceId}/dashboard` — Get Dashboard Stats
- **Removed** `GET /api/channel-partners/{integrationInstanceId}/inbound-events` — List Inbound Events
- **Removed** `DELETE /api/channel-partners/{integrationInstanceId}/inbound-events/delete-all` — Delete All Events for Instance
- **Removed** `GET /api/channel-partners/{integrationInstanceId}/inbound-events/stats` — Get Inbound Events Stats
- **Removed** `GET /api/channel-partners/{integrationInstanceId}/orders` — List Orders for Channel Partner
- **Removed** `GET /api/channel-partners/{integrationInstanceId}/tokens` — List Tokens
- **Removed** `POST /api/channel-partners/{integrationInstanceId}/tokens` — Generate Token
- **Removed** `DELETE /api/channel-partners/{integrationInstanceId}/tokens/{tokenId}` — Revoke Token

#### Customer SKU Mappings
- **Removed** `GET /api/customers/{customer_id}/sku-mappings` — List SKU Mappings
- **Removed** `POST /api/customers/{customer_id}/sku-mappings` — Create / Upsert SKU Mapping
- **Removed** `GET /api/customers/{customer_id}/sku-mappings/export` — Export SKU Mappings as CSV
- **Removed** `POST /api/customers/{customer_id}/sku-mappings/import` — Import SKU Mappings from CSV
- **Removed** `DELETE /api/customers/{customer_id}/sku-mappings/{mapping_id}` — Delete SKU Mapping

#### Customers
- **Removed** `DELETE /api/customers` — Bulk Delete Customers
- **Removed** `GET /api/customers` — List Customers
- **Removed** `POST /api/customers` — Create Customer
- **Removed** `PUT /api/customers/archive` — Bulk Archive Customers
- **Removed** `POST /api/customers/deletable` — Check Deletable
- **Removed** `GET /api/customers/find-match` — Find Customer Match
- **Removed** `POST /api/customers/import` — Import Customers
- **Removed** `POST /api/customers/import/preview` — Preview Import
- **Removed** `GET /api/customers/starshipit/submit-orders` — Submit Orders to Starshipit
- **Removed** `PUT /api/customers/starshipit/update-order/{sales_order_fulfillment}` — Update Starshipit Order from Fulfillment
- **Removed** `GET /api/customers/starshipit/view-order/{sales_order_fulfillment}` — View Starshipit Order
- **Removed** `PUT /api/customers/unarchive` — Bulk Unarchive Customers
- **Removed** `DELETE /api/customers/{customer}` — Delete Customer
- **Removed** `GET /api/customers/{customer}` — Get Customer
- **Removed** `PUT /api/customers/{customer}` — Update Customer
- **Removed** `GET /api/customers/{customer}/addresses` — Get Customer Addresses
- **Removed** `POST /api/customers/{customer}/addresses` — Add Customer Address
- **Removed** `PUT /api/customers/{customer}/archive` — Archive Customer
- **Removed** `GET /api/customers/{customer}/open-sales-credits` — Get Open Sales Credits
- **Removed** `POST /api/customers/{customer}/sales-credits/{salesCredit}/allocate` — Allocate Sales Credit to Orders
- **Removed** `PUT /api/customers/{customer}/set-default-billing-address/{address_id}` — Set Default Billing Address
- **Removed** `PUT /api/customers/{customer}/set-default-shipping-address/{address_id}` — Set Default Shipping Address
- **Removed** `PUT /api/customers/{customer}/unarchived` — Unarchive Customer
- **Removed** `GET /api/customers/{customer}/unpaid-orders` — Get Unpaid Orders

#### Sales Reps
- **Removed** `POST /api/sales-reps` — Create Sales Rep
- **Removed** `GET /api/sales-reps/list` — Get Sales Reps for Dropdown
- **Removed** `GET /api/sales-reps/{salesRep}/activity-log` — Get Sales Rep Activity Log
- **Removed** `DELETE /api/sales-reps/{sales_rep}` — Delete Sales Rep
- **Removed** `GET /api/sales-reps/{sales_rep}` — Get Sales Rep
- **Removed** `PUT /api/sales-reps/{sales_rep}` — Update Sales Rep

#### Sub Sales Channels
- **Removed** `GET /api/sub-sales-channels` — List Sub Sales Channels (Paginated)
- **Removed** `POST /api/sub-sales-channels` — Create Sub Sales Channel
- **Removed** `DELETE /api/sub-sales-channels/1` — Delete Sub Sales Channel
- **Removed** `GET /api/sub-sales-channels/1` — Get Sub Sales Channel
- **Removed** `PUT /api/sub-sales-channels/1` — Update Sub Sales Channel
- **Removed** `GET /api/sub-sales-channels/by-sales-channel/5` — Get Sub Sales Channels by Sales Channel
- **Removed** `GET /api/sub-sales-channels/list` — List Sub Sales Channels (Dropdown)
- **Removed** `GET /api/sub-sales-channels/lookup/nominal-codes` — Lookup Nominal Codes
- **Removed** `GET /api/sub-sales-channels/lookup/sales-channels` — Lookup Sales Channels

### Incompatible changes

#### Misc
- **Changed** `GET /api/sales-reps` — List Sales Reps
  - removed parameter(s): `filter[active]`, `filter[name]`, `filter[search]`, `page`, `per_page`, `sort`

## Added

### Document Inbox
- `POST /api/document-inbox/bulk-destroy` — Bulk Delete Inbox Documents

### Purchase Invoice OCR
- `POST /api/purchase-invoices/ocr/{purchase_extraction_id}/attach-to-invoice` — Attach OCR Document to Existing Invoice
- `POST /api/purchase-invoices/ocr/{purchase_extraction_id}/reclassify-as-customer-po` — Reclassify as Customer PO
- `POST /api/purchase-invoices/ocr/{purchase_extraction_id}/rescan` — Re-scan Extraction

### Purchase Orders
- `GET /api/purchase-orders/csv-columns` — Get CSV Column Registry

### Sales Order Lines
- `PUT /api/sales-order-lines/{salesOrderLine}/nominal-code` — Update Line Nominal Code

### Suppliers
- `GET /api/supplier-inventories/1/our-inventory` — List Our Inventory for Supplier
- `GET /api/supplier-inventories/1/our-inventory/stats` — Get Our Inventory Stats for Supplier
- `POST /api/suppliers/{supplier}/csv-sample` — Download PO CSV Sample

## Changed

### Inventory
- `GET /api/inventory-forecasting/configurations/paginated` — List Forecast Configurations (Paginated)
  - new parameter(s): `page`

_Spec version 1.0.0 → 1.0.0._
