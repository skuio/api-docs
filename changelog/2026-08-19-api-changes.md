---
title: API changes — 2026-08-19
description: This release includes 27 additions.
authors: [product-team]
tags: [added]
date: 2026-08-19
---

This release includes 27 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Lot Compliance
- `GET /api/v2/compliance-documents` — List Compliance Documents
- `GET /api/v2/compliance-documents/types` — List Compliance Document Types
- `GET /api/v2/compliance-documents/{document}/file` — Download Compliance Document
- `GET /api/v2/fifo-layers/{fifoLayer}/coa-results` — Get Lot COA Results
- `PUT /api/v2/fifo-layers/{fifoLayer}/coa-results` — Record Lot COA Results
- `GET /api/v2/fifo-layers/{fifoLayer}/documents` — List Lot Documents
- `POST /api/v2/fifo-layers/{fifoLayer}/documents` — Upload Lot Document
- `DELETE /api/v2/fifo-layers/{fifoLayer}/documents/{document}` — Remove Lot Document
- `PATCH /api/v2/fifo-layers/{fifoLayer}/documents/{document}` — Update Lot Document
- `POST /api/v2/fifo-layers/{fifoLayer}/documents/{document}/link` — Link Batch Document to Lot
- `GET /api/v2/fifo-layers/{fifoLayer}/documents/{document}/link-count` — Get Lot Document Link Count
- `POST /api/v2/fifo-layers/{fifoLayer}/receiving-verification` — Record Lot Receiving Verification
- `GET /api/v2/fifo-layers/{fifoLayer}/retention-samples` — List Lot Retention Samples
- `POST /api/v2/fifo-layers/{fifoLayer}/retention-samples` — Create Lot Retention Sample
- `DELETE /api/v2/fifo-layers/{fifoLayer}/retention-samples/{sample}` — Delete Lot Retention Sample
- `PATCH /api/v2/fifo-layers/{fifoLayer}/retention-samples/{sample}` — Update Lot Retention Sample
- `GET /api/v2/products/{product}/specifications` — List Product Specifications
- `POST /api/v2/products/{product}/specifications` — Create Product Specification
- `DELETE /api/v2/products/{product}/specifications/{specification}` — Delete Product Specification
- `PATCH /api/v2/products/{product}/specifications/{specification}` — Update Product Specification
- `GET /api/v2/retention-samples` — List Retention Samples

### Suppliers
- `GET /api/suppliers/{supplier}/compliance-documents` — List Supplier Compliance Documents
- `POST /api/suppliers/{supplier}/compliance-documents` — Upload Supplier Compliance Document
- `DELETE /api/suppliers/{supplier}/compliance-documents/{document}` — Delete Supplier Compliance Document
- `PATCH /api/suppliers/{supplier}/compliance-documents/{document}` — Update Supplier Compliance Document
- `GET /api/suppliers/{supplier}/compliance-documents/{document}/file` — Download Supplier Compliance Document
- `PUT /api/suppliers/{supplier}/compliance-requirements` — Set Supplier Compliance Requirements

_Spec version 1.0.0 → 1.0.0._
