---
title: API changes — 2026-06-10
description: This release includes 69 additions.
authors: [product-team]
tags: [added]
date: 2026-06-10
---

This release includes 69 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Products
- `GET /api/product-images/broken` — List Broken Product Images
- `POST /api/product-images/bulk-delete` — Bulk Delete Product Images
- `POST /api/product-images/mark-resolvable` — Mark Product Images Resolvable

### Reporting
- `POST /api/product-data-health/check-image-health` — Check Image Health
- `GET /api/product-data-health/metrics` — Get Product Data Health Metrics
- `GET /api/reporting/sales-tax/channel-responsibility` — Get Channel Tax Responsibility
- `PUT /api/reporting/sales-tax/channel-responsibility/{integrationInstance}` — Update Channel Tax Responsibility
- `GET /api/reporting/sales-tax/liability` — Get Sales Tax Liability
- `GET /api/reporting/sales-tax/liability/export` — Export Sales Tax Liability
- `GET /api/reporting/sales-tax/liability/transactions` — Get Sales Tax Transactions (Drill-Down)
- `GET /api/reporting/sales-tax/nexus` — Get Economic Nexus Exposure
- `POST /api/reporting/sales-tax/nexus/recompute` — Recompute Economic Nexus Exposure
- `GET /api/reporting/sales-tax/nexus/registrations` — List Sales-Tax Registrations
- `POST /api/reporting/sales-tax/nexus/registrations` — Create Sales-Tax Registration
- `DELETE /api/reporting/sales-tax/nexus/registrations/{taxNexusRegistration}` — Delete Sales-Tax Registration
- `PUT /api/reporting/sales-tax/nexus/registrations/{taxNexusRegistration}` — Update Sales-Tax Registration
- `GET /api/reporting/sales-tax/nexus/thresholds` — List Economic Nexus Thresholds
- `PUT /api/reporting/sales-tax/nexus/thresholds/{taxNexusThreshold}` — Update Economic Nexus Threshold

### Returns & RMAs
- `POST //{domain}/api/return-receipts/resolve-line-disposition` — Resolve Line Disposition (Station)
- `POST //{domain}/api/return-receipts/scan-resolve` — Resolve Scan (Station)
- `GET //{domain}/api/return-receipts/session-summary` — Get Session Summary (Station)
- `GET //{domain}/api/returns/analytics/by-disposition` — By Disposition
- `GET //{domain}/api/returns/analytics/by-product` — By Product
- `GET //{domain}/api/returns/analytics/by-reason` — By Reason
- `GET //{domain}/api/returns/analytics/summary` — Summary (KPIs)
- `GET //{domain}/api/returns/analytics/trend` — Trend
- `GET //{domain}/api/returns/inbox` — List Inbox
- `POST //{domain}/api/returns/inbox/bulk-link` — Bulk Link Returns
- `POST //{domain}/api/returns/inbox/match-now` — Match Returns Now
- `POST //{domain}/api/rmas/bulk/generate-from-orders` — Bulk Generate RMAs from Orders

### Roles & Permissions
- `GET /api/roles` — List Roles
- `POST /api/roles` — Create Role
- `GET /api/roles/permissions/grouped` — Get Permissions (Grouped)
- `DELETE /api/roles/{role}` — Delete Role
- `GET /api/roles/{role}` — Show Role
- `PUT /api/roles/{role}` — Update Role
- `PUT /api/users/{user}/roles` — Assign Roles to User

### Sales Channels
- `DELETE //{domain}/api/amazon/instances/{integrationInstance}/notification-subscriptions` — Tear Down All Subscriptions
- `GET //{domain}/api/amazon/instances/{integrationInstance}/notification-subscriptions` — List Notification Subscriptions (with health)
- `POST //{domain}/api/amazon/instances/{integrationInstance}/notification-subscriptions/resync` — Resync (Reconcile) Subscriptions
- `GET //{domain}/api/amazon/notification-events` — List Notification Events (audit log, paginated)
- `POST //{domain}/api/shopify/{integrationInstance}/access-token/resume` — Resume Invalid Access Token
- `GET //{domain}/api/shopify/{integrationInstance}/activity-log` — Get Instance Order Activity Log
- `POST //{domain}/api/shopify/{integrationInstance}/customer-pii-access/resume` — Resume Customer PII Access

### Shipping Providers
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/orders` — List Orders
- `POST //{domain}/api/starshipit/integration-instances/{integration_instance}/orders/sync` — Sync Orders (Queue Job)
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/orders/sync-info` — Get Order Sync Info
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/orders/sync-progress/{trackedJobLogId}` — Get Order Sync Progress
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/packages` — List Packages
- `GET //{domain}/api/starshipit/integration-instances/{integration_instance}/packages/{package}` — Get Package
- `POST /api/starshipit/integration-instances/{integration_instance}/orders/refresh-order` — Refresh Single Order (Download)
- `POST /api/starshipit/integration-instances/{integration_instance}/orders/search` — Search Orders
- `POST /api/starshipit/integration-instances/{integration_instance}/orders/{order}/tracking` — Refresh Order Tracking
- `GET /api/starshipit/integration-instances/{integration_instance}/shipping-methods` — List Shipping Method Mappings
- `PUT /api/starshipit/integration-instances/{integration_instance}/shipping-methods/bulk-map` — Bulk Map Carrier/Services
- `GET /api/starshipit/integration-instances/{integration_instance}/shipping-methods/export` — Export Mappings (CSV)
- `POST /api/starshipit/integration-instances/{integration_instance}/shipping-methods/import` — Import Mappings (CSV)
- `PUT /api/starshipit/integration-instances/{integration_instance}/shipping-methods/map` — Map Carrier/Service
- `DELETE /api/starshipit/integration-instances/{integration_instance}/shipping-methods/map/{code}` — Unmap Carrier/Service

### Workflow Credentials
- `GET /api/automation/workflow-credentials` — List Workflow Credentials
- `POST /api/automation/workflow-credentials` — Create Workflow Credential
- `GET /api/automation/workflow-credentials/lookup` — Lookup Workflow Credentials by Type
- `DELETE /api/automation/workflow-credentials/{uuid}` — Delete Workflow Credential
- `GET /api/automation/workflow-credentials/{uuid}` — Show Workflow Credential
- `PUT /api/automation/workflow-credentials/{uuid}` — Update Workflow Credential

### Workflow Templates
- `GET /api/automation/workflow-templates` — List Workflow Templates
- `GET /api/automation/workflow-templates/{slug}` — Show Workflow Template
- `POST /api/automation/workflow-templates/{slug}/instantiate` — Instantiate Workflow Template

### Workflow Webhooks
- `POST /api/automation/webhook/upload/{token}` — Webhook: File Upload

_Spec version 1.0.0 → 1.0.0._
