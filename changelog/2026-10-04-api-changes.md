---
title: API changes — 2026-10-04
description: This release includes 71 additions, 3 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-10-04
---

This release includes 71 additions, 3 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Amazon
- `GET /api/amazon/unified/reimbursement-cases/remeasure-plan` — Get Remeasure Plan
- `POST /api/amazon/unified/reimbursement-cases/remeasure-quota` — Record Remeasure Quota
- `POST /api/amazon/unified/reimbursement-cases/remeasurements` — Record Remeasurements
- `GET /api/v2/amazon/asins/{asin}/daily` — List ASIN Daily Data
- `GET /api/v2/amazon/asins/{asin}/daily/export` — Export ASIN Daily Data
- `GET /api/v2/amazon/asins/{asin}/evidence.pdf` — Download ASIN Offer Evidence PDF
- `GET /api/v2/amazon/asins/{asin}/offer-events` — List ASIN Offer Change Events
- `GET /api/v2/amazon/asins/{asin}/offer-history` — Get ASIN Offer History
- `GET /api/v2/amazon/asins/{asin}/offers` — Get ASIN Offers
- `GET /api/v2/amazon/asins/{asin}/rank-history` — Get ASIN Sales Rank History

### Feature Adoption
- `GET /api/feature-adoption/catalog` — Get Feature Catalog
- `POST /api/feature-adoption/export` — Export Feature Adoption
- `GET /api/feature-adoption/features/{featureKey}` — Get Feature Adoption Detail
- `GET /api/feature-adoption/people` — List Feature Adoption People
- `GET /api/feature-adoption/people/{user}` — Get Feature Adoption Person
- `POST /api/feature-adoption/preferences` — Hide Feature
- `DELETE /api/feature-adoption/preferences/{featureKey}` — Restore Feature
- `GET /api/feature-adoption/summary` — Get Feature Adoption Summary

### Reporting
- `GET /api/v2/amazon/asins/{asin}/listing-quality/history` — Get ASIN Listing Quality History
- `DELETE /api/v2/brand-management/market-data/keepa` — Disconnect Keepa
- `GET /api/v2/brand-management/market-data/keepa` — Get Keepa Connection
- `PUT /api/v2/brand-management/market-data/keepa` — Connect Keepa
- `POST /api/v2/brand-management/market-data/keepa/test` — Test Keepa Connection
- `GET /api/v2/brand-management/profiles` — List Brand Reporting Profiles
- `POST /api/v2/brand-management/profiles/bulk-enable` — Bulk Enable Brand Reporting
- `GET /api/v2/brand-reports` — List Brand Reports
- `POST /api/v2/brand-reports` — Generate Brand Report
- `POST /api/v2/brand-reports/bulk-approve` — Bulk Approve Brand Reports
- `POST /api/v2/brand-reports/bulk-skip` — Bulk Skip Brand Reports
- `GET /api/v2/brand-reports/summary` — Get Brand Report Summary Counts
- `GET /api/v2/brand-reports/{run}` — Get Brand Report
- `POST /api/v2/brand-reports/{run}/approve` — Approve Brand Report
- `POST /api/v2/brand-reports/{run}/confirm-suggestions` — Confirm Brand Report Suggestions
- `GET /api/v2/brand-reports/{run}/delivery` — Get Brand Report Delivery Status
- `POST /api/v2/brand-reports/{run}/draft-summary` — Draft Brand Report Summary
- `GET /api/v2/brand-reports/{run}/export` — Export Brand Report
- `PATCH /api/v2/brand-reports/{run}/lines/{line}` — Update Brand Report Line
- `POST /api/v2/brand-reports/{run}/regenerate` — Regenerate Brand Report
- `POST /api/v2/brand-reports/{run}/resend` — Resend Brand Report
- `POST /api/v2/brand-reports/{run}/send` — Send Brand Report
- `GET /api/v2/brand-reports/{run}/send-composition` — Get Brand Report Email Composition
- `POST /api/v2/brand-reports/{run}/send-preview` — Preview Brand Report Email
- `GET /api/v2/brand-reports/{run}/share-link` — Get Brand Report Share Link
- `POST /api/v2/brand-reports/{run}/share-link` — Create Brand Report Share Link
- `POST /api/v2/brand-reports/{run}/share-link/revoke` — Revoke Brand Report Share Link
- `POST /api/v2/brand-reports/{run}/skip` — Skip Brand Report
- `GET /api/v2/brands/{brand}/contacts` — List Brand Contacts
- `POST /api/v2/brands/{brand}/contacts` — Create Brand Contact
- `GET /api/v2/brands/{brand}/contacts/export` — Export Brand Contacts
- `DELETE /api/v2/brands/{brand}/contacts/{contact}` — Delete Brand Contact
- `GET /api/v2/brands/{brand}/contacts/{contact}` — Get Brand Contact
- `PUT /api/v2/brands/{brand}/contacts/{contact}` — Update Brand Contact
- `POST /api/v2/brands/{brand}/contacts/{contact}/make-primary` — Set Brand Contact as Primary
- `GET /api/v2/brands/{brand}/fba-inventory-health` — Get Brand FBA Inventory Health
- `GET /api/v2/brands/{brand}/listing-quality` — Get Brand Listing Quality
- `POST /api/v2/brands/{brand}/listing-quality/audit` — Start Brand Listing Quality Audit
- `PUT /api/v2/brands/{brand}/listing-quality/brand-store` — Confirm Brand Store
- `PATCH /api/v2/brands/{brand}/listing-quality/watch-asins/{watchAsin}/aplus` — Confirm A+ Content for Watched ASIN
- `GET /api/v2/brands/{brand}/management-profile` — Get Brand Reporting Settings
- `PUT /api/v2/brands/{brand}/management-profile` — Update Brand Reporting Settings
- `POST /api/v2/brands/{brand}/map-prices` — Upload MAP Prices
- `GET /api/v2/brands/{brand}/watch-asins` — List Watched ASINs
- `POST /api/v2/brands/{brand}/watch-asins` — Add Watched ASINs
- `POST /api/v2/brands/{brand}/watch-asins/bulk` — Bulk Update Watched ASINs
- `POST /api/v2/brands/{brand}/watch-asins/rebuild` — Rebuild Brand Watchlist
- `PATCH /api/v2/brands/{brand}/watch-asins/{watchAsin}` — Update Watched ASIN
- `GET /api/v2/brands/{brand}/watch-products` — List Watched Products
- `POST /api/v2/brands/{brand}/watch-products` — Add Watched Products
- `PATCH /api/v2/brands/{brand}/watch-products/{watchProduct}` — Update Watched Product

### Walmart
- `DELETE /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/abandon` — Restore Abandoned Inbound Shipment
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/abandon` — Mark Inbound Shipment as Abandoned

## Changed

### Financials
- `POST /api/financials/daily-financials/recalculate` — Recalculate Daily Financials
  - new response code(s): `409`

### Store Email Templates
- `DELETE /api/store-email-templates` — Bulk Delete Store Email Templates
  - new response code(s): `299`
- `DELETE /api/store-email-templates/{id}` — Delete Store Email Template
  - new response code(s): `400`

_Spec version 1.0.0 → 1.0.0._
