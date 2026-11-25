---
title: API changes — 2026-11-25
description: This release includes 81 additions, 2 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-11-25
---

This release includes 81 additions, 2 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Amazon
- `GET /api/amazon/unified/reserve/corrections` — List Reserve Corrections
- `POST /api/amazon/unified/reserve/corrections` — Post Reserve Correction
- `POST /api/amazon/unified/reserve/corrections/{correction}/undo` — Undo Reserve Correction
- `GET /api/amazon/unified/reserve/exchange-differences` — List Reserve Exchange Differences
- `PUT /api/amazon/unified/reserve/exchange-differences/{integrationInstance}` — Update Reserve Exchange Difference Setting
- `POST /api/amazon/unified/reserve/exchange-differences/{integrationInstance}/post` — Post Reserve Exchange Differences

### Customers
- `POST /api/customers/{customer_id}/sku-mappings/bulk-delete` — Bulk Delete SKU Mappings
- `PUT /api/customers/{customer_id}/sku-mappings/{mapping_id}` — Update SKU Mapping
- `DELETE /api/customers/{customer}/case-pack-rules` — Bulk Delete Customer Case Pack Rules
- `GET /api/customers/{customer}/case-pack-rules` — List Customer Case Pack Rules
- `POST /api/customers/{customer}/case-pack-rules` — Create Customer Case Pack Rule
- `GET /api/customers/{customer}/case-pack-rules/default` — Get Customer Default Case Pack Rule
- `PUT /api/customers/{customer}/case-pack-rules/default` — Update Customer Default Case Pack Rule
- `DELETE /api/customers/{customer}/case-pack-rules/{rule}` — Delete Customer Case Pack Rule
- `PUT /api/customers/{customer}/case-pack-rules/{rule}` — Update Customer Case Pack Rule
- `GET /api/products/{product_id}/customer-skus` — List a Product's Customer SKUs

### Inbound Shipments
- `GET /api/inbound-shipments/{inboundShipment}/documents` — List Shipment Documents
- `POST /api/inbound-shipments/{inboundShipment}/documents` — Upload Shipment Documents
- `DELETE /api/inbound-shipments/{inboundShipment}/documents/{document}` — Delete Shipment Document
- `PATCH /api/inbound-shipments/{inboundShipment}/documents/{document}` — Update Shipment Document
- `GET /api/inbound-shipments/{inboundShipment}/documents/{document}/file` — Download Shipment Document

### Integration Instances
- `GET /api/integration-instances/{integration_instance}/sync-health` — Get Sync Health
- `POST /api/integration-instances/{integration_instance}/sync-health/check` — Check Sync Health

### Inventory Debt
- `POST /api/inventory/debt/claims/assemble` — Assemble Kits for Inventory Debt Claims
- `POST /api/inventory/debt/claims/assemble-preview` — Preview Kit Assembly for Inventory Debt Claims

### Label Batches
- `POST /api/shipping-label-batches/{shippingLabelBatch}/items/confirm-packages` — Confirm Label Batch Item Boxes

### Product Lifecycle
- `PUT /api/v2/product-lifecycle/channels/wholesale` — Set Wholesale Sales Channels

### Product Listings
- `POST /api/content-sync/push-batches/{batch}/approve` — Approve Push Batch
- `POST /api/content-sync/push-batches/{batch}/cancel` — Cancel Push Batch
- `GET /api/content-sync/pushes` — List Outbound Pushes
- `POST /api/content-sync/pushes/approve` — Approve Outbound Pushes
- `POST /api/content-sync/pushes/clear` — Clear Listing Content on Channel
- `POST /api/content-sync/pushes/discard` — Discard Outbound Pushes
- `POST /api/content-sync/pushes/push-now` — Push Listing Content Now
- `POST /api/content-sync/pushes/put-back` — Put Back Listing Content
- `POST /api/content-sync/pushes/retry` — Retry Outbound Pushes
- `GET /api/content-sync/pushes/summary` — Get Outbound Push Summary
- `POST /api/content-sync/pushes/{push}/restore` — Restore Outbound Push
- `PATCH /api/integration-instances/{integrationInstance}/content-sync-settings` — Change Content Sync Settings
- `GET /api/integration-instances/{integrationInstance}/content-sync/first-match` — Get Content First Match
- `POST /api/integration-instances/{integrationInstance}/content-sync/first-match` — Start Content First Match
- `POST /api/integration-instances/{integrationInstance}/content-sync/first-match/decide` — Decide Content First Match
- `GET /api/product-listings/{productListing}/content-ownership` — Get Listing Content Ownership
- `GET /api/products/{product}/content-ownership` — Get Product Content Ownership

