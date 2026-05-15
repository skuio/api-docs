---
title: "Accounting transactions and sales credits get the modern datatable treatment"
description: "All four Accounting tabs (Transactions, Journals, Invoices, Payments) move to the standard datatable design system with collapsible filters, saved views, confirmation popovers, and several long-broken filters fixed."
authors: [product-team]
tags: [improved, accounting, inventory]
date: 2026-05-15
---

The Accounting module's four datatable tabs — **Transactions, Journals,
Invoices, Payments** — have been migrated to the standard SKU.io
datatable design system. Same toolbar layout as Products and Purchase
Orders, same collapsible filter panel, same saved-views favorite bar,
and several long-broken filters and columns are fixed along the way.

<!-- truncate -->

**✨ What this means for you:**

- A consistent toolbar across all four tabs — primary `Sync All` button
  at the top right, icon + title at the left, item-count moved into the
  footer.
- **Saved views** with per-tab favorites — the same favorite bar pattern
  used elsewhere, scoped per tab so a journals favorite doesn't leak
  into invoices.
- **Confirmation popovers** replace the heavy modal dialogs for Sync,
  Clear Error, and Delete actions — both for individual rows and for
  bulk selections.
- **Sortable columns** are restored: the **Override Ref** and **Status**
  columns on the transaction tabs were silently non-sortable; they
  sort now.
- **Type / Status / Sync Enabled / Has Error** filters use the new
  tree-mode filter inputs with proper lookup configs.
- Several **accuracy fixes**:
  - The Status filter now matches the full five-value vocabulary
    (`toSync`, `ineligibleToSync`, `submissionInProgress`, `synced`,
    `error`); three of those values previously returned zero rows.
  - The polymorphic `link.accountingTransaction` filter no longer
    500s when used.
  - Cross-tab URL filter leakage is fixed — switching tabs clears the
    previous tab's query parameters.
- **Sales Credits** also picks up a fix in this pass: the **Return
  Status** column and quick-filter dropdown were silently dropped in
  an earlier design-system migration and have been restored.

Find the rebuilt tabs under **Accounting → Transactions**, and the
restored Return Status filter at **Inventory → Sales Credits**.
