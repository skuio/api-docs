---
title: Unified Inventory Allocation, Invoice & Customer-PO OCR, and a deeper accounting toolkit
description: One allocation model across reservations, planned stock and backorders; Azure-powered OCR for supplier invoices and customer purchase orders; new Landed Cost Breakdown and GINR Accrued Purchases reports; and a long list of orders, fulfillment, and integration improvements.
authors: [product-team]
tags: [improved, inventory, orders, purchasing, fulfillment, reporting, integrations, accounting]
date: 2026-04-30
---

This release replaces the old reservation, planned-stock, and backorder
plumbing with a single **Inventory Allocation** model that runs across Sales
Orders, Purchase Orders, Warehouse Transfers, and FIFO layers — so one number
on a product page now answers "what's promised, what's planned, and what's
on hold." Alongside that, two **Azure-powered OCR pipelines** automate the
slowest two pieces of paperwork in the system (supplier invoices into 3-way
PO matches, and customer purchase orders into draft Sales Orders), two new
accounting reports (**Landed Cost Breakdown** and a refreshed **GINR Accrued
Purchases**) make period-end reconciliation faster, and dozens of smaller
improvements land across the Allocation Pipeline, Demand Planning, the
sales-order Channel tab, Amazon, Shopify, and Veracore.

<!-- truncate -->

## One unified Inventory Allocation model

The biggest single change in this release is structural. The old system tracked
"reservations," "planned stock," and "backorders" through three different code
paths and three different data shapes. They now collapse into a single
**InventoryAllocation** record with a status — `Planned`, `AwaitingReceipt`,
`Allocated`, or `Fulfilled` — and everything else (badges, tabs, pipeline,
health checks, reports) reads from the same source.

**✨ What this means for you:**

- **Sales Order detail** gains a dedicated **Allocations** tab with a count
  badge. The fulfillment warehouse card's line chips now read **Allocated /
  Not Allocated** instead of Reserved / Not Reserved, and backordered lines
  are explicitly broken out as **Awaiting Receipt** vs **Backorder Released**
  so you can see what's covered by an incoming PO and what isn't.
- **Purchase Order detail**, **Warehouse Transfer detail**, and **FIFO Layer
  detail** all gain matching Allocations tabs so you can drill from any side
  of the relationship into the rows it touches.
- **Bulk allocate / unallocate** at the Sales Orders list level: pick the
  orders, preview the per-line eligibility, then run the change as a tracked
  job in the global background-jobs tray.
- **Allocation Pipeline page** picks up real anchor-based tabs (so right-click
  → open in new tab and the browser Back button both work), shows the
  backorder ID as a selectable field, and gains a **Change Supplier** action
  (individual + bulk) on Planned / Awaiting Receipt allocations — restricted
  to the suppliers actually configured for each product.
- **Demand Planning** now shows Allocated and On Hold quantities alongside On
  Hand, with a clearer collapsed cell (`OnHand/Avail/Alloc/Hold |
  Inbnd/Transit | BO`) and grouped breakdown table.
- **Sales Order Channel tab** and the per-line stock cells use the same
  Allocation context so the language is consistent end-to-end.

Behind the scenes, FIFO layer selection has moved to fulfillment time (rather
than allocation time), inventory movements no longer carry the old polymorphic
"layer" shape, and a string of inventory-health checks (orphaned allocations,
over-allocated SOLs, stale active allocations on terminal lines, etc.) keep
the system reconciled. The renames are visible too: **"Reserved" stock is now
"On Hold"** in tooltips, modals, demand planning, and product pages.

## Reserve Stock and Stock Holds: free-text reasons, bulk actions, browse drawer

The Reserve Stock flow and Stock Holds page were rebuilt on top of the new
allocation model and finally pick up the standard datatable design.

**✨ What this means for you:**

- Hold reasons are now **free-text** with autocomplete from previously-used
  reasons, plus a "Use as reason" option when you type a new one — no more
  fixed dropdown.
- **Bulk Release** and **Bulk Delete** actions on the Stock Holds list, with
  a default **Active** filter so the page opens to the rows you actually need
  to act on.
