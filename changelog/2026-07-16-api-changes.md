---
title: API changes — 2026-07-16
description: This release includes 11 additions.
authors: [product-team]
tags: [added]
date: 2026-07-16
---

This release includes 11 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Data Imports
- `GET /api/v2/data-imports/template` — Download Import Template

### Odoo 3PL
- `GET /api/odoo-3pl/{integration_instance}/shipping-methods` — List Shipping Methods
- `POST /api/odoo-3pl/{integration_instance}/shipping-methods/auto-match` — Auto-Match Shipping Methods
- `PUT /api/odoo-3pl/{integration_instance}/shipping-methods/bulk-map` — Bulk Map Shipping Methods
- `GET /api/odoo-3pl/{integration_instance}/shipping-methods/export` — Export Shipping Method Mappings
- `POST /api/odoo-3pl/{integration_instance}/shipping-methods/import` — Import Shipping Method Mappings
- `POST /api/odoo-3pl/{integration_instance}/shipping-methods/sync` — Sync Shipping Methods
- `PUT /api/odoo-3pl/{integration_instance}/shipping-methods/{shippingMethodId}/mapping` — Update Shipping Method Mapping

### Reference Data (Read-Only)
- `GET /api/v2/incoterms/export` — Export Incoterms
- `GET /api/v2/incoterms/{incoterm}` — Get Incoterm
- `GET /api/v2/incoterms/{incoterm}/activity-log` — Get Incoterm Activity Log

_Spec version 1.0.0 → 1.0.0._
