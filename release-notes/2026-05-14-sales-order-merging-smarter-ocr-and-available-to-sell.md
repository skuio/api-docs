---
title: Merge sales orders into one shipment, smarter OCR everywhere, and a clearer inventory vocabulary
description: Combine multiple sales orders into a single shipment, smarter invoice and sales-order OCR with tabbed review and supplier-mapped cost lines, modernized warehouse transfer detail pages, demand-planning defaults with rerun preview, an Available to Sell metric across inventory views, and unified background exports across the app.
authors: [product-team]
tags: [new, orders, inventory, purchasing, fulfillment, reporting, integrations]
date: 2026-05-14
---

Two weeks of work tighten the orders-to-fulfillment loop and the
paperwork around it. A new **Sales Order Merge** workflow lets you
combine several orders going to the same customer into a single
physical shipment, the **invoice / sales-order / customer-PO OCR
pipelines** all get smarter (tabbed review, cost-line mappings,
SKU-in-description matching, prev/next inbox navigation), the
**warehouse transfer** receipt and shipment pages are modernized with
Movements + FIFO tabs and inline line-quantity editing, **demand
planning** gains a per-user default configuration plus a non-destructive
rerun preview, **Available to Sell** appears as a first-class metric on
products and inventory planning, and large **exports** across products,
inventory movements, the backorder queue, and the sales-channel coverage
report now stream through the global job tray.

<!-- truncate -->

## Merge multiple sales orders into a single shipment

A long-requested workflow finally ships. When the same customer has
several open orders that are heading to the same address, you can now
combine them into a single **Merged Shipment** that carries shared
tracking — without losing each underlying sales order's link back to its
source channel.

**✨ What this means for you:**

- Pick eligible orders on the **Sales Orders** list and use the new
  **Merge into shipment** bulk action. The eligibility check explains up
  front whether the addresses, currencies, and fulfillment channels are
  compatible, and surfaces warnings (mixed-integration, address
  mismatch) before you commit.
- A new **Merged Shipments** tab under Fulfillments lists every group,
  with status derived from the underlying fulfillments and the merged
  detail page laid out PO-style: full-width tabs, source orders grouped,
  shared tracking up top.
- The source **Sales Order detail** page shows a "Merged Shipment"
  indicator linking back to the group, and the SO detail surfaces
  suggested merge candidates so you can act without leaving the order.
- The group can be **unmerged** at any point before fulfillment, putting
  each sales order back on its own fulfillment path.

Behind the scenes every line keeps its original `sales_channel_line_id`
so downstream channel reconciliation, refunds, and customer-visible
order numbers all behave exactly as if no merge happened.

## Smarter OCR across invoices, sales orders, and customer POs

The OCR pipelines that read paperwork into SKU.io get a wave of accuracy
and ergonomics improvements.

**✨ What this means for you:**

- **Invoice OCR review** is now a **tabbed UI** — Line Items / Financial
  Lines / Unmatched — with per-tab counts. Unmatched lines can be
  ignored or restored inline, and the decision is persisted on the
  extraction so it survives a reload.
- **Mark unmatched lines as cost lines** (freight, duty, handling)
  against a `COST`-classified Financial Line Type, and optionally
  remember the *(supplier, description)* mapping so future imports
  auto-tag those lines as costs on the first pass.
- **SKU-in-description matching** catches invoices (TecMate-style) where
  the LLM puts the SKU on a continuation line below the description —
  the matcher now scans the line description for known supplier SKUs
  with word-bounded longest-match wins.
- **Prev/Next navigation** between OCR review items lets you walk the
  Document Inbox queue without bouncing back to the listing, with
  siblings scoped to pending-review items so failed/processing/confirmed
  rows don't break the cursor.
- **Tabbed Sales Order OCR review** gets rescan, customer-name
  normalization, broader SKU candidates (including Mfg → MPN abbreviation
  mapping), and quantity reconciliation against the catalog.
- **Customer PO OCR** correctly handles forwarded Gmail/Outlook
  customer POs — the customer is pre-resolved from the body's `From:`
  header (not the forwarder) so prior orders, top SKUs, and SKU aliases
  are injected into the LLM context, an order-date fallback chain reads
  from the forwarded headers, and a customer-history pricing fallback
  fills in when no tier price exists.
- **Per-field confidence** ships in the OCR review header, and the line
  items render the resolved SKU alongside the OCR text.

## Modernized warehouse transfer receipt and shipment pages

The warehouse-transfer detail experience now matches the modernized
patterns used elsewhere in the product.

**✨ What this means for you:**

- **Movements** and **FIFO Layers** tabs (receipts only — the
  positive-inventory event) join each receipt and shipment, with
  modernized stat cards on top and clear navigation between
  shipments/receipts inside a transfer.
