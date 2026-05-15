---
title: "Fixes & improvements — week of May 11"
description: "Reliability and polish across orders, inventory, purchasing, fulfillment, accounting, reporting, and the Shopify, Faire, ShipStation, and Veracore integrations."
authors: [product-team]
tags: [roundup, orders, inventory, purchasing, fulfillment, shipping, integrations, accounting, reporting]
date: 2026-05-11
---

A dense week of fixes and small improvements across the platform —
purchasing, fulfillment, exports, OCR, several reports, and a handful
of integration reliability hardenings.

<!-- truncate -->

**Orders**

- Sales order line items keep their `sales_channel_line_id` when a
  bundle is expanded into its components, so the Channel tab continues
  to map every component line back to its source marketplace line.
- The "Covered by PO#" advanced filter is now available on the Vue 3
  sales orders page, mirroring the legacy behavior — autocomplete a
  PO number to find every order with an active allocation linked to
  it.
- A new console command backfills the `sales_channel_line_id` on
  bundle component lines for older orders by walking each order's
  saved channel document.
- OCR'd sales-order lines now use the catalog product's name in their
  description instead of whatever raw string the source document
  carried, so the descriptions read consistently.
- The new-order screen now focuses the **product line** input on open
  instead of the revenue line, so you start typing where you'd expect.
- Tracking number input is restored on the **Fulfill Items** dialog
  for manual fulfillment — the field had been hidden by a recent
  refactor.
- Action-handler line updates now preserve the warehouse on a
  fulfilled sales-order line, instead of clearing it when an unrelated
  field changes.

**Inventory**

- Cached per-warehouse `inventory_available` is now floored at zero on
  write, keeping the cache consistent with our inventory integrity
  check. The negative-oversold signal is preserved through the new
  `available_to_sell` value, which is derived live from the raw
  columns.
- Draft purchase orders are no longer counted as backorder coverage —
  only approved POs reserve future inbound for active backorders.
- Bundle/kit products can no longer be saved without at least one
  component; the API now responds with a 422 instead of accepting an
  empty bundle.
- The inventory-health check no longer flags bundle sales-order lines
  whose bundle definition itself has no components — that's a product
  config issue, not a stale-allocation issue, and was creating noisy
  alerts.
- Custom fields validate `(name, link_type)` uniqueness up front and
  return a 422 instead of crashing on a duplicate constraint.

**Purchasing**

- After approving a PO, the page now refreshes its lines immediately
  so backorder coverage appears without a manual reload.
- PO line shipped / unfulfilled totals exclude cancelled and closed
  shipments — the totals were inflated for orders that had shipments
  cancelled along the way.
- Vendor credit allocations now include `applied_at` in their
  eager-loaded payload so the application date is available everywhere
  the relationship is used.
- Purchase-invoice OCR: negative line prices are accepted (so PO-level
  discounts and ignored negative rows reach the manager that filters
  them), the OCR'd PDF is attached to invoices created from the
  review screen, and the "existing invoice on this PO" surface is
  scoped to a matching invoice number to avoid false-positive surfacing.
- Purchase-invoice OCR also now maps the **Mfg** column abbreviation
  to MPN, and re-runs the table-fallback extractor when invoice items
  came back without SKUs — fewer manual fix-ups on documents that
  scan poorly the first time.
- A sub-cent rounding nudge in `formatMoney` keeps the displayed
  invoice totals consistent with PHP's server-side rounding.
- Supplier pricing tiers reject a null price with 422 instead of
  accepting it and writing junk.
- Custom-field uniqueness validation is documented in the API
  contract.
- The OCR document attachment on purchase-invoice creation
  consolidates the staged PDF onto the resulting invoice, so the
  source document is always one click away.

**Inventory allocation**

- The Allocations table on the backorder queue now has a per-row
  drilldown link from the supplier name to the supplier detail page,
  and the existing chart-line icon opens the in-page drilldown tab.
- The Product Analysis and Supplier Analysis tabs of the allocation
  workspace now link entities to their detail pages — supplier names,
  product SKUs, sales order numbers, and PO coverage chips are all
  navigable.
