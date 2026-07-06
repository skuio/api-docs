---
title: API changes — 2026-07-06
description: This release 40 removed API endpoint(s).
authors: [product-team]
tags: [removed, breaking]
date: 2026-07-06
---

This release 40 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Removed

- `DELETE /api/webhooks/{webhook}` — Delete Webhook **(breaking)**
- `GET //{domain}/api/amazon/{integrationInstance}/finances/settlement-data` — List Settlement Data **(breaking)**
- `GET //{domain}/api/custom-fields` — List Custom Fields **(breaking)**
- `GET //{domain}/api/export/xero/accounts` — Export Accounts **(breaking)**
- `GET //{domain}/api/products` — List Products **(breaking)**
- `GET //{domain}/api/products/import/fields` — Get Import Fields **(breaking)**
- `GET //{domain}/api/products/import/template` — Download Import Template **(breaking)**
- `GET //{domain}/api/shipmyorders/invoices` — List Invoices **(breaking)**
- `GET //{domain}/api/xero/accounts` — List Accounts **(breaking)**
- `GET //{protocol}{domain}/api/product-brands` — List Product Brands **(breaking)**
- `GET /api/attributes` — List Attributes (DataTable) **(breaking)**
- `GET /api/auth/user` — Verify Token **(breaking)**
- `GET /api/categories` — List Categories (DataTable) **(breaking)**
- `GET /api/constants` — List Constants **(breaking)**
- `GET /api/csv-templates` — List CSV Templates **(breaking)**
- `GET /api/custom-fields` — List Custom Fields **(breaking)**
- `GET /api/fifo-layers` — List FIFO Layers (DataTable) **(breaking)**
- `GET /api/financials/daily-summary` — List Daily Financial Summaries **(breaking)**
- `GET /api/incoterms` — List Incoterms **(breaking)**
- `GET /api/integration-instances` — List Integration Instances **(breaking)**
- `GET /api/inventory-adjustments` — List Inventory Adjustments **(breaking)**
- `GET /api/inventory-management` — Inventory Management Settings **(breaking)**
- `GET /api/lookup` — Lookup **(breaking)**
- `GET /api/product-brands` — List Product Brands **(breaking)**
- `GET /api/product-pricing-tiers` — List Pricing Tiers (DataTable) **(breaking)**
- `GET /api/products` — List Products **(breaking)**
- `GET /api/products/import/fields` — Get Import Fields **(breaking)**
- `GET /api/products/import/template` — Download Import Template **(breaking)**
- `GET /api/sales-channels` — List Sales Channels **(breaking)**
- `GET /api/stock-takes` — DataTable Index **(breaking)**
- `GET /api/stores` — List Stores **(breaking)**
- `GET /api/tags` — List Tags **(breaking)**
- `GET /api/webhooks` — List Webhooks **(breaking)**
- `GET /api/webhooks/{webhook}` — Show Webhook **(breaking)**
- `POST //{domain}/api/products/import/validate` — Validate Import **(breaking)**
- `POST /api/password/change` — Change Password **(breaking)**
- `POST /api/products/import/validate` — Validate Import **(breaking)**
- `POST /api/webhooks` — Create Webhook **(breaking)**
- `PUT /api/custom-field-values/{entity}/{entityId}` — Update Custom Field Values **(breaking)**
- `PUT /api/webhooks/{webhook}` — Update Webhook **(breaking)**

_Spec version 1.0.0 → 1.0.0._
