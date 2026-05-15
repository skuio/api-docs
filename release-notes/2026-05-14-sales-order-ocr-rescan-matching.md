---
title: "Sales order OCR — rescan, smarter customer and SKU matching"
description: "Rescan an extraction in place, match customers with name normalization, sweep every product identifier, and auto-reconcile mis-extracted quantities."
authors: [product-team]
tags: [minor-feature, improved, orders]
date: 2026-05-14
---

Sales-order OCR has had a working-week of upgrades aimed at the cases
where a customer PO didn't extract cleanly the first time. You can now
**rescan** an extraction from the review screen, customer matching is
forgiving of "Inc.", "LLC", and ampersand/and variants, every product
identifier (not just `product_code`) is checked when looking up a SKU,
and obviously-wrong quantities are auto-reconciled when the line math
makes the intended quantity unambiguous.

<!-- truncate -->

**✨ What this means for you:**

- Rescan without losing your place — the **Rescan** button on the
  review page runs the extraction again and tracks progress in the
  global job tray, mirroring the Purchase Invoice OCR flow.
- "Edward Don & Company, Inc." now matches "Edward Don and Company"
  in your customer list — corporate-suffix and ampersand variants are
  normalized when the literal match fails.
- A SKU buried in an MPN or UPC column is matched as readily as one in
  the product-code column, because every candidate identifier is
  walked through the matching tiers.
- When the extracted quantity disagrees with `line_total / unit_price`,
  and the math is clean, the quantity is corrected automatically and
  the line is tagged so reviewers can see what happened.

## Rescan from the review screen

A new **Rescan** button is available on every extraction's review
page. It re-runs OCR against the original PDF, dispatches a tracked
background job, and surfaces progress through the global Job Progress
Tray — the same pattern Purchase Invoice OCR has used for some time.
You can keep working elsewhere; when the rescan finishes the review
page updates with the fresh result.

The button is also available when an extraction is in a non-standard
status (e.g. `duplicate_detected`). The review page used to get stuck
on a loading spinner for those statuses; it now renders the review UI
for every status except `processing` and `failed`, with status-specific
banners and disabled actions where appropriate.

## Smarter matching

**Customers.** When the direct `LIKE` lookup fails, customer matching
now retries against a normalized stem: corporate suffixes (Inc., LLC,
Co., Ltd.) are stripped, `&` and `and` are interchanged, and
whitespace is collapsed. So whichever form you have on file ("Edward
Don and Company") and whichever form is on the PO ("Edward Don &
Company, Inc."), they meet.

**SKUs.** Product matching used to consider only the column tagged
`product_code`. It now walks every candidate identifier the document
provides — `product_code`, `sku`, `alt_product_code`, `mpn`, `upc` —
through the same tier-1-through-tier-4 search. Azure's extraction also
now emits MPN and UPC as separate fields, so the multi-candidate
sweep has something to work with on documents where the supplier's SKU
isn't in the canonical column.

**Quantities.** A reconciliation pass runs after extraction: if the
quantity field disagrees with `line_total / unit_price`, but the
division rounds cleanly to an integer within 0.02 and `unit_price` is
non-trivial, the quantity is updated to the math-implied value. The
line is tagged with `quantity_source = 'reconciled'` so reviewers can
see which lines were corrected and verify them.

## Unlocking orphaned extractions

When an extraction has been confirmed and then its linked sales order
is later deleted, the foreign key was nulled but the extraction stayed
in `confirmed` status — leaving it locked from rescans, re-classifies,
and deletes. Confirmed extractions whose sales order has been deleted
are now treated as unlocked, and the UI surfaces a tooltip explaining
why the actions are available again.
