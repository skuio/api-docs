---
title: "Deleting a closed adjustment-mode stock take now reverses inventory correctly"
description: "The reversal logic uses adjustment_qty for adjustment-mode stock takes (where snapshot_inventory is null), so the cached on-hand returns to the right value."
authors: [product-team]
tags: [fixed, inventory]
date: 2026-05-14
---

Deleting a closed adjustment-mode stock take now reverses the underlying
inventory movements correctly and refreshes the on-hand cache. Previously
the reversal silently fell through to a no-op on positive adjustments,
leaving the inventory_movements / fifo_layers rows in place and the cache
inflated.

<!-- truncate -->

If you'd previously deleted an adjustment-mode stock take and noticed
its quantity hadn't actually rolled back, undoing and redoing the delete
on those records will now correct the cached inventory.
