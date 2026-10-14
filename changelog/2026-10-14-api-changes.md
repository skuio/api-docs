---
title: API changes — 2026-10-14
description: This release includes 43 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-10-14
---

This release includes 43 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Applications
- `POST /api/admin/portal/applications/{application}/verify-resale-certificate` — Re-check Resale Certificate

### Authentication
- `POST /api/portal/auth/view-as` — Open Staff View

### Cart
- `PUT /api/portal/cart/mode` — Set Cart Mode
- `POST /api/portal/cart/special-order-lines` — Add Special Order Line
- `DELETE /api/portal/cart/special-order-lines/{specialLine}` — Remove Special Order Line
- `PATCH /api/portal/cart/special-order-lines/{specialLine}` — Update Special Order Line

### Catalog
- `GET /api/portal/catalog/facets` — Get Catalog Facet Counts

### Catalogs
- `POST /api/admin/portal/catalogs/{catalog}/unassign` — Unassign Catalog

### Customers
- `GET /api/customers/{customer}/tax-exemption-coverage` — Get Customer Tax Exemption Coverage

### Pinnacle
- `GET /api/pinnacle/instances/{instance}/orders/{order}/bol` — Download Order Bill of Lading
- `GET /api/pinnacle/instances/{instance}/orders/{order}/labels` — Download Order Labels

### Product Listings
- `GET /api/v2/product-listings/{productListing}/handling-time` — Get Product Listing Handling Time

### Special Order List
- `GET /api/admin/portal/special-order-list` — Get Special Order List
- `PUT /api/admin/portal/special-order-list` — Update Special Order List
- `POST /api/admin/portal/special-order-list/create-sheet` — Create Special Order Sheet
- `GET /api/admin/portal/special-order-list/items` — List Special Order Items
- `POST /api/admin/portal/special-order-list/sync` — Sync Special Order List
- `POST /api/admin/portal/special-order-list/upload/confirm` — Confirm Special Order List Upload
- `POST /api/admin/portal/special-order-list/upload/discard` — Discard Special Order List Upload
- `POST /api/admin/portal/special-order-list/upload/preview` — Preview Special Order List Upload
- `GET /api/admin/portal/special-order-list/uploads/{id}/file` — Download Special Order List Upload File
- `POST /api/admin/portal/special-order-list/use-my-google` — Use My Google Connection
- `GET /api/portal/special-order-list` — Special Order List Summary
- `GET /api/portal/special-order-list/items` — List Special Order Parts

### Staff Margins (View as buyer)
- `GET /api/portal/staff/margins/cart` — Get Staff Cart Margin (View as buyer only)
- `GET /api/portal/staff/margins/products` — Get Staff Margins for Products (View as buyer only)
- `GET /api/portal/staff/margins/special-order-items` — Get Staff Margins for Special Order List Parts (View as buyer only)

### Staff View as Buyer
- `POST /api/admin/portal/accounts/{customer}/view-as` — Start Staff View as Buyer
- `GET /api/admin/portal/accounts/{customer}/view-as-sessions` — List Staff Views
- `POST /api/admin/portal/view-as-sessions/{session}/revoke` — Revoke Staff View

### Trackstar
- `GET /api/trackstar/integration-instances/{integration_instance}/asn/inbound-types` — Get ASN Receipt Types
- `GET /api/trackstar/integration-instances/{integration_instance}/products/push/changed` — List Changed Pushed Products
- `DELETE /api/trackstar/integration-instances/{integration_instance}/products/{product}/mapping` — Remove Product Mapping
- `PUT /api/trackstar/integration-instances/{integration_instance}/products/{product}/mapping` — Map Product to SKU.io Product

### Walmart
- `GET /api/walmart/{integrationInstance}/lag-times` — List Lag Times
- `POST /api/walmart/{integrationInstance}/lag-times/pin` — Pin Lag Times
- `GET /api/walmart/{integrationInstance}/lag-times/preview` — Preview Lag Time Changes
- `POST /api/walmart/{integrationInstance}/lag-times/push-now` — Push Pending Lag Times
- `POST /api/walmart/{integrationInstance}/lag-times/retry-slower` — Retry Slower Lag Times
- `GET /api/walmart/{integrationInstance}/lag-times/runs` — List Lag Time Push Runs
- `GET /api/walmart/{integrationInstance}/lag-times/runs/{run}/lines` — List Lag Time Push Run Lines
- `GET /api/walmart/{integrationInstance}/lag-times/summary` — Get Lag Time Summary
- `POST /api/walmart/{integrationInstance}/lag-times/unpin` — Unpin Lag Times

## Changed

### Catalog
- `GET /api/portal/catalog/products` — List Catalog Products
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
