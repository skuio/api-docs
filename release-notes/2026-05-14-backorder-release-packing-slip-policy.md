---
title: "Backorder release respects the packing-slip policy"
description: "Released backorder lines no longer silently slip into a fulfillment whose packing slip has already been printed — a new fulfillment is created instead."
authors: [product-team]
tags: [fixed, fulfillment]
date: 2026-05-14
---

When backordered items are released and dispatched, SKU.io now honors
the tenant's packing-slip policy. If the policy is **Do nothing** when
a packing slip has already been printed, the dispatcher creates a new
sequential fulfillment for the released lines instead of silently adding
them to a fulfillment whose slip is already out the door.
