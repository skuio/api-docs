---
title: API changes — 2026-10-14
description: This release includes 64 additions, 16 changes. 2 breaking changes — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-10-14
---

This release includes 64 additions, 16 changes. 2 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Reporting
- **Changed** `GET /api/reporting/financials-by-brand` — Get Financials by Brand
  - new parameter(s): `filter[end_date]`, `filter[start_date]`
  - removed parameter(s): `limit`, `sort`
  - new response code(s): `422`
- **Changed** `GET /api/reporting/financials-by-sku` — Get Financials by SKU
  - new parameter(s): `filter[end_date]`, `filter[start_date]`
  - removed parameter(s): `limit`, `sort`
  - new response code(s): `422`

## Added

### Applications
- `POST /api/admin/portal/applications/{application}/verify-resale-certificate` — Re-check Resale Certificate

### Approvals
- `GET /api/approval-delegations` — List Approval Delegations
- `POST /api/approval-delegations` — Create Approval Delegation
- `DELETE /api/approval-delegations/{approvalDelegation}` — Revoke Approval Delegation
- `GET /api/approval-policies` — List Approval Policies
- `GET /api/approval-policies/approver-notifications` — List Approver Notifications
- `PUT /api/approval-policies/approver-notifications` — Update Approver Notifications
- `GET /api/approval-policies/approver-options` — List Approver Options
- `GET /api/approval-policies/{documentType}` — Get Approval Policy
- `PUT /api/approval-policies/{documentType}` — Update Approval Policy
- `POST /api/approval-policies/{documentType}/preview` — Preview Approval Routing
- `GET /api/approval-requests` — List Approval Requests
- `POST /api/approval-requests/bulk-approve` — Bulk Approve Approval Requests
- `GET /api/approval-requests/count` — Get Pending Approval Count
- `GET /api/approval-requests/for/{documentType}/{documentId}` — Get Document Approval
- `GET /api/approval-requests/{approvalRequest}` — Get Approval Request
- `POST /api/approval-requests/{approvalRequest}/approve` — Approve Approval Request
- `POST /api/approval-requests/{approvalRequest}/override` — Override Approval Request
- `POST /api/approval-requests/{approvalRequest}/reject` — Reject Approval Request
- `POST /api/approval-requests/{approvalRequest}/remind` — Send Approval Reminder
- `POST /api/approval-requests/{approvalRequest}/reroute` — Re-route Approval Request
- `POST /api/approval-requests/{approvalRequest}/withdraw` — Withdraw Approval Request

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

### API
- `DELETE /api/purchase-orders/{purchase_order}/approval-request` — Withdraw Purchase Order Approval Request
  - new response code(s): `409`
- `POST /api/purchase-orders/{purchase_order}/approval-request/approve` — Approve Purchase Order Approval Request
  - new response code(s): `409`
- `POST /api/purchase-orders/{purchase_order}/approval-request/reject` — Reject Purchase Order Approval Request
  - new response code(s): `409`
- `POST /api/purchase-orders/{purchase_order}/request-approval` — Request Purchase Order Approval
  - new response code(s): `409`

### Catalog
- `GET /api/portal/catalog/products` — List Catalog Products
  - new response code(s): `422`

### Purchase Orders
- `POST /api/purchase-orders/submit` — Bulk Submit Purchase Orders
  - new response code(s): `400`

### Reporting
- `GET /api/reporting/financials-by-product-type` — Get Financials by Product Type
  - new parameter(s): `filter[end_date]`, `filter[start_date]`
  - new response code(s): `422`
- `GET /api/reporting/financials-by-sales-channel` — Get Financials by Sales Channel
  - new parameter(s): `filter[end_date]`, `filter[start_date]`
  - new response code(s): `422`
- `GET /api/reporting/financials-by-sub-sales-channel` — Get Financials by Sub-Sales Channel
  - new parameter(s): `filter[end_date]`, `filter[start_date]`
  - new response code(s): `422`
- `GET /api/reporting/financials-by-supplier` — Get Financials by Supplier
  - new parameter(s): `filter[end_date]`, `filter[start_date]`
  - new response code(s): `422`

### Vendor Deposits
- `POST /api/vendor-deposits` — Create Vendor Deposit
  - new response code(s): `201`
  - removed response code(s): `200`
- `POST /api/vendor-deposits/{vendorDepositId}/approve` — Approve Vendor Deposit
  - new response code(s): `409`
- `POST /api/vendor-deposits/{vendorDepositId}/approve-only` — Approve Vendor Deposit (Without Payment)
  - new response code(s): `409`
- `POST /api/vendor-deposits/{vendorDepositId}/payments` — Record Payment
  - removed response code(s): `200`

_Spec version 1.0.0 → 1.0.0._
