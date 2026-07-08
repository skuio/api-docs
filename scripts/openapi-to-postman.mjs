/**
 * Dependency-free OpenAPI 3 → Postman Collection v2.1 converter.
 *
 * Consumed by scripts/gen-postman-collection.mjs, which runs ahead of
 * `docusaurus build` (alongside gen-scope-index / gen-rate-limit) and writes
 * static/skuio-api.postman_collection.json. The collection is therefore
 * regenerated on every docs build straight from the single source of truth
 * (openapi.yaml) — it can never drift from developer.sku.io and inherits the
 * spec's already-vetted public boundary (internal/session-only endpoints were
 * dispositioned OUT of the spec by the coverage waves, so they cannot leak
 * here either).
 *
 * Structure mirrors developer.sku.io: folders are the spec's x-tagGroups
 * (Core API / Integrations / Platform) → tag → request. Collection-level bearer
 * auth ({{token}}) and a {{baseUrl}} variable (default https://app.sku.io — swap
 * `app` for your tenant subdomain) make every request runnable after two edits.
 */

const HTTP_METHODS = [
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options",
];

/**
 * Strip Docusaurus admonition fences (`:::info[Title]` … `:::`) down to plain
 * markdown Postman can render, and trim to keep the collection lean.
 */
function cleanDescription(desc) {
  if (typeof desc !== "string" || desc.length === 0) {
    return undefined;
  }
  const out = desc
    .replace(/:::[a-z]+\[([^\]]+)\]/gi, "**$1**")
    .replace(/^:::[a-z]*\s*$/gim, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return out.length ? out : undefined;
}

function firstExampleValue(media) {
  if (!media || typeof media !== "object") {
    return undefined;
  }
  if (media.example !== undefined) {
    return media.example;
  }
  if (media.examples && typeof media.examples === "object") {
    const first = Object.values(media.examples)[0];
    if (first && first.value !== undefined) {
      return first.value;
    }
  }
  if (media.schema && media.schema.example !== undefined) {
    return media.schema.example;
  }
  return undefined;
}

/**
 * Some spec bodies store the example as a JSON-encoded string of a JSON object
 * (e.g. '"{\n  \"api_key\": ...}"'). Unwrap one layer so Postman shows real JSON.
 */
function normalizeStringExample(str) {
  try {
    const once = JSON.parse(str);
    if (typeof once === "string") {
      return once;
    }
    return JSON.stringify(once, null, 2);
  } catch {
    return str;
  }
}

function schemaSkeleton(schema, depth) {
  if (!schema || typeof schema !== "object" || depth > 3 || schema.$ref) {
    return {};
  }
  if (schema.example !== undefined) {
    return schema.example;
  }
  if (schema.default !== undefined) {
    return schema.default;
  }
  const type = Array.isArray(schema.type) ? schema.type[0] : schema.type;
  if (type === "object" || schema.properties) {
    const obj = {};
    for (const [key, prop] of Object.entries(schema.properties || {})) {
      obj[key] = schemaSkeleton(prop, depth + 1);
    }
    return obj;
  }
  if (type === "array") {
    return [schemaSkeleton(schema.items || {}, depth + 1)];
  }
  if (type === "integer" || type === "number") {
    return 0;
  }
  if (type === "boolean") {
    return false;
  }
  return "";
}

