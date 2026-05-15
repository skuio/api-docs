---
title: Settings overhaul, Stock Take rewrite, Profitability report, and per-store PDF templates
description: A full settings refactor with server-side datatables and advanced filters, a brand-new Vue 3 Stock Take workflow with reconciliation and barcode scanning, a Profitability report with FIFO drilldown, per-store packing-slip and PDF templates, plus a deep wave of Amazon, Shopify, and Veracore improvements.
authors: [product-team]
tags: [major-feature, improved, inventory, integrations, fulfillment, purchasing, reporting]
date: 2026-02-28
---

The **Settings** area has been rebuilt on the modern datatable stack —
every inline list now supports server-side search, sorting, advanced
filters, bulk actions, and saved views. **Stock Takes** are now a full
Vue 3 workspace with a reconciliation workflow, an adjustment mode, and
a scanner-friendly barcode modal. A new **Profitability report** brings
trend, cost-breakdown, and per-order FIFO drilldown views. PDF
templates for Sales Orders, Purchase Orders, and the new Packing Slip
type can now be **overridden per store**. Plus deep improvements across
Amazon (MFN fulfillment sync, settlement-type mappings export/import,
FBA in COGS, supplier-sourced inbound plans, unified initial inventory),
Shopify (out-of-sync detection, GDPR webhooks, refund handling), and
Veracore (SOAP auth, OrderShipTo customer fields).

<!-- truncate -->

## Settings rebuilt on the modern datatable stack

Every page under **Settings** has been migrated to the same server-side
datatable foundation already used elsewhere in the app.

**✨ What this means for you:**

- Search, sort, paginate, and filter every settings list — Attributes,
  Brands, Categories, Currencies, CSV Templates, Data Feeds, Email
  Templates, Financial Line Types, Incoterms, Nominal Codes, Payment
  Terms, Payment Types, Pricing Tiers, Return Reasons, Shipping
  Methods, Stores, Supplier Pricing Tiers, Tags, Tax Rates, and Users.
- Open the **Advanced Filters** modal on settings lists to build
  multi-condition filter trees, save them as named views, and share
  filter URLs with teammates.
- A new **Bulk Actions** toolbar lets you archive, restore, or delete
  multiple rows in one go on every settings list that supports it.
- An **Archive** column filter (including an "All" option) and archive
  icons make it obvious which records are active.
- Each inline-list page now uses a consistent layout — search and
  filters merged into the toolbar, labelled inputs above the controls,
  and the standard `FilterSelect` component replacing one-off
  `v-select` filters.
- URL synchronization is enabled across settings lists so filters,
  sorts, and pages survive refreshes and shared links.

The **Nominal Code Mappings** page is brand new — it surfaces every
nominal-code mapping in one searchable, filterable table.

**Tax Rates** gained a CSV import to seed or update rates in bulk, and
both the **Email Templates** and **PDF Templates** pages now load on
the same datatable layout with proper preview, variables, and per-type
routing.

## Per-store packing slips and PDF template overrides

PDF templates now support **per-store overrides** for every template
type, with a brand-new **Packing Slip** template.

**✨ What this means for you:**

- Customize Sales Order, Purchase Order, and Packing Slip PDFs per
  store — open a template and pick **Template Scope** to either edit
  the global default or create a **Store Override**.
- A **Per Store** badge on the template list shows at a glance which
  stores have custom templates.
- A new **Print Packing Slips** action in the sales-order Actions menu
  produces packing slip PDFs with product images, properly-broken
  shipping addresses, and a conditional fulfillment row.
- **Reset to Default** drops a store override back to the global
  template with a clear confirmation flow.
- The packing template understands store and order context, so the
  effective template resolves automatically when a PDF is generated.

You'll find the editor under **Settings → PDF Templates → Packing
Slip** (and the same Template Scope dropdown is now available for the
existing Sales Order and Purchase Order templates).

## Stock Takes — a Vue 3 workflow with reconciliation and scanning

Stock takes have been fully rewritten in Vue 3 with a deeper
reconciliation flow that surfaces fulfillment and reservation conflicts
before you finalize.

**✨ What this means for you:**

- A new **Reconciliation** dialog detects sales-order lines that depend
  on the stock you're about to remove. For each impacted line you can
  send the affected quantity to **Backorder** (this replaces the older
  "Cancel Fulfillments" action and handles both fulfillment-committed
  and reservation-only items in one place).
- The reconciliation dialog also shows **Reservation visibility** with
  order dates so you can decide which reservations to backorder first
  (newest-first by default).
- Toggle **Adjustment Mode** when you only need to correct a handful of
  items rather than count the whole warehouse.
- A scanner-friendly **Barcode Scan** modal lets you sweep through
  inventory with a handheld scanner without touching the keyboard.
