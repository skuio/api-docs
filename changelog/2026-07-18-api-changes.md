---
title: API changes — 2026-07-18
description: This release includes 88 additions, 1 removal. 1 breaking change — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-07-18
---

This release includes 88 additions, 1 removal. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Ledger (Accounting v2)
- **Removed** `POST /api/ledger/entries/resolve-from-transactions` — Resolve Ledger Entries From Transactions

## Added

### Contractors
- `PATCH /api/manufacturing/contractors/{supplier}` — Update Contractor

### Customers
- `GET /api/customers/{customer}/ar-communications` — List Customer AR Communications
- `GET /api/customers/{customer}/ar-summary` — Get Customer AR Summary
- `GET /api/customers/{customer}/receivables` — List Customer Receivables
- `POST /api/customers/{customer}/request-payment` — Request Customer Payment
- `POST /api/customers/{customer}/send-statement` — Send Customer Statement
- `GET /api/customers/{customer}/statement` — Get Customer Statement
- `GET /api/customers/{customer}/statement/export` — Export Customer Statement

### Documents
- `GET /api/documents` — List Documents for a Record
- `GET /api/documents/{documentId}/file` — Stream Document File

### Ledger (Accounting v2)
- `POST /api/ledger/close/periods/{period}/capture-provider-balances` — Capture Provider Trial Balances
- `GET /api/ledger/close/periods/{period}/sync-breakdown` — Sync Breakdown (why not synced)
- `GET /api/ledger/period-locks` — Get Lock Dates
- `POST /api/ledger/period-locks/apply-suggestion` — Apply Provider Lock Suggestion
- `PATCH /api/ledger/period-locks/provider/{connectionId}` — Toggle Provider Lock Enforcement
- `GET /api/ledger/reports/lock-date-exceptions` — List Lock Date Exceptions
- `GET /api/ledger/reports/lock-date-exceptions/summary` — Get Lock Date Exceptions Summary

### Payment Method Mappings
- `GET /api/magento2/integration-instances/{magento2IntegrationInstance}/payment-method-mappings` — List Payment Method Mappings
- `PUT /api/magento2/integration-instances/{magento2IntegrationInstance}/payment-method-mappings` — Bulk Replace Payment Method Mappings

### QuickBooks Online
- `POST /api/qbo/accounts/refresh-single` — Pull Account from QuickBooks
- `POST /api/qbo/accounts/refresh-tracked` — Refresh Accounts in Background
- `POST /api/qbo/accounts/search-qbo` — Search Accounts in QuickBooks
- `GET /api/qbo/accounts/sync-info` — Get Accounts Sync Info
- `POST /api/qbo/bills/refresh-single` — Pull Bill from QuickBooks
- `POST /api/qbo/bills/refresh-tracked` — Refresh Bills in Background
- `POST /api/qbo/bills/search-qbo` — Search Bills in QuickBooks
- `GET /api/qbo/bills/sync-info` — Get Bills Sync Info
- `POST /api/qbo/credit-memos/refresh-single` — Pull Credit Memo from QuickBooks
- `POST /api/qbo/credit-memos/refresh-tracked` — Refresh Credit Memos in Background
- `POST /api/qbo/credit-memos/search-qbo` — Search Credit Memos in QuickBooks
- `GET /api/qbo/credit-memos/sync-info` — Get Credit Memos Sync Info
- `POST /api/qbo/customers/refresh-single` — Pull Customer from QuickBooks
- `POST /api/qbo/customers/refresh-tracked` — Refresh Customers in Background
- `POST /api/qbo/customers/search-qbo` — Search Customers in QuickBooks
- `GET /api/qbo/customers/sync-info` — Get Customers Sync Info
- `POST /api/qbo/invoices/refresh-single` — Pull Invoice from QuickBooks
- `POST /api/qbo/invoices/refresh-tracked` — Refresh Invoices in Background
- `POST /api/qbo/invoices/search-qbo` — Search Invoices in QuickBooks
- `GET /api/qbo/invoices/sync-info` — Get Invoices Sync Info
- `POST /api/qbo/items/refresh-single` — Pull Item from QuickBooks
- `POST /api/qbo/items/refresh-tracked` — Refresh Items in Background
- `POST /api/qbo/items/search-qbo` — Search Items in QuickBooks
- `GET /api/qbo/items/sync-info` — Get Items Sync Info
- `POST /api/qbo/journals/refresh-single` — Pull Journal from QuickBooks
- `POST /api/qbo/journals/refresh-tracked` — Refresh Journals in Background
- `POST /api/qbo/journals/search-qbo` — Search Journals in QuickBooks
- `GET /api/qbo/journals/sync-info` — Get Journals Sync Info
- `POST /api/qbo/payments/refresh-single` — Pull Payment from QuickBooks
- `POST /api/qbo/payments/refresh-tracked` — Refresh Payments in Background
- `POST /api/qbo/payments/search-qbo` — Search Payments in QuickBooks
- `GET /api/qbo/payments/sync-info` — Get Payments Sync Info
- `POST /api/qbo/purchase-orders/refresh-single` — Pull Purchase Order from QuickBooks
- `POST /api/qbo/purchase-orders/refresh-tracked` — Refresh Purchase Orders in Background
- `POST /api/qbo/purchase-orders/search-qbo` — Search Purchase Orders in QuickBooks
- `GET /api/qbo/purchase-orders/sync-info` — Get Purchase Orders Sync Info
- `POST /api/qbo/tax-codes/refresh-single` — Pull Tax Code from QuickBooks
- `POST /api/qbo/tax-codes/refresh-tracked` — Refresh Tax Codes in Background
- `POST /api/qbo/tax-codes/search-qbo` — Search Tax Codes in QuickBooks
- `GET /api/qbo/tax-codes/sync-info` — Get Tax Codes Sync Info
- `POST /api/qbo/tax-rates/refresh-single` — Pull Tax Rate from QuickBooks
- `POST /api/qbo/tax-rates/refresh-tracked` — Refresh Tax Rates in Background
- `POST /api/qbo/tax-rates/search-qbo` — Search Tax Rates in QuickBooks
- `GET /api/qbo/tax-rates/sync-info` — Get Tax Rates Sync Info
- `POST /api/qbo/vendors/refresh-single` — Pull Vendor from QuickBooks
- `POST /api/qbo/vendors/refresh-tracked` — Refresh Vendors in Background
- `POST /api/qbo/vendors/search-qbo` — Search Vendors in QuickBooks
- `GET /api/qbo/vendors/sync-info` — Get Vendors Sync Info

