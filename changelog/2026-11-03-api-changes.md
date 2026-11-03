---
title: API changes — 2026-11-03
description: This release includes 4 additions, 59 changes, 95 removals. 95 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-11-03
---

This release includes 4 additions, 59 changes, 95 removals. 95 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### 3PL
- **Removed** `POST /api/3pl/tokens` — Create 3PL Integration Token
- **Removed** `DELETE /api/3pl/tokens/{integrationInstance}` — Delete 3PL Integration Token

#### Airtable
- **Removed** `GET /api/airtable/authorize` — Get OAuth Authorize URL

#### Amazon
- **Removed** `GET /api/amazon/mappings/available-fields` — Get available fields
- **Removed** `GET /api/amazon/{integrationInstance}/get-authorization-url` — Get Authorization URL

#### API Shipping Provider
- **Removed** `GET /api/api-shipping-providers/{provider-id}/tokens` — List Tokens
- **Removed** `POST /api/api-shipping-providers/{provider-id}/tokens` — Generate Token
- **Removed** `DELETE /api/api-shipping-providers/{provider-id}/tokens/{token-id}` — Revoke Token

#### Authentication
- **Removed** `GET /api/auth/alerts` — Get Alerts
- **Removed** `PUT /api/auth/password` — Update Password
- **Removed** `GET /api/auth/profile` — Get Profile
- **Removed** `PUT /api/auth/profile` — Update Profile
- **Removed** `DELETE /api/auth/token` — Sign Out of All Sessions (Global Logout)
- **Removed** `GET /api/auth/unread-notifications` — Get Unread Notifications
- **Removed** `PUT /api/auth/{id}/read-notification` — Mark Notification as Read
- **Removed** `GET /api/me/preferences` — Get My Preferences
- **Removed** `PATCH /api/me/preferences` — Merge My Preferences
- **Removed** `PUT /api/me/preferences` — Update My Preferences

#### BigCommerce
- **Removed** `GET /api/big-commerce/{integrationInstance}/get-authorization-url` — Get Authorization URL

#### Channel Partners
- **Removed** `GET /api/channel-partners/{id}/tokens` — List API Tokens
- **Removed** `POST /api/channel-partners/{id}/tokens` — Generate API Token
- **Removed** `DELETE /api/channel-partners/{id}/tokens/{id2}` — Revoke API Token
- **Removed** `POST /api/channel/tokens` — Create Channel API Token

#### Dashboard
- **Removed** `GET /api/v2/dashboard/widget/{key}/data` — Widget Data
- **Removed** `GET /api/v2/dashboard/widgets` — Widget Catalog

#### eBay
- **Removed** `GET /api/ebay/{integrationInstance}/get-authorization-url` — Get eBay Authorization URL

#### Etsy
- **Removed** `POST /api/etsy/instances/{integrationInstance}/authorization-url` — Get Etsy Authorization URL
- **Removed** `GET /api/etsy/oauth/config` — Get Etsy OAuth Configuration

#### Faire
- **Removed** `GET /api/faire/instances/{integrationInstance}/authorization-url` — Get Authorization URL
- **Removed** `GET /api/faire/oauth/config` — Get OAuth Config

#### Feature Flags
- **Removed** `GET /api/features` — Get Feature Flags

#### Google Sheets
- **Removed** `POST /api/v2/google/connection/initiate` — Connect Google

#### Instances
- **Removed** `GET /api/square/instances/{squareIntegrationInstance}/oauth/authorize-url` — Get OAuth Authorize URL

#### Ledger (Accounting v2)
- **Removed** `PUT /api/ledger/payment-posting/payment-types` — Update Payment Type Ledger Accounts

#### Mercury
- **Removed** `GET /api/mercury/instances/initialize` — Initialize Mercury Connection

#### Misc
- **Removed** `GET /api/app-settings` — App Settings
- **Removed** `POST /api/auth/logout` — Logout
- **Removed** `GET /api/enums` — List Enums
- **Removed** `GET /api/search` — Global Search
- **Removed** `GET /api/user-api` — List User API Keys
- **Removed** `POST /api/user-api` — Create API Key
- **Removed** `DELETE /api/user-api/{token}` — Delete API Key

#### Numeral
- **Removed** `POST /api/numeral/instances/{instance}/access-token` — Issue Numeral Access Token
- **Removed** `POST /api/numeral/instances/{instance}/access-token/rotate` — Rotate Numeral Access Token

