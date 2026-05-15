---
title: "\"Covered by PO#\" advanced filter is back on the Vue 3 Sales Orders page"
description: "The PO-number autocomplete filter that existed in the legacy Sales Orders UI is now ported into the modern advanced-filters panel."
authors: [product-team]
tags: [improved, orders, purchasing]
date: 2026-05-13
---

The **Covered by PO#** advanced filter is back on the Sales Orders list.
Use it from **Sales Orders → Advanced filters → Covered by PO#** with
the PO-number autocomplete to find every sales order whose backorder
coverage points at a specific purchase order.

<!-- truncate -->

This filter existed in the legacy Vue 2 UI and was missing after the
Vue 3 rewrite. It has been re-implemented against the new advanced-filter
framework — including operator support and lookup-style PO selection.
