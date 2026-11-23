---
title: API changes — 2026-11-23
description: This release includes 823 additions, 19 changes, 1 removal. 7 breaking changes — action required.
authors: [product-team]
tags: [added, changed, removed, breaking]
date: 2026-11-23
---

This release includes 823 additions, 19 changes, 1 removal. 7 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Horizon
- **Removed** `GET /horizon-restart` — Restart Horizon

### Incompatible changes

#### Costing
- **Changed** `GET /api/fifo-layers/{id}/inventory-movements` — Get FIFO Layer Inventory Movements
  - removed parameter(s): `page`, `per_page`

#### Inventory Intelligence
- **Changed** `GET /api/inventory-forecasting/anomalies` — List Demand Anomalies
  - new parameter(s): `product_ids[]`
  - removed parameter(s): `product_id`
  - new response code(s): `422`

#### Suppliers
- **Changed** `GET /api/supplier-inventories/list` — List Supplier Inventories (Lookup)
  - removed parameter(s): `filter[supplier_id]`, `per_page`
- **Changed** `GET /api/v2/suppliers` — List Suppliers
  - removed parameter(s): `page`, `per_page`

#### Trackstar
- **Changed** `GET /api/trackstar/integration-instances/{integration_instance}/bills` — List Bills
  - removed parameter(s): `page`, `per_page`

#### WooCommerce
- **Changed** `GET /api/woo-commerce/{id}/customers` — List WooCommerce Customers
  - removed parameter(s): `filter[search]`, `page`, `per_page`

## Added

### Agent Console
- `DELETE /api/support/agent/status/incidents/{id}/updates/{updateId}` — Delete Status Incident Update

### Amazon
- `GET /api/amazon/traffic-report` — Get Amazon Traffic & Conversion Report
- `GET /api/amazon/unified/deferred-adjustments/settings/{integrationInstance}` — Get Deferred Transactions Settings
- `GET /api/amazon/unified/deferred-adjustments/summary` — Get Deferred Transactions Summary
- `GET /api/amazon/unified/deferred-adjustments/transactions` — List Deferred Transactions
- `GET /api/amazon/unified/deferred-adjustments/transactions/export` — Export Deferred Transactions
- `DELETE /api/amazon/unified/deferred-adjustments/transactions/{amazonTransaction}/resolution` — Clear Deferred Transaction Resolution
- `GET /api/amazon/unified/deferred-adjustments/transactions/{amazonTransaction}/resolution/settlements` — List Deferred Transaction Release Settlements
- `GET /api/amazon/unified/deferred-adjustments/{adjustment}/lines` — Get Deferred Adjustment Journal Lines
- `GET /api/amazon/unified/stranded-inventory` — List Stranded Inventory
- `GET /api/amazon/unified/stranded-inventory/export` — Export Stranded Inventory
- `GET /api/amazon/unified/stranded-inventory/reasons` — List Stranded Inventory Reasons
- `GET /api/amazon/unified/stranded-inventory/summary` — Get Stranded Inventory Summary
- `GET /api/amazon/{integrationInstance}/awd/replenishment-orders` — List AWD Replenishment Orders
- `GET /api/amazon/{integrationInstance}/awd/replenishment-orders/export` — Export AWD Replenishment Orders
- `GET /api/amazon/{integrationInstance}/awd/replenishment-orders/meta` — Get AWD Replenishment Status
- `GET /api/amazon/{integrationInstance}/awd/replenishment-orders/{replenishmentOrder}` — Get AWD Replenishment Order
- `GET /api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/expiration-defaults` — Get Item Expiration Defaults
- `GET /api/amazon/{integrationInstance}/traffic-coverage` — Get Amazon Traffic Coverage
- `GET /api/amazon/{integrationInstance}/virtual-bundles` — List Amazon Virtual Bundles
- `GET /api/amazon/{integrationInstance}/virtual-bundles/export` — Export Amazon Virtual Bundles
- `GET /api/amazon/{integrationInstance}/virtual-bundles/suggestions` — List Amazon Virtual Bundle Suggestions
- `GET /api/amazon/{integrationInstance}/virtual-bundles/suggestions/export` — Export Amazon Virtual Bundle Suggestions
- `DELETE /api/amazon/{integrationInstance}/virtual-bundles/{virtualBundle}` — Unmark Amazon Virtual Bundle
- `GET /api/amazon/{integrationInstance}/virtual-bundles/{virtualBundle}` — Get Amazon Virtual Bundle

