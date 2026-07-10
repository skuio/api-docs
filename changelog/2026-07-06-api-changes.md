---
title: API changes — 2026-07-06
description: This release includes 13 additions, 61 removals. 61 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-07-06
---

This release includes 13 additions, 61 removals. 61 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Accounting Integrations
- **Removed** `GET //{domain}/api/export/xero/accounts` — Export Accounts
- **Removed** `GET //{domain}/api/xero/accounts` — List Accounts

#### Adjustments & Transfers
- **Removed** `GET /api/inventory-adjustments` — List Inventory Adjustments

#### Configuration
- **Removed** `GET /api/financial-alerts` — List Financial Alerts
- **Removed** `GET /api/incoterms` — List Incoterms
- **Removed** `GET /api/nominal-codes` — List Nominal Codes (DataTable)

#### Costing
- **Removed** `GET /api/fifo-layers` — List FIFO Layers (DataTable)

#### CSV Templates
- **Removed** `GET /api/csv-templates` — List CSV Templates

#### Custom Fields
- **Removed** `GET //{domain}/api/custom-fields` — List Custom Fields
- **Removed** `GET /api/custom-fields` — List Custom Fields

#### Financials
- **Removed** `GET /api/financials/daily-summary` — List Daily Financial Summaries
- **Removed** `GET /api/financials/sales-order-lines` — List Sales Order Line Financials

#### Getting Started
- **Removed** `GET /api/auth/user` — Verify Token

#### Jobs & Logs
- **Removed** `GET /api/tracked-job-logs` — List Tracked Job Logs

#### Misc
- **Removed** `GET /api/constants` — List Constants
- **Removed** `PUT /api/custom-field-values/{entity}/{entityId}` — Update Custom Field Values
- **Removed** `GET /api/integration-instances` — List Integration Instances
- **Removed** `GET /api/inventory-management` — Inventory Management Settings
- **Removed** `GET /api/lookup` — Lookup
- **Removed** `POST /api/password/change` — Change Password
- **Removed** `GET /api/sales-channels` — List Sales Channels
- **Removed** `GET /api/users` — List Users
- **Removed** `GET /api/webhooks` — List Webhooks
- **Removed** `POST /api/webhooks` — Create Webhook
- **Removed** `DELETE /api/webhooks/{webhook}` — Delete Webhook
- **Removed** `GET /api/webhooks/{webhook}` — Show Webhook
- **Removed** `PUT /api/webhooks/{webhook}` — Update Webhook

#### Organization
- **Removed** `GET //{protocol}{domain}/api/product-brands` — List Product Brands
- **Removed** `GET /api/attribute-groups` — List Attribute Groups (DataTable)
- **Removed** `GET /api/attributes` — List Attributes (DataTable)
- **Removed** `GET /api/categories` — List Categories (DataTable)
- **Removed** `GET /api/product-brands` — List Product Brands

#### Pricing
- **Removed** `GET /api/product-pricing-tiers` — List Pricing Tiers (DataTable)

#### Products
- **Removed** `GET //{domain}/api/products` — List Products
- **Removed** `GET //{domain}/api/products/import/fields` — Get Import Fields
- **Removed** `GET //{domain}/api/products/import/template` — Download Import Template
- **Removed** `POST //{domain}/api/products/import/validate` — Validate Import
- **Removed** `GET //{domain}/api/products/{productId}/fifo-layers` — Get Product FIFO Layers
- **Removed** `GET /api/products` — List Products
- **Removed** `GET /api/products/import/fields` — Get Import Fields
- **Removed** `GET /api/products/import/template` — Download Import Template
- **Removed** `POST /api/products/import/validate` — Validate Import
- **Removed** `GET /api/products/{productId}/fifo-layers` — Get Product FIFO Layers

#### Sales Channels
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/awd/ledgers` — List AWD Ledgers
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/awd/shipments` — List AWD Shipments
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/fba-inventory` — List FBA Inventory
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/finances/event-groups` — List Financial Event Groups
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/finances/settlement-data` — List Settlement Data
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/inbound/shipments` — List Inbound Shipments
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/inbound/shipments/export` — Export Inbound Shipments
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/initial-inventory` — List Initial Inventory
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/ledger-summaries` — List Ledger Summaries
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/new-inbound/shipments` — List New Inbound Shipments
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/removal-orders` — List Removal Orders (DataTable)
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/removal-orders/export` — Export Removal Orders (CSV/XLSX)
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/removal-shipments` — List Removal Shipments (DataTable)
- **Removed** `GET //{domain}/api/amazon/{integrationInstance}/removal-shipments/export` — Export Removal Shipments

#### Shipping Providers
- **Removed** `GET //{domain}/api/shipmyorders/invoices` — List Invoices

#### Stock Takes
- **Removed** `GET /api/stock-takes` — DataTable Index

#### Stores
- **Removed** `GET /api/stores` — List Stores

#### Tags
- **Removed** `GET /api/tags` — List Tags

## Added

### Integration Instances
- `PATCH /api/integration-instances/{integration_instance}/sync-controls` — Update Sync Controls
- `POST /api/integration-instances/{integration_instance}/sync-controls/pause` — Pause Sync Schedule
- `POST /api/integration-instances/{integration_instance}/sync-controls/resume` — Resume Sync Schedule

### Sales Channels
- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment` — Show Fulfillment Packet
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment` — Build Fulfillment Packet
- `PUT //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment` — Update Fulfillment Packet
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment/documents/sync-labels` — Sync Label Documents
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment/email` — Send 3PL Email
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment/email/preview` — Preview 3PL Email
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment/portal-token/rotate` — Rotate Portal Link
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment/send` — Send Fulfillment Order
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/list-prep-details` — List Prep Details

### WFS
- `GET /api/walmart/{integrationInstance}/wfs/inbound-shipments/{shipment}/carrier-rate-quote` — Show Existing WFS Inbound Carrier Rate Quote

_Spec version 1.0.0 → 1.0.0._
