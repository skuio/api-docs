---
title: "Faire imports: pagination cursor fixed and order import start date strictly enforced"
description: "Faire's API uses `cursor` not `next_page_cursor` (so orders and inventory paginators no longer stop after page 1), and orders before the configured start date are filtered by created_at, not updated_at."
authors: [product-team]
tags: [fixed, integrations, orders]
date: 2026-05-15
---

Two production-impacting fixes to Faire imports. First, the pagination
cursor field name was wrong — Faire's API returns `cursor`, not
`next_page_cursor` — so orders and inventory paginators were silently
stopping after the first page. Second, because Faire's /orders endpoint
paginates by `updated_at`, old orders that shipped later were slipping
in despite the configured start date; each order's `created_at` is now
compared against the start date and skipped if earlier.

<!-- truncate -->

**✨ What this means for you:**

- Faire syncs now pull every page of orders and inventory updates
  instead of truncating at page 1.
- The configured order-import start date is honored on every sync mode,
  including manual "Refresh from Faire" date-range pulls — old orders
  with recent updates can no longer back-door their way into SKU.io.
- The orders tab tooltip and countdown now reflect the actual 15-minute
  cron cadence.