function buildBody(requestBody) {
  const content = requestBody && requestBody.content;
  if (!content || typeof content !== "object") {
    return null;
  }
  const types = Object.keys(content);
  if (types.length === 0) {
    return null;
  }
  const preferred = [
    "application/json",
    "*/*",
    "application/x-www-form-urlencoded",
    "multipart/form-data",
  ];
  const chosen = preferred.find((t) => types.includes(t)) || types[0];
  const media = content[chosen];

  if (chosen === "multipart/form-data") {
    const props = (media && media.schema && media.schema.properties) || {};
    const formdata = Object.entries(props).map(([key, prop]) => {
      const isFile = prop && prop.type === "string" && prop.format === "binary";
      return isFile
        ? { key, type: "file", src: [] }
        : { key, type: "text", value: "" };
    });
    return { contentType: "multipart/form-data", mode: "formdata", formdata };
  }

  const example = firstExampleValue(media);
  let raw;
  if (typeof example === "string") {
    raw = normalizeStringExample(example);
  } else if (example !== undefined) {
    raw = JSON.stringify(example, null, 2);
  } else if (media && media.schema) {
    raw = JSON.stringify(schemaSkeleton(media.schema, 0), null, 2);
  } else {
    raw = "";
  }
  const contentType = chosen === "*/*" ? "application/json" : chosen;
  return {
    contentType,
    mode: "raw",
    raw,
    language: contentType.includes("json") ? "json" : "text",
  };
}

function paramExample(param) {
  if (!param || typeof param !== "object") {
    return "";
  }
  if (param.example !== undefined) {
    return String(param.example);
  }
  const schema = param.schema || {};
  if (schema.example !== undefined) {
    return String(schema.example);
  }
  if (schema.default !== undefined) {
    return String(schema.default);
  }
  if (Array.isArray(schema.enum) && schema.enum.length) {
    return String(schema.enum[0]);
  }
  return "";
}

function buildUrl(pathKey, params) {
  const pathPart = pathKey.split("?")[0];
  const segments = pathPart
    .split("/")
    .filter(Boolean)
    .map((seg) => seg.replace(/^\{(.+)\}$/, ":$1"));

  const queryParams = params.filter((p) => p && p.in === "query");
  const pathParams = params.filter((p) => p && p.in === "path");

  const query = queryParams.map((p) => ({
    key: p.name,
    value: paramExample(p),
    description: cleanDescription(p.description),
    disabled: !p.required,
  }));

  const variable = pathParams.map((p) => ({
    key: p.name,
    value: paramExample(p),
    description: cleanDescription(p.description),
  }));

  // Cover path template vars that lack an explicit parameter entry.
  const templated = (pathPart.match(/\{(\w+)\}/g) || []).map((m) =>
    m.slice(1, -1)
  );
  for (const name of templated) {
    if (!variable.find((v) => v.key === name)) {
      variable.push({ key: name, value: "" });
    }
  }

  const queryString = query.length
    ? "?" + query.map((q) => `${q.key}=${q.value}`).join("&")
    : "";

  const url = {
    raw: `{{baseUrl}}${pathPart}${queryString}`,
    host: ["{{baseUrl}}"],
    path: segments,
  };
  if (query.length) {
    url.query = query;
  }
  if (variable.length) {
    url.variable = variable;
  }
  return url;
}

function buildSavedResponse(op, request) {
  const responses = op.responses;
  if (!responses || typeof responses !== "object") {
    return [];
  }
  const codes = Object.keys(responses);
  const pick = codes.find((c) => /^2/.test(c)) || codes[0];
  if (!pick) {
    return [];
  }
  const resp = responses[pick];
  const content = resp && resp.content;
  const media =
    content &&
    (content["application/json"] || content[Object.keys(content)[0]]);
  const example = firstExampleValue(media);
  if (example === undefined) {
    return [];
  }
  const code = Number(pick.replace(/[^0-9]/g, "")) || 200;
  return [
    {
      name: resp.description || `${code} Response`,
      originalRequest: { method: request.method, url: request.url },
      status: resp.description || "",
      code,
      _postman_previewlanguage: "json",
      header: [{ key: "Content-Type", value: "application/json" }],
      body:
        typeof example === "string"
          ? example
          : JSON.stringify(example, null, 2),
    },
  ];
}

