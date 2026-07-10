---
title: API changes — 2026-07-05
description: This release includes 2 changes, 567 removals. 567 breaking changes — action required.
authors: [product-team]
tags: [changed, removed, breaking]
date: 2026-07-05
---

This release includes 2 changes, 567 removals. 567 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Artwork
- **Removed** `GET /api/artworks` — List Artworks
- **Removed** `DELETE /api/artworks/{artwork}` — Archive Artwork
- **Removed** `GET /api/artworks/{artwork}` — Get Artwork

#### Decoration Cost Rules
- **Removed** `GET /api/decoration-cost-rules` — List Decoration Cost Rules
- **Removed** `DELETE /api/decoration-cost-rules/{decoration_cost_rule}` — Delete Decoration Cost Rule
- **Removed** `GET /api/decoration-cost-rules/{decoration_cost_rule}` — Show Decoration Cost Rule

#### Discount Codes
- **Removed** `GET //{domain}/api/discount-codes` — List Discount Codes
- **Removed** `DELETE //{domain}/api/discount-codes/{discount_code}` — Delete Discount Code
- **Removed** `GET //{domain}/api/discount-codes/{discount_code}` — Get Discount Code
- **Removed** `DELETE /api/discount-codes/{discount_code}` — Delete Discount Code

#### Fulfillment Orders
- **Removed** `DELETE /api/export/fulfillment-orders/{fulfillmentOrder}/packing-slip/cache` — Clear FO Packing Slip Cache

#### Fulfillments
- **Removed** `DELETE /api/export/sales-order-fulfillments/{salesOrderFulfillment}/packing-slip/cache` — Clear Shipment Packing Slip Cache
- **Removed** `DELETE /api/sales-order-fulfillments` — Bulk Void Shipments
- **Removed** `DELETE /api/sales-order-fulfillments/{salesOrderFulfillment}` — Void Shipment

#### Inbound Shipments
- **Removed** `GET //{protocol}{domain}/api/inbound-shipments` — List Inbound Shipments
- **Removed** `DELETE /api/inbound-shipments/{inbound_shipment}` — Delete Inbound Shipment
- **Removed** `DELETE /api/inbound-shipments/{inbound_shipment}/bills/{bill}` — Delete Bill

#### Landed Cost Invoice OCR
- **Removed** `GET /api/cost-category-keyword-aliases` — List Cost Category Keyword Aliases
- **Removed** `DELETE /api/landed-cost-invoices/ocr/{landed_cost_extraction_id}` — Delete Extraction

#### Line Decorations
- **Removed** `DELETE /api/sales-orders/{salesOrder}/lines/{salesOrderLine}/decorations/{decoration}` — Remove Line Decoration

#### Merged Shipments
- **Removed** `DELETE /api/sales-orders/{salesOrderId}/payments/{payment}` — Delete Sales Order Payment

#### Purchase Invoice OCR
- **Removed** `DELETE /api/purchase-invoices/ocr/{purchase_extraction_id}` — Delete Extraction

#### Purchase Invoices
- **Removed** `DELETE /api/purchase-invoices` — Bulk Delete Purchase Invoices
- **Removed** `DELETE /api/purchase-invoices/{purchaseInvoiceId}/payments/{payment}` — Delete Payment
- **Removed** `DELETE /api/purchase-invoices/{purchaseInvoice}/notes/{noteId}` — Delete Note
- **Removed** `DELETE /api/purchase-invoices/{purchase_invoice}` — Delete Purchase Invoice

#### Purchase Order Shipments
- **Removed** `DELETE /api/inbound-shipments/receipts/{receipt}` — Delete Receipt
- **Removed** `DELETE /api/purchase-order-shipments/{shipment}/notes/{noteId}` — Delete Note

#### Purchase Orders
- **Removed** `DELETE //{domain}/api/purchase-orders` — Bulk Delete
- **Removed** `GET //{domain}/api/purchase-orders` — List Purchase Orders (DataTable)
- **Removed** `GET //{domain}/api/purchase-orders/import-lines/template` — Download Lines Import Template
- **Removed** `GET //{domain}/api/purchase-orders/import/template` — Download Import Template
- **Removed** `GET //{domain}/api/purchase-orders/list` — List Purchase Orders (Vue3 List)
- **Removed** `GET //{domain}/api/purchase-orders/list/export` — Export Purchase Orders
- **Removed** `GET //{domain}/api/purchase-orders/{purchaseOrder}/invoices` — List PO Invoices
- **Removed** `DELETE //{domain}/api/purchase-orders/{purchase_order}` — Delete Purchase Order
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}` — Get Purchase Order
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/activity-log` — Activity Log
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/bills/{bill}` — Get Bill
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/dropship-shipments` — Get Dropship Shipments
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/fifo-layers` — FIFO Layers
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/inventory-movements` — Inventory Movements
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/invoice/preview` — Preview Invoice
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/line-items` — Get PO Line Items (Lightweight)
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/lines` — Get PO Lines (DataTable)
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/lines-for-invoice` — Get PO Lines for Invoice
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/lines-for-receiving` — Get PO Lines for Receiving
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/notes` — Get Notes
- **Removed** `DELETE //{domain}/api/purchase-orders/{purchase_order}/notes/{noteId}` — Delete Note
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/receipts` — Get PO Receipts
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/receipts/{receipt}` — Get Single PO Receipt
- **Removed** `GET //{domain}/api/purchase-orders/{purchase_order}/shipment-line-options` — Get PO Lines for Shipment Picker
- **Removed** `DELETE /api/purchase-order-line-short-close-events/{short_close_event}` — Undo Short-Close
- **Removed** `DELETE /api/purchase-orders` — Bulk Delete
- **Removed** `DELETE /api/purchase-orders/{purchase_order}` — Delete Purchase Order
- **Removed** `DELETE /api/purchase-orders/{purchase_order}/notes/{noteId}` — Delete Note

