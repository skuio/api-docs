---
title: API changes — 2026-06-13
description: This release 65 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-13
---

This release 65 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/boxes/{box}` — Delete Box
- `DELETE //{domain}/api/amazon/{integrationInstance}/fba/carton-templates/{carton_template}` — Delete Carton Template
- `GET //{domain}/api/amazon-ads/{integrationInstance}/spend` — List Amazon Ads Spend Records
- `GET //{domain}/api/amazon-ads/{integrationInstance}/spend/summary` — Amazon Ads Spend Summary
- `GET //{domain}/api/amazon/unified/fba-longterm-storage-fees` — List FBA Aged Inventory Surcharges (Across Instances)
- `GET //{domain}/api/amazon/unified/fba-longterm-storage-fees/currencies` — List Aged Inventory Surcharge Currencies
- `GET //{domain}/api/amazon/unified/fba-storage-fees` — List FBA Storage Fees (Across Instances)
- `GET //{domain}/api/amazon/unified/fba-storage-fees/cost-entry-setting` — Get Cost Entry Creation Setting
- `GET //{domain}/api/amazon/unified/fba-storage-fees/currencies` — List Storage Fee Currencies
- `GET //{domain}/api/amazon/unified/fba-storage-fees/schedule` — Get Report Schedule (Next Run)
- `GET //{domain}/api/amazon/unified/fulfillment-centers` — List Fulfillment Centers (Across Instances)
- `GET //{domain}/api/amazon/unified/fulfillment-centers/{code}` — Get Fulfillment Center Overview
- `GET //{domain}/api/amazon/unified/fulfillment-centers/{code}/customer-returns` — Customer Returns at FC
- `GET //{domain}/api/amazon/unified/fulfillment-centers/{code}/inbound-shipments` — Inbound Shipments to FC
- `GET //{domain}/api/amazon/unified/fulfillment-centers/{code}/ledgers` — Ledger Events at FC
- `GET //{domain}/api/amazon/unified/fulfillment-centers/{code}/shipments` — Shipments from FC
- `GET //{domain}/api/amazon/unified/fulfillment-centers/{code}/storage-fees` — Storage Fees at FC
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/boxes` — List Boxes
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/label-prints` — List Label Prints
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/labels/2d-barcode-data` — Get 2D Barcode Data
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/packing-options` — List Packing Options
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/placement-options` — List Placement Options
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments` — List Shipments
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/bill-of-lading` — Get Bill of Lading
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/content-updates` — List Content Update Previews
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/delivery-window-options` — List Delivery Window Options
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/tracking/board` — Get Shipment Board
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/tracking/reconciliation` — Get Reconciliation
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/transportation-options` — List Transportation Options
- `GET //{domain}/api/amazon/{integrationInstance}/fba-inbound/discrepancies` — List Inbound Discrepancies (Tenant-Level)
- `GET //{domain}/api/amazon/{integrationInstance}/fba/carton-templates` — List Carton Templates
- `GET //{domain}/api/amazon/{integrationInstance}/replenishment` — Replenishment Grid
- `GET //{domain}/api/amazon/{integrationInstance}/replenishment/settings` — Get Replenishment Settings
- `PATCH //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/boxes/{box}` — Update Box
- `PATCH //{domain}/api/amazon/{integrationInstance}/fba/carton-templates/{carton_template}` — Update Carton Template
- `POST //{domain}/api/amazon-ads/{integrationInstance}/spend/sync` — Sync Amazon Ads Spend
- `POST //{domain}/api/amazon/unified/fba-longterm-storage-fees/process-cost-entries` — Process Cost Entries Now
- `POST //{domain}/api/amazon/unified/fba-longterm-storage-fees/sync` — Request Latest Aged Inventory Surcharge Report (Sync)
- `POST //{domain}/api/amazon/unified/fba-storage-fees/cost-entry-setting` — Update Cost Entry Creation Setting
- `POST //{domain}/api/amazon/unified/fba-storage-fees/process-cost-entries` — Process Cost Entries Now
- `POST //{domain}/api/amazon/unified/fba-storage-fees/sync` — Request Latest Storage Fee Report (Sync)
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/boxes` — Create Box
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/boxes/import` — Import Boxes (CSV)
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/labels/item-labels` — Create Item Labels (FNSKU)
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/packing-groups/{packing_group}/submit` — Submit Packing Group
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/packing-options/generate` — Generate Packing Options
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/packing-options/{packing_option}/confirm` — Confirm Packing Option
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/placement-options/generate` — Generate Placement Options
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/placement-options/{placement_option}/confirm` — Confirm Placement Option
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/content-updates/generate` — Generate Content Update Previews
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/content-updates/{contentUpdatePreviewId}/confirm` — Confirm Content Update Preview
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/delivery-window-options/generate` — Generate Delivery Window Options
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/delivery-window-options/{delivery_window_option}/confirm` — Confirm Delivery Window Option
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/labels/box-labels` — Create Box Labels
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/labels/pallet-labels` — Create Pallet Labels
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/mark-shipped` — Mark Shipment as Shipped
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/refresh` — Refresh Shipment
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/tracking` — Submit Shipment Tracking
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/tracking/items/{shipment_item}/resolve` — Resolve Discrepancy Item
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/tracking/items/{shipment_item}/unresolve` — Unresolve Discrepancy Item
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/transportation-options/confirm` — Confirm Transportation Options
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/transportation-options/generate` — Generate Transportation Options
- `POST //{domain}/api/amazon/{integrationInstance}/fba/carton-templates` — Create Carton Template
- `POST //{domain}/api/amazon/{integrationInstance}/replenishment/refresh` — Refresh Restock Report
- `PUT //{domain}/api/amazon/{integrationInstance}/replenishment/settings` — Update Replenishment Settings

_Spec version 1.0.0 → 1.0.0._
