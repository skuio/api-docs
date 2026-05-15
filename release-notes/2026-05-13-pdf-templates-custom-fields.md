---
title: "Custom fields now usable in PDF templates"
description: "Insert any custom field into purchase order, sales order, and other PDF templates from the variable picker — and see them render correctly in preview."
authors: [product-team]
tags: [feature, improved, purchasing, orders]
date: 2026-05-13
---

If you keep critical information in custom fields — internal account
codes, regulatory references, customer-specific notes — you can now
drop them straight into a PDF template using the variable picker. The
preview renders them properly too, so no more silent "unknown variable"
chips when you're trying to verify a template before saving it.

<!-- truncate -->

**✨ What this means for you:**

- Custom fields appear in the variable picker tree on PDF templates,
  scoped per template type (PO templates show PO custom fields, SO
  templates show SO custom fields, and so on).
- The preview renders custom-field tokens to a placeholder instead of
  stripping them silently, so you can verify the placement and
  formatting before going live.
- The token format is the familiar Mustache style:
  `{{custom_field.<slug>}}`.

## Why this changed

Custom field tokens had always been *parseable* by the template engine,
but two gaps in the UI made them unusable in practice:

1. They weren't in the variable picker, so unless you knew the exact
   token format you couldn't insert them.
2. The preview renderer treated `{{custom_field.<slug>}}` as an unknown
   variable and dropped it — making it impossible to confirm a
   template containing custom fields was correct.

Both gaps are closed. The variable picker is now driven by an
`AllowedVariablesBuilder` that injects the active set of custom fields
into the tree based on the template type, and the preview pipeline
shields the same tokens so they resolve to a visible placeholder rather
than being stripped.

## How to use it

1. Open any PDF template (Purchase Orders, Sales Orders, etc.) for
   editing.
2. Click into the body and open the **Insert Variable** picker.
3. Scroll to the **Custom Fields** group — it lists every custom field
   defined for that template's entity type.
4. Pick a field; the corresponding `{{custom_field.<slug>}}` token is
   inserted at the cursor.
5. Click **Preview** to confirm the placement. Custom-field tokens
   render as a placeholder, since live data only resolves when the PDF
   is generated against an actual record.

When the template is rendered against a real PO, SO, or invoice, the
token is replaced with that record's value for the field — exactly the
behavior you'd expect from any of the built-in variables.
