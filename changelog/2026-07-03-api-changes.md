---
title: API changes — 2026-07-03
description: This release 35 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-07-03
---

This release 35 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE //{domain}/api/odoo-3pl/{integration_instance}` — Delete Integration Instance
- `GET //{domain}/api/odoo-3pl/{integration_instance}` — Show Integration Instance
- `GET //{domain}/api/odoo-3pl/{integration_instance}/activity-log` — Get Activity Log
- `GET //{domain}/api/odoo-3pl/{integration_instance}/dashboard` — Get Dashboard Metrics
- `GET //{domain}/api/odoo-3pl/{integration_instance}/inventory` — List Inventory Levels
- `GET //{domain}/api/odoo-3pl/{integration_instance}/locations` — List Locations
- `GET //{domain}/api/odoo-3pl/{integration_instance}/orders` — List Orders
- `GET //{domain}/api/odoo-3pl/{integration_instance}/orders/{orderId}` — Show Order
- `GET //{domain}/api/odoo-3pl/{integration_instance}/orders/{orderId}/raw` — Get Raw Order Payload
- `GET //{domain}/api/odoo-3pl/{integration_instance}/products` — List Products
- `GET //{domain}/api/odoo-3pl/{integration_instance}/products/{productId}` — Show Product
- `GET //{domain}/api/odoo-3pl/{integration_instance}/products/{productId}/raw` — Get Raw Product Payload
- `GET //{domain}/api/odoo-3pl/{integration_instance}/receipts` — List Receipts
- `GET //{domain}/api/odoo-3pl/{integration_instance}/receipts/{receiptId}` — Show Receipt
- `GET //{domain}/api/odoo-3pl/{integration_instance}/shipments` — List Shipments
- `GET //{domain}/api/odoo-3pl/{integration_instance}/shipments/{shipmentId}` — Show Shipment
- `GET //{domain}/api/odoo-3pl/{integration_instance}/shipments/{shipmentId}/raw` — Get Raw Shipment Payload
- `GET /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}` — Get Portal Data
- `POST //{domain}/api/odoo-3pl` — Create Integration Instance
- `POST //{domain}/api/odoo-3pl/test-connection` — Test Connection (Unsaved Credentials)
- `POST //{domain}/api/odoo-3pl/{integration_instance}/inventory/sync` — Sync Inventory
- `POST //{domain}/api/odoo-3pl/{integration_instance}/locations/sync` — Sync Locations
- `POST //{domain}/api/odoo-3pl/{integration_instance}/orders/sync` — Sync Orders
- `POST //{domain}/api/odoo-3pl/{integration_instance}/products/push` — Push Products (Bulk)
- `POST //{domain}/api/odoo-3pl/{integration_instance}/products/sync` — Sync Products
- `POST //{domain}/api/odoo-3pl/{integration_instance}/products/{skuProductId}/push` — Push Single Product
- `POST //{domain}/api/odoo-3pl/{integration_instance}/receipts/sync` — Sync Receipts
- `POST //{domain}/api/odoo-3pl/{integration_instance}/shipments/sync` — Sync Shipments
- `POST //{domain}/api/odoo-3pl/{integration_instance}/test-connection` — Test Connection (Saved Credentials)
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/submit-verification` — Submit Verification
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/verify-all-products` — Verify All Products
- `POST /api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/verify-product` — Verify Product
- `PUT //{domain}/api/odoo-3pl/{integration_instance}` — Update Integration Instance
- `PUT //{domain}/api/odoo-3pl/{integration_instance}/locations/{locationId}/mapping` — Set Location Warehouse Mapping
- `PUT //{domain}/api/odoo-3pl/{integration_instance}/products/{productId}/mapping` — Set Product Mapping

_Spec version 1.0.0 → 1.0.0._
