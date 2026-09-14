---
title: API changes — 2026-09-14
description: This release includes 122 additions.
authors: [product-team]
tags: [added]
date: 2026-09-14
---

This release includes 122 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Admin
- `GET /api/support/admin/agents` — List Support Agents
- `POST /api/support/admin/agents` — Create Support Agent
- `DELETE /api/support/admin/agents/{agent}` — Delete Support Agent
- `GET /api/support/admin/ai-settings` — Get AI Suggestion Settings
- `GET /api/support/admin/email` — Get Support Email Status
- `GET /api/support/admin/groups` — List Support Groups
- `POST /api/support/admin/groups` — Create Support Group
- `DELETE /api/support/admin/groups/{group}` — Delete Support Group
- `GET /api/support/admin/macros` — List Support Macros
- `POST /api/support/admin/macros` — Create Support Macro
- `DELETE /api/support/admin/macros/{macro}` — Delete Support Macro
- `GET /api/support/admin/rules` — List Support Rules
- `POST /api/support/admin/rules` — Create Support Rule
- `GET /api/support/admin/rules/options` — Get Rule Options
- `POST /api/support/admin/rules/reorder` — Reorder Support Rules
- `DELETE /api/support/admin/rules/{rule}` — Delete Support Rule
- `POST /api/support/admin/rules/{rule}/test` — Test Support Rule
- `GET /api/support/admin/sla-policies` — List SLA Policies
- `POST /api/support/admin/sla-policies` — Create SLA Policy
- `DELETE /api/support/admin/sla-policies/{policy}` — Delete SLA Policy
- `GET /api/support/admin/tenants` — List Support Tenants
- `GET /api/support/admin/tenants/{tenant}/settings` — Get Support Tenant Settings
- `GET /api/support/admin/tenants/{tenant}/users` — List Support Tenant Users

### Agent Console
- `GET /api/support/agent/agents` — List Agent Directory
- `GET /api/support/agent/customers/{user}/timeline` — Get Customer Timeline
- `GET /api/support/agent/docs/search` — Search Help Docs
- `GET /api/support/agent/drafts` — List Ticket Drafts
- `GET /api/support/agent/inbound-mail` — List Quarantined Inbound Mail
- `GET /api/support/agent/links/jira/{key}/requesters` — List Issue Requesters
- `GET /api/support/agent/macros` — List Agent Macros
- `POST /api/support/agent/macros/{macro}/render` — Render Agent Macro
- `GET /api/support/agent/metrics` — Get Agent Dashboard Metrics
- `GET /api/support/agent/metrics/daily` — Get Daily Support Metrics
- `GET /api/support/agent/queue-counts` — Queue counts
- `POST /api/support/agent/releases` — Record Support Release
- `GET /api/support/agent/saved-views` — List Saved Views
- `POST /api/support/agent/saved-views` — Create Saved View
- `DELETE /api/support/agent/saved-views/{view}` — Delete Saved View
- `GET /api/support/agent/tickets` — List Agent Queue Tickets
- `GET /api/support/agent/tickets/{ticket}` — Get Agent Ticket
- `PATCH /api/support/agent/tickets/{ticket}` — Update Agent Ticket
- `GET /api/support/agent/tickets/{ticket}/ai` — Get Ticket AI Insights
- `POST /api/support/agent/tickets/{ticket}/ai/rerun` — Rerun AI Triage
- `POST /api/support/agent/tickets/{ticket}/ai/{run}/feedback` — Record AI Feedback
- `POST /api/support/agent/tickets/{ticket}/assign-to-me` — Assign Ticket to Me
- `GET /api/support/agent/tickets/{ticket}/customer` — Get Ticket Customer Context
- `DELETE /api/support/agent/tickets/{ticket}/draft` — Discard Ticket Draft
- `GET /api/support/agent/tickets/{ticket}/draft` — Get Ticket Draft
- `GET /api/support/agent/tickets/{ticket}/events` — List Agent Ticket Events
- `POST /api/support/agent/tickets/{ticket}/important` — Flag Ticket as Important to Customer
- `POST /api/support/agent/tickets/{ticket}/links` — Add Ticket Link
- `DELETE /api/support/agent/tickets/{ticket}/links/{link}` — Remove Ticket Link
- `POST /api/support/agent/tickets/{ticket}/merge` — Merge Agent Ticket
- `GET /api/support/agent/tickets/{ticket}/messages` — List Agent Ticket Messages
- `POST /api/support/agent/tickets/{ticket}/messages` — Reply to Ticket as Agent
- `POST /api/support/agent/tickets/{ticket}/notes` — Add Internal Note
- `DELETE /api/support/agent/tickets/{ticket}/snooze` — Unsnooze Agent Ticket
- `POST /api/support/agent/tickets/{ticket}/snooze` — Snooze Agent Ticket
- `POST /api/support/agent/tickets/{ticket}/split` — Split Agent Ticket
- `POST /api/support/agent/tickets/{ticket}/triage` — Triage Agent Ticket
- `GET /api/support/agent/webhooks` — List Agent Webhooks
- `GET /api/support/agent/webhooks/{webhook}/deliveries` — List Agent Webhook Deliveries