- The Browse Products drawer respects the selected warehouse, surfaces a
  warehouse-specific Available column, and disables products with zero stock
  so you can't accidentally reserve nothing.
- A new **Browse Kit Products** drawer is wired into the Assembly create page
  so kit selection uses the same datatable-style picker.

## Invoice OCR with 3-Way PO Matching

A new OCR pipeline scans supplier invoices, extracts header fields and line
items, and lines them up against the originating Purchase Order and its
receipts in a side-by-side review screen.

**✨ What this means for you:**

- Upload an invoice PDF or attach one to a Purchase Invoice — the system pulls
  vendor, invoice number, dates, totals, tax, and line items via **Azure
  Document Intelligence** and presents them in a structured panel for review.
- The **3-Way Match** view compares **PO Amount vs Invoice Amount** per line
  with color-shaded column groups, tolerance-band variance highlighting, and
  receipt cross-links so you can see exactly what was ordered, received, and
  invoiced before clicking Apply.
- A separate **Cost Lines** section summarizes freight, brokerage, and other
  cost-only invoice items, and revenue/cost categorizations applied during
  review are remembered for future invoices from the same vendor.
- An internal `ocr_usage_logs` table tracks per-call costs so we can audit
  usage tenant by tenant.
- All credentials live in AWS Secrets Manager — there is no key handling on
  the user's side.

Settings live under **Settings → Integrations → Invoice OCR**.

## Customer PO OCR — scan a customer purchase order into a draft sales order

The same engine drives a separate flow for inbound paperwork: upload a
customer's PO PDF and the system creates a **draft Sales Order** with header
fields, line items, and a customer best-match already filled in.

**✨ What this means for you:**

- A new **OCR Import** tab on the Create Sales Order modal accepts a PDF and
  routes you to a dedicated review screen.
- **5-tier product matching**: existing customer SKU mappings → SKU → barcode
  → product name fuzzy match → manual selection. Mappings learned during one
  import are remembered for the next one.
- The same screen lets you **create a new customer inline** (with
  address-form pre-population from the OCR output) and **add a fallback
  ordered date** when the document doesn't carry one.
- The PDF is proxied through the backend (no S3 CORS surprises) and rendered
  side-by-side with the extracted fields, with a draggable Create Customer
  dialog so you can keep the source visible while filling in details.

## Inbound Shipments: PO Receipts now flow through one model

Behind the scenes we've been migrating PO Receipts onto the InboundShipment
model. This release ships Phase 3 (mechanical UI cutover to InboundShipment
endpoints) and most of Phase 4 (flipping PO Receipts tab, PO receipt links,
accounting reads, COGS reads, and FIFO origin types onto IS-canonical).

**✨ What this means for you:**

- The **PO Receipts tab** on a Purchase Order now reads from
  InboundShipmentReceipts directly. Clicking a receipt opens
  `/v2/inbound-shipments/receipts/{id}` — there is no more legacy PO Receipt
  detail page to land on.
- Cost / COGS / accounting reads (Bill manager, FIFO recalculation, valuation
  drilldown, accounting batches) traverse InboundShipmentReceiptLine first
  and fall through to the legacy path only where dropship-from-PO still
  needs it.
- FIFO layer source labels recognise IS receipt lines so the audit trail
  reads naturally on new receipts.

No action is required — links and tabs simply route to the new pages.

## Landed Cost Breakdown report

A new **Landed Cost Breakdown** report tracks the non-product costs that ride
along with inventory (freight, customs, brokerage, insurance, handling, taxes,
other) and rolls them up by sales channel, brand, product, or supplier.

**✨ What this means for you:**

- See the **per-unit cost breakdown** behind any product's FIFO cost, with
  popovers on Purchase Order, Sales Order, and inventory pages showing exactly
  which classifications make up that cost.
- Group totals by **Sales Channel / Brand / Product / Supplier** for margin
  analysis at the right level.
- Costs cascade correctly into downstream **Warehouse Transfer** FIFO layers
  and **AWD** FIFO layers, so the breakdown stays accurate when stock moves.

Navigate to **Reports → Landed Cost Breakdown**.

