---
title: API changes — 2026-11-25
description: This release includes 151 additions, 3 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-11-25
---

This release includes 151 additions, 3 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Amazon
- `GET /api/amazon/unified/reserve/corrections` — List Reserve Corrections
- `POST /api/amazon/unified/reserve/corrections` — Post Reserve Correction
- `POST /api/amazon/unified/reserve/corrections/{correction}/undo` — Undo Reserve Correction
- `GET /api/amazon/unified/reserve/exchange-differences` — List Reserve Exchange Differences
- `POST /api/amazon/unified/reserve/exchange-differences/{integrationInstance}/post` — Post Reserve Exchange Differences
- `POST /api/amazon/{integrationInstance}/products/import-by-sku` — Import Amazon Listings by Seller SKU

### Bills
- `GET /api/bills/landed-cost-stock-accounts` — Get Landed Cost Stock Accounts

### Cost Categories
- `GET /api/v2/cost-categories/freight-line-candidates` — List Uncategorised Freight Bill Lines

### Customers
- `POST /api/customers/{customer_id}/sku-mappings/bulk-delete` — Bulk Delete SKU Mappings
- `DELETE /api/customers/{customer}/case-pack-rules` — Bulk Delete Customer Case Pack Rules
- `GET /api/customers/{customer}/case-pack-rules` — List Customer Case Pack Rules
- `POST /api/customers/{customer}/case-pack-rules` — Create Customer Case Pack Rule
- `GET /api/customers/{customer}/case-pack-rules/default` — Get Customer Default Case Pack Rule
- `DELETE /api/customers/{customer}/case-pack-rules/{rule}` — Delete Customer Case Pack Rule
- `GET /api/products/{product_id}/customer-skus` — List a Product's Customer SKUs

### Inbound Freight
- `DELETE /api/freight-quotes/{freightQuote}` — Delete Freight Quote
- `POST /api/freight-quotes/{freightQuote}/accept` — Accept Freight Quote
- `POST /api/freight-quotes/{freightQuote}/unaccept` — Unaccept Freight Quote
- `GET /api/inbound-shipments/{inbound_shipment}/freight` — Get Inbound Shipment Freight
- `POST /api/inbound-shipments/{inbound_shipment}/freight/quotes` — Add Inbound Shipment Freight Quote
- `POST /api/inbound-shipments/{inbound_shipment}/freight/quotes/file` — Upload Inbound Shipment Freight Quote File
- `POST /api/inbound-shipments/{inbound_shipment}/freight/recalculate` — Recalculate Inbound Shipment Freight
- `GET /api/purchase-orders/{purchase_order}/freight` — Get Purchase Order Freight

### Inbound Freight Coverage
- `POST /api/freight-quotes/ocr/upload` — Upload Freight Quote
- `DELETE /api/freight-quotes/ocr/{extraction}` — Delete Freight Quote Document
- `GET /api/freight-quotes/ocr/{extraction}` — Get Freight Quote Document
- `POST /api/freight-quotes/ocr/{extraction}/confirm` — Confirm Freight Quote Document
- `GET /api/freight-quotes/ocr/{extraction}/pdf` — Download Freight Quote Document
- `POST /api/freight-quotes/ocr/{extraction}/rescan` — Rescan Freight Quote Document
- `GET /api/inbound-shipments/freight-coverage` — Get Freight Coverage Score
- `POST /api/inbound-shipments/freight-none-expected` — Mark Shipments as Having No Freight Expected
- `POST /api/inbound-shipments/{inboundShipment}/freight/quotes/extract` — Upload Freight Quote for Inbound Shipment

### Inbound Shipments
- `POST /api/inbound-shipments/freight-accrue-now` — Accrue Freight Now
- `GET /api/inbound-shipments/{inboundShipment}/documents` — List Shipment Documents
- `POST /api/inbound-shipments/{inboundShipment}/documents` — Upload Shipment Documents
- `DELETE /api/inbound-shipments/{inboundShipment}/documents/{document}` — Delete Shipment Document
- `PATCH /api/inbound-shipments/{inboundShipment}/documents/{document}` — Update Shipment Document
- `GET /api/inbound-shipments/{inboundShipment}/documents/{document}/file` — Download Shipment Document
- `GET /api/receipt-file-discrepancies` — List Packing Slip Discrepancies
- `GET /api/receipt-files/template` — Download Packing Slip Template
- `GET /api/receipt-files/{receipt_file}` — Get Packing Slip Recording

### Integration Instances
- `GET /api/integration-instances/{integration_instance}/sync-health` — Get Sync Health

### Inventory Expiry & Shelf-Life
- `GET /api/inventory-expiry/units-without-lots` — List Lot-Tracked Units at Networks Without Lots

