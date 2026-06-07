---
title: "One true average cost — FIFO-accurate, everywhere"
description: "Average cost is now derived directly from your FIFO inventory layers and shown consistently across every report, list, export, and filter in SKU.io."
authors: [product-team]
tags: [major-feature, improved, inventory, reporting, purchasing]
date: 2026-06-07
---

If you've ever compared a product's average cost on the Products list against the Inventory Valuation report and gotten two different numbers, you've met one of the oldest annoyances in inventory software: a stored "average cost" field that slowly drifts away from what your inventory is actually worth. Costs got written to that field by different workflows over the years, and rounding, timing, and edge cases let it wander. With this release, **average cost is now derived directly from your FIFO inventory layers** — the same ledger that values your stock — and every screen, report, export, and filter in SKU.io reads from that single source. The number you see on the Products list, the Inventory Planning Report, the Inventory Valuation report, a CSV export, or an answer from the AI assistant is now the *same* number, and it always reconciles: average cost × on-hand quantity = stock value, to the cent.

<!-- truncate -->

**✨ What this means for you:**

- **One number, everywhere** — Products list, product detail, Inventory Planning, Inventory Valuation, demand planning, exports, and the AI assistant all show the same FIFO-derived average cost. No more cross-report discrepancies to explain.
- **Values that reconcile** — stock value is now the sum of your actual FIFO layer values, so `avg cost × on-hand = stock value` holds exactly on every row and every total.
- **Sorting and filtering you can trust** — sorting a report by average cost, or filtering "cost greater than $10", uses the same value the screen displays. A product can no longer rank by a stale number while showing a fresh one.
- **No action needed** — your average costs update automatically as receipts, adjustments, and fulfillments flow through FIFO, exactly as they always have. This release changes where the number comes *from*, not how you work.

## The Inventory Planning Report runs on FIFO truth

The Inventory Planning Report's cost columns — Avg Cost, Stock Value, Overstock Value, Dead Stock Value — and its summary cards now all come straight from your FIFO layers. The total stock value at the top of the report is the sum of your layer valuations, not a quantity-times-stale-cost approximation, so it matches the Inventory Valuation report exactly.

![The Inventory Planning Report showing FIFO-derived average costs and stock values, with summary cards for total SKUs, available units, and total stock value](/img/release-notes/fifo-average-cost/planning-report.png)

Sorting by Avg Cost — or filtering on it — now uses the same effective value the column displays, so the ordering always matches what you see:

![The planning report sorted by average cost, descending — every row ordered by its true FIFO-derived cost](/img/release-notes/fifo-average-cost/avg-cost-sorted.png)

## Inventory Valuation and Planning finally agree

Because both reports now derive from the same FIFO ledger, the Inventory Valuation report's on-hand value and the Planning Report's total stock value land on the same figure — drill into any SKU and its per-unit cost matches what the Products list shows.

![The Inventory Valuation report — on-hand quantity and on-hand value computed from the same FIFO source as every other screen](/img/release-notes/fifo-average-cost/valuation-report.png)

## Everywhere else, too

The same FIFO-derived cost now powers the surfaces you might not think about until they disagree:

- **Products list & product detail** — the Avg Cost column, and sorting/filtering on it.
- **CSV exports** — the "Avg Cost" column in product exports matches the screen. (Average cost is a calculated field, so it's no longer offered as an *import* column — to change it, adjust your inventory costs through receipts, adjustments, or revaluations.)
- **Demand planning** — the Avg Cost advanced filter, including saved filter sets you created before this release.
- **Custom reports** — the weighted-cost measures in the report builder.
- **AI assistant** — product cost questions are answered with the FIFO-derived value.
- **3PL integrations** — inventory adjustments sent by your fulfillment partners are costed at the FIFO value.

## Where to find it

Nothing moved — that's the point. Open **Insights → Inventory Planning**, **Insights → Inventory Valuation**, or **Inventory → Products** and the average costs you see are now FIFO-derived and consistent across all three. If you use saved views or saved filters that reference average cost, they keep working unchanged.