## GINR Accrued Purchases report — refreshed with FBA receipts and drilldowns

The Goods Invoiced, Not Yet Received report now accounts for **Amazon FBA
inbound receipts** so FBA-inbound POs no longer linger as "perpetually
unreceived." The breakdown is sortable, supports a **show settled** toggle
for closed POs, and gains a drilldown dialog plus an open-PO **aging trend**.

**✨ What this means for you:**

- Amazon FBA POs reflect actual receipt state — "% Received" matches reality
  on FBA POs instead of being capped at the AWD step.
- The per-PO breakdown hides fully-received POs by default for a clean GINR
  view; toggle **show settled** when you want to see them.
- Click any row to open a drilldown with line-level detail; an aging dialog
  on the report surfaces how long open POs have been sitting at each stage.
- Purchase Order totals auto-resync when line quantity/amount/discount change,
  and a one-time backfill migration repairs historical `purchase_orders.total_cost`
  drift.

## Sales Order Importer: true upsert, with safety rails

The Vue 3 Sales Order CSV importer now supports **update-by-id** and
**update-by-(order number + sales channel)** in addition to create, with
replace-all line semantics, explicit blocked-row reasons, and a confirmation
step before any update runs.

**✨ What this means for you:**

- Round-trip an export and re-import — line edits go to the same rows.
- **Order-level discounts** and **shipping revenue** are now importable
  fields. Closed orders accept **diff-aware** updates: only changed lines are
  touched, so a partial edit doesn't blow away the rest of the order.
- **Field-aware update validation** rejects only the columns that can't be
  updated for the row's current status, instead of failing the whole row.
- **id-only** updates are supported when you only want to flip a single field
  by row id, without re-supplying the full payload.

## Profitability Trend report — week-of date ranges

Week-bucketed profitability columns now render as **"Week of MMM D"** with a
tooltip showing the full date range and ISO week number, and clicking the
header drills into the underlying period. CSV exports include the week
metadata rows so external reporting can pivot on the same labels.

## Backorder Queue: ETA column and filter

A new **ETA** column (default visible) and a multi-state ETA filter (Has ETA,
Late ETA, No ETA) on the Backorder Queue resolve estimated arrival in
priority order: **active Inbound Shipment** expected arrival → **PO Line**
estimated delivery → **PO Header** estimated delivery. Multi-PO splits show
the earliest applicable ETA.

## Amazon improvements

- **FBA/MFN sub-channel auto-classification.** Each Amazon order is now
  resolved to an FBA or MFN sub-sales-channel on sync (based on the SP-API
  `FulfillmentChannel`), so the Sales Orders filter UI no longer needs a
  separate "is_fba" toggle and historical reporting splits cleanly. A backfill
  command is documented for existing orders.
- **Configurable Amazon fee → financial-line mapping.** Tenants can now
  control how Amazon settlement breakdowns become FinancialLines, with a
  background-job recategorization pass for past **draft** accounting
  transactions when the mapping changes.
- **AFN (Amazon FBA) unified fulfillment view.** FBA orders are fulfilled
  end-to-end by Amazon, so the local Pending/Fulfilled SOF workflow on those
  orders has been replaced with a read-only card view driven by the daily
  **FBA Shipments** report (matched on `amazon_order_id`), with a "Shipped by
  Amazon" empty state until the report syncs.
- **Amazon Transactions export.** Export Amazon finance transactions
  (xlsx/csv, with all/filtered/current-page/selected scope) as a tracked job
  in the global jobs tray. Any tracked job whose results include
  `download_url` + `download_filename` now renders a Download button — future
  export jobs get the UX for free.

## Sales Order Channel tab: drag-and-drop mapping (SKU-7998)

The Channel tab on a Sales Order has been rebuilt around drag-and-drop:

- Visual states distinguish unmapped, mapped, and orphaned channel cards.
- Drag a channel line onto a SOL to map it; a **SKU-aware confirmation dialog**
  warns when the SKUs don't match.
- **Auto-match by SKU** runs in one click and previews the matches before
  applying.