### Reporting
- `GET /api/reporting/profitability/indirect-cost-drilldown` — Get Indirect Cost Drilldown
- `GET /api/reporting/profitability/indirect-cost-types` — List Indirect Cost Types

### Shopify
- `GET /api/shopify/payout-mapping-groups` — List Global Payout Mapping Groups
- `POST /api/shopify/payout-mapping-groups` — Create Global Payout Mapping Group
- `POST /api/shopify/payout-mapping-groups/reorder` — Reorder Global Payout Mapping Groups
- `DELETE /api/shopify/payout-mapping-groups/{payoutMappingGroup}` — Delete Global Payout Mapping Group
- `PUT /api/shopify/payout-mapping-groups/{payoutMappingGroup}` — Update Global Payout Mapping Group
- `GET /api/shopify/{integrationInstance}/payout-finance-settings` — Get Payout Finance Settings
- `PUT /api/shopify/{integrationInstance}/payout-finance-settings` — Update Payout Finance Settings
- `GET /api/shopify/{integrationInstance}/payout-mapping-groups` — List Payout Mapping Groups
- `POST /api/shopify/{integrationInstance}/payout-mapping-groups` — Create Payout Mapping Group
- `POST /api/shopify/{integrationInstance}/payout-mapping-groups/reorder` — Reorder Payout Mapping Groups
- `DELETE /api/shopify/{integrationInstance}/payout-mapping-groups/{payoutMappingGroup}` — Delete Payout Mapping Group
- `PUT /api/shopify/{integrationInstance}/payout-mapping-groups/{payoutMappingGroup}` — Update Payout Mapping Group
- `GET /api/shopify/{integrationInstance}/payout-type-mappings` — List Payout Type Mappings
- `PUT /api/shopify/{integrationInstance}/payout-type-mappings` — Update Payout Type Mappings
- `PUT /api/shopify/{integrationInstance}/payout-type-mappings/bulk-assign` — Bulk Assign Payout Type Mappings
- `GET /api/shopify/{integrationInstance}/payouts` — List Payouts
- `GET /api/shopify/{integrationInstance}/payouts/filter-options` — Get Payout Filter Options
- `POST /api/shopify/{integrationInstance}/payouts/sync` — Sync Payouts
- `GET /api/shopify/{integrationInstance}/payouts/{payout}` — Get Payout

_Spec version 1.0.0 → 1.0.0._
