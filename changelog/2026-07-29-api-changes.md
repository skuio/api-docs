---
title: API changes — 2026-07-29
description: This release includes 183 additions.
authors: [product-team]
tags: [added]
date: 2026-07-29
---

This release includes 183 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Analytics
- `GET /api/admin/portal/analytics` — Get Portal Analytics

### Applications
- `GET /api/admin/portal/applications` — List Applications
- `POST /api/admin/portal/applications/{application}/approve` — Approve Application
- `POST /api/admin/portal/applications/{application}/reject` — Reject Application

### Approvals
- `GET /api/portal/approvals` — List Approval Queue
- `GET /api/portal/approvals/mine` — List My Pending Approvals

### Authentication
- `GET /api/portal/auth/sso/{company}/callback` — Complete SSO Sign-In
- `GET /api/portal/auth/sso/{company}/redirect` — Start SSO Sign-In

### Billing & Invoices
- `GET /api/portal/account/statement` — Get Account Statement
- `GET /api/portal/invoices` — List Invoices
- `GET /api/portal/invoices/{invoice}` — Get Invoice
- `GET /api/portal/invoices/{invoice}/pdf` — Download Invoice PDF
- `GET /api/portal/payments` — List Payments

### Buyers
- `GET /api/admin/portal/companies/{company}/users` — List Company Buyers
- `PATCH /api/admin/portal/users/{user}` — Update Buyer

### Cart
- `DELETE /api/portal/cart` — Empty Cart
- `GET /api/portal/cart` — Get Cart
- `DELETE /api/portal/cart/lines/{line}` — Remove Cart Line
- `PATCH /api/portal/cart/lines/{line}` — Update Cart Line

### Catalog
- `GET /api/portal/catalog/filters` — Get Catalog Filters
- `GET /api/portal/catalog/products` — List Catalog Products
- `GET /api/portal/catalog/products/{product}` — Get Catalog Product
- `DELETE /api/portal/catalog/products/{product}/notify-me` — Unsubscribe from Back-in-Stock Alert

### Catalogs
- `GET /api/admin/portal/catalogs` — List Catalogs
- `POST /api/admin/portal/catalogs` — Create Catalog
- `DELETE /api/admin/portal/catalogs/{catalog}` — Delete Catalog
- `GET /api/admin/portal/catalogs/{catalog}` — Get Catalog
- `PATCH /api/admin/portal/catalogs/{catalog}` — Update Catalog
- `DELETE /api/admin/portal/catalogs/{catalog}/rules/{rule}` — Delete Catalog Rule

### Checkout & Orders
- `GET /api/portal/addresses` — List Addresses
- `GET /api/portal/orders` — List Orders
- `GET /api/portal/orders/{order}` — Get Order
- `GET /api/portal/orders/{order}/documents/{type}` — Download Order Document
- `GET /api/portal/shipping-methods` — List Shipping Methods

### Companies
- `GET /api/admin/portal/companies` — List Companies
- `GET /api/admin/portal/companies/{company}` — Get Company
- `PATCH /api/admin/portal/companies/{company}` — Update Company

### Lists & Reorder
- `GET /api/portal/lists` — List Saved Lists
- `DELETE /api/portal/lists/{list}` — Delete Saved List
- `GET /api/portal/lists/{list}` — Get Saved List
- `PATCH /api/portal/lists/{list}` — Update Saved List
- `DELETE /api/portal/lists/{list}/lines/{line}` — Remove List Line

### Locations
- `GET /api/admin/portal/companies/{company}/locations` — List Company Locations
- `DELETE /api/admin/portal/companies/{company}/locations/{location}` — Detach Location

### Notifications
- `GET /api/portal/notifications/preferences` — Get Notification Preferences
- `PATCH /api/portal/notifications/preferences` — Update Notification Preferences

### Pricing
- `GET /api/admin/portal/pricing/customer-overrides` — List Price Overrides
- `DELETE /api/admin/portal/pricing/customer-overrides/{override}` — Delete Price Override
- `PATCH /api/admin/portal/pricing/customer-overrides/{override}` — Update Price Override
- `GET /api/admin/portal/pricing/quantity-breaks` — List Quantity Breaks
- `DELETE /api/admin/portal/pricing/quantity-breaks/{quantityBreak}` — Delete Quantity Break
- `PATCH /api/admin/portal/pricing/quantity-breaks/{quantityBreak}` — Update Quantity Break

