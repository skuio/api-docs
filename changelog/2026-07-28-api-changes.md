---
title: API changes — 2026-07-28
description: This release includes 6 additions.
authors: [product-team]
tags: [added]
date: 2026-07-28
---

This release includes 6 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Magento 1
- `POST /api/magento1/instances/test-connection` — Test Store Credentials
- `POST /api/magento1/instances/{integrationInstance}/test-connection` — Test Instance Connection

### Purchase Orders
- `POST /api/purchase-orders/{purchase_order}/communications/{communication}/cancel` — Cancel (Unsend) Purchase Order Communication

### Sales Orders
- `POST /api/sales-orders/release` — Release Sales Orders
- `GET /api/sales-orders/release-candidates` — List Release Candidates
- `GET /api/sales-orders/{salesOrder}/dispatch-diagnosis` — Get Sales Order Dispatch Diagnosis

_Spec version 1.0.0 → 1.0.0._
