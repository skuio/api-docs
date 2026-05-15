---
title: "Warehouse transfer and inbound shipment receipts can no longer be deleted if the stock has been consumed"
description: "Preflight checks block receipt deletion when FIFO layers from the receipt have downstream consumption (sales, transfers, adjustments), with a 422 explaining what's blocking."
authors: [product-team]
tags: [fixed, inventory]
date: 2026-05-14
---

You can no longer accidentally delete a warehouse-transfer or inbound-
shipment receipt after its stock has been sold, transferred, or
adjusted. A new preflight check blocks the delete with a 422 and a
clear explanation pointing at exactly what's blocking.

<!-- truncate -->

**✨ What this means for you:**

- If you try to delete a receipt whose stock has already moved
  downstream, you'll see a message like *"Cannot delete this receipt
  — 27 units from it have already been consumed by sales fulfillments,
  other transfers, or adjustments. Reverse the downstream consumption
  first."*
- Before this change, deleting such a receipt could orphan FIFO layers,
  strand downstream movements, and leave `products_inventory` drifted —
  silent corruption that surfaced as negative inventory or impossible
  COGS later.
- Inbound shipment creation now enforces **warehouse parity**: the
  shipment's destination must match every linked PO's destination, and
  each receipt against the shipment must use the shipment's warehouse.
  Mismatches are rejected with a friendly error.
- A receipt that includes its own blemish-out adjustments (legitimately
  blemished stock on first receipt) can still be deleted — the preflight
  excludes the receipt's own adjustments from the downstream-consumption
  count.