- An always-visible undo toast lets you revert the last mapping change.
- Orphaned marketplace lines are surfaced directly on the tab.

## Provider-aware shipping address validation (SKU-7997)

Shipping address validation has moved from the **sales-order** level to the
**warehouse** level so that providers with permissive address handling
(Shipfusion, ShipHero, Trackstar, FBA) aren't blocked by rules meant for
stricter providers (ShipStation, Starshipit, ShipMyOrders).

Each provider now declares a `FulfillmentAddressRequirement` (NONE, RELAXED,
or STRICT) describing the fields it requires. Sales orders are no longer
flagged for missing recipient names when they're being routed through a
provider that doesn't care.

## Atomic fulfillment transitions (SKU-8001)

Fulfillment status transitions now run under a row-level lock with a
planned-only guard, plus a new dedicated **Mark for Pickup** action with
partial-quantity support and audit fields. This eliminates a class of races
where two concurrent dispatches could transition the same SOF into mismatched
states.

## Over-fulfillment split pipeline (SKU-8000)

When a sales channel reports a shipment quantity that exceeds the sales-order
line, the excess no longer over-counts the linked sale movement. Instead the
SOFL keeps the actually-shipped quantity, the linked sale movement is trimmed
to the SOL share, and the overage is recorded as a negative
**InventoryAdjustment** that points back to the SOFL — so the audit trail
still shows where the extra stock went and inventory levels stay correct. A
one-time backfill command retags existing SOFL-linked over-fulfillment
movements.

## Unified Address Form + Google Places autocomplete (SKU-7943)

Every address form in the app now uses a single **AddressFormFields**
component with optional Google Places autocomplete. The Google Places API key
and toggle live under **Settings → General**, so an admin can enable address
autocomplete tenant-wide and every Create/Edit Address dialog picks it up.

## Veracore Phase 8 (SKU-7960)

The Veracore integration finishes its modernization pass: source code
visibility for orders pulled from Veracore, a redesigned management dashboard,
and the fulfillment cost reconcile + sales-order line recalc now run as
tracked jobs (visible in the global jobs tray).

## Also in this release

- **Bulk allocate / unallocate sales orders** with an eligibility preview
  modal, backed by tracked queue jobs.
- **`/inventory-integrity` cross-tenant health command.** Runs
  `sku:inventory:health --identify=all` in parallel across all production
  tenants and aggregates hits into a site × check matrix. The matching
  artisan command is also more user-friendly (searchable prompt, ordered
  fixes, colour-coded hit counts).
- **Inventory health gains many checks**, all runnable individually from the
  CLI: phantom product allocations, open-fulfillment-missing-allocation,
  over-allocated SOLs, stale active allocations on terminal SOLs, orphaned
  deleted-SOL allocations, partial fulfillment deductions, and stale
  IN_TRANSIT movements on received warehouse transfers — each with an
  identify-and-fix split so support can dry-run before repairing.
- **Allocation insufficient → 422 on fulfillment dispatch.** Manual
  fulfillment dispatch and Mark-for-Pickup now block when the allocation is
  insufficient, with a clear error instead of a silent partial.
- **PO `received_for_less` status** with an "Undo Close with Discrepancy"
  action for unposted accounting transactions, plus a Receiving Discrepancy
  card on Order Details linking to the related accounting transaction.
- **Per-warehouse Available columns and filters** on the Products datatable
  (direct + 3PL warehouses), so you can build views like "products where
  Warehouse A has < 5 available."
- **Dashboard Needs Attention** picks up two new alert items: fulfillment
  debt lines (out-of-sync channel lines with positive debt) and orders with
  unallocated lines. Each item links straight to the right saved view.
- **Demand Planning min-stock-level-per-product** target mode on Target Stock
  Level forecasts uses each product's own `min_stock_level` as the per-row
  target — useful when min stock varies widely across the catalog.
- **Saved-view global default audit.** The Manage Saved Views dialog now
  shows who set a view as the global default and when. The global-search box
  also flushes a pending Enter once results arrive, so hitting Enter early
  no longer silently does nothing.
- **Sales Order line type chip.** The line items grid now shows the product
  type (Bundle, Matrix, Kit, etc.) on each line for at-a-glance visibility.
