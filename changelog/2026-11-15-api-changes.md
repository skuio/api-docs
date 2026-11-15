---
title: API changes — 2026-11-15
description: This release includes 161 additions, 4 changes. 2 breaking changes — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-11-15
---

This release includes 161 additions, 4 changes. 2 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Adjustments & Transfers
- **Changed** `GET /api/v2/inventory-allocations/export` — Export Allocations
  - removed parameter(s): `format`, `ids`, `scope`

#### SPS Commerce
- **Changed** `GET /api/spscommerce/{integrationInstance}/purchase-orders/export` — Export Purchase Orders
  - removed parameter(s): `format`
  - new response code(s): `202`

## Added

### Adjustments & Transfers
- `GET /api/v2/inventory-allocations/export/download` — Download Allocation Export

### Amazon
- `POST /api/amazon/{integrationInstance}/awd/inbound-orders/{awd_inbound_order}/move-to-seller-central` — Move AWD Inbound Order to Seller Central

### Etsy
- `GET /api/etsy/instances/{integrationInstance}/payout-finance-settings` — Get Payout Finance Settings
- `GET /api/etsy/instances/{integrationInstance}/payout-mapping-groups` — List Payout Mapping Groups
- `POST /api/etsy/instances/{integrationInstance}/payout-mapping-groups` — Create Payout Mapping Group
- `POST /api/etsy/instances/{integrationInstance}/payout-mapping-groups/reorder` — Reorder Payout Mapping Groups
- `DELETE /api/etsy/instances/{integrationInstance}/payout-mapping-groups/{payoutMappingGroup}` — Delete Payout Mapping Group
- `GET /api/etsy/instances/{integrationInstance}/payout-transactions` — List Payout Lines
- `GET /api/etsy/instances/{integrationInstance}/payout-transactions/filter-options` — Get Payout Line Filter Options
- `GET /api/etsy/instances/{integrationInstance}/payout-type-mappings` — List Payout Type Mappings
- `GET /api/etsy/instances/{integrationInstance}/payout-type-mappings/export` — Export Etsy Payout Type Mappings
- `POST /api/etsy/instances/{integrationInstance}/payout-type-mappings/import` — Import Etsy Payout Type Mappings
- `GET /api/etsy/instances/{integrationInstance}/payouts` — List Payouts
- `GET /api/etsy/instances/{integrationInstance}/payouts/filter-options` — Get Payout Filter Options
- `POST /api/etsy/instances/{integrationInstance}/payouts/sync` — Sync Payouts
- `GET /api/etsy/instances/{integrationInstance}/payouts/{payout}` — Get Payout
- `GET /api/etsy/payout-mapping-groups` — List Global Payout Mapping Groups
- `POST /api/etsy/payout-mapping-groups` — Create Global Payout Mapping Group
- `POST /api/etsy/payout-mapping-groups/reorder` — Reorder Global Payout Mapping Groups
- `DELETE /api/etsy/payout-mapping-groups/{payoutMappingGroup}` — Delete Global Payout Mapping Group

### Ledger (Accounting v2)
- `GET /api/ledger/connections/{connectionId}/xero-document-status` — Get Xero Document Status

### Merged Shipments
- `POST /api/sales-orders/merge` — Merge Sales Orders Into One Shipment
- `POST /api/sales-orders/merge/preview` — Preview Sales Order Merge

### Shopify
- `GET /api/shopify/{integrationInstance}/collective-debits` — List Shopify Collective Debits
- `POST /api/shopify/{integrationInstance}/collective-debits/{transaction}/match` — Match Shopify Collective Debit
- `GET /api/shopify/{integrationInstance}/label-costs` — List Shopify Shipping Label Costs
- `GET /api/shopify/{integrationInstance}/label-costs/locations` — List Shopify Location Label Cost Policies
- `POST /api/shopify/{integrationInstance}/label-costs/reimport` — Reimport Shopify Shipping Label Costs
- `GET /api/shopify/{integrationInstance}/label-costs/summary` — Get Shopify Shipping Label Cost Summary
- `GET /api/shopify/{integrationInstance}/label-costs/{labelCost}` — Get Shopify Shipping Label Cost
- `PATCH /api/shopify/{integrationInstance}/label-costs/{labelCost}/decision` — Update Shopify Shipping Label Cost Decision
- `PATCH /api/shopify/{integrationInstance}/locations/{location}` — Update Shopify Location Partner Kind
- `GET /api/shopify/{integrationInstance}/partner-locations` — List Shopify Partner Locations
- `POST /api/shopify/{integrationInstance}/partner-locations/apply` — Apply Shopify Partner Location Mappings
- `GET /api/shopify/{integrationInstance}/partner-orders` — List Shopify Partner Orders
- `GET /api/shopify/{integrationInstance}/partner-orders/summary` — Get Shopify Partner Order Summary

