---
title: "Pick the currency on vendor credits — with smart defaults and safety locks"
description: "Vendor credits now default to the linked PO's currency, lock once allocations or payments are recorded, and surface a sensible fallback for unlinked credits."
authors: [product-team]
tags: [feature, improved, purchasing]
date: 2026-05-13
---

When you create a vendor credit you can now choose the currency — and
SKU.io picks a sensible default the moment you link it to a PO, so you
rarely have to. Once a credit has any allocations or payments recorded
against it the currency locks automatically, preventing accidental
changes that would scramble its ledger.

<!-- truncate -->

**✨ What this means for you:**

- Link a credit to a PO and the currency auto-fills from that PO —
  one less field to set, one less way to mismatch.
- Unlinked credits default to the supplier's pricing-tier currency,
  falling back to the tenant default — same logic the rest of the
  purchasing flow already uses.
- Currency locks once the credit has activity, so a credit applied
  against a USD PO can't be silently retagged to EUR after the fact.

## How the default is chosen

When you open the create-vendor-credit dialog or the credit detail
page, the currency field is pre-filled using a three-step fallback:

1. **Linked PO currency** — if the credit is tied to a purchase order,
   that PO's currency wins.
2. **Supplier default pricing-tier currency** — if no PO is linked,
   the credit inherits the supplier's default pricing tier currency.
3. **Tenant default currency** — if neither is available, the tenant's
   base currency is used.

This matches the cascade purchase orders already follow, so a credit
issued by the same supplier will land on the same currency without
extra thought.

## When the field locks

Two conditions make the currency read-only:

- **The credit is linked to a PO.** The credit must match the PO it
  offsets, so changing one side without the other is never allowed.
- **The credit has allocations or payments.** Once a credit has been
  applied to an invoice or used to fund an exchange, its currency is
  load-bearing in the ledger — changing it would invalidate every
  number computed against it. The field locks to prevent that.

In both cases the UI explains *why* the field is disabled, so the lock
isn't mysterious. Unlock by undoing the constraint (unlink the PO, or
reverse the applications) — the field becomes editable again.

A new feature test suite (`VendorCreditCurrencyTest`) covers the
default-selection logic and the lock conditions end-to-end, so the
behavior won't regress.
