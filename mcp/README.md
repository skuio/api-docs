# @skuio/docs-mcp

MCP server for the SKU.io API documentation. Gives AI agents three tools over
the static assets on developer.sku.io — no API keys, no server-side state:

| Tool | Does |
|---|---|
| `search_docs(query)` | Search guides, API domains, and operation summaries |
| `fetch_doc(path)` | Fetch any docs page as clean markdown (`.md` twin) |
| `get_openapi(domain?)` | Domain catalog, or one domain's OpenAPI chunk |

Deliberately **not** one-tool-per-operation — 3,200 tools would drown any
agent. Agents narrow with `search_docs` / `get_openapi`, then read.

## Use with Claude Code

From a checkout of this repo:

```bash
cd mcp && npm install
claude mcp add skuio-docs -- node /path/to/api-docs/mcp/server.mjs
```

Once published to npm:

```bash
claude mcp add skuio-docs -- npx -y @skuio/docs-mcp
```

## Publishing

`npm publish --access public` from this directory (needs the @skuio npm org).

## Environment

- `SKUIO_DOCS_BASE` — override the docs origin (default `https://developer.sku.io`);
  useful against a local `npm run serve` build.
