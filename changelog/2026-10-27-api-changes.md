---
title: API changes — 2026-10-27
description: This release includes 47 additions, 4 changes. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-10-27
---

This release includes 47 additions, 4 changes. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Store Email Templates
- **Changed** `GET /api/store-email-templates` — List Store Email Templates
  - new parameter(s): `per_page`
  - removed parameter(s): `limit`

## Added

### Authentication
- `POST /api/portal/view-as/keep-alive` — Keep Staff View Alive

### Branding
- `GET /api/admin/portal/branding` — Get Portal Branding
- `PUT /api/admin/portal/branding` — Update Portal Branding
- `POST /api/admin/portal/branding/assets` — Upload Branding Image
- `DELETE /api/admin/portal/branding/assets/{type}` — Remove Branding Image
- `GET /api/portal/branding` — Get Portal Branding
- `GET /api/portal/branding/{type}` — Get Portal Branding Image

### EasyPost
- `GET /api/easypost/carrier-accounts` — List EasyPost Carrier Accounts
- `GET /api/shipping-estimates/status` — Get Shipping Estimate Status

### Email Assets
- `POST /api/email-assets` — Upload Email Asset
- `DELETE /api/email-assets/{id}` — Delete Email Asset

### Guest Quote Requests
- `GET /api/portal/guest/catalog/products` — List Guest Catalog Products
- `GET /api/portal/guest/quote-form` — Get Guest Quote Form
- `POST /api/portal/quotes/guest` — Request a Quote Without an Account

### Home Page
- `GET /api/admin/portal/home` — Get Portal Home Page
- `PUT /api/admin/portal/home` — Update Portal Home Page

### Quotes
- `GET /api/quotes/{quote}/email-preview` — Get Quote Email Preview
- `GET /api/quotes/{quote}/shipping-estimates` — List Quote Shipping Estimates
- `POST /api/quotes/{quote}/shipping-estimates` — Estimate Quote Shipping
- `POST /api/quotes/{quote}/shipping-estimates/{shippingEstimate}/apply` — Apply Quote Shipping Estimate

### Sales Orders
- `GET /api/sales-orders/{salesOrder}/shipping-estimates` — List Sales Order Shipping Estimates
- `POST /api/sales-orders/{salesOrder}/shipping-estimates` — Estimate Sales Order Shipping
- `POST /api/sales-orders/{salesOrder}/shipping-estimates/{shippingEstimate}/apply` — Apply Sales Order Shipping Estimate
- `PATCH /api/sales-orders/{salesOrder}/shipping-pending-review` — Set Sales Order Shipping Pending Review

### Session
- `GET /api/portal/home` — Get Home Page

### Shipping
- `GET /api/admin/portal/shipping` — Get Portal Shipping Settings
- `PUT /api/admin/portal/shipping` — Update Portal Shipping Settings
- `POST /api/admin/portal/shipping/preview` — Preview Portal Shipping

### Store Email Layouts
- `GET /api/store-email-layouts` — List Brand Layouts
- `POST /api/store-email-layouts` — Create Store Brand Layout
- `DELETE /api/store-email-layouts/{id}` — Delete Store Brand Layout
- `GET /api/store-email-layouts/{id}` — Get Brand Layout
- `PUT /api/store-email-layouts/{id}` — Update Brand Layout
- `POST /api/store-email-layouts/{id}/reset` — Reset Brand Layout
- `GET /api/store-email-layouts/{id}/versions` — List Brand Layout Versions
- `GET /api/store-email-layouts/{id}/versions/{versionId}` — Get Brand Layout Version
- `POST /api/store-email-layouts/{storeId}/ai-edit/stream` — AI Edit Brand Layout (stream)

### Store Email Templates
- `POST /api/store-email-templates/ai-edit/stream` — AI Edit Email Template (stream)
- `GET /api/store-email-templates/defaults` — Get Email Template Default for Context and Event
- `POST /api/store-email-templates/render-preview` — Render Email Template Preview
- `GET /api/store-email-templates/sample-records` — List Email Template Sample Records
- `POST /api/store-email-templates/validate` — Validate Email Template Content
- `GET /api/store-email-templates/{id}/default` — Get Email Template Default
- `POST /api/store-email-templates/{id}/reset` — Reset Email Template to Default
- `POST /api/store-email-templates/{id}/test-send` — Send Test Email Template
- `GET /api/store-email-templates/{id}/versions` — List Email Template Versions
- `GET /api/store-email-templates/{id}/versions/{versionId}` — Get Email Template Version

## Changed

### Checkout & Orders
- `POST /api/portal/checkout` — Submit Checkout
  - new response code(s): `409`

### Rep-Assisted Ordering
- `POST /api/admin/portal/accounts/{customer}/place-order` — Place Order on Behalf
  - new response code(s): `409`

### Store Email Templates
- `PUT /api/store-email-templates/{id}` — Update Store Email Template
  - new response code(s): `409`

_Spec version 1.0.0 → 1.0.0._
