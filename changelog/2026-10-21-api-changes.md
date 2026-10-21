---
title: API changes — 2026-10-21
description: This release includes 30 additions, 5 changes, 1 removal. 2 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-10-21
---

This release includes 30 additions, 5 changes, 1 removal. 2 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Inventory Intelligence
- **Removed** `GET /api/inventory-forecasting/schedules/limits` — Get Schedule Limits

### Incompatible changes

#### Inventory Intelligence
- **Changed** `DELETE /api/inventory-forecasting/configurations/{configuration}` — Delete Configuration
  - removed parameter(s): `force`
  - new response code(s): `200`
  - removed response code(s): `204`

## Added

### Authentication
- `PATCH /api/me/preferences` — Merge My Preferences

### Launch Roadmap
- `GET /api/launch-plan` — Get Launch Plan
- `PATCH /api/launch-plan` — Update Launch Plan
- `POST /api/launch-plan` — Create Launch Plan
- `GET /api/launch-plan/export` — Export Launch Plan
- `POST /api/launch-plan/import` — Import Launch Plan
- `GET /api/launch-plan/members` — List Launch Plan Members
- `PUT /api/launch-plan/members` — Replace Launch Plan Members
- `PUT /api/launch-plan/profile` — Update Launch Profile
- `POST /api/launch-plan/refresh` — Refresh Launch Plan
- `POST /api/launch-plan/steps` — Add Custom Launch Step
- `DELETE /api/launch-plan/steps/{step}` — Delete Custom Launch Step
- `PATCH /api/launch-plan/steps/{step}` — Update Launch Step
- `DELETE /api/launch-plan/steps/{step}/block` — Unblock Launch Step
- `POST /api/launch-plan/steps/{step}/block` — Block Launch Step
- `POST /api/launch-plan/steps/{step}/comments` — Add Launch Step Comment
- `GET /api/launch-plan/steps/{step}/events` — List Launch Step Activity
- `DELETE /api/launch-plan/steps/{step}/not-applicable` — Restore Launch Step
- `POST /api/launch-plan/steps/{step}/not-applicable` — Mark Launch Step Not Needed
- `POST /api/launch-plan/steps/{step}/reopen` — Reopen Launch Step
- `POST /api/launch-plan/steps/{step}/sign-off` — Sign Off Launch Step
- `POST /api/launch-plan/suggestions/from-notes` — Suggest Launch Plan Changes From Notes
- `POST /api/launch-plan/suggestions/{suggestion}/accept` — Accept Launch Plan Suggestion
- `POST /api/launch-plan/suggestions/{suggestion}/dismiss` — Dismiss Launch Plan Suggestion
- `GET /api/launch-plan/summary` — Get Launch Plan Summary

### Ledger (Accounting v2)
- `GET /api/ledger/settings/channel-sync` — List Channel Sync Explanations
- `GET /api/ledger/settings/channel-sync/order-check` — Check Order Sync
- `GET /api/ledger/settings/channel-sync/{integrationInstance}` — Get Channel Sync Explanation

### Storefront
- `GET /api/storefront/instances/{id}/customers` — List Customers

### Trackstar
- `GET /api/trackstar/integration-instances/{integration_instance}/asn/suppliers` — List ASN Suppliers

## Changed

### Amazon
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/submit-verification` — Submit Verification
  - new response code(s): `409`
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/submit-verification-batch` — Submit Verification (Batch)
  - new response code(s): `409`

### Initial Inventory
- `POST /api/initial-inventory/import` — Import Initial Inventory
  - new response code(s): `409`

### Inventory Intelligence
- `POST /api/inventory-forecasting/schedules/{schedule}/run` — Run Schedule Now
  - new response code(s): `409`

_Spec version 1.0.0 → 1.0.0._
