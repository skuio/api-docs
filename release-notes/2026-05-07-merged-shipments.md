---
title: "Merged Shipments — ship multiple sales orders in one parcel"
description: "Combine two or more sales orders bound for the same address into a single shipment with one tracking number, while every underlying order and source-channel order stays intact."
authors: [product-team]
tags: [major-feature, new, orders, fulfillment, shipping]
date: 2026-05-07
---

When a customer places two orders to the same address an hour apart,
your warehouse already ships them in one box — and then someone has to
manually paste the same tracking number onto both orders and hope
nothing drifts out of sync. **Merged Shipments** makes that a
first-class workflow: combine two or more sales orders into a single
physical shipment with one tracking number, while every underlying SKU
order — and every source-channel order behind it — stays exactly where
it was.

<!-- truncate -->

**✨ What this means for you:**

- Pick, pack, and label two-plus orders as **one shipment** instead of
  shuffling paperwork for each.
- The originals are never destroyed or replaced — each sales order and
  each Shopify / Amazon / channel order keeps its own identity, so your
  1:1 mirror with the marketplace is preserved.
- Tracking writes back to **every** source order independently, all
  carrying the same number — no more "where's my other order?" tickets.
- A new **Merged Shipments** workspace lives under Fulfillments, and a
  banner on each member sales order shows what it shipped with.

## Creating a merged shipment

From the sales orders list, select the orders you want to combine and
open the merge configuration. Before anything is created, an
eligibility check runs: shipping addresses are compared with
normalization (case, whitespace, and country code are all folded), and
any cross-integration or partially-fulfilled situations are surfaced as
explicit warnings or hard blocks. Orders that are already partly
fulfilled can't be merged — a deliberate guard against the
"combining locks the shipment" traps seen in other platforms.

Once confirmed, a **Merged Shipment** is created. Each member order
keeps its own fulfillment record, so SKU's mirror with the source
channel stays intact and tracking still writes back to each
marketplace order independently.

## Merge suggestions on the order page

Open a sales order and SKU will surface **merge candidates** — other
open orders headed to the same address that could ship together. You
don't have to go hunting through the list; the suggestion comes to you
at the moment it's relevant.

## Reversible until it ships

A merge isn't a one-way door. Until labels are purchased you can
**unmerge** the group and each order returns to standing on its own.
After a label exists, unmerging is gated behind an explicit void step
so you can't silently strand a paid label.

## Where to find it

The **Merged Shipments** index and detail pages live under the
Fulfillments area. Each member sales order's detail page shows a
**merged-shipment indicator** linking to the group it belongs to and
the sibling orders in the same parcel — so if a customer asks about one
order, support can immediately see what it shipped with.
