---
title: "Profitability drilldown FLT breakdown now reconciles with the summary totals"
description: "The Financial Line Type breakdown on the order drilldown matches the report's Total Revenue and Total Cost — including credits, discounts, and COGS-returned rows."
authors: [product-team]
tags: [fixed, reporting, accounting]
date: 2026-05-13
---

The **Financial Line Type** breakdown in the Profitability Report's order
drilldown now sums to the same Total Revenue and Total Cost shown in the
summary above — even when the drilldown is filtered by supplier, brand,
or SKU. Credits, discounts, and COGS-returned rows are surfaced
explicitly so the breakdown is fully reconciled.

<!-- truncate -->

Previously certain FLT categories were silently dropped from the
drilldown breakdown, making the per-line totals appear inconsistent with
the headline numbers. The repository now returns every FLT category that
contributes to the headline, so the math always ties.