- New tabs on every stock take — **Activity Log**, **FIFO Layers**,
  **Inventory Movements** — give a full audit trail for every count.
- **Initial Count** type, parent/child relationships, dynamic
  variance/shortfall calculations, and per-row cost correction land in
  the same workflow.
- **Reverse Stock Take** is now possible (with a FIFO-layer analysis
  step) for the rare cases when a finalized count needs to be undone.
- **Re-snapshot Inventory** and **Revert to Draft** actions are
  available from the stock take header.
- The import and export use a consistent "Qty Counted" label, and the
  column order on the table now puts **Qty Counted** and **Unit Cost**
  before the snapshot columns where most teams want them.
- **Negative inventory** that would result from a count is caught with
  a clear inline error instead of failing silently.
- The **Stock Take CSV exporter** keeps working for closed stock takes
  too — the export button is no longer hidden once a count is
  finalized.

## Profitability report

A new **Profitability** report goes live with three connected views.

**✨ What this means for you:**

- **Trend** view: chart revenue, cost, profit, margin, units sold, or
  number of orders over time — switch any KPI tile to drive the chart.
- **Cost Breakdown** view: see totals by financial-line type
  (revenue, COGS, fees, returns, discounts, etc.) with a waterfall
  chart that walks revenue down to net profit.
- **Drilldown**: click into any group to see the underlying sales
  orders with per-order revenue, cost, profit, margin, and a clickable
  **Order Cost Breakdown** modal that exposes the FIFO layer behind
  every COGS number.
- Filter by integration and sales channel across every group dimension
  — so "store X on Shopify" and "ASIN Y on Amazon" both work.
- A **Profitability** tab appears on supplier detail pages, showing the
  same trend and drilldown filtered to that supplier's products.
- Export any view to CSV with metric-aware formatting (currency,
  percentages, integers all formatted the way they appear on screen).

Backend-wise the report uses a fast daily-totals path
(`reporting_daily_financials`) and only falls back to the per-line path
when an integration filter requires per-channel accuracy — so the
report stays responsive across large date ranges.

You'll find it under **Reports → Profitability**.

## Product page — Actions menu, redesigned inventory adjustments, per-warehouse bundle availability

The product detail page now has a global **Actions** menu in the header
and a substantially better inventory experience.

**✨ What this means for you:**

- The **Actions** menu (visible on every product tab) gives you
  one-click access to **Adjust Inventory**, **Create Blemished
  Product**, and **Compare Attributes** (for matrix products).
- The **Inventory Adjustment** dialog has been redesigned: warehouse
  chips, a segmented Increase/Decrease/Set control, an inline current
  stock display, an impact preview, a **Best COGS / Unit Cost** toggle,
  and a FIFO-consumption preview that shows exactly which layers a
  decrease will draw from before you confirm.
- Bundle and kit **availability** now breaks down by warehouse, so you
  can see which warehouse can fulfill the bundle and where the
  bottleneck component is.
- **FBA warehouse transfers** that were previously stuck showing 0
  received now correctly use the AmazonPendingInbound item quantities,
  and FBA/AWD transfers now appear in the **Received** tab once their
  receipt status flips.
- Transfer numbers and PO numbers in the Derived-From column open in a
  new tab.

## Product merge — single-pair UI and richer transfer rules

Product merge has gained an alternative single-SKU workflow plus much
deeper handling of Amazon and returns data.

**✨ What this means for you:**

- A new single-product input lets you merge one SKU pair without
  uploading a CSV. Autocomplete and the **Browse Drawer** make it easy
  to find both products.
- The preview now counts and warns about every related record that
  will be transferred: **Amazon FNSKU**, merchant-SKU mappings, FIFO
  layers, consumptions, ledger discrepancies, pending inbound items,
  auto-mapping logs, draft inbound plan items, return-receipt lines,
  original product references, RMA lines, subscription editions,
  sales-order bundle references, eBay product settings, and accounting
  COGS batches.
- Non-conflicting product attributes are now **moved** to the
  destination rather than dropped, and bundle components are deleted
  on merge (avoiding stale component links).

## Saved views and advanced filters on Product Listings and FIFO Layers

**✨ What this means for you:**

- **Product Listings** datatable on the product page now supports
  **Advanced Filters**, **Saved Views**, and combo filters — save your
  most-used segments (low stock, by channel, by store) and reuse them
  across sessions.
- The **FIFO Cost Layers** tab gets the same treatment: dedicated
  source-type, warehouse, and date-range filters; a **SavedViewsManager**
  in the toolbar; and a simpler search bar that's now ID-only since
  the filters do the rest of the work.

## Demand planning — case-pack rounding and a better results table

**✨ What this means for you:**

- A new **Case Pack Rounding** option on forecasts rounds order
  quantities to case-pack multiples. Pick the rounding method (always
  up, always down, nearest) and the calculation overlays show exactly
  how `case_rounded` and `case_qty` were derived.