### Authorize.net
- `GET /api/authorize-net/integrations` — List Authorize.net Accounts
- `DELETE /api/authorize-net/integrations/{id}` — Delete Authorize.net Account
- `GET /api/authorize-net/integrations/{id}` — Get Authorize.net Account
- `GET /api/authorize-net/integrations/{id}/sync-status` — Get Authorize.net Sync Status
- `GET /api/authorize-net/integrations/{id}/transactions` — List Authorize.net Transactions
- `GET /api/authorize-net/integrations/{id}/webhook-events` — List Authorize.net Webhook Events
- `GET /api/authorize-net/payment-links` — List Authorize.net Payment Links
- `GET /api/authorize-net/transactions/{id}` — Get Authorize.net Transaction
- `GET /api/authorize-net/transactions/{id}/refund-context` — Get Authorize.net Refund Context

### Calendar Connections
- `GET /api/calendar/connections` — List Calendar Connections
- `DELETE /api/calendar/connections/{connection}` — Disconnect Calendar Connection
- `GET /api/calendar/connections/{connection}` — Get Calendar Connection
- `GET /api/calendar/connections/{connection}/calendars` — List Calendars on a Connection

### Claims
- `GET /api/claims` — List Claims
- `GET /api/claims/kpis` — Get Claim KPIs
- `GET /api/claims/lookup` — Find Claims for Records
- `GET /api/claims/prefill` — Get Suggested Claim Values
- `DELETE /api/claims/{claim}` — Delete Claim
- `GET /api/claims/{claim}` — Get Claim
- `DELETE /api/claims/{claim}/recoveries/{recovery}` — Delete Claim Recovery

### Costing
- `DELETE /api/inventory/write-downs/{inventoryWriteDown}` — Delete Inventory Write-Down

### CRM
- `GET /api/crm/activities` — List Activities
- `GET /api/crm/activities/export` — Export Activities
- `GET /api/crm/activities/import/errors/{token}` — Download Activity Import Error File
- `GET /api/crm/activities/import/template` — Download Activity Import Template
- `DELETE /api/crm/activities/{activity}` — Delete Activity
- `GET /api/crm/activities/{activity}` — Get Activity
- `GET /api/crm/activities/{activity}/comments` — List Activity Comments
- `GET /api/crm/buying-matrix` — Get Buying Matrix
- `DELETE /api/crm/trips/{trip}` — Delete Trip

### Customers
- `DELETE /api/customer-classifications/{kind}/{option}` — Delete Customer Territory Or Industry
- `DELETE /api/customers/{customer}/documents/{document}` — Delete Customer Document

### Freight
- `DELETE /api/freight/connections/{id}` — Delete Freight Connection

### Gorgias
- `DELETE /api/integrations/gorgias/{gorgiasInstance}` — Disconnect Gorgias

### Info Pages
- `GET /api/admin/portal/pages` — List Info Pages
- `DELETE /api/admin/portal/pages/{page}` — Delete Info Page

### Inventory Feed API
- `DELETE /api/supplier-portal/feed/tokens/{token}` — Revoke Feed Token

### Invite Codes
- `GET /api/admin/portal/invite-codes` — List Invite Codes
- `DELETE /api/admin/portal/invite-codes/{inviteCode}` — Delete Invite Code
- `GET /api/admin/portal/invite-codes/{inviteCode}` — Get Invite Code
- `GET /api/admin/portal/invite-codes/{inviteCode}/redemptions` — List Invite Code Redemptions

### Label Batches
- `DELETE /api/shipping-label-batches/{shippingLabelBatch}` — Delete Label Batch
- `DELETE /api/shipping-label-batches/{shippingLabelBatch}/items` — Remove Label Batch Items

### Ledger (Accounting v2)
- `DELETE /api/ledger/tie-out/exceptions/{exception}/accept` — Revoke Tie-Out Acceptance

### Lot Compliance
- `DELETE /api/v2/fifo-layers/{fifoLayer}/retention-samples/{sample}/submissions/{submission}` — Delete Retention Sample Submission

### Organization
- `DELETE /api/categories/{category}/image` — Delete Category Image
- `DELETE /api/product-brands/{productBrand}/logo` — Delete Product Brand Logo

### Packing
- `DELETE /api/v2/pack/sessions/{packSession}` — Abandon Pack Session

### Payment Methods
- `DELETE /api/portal/payment-methods/{paymentMethod}` — Delete Payment Method

### Performance
- `GET /api/advertising/performance/scope-options` — List Advertising Scope Options

### Pricing
- `GET /api/admin/portal/pricing/quantity-break-products` — List Products With Quantity Breaks
- `DELETE /api/pricing-tier-ladders/{ladder}` — Delete Spend Ladder

### Product Launches
- `DELETE /api/v2/product-launch-items/{productLaunchItem}` — Delete Product Launch Item

