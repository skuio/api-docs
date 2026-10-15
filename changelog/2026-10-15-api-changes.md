---
title: API changes — 2026-10-15
description: This release includes 115 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-10-15
---

This release includes 115 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Accounts
- `GET /api/admin/portal/accounts/{customer}/dealer-view` — Get Dealer View (What this dealer sees)

### Authentication
- `POST /api/portal/auth/view-as/end` — End Staff View (tab closed)

### Etsy
- `GET /api/etsy/instances` — List Etsy Integration Instances
- `POST /api/etsy/instances` — Create Etsy Integration Instance
- `DELETE /api/etsy/instances/{integrationInstance}` — Delete Etsy Integration Instance
- `GET /api/etsy/instances/{integrationInstance}` — Get Etsy Integration Instance
- `GET /api/etsy/instances/{integrationInstance}/activity-log` — List Etsy Activity Log
- `POST /api/etsy/instances/{integrationInstance}/authorization-url` — Get Etsy Authorization URL
- `POST /api/etsy/instances/{integrationInstance}/check-shipping-access` — Check Etsy Shipping Data Access
- `GET /api/etsy/instances/{integrationInstance}/dashboard` — Get Etsy Dashboard
- `GET /api/etsy/instances/{integrationInstance}/inventory` — List Etsy Inventory
- `POST /api/etsy/instances/{integrationInstance}/inventory/fetch` — Fetch Etsy Inventory
- `POST /api/etsy/instances/{integrationInstance}/inventory/push` — Push Etsy Inventory
- `POST /api/etsy/instances/{integrationInstance}/inventory/recache` — Recalculate Etsy Inventory
- `GET /api/etsy/instances/{integrationInstance}/inventory/summary` — Get Etsy Inventory Summary
- `GET /api/etsy/instances/{integrationInstance}/listings` — List Etsy Listings
- `POST /api/etsy/instances/{integrationInstance}/listings/bulk` — Bulk Update Etsy Listings
- `GET /api/etsy/instances/{integrationInstance}/listings/export` — Export Etsy Listings
- `POST /api/etsy/instances/{integrationInstance}/listings/refresh-tracked` — Refresh Etsy Listings
- `GET /api/etsy/instances/{integrationInstance}/listings/{listingProduct}` — Get Etsy Listing
- `POST /api/etsy/instances/{integrationInstance}/listings/{listingProduct}/create-sku-product` — Create SKU.io Product from Etsy Listing
- `POST /api/etsy/instances/{integrationInstance}/listings/{listingProduct}/disable-sync` — Disable Etsy Listing Inventory Sync
- `POST /api/etsy/instances/{integrationInstance}/listings/{listingProduct}/enable-sync` — Enable Etsy Listing Inventory Sync
- `DELETE /api/etsy/instances/{integrationInstance}/listings/{listingProduct}/map` — Unmap Etsy Listing
- `POST /api/etsy/instances/{integrationInstance}/listings/{listingProduct}/map` — Map Etsy Listing
- `GET /api/etsy/instances/{integrationInstance}/listings/{listingProduct}/orders` — List Orders for Etsy Listing
- `GET /api/etsy/instances/{integrationInstance}/listings/{listingProduct}/raw` — Get Raw Etsy Listing
- `POST /api/etsy/instances/{integrationInstance}/listings/{listingProduct}/refresh` — Refresh Etsy Listing
- `PATCH /api/etsy/instances/{integrationInstance}/listings/{listingProduct}/revenue-mapping` — Set Etsy Listing Revenue Mapping
- `POST /api/etsy/instances/{integrationInstance}/listings/{listingProduct}/smart-match` — Smart Match Etsy Listing
- `GET /api/etsy/instances/{integrationInstance}/mappings` — Get Etsy Field Mappings
- `GET /api/etsy/instances/{integrationInstance}/orders` — List Etsy Orders
- `POST /api/etsy/instances/{integrationInstance}/orders/bulk-archive` — Bulk Archive Etsy Orders
- `POST /api/etsy/instances/{integrationInstance}/orders/bulk-create-sku-orders` — Bulk Create SKU.io Sales Orders from Etsy Orders
- `POST /api/etsy/instances/{integrationInstance}/orders/bulk-delete` — Bulk Delete Etsy Orders
- `POST /api/etsy/instances/{integrationInstance}/orders/bulk-delete-sku-orders` — Bulk Delete SKU.io Sales Orders for Etsy Orders
- `POST /api/etsy/instances/{integrationInstance}/orders/bulk-unarchive` — Bulk Unarchive Etsy Orders
- `POST /api/etsy/instances/{integrationInstance}/orders/bulk-update-sku-orders` — Bulk Update SKU.io Sales Orders from Etsy Orders
- `GET /api/etsy/instances/{integrationInstance}/orders/pre-start-date` — Query Pre-Start-Date Etsy Orders
- `POST /api/etsy/instances/{integrationInstance}/orders/pre-start-date/import` — Import Pre-Start-Date Etsy Orders
- `POST /api/etsy/instances/{integrationInstance}/orders/refresh-tracked` — Refresh Etsy Orders
- `GET /api/etsy/instances/{integrationInstance}/orders/{receipt}` — Get Etsy Order
- `GET /api/etsy/instances/{integrationInstance}/orders/{receipt}/activity-log` — List Etsy Order Activity Log
- `POST /api/etsy/instances/{integrationInstance}/orders/{receipt}/archive` — Archive Etsy Order
- `POST /api/etsy/instances/{integrationInstance}/orders/{receipt}/create-sku-order` — Create SKU.io Sales Order from Etsy Order
- `GET /api/etsy/instances/{integrationInstance}/orders/{receipt}/raw` — Get Raw Etsy Order
- `POST /api/etsy/instances/{integrationInstance}/orders/{receipt}/refetch` — Refetch Etsy Order
- `DELETE /api/etsy/instances/{integrationInstance}/orders/{receipt}/sku-order` — Delete SKU.io Sales Order for Etsy Order
- `POST /api/etsy/instances/{integrationInstance}/orders/{receipt}/submit-tracking` — Submit Etsy Order Tracking
- `POST /api/etsy/instances/{integrationInstance}/orders/{receipt}/unarchive` — Unarchive Etsy Order
- `POST /api/etsy/instances/{integrationInstance}/orders/{receipt}/update-sku-order` — Update SKU.io Sales Order from Etsy Order
- `POST /api/etsy/instances/{integrationInstance}/revoke` — Revoke Etsy Connection
- `GET /api/etsy/instances/{integrationInstance}/webhook-events` — List Etsy Webhook Events
- `GET /api/etsy/instances/{integrationInstance}/webhook-events/summary` — Get Etsy Webhook Event Summary
- `GET /api/etsy/oauth/config` — Get Etsy OAuth Configuration

