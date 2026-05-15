---
title: "PO line shipped / unfulfilled totals exclude cancelled and closed shipments"
description: "Cancelled or closed inbound shipments no longer inflate the shipped_quantity / unfulfilled_quantity columns on Purchase Order lines."
authors: [product-team]
tags: [fixed, purchasing]
date: 2026-05-14
---

The **Shipped** and **Unfulfilled** quantity columns on Purchase Order
lines now exclude cancelled and closed inbound shipments from their
totals. This fixes inflated counts (e.g. *120 shipped of 60 ordered*)
that showed up when a shipment was cancelled but its quantities were
still being counted.
