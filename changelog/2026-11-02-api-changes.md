---
title: API changes — 2026-11-02
description: This release includes 54 additions, 3 changes. 2 breaking changes — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-11-02
---

This release includes 54 additions, 3 changes. 2 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Amazon
- **Changed** `GET /api/amazon/unified/settlement-type-mappings` — List Type Mappings
  - removed parameter(s): `page`, `per_page`
- **Changed** `GET /api/amazon/{integrationInstance}/finances/settlement-data/type-mappings` — Get Type Mappings
  - removed parameter(s): `page`, `per_page`

## Added

### Amazon
- `POST /api/amazon/unified/settlement-type-mappings/suggest-tax` — Suggest Settlement Tax Mappings
- `POST /api/amazon/unified/settlement-type-mappings/{id}/acknowledge-tax` — Acknowledge Settlement Tax Mapping

### Amazon Business Pricing
- `GET /api/v2/sales-channels/{integrationInstance}/prices/business/offers/matching` — List All Matching Amazon Business Offers

### Cost Categories
- `GET /api/cost-categories/lookup/allocation-data-quality` — Get Allocation Data Quality
- `GET /api/v2/cost-categories/duty-line-candidates` — List Uncategorised Duty Bill Lines
- `POST /api/v2/cost-categories/duty-line-candidates/apply` — Apply Customs Duty Category to Bill Lines

### eBay
- `GET /api/ebay/{integrationInstance}/payout-type-mappings/export` — Export eBay Payout Type Mappings
- `POST /api/ebay/{integrationInstance}/payout-type-mappings/import` — Import eBay Payout Type Mappings
- `POST /api/ebay/{integrationInstance}/payout-type-mappings/suggest-tax` — Suggest Payout Tax Mappings
- `POST /api/ebay/{integrationInstance}/payout-type-mappings/{typeMapping}/acknowledge-tax` — Acknowledge Payout Tax Mapping

### Inbound Shipments
- `GET /api/inbound-shipments/{inbound_shipment}/landed-cost-accruals` — Get Inbound Shipment Landed Cost Accruals
- `POST /api/landed-cost-accruals/release` — Release Landed Cost Accrual
- `POST /api/landed-cost-accruals/releases/{release}/undo` — Undo Landed Cost Accrual Release
- `POST /api/landed-costs/allocation-preview` — Preview Landed Cost Allocation

### Ledger (Accounting v2)
- `POST /api/ledger/facilitator-tax/adopt` — Adopt Facilitator Tax Clearing Treatment
- `POST /api/ledger/facilitator-tax/clearing-account` — Set Up Facilitator Tax Clearing Account
- `GET /api/ledger/facilitator-tax/impact` — Get Facilitator Tax Impact Report
- `GET /api/ledger/facilitator-tax/impact/export` — Export Facilitator Tax Impact Report
- `POST /api/ledger/facilitator-tax/repair` — Repair Facilitator Tax
- `GET /api/ledger/facilitator-tax/repairs` — List Facilitator Tax Repairs
- `POST /api/ledger/facilitator-tax/revert` — Revert Facilitator Tax Clearing Treatment
- `GET /api/ledger/facilitator-tax/status` — Get Facilitator Tax Status
- `GET /api/ledger/payment-posting` — Get Payment Posting Settings
- `PUT /api/ledger/payment-posting/payment-types` — Update Payment Type Ledger Accounts
- `POST /api/ledger/payment-posting/preview` — Preview Payment Posting Start
- `POST /api/ledger/payment-posting/start` — Start Payment Posting
- `GET /api/ledger/reports/accrued-landed-cost` — List Accrued Landed Cost
- `GET /api/ledger/reports/accrued-landed-cost/summary` — Get Accrued Landed Cost Summary
- `GET /api/ledger/reports/payout-channel-order-ar` — Get Payout-Channel Order AR Summary
- `GET /api/ledger/reports/payout-channel-order-ar/{salesChannel}/entries` — List Payout-Channel Order AR Entries
- `POST /api/ledger/reports/payout-channel-order-ar/{salesChannel}/repair` — Repair Payout-Channel Order AR
- `POST /api/ledger/reports/payout-channel-order-ar/{salesChannel}/void-provider` — Void Payout-Channel Order Invoices in Accounting System
- `PUT /api/ledger/settings/channel-sync/{integrationInstance}/settlement-revenue` — Set Channel Settlement Revenue
- `GET /api/ledger/settings/channel-sync/{integrationInstance}/settlement-revenue/preview` — Preview Channel Settlement Revenue Switch
- `POST /api/ledger/settings/granularity/preview` — Preview Granularity Change
- `GET /api/ledger/settlement-split/parts` — Get Settlement Month-End Parts
- `GET /api/ledger/settlement-split/settings/{integrationInstance}` — Get Settlement Month-End Split Setting
- `PUT /api/ledger/settlement-split/settings/{integrationInstance}` — Update Settlement Month-End Split Setting

### Purchase Invoices
- `POST /api/purchase-invoices/{purchaseInvoice}/confirm-invoice-number` — Confirm Purchase Invoice Number

### Purchase Orders
- `GET /api/purchase-orders/{purchase_order}/landed-cost-accruals` — Get Purchase Order Landed Cost Accruals

### Shopify
- `GET /api/shopify/{integrationInstance}/payout-type-mappings/export` — Export Shopify Payout Type Mappings
- `POST /api/shopify/{integrationInstance}/payout-type-mappings/import` — Import Shopify Payout Type Mappings
- `POST /api/shopify/{integrationInstance}/payout-type-mappings/suggest-tax` — Suggest Payout Tax Mappings
- `POST /api/shopify/{integrationInstance}/payout-type-mappings/{typeMapping}/acknowledge-tax` — Acknowledge Payout Tax Mapping

### Temu
- `GET /api/temu/{integrationInstance}/payout-type-mappings/export` — Export Temu Payout Type Mappings
- `POST /api/temu/{integrationInstance}/payout-type-mappings/import` — Import Temu Payout Type Mappings
- `POST /api/temu/{integrationInstance}/payouts/import` — Import Statements
- `POST /api/temu/{integrationInstance}/payouts/import/preview` — Preview Statement Import

### TikTok Shop
- `GET /api/tiktok-shop/{integrationInstance}/payout-type-mappings/export` — Export TikTok Shop Payout Type Mappings
- `POST /api/tiktok-shop/{integrationInstance}/payout-type-mappings/import` — Import TikTok Shop Payout Type Mappings

### Walmart
- `GET /api/walmart/{integrationInstance}/settlement-type-mappings/export` — Export Walmart Settlement Type Mappings
- `POST /api/walmart/{integrationInstance}/settlement-type-mappings/import` — Import Walmart Settlement Type Mappings
- `POST /api/walmart/{integrationInstance}/settlement-type-mappings/suggest-tax` — Suggest Settlement Tax Mappings
- `POST /api/walmart/{integrationInstance}/settlement-type-mappings/{typeMapping}/acknowledge-tax` — Acknowledge Settlement Tax Mapping

## Changed

### Ledger (Accounting v2)
- `PUT /api/ledger/settings/granularity` — Update Granularity Matrix
  - removed response code(s): `404`

_Spec version 1.0.0 → 1.0.0._
