---
title: "Custom fields show a friendly error on duplicate (name, link type) instead of a 500"
description: "Saving a custom field whose name is already used for the same link type now returns a 422 validation error."
authors: [product-team]
tags: [fixed]
date: 2026-05-13
---

Creating or renaming a custom field to a name that's already in use for
the same link type — e.g. two **Product** custom fields both called
"Color" — now returns a clean validation error instead of a server 500.