### Purchase Orders
- `GET /api/purchase-orders/{purchase_order}/awd-receipt-assessment` — Get AWD Receipt Assessment
- `POST /api/purchase-orders/{purchase_order}/awd-receipt-assessment/confirm` — Confirm AWD Receipt

### Send Planner
- `DELETE /api/send-planner/capacity/{capacity}` — Delete Network Capacity Limit
- `GET /api/send-planner/network-insights` — List Send Network Insights
- `GET /api/send-planner/networks` — List Send Networks
- `GET /api/send-planner/networks/{warehouse}/products` — List Network Product Rules
- `POST /api/send-planner/networks/{warehouse}/refresh-inventory` — Refresh Network Inventory
- `POST /api/send-planner/networks/{warehouse}/refresh-recommendations` — Refresh Network Recommendations
- `DELETE /api/send-planner/product-settings/{setting}` — Delete Network Product Rule
- `GET /api/send-planner/settings` — Get Send Planner Settings
- `GET /api/send-planner/transfer-destinations` — Get Transfer Destinations
- `GET /api/send-plans` — List Send Plans
- `POST /api/send-plans` — Create Send Plan
- `GET /api/send-plans/compare` — Compare Send Plans
- `GET /api/send-plans/current` — Get Current Send Plan
- `DELETE /api/send-plans/{sendPlan}` — Archive Send Plan
- `GET /api/send-plans/{sendPlan}` — Get Send Plan
- `GET /api/send-plans/{sendPlan}/ai-approval` — Get the AI approval summary
- `POST /api/send-plans/{sendPlan}/ai-approval` — Approve & run
- `POST /api/send-plans/{sendPlan}/ai-approval/narrative` — Word the recommendation with AI
- `GET /api/send-plans/{sendPlan}/approvals` — List Send Run Approvals
- `POST /api/send-plans/{sendPlan}/approvals` — Approve Send Run Network
- `DELETE /api/send-plans/{sendPlan}/approvals/{destination}` — Withdraw Send Run Network Approval
- `GET /api/send-plans/{sendPlan}/drafts` — List Send Plan Drafts
- `POST /api/send-plans/{sendPlan}/drafts` — Create Send Plan Drafts
- `POST /api/send-plans/{sendPlan}/drafts/preview` — Preview Send Plan Drafts
- `POST /api/send-plans/{sendPlan}/drafts/retry` — Retry Failed Send Plan Drafts
- `POST /api/send-plans/{sendPlan}/drafts/{draft}/draft-available` — Draft Available Send Plan Quantity
- `GET /api/send-plans/{sendPlan}/drafts/{draft}/manual-entry` — Download Send Plan Manual Entry Sheet
- `POST /api/send-plans/{sendPlan}/drafts/{draft}/transfer` — Create Send Plan Follow-up Warehouse Transfer
- `GET /api/send-plans/{sendPlan}/drafts/{draft}/transfer-targets` — List Send Plan Draft Transfer Targets
- `GET /api/send-plans/{sendPlan}/export` — Export Send Plan
- `DELETE /api/send-plans/{sendPlan}/holds` — Release Send Plan Stock Holds
- `POST /api/send-plans/{sendPlan}/holds` — Hold Send Plan Stock
- `GET /api/send-plans/{sendPlan}/lines` — List Send Plan Products
- `POST /api/send-plans/{sendPlan}/lines/apply-network-recommendations` — Apply Network Recommendations
- `POST /api/send-plans/{sendPlan}/lines/reset` — Reset Send Plan Lines
- `PATCH /api/send-plans/{sendPlan}/lines/{line}` — Update Send Plan Line
- `POST /api/send-plans/{sendPlan}/lines/{line}/reset` — Reset Send Plan Line Override
- `POST /api/send-plans/{sendPlan}/lines/{line}/resolve` — Resolve Send Plan Line
- `GET /api/send-plans/{sendPlan}/products/{product}` — Get Send Plan Product Detail
- `GET /api/send-plans/{sendPlan}/supplier-purchase-orders` — Preview supplier POs (supplier-direct sends)

### TikTok Shop
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-products/suggested` — List Suggested FBT Inbound Products

### Walmart
- `DELETE /api/walmart/{integrationInstance}/wfs/inbound-drafts/{draft}` — Discard Send Planner Inbound Draft
- `GET /api/walmart/{integrationInstance}/wfs/inbound-drafts/{draft}` — Get Send Planner Inbound Draft

_…plus 15 more (see the API reference)._

## Changed

### Applications
- `GET /api/admin/portal/applications` — List Applications
  - new parameter(s): `filter[status]`, `page`, `per_page`, `sort`

_Spec version 1.0.0 → 1.0.0._
