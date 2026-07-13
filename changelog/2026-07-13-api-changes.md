---
title: API changes — 2026-07-13
description: This release includes 12 additions.
authors: [product-team]
tags: [added]
date: 2026-07-13
---

This release includes 12 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Amazon
- `POST /api/amazon/{integrationInstance}/inbound/shipments/delete` — Bulk Delete Inbound Shipments
- `DELETE /api/amazon/{integrationInstance}/inbound/shipments/{shipment}` — Delete Inbound Shipment

### Google Sheets
- `DELETE /api/v2/google/connection` — Disconnect Google
- `GET /api/v2/google/connection` — Get Google Connection
- `POST /api/v2/google/connection/initiate` — Connect Google
- `POST /api/v2/google/sheets/export` — Export to Google Sheet
- `GET /api/v2/google/sheets/links` — List Linked Google Sheets
- `DELETE /api/v2/google/sheets/{sheetLink}` — Unlink Google Sheet
- `PATCH /api/v2/google/sheets/{sheetLink}` — Rename Google Sheet
- `POST /api/v2/google/sheets/{sheetLink}/pull` — Pull Changes From Google Sheet

### Products
- `POST /api/products/{product}/duplicate` — Duplicate Product

### Sales Order Lines
- `POST /api/sales-order-lines/{salesOrderLine}/cancel-quantity` — Cancel Line Quantity

_Spec version 1.0.0 → 1.0.0._
