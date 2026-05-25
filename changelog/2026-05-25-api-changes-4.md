---
title: API changes — 2026-05-25
description: This release 116 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-05-25
---

This release 116 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}` — Disconnect Integration Instance
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}` — Delete Order
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}/sku-order` — Delete Linked SKU Order
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/payment-method-mappings` — Delete Payment Method Mapping
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}` — Delete Product
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}/map` — Unmap Product SKU
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/shipping-method-mappings/{skuShippingMethodId}` — Delete Shipping Method Mapping
- `DELETE /api/tiktok-shop/integration-instances/{integration_instance_id}/warehouse-mappings/{tiktokShopWarehouseId}` — Delete Warehouse Mapping
- `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}` — Delete Integration Instance
- `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/payment-method-mappings` — Delete Payment Method Mapping
- `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/shipping-method-mappings/{skuShippingMethodId}` — Delete Shipping Method Mapping
- `DELETE /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/warehouse-mappings/{tiktokShopWarehouseId}` — Delete Warehouse Mapping
- `DELETE /api/tiktok-shop/webhook-events` — Delete All Webhook Events
- `DELETE /api/tiktok-shop/webhook-events/{tikTokShopWebhookEvent}` — Delete Webhook Event
- `GET /api/tiktok-shop/config` — Get Config
- `GET /api/tiktok-shop/integration-instances` — List Integration Instances
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}` — Get Integration Instance
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/fulfillments/pending` — List Pending Fulfillments
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/fulfillments/stats` — Fulfillment Sync Stats
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/locations` — List TikTok Warehouses
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/mappings` — Get Field Mappings
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/filter-options` — Get Filter Options
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/latest-sync-info` — Get Latest Sync Info
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/search` — Search Orders (Local DB)
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}/raw` — Get Raw Order from TikTok
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/payment-method-mappings` — List Payment Method Mappings
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/pre-start-date-orders` — Query Pre-Start-Date Orders
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/pre-start-date-orders/search` — Search Pre-Start-Date Orders
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/products/csv-mappings` — Download CSV Mappings
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/products/filter-options` — Get Product Filter Options
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{tiktok_shop_product_id}/orders` — Get Orders Containing Product
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{tiktok_shop_product_id}/raw` — Get Raw Product from TikTok
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/shipping-method-mappings` — List Shipping Method Mappings
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/shipping-providers` — List Shipping Providers
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/transactions/{transaction_id}/raw` — Get Raw Transaction from TikTok
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/warehouse-mappings` — List Warehouse Mappings
- `GET /api/tiktok-shop/integration-instances/{integration_instance_id}/webhook-test/topics` — Webhook Test — Topics & Sample Payloads
- `GET /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}` — Show Integration Instance
- `GET /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/locations` — List Locations
- `GET /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/payment-method-mappings` — List Payment Method Mappings
- `GET /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/shipping-method-mappings` — List Shipping Method Mappings
- `GET /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/shipping-providers` — List Shipping Providers
- `GET /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/warehouse-mappings` — List Warehouse Mappings
- `GET /api/tiktok-shop/mappings/available-fields` — Get Available Fields
- `GET /api/tiktok-shop/oauth/init` — OAuth Init
- `GET /api/tiktok-shop/orders` — List Orders
- `GET /api/tiktok-shop/orders/{order_id}` — Get Order
- `GET /api/tiktok-shop/orders/{tikTokShopOrder}` — Show Order
- `GET /api/tiktok-shop/packages` — List Packages
- `GET /api/tiktok-shop/products` — List Products
- `GET /api/tiktok-shop/products/{product_id}` — Get Product
- `GET /api/tiktok-shop/products/{tikTokShopProduct}` — Show Product
- `GET /api/tiktok-shop/refunds` — List Refunds
- `GET /api/tiktok-shop/refunds/{refund_id}` — Get Refund
- `GET /api/tiktok-shop/refunds/{tikTokShopRefund}` — Show Refund
- `GET /api/tiktok-shop/returns` — List Returns
- `GET /api/tiktok-shop/returns/{return_id}` — Get Return
- `GET /api/tiktok-shop/returns/{tikTokShopReturn}` — Show Return
- `GET /api/tiktok-shop/transactions` — List Transactions
- `GET /api/tiktok-shop/transactions/{tikTokShopTransaction}` — Show Transaction
- `GET /api/tiktok-shop/transactions/{transaction_id}` — Get Transaction
- `GET /api/tiktok-shop/webhook-events` — List Webhook Events
- `GET /api/tiktok-shop/webhook-events/stats` — Get Webhook Event Stats
- `GET /api/tiktok-shop/webhook-events/{tikTokShopWebhookEvent}` — Show Webhook Event
- `GET /api/tiktok-shop/webhook-test/status` — Webhook Test — Status
- `PATCH /api/tiktok-shop/integration-instances/{integration_instance_id}` — Update Integration Instance
- `PATCH /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}` — Update Integration Instance
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/fulfillments/submit-all` — Submit All Pending Fulfillments
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/fulfillments/submit-bulk` — Submit Bulk Fulfillments
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/fulfillments/{sales_order_fulfillment_id}/submit` — Submit Single Fulfillment
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/locations` — Refresh Locations from TikTok
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/bulk-archive` — Bulk Archive Orders
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/bulk-delete` — Bulk Delete Orders
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/bulk-delete-sku-orders` — Bulk Delete Linked SKU Orders
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/bulk-unarchive` — Bulk Unarchive Orders
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/create-sku-orders` — Create SKU Orders from TikTok Shop
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/refresh` — Refresh Orders from TikTok
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/refresh-one` — Refresh Single Order
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/update-sku-orders` — Update SKU Orders from TikTok Shop
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}/archive` — Archive Order
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}/submit-tracking` — Submit Tracking
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/orders/{order_id}/unarchive` — Unarchive Order
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/payment-method-mappings` — Upsert Payment Method Mapping
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/pre-start-date-orders/import` — Import Pre-Start-Date Orders
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/bulk-archive` — Bulk Archive Products
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/bulk-delete` — Bulk Delete Products
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/bulk-unarchive` — Bulk Unarchive Products
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/bulk-unmap` — Bulk Unmap Product SKUs
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/csv-mappings` — Upload CSV Mappings
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/sync` — Sync Products from TikTok
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}/archive` — Archive Product
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}/map` — Map Product SKU
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/products/{product_id}/unarchive` — Unarchive Product
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/refunds/sync` — Sync Refunds from TikTok
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/returns/sync` — Sync Returns from TikTok
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/shipping-method-mappings` — Upsert Shipping Method Mapping
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/transactions/sync` — Sync Transactions from TikTok
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/warehouse-mappings` — Upsert Warehouse Mapping
- `POST /api/tiktok-shop/integration-instances/{integration_instance_id}/webhook-test/process` — Webhook Test — Process (Replay)
- `POST /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/locations` — Refresh Locations
- `POST /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/orders/refresh` — Refresh Orders (Tracked)
- `POST /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/orders/{tikTokShopOrder}/submit-tracking` — Submit Tracking
- `POST /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/payment-method-mappings` — Upsert Payment Method Mapping
- `POST /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/products/sync` — Sync Products (Tracked)
- `POST /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/refunds/sync` — Sync Refunds (Tracked)
- `POST /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/returns/sync` — Sync Returns (Tracked)
- `POST /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/shipping-method-mappings` — Upsert Shipping Method Mapping
- `POST /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/transactions/sync` — Sync Transactions (Tracked)
- `POST /api/tiktok-shop/integration-instances/{tikTokShopIntegrationInstance}/warehouse-mappings` — Upsert Warehouse Mapping
- `POST /api/tiktok-shop/webhook-events/bulk-delete` — Bulk Delete Webhook Events
- `POST /api/tiktok-shop/webhook-events/bulk-process-pending` — Bulk Process Pending Webhook Events
- `POST /api/tiktok-shop/webhook-events/bulk-retry-failed` — Bulk Retry Failed Webhook Events
- `POST /api/tiktok-shop/webhook-events/{tikTokShopWebhookEvent}/process` — Process Webhook Event
- `POST /api/tiktok-shop/webhook-events/{tikTokShopWebhookEvent}/reprocess` — Reprocess Webhook Event
- `POST /api/tiktok-shop/webhooks` — Receive Webhook (TikTok → SKU.io)
- `PUT /api/tiktok-shop/integration-instances/{integration_instance_id}/mappings` — Update Field Mappings

_Spec version 1.0.0 → 1.0.0._