### Ledger (Accounting v2)
- `GET /api/ledger/landed-cost-account-repairs` — List Landed Cost Account Repairs
- `GET /api/ledger/landed-cost-account-repairs/orphaned-reclasses` — List Orphaned Repair Reclasses

### Lots at Networks
- `GET /api/v2/network-lots` — List Lots at Networks
- `DELETE /api/v2/network-lots/entries/{networkLotEntry}` — Delete Network Lot Entry
- `GET /api/v2/network-lots/export` — Export Lots at Networks
- `GET /api/v2/network-lots/status` — Get Network Lot Tracking Status
- `GET /api/v2/network-lots/{networkLotBalance}` — Get Network Lot

### Price Sync
- `GET /api/v2/sales-channels/{integrationInstance}/prices/held` — List Held Price Changes
- `GET /api/v2/sales-channels/{integrationInstance}/prices/runs/{run}/price-drops` — List Preview Price Drops

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
- `GET /api/product-listings/{productListing}/content-ownership` — Get Listing Content Ownership
- `GET /api/products/{product}/content-ownership` — Get Product Content Ownership

### Products
- `GET /api/v2/data-imports/{dataImport}/possible-duplicates/export` — Export Possible Duplicates in an Import File
- `GET /api/v2/product-duplicates` — List Possible Duplicates
- `GET /api/v2/product-duplicates/export` — Export Possible Duplicates
- `GET /api/v2/product-duplicates/summary` — Get Possible Duplicates Summary
- `GET /api/v2/product-duplicates/{group}` — Get Possible Duplicate Group
- `GET /api/v2/product-duplicates/{group}/listings` — List Group Channel Listings
- `GET /api/v2/products/launch-mode/summary` — Get Launch Mode Count
- `GET /api/v2/products/{product}/inner-pack` — Get Product Inner Pack
- `GET /api/v2/products/{product}/packaging-requirements` — Get Product Packaging Requirements
- `GET /api/v2/products/{product}/variants/launch-mode` — Get Variant Launch Mode

### Purchase Orders
- `GET /api/purchase-orders/{purchaseOrder}/shipment-documents` — List Shipment Documents by Purchase Order
- `GET /api/purchase-orders/{purchaseOrder}/timeline` — Get Purchase Order Timeline
- `GET /api/purchase-orders/{purchase_order}/packaging` — Get PO Factory Packaging
- `DELETE /api/v2/po-channel-reservations/{poChannelReservation}` — Delete PO Channel Reservation
- `PATCH /api/v2/po-channel-reservations/{poChannelReservation}` — Update PO Channel Reservation
- `GET /api/v2/po-line-reservation-splits` — Get PO Line Reservation Splits
- `GET /api/v2/purchase-order-lines/{purchaseOrderLine}/channel-reservation-options` — List Channel Reservation Options

### Purple Dot
- `GET /api/purple-dot/{instance}/bundle-supply` — List Purple Dot Set Supply

### Recalls
- `DELETE /api/v2/recall-cases/{recallCase}/network-orders` — Remove Recall Case Network Orders

### Reporting
- `GET /api/reporting/ginr/settings` — Get GINR Report Settings
- `GET /api/v2/reports/freight-reconciliation` — List Freight Reconciliation Rows
- `GET /api/v2/reports/freight-reconciliation/export` — Export Freight Reconciliation
- `GET /api/v2/reports/freight-reconciliation/summary` — Get Freight Reconciliation Summary

### Sales Invoices
- `GET /api/reports/ar-aging/export` — Export AR Aging
- `GET /api/reports/ar-aging/invoices` — List AR Aging Invoices

### Shipments
- `GET /api/supplier-portal/shipments/{shipment}/documents` — List Shipment Documents
- `DELETE /api/supplier-portal/shipments/{shipment}/documents/{document}` — Delete Shipment Document
- `GET /api/supplier-portal/shipments/{shipment}/documents/{document}/file` — Download Shipment Document

### Veracore
- `GET /api/veracore/integration-instances/{integration_instance}/orders/veracore-only` — List Veracore-Only Orders
- `GET /api/veracore/integration-instances/{integration_instance}/orders/veracore-only/summary` — Get Veracore-Only Order Summary

### Walmart
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/write-off-preview` — Write-off Preview

### Warehouses
- `GET /api/warehouses/{warehouse}/auto-dispatch-waiting-orders` — List Orders Waiting on Auto Dispatch

_…plus 51 more (see the API reference)._

## Changed

### Inventory Intelligence
- `GET /api/inventory-forecasting/sales-orders` — List Sales Orders Behind a Forecast Cell
  - new parameter(s): `filters`

### Sales Order Lines
- `POST /api/sales-order-lines/reservations` — Manage Reservations
  - new response code(s): `409`

### Sales Orders
- `POST /api/sales-orders/{salesOrder}/fulfill` — Fulfill Sales Order
  - new response code(s): `409`

_Spec version 1.0.0 → 1.0.0._
