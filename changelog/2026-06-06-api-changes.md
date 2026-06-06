---
title: API changes — 2026-06-06
description: This release 73 added, 2 changed API endpoint(s).
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-06-06
---

This release 73 added, 2 changed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `DELETE /api/automation/workflow-credentials/{uuid}` — Delete Workflow Credential
- `DELETE /api/manufacturing/boms/1` — Delete BOM
- `DELETE /api/manufacturing/manufacturing-orders/1` — Delete Manufacturing Order
- `DELETE /api/manufacturing/mo-operations/{moOperation}` — Delete MO Operation
- `DELETE /api/manufacturing/work-centers/1` — Delete Work Center
- `GET /api/automation/workflow-credentials` — List Workflow Credentials
- `GET /api/automation/workflow-credentials/lookup` — Lookup Workflow Credentials by Type
- `GET /api/automation/workflow-credentials/{uuid}` — Show Workflow Credential
- `GET /api/automation/workflow-templates` — List Workflow Templates
- `GET /api/automation/workflow-templates/{slug}` — Show Workflow Template
- `GET /api/manufacturing/boms` — List BOMs
- `GET /api/manufacturing/boms/1` — Show BOM
- `GET /api/manufacturing/boms/1/current-default` — Get Current Default for BOM
- `GET /api/manufacturing/boms/1/explode` — Explode BOM
- `GET /api/manufacturing/contractors` — List Contractors
- `GET /api/manufacturing/demand-suggestions` — List Demand Suggestions
- `GET /api/manufacturing/lot-genealogy` — Trace Lot Genealogy
- `GET /api/manufacturing/lots` — List Lots
- `GET /api/manufacturing/manufacturing-orders` — List Manufacturing Orders
- `GET /api/manufacturing/manufacturing-orders/1` — Show Manufacturing Order
- `GET /api/manufacturing/manufacturing-orders/1/events` — MO Events (Audit Log)
- `GET /api/manufacturing/manufacturing-orders/1/fifo-layers` — List MO FIFO Layers
- `GET /api/manufacturing/manufacturing-orders/1/inventory-movements` — List MO Inventory Movements
- `GET /api/manufacturing/manufacturing-orders/1/production-iterations` — List MO Production Iterations
- `GET /api/manufacturing/mo-component-lines/1` — Show MO Component Line
- `GET /api/manufacturing/mo-output-lines/1` — Show MO Output Line
- `GET /api/manufacturing/mo-output-lines/1/fifo-layers` — List Output Line FIFO Layers
- `GET /api/manufacturing/mo-output-lines/1/inventory-movements` — List Output Line Inventory Movements
- `GET /api/manufacturing/production-iterations/0fa1c2bb-8b1b-4c5a-9d63-1f4b5e6d7c80` — Show Production Iteration
- `GET /api/manufacturing/production-iterations/0fa1c2bb-8b1b-4c5a-9d63-1f4b5e6d7c80/fifo-layers` — List Production Iteration FIFO Layers
- `GET /api/manufacturing/production-iterations/0fa1c2bb-8b1b-4c5a-9d63-1f4b5e6d7c80/inventory-movements` — List Production Iteration Inventory Movements
- `GET /api/manufacturing/scheduler/scheduled` — Scheduled MOs
- `GET /api/manufacturing/work-centers` — List Work Centers
- `GET /api/manufacturing/work-centers/1` — Show Work Center
- `GET /api/manufacturing/work-centers/active` — Active Work Centers
- `POST /api/automation/webhook/upload/{token}` — Webhook: File Upload
- `POST /api/automation/workflow-credentials` — Create Workflow Credential
- `POST /api/automation/workflow-templates/{slug}/instantiate` — Instantiate Workflow Template
- `POST /api/manufacturing/boms` — Create BOM
- `POST /api/manufacturing/boms/1/activate` — Activate BOM
- `POST /api/manufacturing/boms/1/archive` — Archive BOM
- `POST /api/manufacturing/boms/1/deactivate` — Deactivate BOM
- `POST /api/manufacturing/boms/1/duplicate` — Duplicate BOM
- `POST /api/manufacturing/boms/1/restore` — Restore BOM
- `POST /api/manufacturing/boms/1/set-default` — Set BOM as Default
- `POST /api/manufacturing/boms/bulk-archive` — Bulk Archive BOMs
- `POST /api/manufacturing/boms/bulk-restore` — Bulk Restore BOMs
- `POST /api/manufacturing/demand-suggestions/generate` — Generate Demand Suggestions
- `POST /api/manufacturing/manufacturing-orders` — Create Manufacturing Order
- `POST /api/manufacturing/manufacturing-orders/1/cancel` — Cancel MO
- `POST /api/manufacturing/manufacturing-orders/1/close` — Close MO
- `POST /api/manufacturing/manufacturing-orders/1/complete` — Complete MO
- `POST /api/manufacturing/manufacturing-orders/1/confirm` — Confirm MO
- `POST /api/manufacturing/manufacturing-orders/1/generate-accounting-transaction` — Generate Accounting Transaction (MO)
- `POST /api/manufacturing/manufacturing-orders/1/outsource` — Outsource MO
- `POST /api/manufacturing/manufacturing-orders/1/outsourced-receipt` — Record Outsourced Receipt
- `POST /api/manufacturing/manufacturing-orders/1/production-iterations/0fa1c2bb-8b1b-4c5a-9d63-1f4b5e6d7c80/reverse` — Reverse Production Iteration
- `POST /api/manufacturing/manufacturing-orders/1/record-production` — Record Production
- `POST /api/manufacturing/manufacturing-orders/1/reopen` — Reopen MO
- `POST /api/manufacturing/manufacturing-orders/1/start` — Start MO
- `POST /api/manufacturing/manufacturing-orders/{manufacturingOrder}/operations` — Create Manual MO Operation
- `POST /api/manufacturing/mo-operations/{moOperation}/complete` — Complete Operation Timer
- `POST /api/manufacturing/mo-operations/{moOperation}/start` — Start Operation Timer
- `POST /api/manufacturing/simple-assemble` — Simple Assemble / Disassemble
- `POST /api/manufacturing/simple-assemble/preview` — Preview Simple Assemble / Disassemble (Dry-Run)
- `POST /api/manufacturing/work-centers` — Create Work Center
- `PUT /api/automation/workflow-credentials/{uuid}` — Update Workflow Credential
- `PUT /api/manufacturing/boms/1` — Update BOM
- `PUT /api/manufacturing/manufacturing-orders/1` — Update Manufacturing Order
- `PUT /api/manufacturing/manufacturing-orders/1/reschedule` — Reschedule MO
- `PUT /api/manufacturing/mo-operations/{moOperation}` — Update MO Operation
- `PUT /api/manufacturing/scheduler/reprioritize` — Reprioritize MOs
- `PUT /api/manufacturing/work-centers/1` — Update Work Center

## Changed

- `GET //{domain}/api/products/search` — Search Products **(breaking)**
  - removed parameter(s): `limit`
- `GET /api/products/search` — Search Products **(breaking)**
  - removed parameter(s): `limit`

_Spec version 1.0.0 → 1.0.0._
