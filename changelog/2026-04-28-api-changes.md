---
title: API changes — 2026-04-28
description: This release includes 7 additions.
authors: [product-team]
tags: [added]
date: 2026-04-28
---

This release includes 7 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Inbound Shipments
- `GET /api/inbound-shipment-receipts/{receipt}` — Get Inbound Shipment Receipt
- `GET /api/inbound-shipment-receipts/{receipt}/activity-log` — Get Activity Log
- `GET /api/inbound-shipment-receipts/{receipt}/fifo-layers` — Get FIFO Layers
- `POST /api/inbound-shipment-receipts/{receipt}/generate-accounting-transaction` — Generate Accounting Transaction
- `GET /api/inbound-shipment-receipts/{receipt}/inventory-movements` — Get Inventory Movements

### Sales Channels
- `GET /api/amazon/unified/transactions/export` — Export Transactions
- `GET /api/amazon/unified/transactions/export/download` — Download Transaction Export

_Spec version 1.0.0 → 1.0.0._
