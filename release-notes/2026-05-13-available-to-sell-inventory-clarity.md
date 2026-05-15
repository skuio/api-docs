---
title: "Available to Sell — a clearer picture of your real sellable position"
description: "A new Available to Sell metric (Available minus active backorders) plus consistent On Hand, Total Inventory, and Available terminology across products, reports, and demand planning."
authors: [product-team]
tags: [feature, new, inventory, reporting]
date: 2026-05-13
---

We've added **Available to Sell** — your real net-sellable position
after subtracting active backorders — and standardized the inventory
vocabulary so the same words mean the same thing whether you're on a
product page, an inventory report, a demand-planning filter, or an
export. **On Hand**, **Total Inventory**, **Available**, and
**Available to Sell** are now used consistently everywhere they appear.

<!-- truncate -->

**✨ What this means for you:**

- Available to Sell shows whether you can actually fulfill new orders
  *today* after accounting for backorder commitments — and goes
  negative when you're oversold, so you spot trouble at a glance.
- One vocabulary across products list, product detail, warehouse
  inventory, reports, demand planning, exports, and imports — no more
  "Total Stock here, Total Inventory there".
- Per-warehouse Available to Sell turns red when negative, so it's
  obvious which location is the cause when you're oversold.

## What Available to Sell means

The math is simple:

```
Available to Sell = Available − Active Backorders
```

A positive value is what you can promise to a new customer right now.
A **negative** value means you have commitments you can't fulfill from
on-hand inventory and depend on incoming POs to clear — exactly the
kind of state you want flagged loudly rather than buried.

The metric is exposed:

- On every **product detail** page (stats bar and per-warehouse table).
- On the **Inventory Planning report**, with a companion **Projected
  Total** column that already nets out the backorder shortage so the
  forward-looking picture lines up with the present.
- As a sortable and filterable column on the products list.
- In product exports and the API (`available_to_sell` on the product
  inventory resources).

## Vocabulary cleanup — same words, same meaning

The terminology has been tightened so each phrase has one job:

- **On Hand** — units physically in your warehouses, *not* counting
  inventory still in transit.
- **Total Inventory** — On Hand plus In Transit. The old "Total Stock"
  label is gone; everywhere it used to appear (products list, import
  modal, reports, the allocation pipeline, demand planning filters,
  the supplier inventory section) it now reads **Total Inventory**.
- **Available** — what's free of allocations and holds, but before
  subtracting backorders.
- **Available to Sell** — the new net metric, what's actually
  promisable today.

On the product detail page, the math now reads cleanly:

```
Available + Allocated + On Hold = On Hand
On Hand + In Transit = Total Inventory
```

Backorders are still surfaced — as a dedicated badge and as **BO
Planned** / **BO PO Covered** info columns at the end of the warehouse
inventory table, with tooltips that explain the per-warehouse numbers.

## Behind the scenes — and why the negative value matters

`products_inventory.inventory_available` (the cached column) is now
floored at zero so it stays consistent with our inventory integrity
check, which was previously flagging the cached negatives as drift.
**Available to Sell** is derived live from the raw columns, so it can
still go negative and surface the oversold signal — you get a
self-healing cache *and* a faithful UI signal at the same time.

Exports, the Inventory Planning report, and the Postman/API contract
all expose the new field. If you have custom integrations pulling
inventory totals, `available_to_sell` is the field to bind your "can
I promise this?" logic to.