#### Purchase Receipts
- **Removed** `DELETE /api/purchase-receipts/{receipt}/notes/{noteId}` — Delete Note

#### Quotes
- **Removed** `DELETE /api/quotes/{quote}` — Delete Quote
- **Removed** `DELETE /api/quotes/{quote}/lines/{line}` — Remove Quote Line

#### Returns & RMAs
- **Removed** `GET //{domain}/api/return-receipts` — List Return Receipts
- **Removed** `DELETE //{domain}/api/return-receipts/lines/{returnReceiptLine}` — Delete Return Receipt Line (standalone)
- **Removed** `GET //{domain}/api/return-receipts/session-summary` — Get Session Summary (Station)
- **Removed** `DELETE //{domain}/api/return-receipts/{returnReceipt}/lines/{returnReceiptLine}` — Remove Line from Return Receipt
- **Removed** `DELETE //{domain}/api/return-receipts/{return_receipt}` — Delete Return Receipt
- **Removed** `GET //{domain}/api/return-receipts/{return_receipt}` — Get Return Receipt
- **Removed** `GET //{domain}/api/returns/analytics/by-disposition` — By Disposition
- **Removed** `GET //{domain}/api/returns/analytics/by-product` — By Product
- **Removed** `GET //{domain}/api/returns/analytics/by-reason` — By Reason
- **Removed** `GET //{domain}/api/returns/analytics/summary` — Summary (KPIs)
- **Removed** `GET //{domain}/api/returns/analytics/trend` — Trend
- **Removed** `GET //{domain}/api/returns/inbox` — List Inbox
- **Removed** `DELETE /api/return-disposition-policies/{returnDispositionPolicy}` — Delete Disposition Policy
- **Removed** `DELETE /api/return-reasons` — Bulk Delete Return Reasons
- **Removed** `DELETE /api/return-reasons/{return_reason}` — Delete Return Reason
- **Removed** `DELETE /api/return-receipts/lines/{returnReceiptLine}` — Delete Return Receipt Line (standalone)
- **Removed** `DELETE /api/return-receipts/{returnReceipt}/lines/{returnReceiptLine}` — Remove Line from Return Receipt
- **Removed** `DELETE /api/return-receipts/{return_receipt}` — Delete Return Receipt
- **Removed** `DELETE /api/rmas/{rma}` — Delete RMA
- **Removed** `DELETE /api/rmas/{rma}/lines/{rmaLine}` — Remove Line from RMA
- **Removed** `DELETE /api/rmas/{rma}/shipping` — Clear Shipping Details

#### Sales Credits
- **Removed** `DELETE /api/sales-credits` — Bulk Delete Sales Credits
- **Removed** `DELETE /api/sales-credits/{salesCredit}/notes/{noteId}` — Delete Note
- **Removed** `DELETE /api/sales-credits/{salesCredit}/payments/{payment}` — Delete Payment
- **Removed** `DELETE /api/sales-credits/{sales_credit}` — Delete Sales Credit

#### Sales Order Lines
- **Removed** `DELETE /api/sales-order-lines` — Delete Sales Order Line
- **Removed** `DELETE /api/sales-order-lines/bulk` — Bulk Delete Sales Order Lines

#### Sales Order OCR
- **Removed** `DELETE /api/sales-orders/ocr/{extraction_id}` — Delete OCR Extraction

#### Sales Orders
- **Removed** `DELETE /api/sales-orders` — Bulk Delete Sales Orders
- **Removed** `DELETE /api/sales-orders/tracked` — Bulk Delete Sales Orders (Tracked)

#### Suppliers
- **Removed** `DELETE //{protocol}{domain}/api/supplier-pricing-tiers` — Bulk Delete Pricing Tiers
- **Removed** `GET //{protocol}{domain}/api/supplier-pricing-tiers` — List Supplier Pricing Tiers
- **Removed** `GET //{protocol}{domain}/api/supplier-pricing-tiers/1` — Get Supplier Pricing Tier
- **Removed** `DELETE //{protocol}{domain}/api/supplier-pricing-tiers/2` — Delete Supplier Pricing Tier
- **Removed** `DELETE /api/supplier-pricing-tiers` — Bulk Delete Pricing Tiers
- **Removed** `DELETE /api/supplier-pricing-tiers/2` — Delete Supplier Pricing Tier
- **Removed** `DELETE /api/supplier-products/{supplier_product}` — Delete Supplier Product
- **Removed** `DELETE /api/supplier-products/{supplier_product}/notes/{note}` — Delete Note
- **Removed** `DELETE /api/suppliers` — Bulk Delete
- **Removed** `DELETE /api/suppliers/{supplier}` — Delete Supplier
- **Removed** `DELETE /api/suppliers/{supplier}/pricing-tiers/{tierId}` — Delete Pricing Tier from Supplier

_…plus 467 more (see the API reference)._

## Changed

### Misc
- `GET /api/discount-codes` — List Discount Codes
  - new parameter(s): `page`, `per_page`
- `POST /api/discount-codes` — Create Discount Code
  - removed response code(s): `422`

_Spec version 1.0.0 → 1.0.0._
