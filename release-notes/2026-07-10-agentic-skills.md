---
title: "Agentic Skills — teach AI agents to run SKU through your API"
description: "A community library of open-source skills that give Claude, OpenAI, and Gemini agents step-by-step playbooks for real SKU work — importing catalogs, creating orders, adjusting inventory, and more."
authors: [product-team]
tags: [major-feature, new, developer]
date: 2026-07-10
---

AI agents are getting genuinely useful — but pointing one at a platform with thousands of API
endpoints is a slow, error-prone start. The agent has to rediscover which endpoint does what, what
fields it needs, and how the pieces fit, every single time. So teams end up rebuilding the same
integration glue over and over. **Agentic Skills** fixes that. It's a new open-source library of
ready-made *skills* — curated playbooks that tell an AI agent exactly how to accomplish a real
business task in SKU: which endpoints to call, in what order, with which fields, plus the e-commerce
context to get it right. Point your agent at a skill and it just works.

<!-- truncate -->

**✨ What this means for you:**

- **Put your AI agent to work in SKU today** — ready-made skills for real tasks like *build a
  product catalog*, *create a sales order*, *adjust inventory*, and *create a saved view*.
- **Works with the agent you already use** — every skill is published for **Claude, OpenAI, and
  Gemini**, so you're not locked into one model.
- **Grounded in the real API** — skills call actual SKU endpoints with the right fields and
  scopes, so your agent stops guessing and stops hallucinating endpoints.
- **Open source and yours to extend** — MIT-licensed on GitHub. Use them as-is, or have your agent
  improve one and open a pull request.

## What's a skill?

A skill is a curated shortcut for an agent. Instead of exploring thousands of endpoints, the agent
loads one skill — for example *build a product catalog* — and follows a proven path: how to read
the source data, map it onto SKU's product fields, de-duplicate against what's already there, and
create the products cleanly. The hard-won practical details (what's a supplier SKU vs. a real SKU,
where the wholesale price goes, how to capture leftover attributes) are baked in, so your agent
gets them right the first time.

![The Agentic Skills page on the SKU.io developer portal, showing the cross-model skill library and example skills](/img/release-notes/agentic-skills/agentic-skills-page.png)

## Write once, run on any model

Each skill is authored once in a single, model-agnostic format and compiled into each platform's
native shape:

- **Claude** — an Agent Skill you drop into your project
- **OpenAI** — GPT/Assistant instructions plus an importable Action and function-calling tools
- **Gemini** — system instructions plus function declarations

Fix or improve the knowledge in one place, and every model benefits.

## Use one in minutes

Grab the skill for the task you want and install it into your agent. For Claude, that's as simple
as copying the skill folder into a `.claude/skills/` directory; for OpenAI and Gemini, paste the
generated instructions and register the tools. Authenticate with a SKU **Personal Access Token**,
and your agent is ready to work.

## It gets better every time it's used

Agentic Skills is built to evolve. If a skill doesn't do everything you need, don't work around
it — have your agent improve it and open a pull request. Every skill even ends with a short note
explaining exactly how. The library grows from real usage, so the next person's agent benefits from
your fix.

## Where to find it

Read the overview at **[developer.sku.io/agentic-skills](https://developer.sku.io/agentic-skills)**,
and get the skills on GitHub at **[github.com/skuio/sku-skills](https://github.com/skuio/sku-skills)**.
