---
title: API changes — 2026-08-06
description: This release includes 4 additions.
authors: [product-team]
tags: [added]
date: 2026-08-06
---

This release includes 4 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Amazon
- `GET /api/amazon/{integrationInstance}/draft-inbound-plans/{draftInboundPlan}/shipments/{planShipment}/packing-list` — Get Shipment Packing List
- `GET /api/amazon/{integrationInstance}/draft-inbound-plans/{draftInboundPlan}/shipments/{planShipment}/packing-list.csv` — Download Shipment Packing List CSV
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment/shipping-details-email` — Send Shipping Details Email

### Ledger (Accounting v2)
- `GET /api/ledger/entries/aggregates` — Get Journal Entry Aggregates

_Spec version 1.0.0 → 1.0.0._
