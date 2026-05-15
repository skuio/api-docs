---
title: "Batched COGS rebuild, Purchase Invoices page, and job reliability"
description: "A parallel-batched COGS rebuild with failed-product visibility, a new Purchase Invoices page, and a wave of background-job reliability fixes."
authors: [product-team]
tags: [major-feature, improved, inventory, purchasing, orders, integrations]
date: 2025-12-30
---

The COGS rebuild now runs in parallel batches with live progress, a new Purchase Invoices page joins Orders, and a wave of background-job reliability fixes land.

<!-- truncate -->

Headline changes this release:

- **Faster COGS rebuilds** — the job fans out across up to 100 parallel batches, with a **Failed Products** panel on COGS Health listing anything that errored.
- **Purchase Invoices** — a new list under Orders for tracking invoice status against POs.
- **Shopify tracking catch-up** — tracking now reaches the channel even for fulfillments marked outside ShipStation, with the backstop running every 10 minutes.
- **Amazon FC auto-inference** — new fulfillment centers resolve their country automatically instead of crashing the sync.
- **Background-job reliability** — FIFO locking, packing-slip overlap handling, Amazon retry windows, and clearer error reporting.
