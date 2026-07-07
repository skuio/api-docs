---
title: API changes — 2026-07-05
description: This release 2 changed, 567 removed API endpoint(s).
authors: [product-team]
tags: [changed, removed, breaking]
date: 2026-07-05
---

This release 2 changed, 567 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Changed

- `GET /api/discount-codes` — List Discount Codes
  - new parameter(s): `page`, `per_page`
- `POST /api/discount-codes` — Create Discount Code
  - removed response code(s): `422`

## Removed

- `DELETE //{domain}/api/discount-codes/{discount_code}` — Delete Discount Code **(breaking)**
- `DELETE //{domain}/api/purchase-orders` — Bulk Delete **(breaking)**
- `DELETE //{domain}/api/purchase-orders/{purchase_order}` — Delete Purchase Order **(breaking)**
- `DELETE //{domain}/api/purchase-orders/{purchase_order}/notes/{noteId}` — Delete Note **(breaking)**
- `DELETE //{domain}/api/return-receipts/lines/{returnReceiptLine}` — Delete Return Receipt Line (standalone) **(breaking)**
- `DELETE //{domain}/api/return-receipts/{returnReceipt}/lines/{returnReceiptLine}` — Remove Line from Return Receipt **(breaking)**
- `DELETE //{domain}/api/return-receipts/{return_receipt}` — Delete Return Receipt **(breaking)**
- `DELETE //{protocol}{domain}/api/supplier-pricing-tiers` — Bulk Delete Pricing Tiers **(breaking)**
- `DELETE //{protocol}{domain}/api/supplier-pricing-tiers/2` — Delete Supplier Pricing Tier **(breaking)**
- `DELETE /api/artworks/{artwork}` — Archive Artwork **(breaking)**
- `DELETE /api/decoration-cost-rules/{decoration_cost_rule}` — Delete Decoration Cost Rule **(breaking)**
- `DELETE /api/discount-codes/{discount_code}` — Delete Discount Code **(breaking)**
- `DELETE /api/export/fulfillment-orders/{fulfillmentOrder}/packing-slip/cache` — Clear FO Packing Slip Cache **(breaking)**
- `DELETE /api/export/sales-order-fulfillments/{salesOrderFulfillment}/packing-slip/cache` — Clear Shipment Packing Slip Cache **(breaking)**
- `DELETE /api/inbound-shipments/receipts/{receipt}` — Delete Receipt **(breaking)**
- `DELETE /api/inbound-shipments/{inbound_shipment}` — Delete Inbound Shipment **(breaking)**
- `DELETE /api/inbound-shipments/{inbound_shipment}/bills/{bill}` — Delete Bill **(breaking)**
- `DELETE /api/landed-cost-invoices/ocr/{landed_cost_extraction_id}` — Delete Extraction **(breaking)**
- `DELETE /api/purchase-invoices` — Bulk Delete Purchase Invoices **(breaking)**
- `DELETE /api/purchase-invoices/ocr/{purchase_extraction_id}` — Delete Extraction **(breaking)**
- `DELETE /api/purchase-invoices/{purchaseInvoiceId}/payments/{payment}` — Delete Payment **(breaking)**
- `DELETE /api/purchase-invoices/{purchaseInvoice}/notes/{noteId}` — Delete Note **(breaking)**
- `DELETE /api/purchase-invoices/{purchase_invoice}` — Delete Purchase Invoice **(breaking)**
- `DELETE /api/purchase-order-line-short-close-events/{short_close_event}` — Undo Short-Close **(breaking)**
- `DELETE /api/purchase-order-shipments/{shipment}/notes/{noteId}` — Delete Note **(breaking)**
- `DELETE /api/purchase-orders` — Bulk Delete **(breaking)**
- `DELETE /api/purchase-orders/{purchase_order}` — Delete Purchase Order **(breaking)**
- `DELETE /api/purchase-orders/{purchase_order}/notes/{noteId}` — Delete Note **(breaking)**
- `DELETE /api/purchase-receipts/{receipt}/notes/{noteId}` — Delete Note **(breaking)**
- `DELETE /api/quotes/{quote}` — Delete Quote **(breaking)**
- `DELETE /api/quotes/{quote}/lines/{line}` — Remove Quote Line **(breaking)**
- `DELETE /api/return-disposition-policies/{returnDispositionPolicy}` — Delete Disposition Policy **(breaking)**
- `DELETE /api/return-reasons` — Bulk Delete Return Reasons **(breaking)**
- `DELETE /api/return-reasons/{return_reason}` — Delete Return Reason **(breaking)**
- `DELETE /api/return-receipts/lines/{returnReceiptLine}` — Delete Return Receipt Line (standalone) **(breaking)**
- `DELETE /api/return-receipts/{returnReceipt}/lines/{returnReceiptLine}` — Remove Line from Return Receipt **(breaking)**
- `DELETE /api/return-receipts/{return_receipt}` — Delete Return Receipt **(breaking)**
- `DELETE /api/rmas/{rma}` — Delete RMA **(breaking)**
- `DELETE /api/rmas/{rma}/lines/{rmaLine}` — Remove Line from RMA **(breaking)**
- `DELETE /api/rmas/{rma}/shipping` — Clear Shipping Details **(breaking)**
- `DELETE /api/sales-credits` — Bulk Delete Sales Credits **(breaking)**
- `DELETE /api/sales-credits/{salesCredit}/notes/{noteId}` — Delete Note **(breaking)**
- `DELETE /api/sales-credits/{salesCredit}/payments/{payment}` — Delete Payment **(breaking)**
- `DELETE /api/sales-credits/{sales_credit}` — Delete Sales Credit **(breaking)**
- `DELETE /api/sales-order-fulfillments` — Bulk Void Shipments **(breaking)**
- `DELETE /api/sales-order-fulfillments/{salesOrderFulfillment}` — Void Shipment **(breaking)**
- `DELETE /api/sales-order-lines` — Delete Sales Order Line **(breaking)**
- `DELETE /api/sales-order-lines/bulk` — Bulk Delete Sales Order Lines **(breaking)**
- `DELETE /api/sales-orders` — Bulk Delete Sales Orders **(breaking)**
- `DELETE /api/sales-orders/ocr/{extraction_id}` — Delete OCR Extraction **(breaking)**
- `DELETE /api/sales-orders/tracked` — Bulk Delete Sales Orders (Tracked) **(breaking)**
- `DELETE /api/sales-orders/{salesOrderId}/payments/{payment}` — Delete Sales Order Payment **(breaking)**
- `DELETE /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decorations/{decoration}` — Remove Line Decoration **(breaking)**
- `DELETE /api/supplier-pricing-tiers` — Bulk Delete Pricing Tiers **(breaking)**
- `DELETE /api/supplier-pricing-tiers/2` — Delete Supplier Pricing Tier **(breaking)**
- `DELETE /api/supplier-products/{supplier_product}` — Delete Supplier Product **(breaking)**
- `DELETE /api/supplier-products/{supplier_product}/notes/{note}` — Delete Note **(breaking)**
- `DELETE /api/suppliers` — Bulk Delete **(breaking)**
- `DELETE /api/suppliers/{supplier}` — Delete Supplier **(breaking)**
- `DELETE /api/suppliers/{supplier}/pricing-tiers/{tierId}` — Delete Pricing Tier from Supplier **(breaking)**
- `GET //{domain}/api/discount-codes` — List Discount Codes **(breaking)**
- `GET //{domain}/api/discount-codes/{discount_code}` — Get Discount Code **(breaking)**
- `GET //{domain}/api/purchase-orders` — List Purchase Orders (DataTable) **(breaking)**
- `GET //{domain}/api/purchase-orders/import-lines/template` — Download Lines Import Template **(breaking)**
- `GET //{domain}/api/purchase-orders/import/template` — Download Import Template **(breaking)**
- `GET //{domain}/api/purchase-orders/list` — List Purchase Orders (Vue3 List) **(breaking)**
- `GET //{domain}/api/purchase-orders/list/export` — Export Purchase Orders **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchaseOrder}/invoices` — List PO Invoices **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}` — Get Purchase Order **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/activity-log` — Activity Log **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/bills/{bill}` — Get Bill **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/dropship-shipments` — Get Dropship Shipments **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/fifo-layers` — FIFO Layers **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/inventory-movements` — Inventory Movements **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/invoice/preview` — Preview Invoice **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/line-items` — Get PO Line Items (Lightweight) **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/lines` — Get PO Lines (DataTable) **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/lines-for-invoice` — Get PO Lines for Invoice **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/lines-for-receiving` — Get PO Lines for Receiving **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/notes` — Get Notes **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/receipts` — Get PO Receipts **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/receipts/{receipt}` — Get Single PO Receipt **(breaking)**
- `GET //{domain}/api/purchase-orders/{purchase_order}/shipment-line-options` — Get PO Lines for Shipment Picker **(breaking)**
- `GET //{domain}/api/return-receipts` — List Return Receipts **(breaking)**
- `GET //{domain}/api/return-receipts/session-summary` — Get Session Summary (Station) **(breaking)**
- `GET //{domain}/api/return-receipts/{return_receipt}` — Get Return Receipt **(breaking)**
- `GET //{domain}/api/returns/analytics/by-disposition` — By Disposition **(breaking)**
- `GET //{domain}/api/returns/analytics/by-product` — By Product **(breaking)**
- `GET //{domain}/api/returns/analytics/by-reason` — By Reason **(breaking)**
- `GET //{domain}/api/returns/analytics/summary` — Summary (KPIs) **(breaking)**
- `GET //{domain}/api/returns/analytics/trend` — Trend **(breaking)**
- `GET //{domain}/api/returns/inbox` — List Inbox **(breaking)**
- `GET //{protocol}{domain}/api/inbound-shipments` — List Inbound Shipments **(breaking)**
- `GET //{protocol}{domain}/api/supplier-pricing-tiers` — List Supplier Pricing Tiers **(breaking)**
- `GET //{protocol}{domain}/api/supplier-pricing-tiers/1` — Get Supplier Pricing Tier **(breaking)**
- `GET /api/artworks` — List Artworks **(breaking)**
- `GET /api/artworks/{artwork}` — Get Artwork **(breaking)**
- `GET /api/cost-category-keyword-aliases` — List Cost Category Keyword Aliases **(breaking)**
- `GET /api/decoration-cost-rules` — List Decoration Cost Rules **(breaking)**
- `GET /api/decoration-cost-rules/{decoration_cost_rule}` — Show Decoration Cost Rule **(breaking)**
- …plus 467 more removed endpoint(s), all breaking.