### SPS Commerce
- `GET /api/spscommerce/sales-orders/{salesOrder}/order-changes` — List Purchase Order Changes for a Sales Order
- `POST /api/spscommerce/sales-orders/{salesOrder}/order-changes/{document}/accept` — Accept Purchase Order Change
- `POST /api/spscommerce/sales-orders/{salesOrder}/order-changes/{document}/decline` — Decline Purchase Order Change
- `POST /api/spscommerce/sales-orders/{salesOrder}/order-changes/{document}/mark-handled` — Mark Purchase Order Change Handled
- `GET /api/spscommerce/sales-orders/{salesOrder}/purchase-order-split` — Get Sales Order Purchase Order Split
- `POST /api/spscommerce/{integrationInstance}/documents/bulk-reprocess` — Bulk Reprocess EDI Documents
- `POST /api/spscommerce/{integrationInstance}/documents/bulk-resend` — Bulk Resend EDI Documents
- `GET /api/spscommerce/{integrationInstance}/documents/export` — Export EDI Documents
- `DELETE /api/spscommerce/{integrationInstance}/item-mappings` — Bulk Delete Item Mappings
- `GET /api/spscommerce/{integrationInstance}/item-mappings/customers` — List Item Mapping Customers
- `POST /api/spscommerce/{integrationInstance}/location-codes/bulk-delete` — Bulk Delete Location Codes

### Stock Takes
- `GET /api/stock-takes/amazon-initial-counts` — List Amazon Initial Counts
- `GET /api/stock-takes/amazon-initial-counts/{warehouse}` — Get Amazon Initial Count
- `GET /api/stock-takes/amazon-initial-counts/{warehouse}/lines` — List Amazon Initial Count Lines

