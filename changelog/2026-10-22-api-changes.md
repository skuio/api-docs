---
title: API changes — 2026-10-22
description: This release includes 3 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-10-22
---

This release includes 3 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Cost Categories
- `GET /api/cost-categories/lookup/cogs-channels` — List Cost Category COGS Channels

### Transactions
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/credit-memos/{memoId}/push-to-accounting` — Push Credit Memo to Accounting
- `POST /api/magento2/integration-instances/{magento2IntegrationInstance}/invoices/{invoiceId}/push-to-accounting` — Push Invoice to Accounting

## Changed

### Shopify
- `GET /api/shopify/{integrationInstance}/locations` — List Locations
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
