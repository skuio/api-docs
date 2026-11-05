---
title: API changes — 2026-11-05
description: This release includes 433 additions, 5 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-11-05
---

This release includes 433 additions, 5 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Costing
- `GET /api/cost-entries/{costEntry}/allocations/export` — Export Cost Entry Allocations
- `GET /api/cost-entries/{costEntry}/allocations/import/template` — Download Cost Entry Allocation Import Template
- `GET /api/cost-entries/{costEntry}/allocations/list` — List Cost Entry Allocations (Paginated)
- `GET /api/cost-entries/{costEntry}/source-lines` — List Cost Entry Source Lines
- `GET /api/cost-entries/{costEntry}/source-lines/export` — Export Cost Entry Source Lines
- `GET /api/cost-entries/{costEntry}/source-lines/import/template` — Download Cost Entry Source Line Import Template
- `GET /api/cost-entries/{costEntry}/source-lines/summary` — Get Cost Entry Source Line Summary

### Etsy
- `GET /api/etsy/instances/{integrationInstance}/customers` — List Etsy Customers
- `GET /api/etsy/instances/{integrationInstance}/fulfillments` — List Etsy Fulfillments
- `GET /api/etsy/instances/{integrationInstance}/fulfillments/etsy-shipments` — List Etsy Shipments
- `GET /api/etsy/instances/{integrationInstance}/fulfillments/summary` — Get Etsy Fulfillment Summary
- `GET /api/etsy/instances/{integrationInstance}/orders/{receipt}/payments` — Get Etsy Order Payments
- `GET /api/etsy/instances/{integrationInstance}/refunds` — List Etsy Refunds
- `GET /api/etsy/instances/{integrationInstance}/refunds/summary` — Get Etsy Refund Summary
- `GET /api/etsy/instances/{integrationInstance}/transactions` — List Etsy Transactions
- `GET /api/etsy/instances/{integrationInstance}/transactions/summary` — Get Etsy Transaction Summary

### Mercury
- `GET /api/mercury/bank-transactions` — List Mercury Bank Transactions
- `GET /api/mercury/bank-transactions/summary` — Get Mercury Bank Transaction Summary

### NuORDER
- `GET /api/nuorder/instances` — List NuORDER Integrations
- `DELETE /api/nuorder/instances/{integrationInstance}` — Delete NuORDER Integration
- `GET /api/nuorder/instances/{integrationInstance}` — Get NuORDER Integration
- `GET /api/nuorder/instances/{integrationInstance}/activity-log` — List NuORDER Activity
- `GET /api/nuorder/instances/{integrationInstance}/customers` — List NuORDER Customers
- `GET /api/nuorder/instances/{integrationInstance}/dashboard` — Get NuORDER Dashboard
- `GET /api/nuorder/instances/{integrationInstance}/fulfillments` — List NuORDER Fulfillments
- `GET /api/nuorder/instances/{integrationInstance}/fulfillments/failures` — List Failed NuORDER Sends
- `GET /api/nuorder/instances/{integrationInstance}/fulfillments/pending` — List Pending NuORDER Fulfillments
- `GET /api/nuorder/instances/{integrationInstance}/fulfillments/stats` — Get NuORDER Fulfillment Stats
- `GET /api/nuorder/instances/{integrationInstance}/inventory` — List NuORDER Inventory
- `GET /api/nuorder/instances/{integrationInstance}/inventory/summary` — Get NuORDER Inventory Summary
- `GET /api/nuorder/instances/{integrationInstance}/orders` — List NuORDER Orders
- `GET /api/nuorder/instances/{integrationInstance}/orders/filter-options` — Get NuORDER Order Filter Options
- `GET /api/nuorder/instances/{integrationInstance}/orders/latest-sync-info` — Get NuORDER Order Sync Info
- `GET /api/nuorder/instances/{integrationInstance}/orders/pre-start-date` — Query NuORDER Pre-Start-Date Orders
- `GET /api/nuorder/instances/{integrationInstance}/orders/{order}` — Get NuORDER Order
- `GET /api/nuorder/instances/{integrationInstance}/orders/{order}/activity-log` — List NuORDER Order Activity
- `GET /api/nuorder/instances/{integrationInstance}/orders/{order}/raw` — Get NuORDER Order Raw Data
- `DELETE /api/nuorder/instances/{integrationInstance}/orders/{order}/sku-order` — Delete NuORDER SKU Order
- `GET /api/nuorder/instances/{integrationInstance}/pricesheets` — List NuORDER Price Sheets
- `GET /api/nuorder/instances/{integrationInstance}/pricesheets/{template}` — Get NuORDER Price Sheet
- `GET /api/nuorder/instances/{integrationInstance}/products` — List NuORDER Products
- `GET /api/nuorder/instances/{integrationInstance}/products/export` — Export NuORDER Products
- `GET /api/nuorder/instances/{integrationInstance}/products/field-mappings` — Get NuORDER Field Mappings
- `GET /api/nuorder/instances/{integrationInstance}/products/filter-options` — Get NuORDER Product Filter Options
- `GET /api/nuorder/instances/{integrationInstance}/products/latest-sync-info` — Get NuORDER Product Sync Info
- `GET /api/nuorder/instances/{integrationInstance}/products/{productSize}` — Get NuORDER Product
- `DELETE /api/nuorder/instances/{integrationInstance}/products/{productSize}/map` — Unmap NuORDER Product
- `GET /api/nuorder/instances/{integrationInstance}/products/{productSize}/orders` — List Orders for NuORDER Product
- `GET /api/nuorder/instances/{integrationInstance}/products/{productSize}/pricesheets` — List NuORDER Product Price Sheets
- `GET /api/nuorder/instances/{integrationInstance}/products/{productSize}/raw` — Get NuORDER Product Raw Data

