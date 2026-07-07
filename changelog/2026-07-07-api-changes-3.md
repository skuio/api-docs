---
title: API changes — 2026-07-07
description: This release 755 added, 2 changed API endpoint(s).
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-07-07
---

This release 755 added, 2 changed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Added

- `DELETE //{domain}/api/data-feeds` — Bulk Delete Data Feeds
- `DELETE //{domain}/api/data-feeds/2` — Delete Data Feed
- `DELETE //{domain}/api/discount-codes/{discount_code}` — Delete Discount Code
- `DELETE //{domain}/api/inventory-aging/notes/{product}` — Delete Product Note
- `DELETE //{domain}/api/purchase-orders` — Bulk Delete
- `DELETE //{domain}/api/purchase-orders/{purchase_order}` — Delete Purchase Order
- `DELETE //{domain}/api/purchase-orders/{purchase_order}/notes/{noteId}` — Delete Note
- `DELETE //{domain}/api/return-receipts/lines/{returnReceiptLine}` — Delete Return Receipt Line (standalone)
- `DELETE //{domain}/api/return-receipts/{returnReceipt}/lines/{returnReceiptLine}` — Remove Line from Return Receipt
- `DELETE //{domain}/api/return-receipts/{return_receipt}` — Delete Return Receipt
- `DELETE //{protocol}{domain}/api/supplier-pricing-tiers` — Bulk Delete Pricing Tiers
- `DELETE //{protocol}{domain}/api/supplier-pricing-tiers/2` — Delete Supplier Pricing Tier
- `DELETE /api/artworks/{artwork}` — Archive Artwork
- `DELETE /api/data-feeds` — Bulk Delete Data Feeds
- `DELETE /api/data-feeds/2` — Delete Data Feed
- `DELETE /api/decoration-cost-rules/{decoration_cost_rule}` — Delete Decoration Cost Rule
- `DELETE /api/decoration-methods/{decoration_method}` — Delete Decoration Method
- `DELETE /api/decoration-placements/{decoration_placement}` — Delete Decoration Placement
- `DELETE /api/discount-codes/{discount_code}` — Delete Discount Code
- `DELETE /api/export/fulfillment-orders/{fulfillmentOrder}/packing-slip/cache` — Clear FO Packing Slip Cache
- `DELETE /api/export/sales-order-fulfillments/{salesOrderFulfillment}/packing-slip/cache` — Clear Shipment Packing Slip Cache
- `DELETE /api/inbound-shipments/receipts/{receipt}` — Delete Receipt
- `DELETE /api/inbound-shipments/{inbound_shipment}` — Delete Inbound Shipment
- `DELETE /api/inbound-shipments/{inbound_shipment}/bills/{bill}` — Delete Bill
- `DELETE /api/inventory-aging/notes/{product}` — Delete Product Note
- `DELETE /api/inventory-forecasting/schedules/{schedule}` — Delete Schedule
- `DELETE /api/landed-cost-invoices/ocr/{landed_cost_extraction_id}` — Delete Extraction
- `DELETE /api/purchase-invoices` — Bulk Delete Purchase Invoices
- `DELETE /api/purchase-invoices/ocr/{purchase_extraction_id}` — Delete Extraction
- `DELETE /api/purchase-invoices/{purchaseInvoiceId}/payments/{payment}` — Delete Payment
- `DELETE /api/purchase-invoices/{purchaseInvoice}/notes/{noteId}` — Delete Note
- `DELETE /api/purchase-invoices/{purchase_invoice}` — Delete Purchase Invoice
- `DELETE /api/purchase-order-line-short-close-events/{short_close_event}` — Undo Short-Close
- `DELETE /api/purchase-order-shipments/{shipment}/notes/{noteId}` — Delete Note
- `DELETE /api/purchase-orders` — Bulk Delete
- `DELETE /api/purchase-orders/{purchase_order}` — Delete Purchase Order
- `DELETE /api/purchase-orders/{purchase_order}/notes/{noteId}` — Delete Note
- `DELETE /api/purchase-receipts/{receipt}/notes/{noteId}` — Delete Note
- `DELETE /api/quotes/{quote}` — Delete Quote
- `DELETE /api/quotes/{quote}/lines/{line}` — Remove Quote Line
- `DELETE /api/reporting/inventory-planning/schedules/{scheduledReport}` — Delete Scheduled Report
- `DELETE /api/reporting/sales-tax/nexus/registrations/{taxNexusRegistration}` — Delete Sales-Tax Registration
- `DELETE /api/return-disposition-policies/{returnDispositionPolicy}` — Delete Disposition Policy
- `DELETE /api/return-reasons` — Bulk Delete Return Reasons
- `DELETE /api/return-reasons/{return_reason}` — Delete Return Reason
- `DELETE /api/return-receipts/lines/{returnReceiptLine}` — Delete Return Receipt Line (standalone)
- `DELETE /api/return-receipts/{returnReceipt}/lines/{returnReceiptLine}` — Remove Line from Return Receipt
- `DELETE /api/return-receipts/{return_receipt}` — Delete Return Receipt
- `DELETE /api/rmas/{rma}` — Delete RMA
- `DELETE /api/rmas/{rma}/lines/{rmaLine}` — Remove Line from RMA
- `DELETE /api/rmas/{rma}/shipping` — Clear Shipping Details
- `DELETE /api/sales-credits` — Bulk Delete Sales Credits
- `DELETE /api/sales-credits/{salesCredit}/notes/{noteId}` — Delete Note
- `DELETE /api/sales-credits/{salesCredit}/payments/{payment}` — Delete Payment
- `DELETE /api/sales-credits/{sales_credit}` — Delete Sales Credit
- `DELETE /api/sales-order-fulfillments` — Bulk Void Shipments
- `DELETE /api/sales-order-fulfillments/{salesOrderFulfillment}` — Void Shipment
- `DELETE /api/sales-order-lines` — Delete Sales Order Line
- `DELETE /api/sales-order-lines/bulk` — Bulk Delete Sales Order Lines
- `DELETE /api/sales-orders` — Bulk Delete Sales Orders
- `DELETE /api/sales-orders/ocr/{extraction_id}` — Delete OCR Extraction
- `DELETE /api/sales-orders/tracked` — Bulk Delete Sales Orders (Tracked)
- `DELETE /api/sales-orders/{salesOrderId}/payments/{payment}` — Delete Sales Order Payment
- `DELETE /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decorations/{decoration}` — Remove Line Decoration
- `DELETE /api/supplier-pricing-tiers` — Bulk Delete Pricing Tiers
- `DELETE /api/supplier-pricing-tiers/2` — Delete Supplier Pricing Tier
- `DELETE /api/supplier-products/{supplier_product}` — Delete Supplier Product
- `DELETE /api/supplier-products/{supplier_product}/notes/{note}` — Delete Note
- `DELETE /api/suppliers` — Bulk Delete
- `DELETE /api/suppliers/{supplier}` — Delete Supplier
- `DELETE /api/suppliers/{supplier}/pricing-tiers/{tierId}` — Delete Pricing Tier from Supplier
- `GET //{domain}/api/data-feeds/1` — Show Data Feed
- `GET //{domain}/api/data-feeds/import-config/product_feed` — Get Import Config
- `GET //{domain}/api/discount-codes` — List Discount Codes
- `GET //{domain}/api/discount-codes/{discount_code}` — Get Discount Code
- `GET //{domain}/api/inventory-aging` — Get Inventory Aging Report
- `GET //{domain}/api/inventory-aging/distribution` — Get Inventory Aging Distribution
- `GET //{domain}/api/inventory-aging/export` — Export Inventory Aging to CSV
- `GET //{domain}/api/inventory-aging/metrics` — Get Inventory Aging Metrics
- `GET //{domain}/api/inventory-aging/sales-channels` — Get Sales Channels for Filter
- `GET //{domain}/api/purchase-orders/import-lines/template` — Download Lines Import Template
- `GET //{domain}/api/purchase-orders/import/template` — Download Import Template
- `GET //{domain}/api/purchase-orders/list` — List Purchase Orders (Vue3 List)
- `GET //{domain}/api/purchase-orders/list/export` — Export Purchase Orders
- `GET //{domain}/api/purchase-orders/{purchaseOrder}/invoices` — List PO Invoices
- `GET //{domain}/api/purchase-orders/{purchase_order}` — Get Purchase Order
- `GET //{domain}/api/purchase-orders/{purchase_order}/activity-log` — Activity Log
- `GET //{domain}/api/purchase-orders/{purchase_order}/bills/{bill}` — Get Bill
- `GET //{domain}/api/purchase-orders/{purchase_order}/dropship-shipments` — Get Dropship Shipments
- `GET //{domain}/api/purchase-orders/{purchase_order}/fifo-layers` — FIFO Layers
- `GET //{domain}/api/purchase-orders/{purchase_order}/inventory-movements` — Inventory Movements
- `GET //{domain}/api/purchase-orders/{purchase_order}/invoice/preview` — Preview Invoice
- `GET //{domain}/api/purchase-orders/{purchase_order}/line-items` — Get PO Line Items (Lightweight)
- `GET //{domain}/api/purchase-orders/{purchase_order}/lines` — Get PO Lines (DataTable)
- `GET //{domain}/api/purchase-orders/{purchase_order}/lines-for-invoice` — Get PO Lines for Invoice
- `GET //{domain}/api/purchase-orders/{purchase_order}/lines-for-receiving` — Get PO Lines for Receiving
- `GET //{domain}/api/purchase-orders/{purchase_order}/notes` — Get Notes
- `GET //{domain}/api/purchase-orders/{purchase_order}/receipts` — Get PO Receipts
- `GET //{domain}/api/purchase-orders/{purchase_order}/receipts/{receipt}` — Get Single PO Receipt
- `GET //{domain}/api/purchase-orders/{purchase_order}/shipment-line-options` — Get PO Lines for Shipment Picker
- …plus 655 more added endpoint(s).

## Changed

- `GET /api/discount-codes` — List Discount Codes **(breaking)**
  - removed parameter(s): `page`, `per_page`
- `POST /api/discount-codes` — Create Discount Code
  - new response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
