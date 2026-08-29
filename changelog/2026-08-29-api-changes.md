---
title: API changes — 2026-08-29
description: This release includes 7 additions.
authors: [product-team]
tags: [added]
date: 2026-08-29
---

This release includes 7 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Operation Templates
- `GET /api/manufacturing/operation-templates` — List Operation Templates
- `POST /api/manufacturing/operation-templates` — Create Operation Template
- `GET /api/manufacturing/operation-templates/active` — List Active Operation Templates
- `DELETE /api/manufacturing/operation-templates/{operationTemplate}` — Delete Operation Template
- `GET /api/manufacturing/operation-templates/{operationTemplate}` — Get Operation Template
- `PUT /api/manufacturing/operation-templates/{operationTemplate}` — Update Operation Template

### Sales Orders
- `POST /api/sales-orders/{salesOrder}/release-credit-hold` — Release Credit Hold

_Spec version 1.0.0 → 1.0.0._
