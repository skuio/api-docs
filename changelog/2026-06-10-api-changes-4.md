---
title: API changes — 2026-06-10
description: This release 13 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-10
---

This release 13 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/reporting/sales-tax/nexus/registrations/{taxNexusRegistration}` — Delete Sales-Tax Registration
- `GET /api/reporting/sales-tax/channel-responsibility` — Get Channel Tax Responsibility
- `GET /api/reporting/sales-tax/liability` — Get Sales Tax Liability
- `GET /api/reporting/sales-tax/liability/export` — Export Sales Tax Liability
- `GET /api/reporting/sales-tax/liability/transactions` — Get Sales Tax Transactions (Drill-Down)
- `GET /api/reporting/sales-tax/nexus` — Get Economic Nexus Exposure
- `GET /api/reporting/sales-tax/nexus/registrations` — List Sales-Tax Registrations
- `GET /api/reporting/sales-tax/nexus/thresholds` — List Economic Nexus Thresholds
- `POST /api/reporting/sales-tax/nexus/recompute` — Recompute Economic Nexus Exposure
- `POST /api/reporting/sales-tax/nexus/registrations` — Create Sales-Tax Registration
- `PUT /api/reporting/sales-tax/channel-responsibility/{integrationInstance}` — Update Channel Tax Responsibility
- `PUT /api/reporting/sales-tax/nexus/registrations/{taxNexusRegistration}` — Update Sales-Tax Registration
- `PUT /api/reporting/sales-tax/nexus/thresholds/{taxNexusThreshold}` — Update Economic Nexus Threshold

_Spec version 1.0.0 → 1.0.0._
