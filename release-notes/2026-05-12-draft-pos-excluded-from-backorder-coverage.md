---
title: "Draft purchase orders no longer count toward backorder coverage"
description: "Draft POs are now excluded from inventory-allocation backorder coverage, with a backfill command to repair historical bad state."
authors: [product-team]
tags: [fixed, inventory, purchasing]
date: 2026-05-12
---

Only **approved** purchase orders now count as committed inbound supply for
backorder coverage. Reverting a PO back to Draft clears any existing
AwaitingReceipt allocations against it, and a new
`inventory:clear-draft-po-coverage` artisan command repairs tenants whose
historical drafts were already counted.

<!-- truncate -->

**✨ What this means for you:**

- Backorder allocations across sales orders, demand planning suggestions,
  and the allocation pipeline reflect only POs you have actually committed
  to supply from.
- Demoting an approved PO back to Draft (to revise it before re-issuing)
  immediately frees up the allocations it was holding, so other open
  demand can pull them.

If you noticed sales orders showing "Covered by PO#" against a draft PO,
that situation is now prevented going forward and historical data has
been backfilled.