#### PayPal
- **Removed** `POST /api/paypal/integrations/{id}/authorize` — Start PayPal Authorization

#### Pinnacle
- **Removed** `GET /api/pinnacle/instances/{instance}/webhook` — Get Webhook Endpoint
- **Removed** `POST /api/pinnacle/instances/{instance}/webhook/rotate-key` — Rotate Webhook Key

#### QuickBooks Online
- **Removed** `POST /api/qbo/integrations/complete` — Complete OAuth Setup
- **Removed** `POST /api/qbo/integrations/initialize` — Initialize OAuth

#### Rep-Assisted Ordering
- **Removed** `GET /api/admin/portal/accounts/{customer}/impersonate` — Impersonate Buyer View

#### Roles & Permissions
- **Removed** `POST /api/roles` — Create Role
- **Removed** `DELETE /api/roles/{role}` — Delete Role
- **Removed** `PUT /api/roles/{role}` — Update Role
- **Removed** `PUT /api/users/roles/bulk` — Bulk Update User Roles
- **Removed** `PUT /api/users/{user}/roles` — Assign Roles to User

#### ShipRush
- **Removed** `POST /api/shiprush/instances` — Create Integration Instance
- **Removed** `POST /api/shiprush/instances/{integration_instance}/regenerate-credentials` — Regenerate Credentials

#### Shopify
- **Removed** `GET /api/shopify/config` — Get OAuth Config
- **Removed** `GET /api/shopify/mappings/available-fields` — List Available Mapping Fields
- **Removed** `GET /api/shopify/{integrationInstance}/authorization-url` — Get Authorization URL
- **Removed** `GET /api/shopify/{integrationInstance}/setup` — Get Shopify Setup State
- **Removed** `POST /api/shopify/{integrationInstance}/setup/defer` — Defer Shopify Setup

#### Special Order List
- **Removed** `POST /api/admin/portal/special-order-list/use-my-google` — Use My Google Connection

#### SPS Commerce
- **Removed** `POST /api/spscommerce/integrations/complete` — Complete SPS Commerce Integration Setup
- **Removed** `POST /api/spscommerce/integrations/initialize` — Initialize SPS Commerce OAuth Flow

#### Staff View as Buyer
- **Removed** `POST /api/admin/portal/accounts/{customer}/view-as` — Start Staff View as Buyer
- **Removed** `GET /api/admin/portal/accounts/{customer}/view-as-sessions` — List Staff Views
- **Removed** `POST /api/admin/portal/view-as-sessions/{session}/revoke` — Revoke Staff View

#### Storefront
- **Removed** `GET /api/storefront/connect/init` — Start Store Connection

#### Stripe
- **Removed** `POST /api/stripe/integrations/{id}/authorize` — Start Authorization (OAuth)

#### Temu
- **Removed** `GET /api/temu/config` — Get Config
- **Removed** `POST /api/temu/oauth/complete` — Complete OAuth
- **Removed** `POST /api/temu/oauth/initialize` — Initialize OAuth
- **Removed** `GET /api/temu/oauth/status` — Get OAuth Status
- **Removed** `GET /api/temu/{integrationInstance}/get-authorization-url` — Get Authorization URL
- **Removed** `POST /api/temu/{integrationInstance}/reconnect` — Reconnect Integration

#### TikTok Posting
- **Removed** `DELETE /api/tiktok-posting/accounts/oauth/confirm-replace` — Cancel TikTok Account Replacement
- **Removed** `POST /api/tiktok-posting/accounts/oauth/confirm-replace` — Confirm TikTok Account Replacement
- **Removed** `POST /api/tiktok-posting/accounts/oauth/init` — Start TikTok Account Connection
- **Removed** `DELETE /api/tiktok-posting/accounts/{tikTokAccount}` — Disconnect TikTok Account
- **Removed** `GET /api/tiktok-posting/settings` — Get TikTok Posting Settings
- **Removed** `PUT /api/tiktok-posting/settings` — Update TikTok Posting Settings
- **Removed** `DELETE /api/tiktok-posting/shop-creator/connections/{tikTokShopCreatorConnection}` — Disconnect TikTok Shop Official Account
- **Removed** `POST /api/tiktok-posting/shop-creator/oauth/init` — Start TikTok Shop Official Account Connection

#### TikTok Shop
- **Removed** `GET /api/tiktok-shop/config` — Get Config
- **Removed** `GET /api/tiktok-shop/mappings/available-fields` — Get Available Fields
- **Removed** `GET /api/tiktok-shop/oauth/init` — OAuth Init

