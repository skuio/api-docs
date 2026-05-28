---
title: API changes — 2026-05-28
description: This release 1 added, 4 changed API endpoint(s).
authors: [product-team]
tags: [added, changed]
date: 2026-05-28
---

This release 1 added, 4 changed API endpoint(s).

<!-- truncate -->

## Added

- `POST /api/amazon/{integrationInstance}/removal-shipments/bulk-remove-receipts` — Bulk Remove Receipts

## Changed

- `DELETE /api/amazon/{integrationInstance}/removal-orders/{orderId}/undo-all-receipts` — Undo All Receipts for Order
  - new response code(s): `404`
- `DELETE /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/remove-receipt` — Remove Receipt
  - new response code(s): `404`
- `POST /api/amazon/{integrationInstance}/removal-shipments/receive-bulk` — Bulk Receive Removal Shipments
  - new response code(s): `422`
- `POST /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/receive` — Receive Removal Shipment
  - new parameter(s): `Content-Type`
  - new response code(s): `404`, `422`

_Spec version 1.0.0 → 1.0.0._
