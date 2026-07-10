---
title: API changes — 2026-06-06
description: This release includes 63 additions, 2 changes. 2 breaking changes — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-06-06
---

This release includes 63 additions, 2 changes. 2 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Products
- **Changed** `GET //{domain}/api/products/search` — Search Products
  - removed parameter(s): `limit`
- **Changed** `GET /api/products/search` — Search Products
  - removed parameter(s): `limit`

## Added

### BOMs
- `GET /api/manufacturing/boms` — List BOMs
- `POST /api/manufacturing/boms` — Create BOM
- `DELETE /api/manufacturing/boms/1` — Delete BOM
- `GET /api/manufacturing/boms/1` — Show BOM
- `PUT /api/manufacturing/boms/1` — Update BOM
- `POST /api/manufacturing/boms/1/activate` — Activate BOM
- `POST /api/manufacturing/boms/1/archive` — Archive BOM
- `GET /api/manufacturing/boms/1/current-default` — Get Current Default for BOM
- `POST /api/manufacturing/boms/1/deactivate` — Deactivate BOM
- `POST /api/manufacturing/boms/1/duplicate` — Duplicate BOM
- `GET /api/manufacturing/boms/1/explode` — Explode BOM
- `POST /api/manufacturing/boms/1/restore` — Restore BOM
- `POST /api/manufacturing/boms/1/set-default` — Set BOM as Default
- `POST /api/manufacturing/boms/bulk-archive` — Bulk Archive BOMs
- `POST /api/manufacturing/boms/bulk-restore` — Bulk Restore BOMs

### Contractors
- `GET /api/manufacturing/contractors` — List Contractors

### Demand Suggestions
- `GET /api/manufacturing/demand-suggestions` — List Demand Suggestions
- `POST /api/manufacturing/demand-suggestions/generate` — Generate Demand Suggestions

### Lot Genealogy
- `GET /api/manufacturing/lot-genealogy` — Trace Lot Genealogy

### Lots
- `GET /api/manufacturing/lots` — List Lots

### Manufacturing Orders
- `GET /api/manufacturing/manufacturing-orders` — List Manufacturing Orders
- `POST /api/manufacturing/manufacturing-orders` — Create Manufacturing Order
- `DELETE /api/manufacturing/manufacturing-orders/1` — Delete Manufacturing Order
- `GET /api/manufacturing/manufacturing-orders/1` — Show Manufacturing Order
- `PUT /api/manufacturing/manufacturing-orders/1` — Update Manufacturing Order
- `POST /api/manufacturing/manufacturing-orders/1/cancel` — Cancel MO
- `POST /api/manufacturing/manufacturing-orders/1/close` — Close MO
- `POST /api/manufacturing/manufacturing-orders/1/complete` — Complete MO
- `POST /api/manufacturing/manufacturing-orders/1/confirm` — Confirm MO
- `GET /api/manufacturing/manufacturing-orders/1/events` — MO Events (Audit Log)
- `GET /api/manufacturing/manufacturing-orders/1/fifo-layers` — List MO FIFO Layers
- `POST /api/manufacturing/manufacturing-orders/1/generate-accounting-transaction` — Generate Accounting Transaction (MO)
- `GET /api/manufacturing/manufacturing-orders/1/inventory-movements` — List MO Inventory Movements
- `GET /api/manufacturing/manufacturing-orders/1/production-iterations` — List MO Production Iterations
- `POST /api/manufacturing/manufacturing-orders/1/production-iterations/0fa1c2bb-8b1b-4c5a-9d63-1f4b5e6d7c80/reverse` — Reverse Production Iteration
- `POST /api/manufacturing/manufacturing-orders/1/record-production` — Record Production
- `POST /api/manufacturing/manufacturing-orders/1/reopen` — Reopen MO
- `POST /api/manufacturing/manufacturing-orders/1/start` — Start MO
- `GET /api/manufacturing/mo-component-lines/1` — Show MO Component Line
- `GET /api/manufacturing/mo-output-lines/1` — Show MO Output Line
- `GET /api/manufacturing/mo-output-lines/1/fifo-layers` — List Output Line FIFO Layers
- `GET /api/manufacturing/mo-output-lines/1/inventory-movements` — List Output Line Inventory Movements
- `GET /api/manufacturing/production-iterations/0fa1c2bb-8b1b-4c5a-9d63-1f4b5e6d7c80` — Show Production Iteration
- `GET /api/manufacturing/production-iterations/0fa1c2bb-8b1b-4c5a-9d63-1f4b5e6d7c80/fifo-layers` — List Production Iteration FIFO Layers
- `GET /api/manufacturing/production-iterations/0fa1c2bb-8b1b-4c5a-9d63-1f4b5e6d7c80/inventory-movements` — List Production Iteration Inventory Movements

### MO Operations
- `POST /api/manufacturing/manufacturing-orders/{manufacturingOrder}/operations` — Create Manual MO Operation
- `DELETE /api/manufacturing/mo-operations/{moOperation}` — Delete MO Operation
- `PUT /api/manufacturing/mo-operations/{moOperation}` — Update MO Operation
- `POST /api/manufacturing/mo-operations/{moOperation}/complete` — Complete Operation Timer
- `POST /api/manufacturing/mo-operations/{moOperation}/start` — Start Operation Timer

### Outsourced Production
- `POST /api/manufacturing/manufacturing-orders/1/outsource` — Outsource MO
- `POST /api/manufacturing/manufacturing-orders/1/outsourced-receipt` — Record Outsourced Receipt

### Scheduler
- `PUT /api/manufacturing/manufacturing-orders/1/reschedule` — Reschedule MO
- `PUT /api/manufacturing/scheduler/reprioritize` — Reprioritize MOs
- `GET /api/manufacturing/scheduler/scheduled` — Scheduled MOs

### Simple Assembly
- `POST /api/manufacturing/simple-assemble` — Simple Assemble / Disassemble
- `POST /api/manufacturing/simple-assemble/preview` — Preview Simple Assemble / Disassemble (Dry-Run)

### Work Centers
- `GET /api/manufacturing/work-centers` — List Work Centers
- `POST /api/manufacturing/work-centers` — Create Work Center
- `DELETE /api/manufacturing/work-centers/1` — Delete Work Center
- `GET /api/manufacturing/work-centers/1` — Show Work Center
- `PUT /api/manufacturing/work-centers/1` — Update Work Center
- `GET /api/manufacturing/work-centers/active` — Active Work Centers

_Spec version 1.0.0 → 1.0.0._
