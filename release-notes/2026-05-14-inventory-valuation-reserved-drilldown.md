---
title: "Inventory Valuation Reserved drill-down now matches the report totals and lists every FBA row"
description: "The Reserved drill-down on Amazon FBA warehouses now includes warehouse-transfer in-transit inventory, uses the latest FBA ledger snapshot on or before the cutoff date, populates the per-row table, and shows friendly source labels."
authors: [product-team]
tags: [fixed, reporting, integrations]
date: 2026-05-14
---

Drilling into a **Reserved** cell on an Amazon FBA warehouse row in the
**Inventory Valuation** report now shows the correct total, lists every
contributing FNSKU/disposition row, and uses friendly source labels —
matching the summary numbers above instead of showing $0 or an empty
table.

<!-- truncate -->

**✨ What this means for you:**

- The "Valuation Discrepancy" banner that used to appear when drilling
  into FBA Reserved cells is gone — the drill-down total ties to the
  main report's Reserved figure.
- Reserved on FBA warehouses now correctly includes FBA inventory in
  `in_transit_between_warehouses`, valued at the FNSKU's historical
  average COGS.
- For prior dates, the drill-down uses the latest FBA Inventory Ledger
  Summary snapshot on or before the cutoff (instead of an exact-date
  match that often returned 0).
- The per-row table beneath the total now lists one row per
  FNSKU + disposition, with source labels like *"Warehouse Transfer
  (In Transit)"* and references like *"FNSKU X001ABCD (SELLABLE)"*.

Find it at **Reports → Inventory Valuation → click any Reserved cell on
an Amazon FBA row**.
