---
title: "Purchase Invoice OCR: negative line prices, scoped duplicate-invoice surfacing, and auto-attached PDFs"
description: "Discounts (negative line prices) are accepted, the existing-invoice warning only fires on a real invoice-number match, and the source PDF auto-attaches to newly created invoices."
authors: [product-team]
tags: [fixed, purchasing]
date: 2026-05-13
---

Three quality-of-life fixes on the Purchase Invoice OCR review flow.

<!-- truncate -->

- **Negative line prices** (representing discounts or returns) are no
  longer rejected by validation — they're accepted and round-trip into
  the created bill.
- The **"this looks like an existing invoice"** warning is now scoped
  to a real invoice-number match, instead of fuzzy-matching to unrelated
  prior invoices.
- The source **PDF auto-attaches** to the newly created purchase invoice
  so the document is one click away from the invoice detail page.