### Products
- `GET /api/v2/data-imports/{dataImport}/possible-duplicates/export` — Export Possible Duplicates in an Import File
- `GET /api/v2/product-duplicates` — List Possible Duplicates
- `POST /api/v2/product-duplicates/bulk-dismiss` — Bulk Mark Not a Duplicate
- `POST /api/v2/product-duplicates/decisions` — Remember Not a Duplicate
- `GET /api/v2/product-duplicates/export` — Export Possible Duplicates
- `POST /api/v2/product-duplicates/scans` — Find Possible Duplicates
- `GET /api/v2/product-duplicates/summary` — Get Possible Duplicates Summary
- `GET /api/v2/product-duplicates/{group}` — Get Possible Duplicate Group
- `POST /api/v2/product-duplicates/{group}/dismiss` — Mark Group Not a Duplicate
- `GET /api/v2/product-duplicates/{group}/listings` — List Group Channel Listings
- `POST /api/v2/product-duplicates/{group}/merge-session` — Create Merge Session from Group
- `POST /api/v2/product-duplicates/{group}/previous-sku` — Keep as Previous SKU
- `POST /api/v2/product-duplicates/{group}/previous-sku/check` — Check Keep as Previous SKU
- `POST /api/v2/product-duplicates/{group}/restore` — Restore Dismissed Group
- `GET /api/v2/products/{product}/inner-pack` — Get Product Inner Pack
- `PUT /api/v2/products/{product}/inner-pack` — Update Product Inner Pack
- `GET /api/v2/products/{product}/packaging-requirements` — Get Product Packaging Requirements
- `PUT /api/v2/products/{product}/packaging-requirements` — Update Product Packaging Requirements

### Purchase Orders
- `GET /api/purchase-orders/{purchaseOrder}/shipment-documents` — List Shipment Documents by Purchase Order
- `GET /api/purchase-orders/{purchaseOrder}/timeline` — Get Purchase Order Timeline
- `GET /api/purchase-orders/{purchase_order}/packaging` — Get PO Factory Packaging
- `POST /api/purchase-orders/{purchase_order}/packaging/record-short` — Record Short PO Packaging
- `DELETE /api/v2/po-channel-reservations/{poChannelReservation}` — Delete PO Channel Reservation
- `PATCH /api/v2/po-channel-reservations/{poChannelReservation}` — Update PO Channel Reservation
- `GET /api/v2/po-line-reservation-splits` — Get PO Line Reservation Splits
- `GET /api/v2/purchase-order-lines/{purchaseOrderLine}/channel-reservation-options` — List Channel Reservation Options
- `POST /api/v2/purchase-order-lines/{purchaseOrderLine}/channel-reservations` — Create PO Line Channel Reservations

### Purple Dot
- `GET /api/purple-dot/{instance}/bundle-supply` — List Purple Dot Set Supply

### Sales Invoices
- `GET /api/reports/ar-aging/export` — Export AR Aging
- `GET /api/reports/ar-aging/invoices` — List AR Aging Invoices

### Shipments
- `GET /api/supplier-portal/shipments/{shipment}/documents` — List Shipment Documents
- `POST /api/supplier-portal/shipments/{shipment}/documents` — Upload Shipment Documents
- `DELETE /api/supplier-portal/shipments/{shipment}/documents/{document}` — Delete Shipment Document
- `GET /api/supplier-portal/shipments/{shipment}/documents/{document}/file` — Download Shipment Document

### Walmart
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/close` — Close Inbound Shipment
- `POST /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/restore-finished` — Restore Finished Inbound Shipment
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/write-off-preview` — Write-off Preview

## Changed

### Inventory Intelligence
- `GET /api/inventory-forecasting/sales-orders` — List Sales Orders Behind a Forecast Cell
  - new parameter(s): `filters`

### Sales Order Lines
- `POST /api/sales-order-lines/reservations` — Manage Reservations
  - new response code(s): `409`

_Spec version 1.0.0 → 1.0.0._
