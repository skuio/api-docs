---
title: "Serial Number Tracking — full traceability, unit by unit"
description: "Track individual serial numbers on the products that need it: capture them as stock comes in, with per-product opt-in and automatic uniqueness checks."
authors: [product-team]
tags: [major-feature, new, inventory]
date: 2026-07-21T02:40:00
---

If you sell regulated, high-value, or warranty-backed goods — electronics, medical devices, cosmetics, anything with a recall or authenticity requirement — "how many do we have" was never enough. You needed to know *which one*, and where it went. Until now SKU.io tracked quantities but not the individual units behind them. **Serial Number Tracking** closes that gap: turn it on for the products that need it, and capture a serial for every unit as stock comes in.

<!-- truncate -->

**✨ What this means for you:**

- **Opt in per product** — enable serial tracking only where you need it, so the rest of your catalog stays simple.
- **Capture a serial for every unit** as you receive stock, right in the adjustment flow.
- **No duplicates** — every serial is checked for uniqueness as you enter it.
- **Type, scan, or paste** serials in bulk — whatever's fastest at your bench.
- Built on a **tenant-wide switch** so serial tracking is off by default and only turns on when you decide.

## Turn it on only where you need it

Serial tracking is a two-step opt-in, so it never gets in the way of products that don't need it. First an admin flips the tenant-wide switch in **Settings → Inventory → Inventory Tracking**; then each product that should be serialized gets its own **Track Serials** toggle on its **Serial & Lot Tracking** tab. You also choose how serials are created — type or scan each one yourself, with SKU.io validating uniqueness for you.

![A product's Serial & Lot Tracking tab, with Track Serials enabled and the generation mode set to manual entry with automatic uniqueness validation](/img/release-notes/serial-number-tracking/product-tracking-toggle.png)

## Capture serials as stock comes in

Once a product is serialized, receiving stock asks for the detail that matters. Add inventory as usual and a **Serial Numbers** field appears, keeping a running count against the quantity — "3 of 3" — so you can't commit a receipt that's missing a unit. Scan them one at a time, type them, or paste a whole list at once; each serial becomes a chip you can review and remove before you commit.

![The Adjust Inventory dialog receiving three units of a serialized product, with all three serial numbers captured and a 3-of-3 counter](/img/release-notes/serial-number-tracking/serial-capture.png)

## Where to find it

Switch it on under **Settings → Inventory → Inventory Tracking**, then enable **Track Serials** on any product from its **Serial & Lot Tracking** tab. From then on, every receipt for that product prompts you to capture its serials — no separate screen, no extra step. Lot and batch numbers work the same way for products that need expiry or batch traceability instead.
