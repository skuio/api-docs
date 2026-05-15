---
title: "Customer PO OCR: smarter handling of forwarded emails"
description: "Forwarded customer POs now resolve to the original sender's customer record, with date and history-price fallbacks for cleaner draft sales orders."
authors: [product-team]
tags: [improved, orders]
date: 2026-05-14
---

Forwarded customer-PO emails (Gmail/Outlook *"Fwd:"*) now resolve to the
**original sender's** customer record instead of the forwarder, and the
OCR pipeline gets two helpful fallbacks for fields the email doesn't
explicitly include.

<!-- truncate -->

**✨ What this means for you:**

- A sales-rep forwarding a customer's PO no longer accidentally maps
  the draft order to themselves — SKU.io pre-resolves the customer from
  the body's `From:` header before the LLM call, then injects that
  customer's prior orders, top SKUs, and SKU aliases as history context
  so the matcher knows what to expect.
- If the PO body doesn't have an explicit order date, SKU.io falls back
  to the forwarded `Date:` header, then to the email arrival time.
- If a product has no current tier price for the customer, the line
  picks up the most recent unit price from that customer's history and
  stamps `unit_price_source = 'customer_history'` for transparency.

Find this on draft orders coming from the Sales Order OCR Inbox sourced
from forwarded emails.
