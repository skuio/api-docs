---
title: API changes — 2026-10-15
description: This release includes 56 additions.
authors: [product-team]
tags: [added]
date: 2026-10-15
---

This release includes 56 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Accounts
- `GET /api/admin/portal/accounts/{customer}/dealer-view` — Get Dealer View (What this dealer sees)

### Authentication
- `POST /api/portal/auth/view-as/end` — End Staff View (tab closed)

### Send Planner
- `PUT /api/send-planner/capacity` — Upsert Network Capacity Limit
- `DELETE /api/send-planner/capacity/{capacity}` — Delete Network Capacity Limit
- `PUT /api/send-planner/lanes` — Save Send Lanes
- `GET /api/send-planner/network-insights` — List Send Network Insights
- `GET /api/send-planner/networks` — List Send Networks
- `PUT /api/send-planner/networks/{warehouse}` — Update Send Network Rules
- `GET /api/send-planner/networks/{warehouse}/products` — List Network Product Rules
- `PUT /api/send-planner/networks/{warehouse}/products` — Upsert Network Product Rule
- `POST /api/send-planner/networks/{warehouse}/refresh-inventory` — Refresh Network Inventory
- `POST /api/send-planner/networks/{warehouse}/refresh-recommendations` — Refresh Network Recommendations
- `DELETE /api/send-planner/product-settings/{setting}` — Delete Network Product Rule
- `GET /api/send-planner/settings` — Get Send Planner Settings
- `PUT /api/send-planner/settings` — Update Send Planner Settings
- `PUT /api/send-planner/sources` — Save Send Source Settings
- `GET /api/send-planner/transfer-destinations` — Get Transfer Destinations
- `PUT /api/send-planner/transfer-destinations` — Update Transfer Destinations
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
- `POST /api/send-plans/{sendPlan}/products/{product}/production` — Plan Production for Send Plan Product
- `POST /api/send-plans/{sendPlan}/promote` — Promote Scenario
- `POST /api/send-plans/{sendPlan}/rebalance` — Rebalance Send Plan Products
- `GET /api/send-plans/{sendPlan}/supplier-purchase-orders` — Preview supplier POs (supplier-direct sends)
- `POST /api/send-plans/{sendPlan}/supplier-purchase-orders` — Draft supplier POs (supplier-direct sends)

### TikTok Shop
- `GET /api/tiktok-shop/{integrationInstance}/fbt/inbound-products/suggested` — List Suggested FBT Inbound Products

### Walmart
- `DELETE /api/walmart/{integrationInstance}/wfs/inbound-drafts/{draft}` — Discard Send Planner Inbound Draft
- `GET /api/walmart/{integrationInstance}/wfs/inbound-drafts/{draft}` — Get Send Planner Inbound Draft

_Spec version 1.0.0 → 1.0.0._
