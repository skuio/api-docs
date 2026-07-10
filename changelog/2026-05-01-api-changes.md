---
title: API changes — 2026-05-01
description: This release includes 6 additions.
authors: [product-team]
tags: [added]
date: 2026-05-01
---

This release includes 6 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Adjustments & Transfers
- `POST /api/v2/inventory-allocations/switch-supplier-options` — Switch Supplier Options
- `POST /api/v2/inventory-allocations/switch-suppliers` — Switch Suppliers

### Document Inbox
- `GET /api/document-inbox/customer_po/{extraction_id}/siblings` — Get Siblings (Prev/Next Navigation)

### Purchase Invoices
- `POST /api/purchase-invoices/{purchaseInvoice}/lines/{purchaseInvoiceLine}/sync-po-price` — Sync PO Price From Invoice Line
- `POST /api/purchase-invoices/{purchaseInvoice}/sync-po-prices` — Sync PO Prices Bulk

### Sales Order OCR
- `POST /api/sales-orders/ocr/{extraction_id}/clone-from` — Clone Lines from Sales Order

_Spec version 1.0.0 → 1.0.0._