### Target Plus
- `GET /api/target-plus` — List Target Plus Integrations
- `GET /api/target-plus/payout-mapping-groups` — List Global Target Plus Payout Mapping Groups
- `DELETE /api/target-plus/payout-mapping-groups/{payoutMappingGroup}` — Delete Global Target Plus Payout Mapping Group
- `GET /api/target-plus/setup-hints` — Get Target Plus Setup Hints
- `DELETE /api/target-plus/{integrationInstance}` — Delete Target Plus Integration
- `GET /api/target-plus/{integrationInstance}` — Get Target Plus Integration
- `GET /api/target-plus/{integrationInstance}/accounting/settings` — Get Target Plus Accounting Settings
- `GET /api/target-plus/{integrationInstance}/activity-log` — List Target Plus Activity
- `GET /api/target-plus/{integrationInstance}/dashboard` — Get Target Plus Dashboard
- `GET /api/target-plus/{integrationInstance}/distribution-centers` — List Target Plus Distribution Centers
- `GET /api/target-plus/{integrationInstance}/fulfillments` — List Target Plus Fulfillments
- `GET /api/target-plus/{integrationInstance}/fulfillments/shipments` — List Target Plus Shipments
- `GET /api/target-plus/{integrationInstance}/fulfillments/stats` — Get Target Plus Fulfillment Stats
- `GET /api/target-plus/{integrationInstance}/inventory` — List Target Plus Inventory
- `GET /api/target-plus/{integrationInstance}/inventory/settings` — Get Target Plus Inventory Settings
- `GET /api/target-plus/{integrationInstance}/inventory/summary` — Get Target Plus Inventory Summary
- `GET /api/target-plus/{integrationInstance}/item-types` — List Target Plus Item Types
- `GET /api/target-plus/{integrationInstance}/listings` — List Target Plus Listings
- `GET /api/target-plus/{integrationInstance}/listings/export` — Export Target Plus Listings
- `GET /api/target-plus/{integrationInstance}/listings/field-mappings` — Get Target Plus Listing Field Mappings
- `GET /api/target-plus/{integrationInstance}/listings/filter-options` — Get Target Plus Listing Filter Options
- `GET /api/target-plus/{integrationInstance}/listings/latest-sync-info` — Get Target Plus Listing Sync Info
- `GET /api/target-plus/{integrationInstance}/listings/mappings-csv` — Download Target Plus Listing Mappings
- `GET /api/target-plus/{integrationInstance}/listings/{listing}` — Get Target Plus Listing
- `DELETE /api/target-plus/{integrationInstance}/listings/{listing}/map` — Unmap Target Plus Listing
- `GET /api/target-plus/{integrationInstance}/listings/{listing}/orders` — List Target Plus Listing Orders
- `GET /api/target-plus/{integrationInstance}/listings/{listing}/raw` — Get Target Plus Listing Raw Data
- `GET /api/target-plus/{integrationInstance}/orders` — List Target Plus Orders
- `GET /api/target-plus/{integrationInstance}/orders/filter-options` — Get Target Plus Order Filter Options
- `GET /api/target-plus/{integrationInstance}/orders/latest-sync-info` — Get Target Plus Order Sync Info
- `GET /api/target-plus/{integrationInstance}/orders/{order}` — Get Target Plus Order
- `GET /api/target-plus/{integrationInstance}/orders/{order}/activity-log` — List Target Plus Order Activity
- `GET /api/target-plus/{integrationInstance}/orders/{order}/raw` — Get Target Plus Order Raw Data
- `DELETE /api/target-plus/{integrationInstance}/orders/{order}/sku-order` — Delete SKU Order for Target Plus Order
- `GET /api/target-plus/{integrationInstance}/payout-finance-settings` — Get Target Plus Payout Finance Settings
- `GET /api/target-plus/{integrationInstance}/payout-mapping-groups` — List Target Plus Payout Mapping Groups
- `DELETE /api/target-plus/{integrationInstance}/payout-mapping-groups/{payoutMappingGroup}` — Delete Target Plus Payout Mapping Group
- `GET /api/target-plus/{integrationInstance}/payout-transactions` — List Target Plus Payout Lines
- `GET /api/target-plus/{integrationInstance}/payout-type-mappings` — List Target Plus Payout Type Mappings
- `GET /api/target-plus/{integrationInstance}/payout-type-mappings/export` — Export Target Plus Payout Type Mappings
- `GET /api/target-plus/{integrationInstance}/payouts` — List Target Plus Payouts
- `GET /api/target-plus/{integrationInstance}/payouts/{payout}` — Get Target Plus Payout
- `GET /api/target-plus/{integrationInstance}/pricing/settings` — Get Target Plus Pricing Settings
- `GET /api/target-plus/{integrationInstance}/report-imports` — List Target Plus Report Imports
- `GET /api/target-plus/{integrationInstance}/returns` — List Target Plus Returns
- `GET /api/target-plus/{integrationInstance}/returns/filter-options` — Get Target Plus Return Filter Options
- `GET /api/target-plus/{integrationInstance}/returns/latest-sync-info` — Get Target Plus Return Sync Info
- `GET /api/target-plus/{integrationInstance}/returns/{return}` — Get Target Plus Return
- `GET /api/target-plus/{integrationInstance}/returns/{return}/raw` — Get Target Plus Return Raw Data
- `GET /api/target-plus/{integrationInstance}/shipping-methods` — List Target Plus Shipping Methods

_…plus 61 more (see the API reference)._

## Changed

### SPS Commerce
- `GET /api/spscommerce/{integrationInstance}/location-codes/export` — Export Location Codes
  - new response code(s): `422`
- `DELETE /api/spscommerce/{integrationInstance}/purchase-orders` — Delete Purchase Orders
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
