---
title: API changes — 2026-06-15
description: This release 2 added, 3 changed API endpoint(s).
authors: [product-team]
tags: [added, changed]
date: 2026-06-15
---

This release 2 added, 3 changed API endpoint(s).

<!-- truncate -->

## Added

- `GET /api/integrations` — List Integrations (Picker)
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/refresh-amazon-plan` — Refresh from Amazon

## Changed

- `POST //{domain}/api/shipmyorders/integration-instances` — Create Integration Instance
  - new response code(s): `400`
  - removed response code(s): `200`
- `POST //{domain}/api/shipmyorders/inventory/refresh` — Refresh Inventory
  - new response code(s): `410`
  - removed response code(s): `200`
- `POST /api/integration-instances` — Create Integration Instance
  - new response code(s): `400`

_Spec version 1.0.0 → 1.0.0._
