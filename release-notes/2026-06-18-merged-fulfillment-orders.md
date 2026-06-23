---
title: "Merged Fulfillment Orders — ship multiple orders together"
description: "When a customer has several open orders shipping from one warehouse to one address, combine them into a single fulfillment order so they're picked, packed, and dispatched together."
authors: [product-team]
tags: [major-feature, new, fulfillment, orders]
date: 2026-06-18
---

When the same customer places two or three orders to the same address within a few days, your warehouse shouldn't have to pick, pack, and dispatch each one separately — that's more labels, more trips to the packing bench, and more chances for something to drift out of sync. **Merged fulfillment orders** let you combine open orders that ship from the same warehouse to the same address into a single fulfillment order, so they're picked, packed, and dispatched together as one. Each sales order keeps its own line items and identity — nothing is destroyed or rewritten — and you can pull them back apart any time before the order is submitted to your warehouse or 3PL.

<!-- truncate -->

**✨ What this means for you:**

- **One fulfillment order instead of several** when orders go to the same place — less duplicated picking, packing, and paperwork.
- **SKU spots combinable orders for you** — no hunting required.
- **Every original order stays intact** — each keeps its own line items and identity, and merging is fully reversible before dispatch.
- **A clear "Merged" view** so you always know which orders are travelling together.

## SKU spots combinable orders for you

On an order's **Fulfillment** tab, SKU automatically checks for other open orders that ship from the same warehouse to the same address — and surfaces them right where you're working. No need to remember a customer's other orders or go looking for them.

![The Fulfillment tab showing a "Mergeable orders found" prompt with a Review & merge button](/img/release-notes/merged-fulfillment-orders/merge-nudge.png)

## Combine them into one fulfillment order

Review the matching orders and merge them in one step. They become a single fulfillment order that's picked, packed, and dispatched together instead of as separate orders — while each sales order keeps its own line items and identity. The dialog shows exactly what will ship together, so there are no surprises at the packing bench.

![The merge dialog confirming the orders will combine into one fulfillment order](/img/release-notes/merged-fulfillment-orders/merge-dialog.png)

## Always know what's travelling together

Merged orders are clearly badged across your fulfillment orders, and a one-click **Merged** filter shows just the ones that are combined — so the warehouse always knows what belongs in the same parcel. Changed your mind? You can unmerge any time before the fulfillment order is submitted.

![The Fulfillment Orders list filtered to "Merged only", showing two orders badged as merged](/img/release-notes/merged-fulfillment-orders/fulfillment-orders-merged.png)

## Where to find it

Open any sales order and go to the **Fulfillment** tab — if it has combinable orders, you'll see a **Mergeable orders found** prompt with a **Review & merge** button. To see everything that's currently merged, go to **Orders → Fulfillment Orders** and switch on the **Merged** filter.
