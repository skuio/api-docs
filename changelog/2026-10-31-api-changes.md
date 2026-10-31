---
title: API changes — 2026-10-31
description: This release includes 120 additions, 3 changes. 2 breaking changes — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-10-31
---

This release includes 120 additions, 3 changes. 2 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Reference Data (Read-Only)
- **Changed** `GET /api/v2/return-reasons` — List Return Reasons
  - removed parameter(s): `archived`, `limit`, `page`, `search`, `sort`

#### Sales Credits
- **Changed** `GET /api/v2/sales-credits` — List Sales Credits
  - new parameter(s): `per_page`
  - removed parameter(s): `archived`, `excluded[]`, `included[]`, `limit`, `search`, `sort`

## Added

### Amazon Business Pricing
- `GET /api/v2/products/{product}/amazon-business-usages` — List Product Amazon Business Quantity Break Usages
- `GET /api/v2/sales-channels/{integrationInstance}/prices/business` — Get Amazon Business Pricing
- `PATCH /api/v2/sales-channels/{integrationInstance}/prices/business/marketplaces/{countryCode}` — Update Amazon Business Marketplace Owner
- `GET /api/v2/sales-channels/{integrationInstance}/prices/business/offers` — List Amazon Business Offers
- `DELETE /api/v2/sales-channels/{integrationInstance}/prices/business/overrides` — Clear Amazon Business Overrides
- `GET /api/v2/sales-channels/{integrationInstance}/prices/business/overrides` — List Amazon Business Overrides

### Customers
- `GET /api/customers/{customer}/tax-exemption-certificates` — List Customer Tax Exemption Certificates
- `POST /api/customers/{customer}/tax-exemption-certificates` — Create Customer Tax Exemption Certificate
- `GET /api/tax-exemption-certificates` — List Tax Exemption Certificates
- `POST /api/tax-exemption-certificates/export` — Export Tax Exemption Certificates
- `GET /api/tax-exemption-certificates/export/download` — Download Tax Exemption Certificates Export
- `POST /api/tax-exemption-certificates/request-renewal` — Bulk Request Tax Exemption Certificate Renewals
- `GET /api/tax-exemption-certificates/summary` — Get Tax Exemption Certificate Summary
- `GET /api/tax-exemption-certificates/{certificate}` — Get Tax Exemption Certificate
- `GET /api/tax-exemption-certificates/{certificate}/activity` — Get Tax Exemption Certificate Activity
- `POST /api/tax-exemption-certificates/{certificate}/approve` — Approve Tax Exemption Certificate
- `GET /api/tax-exemption-certificates/{certificate}/document` — Download Tax Exemption Certificate Document
- `POST /api/tax-exemption-certificates/{certificate}/document` — Replace Tax Exemption Certificate Document
- `POST /api/tax-exemption-certificates/{certificate}/reject` — Reject Tax Exemption Certificate
- `POST /api/tax-exemption-certificates/{certificate}/renew` — Renew Tax Exemption Certificate
- `POST /api/tax-exemption-certificates/{certificate}/revoke` — Revoke Tax Exemption Certificate

### Inventory Intelligence
- `GET /api/cash-buying/headroom` — Get Weekly Headroom
- `GET /api/cash-buying/position` — Get Cash Position
- `POST /api/cash-buying/position` — Enter Cash Position
- `POST /api/cash-buying/position/read` — Read Accounting Book Balance
- `POST /api/cash-buying/position/{snapshot}/confirm` — Confirm Cash Position
- `POST /api/cash-buying/rank` — Rank Forecast Builds
- `GET /api/cash-buying/reserve-periods` — List Reserve Periods
- `POST /api/cash-buying/reserve-periods` — Create Reserve Period
- `DELETE /api/cash-buying/reserve-periods/{reservePeriod}` — Delete Reserve Period
- `GET /api/cash-buying/settings` — Get Cash Buying Settings
- `GET /api/forecast-runs/{run}/cash-plan` — Get Forecast Run Cash Plan
- `POST /api/forecast-runs/{run}/cash-plan/recut` — Recut Forecast Run Cash Plan
- `PATCH /api/forecast-runs/{run}/lines/{line}/cash-pin` — Pin Forecast Run Line
- `POST /api/inventory-forecasting/otb-guardrail` — Apply Open-to-Buy Across Supplier Builds
- `GET /api/v2/cash-flow/month` — Get Cash Flow Month
- `GET /api/v2/cash-flow/projection` — Get Cash Flow Projection

### Merchandise Planning
- `GET /api/open-to-buy/merchandise-plans/plan-vs-actual` — List Plan vs Actual For A Period
- `GET /api/open-to-buy/merchandise-plans/{merchandisePlan}/overrides` — List Guardrail Overrides
- `POST /api/open-to-buy/merchandise-plans/{merchandisePlan}/overrides` — Create Guardrail Override
- `DELETE /api/open-to-buy/merchandise-plans/{merchandisePlan}/overrides/{override}` — Delete Guardrail Override
- `GET /api/open-to-buy/merchandise-plans/{merchandisePlan}/plan-vs-actual` — Get Plan vs Actual

### POS / Register
- `GET /api/pos/register-sessions/{registerSession}/customers/{customer}/tax-exemption` — Get Customer Tax Exemption at Register

### Price Sync
- `GET /api/v2/sales-channels/{integrationInstance}/prices/runs/{run}/feeds` — List Price Push Run Feeds

