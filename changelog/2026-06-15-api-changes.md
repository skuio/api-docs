---
title: API changes — 2026-06-15
description: This release 2 changed API endpoint(s).
authors: [product-team]
tags: [changed]
date: 2026-06-15
---

This release 2 changed API endpoint(s).

<!-- truncate -->

## Changed

- `POST /api/subscription-offerings/{subscription_offering}/product-listings/{product_listing}/link` — Link Product Listing
  - new response code(s): `422`
- `POST /api/subscription-offerings/{subscription_offering}/product-listings/{product_listing}/unlink` — Unlink Product Listing
  - new response code(s): `400`, `422`

_Spec version 1.0.0 → 1.0.0._
