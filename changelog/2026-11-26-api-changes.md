---
title: API changes — 2026-11-26
description: This release includes 104 additions.
authors: [product-team]
tags: [added]
date: 2026-11-26
---

This release includes 104 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Adjustments & Transfers
- `GET /api/v2/warehouse-transfers/{warehouseTransfer}/network-send-expiry` — Get Network Send Expiry

### Amazon
- `GET /api/amazon/{integrationInstance}/removal-shipments/{removalShipment}/lot-suggestions` — Get Lot Suggestions

### CRM
- `GET /api/crm/customers/{customer}/reorder-reminder` — Get Customer Reorder Reminder
- `PUT /api/crm/customers/{customer}/reorder-reminder` — Update Customer Reorder Reminder
- `POST /api/crm/customers/{customer}/reorder-reminders` — Create Reorder Reminder Draft
- `POST /api/crm/reorder-reminder-settings/bulk` — Bulk Update Customer Reorder Reminders
- `GET /api/crm/reorder-reminder-settings/defaults` — Get Reorder Reminder Defaults
- `GET /api/crm/reorder-reminder-settings/summaries` — Get Reorder Reminder Summaries
- `GET /api/crm/reorder-reminders` — List Reorder Reminders
- `POST /api/crm/reorder-reminders/bulk-discard` — Bulk Discard Reorder Reminders
- `POST /api/crm/reorder-reminders/bulk-send` — Bulk Send Reorder Reminders
- `GET /api/crm/reorder-reminders/counts` — Get Reorder Reminder Counts
- `GET /api/crm/reorder-reminders/{reminder}` — Get Reorder Reminder
- `PATCH /api/crm/reorder-reminders/{reminder}` — Update Reorder Reminder
- `POST /api/crm/reorder-reminders/{reminder}/discard` — Discard Reorder Reminder
- `POST /api/crm/reorder-reminders/{reminder}/send` — Send Reorder Reminder

### Customers
- `GET /api/settings/store-locator` — Get Store Locator Settings
- `PUT /api/settings/store-locator` — Update Store Locator Settings
- `POST /api/settings/store-locator/preview-link` — Create Store Locator Preview Link
- `POST /api/store-locator/locate` — Locate Store Locator Addresses
- `GET /api/store-locator/locations` — List Store Locator Locations
- `POST /api/store-locator/locations/bulk` — Bulk Update Store Locator Listings
- `GET /api/store-locator/locations/{customerId}` — Get Customer Store Locator Listing
- `POST /api/store-locator/locations/{customerId}/pin` — Set Store Locator Pin
- `POST /api/store-locator/locations/{customerId}/recheck` — Recheck Store Locator Address
- `GET /api/store-locator/summary` — Get Store Locator Summary

### Inventory Expiry & Shelf-Life
- `PUT /api/lots/bulk-edit` — Bulk Edit Lots
- `POST /api/lots/bulk-edit/import` — Import Bulk Lot Edit CSV
- `POST /api/lots/bulk-edit/import/preview` — Preview Bulk Lot Edit CSV
- `GET /api/lots/bulk-edit/template` — Download Bulk Lot Edit Template (CSV)
- `POST /api/lots/{fifoLayer}/move` — Move Lot Quantity
- `GET /api/lots/{fifoLayer}/move-targets` — Get Lot Move Targets

### Inventory Intelligence
- `GET /api/inventory-aging/network-units` — List Lot-Tracked Units at Units-Only Networks

### Organization
- `GET /api/v2/sku-numbering-rules` — List SKU Numbering Rules
- `POST /api/v2/sku-numbering-rules` — Create SKU Numbering Rule
- `POST /api/v2/sku-numbering-rules/preview` — Preview SKU Numbering Pattern
- `GET /api/v2/sku-numbering-rules/resolve` — Resolve SKU Numbering Rule
- `DELETE /api/v2/sku-numbering-rules/{rule}` — Delete SKU Numbering Rule

### Purchase Order Shipments
- `POST /api/inbound-shipments/receive-without-po` — Receive Delivery Without Purchase Order
- `GET /api/purchase-orders/{purchaseOrder}/receipt-match` — Preview Receipt Match
- `POST /api/purchase-orders/{purchaseOrder}/receipt-match` — Match Delivery to Purchase Order
- `GET /api/purchase-orders/{purchaseOrder}/receipt-match/targets` — List Receipt Match Targets

