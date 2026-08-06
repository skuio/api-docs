---
title: API changes — 2026-08-06
description: This release includes 11 additions.
authors: [product-team]
tags: [added]
date: 2026-08-06
---

This release includes 11 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Amazon
- `GET /api/amazon/{integrationInstance}/draft-inbound-plans/{draftInboundPlan}/shipments/{planShipment}/packing-list` — Get Shipment Packing List
- `GET /api/amazon/{integrationInstance}/draft-inbound-plans/{draftInboundPlan}/shipments/{planShipment}/packing-list.csv` — Download Shipment Packing List CSV
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment/shipping-details-email` — Send Shipping Details Email

### Ledger (Accounting v2)
- `GET /api/ledger/entries/aggregates` — Get Journal Entry Aggregates

### Product Listings
- `GET /api/v2/listing-drafts/{draft}/attempts` — Get Draft Publish Attempts
- `GET /api/v2/listing-drafts/{draft}/variation-themes` — Get Draft Variation Matrix
- `POST /api/v2/listing-drafts/{draft}/variations/validate` — Validate Draft Variation Matrix
- `GET /api/v2/listings/health` — Get Listing Health Rollup
- `POST /api/v2/listings/reconcile` — Reconcile Listing Status
- `POST /api/v2/product-listings/{listing}/recover` — Recover Listing on Channel
- `POST /api/v2/product-listings/{listing}/resync-inventory` — Push to Fix Listing Drift

_Spec version 1.0.0 → 1.0.0._
