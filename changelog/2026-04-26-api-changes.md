---
title: API changes — 2026-04-26
description: This release includes 10 additions.
authors: [product-team]
tags: [added]
date: 2026-04-26
---

This release includes 10 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Customer SKU Mappings
- `GET /api/customers/{customer_id}/sku-mappings` — List SKU Mappings
- `POST /api/customers/{customer_id}/sku-mappings` — Create / Upsert SKU Mapping
- `GET /api/customers/{customer_id}/sku-mappings/export` — Export SKU Mappings as CSV
- `POST /api/customers/{customer_id}/sku-mappings/import` — Import SKU Mappings from CSV
- `DELETE /api/customers/{customer_id}/sku-mappings/{mapping_id}` — Delete SKU Mapping

### Inbound Shipments
- `POST /api/inbound-shipments/{inbound_shipment}/receipts` — Create Receipt (Native IS Path)

### Sales Order OCR
- `POST /api/sales-orders/ocr/upload` — Upload Customer PO PDF
- `DELETE /api/sales-orders/ocr/{extraction_id}` — Delete OCR Extraction
- `GET /api/sales-orders/ocr/{extraction_id}` — Get OCR Extraction
- `POST /api/sales-orders/ocr/{extraction_id}/create-order` — Create Sales Order from Extraction

_Spec version 1.0.0 → 1.0.0._
