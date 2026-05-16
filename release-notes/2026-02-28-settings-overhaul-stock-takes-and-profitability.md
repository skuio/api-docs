---
title: "Settings overhaul, Stock Take rewrite, and the Profitability report"
description: "A full Settings refactor, a new Vue 3 Stock Take workflow, a Profitability report with FIFO drilldown, and per-store PDF templates."
authors: [product-team]
tags: [major-feature, improved, inventory, integrations, fulfillment, purchasing, reporting]
date: 2026-02-28
---

The Settings area is rebuilt on the modern datatable stack, Stock Takes become a full Vue 3 workspace, a new Profitability report ships, and PDF templates can be set per store.

<!-- truncate -->

Headline changes this release:

- **Settings overhaul** — every Settings list now has server-side search, sorting, advanced filters, bulk actions, and saved views.
- **Stock Take rewrite** — a new Vue 3 workspace with a reconciliation workflow, an adjustment mode, and a scanner-friendly barcode modal.
- **Profitability report** — trend, cost-breakdown, and per-order FIFO drilldown views.
- **Per-store PDF templates** — Sales Order, Purchase Order, and Packing Slip templates can be overridden per store.
- **Products workspace** — a rebuilt Vue 3 Products section with a bulk-edit grid for changing many products at once and a preview before applying.
- **Bundle & Kit Workshop** — a new workspace for building bundles and kits, with auto-detect suggestions and a conversion queue.
- **Backorder Queue V2** — priority settings plus manual release and cover controls for working the backorder queue.
- **Fulfillment Debt report** — a new report showing outstanding sales channel fulfillment obligations.
- Plus deeper Amazon, Shopify, and Veracore reliability work.
