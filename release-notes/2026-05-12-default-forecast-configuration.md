---
title: "Pin your default forecast configuration and preview reruns"
description: "Star a saved demand-planning configuration to load it automatically, and rerun any past forecast in a non-destructive Preview mode."
authors: [product-team]
tags: [feature, improved, inventory]
date: 2026-05-12
---

The Demand Planning page now opens to your starred forecast every time —
no more re-picking a configuration each visit — and you can rerun any
past forecast in a new **Preview** mode that recomputes the numbers
without creating purchase orders, sending alerts, or moving a schedule's
next run date.

<!-- truncate -->

**✨ What this means for you:**

- A starred configuration loads automatically when you open Demand
  Planning, so your most-used scenario is one click away.
- Each user can pick their own default — your starred config is yours
  alone, not a tenant-wide setting.
- Preview rerun lets you sanity-check "what if we ran this again with
  today's inventory?" without committing to a fresh PO batch or
  disturbing the schedule.

## Set a default configuration

On the **Demand Planning** page, open the saved configurations menu and
click the star next to any saved configuration to make it your default.
The next time you open Demand Planning — in any browser, on any
device — that configuration loads automatically, replacing the older
behavior that relied on browser local storage and could lose track
between machines.

Starring a different configuration replaces the previous default; click
the star again to clear it. Your default is per-user, so different
buyers on the same account can each pin the scenario that matters most
to them.

## Preview a rerun without side effects

On any forecast run's detail page, the **Rerun** action now offers a
**Preview** mode alongside the existing live rerun. In Preview mode the
forecast recomputes against current inventory and sales velocity, but:

- No purchase orders are created, even on schedules configured to
  auto-create POs.
- No alerts or notifications are sent.
- The schedule's next-run date is left untouched.

Use it to validate that recent receipts have absorbed a shortage, to
test how a configuration change would affect the recommendation, or to
get a fresh read between scheduled runs without committing to action.
The Preview result is saved as a normal forecast run you can open,
compare, and export — it just doesn't trigger any of the downstream
side effects of a live run.
