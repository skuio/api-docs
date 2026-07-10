---
title: API changes — 2026-06-13
description: This release includes 78 additions.
authors: [product-team]
tags: [added]
date: 2026-06-13
---

This release includes 78 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Sales Channels
- `GET //{domain}/api/amazon-ads/{integrationInstance}/spend` — List Amazon Ads Spend Records
- `GET //{domain}/api/amazon-ads/{integrationInstance}/spend/summary` — Amazon Ads Spend Summary
- `POST //{domain}/api/amazon-ads/{integrationInstance}/spend/sync` — Sync Amazon Ads Spend
- `GET //{domain}/api/amazon/unified/fba-longterm-storage-fees` — List FBA Aged Inventory Surcharges (Across Instances)
- `GET //{domain}/api/amazon/unified/fba-longterm-storage-fees/currencies` — List Aged Inventory Surcharge Currencies
- `POST //{domain}/api/amazon/unified/fba-longterm-storage-fees/process-cost-entries` — Process Cost Entries Now
- `POST //{domain}/api/amazon/unified/fba-longterm-storage-fees/sync` — Request Latest Aged Inventory Surcharge Report (Sync)
- `GET //{domain}/api/amazon/unified/fba-storage-fees` — List FBA Storage Fees (Across Instances)
- `GET //{domain}/api/amazon/unified/fba-storage-fees/cost-entry-setting` — Get Cost Entry Creation Setting
- `POST //{domain}/api/amazon/unified/fba-storage-fees/cost-entry-setting` — Update Cost Entry Creation Setting
- `GET //{domain}/api/amazon/unified/fba-storage-fees/currencies` — List Storage Fee Currencies
- `POST //{domain}/api/amazon/unified/fba-storage-fees/process-cost-entries` — Process Cost Entries Now
- `GET //{domain}/api/amazon/unified/fba-storage-fees/schedule` — Get Report Schedule (Next Run)
- `POST //{domain}/api/amazon/unified/fba-storage-fees/sync` — Request Latest Storage Fee Report (Sync)
- `GET //{domain}/api/amazon/unified/fulfillment-centers` — List Fulfillment Centers (Across Instances)
- `GET //{domain}/api/amazon/unified/fulfillment-centers/{code}` — Get Fulfillment Center Overview
- `GET //{domain}/api/amazon/unified/fulfillment-centers/{code}/customer-returns` — Customer Returns at FC
- `GET //{domain}/api/amazon/unified/fulfillment-centers/{code}/inbound-shipments` — Inbound Shipments to FC
- `GET //{domain}/api/amazon/unified/fulfillment-centers/{code}/ledgers` — Ledger Events at FC
- `GET //{domain}/api/amazon/unified/fulfillment-centers/{code}/shipments` — Shipments from FC
- `GET //{domain}/api/amazon/unified/fulfillment-centers/{code}/storage-fees` — Storage Fees at FC
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/boxes` — List Boxes
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/boxes` — Create Box
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/boxes/import` — Import Boxes (CSV)
- `DELETE //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/boxes/{box}` — Delete Box
- `PATCH //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/boxes/{box}` — Update Box
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/label-prints` — List Label Prints
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/labels/2d-barcode-data` — Get 2D Barcode Data
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/labels/item-labels` — Create Item Labels (FNSKU)
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/packing-groups/{packing_group}/submit` — Submit Packing Group
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/packing-options` — List Packing Options
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/packing-options/generate` — Generate Packing Options
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/packing-options/{packing_option}/confirm` — Confirm Packing Option
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/placement-options` — List Placement Options
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/placement-options/generate` — Generate Placement Options
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/placement-options/{placement_option}/confirm` — Confirm Placement Option
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments` — List Shipments
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/bill-of-lading` — Get Bill of Lading
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/content-updates` — List Content Update Previews
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/content-updates/generate` — Generate Content Update Previews
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/content-updates/{contentUpdatePreviewId}/confirm` — Confirm Content Update Preview
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/delivery-window-options` — List Delivery Window Options
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/delivery-window-options/generate` — Generate Delivery Window Options
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/delivery-window-options/{delivery_window_option}/confirm` — Confirm Delivery Window Option
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/labels/box-labels` — Create Box Labels
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/labels/pallet-labels` — Create Pallet Labels
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/mark-shipped` — Mark Shipment as Shipped
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/refresh` — Refresh Shipment
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/shipments/{plan_shipment}/tracking` — Submit Shipment Tracking
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/tracking/board` — Get Shipment Board
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/tracking/items/{shipment_item}/resolve` — Resolve Discrepancy Item
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/tracking/items/{shipment_item}/unresolve` — Unresolve Discrepancy Item
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/tracking/reconciliation` — Get Reconciliation
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/transportation-options` — List Transportation Options
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/transportation-options/confirm` — Confirm Transportation Options
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/transportation-options/generate` — Generate Transportation Options
- `GET //{domain}/api/amazon/{integrationInstance}/fba-inbound/discrepancies` — List Inbound Discrepancies (Tenant-Level)
- `GET //{domain}/api/amazon/{integrationInstance}/fba/carton-templates` — List Carton Templates
- `POST //{domain}/api/amazon/{integrationInstance}/fba/carton-templates` — Create Carton Template
- `DELETE //{domain}/api/amazon/{integrationInstance}/fba/carton-templates/{carton_template}` — Delete Carton Template
- `PATCH //{domain}/api/amazon/{integrationInstance}/fba/carton-templates/{carton_template}` — Update Carton Template
- `GET //{domain}/api/amazon/{integrationInstance}/replenishment` — Replenishment Grid
- `POST //{domain}/api/amazon/{integrationInstance}/replenishment/refresh` — Refresh Restock Report
- `GET //{domain}/api/amazon/{integrationInstance}/replenishment/settings` — Get Replenishment Settings
- `PUT //{domain}/api/amazon/{integrationInstance}/replenishment/settings` — Update Replenishment Settings

### Shipping Providers
- `POST /api/api-shipping-providers` — Create Provider
- `DELETE /api/api-shipping-providers/inbound-events/bulk-delete` — Bulk Delete Events
- `GET /api/api-shipping-providers/inbound-events/{event-id}` — Show Inbound Event
- `DELETE /api/api-shipping-providers/{provider-id}` — Delete Provider
- `GET /api/api-shipping-providers/{provider-id}` — Show Provider
- `PUT /api/api-shipping-providers/{provider-id}` — Update Provider
- `GET /api/api-shipping-providers/{provider-id}/dashboard` — Get Dashboard Stats
- `GET /api/api-shipping-providers/{provider-id}/inbound-events` — List Inbound Events (Paginated)
- `DELETE /api/api-shipping-providers/{provider-id}/inbound-events/delete-all` — Delete All Events for Instance
- `GET /api/api-shipping-providers/{provider-id}/inbound-events/stats` — Get Inbound Event Stats
- `GET /api/api-shipping-providers/{provider-id}/tokens` — List Tokens
- `POST /api/api-shipping-providers/{provider-id}/tokens` — Generate Token
- `DELETE /api/api-shipping-providers/{provider-id}/tokens/{token-id}` — Revoke Token

_Spec version 1.0.0 → 1.0.0._
