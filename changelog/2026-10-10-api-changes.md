---
title: API changes — 2026-10-10
description: This release includes 51 additions, 1 change.
authors: [product-team]
tags: [added, changed]
date: 2026-10-10
---

This release includes 51 additions, 1 change.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Agent Console
- `GET /api/support/agent/categories` — List Agent Ticket Categories
- `GET /api/support/agent/insights-pack` — Get Agent Insights Pack
- `GET /api/support/agent/insights-pack/redaction-rules` — Get Insights Redaction Rules
- `PUT /api/support/agent/pod-incidents/{id}` — Update Pod Incident Summary
- `PATCH /api/support/agent/tickets/{ticket}/category` — Update Agent Ticket Category

### Amazon
- `GET /api/amazon/seller-feedback` — List Seller Feedback
- `GET /api/amazon/seller-feedback/performance` — Get Seller Feedback Performance
- `GET /api/amazon/seller-feedback/summary` — Get Seller Feedback Summary
- `POST /api/amazon/seller-feedback/sync` — Start Seller Feedback Sync
- `GET /api/amazon/seller-feedback/{feedback}` — Get Seller Feedback
- `PATCH /api/amazon/seller-feedback/{feedback}` — Update Seller Feedback

### EasyPost
- `GET /api/easypost/instance` — Get Current EasyPost Connection
- `POST /api/easypost/instances` — Create EasyPost Connection
- `DELETE /api/easypost/instances/{integrationInstance}` — Delete EasyPost Connection
- `GET /api/easypost/instances/{integrationInstance}` — Get EasyPost Connection
- `PATCH /api/easypost/instances/{integrationInstance}` — Update EasyPost Connection
- `POST /api/easypost/instances/{integrationInstance}/test-connection` — Test EasyPost Connection
- `POST /api/easypost/test` — Test EasyPost API Key

### Inbound Shipments
- `GET /api/inbound-shipments/{inbound_shipment}/duty-estimates` — Get Inbound Shipment Duty Estimates

### Insights Reports
- `GET /api/support/insights-reports` — List Support Insights Reports
- `POST /api/support/insights-reports` — Generate Support Insights Report
- `GET /api/support/insights-reports/estimate` — Estimate Support Insights Report
- `DELETE /api/support/insights-reports/{report}` — Delete Support Insights Report
- `GET /api/support/insights-reports/{report}` — Get Support Insights Report
- `POST /api/support/insights-reports/{report}/cancel` — Cancel Support Insights Report
- `GET /api/support/insights-reports/{report}/download/{format}` — Download Support Insights Report
- `GET /api/support/insights-reports/{report}/pack` — Get Support Insights Evidence Pack
- `POST /api/support/insights-reports/{report}/rerun` — Re-run Support Insights Report

### Intake (other environments)
- `GET /api/support/intake/categories` — List Intake Ticket Categories
- `GET /api/support/intake/insights-evidence` — Get Intake Insights Evidence
- `PATCH /api/support/intake/tickets/{ticket}/category` — Update Intake Ticket Category

### Products
- `GET /api/products/duty-summaries` — Get Product Duty Summaries
- `GET /api/products/{product}/duty-profile` — Get Product Duty Profile
- `PUT /api/products/{product}/tariff-codes` — Update Product Tariff Codes

### Purchase Orders
- `GET /api/dropship-labels/providers` — List Dropship Label Providers
- `PATCH /api/dropship-labels/{dropshipLabel}` — Update Dropship Label
- `GET /api/dropship-labels/{dropshipLabel}/download` — Download Dropship Label
- `POST /api/dropship-labels/{dropshipLabel}/resend` — Resend Dropship Label to Vendor
- `POST /api/dropship-labels/{dropshipLabel}/void` — Void Dropship Label
- `PUT /api/duty-estimates/{dutyEstimate}/override` — Override Duty Estimate
- `GET /api/purchase-orders/{purchase_order}/dropship-labels` — List Dropship Labels for Purchase Order
- `POST /api/purchase-orders/{purchase_order}/dropship-labels` — Create Dropship Label
- `POST /api/purchase-orders/{purchase_order}/dropship-labels/quote` — Quote Dropship Label Rates
- `GET /api/purchase-orders/{purchase_order}/duty-estimates` — List Purchase Order Duty Estimates
- `POST /api/purchase-orders/{purchase_order}/duty-estimates/recalculate` — Recalculate Purchase Order Duty Estimates
- `POST /api/purchase-orders/{purchase_order}/portal-link/regenerate` — Regenerate Supplier Portal Link

### Reporting
- `GET /api/v2/reports/duty-reconciliation` — List Duty Reconciliation Rows
- `GET /api/v2/reports/duty-reconciliation/export` — Export Duty Reconciliation
- `GET /api/v2/reports/duty-reconciliation/summary` — Get Duty Reconciliation Summary

### Tickets
- `GET /api/support/categories` — List Support Ticket Categories
- `PATCH /api/support/tickets/{ticket}/category` — Update Support Ticket Category

## Changed

### Purchase Orders
- `DELETE /api/purchase-orders/{purchase_order}` — Delete Purchase Order
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
