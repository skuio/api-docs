---
title: "Shopify refunds — authoritative linkage, split-tender support, and historical backfill"
description: "Refund transactions now persist a direct foreign key to the refund they belong to, split-tender refunds pair correctly, and legacy SalesCredits with missing payment rows can be repaired in place."
authors: [product-team]
tags: [feature, improved, integrations, accounting]
date: 2026-05-14
---

Refund matching for Shopify orders is now driven by an explicit
foreign key from each refund transaction back to its parent refund —
the same `refunds[].transactions[].id` value Shopify already exposes
on its GraphQL API. New orders save this linkage on first sync; older
orders can be backfilled with a single command; and the live and
backfill flows both correctly handle split-tender refunds where one
Shopify refund spans multiple payment gateways.

<!-- truncate -->

**✨ What this means for you:**

- Shopify-sourced SalesCredits in your ledger now reconcile cleanly
  against their refund transactions — the linkage is a real FK, not a
  timestamp guess.
- Split-tender refunds (e.g. gift_card + PayPal on one return) are
  paired correctly instead of being skipped as "ambiguous count
  mismatch".
- Legacy SalesCredits that had a refund ID in metadata but no Payment
  rows can be retroactively fixed — and historical sign-flipped
  refund-discrepancy credits can be repaired in place, both in dry-run
  by default.

## What's new under the hood

**A real foreign key.** `shopify_order_transactions` now has a
`shopify_order_refund_id` column populated at ingest from Shopify's
GraphQL `refunds[].transactions[].id`. The live translator groups
transactions by this FK as the *primary* pairing source — the older
timestamp-proximity heuristic stays as a fallback for historical
orders that haven't been backfilled yet, and never re-pairs an
already-linked refund.

**Split-tender pairing.** When a Shopify refund has *one* money refund
and *multiple* refund-kind transactions (the canonical case is a
gift-card + PayPal split), all N transactions are now paired to the
single refund. Previously the legacy pairing logic skipped this shape
as ambiguous, leaving the SalesCredit unpaid in our ledger even though
the customer was correctly refunded on Shopify's side.

**Improved skip handling.** Return-of-goods, gift card, and
zero-placeholder SalesCredits — the ones that never have a
refund-kind transaction by design — are now identified up front and
reported in their own counter, instead of being lumped into "ambiguous
count mismatch".

## Three commands worth knowing

If you have historical Shopify data, three commands are available for
remediation. All default to dry-run — pass `--apply` to write.

- **`shopify:backfill-refund-transaction-links`** — populates the new
  FK column on existing refund transactions by re-fetching
  `refunds.transactions.nodes.id` from Shopify.
- **`sku:backfill-sales-credit-refund-payments`** — for legacy
  SalesCredits that have a `sales_channel_refund_id` in metadata but
  no refund Payment rows (credits created before the live webhook
  refund-payment sync existed), this command creates the missing
  payments using the FK as the authoritative source.
- **`sku:fix-shopify-sign-flipped-discrepancy-credits`** — repairs
  Shopify-sourced SalesCredits whose `total_credit` is negative due to
  a sign-flip on "Refund discrepancy"-only lines from the legacy
  `shopify_order_mappings` migration. Validates each candidate against
  the linked refund's transaction sum within $0.01 before flipping
  signs.

## One more reliability fix

When a Shopify refund webhook lands after the sales order has already
auto-closed (e.g. a fulfillment + cancel transitioned the line to a
terminal state), the post-credit inventory release used to be silently
skipped — leaving stale `Allocated` reservations attached to the
closed order forever. Allocations are now released on closed orders
after a refund, matching the catch-up path already documented in the
same handler.
