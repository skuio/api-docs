---
title: COGS rebuild now batched with failed-product visibility, plus a new Purchase Invoices page
description: A faster batched COGS rebuild with a Failed Products panel in COGS Health, a new Purchase Invoices list under Orders, Shopify tracking that no longer misses already-fulfilled orders, automatic country inference for unknown Amazon fulfillment centers, and a long list of background-job reliability fixes.
authors: [product-team]
tags: [major-feature, improved, inventory, purchasing, orders, integrations]
date: 2025-12-30
---

The **COGS rebuild** job now dispatches in parallel batches and surfaces any
products that fail directly on the **COGS Health** page so you can act on
them right away. **Orders → Purchase Invoices** is a new top-level list for
tracking invoice status against POs, with new Issue Date and Other Date
fields on the underlying records. **Shopify** tracking now submits to the
sales channel even when fulfillments were marked outside ShipStation, and
the catch-up schedule runs every ten minutes instead of once a day. **Amazon**
sync no longer crashes on brand-new fulfillment centers — the country is
inferred from the IATA airport code. Underneath all of that, a thick wave of
queue, locking, and exception-reporting fixes makes long-running jobs
materially more predictable.

<!-- truncate -->

## Faster, more transparent COGS rebuilds

Rebuilding cost-of-goods across your full product catalog used to be a
single long-running job. It now splits the catalog into up to **100
parallel batches** that workers process concurrently, with progress
streamed back to the **COGS Health** page in real time.

**✨ What this means for you:**

- Full-catalog rebuilds finish materially faster on accounts with large
  product counts — the work fans out across queue workers instead of
  walking products one at a time.
- The COGS Health page now has a **Failed Products** panel that lists
  every product that errored during the rebuild, with SKU, product name,
  Product ID, and the exact failure timestamp.
- Job status now distinguishes **"Completed with failures"** from a clean
  completion, so you immediately know whether you need to look at the
  failed list.
- The rebuild button uses the new tracked-job framework — start it, then
  navigate away. Progress, batch counts, and the failed-products list all
  update in the background and survive page reloads.

Open **Inventory → COGS Health** and trigger a rebuild as you normally
would; the new panels appear in the same page once the job starts.

## New Purchase Invoices page under Orders

A dedicated **Purchase Invoices** list now lives in the side navigation
under **Orders**, giving you a single place to review invoices captured
against Purchase Orders.

**✨ What this means for you:**

- Search across invoice number and PO number, and filter by status and
  supplier from a single toolbar.
- Two new fields on each invoice — **Issue Date** (when the supplier
  issued the invoice) and **Other Date** (a free-form date for whatever
  your finance workflow needs) — are now editable and visible alongside
  the existing PO totals.
- Pagination, sorting and column controls match the rest of the new
  datatable pages, so saved-view behaviour and per-page sizes feel
  familiar.

Find it under **Orders → Purchase Invoices**. The underlying API endpoint
is documented in the Purchase Invoices Postman collection.

## Shopify tracking no longer slips through the cracks

If a fulfillment got marked **Fulfilled** outside of the normal ShipStation
sync — for example a manual entry or an external warehouse — tracking
information used to wait until the daily Shopify catch-up job ran before
it reached the sales channel.

**✨ What this means for you:**

- The ShipStation `GetShipments` job now submits tracking to Shopify even
  when the fulfillment is already in the **Fulfilled** state, as long as
  it has not been pushed to the sales channel yet.
- The Shopify "submit fulfillments" backstop now runs **every 10 minutes**
  instead of once a day, so anything that does miss the live submission
  catches up within minutes instead of overnight.

No setup change is needed — both behaviours are automatic for Shopify
integrations.

## Amazon FC country auto-inference

Amazon regularly adds new fulfillment centers, and previously each new FC
ID had to be added to the explicit config map or the sync would throw an
exception.

**✨ What this means for you:**

- Unknown FC IDs are now resolved through a three-tier lookup: explicit
  map, then **IATA airport-code inference** (200+ airport-to-country
  mappings), then known Amazon prefix patterns, and finally a sensible
  US default.
- New FCs at airports we already know about — which is the vast majority
  of Amazon's network — work out of the box without a code change.
- Each inferred resolution still logs a warning so engineering can fold
  the FC into the explicit map over time, but day-to-day sync keeps
  flowing.

