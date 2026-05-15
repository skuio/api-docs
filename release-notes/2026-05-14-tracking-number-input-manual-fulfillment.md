---
title: "Tracking number input is back in the manual-fulfillment dialog"
description: "Selecting \"Manual\" fulfillment type in FulfillItemsDialog again shows the Tracking Number field and submits it on confirm."
authors: [product-team]
tags: [fixed, fulfillment]
date: 2026-05-14
---

A recent regression hid the **Tracking Number** input when you picked
**Manual** as the fulfillment type in the Fulfill Items dialog. The
field is restored, and the value flows through to the created shipment
on confirm.
