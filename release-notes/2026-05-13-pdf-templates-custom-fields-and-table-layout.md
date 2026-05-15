---
title: "PDF templates expose custom fields in the variable picker and render PO/SO templates more reliably"
description: "Use {{custom_field.*}} tokens in your PDF templates with full variable-picker support, and the default PO/SO templates are rebuilt with a table layout for cleaner output."
authors: [product-team]
tags: [improved, purchasing, orders]
date: 2026-05-13
---

Two improvements to PDF templates: every **custom field** you've defined
is now available in the template variable picker (and resolves cleanly
in the preview), and the default Purchase Order and Sales Order
templates have been rebuilt with a table-based layout for more
predictable rendering.

<!-- truncate -->

**✨ What this means for you:**

- Insert tokens like `{{custom_field.color}}` or `{{custom_field.po_terms}}`
  directly from the variable picker — no more typing them by hand and
  hoping for the best.
- The variable preview now resolves custom fields against the sample
  document so you can see exactly how they'll render before saving.
- The default PO / SO PDF templates use a table layout, which fixes
  customer-reported word-wrap glitches and inconsistent two-column header
  rendering on documents with longer addresses or company names.

Find both at **Settings → PDF Templates** when editing a template.
