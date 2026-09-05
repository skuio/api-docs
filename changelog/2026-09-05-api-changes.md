---
title: API changes — 2026-09-05
description: This release includes 13 additions.
authors: [product-team]
tags: [added]
date: 2026-09-05
---

This release includes 13 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Amazon
- `GET /api/amazon/unified/awd/inventory-comparison` — Get AWD Inventory Comparison
- `POST /api/amazon/unified/awd/re-anchor/apply` — Apply AWD Re-anchor
- `GET /api/amazon/unified/awd/re-anchor/preview` — Get AWD Re-anchor Preview
- `GET /api/amazon/unified/awd/re-anchor/runs` — List AWD Re-anchor Runs
- `POST /api/amazon/unified/awd/re-anchor/runs/{run}/reverse` — Reverse AWD Re-anchor
- `GET /api/amazon/{integrationInstance}/awd/ledgers/import-runs` — List AWD Ledger Import Runs
- `GET /api/amazon/{integrationInstance}/awd/ledgers/import-runs/summary` — Get AWD Ledger Import Run Summary
- `GET /api/amazon/{integrationInstance}/awd/ledgers/import-runs/{importRun}` — Get AWD Ledger Import Run
- `GET /api/amazon/{integrationInstance}/awd/ledgers/import-runs/{importRun}/rejected-rows/export` — Export AWD Ledger Import Rejected Rows
- `GET /api/amazon/{integrationInstance}/awd/ledgers/import-runs/{importRun}/rows` — List AWD Ledger Import Run Rows

### Reporting
- `GET /api/reports/dropship-order-money` — List Drop-ship Order Money
- `GET /api/reports/dropship-order-money/export` — Export Drop-ship Order Money
- `GET /api/reports/dropship-order-money/summary` — Get Drop-ship Order Money Summary

_Spec version 1.0.0 → 1.0.0._