- **Shopify map-as-revenue** (SKU-8006). Flag a product so Shopify orders for
  it import as **FinancialLines** rather than SOLs, and convert an
  already-imported line to a revenue line from the row actions menu.
- **Shopify bundle component gate** (SKU-8026). Bundle SOLs are held back
  from Shopify submission until every component line has a fulfillment line —
  preventing the partial-bundle dispatch race.
- **Shopify field → supplier pricing tier mapping** (SKU-8011). Map any
  Shopify product field into one of the configured supplier pricing tiers on
  import, with the **Default Price** column visible on the Products datatable.
- **Drag-and-drop file upload on Purchase Invoices.** Dragging anywhere on
  the invoice detail page triggers upload, with a full-page overlay during
  drag — no need to find the Documents tab.
- **Inventory Adjustment guard against stranding hard-allocated stock.** The
  V1 manual adjustment path now refuses negative adjustments that would push
  FIFO below the quantity committed to in-flight fulfillments or active
  InventoryHolds.
- **Forecast configuration tweaks.** Forecast runs persist the destination
  warehouse selection on reload, show the full run configuration on the run
  detail page, and label runs with **"All warehouses"** instead of
  "Default" when no destination is selected. `target_stock_days=0` is
  accepted with the min-stock-level-as-target mode. The Fill Backorders
  forecast now respects the selected destination warehouse and trusts the
  allocation's `supplier_id` for routing.
- **Custom field date formatting.** Custom-field date cells (and detail
  sections) now respect the configured date format instead of falling back
  to the raw ISO timestamp.
- **Channel-sync-realtime queue for OOS transitions** (SKU-7993) — and it's
  now the default for all Shopify instances, so OOS pushes don't sit behind
  unrelated bulk syncs.
- **Per-line "Sales-Channel Fulfilled" indicator** on the Sales Order detail.
- **Fixed: Shopify cancellation when a Shipfusion order is already in-flight.**
  Cancellation no longer leaves stale allocations or out-of-sync flags.
- **Fixed: Shopify out-of-sync line cleanup** now runs regardless of order
  status and considers remaining Shopify quantity, so cancelled-fulfillment
  edge cases reallocate cleanly.
- **Fixed: Starshipit deletability check** reads `shipment.status` for
  dispatched orders (instead of an incorrect SO-level field), so the Delete
  Fulfillment dialog reflects reality on Starshipit-dispatched orders.
- **Fixed: eBay token refresh.** A 401 from eBay now refreshes the access
  token before flagging the integration as inactive.
- **Fixed: WooCommerce HTML 404 retries.** WooCommerce now retries HTML 404
  responses rather than failing the job outright (SKUIO-BAF, SKUIO-BAE).
- **Fixed: QBO duplicate customer flow** correctly handles merged or
  deactivated QBO customers; the resulting sync error is now also more
  user-friendly.
- **Fixed: Sales-order tax drift.** Per-line tax edits no longer cause
  `tax_total` drift on save, and the footer Tax row now reflects
  financial-line tax.
- **Fixed: Inventory Valuation report.** `received_for_less` pending inbounds
  are excluded from date-filtered queries, AWD pre-adoption inventory is now
  included in valuation, and warehouse-transfer-allocated stock no longer
  shows as $0 in the report.
- **Fixed: SOL ship-by / deliver-by dates** are now stored in UTC with the
  app timezone applied at the boundary (matching the system-wide timezone
  convention).
- **Performance: dashboard "needs attention" query** runs noticeably faster
  with a narrowed unallocated scan and an outer date filter. The
  `getQualifyingItems()` and `getQualifyingAmazonLedgers()` queries are now
  sargable, and accounting date columns are indexed.
- **Reliability: deadlock-retry coverage** has been widened across
  SalesOrderRepository, SalesOrderUpdateActionHandler, PurchaseOrder delete,
  syncCoverages, and `transition()`. Transient MySQL auto-increment (1467)
  and lock-wait errors retry with jittered exponential backoff, and a shared
  `TransientDatabaseError` helper unifies detection.
