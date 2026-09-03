---
title: API changes — 2026-09-03
description: This release includes 23 additions, 3 changes. 2 breaking changes — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-09-03
---

This release includes 23 additions, 3 changes. 2 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Price Sync
- **Changed** `GET /api/v2/sales-channels/{integrationInstance}/prices/comparison` — List Price Comparison
  - removed parameter(s): `filter[priced_from]`

#### Products
- **Changed** `GET /api/v2/products/{product}/purchase-order-lines` — Get Product Purchase Order Lines
  - removed parameter(s): `status`

## Added

### Price Sync
- `GET /api/v2/sales-channels/{integrationInstance}/prices/pricing-tiers/rail-examples` — Get Price Rail Examples

### Pricing Sync Profiles
- `GET /api/v2/pricing-sync-profiles` — List Pricing Sync Profiles
- `POST /api/v2/pricing-sync-profiles` — Create Pricing Sync Profile
- `POST /api/v2/pricing-sync-profiles/from-instance/{integrationInstance}` — Create Pricing Sync Profile from Channel Settings
- `DELETE /api/v2/pricing-sync-profiles/{pricingSyncProfile}` — Delete Pricing Sync Profile
- `GET /api/v2/pricing-sync-profiles/{pricingSyncProfile}` — Get Pricing Sync Profile
- `PUT /api/v2/pricing-sync-profiles/{pricingSyncProfile}` — Update Pricing Sync Profile
- `POST /api/v2/pricing-sync-profiles/{pricingSyncProfile}/archive` — Archive Pricing Sync Profile
- `POST /api/v2/pricing-sync-profiles/{pricingSyncProfile}/unarchive` — Unarchive Pricing Sync Profile
- `GET /api/v2/sales-channels/{integrationInstance}/prices/listings/{productListing}/preview` — Get Listing Price Push Preview
- `PUT /api/v2/sales-channels/{integrationInstance}/prices/profile` — Set Channel Default Pricing Sync Profile
- `POST /api/v2/sales-channels/{integrationInstance}/prices/profile-assignments` — Bulk Assign Pricing Sync Profile to Listings
- `GET /api/v2/sales-channels/{integrationInstance}/prices/profile-coverage` — Get Pricing Sync Profile Coverage

### Product Listings
- `POST /api/v2/listings/bulk-edit-pricing-preview` — Preview Bulk Listing Pricing
- `POST /api/v2/listings/bulk-update-pricing` — Bulk Update Listing Pricing

### Products
- `POST /api/v2/products/bulk/pricing-sync-profile` — Bulk Assign Product Pricing Sync Profile
- `PUT /api/v2/products/{product}` — Update Product
- `GET /api/v2/products/{product}/pricing-sync-profile` — Get Product Pricing Sync Profile

### Purchase Invoices
- `DELETE /api/purchase-invoices/{purchaseInvoice}/inbound-shipments/{inboundShipment}` — Unlink Inbound Shipment from Invoice
- `POST /api/purchase-invoices/{purchaseInvoice}/inbound-shipments/{inboundShipment}` — Link Inbound Shipment to Invoice
- `GET /api/purchase-invoices/{purchaseInvoice}/linkable-inbound-shipments` — List Linkable Inbound Shipments for Invoice

### ShipBob
- `GET /api/shipbob/{instance}/orders/{order}/activity-log` — Get Order Activity Log

### Walmart
- `GET /api/walmart/{integrationInstance}/wfs/reconciliation/sync-status` — Get WFS Reconciliation Sync Status

## Changed

### Price Sync
- `GET /api/v2/sales-channels/{integrationInstance}/prices/pricing-tiers/coverage` — Get Pricing Level Coverage
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
