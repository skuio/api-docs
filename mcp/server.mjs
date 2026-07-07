#!/usr/bin/env node
/**
 * SKU.io docs MCP server (stdio).
 *
 * Three tools over the static assets on developer.sku.io — no API keys, no
 * state. Deliberately NOT one-tool-per-operation (3,200 tools would drown
 * any agent); agents narrow with search_docs / get_openapi, then read.
 *
 *   search_docs(query)          — search guides + API domains + operations
 *   fetch_doc(path)             — fetch a docs page as markdown (.md twin)
 *   get_openapi(domain?)        — domain catalog, or one domain's spec chunk
 *
 * Usage with Claude Code:
 *   claude mcp add skuio-docs -- node /path/to/api-docs/mcp/server.mjs
 * (or once published: claude mcp add skuio-docs -- npx -y @skuio/docs-mcp)
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const BASE = process.env.SKUIO_DOCS_BASE ?? "https://developer.sku.io";

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.text();
}

let catalogCache = null;
async function catalog() {
  if (!catalogCache) {
    catalogCache = JSON.parse(await fetchText(`${BASE}/openapi/index.json`));
  }
  return catalogCache;
}

const GUIDES = [
  ["quickstart", "First authenticated API call in five minutes"],
  ["authentication", "Personal Access Tokens, scopes, 401/403 handling"],
  ["pagination", "page/per_page parameters and response envelope"],
  ["filtering-and-sorting", "filter[...] operators and filter_groups trees"],
  ["errors", "Error body shapes per HTTP status, stable codes"],
  ["dates-and-timezones", "UTC datetimes, app-timezone dates"],
  ["rate-limits", "Platform and per-token limits, 429 handling"],
  ["webhooks", "Subscriptions, event catalog, HMAC signature verification"],
  ["api-conventions", "/api vs /api/v2, URL structure, envelopes"],
];

const server = new McpServer({ name: "skuio-docs", version: "0.1.0" });

server.tool(
  "search_docs",
  "Search the SKU.io API documentation: guides, API domains, and operation summaries. Returns matching pages/domains with URLs to fetch next.",
  { query: z.string().describe("Search terms, e.g. 'create sales order' or 'webhook signature'") },
  async ({ query }) => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const score = (text) => {
      const t = text.toLowerCase();
      return terms.reduce((n, term) => n + (t.includes(term) ? 1 : 0), 0);
    };

    const results = [];
    for (const [slug, desc] of GUIDES) {
      const s = score(`${slug.replace(/-/g, " ")} ${desc}`);
      if (s > 0) results.push({ kind: "guide", title: slug, score: s, url: `${BASE}/docs/guides/${slug}.md`, description: desc });
    }
    const cat = await catalog();
    for (const t of cat.tags) {
      const s = score(t.tag);
      if (s > 0) results.push({ kind: "api-domain", title: t.tag, score: s + 0.5, url: t.url, operations: t.operations, group: t.group });
    }
    // operation-level: scan summaries in the top-matching domains (cheap: only if a domain matched or nothing matched yet)
    const domains = results.filter((r) => r.kind === "api-domain").slice(0, 3);
    for (const d of domains) {
      const chunk = await fetchText(d.url);
      for (const line of chunk.split("\n")) {
        const m = line.match(/^ {6}summary: (.+)$/);
        if (m && score(m[1]) >= Math.max(1, terms.length - 1)) {
          results.push({ kind: "operation", title: m[1].trim(), score: score(m[1]), domain: d.title, hint: `fetch get_openapi domain='${d.title}' and search for this summary` });
        }
      }
    }
    results.sort((a, b) => b.score - a.score);
    return { content: [{ type: "text", text: JSON.stringify(results.slice(0, 20), null, 2) }] };
  }
);

server.tool(
  "fetch_doc",
  "Fetch a developer.sku.io docs page as clean markdown. Pass a path like /docs/guides/quickstart or /docs/api/introduction (the .md twin is fetched automatically).",
  { path: z.string().describe("Docs path, e.g. /docs/guides/webhooks") },
  async ({ path }) => {
    let p = path.startsWith("/") ? path : `/${path}`;
    if (!p.endsWith(".md")) p += ".md";
    const text = await fetchText(`${BASE}${p}`);
    return { content: [{ type: "text", text }] };
  }
);

server.tool(
  "get_openapi",
  "Without arguments: the catalog of API domains (tag, group, operation count, chunk URL). With a domain: that domain's full OpenAPI chunk (YAML) — every path, parameter, and example for that domain.",
  { domain: z.string().optional().describe("Domain/tag name from the catalog, e.g. 'Sales Orders' or 'Amazon'") },
  async ({ domain }) => {
    const cat = await catalog();
    if (!domain) {
      return { content: [{ type: "text", text: JSON.stringify(cat, null, 2) }] };
    }
    const hit = cat.tags.find((t) => t.tag.toLowerCase() === domain.toLowerCase());
    if (!hit) {
      const names = cat.tags.map((t) => t.tag).join(", ");
      return { content: [{ type: "text", text: `Unknown domain '${domain}'. Available: ${names}` }] };
    }
    const yamlText = await fetchText(hit.url);
    return { content: [{ type: "text", text: yamlText }] };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
