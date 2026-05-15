---
title: Amazon Inventory & Valuation overhaul, Stock Holds workspace, and Profitability drilldown upgrades
description: A new Inventory & Valuation section for every Amazon FBA integration, real-time FIFO-based valuation, the foundation for the new allocation system with a dedicated Stock Holds workspace, deeper Profitability drilldowns, and a wave of Shopify, Veracore, Walmart, and PO reliability fixes.
authors: [product-team]
tags: [major-feature, improved, inventory, integrations, reporting, fulfillment, purchasing]
date: 2026-03-31
---

A new **Inventory & Valuation** section now anchors every Amazon FBA
integration — daily valuation snapshots, real-time FIFO-based valuation,
FNSKU product workspaces, full reconciliation timelines, and bulk
discrepancy tools live under one roof. Behind the scenes the new
**Allocation & Reservation** model is taking shape, with a dedicated
**Stock Holds** workspace and **Allocations** datatable now visible from
the Inventory menu. The Profitability report gained a clickable FIFO
layer drilldown plus richer waterfall and cost-breakdown views, and a
long list of integration and PO reliability fixes round out the month.

<!-- truncate -->

## Amazon Inventory & Valuation, end-to-end

Every Amazon FBA integration now opens to a dedicated **Inventory &
Valuation** section that replaces the older COGS Reconciliation page.

**✨ What this means for you:**

- A single **Overview** dashboard surfaces initial cost, current
  valuation, on-hand counts, and reconciliation status per integration.
- **Valuation** snapshots are now driven by real-time FIFO layers — no
  more waiting on a nightly recompute to see today's numbers.
- **FNSKU Products** has its own list and detail workspace, with tabs
  for Overview, Ledgers, Removal Orders, Removal Shipments, Summary
  Ledgers, and a per-FNSKU timeline.
- **FIFO Layers** has a list and a detail page showing layer-level
  costing, consumption history, and a layer-aware ledger.
- **Ledgers** detail pages now include an **Accounting** tab that links
  each ledger event back to the underlying accounting transaction.
- **Discrepancies** replaces the old Warnings/Errors split — every gap
  shows reason type, impact, linked FIFO layer, and reconciliation
  state in one place.
- Initial Cost metrics, FIFO layer column on FNSKU products, and
  reason-type breakdowns make it obvious where value is sitting and
  where attention is needed.

Reconciliation gets a real workflow too: per-FNSKU reconciliation runs
in the background as a tracked job, and a new **Bulk Reconcile / Bulk
Unreconcile / Initialize All** trio lets you process every FNSKU in one
sweep. A reconciliation timeline tracks every state change with the
batch transaction links preserved across unreconcile.

You'll find the new section under
**Integrations → Amazon → \<your integration\> → Inventory & Valuation**.

## Stock Holds and Allocations become first-class workspaces

We've started rolling out the new unified allocation model. In this
release the supporting workspaces ship — the cutover from reservations
and planned inventory happens in the next release.

**✨ What this means for you:**

- A new **Stock Holds** page (Inventory menu) replaces the old
  reservation views with a full datatable: status chips, expiration
  filter, SKU links, notes, archive/unarchive, and an activity log per
  hold.
- The **Reserve Stock** modal now has a Browse-products icon inside the
  search field, keyboard-first UX (Enter selects, focus advances),
  warehouse defaulting, and clamps the requested quantity to what's
  actually available.
- A new **Allocations** datatable and detail page show every active
  allocation, with a per-product **Allocations** tab on the product
  page.
- The Inventory Valuation report now distinguishes **Allocated** stock
  from **Reserved** stock so the math reflects the new model.
- Reservation integrity panels and an "Active Reservations" view land
  in the product audit trail, making it easy to see where reservations
  are coming from.

The Allocation Pipeline view is wired up under the existing Backorder
Queue URL while the data migration runs in the background — you can
keep using the page exactly as before during the transition.

## Profitability report — clickable FIFO layers and richer drilldowns

The Profitability report gets the same FIFO-aware treatment.

**✨ What this means for you:**

- COGS in the order drilldown now links straight to the **FIFO layer
  detail** page, so you can see exactly which inventory layers
  contributed cost.
- The **Waterfall chart** picks up new breakdown segments and clearer
  totals for fees and adjustments.
- The **Order Cost Breakdown** modal shows cost components side-by-side
  for faster reconciliation.
- The **integration filter** now correctly scopes COGS and cost
  breakdowns to the selected integration (previously it could pull in
  data from other channels).
- Drilldowns now support **parent SKU** grouping for catalogs that use
  variants, and live FLT data drives drilldowns that previously
  required a separate query.

## Shopify enhancements

A spread of Shopify-focused improvements:

- Search Shopify orders by **line item SKU** in addition to order
  number, ID, and email.
- The Shopify **Inventory** page now shows per-location activity
  indicators, an **Active / Inactive / All** location filter with
  inactive locations dimmed and tagged, and richer cross-linking.
- The Shopify **product detail** drawer adds inventory item info,
  inventory levels with caching, and a clickable variant ID for
  jumping to variant pages.
