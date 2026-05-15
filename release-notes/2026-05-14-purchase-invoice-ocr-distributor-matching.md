---
title: "Purchase Invoice OCR: better SKU matching on distributor invoices"
description: "\"Mfg\" column headers map to MPN, and the table-extraction fallback re-runs when invoice items lack SKUs."
authors: [product-team]
tags: [improved, purchasing]
date: 2026-05-14
---

Purchase Invoice OCR is significantly more accurate on distributor-style
invoices (Edward Don in particular). The Azure Document Intelligence
extractor now maps the **"Mfg"** column header to MPN, and re-runs its
table-extraction fallback when the first pass returns rows without
product codes.

<!-- truncate -->

**✨ What this means for you:**

- Invoices that label the manufacturer SKU column "Mfg" — instead of
  the usual "MPN" — now resolve their SKUs cleanly instead of leaving
  every line unmatched.
- If the structured extractor returns line items without any product
  codes (common on lightly-formatted distributor PDFs), SKU.io retries
  the table-extraction fallback so you don't end up with a stack of
  blank-SKU rows to fix manually.

Find this on the Purchase Invoice OCR review page (**Purchasing →
Invoice OCR → review**).