- A new **Export** button on the Allocations tab supports all four
  scopes (all / filtered / current page / selected) in both XLSX and
  CSV, with 18 selectable columns — mirroring the export modal on
  products and warehouse transfers.
- Per-row priority updates retry on lock-wait, so a heavy concurrent
  edit session no longer fails sporadically with deadlocks.

**Inbound shipments & warehouse transfers**

- Inbound shipment receipts no longer double-reverse inventory on
  delete; warehouse parity is enforced so the receive and reverse
  match up.
- Shipping details on an inbound shipment can be edited after it's
  marked shipped — the field-set used to lock too early.
- Warehouse-transfer receipt deletes are blocked when the resulting
  FIFO layer has already been consumed downstream — preventing a
  delete that would corrupt the cost layers.
- Blemish adjustments on the receipt itself are excluded from that
  downstream-consumption preflight, so the protective check doesn't
  block a legitimate delete.

**Stock takes**

- Adjustment-mode stock take deletes now correctly revert inventory
  and refresh the cache, restoring the pre-take state without leaving
  stale rows.

**Fulfillment**

- The fulfillment flow honors each integration's packing-slip policy
  when absorbing a released backorder line, so the slip behavior
  stays consistent with the configured rule.
- Veracore's "uncancellable order" job handles the race where the
  fulfillment record has already been deleted by the time the job
  fires — instead of erroring it now exits cleanly.

**Demand planning & forecasting**

- The custom date-range filters on demand planning are ignored when
  their visibility toggle is off, so a hidden custom range no longer
  silently affects the run.
- The recursive `KitComponentCache` insert retries on deadlock,
  smoothing out concurrent forecast runs.
- The FIFO total-cost recalculation retries on deadlock for the same
  reason.

**Reports**

- Inventory valuation drill-down — the Reserved category now includes
  FBA warehouse-transfer inventory, the per-row table is correctly
  populated, the latest FBA ledger snapshot on-or-before the cutoff
  date is used (instead of the wrong-side neighbour), and the
  Reserved warehouse-transfer source is humanized in the UI.
- Profitability drill-down — the FLT (freight, landed cost, tariffs)
  breakdown now reconciles with the allocated totals, and rows that
  are dimension-scoped show an "X of Y" line-count chip so partial
  sums aren't mistaken for full-order totals. The drill-down CSV
  export now includes the additional metric columns the UI already
  showed.

**Exports**

- The products export streams every product in the export under
  `defaultSort` instead of stopping at a chunk boundary.
- XLSX exports automatically fall back to CSV at the new lower
  threshold of 15k rows (down from 50k) to keep memory bounded.
- The CSV streamer now uses PHP's native `fputcsv` for bounded memory
  on very large exports.
- A defensive `failed()` handler captures failures cleanly on the
  largest exports.

**Address & forms**

- The address form falls back to a free-text input for the province
  field when the country has no province code list, instead of
  rendering an empty dropdown.

**Payment terms**

- The milestone label is no longer trimmed on every keystroke — you
  can type a label that starts or ends with a space without the
  cursor jumping.

**PDF templates**

- The bundled PO and SO PDF seeds have been converted to a
  table-layout markup that Dompdf renders correctly.

**Integrations**

- **Shopify** — the scheduled order-candidate selector now compares
  `start_date` to `shopify_created_at` through the same
  timezone-aware helper the rest of the order manager uses, closing
  a local-midnight gap where orders fell through the cracks; the
  Shopify product price field accessor is now implemented (no more
  missing-price exceptions on certain product shapes); the live
  refund-payment path now releases allocations on closed orders
  after a refund, fixing the stale-allocation cleanup.
- **Faire** — quick filters for Mapping and SKU Status now use the
  `.is` operator so they resolve correctly on first interaction;
  computed datatable filters seed from their source on mount so
  sibling-page navigation no longer shows "No data available"; the
  order import start date is enforced on every sync (it used to be
  waived when an explicit `updated_at_min` window was passed).
- **ShipStation** — the customer-paid shipping amount is now passed
  on order push, so ShipStation sees the right rate quote.

Plus a long tail of test, deploy, and CI improvements that keep the
release train moving.