### Products
- `GET /api/products/{product}/videos` — List Product Videos
- `POST /api/products/{product}/videos/uploads` — Start Product Video Upload
- `DELETE /api/products/{product}/videos/{video}` — Delete Product Video
- `PATCH /api/products/{product}/videos/{video}` — Update Product Video
- `POST /api/products/{product}/videos/{video}/complete` — Complete Product Video Upload
- `POST /api/products/{product}/videos/{video}/optimize` — Optimize Product Video for TikTok
- `GET /api/v2/products/{product}/variant-stock-grid` — Get Variant Stock Grid
- `GET /api/videos/{video}` — Get Video
- `GET /api/videos/{video}/upload-urls` — Get Video Upload URLs

### Purchase Orders
- `POST /api/purchase-orders/from-document/upload` — Upload Order Document
- `DELETE /api/purchase-orders/from-document/{id}` — Delete Order Document
- `GET /api/purchase-orders/from-document/{id}` — Get Order Document
- `POST /api/purchase-orders/from-document/{id}/create-purchase-order` — Create Draft PO from Order Document
- `GET /api/purchase-orders/from-document/{id}/file` — Download Original Order Document
- `POST /api/purchase-orders/from-document/{id}/rematch` — Re-match Order Document Lines
- `DELETE /api/purchase-orders/{purchaseOrder}/financial-lines/{financialLine}/settle-billing` — Clear PO Cost Line Not Billed Mark
- `POST /api/purchase-orders/{purchaseOrder}/financial-lines/{financialLine}/settle-billing` — Mark PO Cost Line Not Billed
- `GET /api/purchase-orders/{purchase_order}/stale-lines` — Get PO Stale Lines
- `POST /api/purchasing/quick-reorder` — Create Quick Reorder Purchase Orders
- `POST /api/purchasing/quick-reorder/preview` — Preview Quick Reorder

### Reporting
- `GET /api/reports/size-sales` — Get Sales by Size Report
- `GET /api/reports/size-sales/export` — Export Sales by Size Report
- `GET /api/sourcing/sales-by-channel` — Get Sales by Channel

### Returns & RMAs
- `POST /api/return-receipts/quick-damage-capture` — Capture Damaged Unit
- `GET /api/return-receipts/quick-damage-capture/vendor-claim-defaults` — Get Vendor Claim Defaults

### Sales Orders
- `POST /api/sales-orders/{salesOrder}/channel-shipping-labels/retry` — Retry Sales Channel Shipping Label Purchase
- `POST /api/sales-orders/{salesOrder}/channel-shipping-labels/{label}/skip` — Send Without Sales Channel Shipping Label
- `POST /api/sales-orders/{salesOrder}/channel-shipping-labels/{label}/void` — Void Sales Channel Shipping Label

### Size Profiles
- `GET /api/merchandising/size-profiles` — List Size Profiles
- `POST /api/merchandising/size-profiles` — Create Size Profile
- `POST /api/merchandising/size-profiles/derive` — Derive Size Profile From Sales History
- `DELETE /api/merchandising/size-profiles/{sizeProfile}` — Delete Size Profile
- `GET /api/merchandising/size-profiles/{sizeProfile}` — Get Size Profile

### TikTok Posting
- `GET /api/products/{product}/tiktok-posts` — List Product TikTok Posts
- `GET /api/tiktok-posting/accounts` — List TikTok Accounts by Store
- `DELETE /api/tiktok-posting/accounts/oauth/confirm-replace` — Cancel TikTok Account Replacement
- `POST /api/tiktok-posting/accounts/oauth/confirm-replace` — Confirm TikTok Account Replacement
- `POST /api/tiktok-posting/accounts/oauth/init` — Start TikTok Account Connection
- `DELETE /api/tiktok-posting/accounts/{tikTokAccount}` — Disconnect TikTok Account
- `GET /api/tiktok-posting/accounts/{tikTokAccount}` — Get TikTok Account
- `GET /api/tiktok-posting/accounts/{tikTokAccount}/creator-info` — Get TikTok Creator Info
- `POST /api/tiktok-posting/caption-suggestions` — Suggest TikTok Caption
- `GET /api/tiktok-posting/insights` — Get TikTok Insights
- `GET /api/tiktok-posting/posts` — List TikTok Posts
- `POST /api/tiktok-posting/posts` — Create TikTok Post
- `GET /api/tiktok-posting/posts/{tikTokPost}` — Get TikTok Post
- `PATCH /api/tiktok-posting/posts/{tikTokPost}` — Update TikTok Post
- `POST /api/tiktok-posting/posts/{tikTokPost}/approve` — Approve TikTok Post
- `POST /api/tiktok-posting/posts/{tikTokPost}/cancel` — Cancel TikTok Post
- `POST /api/tiktok-posting/posts/{tikTokPost}/duplicate` — Duplicate TikTok Post
- `GET /api/tiktok-posting/posts/{tikTokPost}/metrics` — Get TikTok Post Metrics
- `GET /api/tiktok-posting/settings` — Get TikTok Posting Settings
- `DELETE /api/tiktok-posting/shop-creator/connections/{tikTokShopCreatorConnection}` — Disconnect TikTok Shop Official Account
- `GET /api/tiktok-posting/shop-creator/stores/{store}` — Get Store Shoppable Video Status
- `GET /api/tiktok-posting/shop-creator/stores/{store}/products` — Search TikTok Shop Products for Shoppable Videos

### Walmart
- `GET /api/walmart/{integrationInstance}/sww-label-settings` — Get 3PL Order Label Settings

_…plus 20 more (see the API reference)._

## Changed

### Suppliers
- `GET /api/v2/suppliers` — List Suppliers
  - new parameter(s): `page`, `per_page`

_Spec version 1.0.0 → 1.0.0._
