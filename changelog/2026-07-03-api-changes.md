---
title: API changes — 2026-07-03
description: This release includes 44 additions, 2 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-07-03
---

This release includes 44 additions, 2 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Ledger (Accounting v2)
- `GET /api/ledger/entries/{entry}/attachment-sync` — Get Journal Entry Attachment Sync
- `POST /api/ledger/entries/{entry}/clear-errors` — Clear Sync Errors (synchronous)

### Payments & Refunds
- `POST /api/vendor-deposits/{vendorDepositId}/scan-proof` — Scan Payment Proof (OCR)
- `POST /api/vendor-deposits/{vendorDepositId}/send-remittance` — Send Remittance Advice

### Sales Channels
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/list` — List Draft Plans (Drafts Tab)
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}` — Get Portal Data
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/submit-verification` — Submit Verification
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/verify-all-products` — Verify All Products
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/portal/{hashedDraftInboundPlanId}/verify-product` — Verify Product
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/inbound-products` — Search Inbound Products (Plan Context)
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/lookup-by-mskus` — Lookup Inbound Products by Identifiers (Bulk Add)
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/placement-transport-estimates` — Get Placement Transport Estimates

### Shipping Providers
- `POST //{domain}/api/odoo-3pl` — Create Integration Instance
- `POST //{domain}/api/odoo-3pl/test-connection` — Test Connection (Unsaved Credentials)
- `DELETE //{domain}/api/odoo-3pl/{integration_instance}` — Delete Integration Instance
- `GET //{domain}/api/odoo-3pl/{integration_instance}` — Show Integration Instance
- `PUT //{domain}/api/odoo-3pl/{integration_instance}` — Update Integration Instance
- `GET //{domain}/api/odoo-3pl/{integration_instance}/activity-log` — Get Activity Log
- `GET //{domain}/api/odoo-3pl/{integration_instance}/dashboard` — Get Dashboard Metrics
- `GET //{domain}/api/odoo-3pl/{integration_instance}/inventory` — List Inventory Levels
- `POST //{domain}/api/odoo-3pl/{integration_instance}/inventory/sync` — Sync Inventory
- `GET //{domain}/api/odoo-3pl/{integration_instance}/locations` — List Locations
- `POST //{domain}/api/odoo-3pl/{integration_instance}/locations/sync` — Sync Locations
- `PUT //{domain}/api/odoo-3pl/{integration_instance}/locations/{locationId}/mapping` — Set Location Warehouse Mapping
- `GET //{domain}/api/odoo-3pl/{integration_instance}/orders` — List Orders
- `POST //{domain}/api/odoo-3pl/{integration_instance}/orders/sync` — Sync Orders
- `GET //{domain}/api/odoo-3pl/{integration_instance}/orders/{orderId}` — Show Order
- `GET //{domain}/api/odoo-3pl/{integration_instance}/orders/{orderId}/raw` — Get Raw Order Payload
- `GET //{domain}/api/odoo-3pl/{integration_instance}/products` — List Products
- `POST //{domain}/api/odoo-3pl/{integration_instance}/products/push` — Push Products (Bulk)
- `POST //{domain}/api/odoo-3pl/{integration_instance}/products/sync` — Sync Products
- `GET //{domain}/api/odoo-3pl/{integration_instance}/products/{productId}` — Show Product
- `PUT //{domain}/api/odoo-3pl/{integration_instance}/products/{productId}/mapping` — Set Product Mapping
- `GET //{domain}/api/odoo-3pl/{integration_instance}/products/{productId}/raw` — Get Raw Product Payload
- `POST //{domain}/api/odoo-3pl/{integration_instance}/products/{skuProductId}/push` — Push Single Product
- `GET //{domain}/api/odoo-3pl/{integration_instance}/receipts` — List Receipts
- `POST //{domain}/api/odoo-3pl/{integration_instance}/receipts/sync` — Sync Receipts
- `GET //{domain}/api/odoo-3pl/{integration_instance}/receipts/{receiptId}` — Show Receipt
- `GET //{domain}/api/odoo-3pl/{integration_instance}/shipments` — List Shipments
- `POST //{domain}/api/odoo-3pl/{integration_instance}/shipments/sync` — Sync Shipments
- `GET //{domain}/api/odoo-3pl/{integration_instance}/shipments/{shipmentId}` — Show Shipment
- `GET //{domain}/api/odoo-3pl/{integration_instance}/shipments/{shipmentId}/raw` — Get Raw Shipment Payload
- `POST //{domain}/api/odoo-3pl/{integration_instance}/test-connection` — Test Connection (Saved Credentials)

### Vendor Deposits
- `GET /api/vendor-deposits/payment-request-routing` — Payment Request Routing Preview

## Changed

### Sales Channels
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/submit-to-amazon` — Submit Plan to Amazon
  - new response code(s): `422`
- `GET //{domain}/api/tiktok-shop/integration-instances/{integration_instance_id}/transactions/{transaction_id}/raw` — Get Raw Transaction from TikTok
  - new response code(s): `403`, `422`

_Spec version 1.0.0 → 1.0.0._