### Products
- `DELETE /api/products/tracked` — Bulk Delete Products (Tracked)
- `DELETE /api/products/{product}/sku-aliases/{productSkuAlias}` — Remove Product Previous SKU
- `DELETE /api/v2/products/{product}/documents/{document}` — Delete Product Document

### Purchase Orders
- `DELETE /api/v2/po-reservations/{allocation}` — Delete PO Reservation

### QuickBooks Desktop
- `DELETE /api/qbd/{integrationInstance}` — Disconnect QuickBooks Desktop

### Reporting
- `DELETE /api/settings/discount-price-type-rules/{rule}` — Delete Discount Price Type Rule

### Rithum DSCO
- `DELETE /api/dsco/{integrationInstance}` — Delete Rithum DSCO Integration

### Sales Orders
- `DELETE /api/sales-orders/{salesOrder}/support-tickets/{supportTicketLink}` — Unlink Support Ticket from Sales Order

### Sales Rep Groups
- `DELETE /api/sales-rep-groups/{sales_rep_group}` — Delete Sales Rep Group

### Sales Rep Targets
- `DELETE /api/sales-rep-targets/{salesRepTarget}` — Delete Sales Rep Target

### Scorecard, Profile & Documents
- `DELETE /api/supplier-portal/documents/{document}` — Delete Document
- `DELETE /api/supplier-portal/profile/contacts/{contact}` — Delete Contact

### Stock Takes
- `DELETE /api/v2/warehouse-location-pick-holds/{warehouseLocationPickHold}` — Release Bin Pick Hold

### Storefront
- `GET /api/admin/portal/storefront` — Get Portal Storefront
- `GET /api/admin/portal/storefront/link-targets` — List Storefront Link Targets

### Suppliers
- `DELETE /api/supplier-closures/{supplierClosure}` — Delete Supplier Closure
- `DELETE /api/supplier-hold-reasons/{supplier_hold_reason}` — Delete Supplier Hold Reason
- `DELETE /api/supplier-products/{supplier_product}/availability-hold` — End Supplier Product Availability Hold
- `DELETE /api/suppliers/{supplier}/portal/inventory-feed/tokens/{token}` — Revoke Supplier Feed Token

### Wishlist
- `DELETE /api/portal/wishlist/items/{product}` — Remove Product from Wishlist

### WooCommerce
- `DELETE /api/woo-commerce/{integrationInstance}/webhook-events/bulk-delete` — Bulk Delete Webhook Events
- `DELETE /api/woo-commerce/{integrationInstance}/webhook-events/delete-all` — Delete All Webhook Events

_…plus 723 more (see the API reference)._

## Changed

### Amazon
- `POST /api/amazon/{integrationInstance}/products/{product}/map` — Map Single Product to SKU.io Product
  - new response code(s): `400`

### Applications
- `GET /api/admin/portal/applications/approval-defaults` — Get Approval Defaults
  - new response code(s): `404`

### Billing & Invoices
- `POST /api/portal/invoices/pay` — Pay Invoices
  - new response code(s): `201`
  - removed response code(s): `200`

### Fulfillments
- `PUT /api/sales-order-fulfillments/{salesOrderFulfillment}` — Fulfill or Update Shipment
  - new response code(s): `400`

### Guest Quote Requests
- `GET /api/portal/guest/catalog/products` — List Guest Catalog Products
  - new response code(s): `422`

### Integration Instances
- `DELETE /api/integration-instances/{integration_instance}` — Delete Integration Instance
  - new response code(s): `400`

### Lists & Reorder
- `DELETE /api/portal/lists/{list}` — Delete Saved List
  - new response code(s): `422`

### Lot Compliance
- `GET /api/v2/compliance-documents/{document}/file` — Download Compliance Document
  - removed response code(s): `200`

### Product Listings
- `PUT /api/integration-instances/{integrationInstance}/channel-attribute-mappings` — Update Channel Attribute Mappings
  - new response code(s): `409`

### SPS Commerce
- `GET /api/spscommerce/{integrationInstance}/documents/{document}/download` — Download EDI Document
  - removed response code(s): `422`

### Trackstar
- `DELETE /api/trackstar/integration-instances/{integration_instance}` — Delete Integration Instance
  - new response code(s): `422`
- `GET /api/trackstar/integration-instances/{integration_instance}/bills/summary` — Bills Summary
  - new response code(s): `422`
- `POST /api/trackstar/integration-instances/{integration_instance}/bills/sync` — Sync Bills
  - new response code(s): `202`, `501`
  - removed response code(s): `200`

_Spec version 1.0.0 → 1.0.0._
