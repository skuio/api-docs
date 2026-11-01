---
title: API changes — 2026-11-01
description: This release includes 204 additions.
authors: [product-team]
tags: [added]
date: 2026-11-01
---

This release includes 204 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Amazon Min/Max Allowed Price
- `DELETE /api/v2/sales-channels/{integrationInstance}/prices/amazon-allowed-price/overrides` — Delete Amazon Min/Max Exceptions

### Automation Settings
- `GET /api/advertising/automation-settings` — Get Ad Automation Settings

### Bulk Actions & Bulksheets
- `GET /api/advertising/bulksheets/export` — Export Advertising Bulksheet
- `GET /api/advertising/bulksheets/imports` — List Bulksheet Imports
- `GET /api/advertising/bulksheets/imports/{bulksheetImport}` — Get Bulksheet Import

### Campaigns
- `GET /api/advertising/campaigns` — List Campaigns
- `GET /api/advertising/campaigns/{campaign}/ad-groups` — List Campaign Ad Groups
- `GET /api/advertising/campaigns/{campaign}/items` — List Campaign Items
- `GET /api/advertising/campaigns/{campaign}/targets` — List Campaign Targets

### Change Sets
- `GET /api/advertising/change-sets` — List Change Sets
- `GET /api/advertising/change-sets/{changeSet}` — Get Change Set
- `GET /api/advertising/entities/{type}/{id}/history` — Get Ad Entity Change History

### Connections
- `GET /api/advertising/accounts` — List Ad Accounts
- `GET /api/advertising/accounts/{adAccount}` — Get Ad Account
- `GET /api/advertising/connections` — List Ad Platform Connections
- `DELETE /api/advertising/connections/{integrationInstance}` — Disconnect Ad Platform Connection
- `GET /api/advertising/connections/{platform}/authorization-url` — Get Ad Platform Authorization URL
- `GET /api/advertising/meta-ads/authorization-url` — Get Meta Ads Authorization URL
- `GET /api/advertising/tiktok-ads/authorization-url` — Get TikTok Ads Authorization URL
- `GET /api/advertising/unmapped-items` — List Unmapped Ad Items

### Decisions
- `GET /api/advertising/decisions` — List Advertising Decisions
- `GET /api/advertising/decisions/{type}/{id}/evidence` — Get Decision Evidence

### Goals
- `GET /api/advertising/goal-suggestions` — List Goal Suggestions
- `GET /api/advertising/goals` — List Product Goals
- `DELETE /api/advertising/goals/products/{product}` — Reset Product Goal
- `GET /api/advertising/goals/products/{product}` — Get Product Goal
- `GET /api/advertising/goals/settings` — Get Goal Settings

### Guardrails
- `GET /api/advertising/guardrail-policies` — List Guardrail Policies
- `GET /api/advertising/guardrail-policies/impact` — Get Guardrail Policy Impact
- `GET /api/advertising/guardrail-policies/resolve` — Resolve Guardrail Policy
- `DELETE /api/advertising/guardrail-policies/{policy}` — Delete Guardrail Policy
- `GET /api/advertising/products` — List Ad Health Products
- `GET /api/advertising/products/{product}` — Get Ad Health Product
- `GET /api/advertising/signals` — List Guardrail Signals

### Labels & Portfolios
- `GET /api/advertising/labels` — List Ad Labels
- `DELETE /api/advertising/labels/{label}` — Delete Ad Label
- `GET /api/advertising/labels/{label}` — Get Ad Label
- `GET /api/advertising/labels/{label}/scope` — Get Ad Label Scope
- `GET /api/advertising/portfolios` — List Ad Portfolios

### Launch
- `GET /api/advertising/launch/preview/{trackedJobLogId}` — Get Launch Preview Result
- `GET /api/advertising/launch/recommendations` — Get Launch Keyword Recommendations
- `GET /api/advertising/launch/templates` — List Launch Templates
- `GET /api/advertising/launches` — List Launches
- `GET /api/advertising/launches/{launch}` — Get Launch
- `GET /api/advertising/launches/{launch}/waves` — List Launch Waves

### Ledger (Accounting v2)
- `GET /api/ledger/payout-mapping-periods` — List Payout Mapping Periods
- `GET /api/ledger/payout-mapping-periods/impact` — Preview Payout Mapping Change
- `GET /api/ledger/settings/revenue-recognition/preview` — Preview Revenue Recognition Switch
- `GET /api/ledger/setup/channel-tracking` — Get Channel Tracking Setup
- `GET /api/ledger/setup/ecommerce-standard/preview` — Preview Ecommerce Standard Chart