- Shopify subscription offering integration is expanded and the side
  menu reorganized to surface subscription tools.
- Variable product mapping (broken after the recent refactor) is fixed,
  and stub products get auto-upgraded when real Shopify data arrives.
- The PRODUCTS_UPDATE webhook is now registered automatically, so
  product updates flow through without manual re-registration.
- Tax-rate handling is hardened against concurrent imports (no more
  duplicate-key errors when two orders arrive at the same time).
- Mandatory Shopify compliance webhooks (GDPR data-request, customer
  redact, shop redact) are now wired up, satisfying Shopify's App
  Store requirements.

## Veracore (3PL) reliability

Veracore integrations are noticeably steadier this release:

- SOAP XML requests are now sent with **UTF-8 encoding** declared, so
  orders with international characters in addresses no longer fail.
- The tracking report date range is **capped at 7 days** per call and
  widened to absorb eventual-consistency delays, eliminating the
  "missing tracking" gap that some sellers saw.
- Outbound shipping methods use the **mapped name** for auto-dispatch
  (so your Veracore-side carrier names are honored).
- A new **Ignore 3PL Shipping Method** setting lets you skip Veracore's
  carrier on confirmation when your own routing is authoritative.
- A new **3PL request/response logging middleware** writes a daily,
  redacted audit log (30-day retention) of every 3PL API call — useful
  for diagnosing what arrived and when.
- Multi-package Veracore orders now collect **all** tracking numbers
  for confirmation, not just the first.

## Purchasing & inbound

- **PO notification emails** now support **multiple comma-separated
  addresses** with a chip-style input across suppliers, stores, and
  global PO settings.
- **Inbound Shipment** detail pages add a one-click **CSV export** for
  line items.
- **AWD POs** received a focused round of fixes: manual PO linking
  now sets `sales_channel_unique_id`, AWD-linked PO lines no longer
  show 0 received quantity, warehouse mapping is honored when a
  fulfillment order has multiple locations, and a backfill recalculates
  receipt status across all existing AWD POs.
- Backorder auto-receive now **handles already-received PO lines
  gracefully** instead of erroring out.
- Order discounts are **recalculated when sales-order lines are added
  or removed** so totals stay consistent.

## Walmart & WooCommerce

- **Walmart inventory sync is now chunked** to stay under Walmart's
  API rate limits — the recurring 429 errors on large catalogs should
  be gone.
- **WooCommerce variable products** map correctly again after the
  recent variants refactor; an underlying SQL view was updated to
  expose the unique ID needed by the mapping UI.

## Stock take, timezones, and sales-channel dates

A cluster of timezone-correctness fixes (SKU-7907):

- Stock take **date counts** are stored as app-timezone midnight (not
  UTC midnight), eliminating off-by-one-day display issues.
- Stock take detail pages render dates in the **application timezone**.
- Closed stock takes correctly **update inventory movement quantity**
  when an after-the-fact edit is made.
- Inventory **start dates** now display in app timezone on the orders
  page and Inventory Valuation report.
- Pre-start-date orders are converted to UTC before filtering against
  sales-channel APIs (so the eligibility window matches what Shopify,
  etc. expect).
- Fully-fulfilled pre-start-date orders can now be **imported on
  demand** with a search-by-order-number/ID/email flow — useful for
  bringing in historical orders selectively.

## Reliability and other fixes

- **Removed persistent DB connections** to prevent the "too many
  connections" errors that occasionally hit large workloads.
- **FBA detail report retry window** widened, with a targeted retry
  for removal shipments.
- **Stale removal-order receipt status** is now revalidated on the
  summary page view.
- The **FIFO extraction job** decouples `retryUntil` from `uniqueFor`
  to stop a class of recurring `MaxAttemptsExceededException` failures.
- The **Amazon MFN sync feed** warms inventory cache before building
  the feed, eliminating intermittent missing-quantity rows.
- **Confirmed Shopify quantities** are now used (vs the earlier
  reported quantity) and removed products are filtered out of the
  inventory sync.
- A redirect query parameter is honored on **login**, so deep-link
  redirects survive an interstitial sign-in.
- The **SKU.io** entry in the integrations sidebar makes it easier to
  find the in-platform connection settings, and the `emailCustomers`
  toggle and instance routing got cleaned up.
- **Bulk-deleted sales orders** now log an activity entry per deletion.
- The **edition product selector** swaps the old SKUSearchBox for an
  autocomplete + browse drawer matching the rest of the product UI.
- An **integration filter test refactor** ensures AWD ledger tests
  scope cleanly to their own integration instance.
- IntegrationInstance settings use a **targeted DB update with retry**
  to prevent stale-write conflicts (SKUIO-ADQ, SKUIO-B29).
- Accounting transactions are **skipped for fulfillments deleted
  during async processing** (SKUIO-ARX).
- QBO item identifier extraction **no longer falls back to nominal
  code** when no item identifier is present.
- A handful of frontend issues fixed: missing `tiptap-commands`
  dependency on legacy frontend, removed dead references to
  `SimpleFilterChips`, hidden Amazon nav tabs on FBA detail
  sub-routes, and Vue 3 build issues with the new allocation pipeline
  components.
