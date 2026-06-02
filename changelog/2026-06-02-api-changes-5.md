---
title: API changes — 2026-06-02
description: This release 5 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-02
---

This release 5 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE //{domain}/api/amazon/{integrationInstance}/shipping-method-mappings/{mapping}` — Delete Shipping Method Mapping
- `GET //{domain}/api/amazon/{integrationInstance}/shipping-method-mappings` — List Shipping Method Mappings
- `GET //{domain}/api/amazon/{integrationInstance}/shipping-method-mappings/export` — Export Shipping Method Mappings (CSV)
- `POST //{domain}/api/amazon/{integrationInstance}/shipping-method-mappings/import` — Import Shipping Method Mappings (CSV)
- `PUT //{domain}/api/amazon/{integrationInstance}/shipping-method-mappings` — Save Shipping Method Mappings (bulk upsert)

_Spec version 1.0.0 → 1.0.0._