### Product Substitutions
- `GET /api/product-substitutions` — List Product Substitutions
- `GET /api/product-substitutions/export` — Export Product Substitutions
- `GET /api/product-substitutions/import/template` — Download Substitution Import Template
- `DELETE /api/product-substitutions/{substitutionId}` — Delete Product Substitution
- `GET /api/products/{productId}/substitutions` — List Substitutions for a Product

### Quotes & RFQ
- `GET /api/portal/quotes` — List Quotes
- `GET /api/portal/quotes/{quote}` — Get Quote

### Registration
- `GET /api/portal/register/{token}/status` — Check Application Status

### Rep-Assisted Ordering
- `GET /api/admin/portal/locations/{location}/impersonate` — Impersonate Buyer View

### Returns
- `GET /api/portal/orders/{order}/returnable` — Get Returnable Lines
- `GET /api/portal/returns` — List Returns
- `GET /api/portal/returns/{rma}` — Get Return

### Sales Order Lines
- `GET /api/sales-order-lines/{salesOrderLineId}/swap-suggestions` — List Swap Suggestions for a Line

### Session
- `GET /api/portal/auth/profile` — Get Profile
- `GET /api/portal/me` — Get Current Buyer

### Settings
- `GET /api/admin/portal/companies/{company}/settings` — Get Company Settings
- `GET /api/admin/portal/locations/{location}/settings` — Get Location Settings
- `GET /api/admin/portal/settings` — Get Portal Settings

### ShipBob
- `DELETE /api/shipbob/{instance}` — Delete Instance
- `GET /api/shipbob/{instance}` — Get Instance
- `GET /api/shipbob/{instance}/dashboard` — Get Dashboard Metrics
- `GET /api/shipbob/{instance}/fulfillment-centers` — List Fulfillment Centers
- `GET /api/shipbob/{instance}/inventory` — List Inventory Levels
- `GET /api/shipbob/{instance}/inventory/discrepancies` — List Discrepancies
- `GET /api/shipbob/{instance}/orders` — List Orders
- `GET /api/shipbob/{instance}/orders/search` — Search Orders
- `GET /api/shipbob/{instance}/orders/sync-info` — Get Order Sync Info
- `GET /api/shipbob/{instance}/orders/{order}` — Get Order
- `GET /api/shipbob/{instance}/orders/{order}/raw` — Get Raw Order Data
- `GET /api/shipbob/{instance}/products` — List Products
- `GET /api/shipbob/{instance}/products/{product}` — Get Product
- `GET /api/shipbob/{instance}/products/{product}/raw` — Get Raw Product Data
- `GET /api/shipbob/{instance}/receiving` — List Receiving Orders
- `GET /api/shipbob/{instance}/receiving/{receiving}` — Get Receiving Order
- `GET /api/shipbob/{instance}/receiving/{receiving}/box-labels` — Get Box Labels
- `GET /api/shipbob/{instance}/receiving/{receiving}/raw` — Get Raw Receiving Order Data
- `GET /api/shipbob/{instance}/returns` — List Returns
- `GET /api/shipbob/{instance}/returns/{return}` — Get Return
- `GET /api/shipbob/{instance}/returns/{return}/raw` — Get Raw Return Data
- `GET /api/shipbob/{instance}/shipments` — List Shipments
- `GET /api/shipbob/{instance}/shipments/{shipment}` — Get Shipment
- `GET /api/shipbob/{instance}/shipments/{shipment}/raw` — Get Raw Shipment Data
- `GET /api/shipbob/{instance}/shipments/{shipment}/timeline` — Get Shipment Timeline
- `GET /api/shipbob/{instance}/shipping-methods` — List Shipping Methods
- `GET /api/shipbob/{instance}/shipping-methods/export` — Export Shipping Method Mappings
- `GET /api/shipbob/{instance}/test-connection` — Test Saved Connection
- `GET /api/shipbob/{instance}/webhooks/events` — List Webhook Events
- `GET /api/shipbob/{instance}/webhooks/subscriptions` — List Webhook Subscriptions

_…plus 83 more (see the API reference)._

_Spec version 1.0.0 → 1.0.0._