#### Trackstar
- **Removed** `POST /api/trackstar/connections/preview` — Preview Connection Name

#### Users
- **Removed** `POST /api/users/store-user` — Invite User
- **Removed** `DELETE /api/users/{user}` — Delete (Deactivate) / Restore User
- **Removed** `PUT /api/users/{user}` — Update User
- **Removed** `POST /api/users/{user}/resend-invite` — Resend User Invite

#### Walmart
- **Removed** `GET /api/walmart/{integrationInstance}/oauth/authorization-url` — Get Authorization URL

#### WooCommerce
- **Removed** `GET /api/woo-commerce/{integration_instance}/get-authorization-url` — Get Authorization URL

#### Xero
- **Removed** `GET /api/xero/authorize` — Generate OAuth URL

## Added

### Amazon
- `POST /api/amazon/{integrationInstance}/awd/ledgers/departure-destinations/{awdLedger}` — Confirm AWD Departure Destination

### Purchase Orders
- `GET /api/purchase-orders/{purchaseOrder}/cash-flow` — Get Purchase Order Cash Flow

### Shopify
- `GET /api/shopify/{integrationInstance}/payout-accounting-setup` — Get Payout Accounting Setup
- `POST /api/shopify/{integrationInstance}/payout-accounting-setup/accounts` — Create Payout Setup Account

## Changed

### Amazon
- `GET /api/amazon/{integrationInstance}/draft-inbound-plans/fulfillment-portal/{token}` — Get Portal Payload (3PL Portal)
  - removed response code(s): `401`, `403`
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/fulfillment-portal/{token}/acknowledge` — Acknowledge Fulfillment Order (3PL Portal)
  - removed response code(s): `401`, `403`
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/fulfillment-portal/{token}/box-contents` — Submit Box Contents (3PL Portal)
  - removed response code(s): `401`, `403`
