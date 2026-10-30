---
title: API changes — 2026-10-30
description: This release includes 107 additions, 6 changes, 24 removals. 24 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-10-30
---

This release includes 107 additions, 6 changes, 24 removals. 24 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Launch Roadmap
- **Removed** `GET /api/launch-plan` — Get Launch Plan
- **Removed** `PATCH /api/launch-plan` — Update Launch Plan
- **Removed** `POST /api/launch-plan` — Create Launch Plan
- **Removed** `GET /api/launch-plan/export` — Export Launch Plan
- **Removed** `POST /api/launch-plan/import` — Import Launch Plan
- **Removed** `GET /api/launch-plan/members` — List Launch Plan Members
- **Removed** `PUT /api/launch-plan/members` — Replace Launch Plan Members
- **Removed** `PUT /api/launch-plan/profile` — Update Launch Profile
- **Removed** `POST /api/launch-plan/refresh` — Refresh Launch Plan
- **Removed** `POST /api/launch-plan/steps` — Add Custom Launch Step
- **Removed** `DELETE /api/launch-plan/steps/{step}` — Delete Custom Launch Step
- **Removed** `PATCH /api/launch-plan/steps/{step}` — Update Launch Step
- **Removed** `DELETE /api/launch-plan/steps/{step}/block` — Unblock Launch Step
- **Removed** `POST /api/launch-plan/steps/{step}/block` — Block Launch Step
- **Removed** `POST /api/launch-plan/steps/{step}/comments` — Add Launch Step Comment
- **Removed** `GET /api/launch-plan/steps/{step}/events` — List Launch Step Activity
- **Removed** `DELETE /api/launch-plan/steps/{step}/not-applicable` — Restore Launch Step
- **Removed** `POST /api/launch-plan/steps/{step}/not-applicable` — Mark Launch Step Not Needed
- **Removed** `POST /api/launch-plan/steps/{step}/reopen` — Reopen Launch Step
- **Removed** `POST /api/launch-plan/steps/{step}/sign-off` — Sign Off Launch Step
- **Removed** `POST /api/launch-plan/suggestions/from-notes` — Suggest Launch Plan Changes From Notes
- **Removed** `POST /api/launch-plan/suggestions/{suggestion}/accept` — Accept Launch Plan Suggestion
- **Removed** `POST /api/launch-plan/suggestions/{suggestion}/dismiss` — Dismiss Launch Plan Suggestion
- **Removed** `GET /api/launch-plan/summary` — Get Launch Plan Summary

## Added

### 3PL
- `GET /api/3pl/orders/cancelled` — List Cancelled Orders

### Amazon
- `DELETE /api/amazon/unified/financial-event-groups/{financialEventGroup}/balance-charge` — Delete Balance Charge
- `PUT /api/amazon/unified/financial-event-groups/{financialEventGroup}/balance-charge` — Update Balance Charge
- `POST /api/amazon/unified/financial-event-groups/{financialEventGroup}/balance-charge/refresh` — Refresh Balance Charge

### Amazon International Pricing
- `GET /api/v2/sales-channels/{integrationInstance}/prices/marketplace-offers` — List Amazon Marketplace Offers
- `POST /api/v2/sales-channels/{integrationInstance}/prices/marketplace-offers/refresh` — Refresh Amazon Marketplace Offers
- `POST /api/v2/sales-channels/{integrationInstance}/prices/marketplace-offers/restore` — Restore Amazon Marketplace Offers
- `GET /api/v2/sales-channels/{integrationInstance}/prices/marketplaces` — List Amazon Marketplace Pricing
- `PATCH /api/v2/sales-channels/{integrationInstance}/prices/marketplaces/{countryCode}` — Update Amazon Marketplace Pricing
- `GET /api/v2/sales-channels/{integrationInstance}/prices/marketplaces/{countryCode}/sample` — Get Amazon Marketplace Price Sample

### Branding
- `POST /api/admin/portal/branding/assets/from-store-logo` — Copy Store Document Logo to Portal Brand
- `GET /api/admin/portal/branding/stores` — List Portal Brands
- `PUT /api/admin/portal/branding/stores/{store}/slug` — Update Store Portal Link Name

### Fulfillment Orders
- `GET /api/fulfillment-orders/{fulfillmentOrder}/duplicate-candidates` — List Duplicate Candidates
- `POST /api/fulfillment-orders/{fulfillmentOrder}/duplicate-hold/link` — Link Fulfillment Order to Provider Order
- `POST /api/fulfillment-orders/{fulfillmentOrder}/duplicate-hold/override` — Send Held Fulfillment Order Anyway

