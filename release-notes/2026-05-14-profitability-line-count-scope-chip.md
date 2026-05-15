---
title: "Profitability drilldown shows a line-count scope chip on partial-order rows"
description: "When the drilldown is scoped by supplier, brand, or SKU, each order row gets an \"X of Y\" chip so partial sums aren't mistaken for full-order totals."
authors: [product-team]
tags: [improved, reporting]
date: 2026-05-14
---

When you drill into the **Profitability Report** with a scope filter
applied (a specific supplier, brand, or SKU), each order row now shows
an **"X of Y"** chip indicating how many of the order's lines are
included in the current view. CSV export also includes the extra metric
columns so the scope is visible in exported data.

<!-- truncate -->

This addresses a confusion where, on an order with 8 lines but only 3
matching the current supplier filter, the drilldown total looked smaller
than the headline order total even though both numbers were correct.
The chip makes the partial scope explicit.
