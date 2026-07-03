---
title: API changes — 2026-07-03
description: This release 5 added, 1 changed, 4 removed API endpoint(s).
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-07-03
---

This release 5 added, 1 changed, 4 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/list` — List Draft Plans (Drafts Tab)
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}` — Get Portal Data
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/submit-verification` — Submit Verification
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/verify-all-products` — Verify All Products
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/verify-product` — Verify Product

## Changed

- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/submit-to-amazon` — Submit Plan to Amazon
  - new response code(s): `422`

## Removed

- `GET /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}` — Get Portal Data **(breaking)**
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/submit-verification` — Submit Verification **(breaking)**
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/verify-all-products` — Verify All Products **(breaking)**
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/verify-product` — Verify Product **(breaking)**

_Spec version 1.0.0 → 1.0.0._
