---
title: API changes — 2026-05-08
description: This release includes 14 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-05-08
---

This release includes 14 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Inbound Shipments
- `POST /api/inbound-shipments/from-invoice/{purchaseInvoice}` — Create Inbound Shipment From Purchase Invoice

### Landed Cost Invoice OCR
- `GET /api/cost-category-keyword-aliases` — List Cost Category Keyword Aliases
- `PUT /api/cost-category-keyword-aliases` — Replace Cost Category Keyword Aliases
- `GET /api/landed-cost-invoices/ocr` — List Extractions (Inbox)
- `POST /api/landed-cost-invoices/ocr/upload` — Upload Landed Cost Invoice PDF
- `DELETE /api/landed-cost-invoices/ocr/{landed_cost_extraction_id}` — Delete Extraction
- `GET /api/landed-cost-invoices/ocr/{landed_cost_extraction_id}` — Get Extraction
- `POST /api/landed-cost-invoices/ocr/{landed_cost_extraction_id}/apply` — Apply Extraction (Create Bills)
- `PATCH /api/landed-cost-invoices/ocr/{landed_cost_extraction_id}/draft` — Save Draft (Working State)
- `GET /api/landed-cost-invoices/ocr/{landed_cost_extraction_id}/pdf` — Stream Extraction PDF
- `POST /api/landed-cost-invoices/ocr/{landed_cost_extraction_id}/rescan` — Re-scan Extraction

### Purchase Invoices
- `GET /api/purchase-invoices/{purchaseInvoice}/inbound-shipments` — List Inbound Shipments for Invoice
- `GET /api/purchase-invoices/{purchaseInvoice}/shipment-prefill` — Get Shipment Prefill (From Invoice)

### Sales Orders
- `PUT /api/sales-orders/{salesOrder}` — Update Sales Order

## Changed

### Inventory
- `GET /api/v2/inventory/holds` — List Inventory Holds
  - new parameter(s): `status`

_Spec version 1.0.0 → 1.0.0._
