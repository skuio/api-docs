---
title: API changes — 2026-06-11
description: This release includes 70 additions, 1 removal. 1 breaking change — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-06-11
---

This release includes 70 additions, 1 removal. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Shipping Providers
- **Removed** `GET /api/shipstation/integration-instances/{integrationInstance}/fulfillments` — List Fulfillments

## Added

### Attachments
- `GET /api/vendor-credits/{vendorCredit}/attachments` — List Attachments
- `POST /api/vendor-credits/{vendorCredit}/attachments` — Upload Attachment
- `DELETE /api/vendor-credits/{vendorCredit}/attachments/{attachment}` — Delete Attachment
- `GET /api/vendor-credits/{vendorCredit}/attachments/{attachment}/download` — Download Attachment
- `GET /api/vendor-credits/{vendorCredit}/attachments/{attachment}/view` — View Attachment Inline

### OCR
- `POST /api/vendor-credits/ocr/upload` — Upload Credit Memo for OCR
- `DELETE /api/vendor-credits/ocr/{extraction}` — Delete Extraction
- `GET /api/vendor-credits/ocr/{extraction}` — Get Extraction
- `POST /api/vendor-credits/ocr/{extraction}/attach-to-credit` — Attach Extraction to Existing Credit
- `POST /api/vendor-credits/ocr/{extraction}/create-credit` — Create Vendor Credit from Extraction
- `GET /api/vendor-credits/ocr/{extraction}/pdf` — Stream Extraction PDF
- `POST /api/vendor-credits/ocr/{extraction}/reclassify-as-invoice` — Reclassify as Supplier Invoice
- `POST /api/vendor-credits/ocr/{extraction}/rescan` — Re-scan Extraction
- `GET /api/vendor-credits/{vendorCredit}/attachments/{attachment}/ocr` — Get Latest Attachment Extraction
- `POST /api/vendor-credits/{vendorCredit}/attachments/{attachment}/ocr` — Scan Attachment with OCR
- `POST /api/vendor-credits/{vendorCredit}/ocr-apply` — Apply OCR Results to Vendor Credit

### Purchase Invoice OCR
- `POST /api/purchase-invoices/ocr/{purchase_extraction_id}/reclassify-as-credit` — Reclassify as Vendor Credit

### Sales Channels
- `POST //{domain}/webhooks/tiktok-shop` — Receive Webhook (TikTok → SKU.io)

### Shipping Providers
- `POST //{domain}/api/shipstation/integration-instances` — Create Integration Instance
- `GET //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments` — List Shipments
- `POST //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments/refresh-shipment` — Refresh Single Shipment
- `POST //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments/search` — Search Shipments
- `POST //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments/sync` — Sync Shipments
- `GET //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments/sync-info` — Shipments Sync Info
- `GET //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments/{shipment}` — Get Shipment
- `POST //{domain}/api/shipstation/integration-instances/{integrationInstance}/shipments/{shipment}/refresh` — Refresh Shipment From ShipStation
- `DELETE //{domain}/api/shipstation/integration-instances/{integration_instance}` — Delete Integration Instance
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}` — Get Integration Instance
- `PUT //{domain}/api/shipstation/integration-instances/{integration_instance}` — Update Integration Instance
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/dashboard` — Get Dashboard Metrics
- `PUT //{domain}/api/shipstation/integration-instances/{integration_instance}/fulfillment-routing` — Update Fulfillment Routing
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders` — List Orders
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders-chart` — Get Orders Chart (Date Range)
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/refresh-order` — Refresh Single Order
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/search` — Search Orders (Live)
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/submit-fulfillment` — Submit Fulfillment
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/sync` — Sync Orders
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/sync-info` — Sync Info
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/sync-progress/{trackedJobLogId}` — Sync Progress
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}` — Get Order
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}/detail` — Get Order Detail (raw JSON)
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}/link-fulfillment` — Link Order to Fulfillment
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}/sync-detail` — Sync Order Detail
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}/tracking` — Refresh Order Tracking
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}/unlink-fulfillment` — Unlink Order from Fulfillment
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/orders/{order}/webhook-events` — Get Order Webhook Events
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods` — List Shipping Methods
- `PUT //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods/bulk-map` — Bulk Map Shipping Methods
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods/export` — Export Shipping Method Mappings (CSV)
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods/import` — Import Shipping Method Mappings (CSV)
- `PUT //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods/map` — Map Shipping Method
- `DELETE //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods/map/ups|ups_ground` — Unmap Shipping Method
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/shipping-methods/sync` — Sync Shipping Methods
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/test-connection` — Test Connection
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/warehouses` — List Warehouses
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/warehouses/sync` — Sync Warehouses
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/warehouses/{shipstationId}/link` — Link Warehouse
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-events` — List Webhook Events
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-events/{webhook_event}` — Get Webhook Event
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-events/{webhook_event}/retry` — Retry Webhook Event
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-subscriptions` — List Webhook Configurations
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-subscriptions` — Subscribe to Webhook Event
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-subscriptions/sync` — Sync Subscriptions from ShipStation
- `DELETE //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-subscriptions/{subscription}` — Unsubscribe Webhook
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-test/events/{eventId}/payload` — Get Test Event Payload
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-test/process` — Process Test Webhook
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-test/recent-events` — List Recent Test Events
- `GET //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-test/topics` — List Webhook Topics
- `POST //{domain}/api/shipstation/integration-instances/{integration_instance}/webhook-test/validate` — Validate Test Payload
- `GET //{domain}/api/shipstation/webhook-test/status` — Get Webhook Test Status (Global)

_Spec version 1.0.0 → 1.0.0._
