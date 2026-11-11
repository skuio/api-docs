---
title: API changes — 2026-11-11
description: This release includes 108 additions.
authors: [product-team]
tags: [added]
date: 2026-11-11
---

This release includes 108 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Amazon
- `GET /api/amazon/awd/carriers` — List AWD Carrier Suggestions
- `GET /api/amazon/unified/awd/inbound-orders` — List AWD Inbound Orders Across Accounts
- `GET /api/amazon/{integrationInstance}/awd/inbound-orders` — List AWD Inbound Orders
- `POST /api/amazon/{integrationInstance}/awd/inbound-orders/bulk-cancel` — Bulk Cancel AWD Inbound Orders
- `POST /api/amazon/{integrationInstance}/awd/inbound-orders/bulk-refresh` — Bulk Refresh AWD Inbound Orders
- `GET /api/amazon/{integrationInstance}/awd/inbound-orders/export` — Export AWD Inbound Orders
- `GET /api/amazon/{integrationInstance}/awd/inbound-orders/summary` — Get AWD Inbound Order Summary
- `GET /api/amazon/{integrationInstance}/awd/inbound-orders/{awd_inbound_order}` — Get AWD Inbound Order
- `POST /api/amazon/{integrationInstance}/awd/inbound-orders/{awd_inbound_order}/cancel` — Cancel AWD Inbound Order
- `POST /api/amazon/{integrationInstance}/awd/inbound-orders/{awd_inbound_order}/confirm` — Confirm AWD Inbound Order
- `POST /api/amazon/{integrationInstance}/awd/inbound-orders/{awd_inbound_order}/labels` — Request AWD Inbound Order Labels
- `GET /api/amazon/{integrationInstance}/awd/inbound-orders/{awd_inbound_order}/labels/download` — Download AWD Inbound Order Labels
- `POST /api/amazon/{integrationInstance}/awd/inbound-orders/{awd_inbound_order}/labels/send` — Send AWD Inbound Order Labels
- `POST /api/amazon/{integrationInstance}/awd/inbound-orders/{awd_inbound_order}/refresh` — Refresh AWD Inbound Order
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/awd/eligibility` — Check AWD Plan Eligibility
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/awd/import-purchase-order` — Import Purchase Order Lines to AWD Plan
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/awd/orders` — Create AWD Inbound Order from Plan
- `GET /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/awd/readiness` — Get AWD Plan Readiness
- `DELETE /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/awd/seller-central-handoff` — Clear Seller Central Hand-off
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/awd/seller-central-handoff` — Start Seller Central Hand-off
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/awd/split` — Split AWD Plan

### Build to Order
- `POST /api/manufacturing/build-to-order/backfill` — Start Backorder Backfill
- `GET /api/manufacturing/build-to-order/backfill/preview` — Get Backorder Backfill Preview
- `GET /api/manufacturing/build-to-order/exceptions` — List Build-to-Order Exceptions
- `POST /api/manufacturing/build-to-order/exceptions/{exception}/retry` — Retry Build-to-Order Exception
- `POST /api/manufacturing/manufacturing-orders/{manufacturingOrder}/build-to-order/dismiss-flag` — Dismiss Manufacturing Order Build-to-Order Flag
- `POST /api/sales-orders/{salesOrder}/build-to-order/reconcile` — Raise Manufacturing Orders for a Sales Order

### Ledger (Accounting v2)
- `POST /api/ledger/cost-validation/analyse` — Analyse Cost Validation Documents
- `GET /api/ledger/cost-validation/runs` — List Cost Validation Runs
- `POST /api/ledger/cost-validation/runs` — Create Cost Validation Run
- `DELETE /api/ledger/cost-validation/runs/{id}` — Undo Cost Validation Run
- `GET /api/ledger/cost-validation/runs/{id}` — Get Cost Validation Run
- `GET /api/ledger/health-check` — Get Books Health Check Overview
- `GET /api/ledger/health-check/estimate` — Get Books Health Check Estimate
- `POST /api/ledger/health-check/run` — Run Books Health Check
- `GET /api/ledger/health-check/runs` — List Books Health Check Runs
- `GET /api/ledger/health-check/runs/{id}` — Get Books Health Check Run
- `POST /api/ledger/health-check/runs/{id}/export` — Export Books Health Check Run
- `POST /api/ledger/health-check/runs/{id}/resume` — Resume Books Health Check Run
- `GET /api/ledger/history` — Get History Before Go-Live
- `GET /api/ledger/history/counts` — List History Counts
- `POST /api/ledger/history/counts` — Create History Count
- `DELETE /api/ledger/history/counts/{count}` — Delete History Count
- `GET /api/ledger/history/documents` — List History Documents
- `POST /api/ledger/history/documents` — Upload History Documents
- `DELETE /api/ledger/history/documents/{document}` — Delete History Document
- `GET /api/ledger/history/documents/{document}` — Get History Document
- `POST /api/ledger/history/documents/{document}/accept` — Accept History Document
- `GET /api/ledger/history/documents/{document}/file` — Download History Document File
- `POST /api/ledger/history/documents/{document}/reject` — Reject History Document
- `POST /api/ledger/history/documents/{document}/rescan` — Read History Document Again
- `POST /api/ledger/history/export` — Export History
- `POST /api/ledger/history/imports` — Import History
- `GET /api/ledger/history/imports/template` — Download History Import Template
- `GET /api/ledger/history/months/{month}` — Get History Month
- `GET /api/ledger/history/purchases` — List History Purchases
- `POST /api/ledger/history/purchases` — Create History Purchase
- `POST /api/ledger/history/purchases/assign-warehouse` — Assign Warehouse to History Purchases
- `DELETE /api/ledger/history/purchases/{purchase}` — Delete History Purchase
- `GET /api/ledger/history/tie-out` — Get History Tie-Out
- `GET /api/ledger/reports/ecommerce-pnl` — Get Ecommerce P&L
- `POST /api/ledger/reports/ecommerce-pnl/export` — Export Ecommerce P&L Workbook

### Product Listings
- `POST /api/integration-instances/{integrationInstance}/channel-attribute-mappings/backfill` — Backfill Channel Attributes

### Products
- `PATCH /api/products/{product}/case-details` — Update Product Case Details

### Purchase Orders
- `POST /api/purchase-orders/{purchase_order}/awd-inbound-plan` — Create AWD Inbound Plan from Purchase Order
- `GET /api/purchase-orders/{purchase_order}/awd-plan-options` — Get AWD Plan Options for Purchase Order
- `POST /api/purchase-orders/{purchase_order}/fba-inbound-plan` — Create FBA Inbound Plan from Purchase Order
- `GET /api/purchase-orders/{purchase_order}/fba-plan-options` — Get FBA Plan Options for Purchase Order

### Purple Dot
- `GET /api/products/{product}/purple-dot` — Get Product Purple Dot Summary
- `POST /api/purple-dot/refunds` — Create Refund
- `GET /api/purple-dot/refunds/preview` — Get Refund Preview
- `POST /api/purple-dot/refunds/{refund}/resolve` — Resolve Unconfirmed Refund
- `POST /api/purple-dot/test` — Test Purple Dot Token
- `GET /api/purple-dot/{instance}/activity` — List Purple Dot Activity
- `GET /api/purple-dot/{instance}/eta-reviews` — List Purple Dot ETA Reviews
- `POST /api/purple-dot/{instance}/eta-reviews/{review}/approve` — Approve Purple Dot ETA Review
- `POST /api/purple-dot/{instance}/eta-reviews/{review}/dismiss` — Dismiss Purple Dot ETA Review
- `POST /api/purple-dot/{instance}/go-live` — Go Live with Purple Dot
- `GET /api/purple-dot/{instance}/planned-inventory` — List Purple Dot Planned Inventory
- `POST /api/purple-dot/{instance}/planned-inventory/push` — Push Purple Dot Planned Inventory
- `GET /api/purple-dot/{instance}/preorders` — List Purple Dot Pre-orders
- `POST /api/purple-dot/{instance}/preorders/sync` — Sync Purple Dot Pre-orders
- `GET /api/purple-dot/{instance}/preorders/{preorder}` — Get Purple Dot Pre-order
- `POST /api/purple-dot/{instance}/preview` — Preview Purple Dot Connection
- `GET /api/purple-dot/{instance}/preview/rows` — List Purple Dot Preview Rows
- `POST /api/purple-dot/{instance}/reconcile` — Reconcile Purple Dot
- `GET /api/purple-dot/{instance}/refunds` — List Refunds
- `GET /api/purple-dot/{instance}/release-budgets` — List Purple Dot Release Budgets
- `POST /api/purple-dot/{instance}/release-budgets/push` — Push Purple Dot Release Budgets
- `GET /api/purple-dot/{instance}/summary` — Get Purple Dot Summary
- `GET /api/purple-dot/{instance}/unmatched-exports` — List Unmatched Exports
- `POST /api/purple-dot/{instance}/unmatched-exports/{row}/dismiss` — Dismiss Unmatched Export
- `POST /api/purple-dot/{instance}/unmatched-exports/{row}/match` — Match Unmatched Export
- `POST /api/purple-dot/{instance}/variant-mappings` — Map Purple Dot Variant to Product
- `GET /api/purple-dot/{instance}/waitlists` — List Purple Dot Waitlists
- `POST /api/purple-dot/{instance}/waitlists/{waitlist}/state` — Set Purple Dot Waitlist State

### Shopify
- `GET /api/shopify/{integrationInstance}/optional-scopes` — Get Optional Scopes

### SPS Commerce
- `GET /api/spscommerce/{integrationInstance}/documents/{document}/download` — Download EDI Document

### TikTok Posting
- `GET /api/tiktok-posting/product-photos` — List TikTok Product Photos

### Trackstar
- `GET /api/trackstar/integration-instances/{integration_instance}/order-types` — Get Order Types

_…plus 8 more (see the API reference)._

_Spec version 1.0.0 → 1.0.0._
