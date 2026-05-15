---
title: "Shopify Loop Returns exchanges are now formally funded by their source credit"
description: "EXC- orders from Loop are linked to the original SalesCredit, the credit's value is recorded as the payment, and any retained fees are captured separately — so credits reconcile to $0 and exchange orders show as paid."
authors: [product-team]
tags: [improved, integrations, orders, accounting]
date: 2026-05-13
---

When Shopify Loop generates a return-with-exchange, SKU.io now formally
ties the new `EXC-` sales order to the originating **SalesCredit**. The
credit's value is consumed as a payment on the exchange order, any small
retained portion (Loop's withheld fees, up to 15%) is captured as a
separate bookkeeping-only payment, and the two documents are linked.

<!-- truncate -->

**✨ What this means for you:**

- Exchange orders no longer show as "unpaid" — they correctly reflect
  that they're funded by the customer's return credit.
- The SalesCredit reconciles to $0, with separate **Refunds / Applied to
  Exchange / Fees Retained** payment categories visible on its detail
  page.
- Internal bookkeeping-only payment types (`exchange_applied`,
  `loop_fees_retained`, `credit_applied`) are excluded from QuickBooks
  and Xero pushes so your accounting integration stays clean.
- A backfill artisan command (`sku:backfill-exchange-credit-applications
  --dry-run`) is available for ops to repair historical Loop exchanges.

On any `EXC-` sales order, look for the new **Funded by Credit** banner.
On the linked Sales Credit, the Payments tab is split into Refunds /
Applied to Exchange / Fees Retained.