- **Inline line-quantity editing** on both shipment and receipt lines,
  including FIFO-aware previews so you can see what cost layers will be
  created or consumed before saving.
- **Import + Export** buttons land on the v2 warehouse-transfers index
  with a generic `ImportDefinition` for update-only fields
  (`transfer_date`, `eta`) and a real `.xlsx` line-items template.
- **Receipt delete** now blocks when downstream consumption exists on
  the FIFO layers it created (and excludes a receipt's own blemish
  adjustments from that check), and enforces warehouse parity so a
  delete can't silently move stock to the wrong location.

## Demand planning defaults, rerun preview, and auto-receive

Forecasting and replenishment gain three quality-of-life upgrades for
power users who run many configurations.

**✨ What this means for you:**

- **Star a saved configuration as your default** — the demand-planning
  page auto-loads it on open. This replaces the implicit
  localStorage-based last-config restore with an explicit per-user
  preference.
- **Preview a rerun** of a previous forecast run without creating POs,
  sending alerts, or shifting the schedule's next-run timestamp. Useful
  for "what would have happened if I changed this lookback window"
  exploration.
- **Auto-receive PO** option on replenishment schedules — when enabled
  (and the PO status isn't `draft`), every PO the schedule creates is
  marked received automatically via the standard ShipmentManager.
  Receive failures are captured per-PO without aborting the rest of the
  run.

## Available to Sell, and a clearer inventory vocabulary

Inventory views across the product page, reports, demand planning, and
exports now share a consistent vocabulary, and a new **Available to
Sell** metric (Available − active Backorders, can go negative) appears
as a first-class column.

**✨ What this means for you:**

- The **product detail stats bar** reads
  *Available + Allocated + On Hold = On Hand + In Transit = Total Inventory*,
  with Backorder broken out as its own badge so you can see promised
  vs. on-hand vs. in-transit at a glance.
- The **warehouse inventory table** leads with **Available to Sell**
  (per-warehouse, rendered red when negative). **BO Planned** and
  **BO PO Covered** are populated and tooltips finally explain what
  they're measuring per-warehouse.
- **"Total Stock"** is renamed to **"Total Inventory"** everywhere it
  appears — products list, import modal, reports, the allocation
  pipeline, demand planning filters, and the supplier inventory
  section — so the term lines up with the API field.
- The **Inventory Planning report** adopts Available to Sell as its
  sellable-position column and shows a projected total that already nets
  out the backorder shortage.
- On Hand tooltips are updated to clarify that they exclude In Transit.

## Unified exports through the background job tray

Big exports are no longer a synchronous browser download that times out
on large tenants — they queue, stream, and show up in the global Job
Progress tray.

**✨ What this means for you:**

- A unified **ExportTrackedJob** base class drives every export, with a
  standard `download_url` on results so the Download button in the Job
  Details dialog is reliably present.
- **Export Completed** is now its own alert type — configure in-app,
  email, and Slack delivery independently from other job-completion
  notifications via your alert preferences.
- **Products list** queues exports above 1,000 rows as tracked jobs (and
  streams every row under default sort), so the previous OOM on 16K+
  product exports is fixed.
- **Inventory Movements**, the **Backorder Queue Allocations tab**, and
  the **Sales Channel Coverage** report all gain Export buttons with
  scope (all / filtered / current page / selected), column selection,
  and xlsx/csv formats — Sales Channel Coverage now exports the
  full dataset (previously capped at one paginated page of 100 rows).
- **CSV fallback** kicks in for very large jobs (xlsx → CSV above 15K
  rows by default, hard fallback above 50K) and CSV streams through
  native `fputcsv` so memory stays bounded.
- Existing export TrackedJobLog rows are **backfilled** with
  `category=export` and a `download_url` where the file is still on
  disk, so Download buttons appear on historical runs too.

## Sales Orders and Fulfillments — Vue 3 parity and navigation

Several long-running Vue 2 → Vue 3 parity items land alongside small but
high-impact UI fixes.

**✨ What this means for you:**

- **Fulfillments (/v2/fulfillments)** gains 22 missing advanced-filter
  columns — basic, sales order, customer, items, and date dimensions —
  matching the Vue 2 fulfillments experience.
- **Covered by PO#** advanced filter ships on the Vue 3 Sales Orders
  page with PO-number autocomplete.
- **Inventory Allocation analysis** views (Product Analysis and Supplier
  Analysis) link supplier names, SKUs, sales orders, and PO coverage
  chips through to their detail pages — with a small drilldown icon for
  the cross-analysis hops.
- The Sales Order **Tax breakdown** shows the tax rate next to each
  financial-line entry, **action handlers** preserve the original
  warehouse on already-fulfilled lines during line updates, the
  **fulfill dialog** now lines up with the `remaining_to_fulfill_quantity`
  validator (no more spurious "exceeds remaining" errors), and
  **shipping detail** can be edited on an inbound shipment after it's
  marked as shipped.

## Also in this release

- **Inbound email** notifications are now driven by a free-form
  recipients list (email chips, max 10) rather than a single
  `notify_on_receipt` boolean — and the SES webhook fires distinct
  *Inbound Queued*, *Inbound Verification*, and *Inbound Needs Review*
  alerts based on provider-aware heuristics.
- **Stock Holds** support **partial release** — release a hold in
  multiple installments, with a `partially_released` status visible in
  the list/detail chips and filter dropdown.
- **Vendor Credits**: currency is now selectable per credit (defaults to
  the linked PO's currency, else supplier's default tier, else tenant
  default), and locks once the credit has allocations or payments.
- **Profitability drilldown**: rows now show an "X of Y" line-count
  chip when the drilldown is dimension-scoped (supplier / brand / SKU)
  so partial-line sums aren't misread as full-order totals. The CSV
  export gains the Allocated Revenue, Credits, Cost Allocated, and COGS
  Returned columns that were already in the UI.
- **PDF Templates**: custom fields are now exposed in the variable
  picker and resolve in the preview renderer.
- **Pack/PO submit** for manual-format POs now finalizes the order
  without trying to email the supplier — the Submit button is enabled
  with explanatory tooltip copy.
- **Global search** auto-derived display names are improved across
  ~50 routes — abbreviations like FBA, FNSKU, FIFO, RMA, COGS, GINR,
  AWD, OCR, PDF, OAuth, and brand names like eBay, BigCommerce,
  WooCommerce, QuickBooks, and Magento 2 now render correctly, and 23
  pages get explicit titles where the URL slug didn't match the actual
  page name.
- **Shopify Loop Returns** exchange flows: the SalesCredit issued for a
  return now explicitly funds the EXC- replacement order with a
  Credit → EXC OrderLink, an `exchange_applied` Payment for the
  consumed amount, and a `loop_fees_retained` booking for small
  residuals so the credit reconciles to $0. A backfill command recovers
  legacy SalesCredits that had `sales_channel_refund_id` in metadata
  but no refund Payment rows, and another backfill recovers bundle
  component channel line IDs nulled by an earlier normalization bug.
- **Faire** orders now use a single default shipping method (no more
  per-method mapping), and the FNSKU products mapped/has_sku filters
  resolve correctly under the grouped filter tree.

## Reliability and accounting fixes

A long list of targeted fixes lands across the inventory, fulfillment,
integration, and accounting paths — including:

- **Inventory allocation race protection** via `FOR UPDATE` on on-hand
  reads, with the FOR UPDATE blast radius narrowed for availability
  reads, plus consistent post-lock movement checks during fulfillment.
- **Deadlock retry budgets** aligned across inner/outer transaction
  layers for inventory adjustments and FIFO COGS writes; targeted retry
  on the KitComponentCache recursive INSERT, the metrics invalidation
  upsert, the sales-channel inventory sync status update, the
  per-row priority updates for allocation, the `recalculateTotalCosts`
  path, and the inbound-shipment / purchase-order unique-number
  generators.
- **Xero**: skips sync methods when the integration is paused; falls
  back to "Unknown Customer" when credit-note contact names are null.
- **QuickBooks**: surfaces the "open balance" fault when merging
  customers; excludes inactive QBO customers from match scoring.
- **Amazon**: surfaces "MSKUs not valid" as 422 on inbound plan prep
  details; never lowers PHP `memory_limit` when saving report files;
  applies sales-channel shipping-method mappings to new orders; handles
  the concurrent transaction-insert race in `saveTransaction`.
- **ShipStation**: marks the integration inactive and notifies the user
  on 401; passes the customer-paid shipping amount on order push.
- **Reports / Inventory Valuation**: includes FBA warehouse-transfer
  inventory in the Reserved category drill-down, uses the latest FBA
  ledger snapshot on or before the cutoff, populates the Reserved
  per-row table, and humanizes the warehouse-transfer source label.
- **Fulfillments**: honors the packing-slip policy when absorbing
  released backorder lines, and lets sales orders be manually reopened
  via `force_reopen` even after they're fulfilled and closed.
- **Stock Takes**: reverts inventory correctly on delete for adjustment
  mode and refreshes the inventory cache afterwards.
- **Products**: rejects saving a bundle/kit without at least one
  component (422), preserves supplier pivot fields when columns are
  omitted on import, prevents sales-channel sync from overwriting the
  bundle type, and the inventory floor and cache derivation are aligned
  with the raw columns.
- **Imports** no longer clear existing values when CSV columns are
  omitted from the source file.