## Missing-currency alerts on Shopify imports

When a Shopify order is paid in a currency that has not been configured in
your account, SKU now halts the order's payment processing and emails your
admins instead of silently mismatching values.

**✨ What this means for you:**

- Admins receive an **Action Required** email with the missing currency
  code and a direct link to **Settings → Currencies** and to the affected
  order.
- The notification is rate-limited to once per day per currency code, so
  bulk imports do not flood your inbox.
- The order remains intact in SKU; once you add the missing currency,
  re-running the order brings payments in cleanly.

## Background-job reliability and observability

A heavy round of fixes targets the queue layer that drives sync,
fulfillment, and accounting.

- **FIFO layer race condition** — concurrent inventory transactions could
  briefly disagree about charged quantity and trigger an
  `InvalidFifoLayerCacheException`. A row-level lock during FIFO charges
  closes that window.
- **Packing slip lock waits** — packing-slip generation jobs now use a
  `WithoutOverlapping` middleware keyed by queue ID, so different slips
  process in parallel while jobs for the same slip wait their turn
  instead of timing out on the row lock.
- **Amazon next-token expiry** — when paginated Amazon API tokens expire
  mid-pagination, the system now detects the TTL error, clears the bad
  token, and restarts pagination from the beginning instead of failing
  the job.
- **Amazon retry windows** — long-poll Amazon jobs now separate
  per-attempt `timeout` from total `retryUntil`. Rate-limited (429) jobs
  get up to 30 minutes total to retry instead of being capped at their
  single-attempt timeout.
- **Pending inbound status** — once an Amazon shortage was recorded as
  `RECEIVED_FOR_LESS`, later ledger reconciliation could overwrite it
  back to `PARTIALLY_RECEIVED`. The status now respects existing
  shortages on both header and line level.
- **Sales-order address integrity** — updating a sales order whose
  address rows had been soft-deleted no longer raises a foreign-key
  constraint error; orphaned addresses are validated and recreated at
  save-time.
- **Fulfilled lines preserved during sync** — order-sync without a
  matching ProductListing no longer overwrites `product_id` to NULL on
  lines that have already been fulfilled, eliminating a class of
  "orphaned fulfilled line" errors during later mapping attempts.
- **Transaction errors** — `PDOException: There is no active transaction`
  errors during product-metric invalidation and concurrent fulfillment
  are eliminated; deadlock retry now uses Laravel's built-in mechanism
  and concurrent fulfillment gets three retry attempts.
- **Mail throttling** — when Mailtrap (used in non-production) rate-limits
  email delivery, jobs are released back to the queue with a
  `ThrottleMailJobs` middleware instead of blocking workers with
  `usleep()`.
- **Better Sentry signal** — queue failures now report the **original**
  exception to Sentry on every attempt instead of only the wrapping
  `MaxAttemptsExceededException`, and Sentry fingerprinting groups those
  failures by job class so the same problem stops splattering across
  hundreds of issues.
- **BigCommerce job exceptions** — BigCommerce jobs now share a
  `HandlesJobExceptions` trait that surfaces the real underlying
  exception to Sentry the moment it happens, instead of waiting for the
  retry chain to give up.
- **Sentry DSN at boot** — Sentry now correctly picks up its DSN from AWS
  Secrets Manager on production sites; misconfigured-DSN warnings on
  boot are gone.
- **Packing-slip job stability** — `GenerateSalesOrderPackingSlipsJob`
  now accepts an ID instead of a serialised model, so jobs still on the
  queue do not blow up when the underlying `PackingSlipQueue` row has
  already been deleted.

## Also in this release

- **Shipfusion dashboard metrics** correctly count orders whose status
  doesn't map to a known enum (e.g. `importing`) instead of throwing on
  null status values.
- **Financial alert classification filter** now matches against the
  classification relationship instead of a non-existent column.
- **Import Completed email** no longer fails to render when summary HTML
  was previously empty — the mail is rebuilt on Laravel's
  envelope/content pattern.
- **Legacy SalesCreditReturn / SalesCreditReturnLine tables** have been
  retired in favour of the existing RMA + ReturnReceipt system. Old
  command-line tools that referenced them have been removed; reporting
  joins read from `rma_lines` and `return_receipt_lines` directly.
