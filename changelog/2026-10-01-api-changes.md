---
title: API changes — 2026-10-01
description: This release includes 63 additions.
authors: [product-team]
tags: [added]
date: 2026-10-01
---

This release includes 63 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Agent Console
- `GET /api/support/agent/ai/control` — Get AI Control Feed
- `POST /api/support/agent/ai/instructions/{instruction}/consume` — Consume AI Instruction
- `POST /api/support/agent/ai/runner-heartbeat` — Send AI Runner Heartbeat
- `PUT /api/support/agent/ai/settings` — Update AI Agent Settings
- `GET /api/support/agent/ai/status` — Get AI Agent Status
- `GET /api/support/agent/alerts` — List Alerts
- `POST /api/support/agent/alerts` — Raise Alert
- `POST /api/support/agent/alerts/read-all` — Mark All Alerts Read
- `GET /api/support/agent/alerts/unread-count` — Get Unread Alert Count
- `POST /api/support/agent/alerts/{alert}/read` — Mark Alert Read
- `GET /api/support/agent/approvals` — List Approval Cards
- `POST /api/support/agent/approvals/batch-decide` — Batch Decide Approval Cards
- `POST /api/support/agent/approvals/{approval}/consume` — Consume Approval Decision
- `POST /api/support/agent/approvals/{approval}/decide` — Decide Approval Card
- `GET /api/support/agent/approvals/{approval}/files/{attachment}` — Get Approval Card File
- `POST /api/support/agent/tickets/{ticket}/ai/disable` — Turn AI Agent Off for Ticket
- `POST /api/support/agent/tickets/{ticket}/ai/enable` — Turn AI Agent Back On for Ticket
- `POST /api/support/agent/tickets/{ticket}/ai/instructions` — Send Instruction to AI Agent
- `POST /api/support/agent/tickets/{ticket}/ai/pause` — Pause AI Agent on Ticket
- `POST /api/support/agent/tickets/{ticket}/ai/resume` — Resume AI Agent on Ticket
- `GET /api/support/agent/tickets/{ticket}/ai/runs` — List Autopilot Runs
- `POST /api/support/agent/tickets/{ticket}/ai/runs` — Start Autopilot Run
- `PATCH /api/support/agent/tickets/{ticket}/ai/runs/{run}` — Finish Autopilot Run
- `POST /api/support/agent/tickets/{ticket}/ai/stop` — Stop AI Agent Run
- `POST /api/support/agent/tickets/{ticket}/ai/stop/ack` — Acknowledge AI Agent Stop
- `GET /api/support/agent/tickets/{ticket}/approvals` — List Ticket Approval Cards
- `POST /api/support/agent/tickets/{ticket}/approvals` — Open Approval Card
- `POST /api/support/agent/tickets/{ticket}/claim` — Claim Agent Ticket
- `POST /api/support/agent/tickets/{ticket}/hand-back` — Hand Back Ticket to AI Agent
- `POST /api/support/agent/tickets/{ticket}/heartbeat` — Send Agent Ticket Heartbeat
- `POST /api/support/agent/tickets/{ticket}/link-requester` — Link Ticket Requester to User
- `POST /api/support/agent/tickets/{ticket}/progress` — Post Agent Ticket Progress
- `POST /api/support/agent/tickets/{ticket}/release` — Release Agent Ticket
- `GET /api/support/agent/users` — Search Users

### Amazon
- `GET /api/amazon/unified/fba-loss-events` — List FBA Loss Events
- `POST /api/amazon/unified/fba-loss-events/link` — Link FBA Losses
- `GET /api/amazon/unified/fba-loss-events/summary` — Get FBA Loss Event Status Summary
- `GET /api/amazon/unified/fba-loss-events/{lossEvent}` — Get FBA Loss Event
- `PATCH /api/amazon/unified/fba-loss-events/{lossEvent}` — Update FBA Loss Event Recoverability
- `POST /api/amazon/unified/fba-loss-events/{lossEvent}/links` — Link Record to FBA Loss Event
- `DELETE /api/amazon/unified/fba-loss-events/{lossEvent}/links/{link}` — Delete FBA Loss Event Link
- `GET /api/amazon/unified/fba-reappearance` — List FBA Missing & Reappearing Inventory
- `GET /api/amazon/unified/fba-reappearance/summary` — Get FBA Missing & Reappearing Summary
- `GET /api/amazon/unified/fba-reimbursement-cogs` — List FBA Reimbursement COGS Postings
- `GET /api/amazon/unified/fba-reimbursement-cogs/summary` — Get FBA Reimbursement COGS Summary
- `GET /api/amazon/unified/fba-reimbursement-cogs/{posting}` — Get FBA Reimbursement COGS Posting
- `POST /api/amazon/unified/fba-reimbursement-cogs/{posting}/post-to-open-period` — Post FBA Reimbursement COGS Posting to Open Period
- `GET /api/amazon/unified/fba-reimbursement-reconciliation` — List FBA Reimbursement Reconciliation Exceptions
- `GET /api/amazon/unified/fba-reimbursement-reconciliation/adjustment-breakdown` — Get FBA Inventory Adjustment Breakdown
- `GET /api/amazon/unified/fba-reimbursement-reconciliation/summary` — Get FBA Reimbursement Reconciliation Summary
- `POST /api/amazon/unified/fba-reimbursement-reconciliation/{exception}/explain` — Explain FBA Reimbursement Reconciliation Exception
- `POST /api/amazon/unified/fba-reimbursement-reconciliation/{exception}/reopen` — Reopen FBA Reimbursement Reconciliation Exception
- `GET /api/amazon/unified/fba-reimbursements/cost-summary` — Get FBA Reimbursement Cost Summary
- `GET /api/amazon/unified/reimbursement-cases/{reimbursementCase}/fee-filing` — Get Reimbursement Case Fee Filing
- `POST /api/amazon/unified/reimbursement-cases/{reimbursementCase}/supplier-invoice` — Upload Reimbursement Case Supplier Invoice

### Financials
- `GET /api/v2/financials/daily-summary/aggregates` — Get Daily Financial Summary Column Totals
- `GET /api/v2/financials/sales-order-lines/aggregates` — Get Sales Order Financials Column Totals

### Intake (other environments)
- `POST /api/support/intake/tickets/{ticket}/request-human` — Request a Person for Intake Ticket

### Products
- `GET /api/products/conditions` — List Product Conditions
- `POST /api/products/conditions` — Create Product Condition

### Reporting
- `GET /api/reporting/inventory-planning/aggregates` — Get Inventory Planning Column Totals
- `GET /api/reporting/realtime-inventory/aggregates` — Get Real-Time Inventory Column Totals

### Tickets
- `POST /api/support/tickets/{ticket}/request-human` — Request a Person for Support Ticket

_Spec version 1.0.0 → 1.0.0._
