---
title: "Payment Terms are now multi-stage milestone schedules"
description: "Define payment terms as a sequence of milestones — 30% deposit at order, 40% on shipment, 30% net-30 after delivery — and have expected vendor deposits auto-generated for each PO."
authors: [product-team]
tags: [new, purchasing, accounting]
date: 2026-05-13
---

Payment terms in SKU.io are no longer limited to a single net-days value.
A payment term is now a **schedule of milestones** — each with its own
percentage (or fixed amount) and trigger event (PO created, shipment ETD,
port ETA, warehouse ETA, invoice date, and more).

<!-- truncate -->

**✨ What this means for you:**

- Define a term like *"30% deposit on PO creation, 40% on shipment ETD,
  30% net-30 after warehouse arrival"* once and reuse it across every
  PO that uses those terms.
- When a PO is created or scheduled, SKU.io automatically generates the
  expected **vendor-deposit milestones** so AP can see what's coming due
  and finance can forecast cash flow.
- Trigger events tie directly into the new **inbound shipment logistics
  tracking** — when the actual port ETA is recorded, downstream milestone
  due dates shift accordingly.
- Milestones can be edited inline on the term, or in a full dialog editor
  for complex schedules. Existing simple payment terms continue to work
  unchanged.

You'll find the new editor under **Settings → Purchasing → Payment Terms**.
