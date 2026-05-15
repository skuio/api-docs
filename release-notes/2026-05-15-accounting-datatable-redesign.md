---
title: "Accounting tables — redesigned filters, bulk actions, and saved views"
description: "Transactions, Invoices, Journals, and Payments now share the standard datatable design — tree-aware filters, chip-style bulk actions, saved views favorites, and a host of filter-accuracy fixes."
authors: [product-team]
tags: [feature, improved, accounting]
date: 2026-05-15
---

The four tabs of the Accounting page — **Transactions**, **Invoices**,
**Journals**, and **Payments** — have all been brought onto the
standard datatable design system. You get the collapsible filter
panel, saved-views favorites bar, chip-style bulk action panel,
tree-aware filter inputs with lookups, single-row context menus, and
confirm-before-destructive popups everywhere they were previously
inconsistent — and as part of the rebuild, eight filter-accuracy bugs
that were quietly hiding rows have been fixed.

<!-- truncate -->

**✨ What this means for you:**

- The four Accounting tabs now feel and behave the same as the rest of
  SKU.io's datatables — same filter UI, same saved-views workflow,
  same bulk-action ergonomics.
- Filter status options that used to return no rows ("To Sync",
  "Ineligible to Sync", "Submission in Progress") now match the rows
  that actually display those status chips on the page.
- Bulk actions on the four tabs are wired into the shared
  bulk-resolver path, so they behave consistently with the rest of
  the app.

## What got the redesign

All four tabs of the Accounting page were rebuilt against the
datatable baseline:

- **Collapsible Filter Panel** — open it to see every filter at once,
  collapse it when you're done; the same component now used on most
  other tables in SKU.io.
- **Saved Views Favorites Bar** — pin the saved views you use most so
  they sit one click away at the top of the page.
- **Chip-style Bulk Panel** — selecting rows reveals a compact, chip-
  based action bar instead of an inline button row.
- **Tree-aware Filter Inputs with Lookups** — filter inputs now know
  about each other (a nominal-code lookup respects what you've
  filtered by, and so on), and dropdowns paginate properly for tables
  with thousands of values.
- **Context Menus on Rows** — right-click (or click the row menu) for
  per-row actions, the same UI other datatables already had.
- **Confirm-before-destructive** — single-row delete now flows through
  the standard confirmation popup.

## Filter accuracy — eight bugs fixed

A QA pass during the rebuild turned up eight filter-accuracy bugs
across the four tabs. The two most user-visible:

- **Status filters that returned zero rows.** The dropdown options
  **To Sync**, **Ineligible to Sync**, and **Submission in Progress**
  were valid choices in the UI but never matched any rows, because
  the backend filter expression only knew the older three values
  (`synced`, `notSynced`, `hasErrors`). The expression has been
  rewritten to mirror exactly what the page's status accessor returns
  — five branches, consulting the integration's `sync_start_date` —
  so the filter classification of each row matches the status chip
  the page draws on it.

- **Parent reference and global search on Payments.** Filtering or
  searching by parent reference on the Payments tab was 500-ing on
  every operator. The query has been rewritten to use a `whereExists`
  subquery against the polymorphic `link_type`/`link_id` columns
  (replacing a `whereHas` that couldn't traverse a MorphTo
  relationship), and the related `has_error` filter is now properly
  registered under operator-suffixed keys so the new grouped-filter
  syntax accepts it.

A new test suite
(`AccountingTransactionGroupedFilterTest`) covers the five-branch
status logic, the polymorphic parent-reference subquery, and the
filter registrations end-to-end, so this set of behaviors stays
correct as we continue to expand the design system across other
pages.

## What this means for your saved views

Saved views from before the redesign continue to load. The first time
you open a tab you'll see your existing views in the new favorites
bar; pin the ones you reach for most.
