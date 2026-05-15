---
title: "Customer PO OCR now handles forwarded emails — and falls back smarter"
description: "Forwarded customer POs bind to the real sender, not the forwarder, and order date and unit price now have sensible fallback chains."
authors: [product-team]
tags: [feature, improved, orders]
date: 2026-05-14
---

When a customer sends a PO that you forward into SKU.io ("Fwd: PO
12345"), the extraction used to bind to *you* — the forwarder —
instead of the real customer. Customer PO OCR now reads the inner
`From:` header out of the email body, resolves the actual customer up
front, and feeds that customer's prior orders, top SKUs, and SKU
aliases into the extraction as context. Order date and unit price also
have proper fallback chains for the cases where the document itself
doesn't carry them.

<!-- truncate -->

**✨ What this means for you:**

- Forwarded customer POs ("Fwd:" from Gmail/Outlook) now resolve to
  the real customer, so prior-order history, top SKUs, and SKU
  aliases come along for the ride during extraction.
- Order date is inferred from the original send date when the PO
  itself doesn't have one — falling back to the email arrival date if
  the forwarded `Date:` header is also missing.
- A unit price falls back to the customer's history price when no
  supplier pricing tier covers the line, stamped clearly as
  `unit_price_source = 'customer_history'` so reviewers know what was
  used and can override it.

## Why this changed

Forwarded customer POs were one of the harder OCR cases in practice.
The email `From:` we received was the team member who forwarded the
message, so customer resolution either failed or matched the wrong
customer. That meant the LLM extraction ran *without* the prior-orders
and SKU-alias context that normally rescues fuzzy SKU columns and
unusual line descriptions.

Customer PO OCR now reads the forwarded body's inner `From:` line —
the canonical "the original message was from X" header that Gmail and
Outlook both write — and pre-resolves the customer **before** the LLM
call. The extraction then runs with the right history loaded.

## The new fallback chains

**Order date.** The chain is:

1. The order date written on the PO itself.
2. The forwarded message's `Date:` header in the body.
3. The email's actual arrival timestamp.

So even a stripped forward with no date field on the PO will get a
sensible value instead of "Today".

**Unit price.** When no supplier-side pricing tier covers a line, we
now consult the customer's prior orders for that SKU and pick the most
recent price that customer paid. The line is stamped with
`unit_price_source = 'customer_history'` so reviewers see exactly
where the number came from — and so the next pricing-tier addition
takes precedence on subsequent extractions.

This applies to both the standard inbound flow (your customer emails
SKU.io directly) and the forward flow described above.
