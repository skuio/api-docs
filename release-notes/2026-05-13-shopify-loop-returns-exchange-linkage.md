---
title: "Shopify Loop Returns exchanges now reconcile to the source credit"
description: "Loop Returns EXC orders are explicitly funded by the sales credit they came from — with a Funded by Credit banner, a per-credit Payments breakdown, and clean QBO/Xero sync."
authors: [product-team]
tags: [feature, improved, orders, integrations, accounting]
date: 2026-05-13
---

When a Shopify customer exchanges through Loop Returns, the EXC- order
that replaces their original purchase is now explicitly tied — in the
ledger and in the UI — to the sales credit that funded it. Open the
EXC- order and you'll see a **Funded by Credit** banner with a link back
to the source credit; open the credit and its **Payments** tab now
splits **Refunds**, **Applied to Exchange**, and **Fees Retained** so
the credit reconciles cleanly to zero.

<!-- truncate -->

**✨ What this means for you:**

- The accounting trail between a return and the replacement order is no
  longer implicit — it's a real link, surfaced on both sides.
- Sales credits issued for Loop exchanges reconcile to **$0** instead
  of looking permanently outstanding.
- Internal exchange payments are filtered out of QBO and Xero sync, so
  your external accounting ledgers stay clean — only refunds the
  customer actually received hit your books.
- Both legacy zero-priced exchanges and post-Loop-PR3 full-priced
  exchanges are handled — including the small "fees retained" residual
  that Loop sometimes keeps from a credit.

## What the link captures

When Shopify reports a Loop Returns exchange, we now record:

- A **SalesCredit → EXC- SalesOrder** `OrderLink`, so you can navigate
  between them in the UI and the API.
- A **`type: exchange_applied`** payment on the credit for the amount
  the EXC- order consumed.
- A **`type: loop_fees_retained`** payment on the credit for any small
  residual (up to ~15% of the credit value) that Loop kept as fees —
  this is what brings the credit's net balance to zero.
- For post-PR3 full-priced exchanges, a **`type: credit_applied`**
  payment on the EXC- SalesOrder itself, showing how the credit funded
  the replacement order's revenue.

These new payment types are scoped to Loop reconciliation and are
intentionally excluded from QBO and Xero sync (`QboPaymentSyncManager`
and `XeroPaymentRepository`), so they never reach your external books
as duplicate transactions.

## Where you'll see it in the UI

- **EXC- SalesOrder detail page** — a "Funded by Credit" banner with a
  link to the source credit and the amount applied.
- **SalesCredit detail page** — the Payments tab is split into three
  buckets: **Refunds** (money returned to the customer), **Applied to
  Exchange** (used to fund the EXC- order), and **Fees Retained** (any
  small residual Loop kept). The credit's totals now visibly add up to
  zero in the cases where they should.

## Backfill for existing data

A new console command, `sku:backfill-exchange-credit-applications`,
walks historical Loop-Returns orders and writes the same links and
payment rows retroactively. It is idempotent (safe to re-run), handles
both the legacy zero-discount shape and the post-Loop-PR3 full-priced
shape, and only touches credits and orders that haven't already been
linked.

Run the backfill once to clean up your historical Loop exchanges, then
the live Shopify webhook flow takes over for everything new.
