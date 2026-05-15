---
title: "Vendor Deposits: track supplier pre-payments across the whole purchasing lifecycle"
description: "A new sub-ledger for supplier deposits, prepayments, and advances — installment payments, multi-level approval, FX-aware refunds, write-offs, and automatic application against bills."
authors: [product-team]
tags: [new, purchasing, accounting]
date: 2026-05-13
---

SKU.io now has a dedicated **Vendor Deposits** sub-ledger for any money
you've paid suppliers in advance — wire-transfer deposits on overseas
POs, milestone prepayments, advances against future production. Deposits
flow through their own approval queue, accept installment payments,
apply against future bills (line-by-line, in bulk, or automatically),
support FX gain/loss on refund, and write off cleanly when stale.

<!-- truncate -->

**✨ What this means for you:**

- AP teams can stop tracking supplier prepayments in spreadsheets — every
  deposit has its own document, payment history, status chips, attachments
  panel, and audit trail.
- Multi-level approval chains let larger organisations enforce dual
  control on deposits over a threshold, with bulk approve/apply running
  as tracked background jobs.
- Deposits push to **QuickBooks Online** (as journal entries) and **Xero**
  (as prepayments) so your books stay in sync.
- When you receive a bill from a supplier you've already paid a deposit
  to, the purchase-invoice page shows a **Bill Deposits** panel that
  surfaces all eligible deposits and applies them against the line items.

You'll find the new module at **Orders → Vendor Deposits**, plus a
**Deposits** tab on each supplier's CRM page. Create a deposit directly,
or have one auto-generated from a payment-terms milestone schedule (see
the next release note).
