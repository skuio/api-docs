---
title: API changes — 2026-10-21
description: This release includes 2 additions, 4 changes, 1 removal. 2 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-10-21
---

This release includes 2 additions, 4 changes, 1 removal. 2 breaking changes — action required.

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

### Inventory Intelligence
- `POST /api/inventory-forecasting/schedules/{schedule}/run` — Run Schedule Now
  - new response code(s): `409`

_Spec version 1.0.0 → 1.0.0._
