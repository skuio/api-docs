---
title: "Datatable exports now show \"filtered of total\" counts"
description: "Every exportable datatable now tells you how many rows your current filters match versus the total in scope, so you know exactly what your export will contain."
authors: [product-team]
tags: [feature, improved, orders, purchasing, inventory, accounting, reporting]
date: 2026-05-13
---

Before you hit Export on a datatable, the export modal now shows
**X filtered of Y total** — so you can see at a glance whether the
filters you applied actually narrowed things down (or whether you're
about to export every row in the system). The change rolls out to
~15 datatables across purchasing, sales orders, warehouse transfers,
products, inventory, accounting, insights, vendor credits, and Amazon.

<!-- truncate -->

**✨ What this means for you:**

- Confirm before you click — see the filtered count and the total
  count side by side, so a forgotten filter never leads to a 100k-row
  surprise export.
- "Total" reflects the datatable's *base scope*, not "every row in the
  database" — so archived orders, closed POs, and other normally-hidden
  rows don't inflate the comparison.
- Available on every export modal you already use: PO list, SO list,
  warehouse transfers, products, inventory holds and allocations,
  inventory planning, supplier inventory, accounting transactions,
  purchase invoices, vendor credits, and the Amazon transaction views.

## What "total" means on each page

Each datatable counts its **base scope** — the set of rows you would
see if every filter were cleared. That's the right comparison: when a
filter is doing its job, the filtered count is a small fraction of the
base. The base scope respects the same defaults the page already uses:

- **Purchase orders, sales orders, warehouse transfers** — non-archived
  rows.
- **Inventory holds and allocations** — active status only (the same
  set the page lists by default).
- **Other datatables** — the normal, unfiltered listing.

You won't see the count balloon to include archived data just because
you opened the export modal. What you see in the count is what you'll
get in the file.

## Behind the scenes

Each list endpoint now returns an `unfiltered_total` alongside the
filtered total in its paginated response. The export modal binds to
both numbers, and the rest of the page UI is unchanged. If you have
custom integrations consuming our list endpoints, `unfiltered_total`
is available there too — useful any time you want to display "matches
filter" alongside "in scope".
