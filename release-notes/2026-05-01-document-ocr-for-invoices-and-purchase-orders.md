---
title: "Scan supplier invoices and customer POs straight into SKU.io"
description: "New OCR document scanning extracts line items, pricing, and contacts from supplier invoices and customer purchase orders to create records automatically."
authors: [product-team]
tags: [major-feature, new, purchasing, orders]
date: 2026-05-01
---

You can now turn PDF documents into SKU.io records automatically — no more manual line-by-line entry.

<!-- truncate -->

Headline changes this release:

- **Supplier invoice scanning** — Upload an invoice PDF on a purchase invoice and OCR extracts the header fields and line items, then runs a three-way match against the purchase order and receipts so you can confirm quantities and costs before applying. Find it under the Documents tab of a purchase invoice.
- **Customer PO scanning** — Upload a customer purchase order PDF from the sales orders area and OCR extracts customer details, line items, quantities, and pricing into a draft sales order, matching products against your catalog. Review and adjust everything on the OCR review page before creating the order.

Both flows remember past matches — including how a supplier's line descriptions map to your products and revenue lines — so repeat imports get faster over time.
