---
title: "Replenishment scheduler can now auto-receive POs"
description: "Tick the new Auto-receive PO option on a replenishment schedule and each PO it creates is marked received automatically."
authors: [product-team]
tags: [new, purchasing, inventory]
date: 2026-05-14
---

The Replenishment Scheduler has a new **Auto-receive PO** checkbox. When
enabled, every PO created by the schedule is automatically marked
received via the normal shipment manager — so the resulting inventory is
on-hand the moment the schedule fires.

<!-- truncate -->

**✨ What this means for you:**

- Useful for self-managed warehouses or transfer-style replenishments
  where receipt is effectively immediate and you don't want an operator
  to click *Receive* for each PO.
- The option is disabled when the PO status is **Draft** — a draft PO
  can't be auto-received, so the checkbox grays out to make the
  constraint obvious.
- Auto-receive failures are captured per-PO without aborting the rest
  of the schedule run, so one bad row doesn't stall the batch.

Find the option on **Demand Planning → Schedules → Edit schedule**.
