---
title: API changes — 2026-07-15
description: This release includes 22 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-07-15
---

This release includes 22 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Customers
- `GET /api/customers/{customer}/store-credit` — Get Store Credit Balance
- `POST /api/customers/{customer}/store-credit` — Issue Store Credit
- `GET /api/customers/{customer}/store-credit/history` — Get Store Credit History
- `GET /api/v2/customers/{customer}/contacts` — List Customer Contacts
- `POST /api/v2/customers/{customer}/contacts` — Create Customer Contact
- `GET /api/v2/customers/{customer}/contacts/export` — Export Contacts
- `DELETE /api/v2/customers/{customer}/contacts/{contact}` — Delete Customer Contact
- `GET /api/v2/customers/{customer}/contacts/{contact}` — Get Customer Contact
- `PUT /api/v2/customers/{customer}/contacts/{contact}` — Update Customer Contact
- `POST /api/v2/customers/{customer}/contacts/{contact}/make-primary` — Set Customer Contact as Primary

### Purchase Orders
- `DELETE /api/purchase-orders/{purchase_order}/approval-request` — Withdraw Purchase Order Approval Request
- `POST /api/purchase-orders/{purchase_order}/approval-request/approve` — Approve Purchase Order Approval Request
- `POST /api/purchase-orders/{purchase_order}/approval-request/reject` — Reject Purchase Order Approval Request
- `POST /api/purchase-orders/{purchase_order}/request-approval` — Request Purchase Order Approval

### Sales Reps
- `GET /api/sales-reps/list` — Get Sales Reps for Dropdown

### Suppliers
- `GET /api/v2/suppliers/{supplier}/contacts` — List Supplier Contacts
- `POST /api/v2/suppliers/{supplier}/contacts` — Create Supplier Contact
- `GET /api/v2/suppliers/{supplier}/contacts/export` — Export Contacts
- `DELETE /api/v2/suppliers/{supplier}/contacts/{contact}` — Delete Supplier Contact
- `GET /api/v2/suppliers/{supplier}/contacts/{contact}` — Get Supplier Contact
- `PUT /api/v2/suppliers/{supplier}/contacts/{contact}` — Update Supplier Contact
- `POST /api/v2/suppliers/{supplier}/contacts/{contact}/make-primary` — Set Supplier Contact as Primary

## Changed

### Customers
- `GET /api/customers/lookup` — Customer Lookup (Quick Search)
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