- **Seasonal demand modifiers** no longer compound month-over-month —
  monthly modifiers are consolidated before they're applied to the
  forecast.
- **Demand modifier arrays** are now correctly converted to
  `DemandModifierData` objects in the forecast export, so exported
  configurations match the in-app preview.
- A series of UX touch-ups on the **Results Table** — clearer
  formatting, better column order, and saner default sorting.

## Amazon — MFN fulfillment sync, settlement-type import/export, FBA in COGS, supplier-sourced inbound plans, unified initial inventory

A bundle of Amazon improvements lands together.

**✨ What this means for you:**

- **MFN order fulfillment status sync** (SKU-7885): when an MFN order
  is fulfilled outside SKU, the fulfillment status, tracking, and
  ship-by data now sync back into SKU automatically. Stale backorders
  for already-fulfilled MFN orders are cleaned up as part of the same
  flow, and the order import paths handle a missing customer or null
  billing address without crashing.
- **Settlement-type mappings — Export / Import**: download the current
  mapping set as CSV (with Financial Code, Nominal Code, and Mapping
  Group columns) and upload a new CSV or paste rows to update mappings
  in bulk. Available in both unified and per-instance modes.
- **Amazon FBA in the COGS report**: the COGS-from-batches manager now
  understands all six FBA batch types (shipments, customer returns,
  adjustments, receipts, vendor returns, warehouse transfers) with the
  right sign conventions, so FBA inventory finally shows up in
  accounting COGS.
- **Supplier-sourced FBA inbound plans**: when a draft inbound plan
  uses a supplier source instead of a warehouse, finalizing now
  creates **purchase orders** for each shipment (instead of warehouse
  transfers) and the frontend links jump to the right PO detail page.
- A new **Unified Amazon FBA Initial Inventory** endpoint aggregates
  initial inventory across every Amazon integration instance, with
  pagination, filtering, and bulk FNSKU unit-cost updates.
- **Order tax** missing from Amazon order payment totals is now
  included in both the payment amount and the summary totals.

A long tail of Amazon reliability fixes also lands in this release:
pre-flight rate limiting for SP-API jobs, rate limiting on
`getOrderItems` calls, exponential backoff for `getFulfillmentOrders`
on Shopify, staggered daily Amazon report schedules to avoid
throttling, wider retry windows on `CreateAmazonReportJob` and
`RefreshAmazonOrdersJob`, and graceful handling of null `OrderTotal`
on Amazon payment creation.

## Shopify — out-of-sync detection, GDPR webhooks, smarter refund handling, order-edit fixes

The Shopify integration gets a substantial reliability and visibility
pass.

**✨ What this means for you:**

- A new **Sales channel fulfillment out-of-sync** flag marks every
  sales-order line where Shopify and SKU disagree on fulfillment
  state. Once historical sync succeeds the flag is cleared
  automatically. There's also a sales-order scope filter so you can
  find every order that has out-of-sync lines, an amber warning icon
  in the order editor, and a new **Recalculate Fulfillment Status**
  action to force a refresh.
- The historical Shopify orders import now correctly **skips
  backorder creation** when an order arrives already fulfilled —
  preventing the long-standing issue of phantom backorders on
  freshly-imported stores.
- **Refund handling**: `NO_RESTOCK` refunds against unfulfilled order
  lines now properly increment `canceled_quantity` (they're
  effectively cancellations), while legitimate `NO_RESTOCK` refunds
  against fulfilled lines no longer mistakenly increment it.
- **Order edits** that add new lines now reopen the order if it was
  already closed, and order edits that add discounts now create the
  matching discount records.
- A **Cancelled orders** filter and column have been added to the
  Shopify orders datatable.
- **Mandatory GDPR/compliance webhooks** for Shopify App Store
  approval ship in this release: `customer-data-request`,
  `customer-data-erasure`, and `shop-data-erasure` are now registered
  at both the canonical `/api/webhooks/shpfy/compliance/` path and the
  legacy `/api/shopify/oauth2/` path.
- Sales-channel **product sync** now skips listings with a `null`
  document instead of crashing, and stops **overwriting existing SKU
  product data** on resync.
- **Duplicate fulfillments** from dual Shopify/MCF sync are now
  prevented, with a cleanup command for any historical duplicates, and
  the **awaiting_pickup** check is properly enforced in both
  `FulfillSalesOrderService` and the Shopify sync paths.

## Veracore — proper SOAP authentication and richer OrderShipTo

The Veracore integration receives a sequence of correctness fixes.

**✨ What this means for you:**

- SOAP requests to `GetOrderInfo` and `AddOrder` now send the right
  **SOAPAction** header and a **Bearer token + Content-Type** on
  `AddOrder`. Real SOAP error responses are surfaced instead of being
  overwritten with a fabricated 502.