### Attachments
- `GET /api/support/agent/attachments/{attachment}/download` — Download Agent Ticket Attachment
- `GET /api/support/attachments/{attachment}/download` — Download Support Attachment

### Customer
- `POST /api/support/ai/summarize` — Summarize Support Transcript
- `GET /api/support/deflect` — Get Support Deflection Suggestions
- `GET /api/support/notification-preferences` — Get Support Notification Preferences
- `DELETE /api/support/push/subscriptions` — Delete Support Push Subscription
- `GET /api/support/push/subscriptions` — List Support Push Subscriptions
- `GET /api/support/settings` — Get Support Settings
- `GET /api/support/webhooks` — List Support Webhooks
- `DELETE /api/support/webhooks/{webhook}` — Delete Support Webhook
- `GET /api/support/webhooks/{webhook}/deliveries` — List Support Webhook Deliveries

### Intake (other environments)
- `GET /api/support/intake/attachments/{attachment}/download` — Download Intake Ticket Attachment
- `GET /api/support/intake/deflect` — Get Intake Deflection Suggestions
- `GET /api/support/intake/meta` — Get Intake Meta
- `GET /api/support/intake/summary` — Get Intake Summary
- `GET /api/support/intake/tickets` — List Intake Tickets
- `POST /api/support/intake/tickets` — Create Intake Ticket
- `GET /api/support/intake/tickets/{ticket}` — Get Intake Ticket
- `GET /api/support/intake/tickets/{ticket}/events` — List Intake Ticket Events
- `GET /api/support/intake/tickets/{ticket}/messages` — List Intake Ticket Messages
- `POST /api/support/intake/tickets/{ticket}/messages` — Reply to Intake Ticket
- `DELETE /api/support/intake/tickets/{ticket}/participants/{participant}` — Remove Intake Ticket Participant
- `POST /api/support/intake/tickets/{ticket}/rating` — Rate Intake Ticket
- `POST /api/support/intake/tickets/{ticket}/reopen` — Reopen Intake Ticket
- `POST /api/support/intake/tickets/{ticket}/resolve` — Resolve Intake Ticket
- `DELETE /api/support/intake/tickets/{ticket}/watchers` — Remove Intake Ticket Watcher
- `GET /api/support/intake/tickets/{ticket}/watchers` — List Intake Ticket Watchers
- `POST /api/support/intake/tickets/{ticket}/watchers` — Add Intake Ticket Watcher

### Meta
- `GET /api/support/meta` — Get Support Meta

### ShipBob
- `POST /api/shipbob/{instance}/shipments/{shipment}/refresh` — Refresh Shipment

### Tickets
- `GET /api/support/summary` — Get Support Summary
- `GET /api/support/tickets` — List Support Tickets
- `GET /api/support/tickets/summary` — Get Support Tickets Summary
- `GET /api/support/tickets/{ticket}` — Get Support Ticket
- `GET /api/support/tickets/{ticket}/events` — List Support Ticket Events
- `GET /api/support/tickets/{ticket}/messages` — List Support Ticket Messages
- `DELETE /api/support/tickets/{ticket}/participants/{participant}` — Remove Support Ticket Participant
- `DELETE /api/support/tickets/{ticket}/watchers/{user}` — Remove Support Ticket Watcher

_…plus 22 more (see the API reference)._

_Spec version 1.0.0 → 1.0.0._