### Integration Instances
- `GET /api/integration-instances/{integration_instance}/cutover` — Get Provider Cutover
- `PUT /api/integration-instances/{integration_instance}/cutover` — Update Provider Cutover Plan
- `POST /api/integration-instances/{integration_instance}/cutover/cancel` — Cancel Provider Cutover
- `POST /api/integration-instances/{integration_instance}/cutover/complete` — Complete Provider Cutover
- `POST /api/integration-instances/{integration_instance}/cutover/confirm-disconnect` — Confirm Native Integration Disconnected
- `GET /api/integration-instances/{integration_instance}/cutover/preview` — Preview Provider Cutover
- `POST /api/integration-instances/{integration_instance}/cutover/start` — Start Provider Cutover
- `POST /api/integration-instances/{integration_instance}/cutover/sync-orders` — Sync Provider Orders

### Ledger (Accounting v2)
- `PUT /api/ledger/settings/channel-sync/{integrationInstance}/owner` — Set Channel Accounting Owner
- `GET /api/ledger/settlement-deposits` — Get Settlement Deposit Status

### Numeral
- `GET /api/numeral/connection` — Get Numeral Connection Status
- `POST /api/numeral/instances` — Connect Numeral
- `DELETE /api/numeral/instances/{instance}` — Disconnect Numeral
- `GET /api/numeral/instances/{instance}` — Get Numeral Connection
- `PUT /api/numeral/instances/{instance}` — Update Numeral Settings
- `DELETE /api/numeral/instances/{instance}/access-token` — Revoke Numeral Access Token
- `GET /api/numeral/instances/{instance}/access-token` — Get Numeral Access Token
- `POST /api/numeral/instances/{instance}/access-token` — Issue Numeral Access Token
- `POST /api/numeral/instances/{instance}/access-token/rotate` — Rotate Numeral Access Token
- `POST /api/numeral/instances/{instance}/backfill` — Send Numeral Sales History
- `GET /api/numeral/instances/{instance}/backfill/preview` — Preview Numeral History Send
- `GET /api/numeral/instances/{instance}/filings` — List Numeral Filings
- `PUT /api/numeral/instances/{instance}/key` — Replace Numeral API Key
- `GET /api/numeral/instances/{instance}/reconciliation` — Get Numeral Reconciliation
- `GET /api/numeral/instances/{instance}/records` — List Numeral Sync Records
- `POST /api/numeral/instances/{instance}/records/retry` — Bulk Retry Numeral Sync Records
- `GET /api/numeral/instances/{instance}/registrations` — List Numeral Registrations
- `POST /api/numeral/instances/{instance}/registrations/sync` — Sync Numeral Registrations
- `GET /api/numeral/instances/{instance}/summary` — Get Numeral Summary
- `POST /api/numeral/instances/{instance}/test-connection` — Test Numeral Connection
- `GET /api/numeral/product-categories` — List Numeral Product Categories
- `GET /api/numeral/records/{record}` — Get Numeral Sync Record
- `GET /api/numeral/records/{record}/events` — List Numeral Sync Record Events
- `POST /api/numeral/records/{record}/exclude` — Exclude Numeral Sync Record
- `POST /api/numeral/records/{record}/include` — Include Numeral Sync Record
- `POST /api/numeral/records/{record}/resend` — Resend Numeral Sync Record
- `POST /api/numeral/records/{record}/retry` — Retry Numeral Sync Record
- `POST /api/numeral/test` — Test Numeral API Key
- `GET /api/sales-orders/{salesOrder}/numeral` — List Numeral Sync Records for Sales Order
- `POST /api/sales-orders/{salesOrder}/numeral/recalculate` — Recalculate Numeral Tax for Sales Order

### Products
- `POST /api/product-images/recheck-broken` — Re-check Broken Product Images

### Purchase Orders
- `POST /api/purchase-orders/asn/bulk` — Bulk Send Purchase Order ASNs
- `GET /api/purchase-orders/{purchaseOrder}/invoice-currency-rate` — Get Invoice Exchange Rate
- `GET /api/purchase-orders/{purchase_order}/asn/preview` — Preview ASN
- `POST /api/purchase-orders/{purchase_order}/asn/push-changes` — Push ASN Changes
- `POST /api/purchase-orders/{purchase_order}/asn/recheck` — Recheck Held ASN
- `POST /api/purchase-orders/{purchase_order}/asn/unlink` — Unlink ASN

### Quotes
- `POST /api/quotes/price-preview` — Preview Quote Line Prices

### Reporting
- `GET /api/reporting/display-currency-rate` — Get Report Display Currency Rate

### Sales Orders
- `GET /api/sales-orders/{salesOrder}/tax` — Get Sales Order Tax Summary

