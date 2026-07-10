---
title: API changes — 2026-05-06
description: This release includes 6 additions.
authors: [product-team]
tags: [added]
date: 2026-05-06
---

This release includes 6 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Merged Shipments
- `GET /api/v2/merged-shipments` — List Merged Shipments
- `POST /api/v2/merged-shipments` — Create Merged Shipment
- `POST /api/v2/merged-shipments/eligibility` — Check Merge Eligibility
- `GET /api/v2/merged-shipments/{mergedShipment}` — Show Merged Shipment
- `POST /api/v2/merged-shipments/{mergedShipment}/unmerge` — Unmerge Merged Shipment

### Suppliers
- `POST /api/suppliers/{supplier}/po-sample` — Download PO Sample (CSV/XLSX)

_Spec version 1.0.0 → 1.0.0._