### Product Lifecycle
- `DELETE /api/v2/clearance-plans/{clearancePlan}` — End Clearance Plan
- `DELETE /api/v2/clearance-plans/{clearancePlan}/products` — Remove Clearance Plan Products
- `DELETE /api/v2/product-lifecycle/schedules/{schedule}` — Cancel Lifecycle Schedule
- `DELETE /api/v2/product-lifecycle/states/{state}` — Delete Lifecycle State
- `DELETE /api/v2/product-successions/{succession}` — Delete Product Successor
- `DELETE /api/v2/seasons/{season}` — Delete Season

### Repairs
- `GET /api/portal/repairs` — List Repair Requests
- `GET /api/portal/repairs/issue-types` — List Repair Issue Types
- `GET /api/portal/repairs/{repair}` — Get Repair Request

### Repairs & Warranty
- `GET /api/public/repairs/portal` — Get Repair Portal Settings
- `GET /api/public/repairs/prefill` — Get Prefilled Purchase for a Repair
- `GET /api/public/repairs/products` — Search Products for a Repair
- `GET /api/public/repairs/{token}` — Get Repair Status
- `GET /api/public/repairs/{token}/attachments/{attachment}` — Download Repair Photo
- `GET /api/public/repairs/{token}/shipments/{shipment}/label` — Download Return Label
- `GET /api/repairs` — List Repairs
- `DELETE /api/repairs/attachments/{attachment}` — Delete Repair Attachment
- `GET /api/repairs/attachments/{attachment}` — Download Repair Attachment
- `GET /api/repairs/board` — Get Repair Board
- `GET /api/repairs/claims/order-lookup` — Look Up Order for a Repair Claim
- `GET /api/repairs/connectors` — List Claim Source Connectors
- `DELETE /api/repairs/connectors/{connector}` — Delete Claim Source Connector
- `GET /api/repairs/connectors/{connector}` — Get Claim Source Connector
- `GET /api/repairs/connectors/{connector}/mappings` — List Connector Mappings
- `DELETE /api/repairs/connectors/{connector}/mappings/{mapping}` — Delete Connector Mapping
- `GET /api/repairs/dashboard` — Get Repairs Dashboard
- `GET /api/repairs/dashboard/setup` — Get Repairs Setup Status
- `GET /api/repairs/inspection-templates` — List Inspection Checklists
- `DELETE /api/repairs/inspection-templates/{template}` — Delete Inspection Checklist
- `GET /api/repairs/inspection-templates/{template}` — Get Inspection Checklist
- `GET /api/repairs/intake/orders` — Find Orders for a Repair
- `GET /api/repairs/intake/sales-orders/{salesOrder}` — Get Sales Order for a Repair
- `GET /api/repairs/issue-types` — List Issue Types
- `DELETE /api/repairs/issue-types/{type}` — Delete Issue Type
- `GET /api/repairs/issue-types/{type}` — Get Issue Type
- `GET /api/repairs/part-compatibilities` — List Part Compatibilities
- `DELETE /api/repairs/part-compatibilities/{row}` — Delete Part Compatibility
- `GET /api/repairs/part-compatibilities/{row}` — Get Part Compatibility
- `DELETE /api/repairs/recovery-claims/{claim}` — Delete Recovery Claim
- `DELETE /api/repairs/registrations/{registration}` — Void Warranty Registration
- `DELETE /api/repairs/sla-policies/{policy}` — Delete SLA Policy
- `DELETE /api/repairs/warranty-policies/{policy}` — Archive Warranty Policy
- `DELETE /api/repairs/{repair}` — Delete Draft Repair
- `DELETE /api/repairs/{repair}/costs/{cost}` — Delete Repair Cost
- `DELETE /api/repairs/{repair}/gorgias-tickets/{reference}` — Unlink Gorgias Ticket from Repair
- `DELETE /api/repairs/{repair}/lines/{line}` — Remove Repair Unit
- `DELETE /api/repairs/{repair}/lines/{line}/parts/{part}` — Remove Part from Unit
- `DELETE /api/repairs/{repair}/lines/{line}/time-entries/{entry}` — Delete Time Entry for Unit
- `DELETE /api/repairs/{repair}/notes/{noteId}` — Delete Repair Note

### SPS Commerce
- `DELETE /api/spscommerce/{integrationInstance}/location-codes/{locationCode}` — Delete Location Code

_…plus 333 more (see the API reference)._

## Changed

### Manufacturing Orders
- `POST /api/manufacturing/manufacturing-orders` — Create Manufacturing Order
  - new response code(s): `201`
  - removed response code(s): `200`

### Purchase Orders
- `POST /api/purchase-orders` — Create Purchase Order
  - new response code(s): `299`
- `PUT /api/purchase-orders/{purchase_order}` — Update Purchase Order
  - new response code(s): `299`

### Sales Orders
- `POST /api/sales-orders` — Create Sales Order
  - new response code(s): `299`
- `PUT /api/sales-orders/{salesOrder}` — Update Sales Order
  - new response code(s): `299`

_Spec version 1.0.0 → 1.0.0._
