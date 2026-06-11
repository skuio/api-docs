---
title: API changes — 2026-06-11
description: This release 16 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-11
---

This release 16 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/vendor-credits/ocr/{extraction}` — Delete Extraction
- `DELETE /api/vendor-credits/{vendorCredit}/attachments/{attachment}` — Delete Attachment
- `GET /api/vendor-credits/ocr/{extraction}` — Get Extraction
- `GET /api/vendor-credits/ocr/{extraction}/pdf` — Stream Extraction PDF
- `GET /api/vendor-credits/{vendorCredit}/attachments` — List Attachments
- `GET /api/vendor-credits/{vendorCredit}/attachments/{attachment}/download` — Download Attachment
- `GET /api/vendor-credits/{vendorCredit}/attachments/{attachment}/ocr` — Get Latest Attachment Extraction
- `GET /api/vendor-credits/{vendorCredit}/attachments/{attachment}/view` — View Attachment Inline
- `POST /api/vendor-credits/ocr/upload` — Upload Credit Memo for OCR
- `POST /api/vendor-credits/ocr/{extraction}/attach-to-credit` — Attach Extraction to Existing Credit
- `POST /api/vendor-credits/ocr/{extraction}/create-credit` — Create Vendor Credit from Extraction
- `POST /api/vendor-credits/ocr/{extraction}/reclassify-as-invoice` — Reclassify as Supplier Invoice
- `POST /api/vendor-credits/ocr/{extraction}/rescan` — Re-scan Extraction
- `POST /api/vendor-credits/{vendorCredit}/attachments` — Upload Attachment
- `POST /api/vendor-credits/{vendorCredit}/attachments/{attachment}/ocr` — Scan Attachment with OCR
- `POST /api/vendor-credits/{vendorCredit}/ocr-apply` — Apply OCR Results to Vendor Credit

_Spec version 1.0.0 → 1.0.0._
