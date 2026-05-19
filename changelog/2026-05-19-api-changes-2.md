---
title: API changes — 2026-05-19
description: This release 2 changed API endpoint(s).
authors: [product-team]
tags: [changed, breaking]
date: 2026-05-19
---

This release 2 changed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Changed

- `GET /api/inbound-shipments/{inbound_shipment}/available-purchase-orders` — Available Purchase Orders **(breaking)**
  - removed parameter(s): per_page, search
- `POST /api/3pl/asns/receipt` — Receive ASN (Report Receipt)
  - new response code(s): 422

_Spec version 1.0.0 → 1.0.0._
