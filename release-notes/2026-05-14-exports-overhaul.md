---
title: "Exports overhaul: large datasets stream reliably and \"All records\" shows the true total"
description: "XLSX exports over 15,000 rows auto-fall-back to streaming CSV, paginated endpoints expose an unfiltered_total so the Export modal shows the real universe, and the Products export streams the full catalog."
authors: [product-team]
tags: [improved, inventory, purchasing, orders]
date: 2026-05-14
---

Exporting large datatables is significantly more reliable. The XLSX
generator falls back to streaming CSV automatically when a dataset
exceeds 15,000 rows — written directly with native `fputcsv` so memory
stays bounded even on 100,000+ row catalogs. The Export modal's "All
records" radio now shows the true unfiltered total. The Products list
export streams every row.

<!-- truncate -->

**✨ What this means for you:**

- Exporting a large product catalog or full sales-orders history no
  longer OOMs partway through. The tray now shows messages like
  *"Exporting 142,873 products as CSV (auto-fallback: xlsx exceeds 15,000
  rows)..."* when the CSV path kicks in.
- The Export modal's two radios — **All records** vs **Filtered results**
  — show separate counts. The "All records" number is the true universe
  size (e.g. your full catalog of 142k products), while "Filtered
  results" reflects what you've narrowed down to.
- A regression that capped the Products export at 990 rows under a
  specific sort order is fixed. The export now streams every product
  end-to-end.
- The Backorder Queue **Allocations** tab gains the same Export button
  as the Products and Warehouse Transfers tables — xlsx + csv, four
  scopes (all / filtered / current page / selected), 18 selectable
  columns.

The unfiltered_total field is rolled out across product, sales-order,
purchase-order, warehouse-transfer, inventory-holds/allocations,
accounting-transactions, inventory-planning-report, vendor-credits,
purchase-invoices, supplier-inventory, and unified Amazon transactions
endpoints.
