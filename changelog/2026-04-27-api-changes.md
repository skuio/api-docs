---
title: API changes — 2026-04-27
description: This release includes 10 additions.
authors: [product-team]
tags: [added]
date: 2026-04-27
---

This release includes 10 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Document Inbox
- `GET /api/document-inbox` — List Inbox Documents
- `POST /api/document-inbox/customer_po/{extraction_id}/retry` — Retry Failed Extraction
- `GET /api/document-inbox/pending-count` — Get Pending Count (Badge)

### Purchase Invoice OCR
- `POST /api/purchase-invoices/ocr/upload` — Upload Supplier Invoice PDF
- `DELETE /api/purchase-invoices/ocr/{purchase_extraction_id}` — Delete Extraction
- `GET /api/purchase-invoices/ocr/{purchase_extraction_id}` — Get Extraction
- `POST /api/purchase-invoices/ocr/{purchase_extraction_id}/create-invoice` — Create Purchase Invoice from Extraction (NOT IMPLEMENTED)
- `GET /api/purchase-invoices/ocr/{purchase_extraction_id}/pdf` — Stream Extraction PDF

### Sales Order OCR
- `GET /api/sales-orders/ocr/{extraction_id}/pdf` — Stream Extraction PDF
- `POST /api/sales-orders/ocr/{extraction_id}/reclassify-as-supplier-invoice` — Reclassify as Supplier Invoice

_Spec version 1.0.0 → 1.0.0._
