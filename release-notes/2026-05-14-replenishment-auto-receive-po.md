---
title: "Auto-receive POs from replenishment schedules"
description: "Enable auto-receive on a forecast schedule and every PO it creates is automatically marked received — porting the legacy supplier-level behavior into the new scheduler."
authors: [product-team]
tags: [feature, new, purchasing, inventory]
date: 2026-05-14
---

The new replenishment scheduler now supports the **auto-receive PO**
option that the older supplier-level automated backorder purchasing
flow had — turn it on, and every PO the schedule creates is
automatically marked received the moment it's generated. Useful for
consignment, drop-ship, and dropshipper-style suppliers where the
"received" status is administrative rather than physical.

<!-- truncate -->

**✨ What this means for you:**

- One option on the schedule replaces the manual receive step on every
  generated PO — no more loop of opening each PO to mark received.
- The option only acts on POs whose status is not `draft`, so dry-run
  or review-first workflows still pause for human approval before the
  receive fires.
- If a single PO fails to receive (locked stock-take, missing
  warehouse, etc.) the failure is captured per-PO and the rest of the
  run still completes — one bad PO doesn't abort the whole schedule.

## Where to find it

When you create or edit a forecast schedule, the **Schedule Form**
dialog now has an **Auto-receive PO** checkbox alongside the existing
PO-creation options. Enable it and any PO created by that schedule
will be received automatically as part of the same run, using the
existing `ShipmentManager` receive path — so all the usual inventory
movements, FIFO layer creation, and downstream notifications happen as
if you'd received the PO by hand.

The new option is captured on the schedule itself, so it stays in
effect across every run until you turn it off.

## What "auto-receive" does

- Only triggers when the PO's status comes out of generation as
  anything other than `draft`. Draft POs are deliberately paused for
  human review, and we don't bypass that.
- Calls into `ShipmentManager` to mark the PO fully received —
  identical to clicking "Receive" in the UI — so inventory updates,
  FIFO costing, and any downstream allocation matching all fire
  normally.
- Records receive failures on the run's per-PO results without
  aborting the rest of the schedule. You can see what failed and why
  on the run's detail page.

A new `ForecastScheduleManagerTest` covers the happy path, the
draft-skip behavior, and the per-PO failure handling.

## When to use it

Auto-receive is a good fit when "received" doesn't represent a
physical stock-on movement — e.g. consignment inventory you're already
holding, dropshipper workflows where the supplier ships directly to
the customer, or any pipeline where the PO exists for accounting
rather than for warehouse receipt. In those cases the receive step is
clerical, and skipping the manual click on every PO saves real time.

For traditional purchasing where the PO precedes a physical inbound,
leave the option off — you want the explicit receive step when the
goods land.
