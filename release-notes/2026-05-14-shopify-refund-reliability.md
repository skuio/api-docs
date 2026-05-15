---
title: "Shopify refunds now reliably create matching payments, freed allocations, and accurate totals"
description: "A new refund-to-transaction foreign key, split-tender pairing, allocation release on closed orders, sign-flip cleanup, and three artisan backfills for historical data."
authors: [product-team]
tags: [improved, integrations, orders, accounting]
date: 2026-05-14
---

Shopify refund webhooks were creating broken or incomplete SalesCredits
in several edge cases — missing payment rows, ambiguous transaction
pairing on split-tender orders, allocations left reserved after a closed
order was refunded, and sign-flipped totals on discrepancy-only credits.
A schema-level fix plus three historical backfills resolve them.

<!-- truncate -->

**✨ What this means for you:**

- **No more missing payments.** SalesCredits from Shopify refunds now
  always have matching Payment rows, so credits show as paid in the
  ledger.
- **Split-tender support.** When a refund spans multiple transactions
  (e.g. gift card + PayPal), SKU.io pairs them correctly via a new
  refund-to-transaction foreign key — no more timestamp-heuristic
  mistakes.
- **Allocations released on closed orders.** Refunding a closed order
  now releases the inventory reservation correctly. Allocated rows no
  longer linger forever (the underlying issue on one production customer
  was Allocated stock stuck on a single SO).
- **No more sign-flipped totals.** Discrepancy-only credits no longer
  display a negative total.

**Three artisan commands** are available for ops to repair historical
data — each defaulting to `--dry-run`:

- `shopify:backfill-refund-transaction-links` — re-fetches Shopify
  GraphQL data to populate the new FK on existing transactions.
- `sku:backfill-sales-credit-refund-payments` — creates missing Payment
  rows on existing SalesCredits via the FK.
- `sku:fix-shopify-sign-flipped-discrepancy-credits` — repairs negative
  totals from the legacy mapping migration.

Forward-going refunds are fully handled by the ingest + translator +
handler changes with no operator action required.