### Metric Preference & Profit Signals
- `GET /api/advertising/accounts/{adAccount}/profit-signals` — Get Ad Account Profit Signals
- `GET /api/advertising/accounts/{adAccount}/profit-signals/uploads` — List Ad Account Profit Signal Uploads
- `GET /api/advertising/metric-preference` — Get Metric Preference

### Optimizer
- `GET /api/advertising/optimizer/estimates` — List Bid Estimates
- `GET /api/advertising/optimizer/settings` — Get Optimizer Settings

### Performance
- `GET /api/advertising/performance` — List Ad Performance
- `GET /api/advertising/performance/summary` — Get Ad Performance Summary
- `GET /api/advertising/search-terms` — List Ad Search Terms

### Planning
- `GET /api/advertising/ad-plan/demand-modifiers` — List Ad Demand Modifiers
- `GET /api/advertising/anomalies` — List Anomalies
- `GET /api/advertising/anomalies/{anomaly}` — Get Anomaly
- `GET /api/advertising/budget-plans` — List Budget Plans
- `DELETE /api/advertising/budget-plans/{plan}` — Delete Budget Plan
- `GET /api/advertising/budget-plans/{plan}` — Get Budget Plan
- `GET /api/advertising/budget-plans/{plan}/pacing` — Get Budget Plan Pacing
- `GET /api/advertising/experiments` — List Experiments
- `GET /api/advertising/experiments/{experiment}` — Get Experiment
- `GET /api/advertising/experiments/{experiment}/results` — Get Experiment Results
- `GET /api/advertising/products/{product}/organic-halo` — Get Product Organic Halo
- `GET /api/advertising/products/{product}/supply-impact` — Get Product Supply Impact

### Reports
- `GET /api/advertising/reports` — List Ad Reports
- `DELETE /api/advertising/reports/{report}` — Delete Ad Report
- `GET /api/advertising/reports/{report}` — Get Ad Report
- `GET /api/advertising/reports/{report}/export` — Export Saved Ad Report
- `GET /api/advertising/reports/{report}/run` — Run Saved Ad Report

### Rules
- `GET /api/advertising/rule-runs/{run}` — Get Rule Run
- `GET /api/advertising/rules` — List Rules
- `DELETE /api/advertising/rules/{rule}` — Delete Rule
- `GET /api/advertising/rules/{rule}` — Get Rule
- `GET /api/advertising/rules/{rule}/dayparting` — Get Rule Dayparting Schedule
- `GET /api/advertising/rules/{rule}/runs` — List Rule Runs

### Search Term Actions
- `GET /api/advertising/search-terms/history` — Get Search Term History

### Temu
- `GET /api/temu/payout-mapping-groups` — List Global Payout Mapping Groups
- `DELETE /api/temu/payout-mapping-groups/{payoutMappingGroup}` — Delete Global Payout Mapping Group
- `GET /api/temu/{integrationInstance}/payout-finance-settings` — Get Payout Finance Settings
- `GET /api/temu/{integrationInstance}/payout-mapping-groups` — List Payout Mapping Groups
- `DELETE /api/temu/{integrationInstance}/payout-mapping-groups/{payoutMappingGroup}` — Delete Payout Mapping Group
- `GET /api/temu/{integrationInstance}/payout-type-mappings` — List Payout Type Mappings
- `GET /api/temu/{integrationInstance}/payouts` — List Payouts
- `GET /api/temu/{integrationInstance}/payouts/filter-options` — Get Payout Filter Options
- `DELETE /api/temu/{integrationInstance}/payouts/{payout}` — Delete Payout Statement
- `GET /api/temu/{integrationInstance}/payouts/{payout}` — Get Payout

### TikTok Shop
- `GET /api/tiktok-shop/payout-mapping-groups` — List Global Payout Mapping Groups
- `DELETE /api/tiktok-shop/payout-mapping-groups/{payoutMappingGroup}` — Delete Global Payout Mapping Group
- `GET /api/tiktok-shop/{integrationInstance}/payout-finance-settings` — Get Payout Finance Settings
- `GET /api/tiktok-shop/{integrationInstance}/payout-mapping-groups` — List Payout Mapping Groups
- `DELETE /api/tiktok-shop/{integrationInstance}/payout-mapping-groups/{payoutMappingGroup}` — Delete Payout Mapping Group
- `GET /api/tiktok-shop/{integrationInstance}/payout-transactions` — List Payout Lines
- `GET /api/tiktok-shop/{integrationInstance}/payout-transactions/filter-options` — Get Payout Line Filter Options
- `GET /api/tiktok-shop/{integrationInstance}/payout-type-mappings` — List Payout Type Mappings

_…plus 104 more (see the API reference)._

_Spec version 1.0.0 → 1.0.0._
