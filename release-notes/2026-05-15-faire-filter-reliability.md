---
title: "Faire integration: Products and Orders filters work reliably across navigation"
description: "The mapped / has-SKU checkbox filters on the Faire Products page no longer crash, and computed datatable filters now seed on mount so the Orders page doesn't show \"No data\" after SPA navigation."
authors: [product-team]
tags: [fixed, integrations]
date: 2026-05-15
---

A pass of reliability fixes for filtering on the Faire integration's
Products and Orders pages.

<!-- truncate -->

- The **Mapped / SKU Status** checkbox filters on the Faire Products
  page no longer error on first click, and resolve correctly through
  the new filter-tree pipeline.
- The Faire **Orders** page no longer shows *"No data available"* after
  navigating between Faire pages with an integration already selected
  — computed datatable filters now seed from their source on mount.

These are all small fixes layered on top of the broader Faire
filter-tree migration.