function buildRequestItem(pathKey, method, op, pathLevelParams) {
  const params = [
    ...(Array.isArray(pathLevelParams) ? pathLevelParams : []),
    ...(Array.isArray(op.parameters) ? op.parameters : []),
  ].filter((p) => p && p.in !== undefined);

  const url = buildUrl(pathKey, params);
  const header = [];
  const body = op.requestBody ? buildBody(op.requestBody) : null;
  if (body && body.contentType && body.mode !== "formdata") {
    header.push({ key: "Content-Type", value: body.contentType });
  }

  const request = {
    method: method.toUpperCase(),
    header,
    url,
  };
  const description = cleanDescription(op.description || op.summary);
  if (description) {
    request.description = description;
  }
  if (body) {
    if (body.mode === "formdata") {
      request.body = { mode: "formdata", formdata: body.formdata };
    } else {
      request.body = {
        mode: "raw",
        raw: body.raw,
        options: { raw: { language: body.language } },
      };
    }
  }

  const item = {
    name: op.summary || `${method.toUpperCase()} ${pathKey}`,
    request,
  };
  const responses = buildSavedResponse(op, request);
  if (responses.length) {
    item.response = responses;
  }
  return item;
}

/**
 * Convert a parsed OpenAPI 3 document into a Postman Collection v2.1 object.
 *
 * @param {object} spec parsed openapi.yaml
 * @returns {object} Postman collection ready for JSON.stringify
 */
export function specToPostmanCollection(spec) {
  const tagToGroup = new Map();
  const groupOrder = [];
  for (const group of spec["x-tagGroups"] || []) {
    if (!group || !group.name) {
      continue;
    }
    groupOrder.push(group.name);
    for (const tag of group.tags || []) {
      tagToGroup.set(tag, group.name);
    }
  }
  const OTHER_GROUP = "Other";

  // group -> tag -> items[]
  const tree = new Map();
  const tagOrder = new Map();
  const ensure = (groupName, tag) => {
    if (!tree.has(groupName)) {
      tree.set(groupName, new Map());
      tagOrder.set(groupName, []);
    }
    const tags = tree.get(groupName);
    if (!tags.has(tag)) {
      tags.set(tag, []);
      tagOrder.get(groupName).push(tag);
    }
    return tags.get(tag);
  };

  for (const [pathKey, pathItem] of Object.entries(spec.paths || {})) {
    if (!pathItem || typeof pathItem !== "object") {
      continue;
    }
    const pathLevelParams = pathItem.parameters;
    for (const method of HTTP_METHODS) {
      const op = pathItem[method];
      if (!op || typeof op !== "object") {
        continue;
      }
      const tag = (Array.isArray(op.tags) && op.tags[0]) || "Untagged";
      const groupName = tagToGroup.get(tag) || OTHER_GROUP;
      const bucket = ensure(groupName, tag);
      bucket.push(buildRequestItem(pathKey, method, op, pathLevelParams));
    }
  }

  const orderedGroups = [
    ...groupOrder,
    ...[...tree.keys()].filter((g) => !groupOrder.includes(g)),
  ].filter((g) => tree.has(g));

  const item = orderedGroups.map((groupName) => {
    const tags = tree.get(groupName);
    const tagFolders = tagOrder.get(groupName).map((tag) => ({
      name: tag,
      item: tags.get(tag),
    }));
    return { name: groupName, item: tagFolders };
  });

  const version = (spec.info && spec.info.version) || "1.0.0";
  return {
    info: {
      name: (spec.info && spec.info.title) || "SKU.io API",
      description:
        "Auto-generated from the SKU.io OpenAPI spec — the same source that powers https://developer.sku.io. " +
        "Set the `baseUrl` variable to your tenant (default https://app.sku.io — replace `app` with your subdomain) " +
        "and put a Personal Access Token in the `token` variable (Settings → Developer → Personal Access Tokens). " +
        `Spec version ${version}.`,
      schema:
        "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    },
    auth: {
      type: "bearer",
      bearer: [{ key: "token", value: "{{token}}", type: "string" }],
    },
    variable: [
      { key: "baseUrl", value: "https://app.sku.io", type: "string" },
      { key: "token", value: "", type: "string" },
    ],
    item,
  };
}
