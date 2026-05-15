---
title: "Sales Order OCR: smarter matching, rescan, and recovery"
description: "Customer-name normalization, MPN/UPC SKU candidates, qty/price reconciliation, a rescan action, recovery of orphaned extractions, and catalog-name line descriptions."
authors: [product-team]
tags: [improved, orders]
date: 2026-05-14
---

The Sales Order OCR review experience — for ingesting forwarded customer
PO emails and PDFs into draft sales orders — gets significantly more
resilient. Smarter matching, an inline rescan, recovery of orphaned
extractions, and a fix so deleted-then-restored extractions render
properly.

<!-- truncate -->

**✨ What this means for you:**

- **Customer matching** now normalises common suffixes (Inc., LLC, &,
  Corp.), so *"ACME Inc"* and *"ACME, Inc."* resolve to the same customer.
- **SKU matching** walks MPN, UPC, and alt-product-code columns through
  every matcher tier, so SKUs hidden under a "Mfg" or "UPC" header on
  the customer's PO are found correctly.
- A **qty / unit price reconciliation** step catches obviously flipped
  values: if `line_total / unit_price` resolves to a clean integer that
  isn't the OCR'd qty, the qty is auto-corrected.
- New **Rescan** action on the Review page re-runs extraction without
  losing the existing customer mapping work.
- Extractions whose downstream sales order was deleted are now treated
  as **unlocked** — you can rescan, clone, reclassify, or delete them
  instead of being stuck.
- The Review UI now renders for every extraction status (including
  `duplicate_detected`), so the page no longer hangs on a loading
  spinner.
- Created sales-order lines use the **catalog product name** for the
  line description; the raw OCR'd text is preserved on the extraction
  for audit.

Find it at **Orders → Sales Orders → OCR Inbox**.