### Purchase Orders
- `POST /api/purchase-orders/{purchase_order}/split-by-destination` — Split Purchase Order by Destination
- `GET /api/purchase-rfqs` — List Requests for Quote
- `POST /api/purchase-rfqs` — Create Request for Quote
- `GET /api/purchase-rfqs/supplier-suggestions` — List Suggested Suppliers for Request for Quote
- `DELETE /api/purchase-rfqs/{purchaseRfq}` — Delete Request for Quote
- `GET /api/purchase-rfqs/{purchaseRfq}` — Get Request for Quote
- `PUT /api/purchase-rfqs/{purchaseRfq}` — Update Request for Quote
- `PUT /api/purchase-rfqs/{purchaseRfq}/awards` — Replace Request for Quote Awards
- `POST /api/purchase-rfqs/{purchaseRfq}/cancel` — Cancel Request for Quote
- `POST /api/purchase-rfqs/{purchaseRfq}/convert` — Convert Request for Quote to Purchase Orders
- `POST /api/purchase-rfqs/{purchaseRfq}/duplicate` — Duplicate Request for Quote
- `POST /api/purchase-rfqs/{purchaseRfq}/send` — Send Request for Quote
- `POST /api/purchase-rfqs/{purchaseRfq}/suppliers` — Add Suppliers to Request for Quote
- `DELETE /api/purchase-rfqs/{purchaseRfq}/suppliers/{rfqSupplier}` — Remove Supplier from Request for Quote
- `POST /api/purchase-rfqs/{purchaseRfq}/suppliers/{rfqSupplier}/link` — Create Supplier Quote Link
- `POST /api/purchase-rfqs/{purchaseRfq}/suppliers/{rfqSupplier}/remind` — Remind Supplier
- `PUT /api/purchase-rfqs/{purchaseRfq}/suppliers/{rfqSupplier}/response` — Record Supplier Quote Response

### Quote Requests
- `GET /api/supplier-portal/rfqs` — List Quote Requests
- `GET /api/supplier-portal/rfqs/open-count` — Count Open Quote Requests
- `GET /api/supplier-portal/rfqs/{rfqSupplier}` — Get Quote Request

### Standing Orders
- `GET /api/customers/{customer}/standing-orders` — List Customer Standing Orders
- `GET /api/portal/standing-orders` — List Standing Orders
- `POST /api/portal/standing-orders` — Create Standing Order
- `POST /api/portal/standing-orders/from-cart` — Prefill Standing Order From Cart
- `POST /api/portal/standing-orders/from-list/{list}` — Prefill Standing Order From Saved List
- `POST /api/portal/standing-orders/from-order/{order}` — Prefill Standing Order From Order
- `POST /api/portal/standing-orders/preview` — Preview Standing Order
- `DELETE /api/portal/standing-orders/{standingOrder}` — Delete Standing Order
- `GET /api/portal/standing-orders/{standingOrder}` — Get Standing Order
- `PUT /api/portal/standing-orders/{standingOrder}` — Update Standing Order
- `DELETE /api/portal/standing-orders/{standingOrder}/dates/{date}/skip` — Undo Skip Standing Order Delivery
- `POST /api/portal/standing-orders/{standingOrder}/dates/{date}/skip` — Skip Standing Order Delivery
- `POST /api/portal/standing-orders/{standingOrder}/end` — End Standing Order
- `POST /api/portal/standing-orders/{standingOrder}/pause` — Pause Standing Order
- `POST /api/portal/standing-orders/{standingOrder}/resume` — Resume Standing Order
- `POST /api/sales-orders/{salesOrder}/standing-order-draft` — Get Standing Order Draft From Sales Order
- `GET /api/standing-orders` — List Standing Orders
- `POST /api/standing-orders` — Create Standing Order
- `POST /api/standing-orders/bulk/{action}` — Bulk Update Standing Orders
- `POST /api/standing-orders/occurrences/{occurrence}/resolve` — Resolve Standing Order Date
- `POST /api/standing-orders/preview` — Preview Standing Order
- `DELETE /api/standing-orders/{standingOrder}` — Delete Standing Order
- `GET /api/standing-orders/{standingOrder}` — Get Standing Order
- `GET /api/standing-orders/{standingOrder}/activity` — List Standing Order Activity
- `POST /api/standing-orders/{standingOrder}/dates/{date}/generate` — Create Standing Order Date Now
- `DELETE /api/standing-orders/{standingOrder}/dates/{date}/skip` — Unskip Standing Order Date
- `POST /api/standing-orders/{standingOrder}/dates/{date}/skip` — Skip Standing Order Date
- `POST /api/standing-orders/{standingOrder}/end` — End Standing Order
- `GET /api/standing-orders/{standingOrder}/occurrences` — List Standing Order History
- `POST /api/standing-orders/{standingOrder}/pause` — Pause Standing Order
- `POST /api/standing-orders/{standingOrder}/resume` — Resume Standing Order
- `GET /api/standing-orders/{standingOrder}/upcoming` — List Upcoming Standing Order Dates

### Stock Takes
- `GET /api/stock-takes/count-due` — List Count Due Products
- `POST /api/stock-takes/count-due/start` — Start Stock Takes for Count Due Products
- `GET /api/stock-takes/count-due/summary` — Get Count Due Summary

### Walmart
- `POST /api/walmart/{integrationInstance}/wfs/removals/{reference}/shipments/{wfsRemovalShipment}/close-receiving` — Close WFS Removal Shipment Receiving
- `POST /api/walmart/{integrationInstance}/wfs/removals/{reference}/shipments/{wfsRemovalShipment}/receive` — Receive WFS Removal Shipment
- `POST /api/walmart/{integrationInstance}/wfs/removals/{reference}/shipments/{wfsRemovalShipment}/resume-receiving` — Resume WFS Removal Shipment Receiving

_…plus 4 more (see the API reference)._

_Spec version 1.0.0 → 1.0.0._
