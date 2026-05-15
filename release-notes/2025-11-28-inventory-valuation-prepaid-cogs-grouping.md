---
title: Prepaid inventory and COGS grouping land in the Inventory Valuation report
description: New Prepaid quantity and value tracking, COGS Nominal Code grouping, a separated shipping/billing customer datatable, faster Purchase Order saves, plus a batch of integration and fulfillment fixes.
authors: [product-team]
tags: [improved, reporting, inventory, purchasing, orders, integrations]
date: 2025-11-28
---

The Inventory Valuation report now tracks prepaid inventory as a first-class
section and lets you group totals by COGS Nominal Code — making period-end and
nominal-ledger reconciliation a single-screen exercise. Customer data tables
gained dedicated shipping and billing address columns (with import/export to
match), Purchase Orders with many lines now save faster, and a round of
Shopify and inventory-cache fixes tighten up day-to-day reliability.

<!-- truncate -->

## Prepaid inventory now visible in the Inventory Valuation report

Inventory you've paid for but haven't received yet — typically POs that were
prepaid to the supplier but are still in transit — now shows up as its own
section in the Inventory Valuation report.

**✨ What this means for you:**

- See **Prepaid Quantity** and **Prepaid Value** alongside On-Hand, Reserved,
  and Inbound on the report header.
- New per-row **PREPAID**, **PREPAID AVG COST**, and **PREPAID VALUATION**
  columns let you see what's prepaid down to the SKU/warehouse level.
- Visual styling matches the existing color-coded sections (light purple)
  so prepaid value is easy to spot when scanning the table.

The report still reconciles back to the same warehouse and discrepancy totals
you rely on — prepaid is added as an additive view, not a replacement. Navigate
to **Reports → Inventory Valuation** and run the report as you normally would.

## Group the Inventory Valuation report by COGS Nominal Code

A new **COGS Nominal Code** grouping joins the existing Supplier, Brand,
Warehouse, and SKU options.

**✨ What this means for you:**

- Roll inventory valuation up by the same nominal code you book COGS against in
  your accounting system, making period-end tie-outs much faster.
- Products without an override appear under a clean "No Override" bucket
  instead of as `null`.
- Code and name display together (e.g. `5000 - Cost of Goods Sold`) so you
  don't have to cross-reference your chart of accounts.

Enable the grouping from the report's Groups panel — it's off by default so
existing saved layouts are untouched.

## Customer datatable: dedicated shipping and billing address columns

The customer list used to mix shipping and billing into a single set of address
fields, which made it hard to tell which copy you were looking at and which one
your import/export would touch.

**✨ What this means for you:**

- The Customer datatable now exposes a **Shipping Address** column group
  (Address Line 1-3, City, State/Province, ZIP, Country) and a separate
  **Billing Address** column group with the same fields.
- Customer **CSV exports** now write `shipping_*` and `billing_*` columns
  explicitly — what you see in the UI is exactly what comes out of the export.
- Customer **imports** correctly map those columns back to each customer's
  default shipping and billing address, so round-trips don't silently flatten
  one address into the other.
- The Customer API response gained `default_billing_address` and
  `default_shipping_address` objects (eagerly-loaded), in addition to the
  flattened `shipping_*` / `billing_*` fields used by the datatable.

If you previously exported and re-imported customer data, your shipping and
billing addresses will now stay distinct through the full round-trip.

## Faster Purchase Order edits, even with many lines

Saving a Purchase Order with dozens (or hundreds) of lines used to issue a
fresh database query for every product name and tax rate it touched. That work
now happens in a single batched lookup up front.

**✨ What this means for you:**

- Editing and saving large POs is noticeably quicker, especially when many
  lines change at once.
- Bulk imports and integration-driven PO sync see the same speed-up.
- No behavioral change — line matching by ID, product, or description still
  works exactly as before.

## Sales channel inventory caches refresh when product inventory changes

When product inventory was updated directly, sales-channel inventory caches
sometimes lagged behind, causing storefronts to advertise availability that
the warehouse view had already adjusted.

**✨ What this means for you:**

- Inventory cache invalidation now fires automatically whenever
  `ProductInventoryManager` updates inventory, scoped to the affected products
  (or globally, for full-catalog updates).
- Sales channels reflect inventory changes faster and more reliably.
- No action required — this happens automatically on every applicable
  inventory update.

## Also in this release

- **Fixed: Sales orders being cancelled unintentionally.** The order drawer's
  cancel-confirmation listener was binding the wrong handler on teardown,
  leaving an extra listener attached that could fire a cancel later in the
  session. Cancelling an order now does so exactly once. *(SKU-7751)*
- **Fixed: Shopify product mapping for historical orders.** Removed an overly
  restrictive filter so Shopify products that have since been removed from the
  storefront can still map back to existing SKU records for historical orders.
  *(HF on Shopify create-products job)*
- **Improved: Inventory Assembly (Kits) unit-cost calculation.** Assembly line
  unit costs now compute the proportional component value first and then divide
  by the assembled quantity, producing accurate per-unit costs on multi-component
  kits. A new artisan command, `inventory:recalculate-assembly-line-costs`, is
  available for support to retroactively correct historical assemblies affected
  by the previous formula. *(SKU-7753)*
- **Fixed: Purchase Order update error on partial edits.** The "received vs.
  invoiced lines" validation no longer runs on `PATCH` updates that legitimately
  don't change line state, removing a spurious validation error. *(HF on
  PurchaseOrderValidator)*
- **Fixed: Shopify ship-by / deliver-by dates.** Reworked how Shopify orders
  surface ship-by and deliver-by dates so the values flow through only when
  Shopify actually provided them, instead of overwriting existing dates with
  nulls. *(SKU-7758)*
