---
title: API changes — 2026-08-12
description: This release includes 6 additions.
authors: [product-team]
tags: [added]
date: 2026-08-12
---

This release includes 6 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Data Imports
- `DELETE /api/v2/data-imports/{dataImport}` — Delete Data Import

### Suppliers
- `GET /api/suppliers/{supplier}/price-list/documents` — List Price List Documents
- `POST /api/suppliers/{supplier}/price-list/documents` — Upload Price List Document
- `DELETE /api/suppliers/{supplier}/price-list/documents/{document}` — Delete Price List Document
- `PATCH /api/suppliers/{supplier}/price-list/documents/{document}` — Update Price List Document Description
- `GET /api/suppliers/{supplier}/price-list/documents/{document}/file` — Stream Price List Document File

_Spec version 1.0.0 → 1.0.0._