- `GET /api/amazon/{integrationInstance}/draft-inbound-plans/fulfillment-portal/{token}/documents/{document}/download` — Download Portal Document (3PL Portal)
  - removed response code(s): `401`, `403`
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/fulfillment-portal/{token}/fnsku-labels` — Generate FNSKU Labels (3PL Portal)
  - removed response code(s): `401`, `403`
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/fulfillment-portal/{token}/kits-built` — Confirm Kits Built (3PL Portal)
  - removed response code(s): `401`, `403`
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/fulfillment-portal/{token}/pallets` — Submit Pallets (3PL Portal)
  - removed response code(s): `401`, `403`
- `GET /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}` — Get Portal Data
  - removed response code(s): `401`, `403`
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/submit-verification` — Submit Verification
  - removed response code(s): `401`, `403`
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/submit-verification-batch` — Submit Verification (Batch)
  - removed response code(s): `401`, `403`
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/verify-all-products` — Verify All Products
  - removed response code(s): `401`, `403`
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/verify-product` — Verify Product
  - removed response code(s): `401`, `403`

### Attachments
- `GET /api/support/attachments/{attachment}/inline` — Inline Support Attachment (signed URL)
  - removed response code(s): `401`

### Authentication
- `GET /api/auth/refresh` — Refresh Token
  - removed response code(s): `401`, `403`
- `POST /api/portal/auth/accept-invite` — Accept Invitation
  - removed response code(s): `401`, `403`
- `POST /api/portal/auth/forgot-password` — Request Password Reset
  - removed response code(s): `401`, `403`
- `POST /api/portal/auth/login` — Log In
  - removed response code(s): `403`
- `POST /api/portal/auth/otp/request` — Request Login Code
  - removed response code(s): `401`, `403`
- `POST /api/portal/auth/otp/verify` — Verify Login Code
  - removed response code(s): `401`, `403`
- `POST /api/portal/auth/reset-password` — Reset Password
  - removed response code(s): `401`, `403`
- `GET /api/portal/auth/sso/{company}/callback` — Complete SSO Sign-In
  - removed response code(s): `401`, `403`
- `GET /api/portal/auth/sso/{company}/redirect` — Start SSO Sign-In
  - removed response code(s): `401`, `403`
- `POST /api/portal/auth/view-as` — Open Staff View
  - removed response code(s): `401`, `403`
- `POST /api/portal/auth/view-as/end` — End Staff View (tab closed)
  - removed response code(s): `401`, `403`

### Branding
- `GET /api/portal/branding` — Get Portal Branding
  - removed response code(s): `401`, `403`
- `GET /api/portal/branding/{type}` — Get Portal Branding Image
  - removed response code(s): `401`, `403`

### Etsy
- `POST /api/webhooks/etsy` — Receive Etsy Webhook
  - removed response code(s): `403`

### Faire
- `POST /api/webhooks/faire` — Receive Faire Webhook
  - removed response code(s): `401`, `403`

### Guest Quote Requests
- `GET /api/portal/guest/catalog/products` — List Guest Catalog Products
  - removed response code(s): `401`, `403`
- `GET /api/portal/guest/quote-form` — Get Guest Quote Form
  - removed response code(s): `401`, `403`
- `POST /api/portal/quotes/guest` — Request a Quote Without an Account
  - removed response code(s): `401`, `403`

### Misc
- `POST /api/account-setup` — Account Setup
  - removed response code(s): `401`, `403`

### OAuth
- `POST /api/magento2/oauth/callback` — OAuth Callback
  - removed response code(s): `401`, `403`

### PayPal
- `GET /api/paypal/oauth/callback` — Complete PayPal Authorization (OAuth Callback)
  - removed response code(s): `401`, `403`
- `GET /api/public/paypal/pay/{token}` — Get Public Pay Page
  - removed response code(s): `401`, `403`
- `POST /api/public/paypal/pay/{token}/capture` — Capture Public Pay Page Payment
  - removed response code(s): `401`, `403`
- `POST /api/public/paypal/pay/{token}/checkout` — Create Public Pay Page Checkout
  - removed response code(s): `401`, `403`
- `POST /api/webhooks/paypal` — Receive PayPal Platform Webhook
  - removed response code(s): `401`, `403`

### Purchase Orders
- `GET /api/purchase-orders/{purchaseOrder}/return-metrics` — Get Purchase Order Return Metrics
  - new response code(s): `422`

### Quotes
- `GET /api/public/quotes/{token}` — Get Customer Quote
  - removed response code(s): `401`, `403`
- `POST /api/public/quotes/{token}/accept` — Accept Customer Quote
  - removed response code(s): `401`, `403`
- `POST /api/public/quotes/{token}/comment` — Add Customer Quote Comment
  - removed response code(s): `401`, `403`
- `POST /api/public/quotes/{token}/decline` — Decline Customer Quote
  - removed response code(s): `401`, `403`
- `GET /api/public/quotes/{token}/documents/{attachment}` — Download Customer Quote Document
  - removed response code(s): `401`, `403`
- `GET /api/public/quotes/{token}/pdf` — Get Customer Quote PDF
  - removed response code(s): `401`, `403`

### Registration
- `POST /api/portal/register` — Apply for a Wholesale Account
  - removed response code(s): `401`, `403`
- `GET /api/portal/register/{token}/status` — Check Application Status
  - removed response code(s): `401`, `403`

### Shopify
- `GET /api/shopify/install/{claimToken}` — Show Install (Claim Page)
  - removed response code(s): `401`, `403`
- `POST /api/shopify/install/{claimToken}/claim` — Claim Install (Attach to Existing Workspace)
  - removed response code(s): `403`

### Square
- `POST /api/webhooks/square` — Receive webhook
  - removed response code(s): `401`, `403`

### Starshipit
- `POST /api/webhooks/starshipit` — Receive Starshipit Webhook (Legacy URL)
  - removed response code(s): `401`, `403`
- `POST /api/webhooks/{integration_instance}/starshipit` — Receive Starshipit Tracking Webhook
  - removed response code(s): `403`

### Stripe
- `POST /api/webhooks/stripe` — Platform Webhook
  - removed response code(s): `401`, `403`

### Walmart
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}` — Portal: View Packet
  - removed response code(s): `401`, `403`
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/acknowledge` — Portal: Acknowledge
  - removed response code(s): `401`, `403`
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/documents/{document}/download` — Portal: Download Document
  - removed response code(s): `401`, `403`
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/item-labels` — Portal — Print WFS GTIN Item Labels (public)
  - removed response code(s): `401`, `403`
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/kits-built` — Portal: Confirm Kits Built
  - removed response code(s): `401`, `403`
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/fulfillment-portal/{token}/unit-mix.csv` — Portal — Download WFS Unit-Mix Spreadsheet (CSV, public)
  - removed response code(s): `401`, `403`

_Spec version 1.0.0 → 1.0.0._