### Send Planner
- `GET /api/send-planner/coverage/history` — Get Coverage History
- `GET /api/send-plans/{sendPlan}/coverage` — Get Send Plan Coverage
- `POST /api/send-plans/{sendPlan}/lines/{line}/coverage` — Recompute Send Plan Line Coverage

### Session
- `GET /api/portal/page-guides` — Get Page Guides

### ShipHero
- `GET /api/shiphero/integration-instances/{integrationInstance}/asn/spreadsheet-preview` — Get ASN Spreadsheet Preview
- `GET /api/shiphero/integration-instances/{integrationInstance}/asn/spreadsheet-preview/download` — Download ASN Spreadsheet Preview
- `GET /api/shiphero/integration-instances/{integrationInstance}/customer-accounts` — List Customer Accounts
- `GET /api/shiphero/integration-instances/{integration_instance}/purchase-orders` — List ShipHero Purchase Orders
- `GET /api/shiphero/integration-instances/{integration_instance}/purchase-orders/{purchaseOrder}` — Get ShipHero Purchase Order
- `POST /api/shiphero/integration-instances/{integration_instance}/purchase-orders/{purchaseOrder}/refresh` — Refresh ShipHero Purchase Order
- `GET /api/shiphero/integration-instances/{integration_instance}/purchase-orders/{purchaseOrder}/remote` — Get ShipHero Purchase Order From ShipHero
- `GET /api/shiphero/integration-instances/{integration_instance}/vendors` — List ShipHero Vendors

### Shopify
- `GET /api/shopify/{integrationInstance}/metafield-definitions` — List Shopify Metafield Definitions
- `POST /api/shopify/{integrationInstance}/metafield-definitions` — Create Shopify Metafield Definition
- `POST /api/shopify/{integrationInstance}/metafield-definitions/sync` — Sync Shopify Metafield Definitions

### Walmart
- `GET /api/walmart/settlement-mapping-groups` — List Global Settlement Mapping Groups
- `POST /api/walmart/settlement-mapping-groups` — Create Global Settlement Mapping Group
- `POST /api/walmart/settlement-mapping-groups/reorder` — Reorder Global Settlement Mapping Groups
- `DELETE /api/walmart/settlement-mapping-groups/{settlementMappingGroup}` — Delete Global Settlement Mapping Group
- `GET /api/walmart/{integrationInstance}/settlement-finance-settings` — Get Settlement Finance Settings
- `GET /api/walmart/{integrationInstance}/settlement-mapping-groups` — List Settlement Mapping Groups
- `POST /api/walmart/{integrationInstance}/settlement-mapping-groups` — Create Settlement Mapping Group
- `POST /api/walmart/{integrationInstance}/settlement-mapping-groups/reorder` — Reorder Settlement Mapping Groups
- `DELETE /api/walmart/{integrationInstance}/settlement-mapping-groups/{settlementMappingGroup}` — Delete Settlement Mapping Group
- `GET /api/walmart/{integrationInstance}/settlement-transactions` — List Settlement Lines
- `GET /api/walmart/{integrationInstance}/settlement-transactions/filter-options` — Get Settlement Line Filter Options
- `GET /api/walmart/{integrationInstance}/settlement-type-mappings` — List Settlement Type Mappings
- `GET /api/walmart/{integrationInstance}/settlements` — List Settlements
- `GET /api/walmart/{integrationInstance}/settlements/filter-options` — Get Settlement Filter Options
- `POST /api/walmart/{integrationInstance}/settlements/sync` — Sync Settlements
- `GET /api/walmart/{integrationInstance}/settlements/{settlement}` — Get Settlement
- `GET /api/walmart/{integrationInstance}/wfs/conversions` — List Listings to Set Up for WFS
- `POST /api/walmart/{integrationInstance}/wfs/conversions` — Set Up Listings for WFS
- `PATCH /api/walmart/{integrationInstance}/wfs/conversions/products/{product}` — Update Product Details for WFS

_…plus 7 more (see the API reference)._

## Changed

### Branding
- `GET /api/admin/portal/branding` — Get Portal Branding
  - new response code(s): `422`
- `DELETE /api/admin/portal/branding/assets/{type}` — Remove Branding Image
  - new response code(s): `422`

### Reporting
- `GET /api/reporting/profitability/cost-breakdown` — Get Profitability Cost Breakdown
  - new parameter(s): `filter[end_date]`, `filter[start_date]`
- `GET /api/reporting/profitability/drilldown` — Get Profitability Drilldown
  - new parameter(s): `filter[end_date]`, `filter[start_date]`
- `GET /api/reporting/profitability/trend` — Get Profitability Trend
  - new parameter(s): `filter[end_date]`, `filter[start_date]`
- `DELETE /api/reporting/sales-tax/nexus/registrations/{taxNexusRegistration}` — Delete Sales-Tax Registration
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