- The **OrderShipTo** XML now includes **CompanyName**, **FirstName**,
  and **LastName** fields (populated conditionally from the shipping
  address) so Veracore can index orders correctly.
- A "None" carrier prefix is stripped from the **SpecialHandling**
  shipping method.
- The deprecated daily `VeracoreUpdateTrackingJob` has been removed
  from the schedule (Dynamic Reporting handles tracking updates now).

## Purchasing and shipping touch-ups

**✨ What this means for you:**

- **Purchase order line quantity** ceiling raised from 100K to **10M**
  (decimal precision on `quantity`, `received_quantity`, and
  `unreceived_quantity` widened from `decimal(9,4)` to `decimal(12,4)`,
  and inventory `products_inventory` columns widened to match).
- A new **Default Supplier** autocomplete on the Product Creation
  dialog pre-loads all suppliers and supports keyboard-friendly
  selection.
- **Shipping provider mapping**: unmapped shipping items show a combo
  box by default so you can assign values directly; existing rows
  gain inline editing with a pencil icon; **retroactive updates** to
  historical fulfillments are now **opt-in** with a confirmation
  dialog that shows the affected count.
- The **Fulfillment Debt** report gains **Order Status** and
  **Fulfillment Status** columns.

## Sales orders, customers, and reliability fixes

- **Sales order CSV import** is far more resilient: missing
  description, missing `fulfilled_quantity`, missing customer name,
  and null customer in the billing address no longer break the import.
  Address-lock conflicts during customer CSV import are bypassed
  cleanly, and ID collisions are avoided.
- **Customer**, **Supplier**, and **Warehouse** detail pages each get
  a Vue 3 refresh with dashboards, revenue analytics, and consistent
  side-by-side metrics.
- **Sales channel financial summaries** now include **SKU.io** as a
  selectable sales channel.
- A misbehaving **PO product grid** column overlap (caused by a
  global CSS leak from the old Vue 2 component) is fixed.
- A guard on `fulfilled_quantity` decrement during fulfillment delete
  fixes a data-integrity issue where orders looked unfulfilled despite
  having valid fulfillments.
- **Cancelled sales-order lines** no longer trigger backorder
  creation, and **out-of-sync lines** correctly hide the fulfillable
  status and Fulfill button.

## Reliability and infrastructure

- **Deadlock retries** with exponential backoff are now applied to
  `AbstractRepository::save()` (upsert path) and
  `AbstractRepository::setValueForIds()` — common sources of
  transient deadlock errors are now silently recovered.
- **Tag sync** for sales orders has been made race-condition safe to
  prevent duplicate `taggable` entries.
- A **FIFO-layer cache mismatch** that was blocking new sales orders
  via the channel API now auto-corrects from movements (the source of
  truth) instead of throwing an exception.
- **`splitMovementsToLayers`** is hardened against hash collisions
  when replicating inventory movements, and the FIFO extractor
  handles hash collisions on the backorder path too.
- **`KillIdleDatabaseConnections`** now skips already-terminated
  threads instead of erroring out.
- **`updateInventoryBulk`** stopped wrapping itself in a nested
  transaction when already inside one.
- **Pre-flight inventory availability** is now checked before
  compensating adjustments on stock takes — preventing the operation
  from creating negative on-hand quantities.
- Jobs with public `$tries` and `$timeout` properties now serialize
  correctly through the Laravel queue (fixes a class of "missing
  property" failures on retried jobs).
- **CI**: the Vue 3 frontend build now runs with a 4 GB Node heap so
  Vite chunk rendering no longer OOMs on large builds.

## Also in this release

- **Backorder Queue** stale and zombie coverages are now cleaned up
  proactively, and duplicate backorder queues during FIFO extraction
  are prevented.
- **PDF Template Seeder** is now safe to run on pre-migration
  databases and guards against duplicate columns on the
  `saved_views` migration.
- **DataFeeds** settings page now supports backend advanced filters
  and sorts.
- **Walmart**, **eBay**, and **BigCommerce** product column mappings
  in DataTable are restored after a regression (SKUIO-ARC).
- **Channel API**: the `convertToFinancialLine` flow now correctly
  deletes the original sales-order line, preserves the
  `sales_channel_line_id`, and auto-closes the order.
- **FBA reports**: the retry window for `CreateAmazonReportJob` has
  been widened with a release-count safeguard.
- **Xero payment sync** is now chunked to prevent API timeouts on
  high-volume tenants.
- **Customer auto-fulfillment failure notifications** now support a
  comma-separated list of emails.
- **Multiple smaller fixes** across QBO sync, address country code
  resolution, batch stock-take accounting tests, fulfillment-sequence
  race conditions, Starshipit fulfillment cost capture, invoice-date
  timezone display, and more.
