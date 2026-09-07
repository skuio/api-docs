---
title: API changes — 2026-09-07
description: This release includes 18 additions, 1 change, 21 removals. 21 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-09-07
---

This release includes 18 additions, 1 change, 21 removals. 21 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Buyers
- **Removed** `GET /api/admin/portal/companies/{company}/users` — List Company Buyers
- **Removed** `POST /api/admin/portal/companies/{company}/users/invite` — Invite Buyer
- **Removed** `POST /api/admin/portal/customers/{customer}/invite-buyer` — Invite Customer as Buyer

#### Companies
- **Removed** `GET /api/admin/portal/companies` — List Companies
- **Removed** `POST /api/admin/portal/companies` — Create Company
- **Removed** `GET /api/admin/portal/companies/{company}` — Get Company
- **Removed** `PATCH /api/admin/portal/companies/{company}` — Update Company
- **Removed** `POST /api/admin/portal/companies/{company}/disable` — Disable Company
- **Removed** `POST /api/admin/portal/companies/{company}/enable` — Enable Company
- **Removed** `POST /api/admin/portal/companies/{company}/resend-invites` — Resend Company Invites

#### Locations
- **Removed** `GET /api/admin/portal/companies/{company}/locations` — List Company Locations
- **Removed** `POST /api/admin/portal/companies/{company}/locations` — Attach Location
- **Removed** `DELETE /api/admin/portal/companies/{company}/locations/{location}` — Detach Location
- **Removed** `GET /api/admin/portal/locations/{location}/feed-keys` — List Location Feed Links

#### Rep-Assisted Ordering
- **Removed** `GET /api/admin/portal/locations/{location}/impersonate` — Impersonate Buyer View
- **Removed** `POST /api/admin/portal/locations/{location}/place-order` — Place Order on Behalf
- **Removed** `POST /api/admin/portal/locations/{location}/push-cart` — Push Cart to Buyer

#### Settings
- **Removed** `GET /api/admin/portal/companies/{company}/settings` — Get Company Settings
- **Removed** `PUT /api/admin/portal/companies/{company}/settings` — Update Company Settings
- **Removed** `GET /api/admin/portal/locations/{location}/settings` — Get Location Settings
- **Removed** `PUT /api/admin/portal/locations/{location}/settings` — Update Location Settings

## Added

### Accounts
- `GET /api/admin/portal/accounts` — List Portal Accounts
- `GET /api/admin/portal/accounts/{customer}` — Get Portal Account
- `POST /api/admin/portal/accounts/{customer}/disable` — Disable Portal Account
- `POST /api/admin/portal/accounts/{customer}/enable` — Enable Portal Account
- `POST /api/admin/portal/accounts/{customer}/resend-invites` — Resend Account Invites

### Buyers
- `GET /api/admin/portal/accounts/{customer}/buyers` — List Account Buyers
- `POST /api/admin/portal/accounts/{customer}/buyers/invite` — Invite Buyer

### Inventory Feed Links
- `GET /api/admin/portal/accounts/{customer}/feed-keys` — List Account Feed Links

### Rep-Assisted Ordering
- `GET /api/admin/portal/accounts/{customer}/impersonate` — Impersonate Buyer View
- `POST /api/admin/portal/accounts/{customer}/place-order` — Place Order on Behalf
- `POST /api/admin/portal/accounts/{customer}/push-cart` — Push Cart to Buyer

### Reporting
- `GET /api/reporting/sales-rep-commissions/group-commissions` — Get Commissions by Group
- `GET /api/reporting/sales-rep-commissions/monthly-breakdown-by-group` — Get Monthly Breakdown by Group
- `GET /api/reporting/sales-rep-commissions/monthly-breakdown-by-rep` — Get Monthly Breakdown by Rep
- `GET /api/reporting/sales-rep-commissions/performance` — List Sales Rep Performance
- `GET /api/reporting/sales-rep-commissions/performance-summary` — Get Performance Summary

### Settings
- `GET /api/admin/portal/accounts/{customer}/settings` — Get Account Settings
- `PUT /api/admin/portal/accounts/{customer}/settings` — Update Account Settings

## Changed

### ShipHero
- `POST /api/shiphero/integration-instances/{integration_instance}/inventory/refresh` — Refresh Inventory
  - new response code(s): `202`, `409`
  - removed response code(s): `200`

_Spec version 1.0.0 → 1.0.0._
