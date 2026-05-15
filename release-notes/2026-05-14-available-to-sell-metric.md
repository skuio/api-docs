---
title: "Available to Sell: a new net-sellable metric across the product and inventory views"
description: "New metric subtracts open backorder demand from physical Available, so it can go negative and flag oversold positions. Also renames 'Total Stock' to 'Total Inventory' and clarifies On Hand / In Transit terminology app-wide."
authors: [product-team]
tags: [new, inventory, reporting]
date: 2026-05-14
---

A new first-class inventory metric — **Available to Sell** — appears
across the product detail page, per-warehouse inventory views, products
list, and several reports. Unlike the existing **Available** number
(physical stock that's free), Available to Sell *subtracts open backorder
demand*, so it can go **negative** when committed demand exceeds the
stock you have. That negative signal surfaces oversold situations
immediately.

<!-- truncate -->

**✨ What this means for you:**

- A red **Available to Sell** value on a product card or row means open
  customer orders exceed what you can currently fulfil — fix that supply
  gap before the next sync.
- The stats bar on the Product Detail page now shows the explicit
  inventory equation: `Available + Allocated + On Hold = On Hand +
  In Transit = Total Inventory`, with hover tooltips clarifying what
  each piece means.
- Vocabulary is standardised app-wide: "Total Stock" is now "Total
  Inventory"; "BO" abbreviations are spelled out as "Backorder"; "On
  Hand" tooltips clarify exclusion of in-transit stock.
- The **Inventory Planning Report** adds Available to Sell and a
  Projected Total that's net of backorder demand, so the projection
  reflects what's truly sellable.

Find the new metric on **Products → list and detail**, **Products →
Inventory tab** (per-warehouse), **Reports → Inventory Planning**,
**Reports → Real-time Inventory**, **Demand Planning**, and the
Inventory Allocation Pipeline.

The metric is a computed accessor — no migration was required and
historical data updates retroactively.
