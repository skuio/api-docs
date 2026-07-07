import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import * as fs from "fs";
import generatedApiSidebar from "./docs/api/sidebar";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const yaml = require("js-yaml") as { load: (src: string) => unknown };

// ---------------------------------------------------------------------------
// Sidebar hierarchy: Group → (optional Area) → Tag → Endpoint
//
// Groups come from the spec's own `x-tagGroups` (written by merge-openapi.py
// in the skuio/sku repo), so the sidebar can never drift from the spec: every
// tag always lands in its group. The AREA overlay below is purely cosmetic
// nesting inside a group — tags without an area entry sit directly under
// their group, they are never lost or dumped into a fallback bucket.
// (The previous design hand-duplicated the whole tag→group map here and had
// rotted: 65 of 114 tags were unmapped and piled into a flat "Core API".)
// ---------------------------------------------------------------------------

// Optional visual nesting inside groups. Safe to leave incomplete.
const TAG_TO_AREA: Record<string, string> = {
  // ── Core API ─────────────────────────────────────────────────────────
  "Sales Orders":            "Orders",
  "Sales Order Lines":       "Orders",
  "Fulfillments":            "Orders",
  "Sales Credits":           "Orders",
  "Returns & RMAs":          "Orders",
  "Discount Codes":          "Orders",
  "Purchase Orders":         "Purchasing",
  "Purchase Invoices":       "Purchasing",
  "Purchase Receipts":       "Purchasing",
  "Purchase Order Shipments": "Purchasing",
  "Inbound Shipments":       "Purchasing",
  "Suppliers":               "Purchasing",
  "Products":                "Products",
  "Product Listings":        "Products",
  "Product Listings (V2)":   "Products",
  "Listings":                "Products",
  "Custom Fields":           "Products",
  "CSV Templates":           "Products",
  "Organization":            "Products",
  "Product Import":          "Products",
  "Inventory":               "Inventory",
  "Adjustments & Transfers": "Inventory",
  "Inventory Adjustments":   "Inventory",
  "Inventory Movements":     "Inventory",
  "Stock Takes":             "Inventory",
  "Assemblies":              "Inventory",
  "Initial Inventory":       "Inventory",
  "Costing":                 "Inventory",
  "Pricing":                 "Inventory",
  "FIFO Layers":             "Inventory",
  "Warehouses":              "Inventory",
  "Accounting":              "Accounting",
  "Ledger (Accounting v2)":  "Accounting",
  "Financial Alerts":        "Accounting",
  "Financial Line Types":    "Accounting",
  "Nominal Codes":           "Accounting",
  "Payment Types":           "Accounting",
  "Payment Terms":           "Accounting",
  "Incoterms":               "Accounting",
  "Financials":              "Accounting",
  "Bills":                   "Accounting",
  "Vendor Credits":          "Accounting",
  "Customers":               "Contacts",
  "Sales Reps":              "Contacts",
  "Channel Partners":        "Contacts",
  "Sub Sales Channels":      "Contacts",
  "Reporting":               "Insights & Analytics",
  "Export":                  "Insights & Analytics",
  "Data Feeds":              "Insights & Analytics",
  "Inventory Intelligence":  "Insights & Analytics",

  // ── Integrations (per-provider tags) ─────────────────────────────────
  "Amazon":                  "Sales Channels",
  "Shopify":                 "Sales Channels",
  "eBay":                    "Sales Channels",
  "BigCommerce":             "Sales Channels",
  "WooCommerce":             "Sales Channels",
  "Walmart":                 "Sales Channels",
  "Magento":                 "Sales Channels",
  "TikTok Shop":             "Sales Channels",
  "Temu":                    "Sales Channels",
  "Faire":                   "Sales Channels",
  "Stores":                  "Sales Channels",
  "Sales Channels":          "Sales Channels",
  "Store Email Templates":   "Sales Channels",
  "Sales Channel Product Templates": "Sales Channels",
  "Shipfusion":              "Shipping & 3PL",
  "ShipHero":                "Shipping & 3PL",
  "ShipStation":             "Shipping & 3PL",
  "Veracore":                "Shipping & 3PL",
  "3PL":                     "Shipping & 3PL",
  "Trackstar":               "Shipping & 3PL",
  "Starshipit":              "Shipping & 3PL",
  "API Shipping Provider":   "Shipping & 3PL",
  "Shipping Providers":      "Shipping & 3PL",
  "17TRACK":                 "Shipping & 3PL",
  "QuickBooks Online":       "Accounting & Payments",
  "Xero":                    "Accounting & Payments",
  "Stripe":                  "Accounting & Payments",
  "Accounting Integrations": "Accounting & Payments",
};

// Area display order inside each group; unlisted areas append alphabetically.
const AREA_ORDER: Record<string, string[]> = {
  "Core API": ["Orders", "Purchasing", "Inventory", "Products", "Contacts", "Accounting", "Insights & Analytics"],
  "Integrations": ["Sales Channels", "Shipping & 3PL", "Accounting & Payments"],
  "Platform": [],
};

type RawItem = { type: string; label?: string; items?: unknown[]; [k: string]: unknown };

function readTagGroups(): Map<string, string> {
  // tag name → group name, from the spec's x-tagGroups
  const tagToGroup = new Map<string, string>();
  try {
    const spec = yaml.load(fs.readFileSync("./openapi.yaml", "utf8")) as {
      "x-tagGroups"?: Array<{ name: string; tags: string[] }>;
    };
    for (const group of spec["x-tagGroups"] ?? []) {
      for (const tag of group.tags ?? []) {
        tagToGroup.set(tag, group.name);
      }
    }
  } catch {
    // fall through — every tag lands in Core API below
  }
  return tagToGroup;
}

function buildSidebar(items: unknown[]): RawItem[] {
  const tagToGroup = readTagGroups();
  const groupOrder = ["Core API", "Integrations", "Platform"];
  // group → area ('' = directly under the group) → tag categories
  const groups = new Map<string, Map<string, RawItem[]>>();

  for (const item of items) {
    const cat = item as RawItem;
    if (cat.type !== "category" || !cat.label) continue;
    const group = tagToGroup.get(cat.label) ?? "Core API";
    const area = TAG_TO_AREA[cat.label] ?? "";
    if (!groups.has(group)) groups.set(group, new Map());
    const areas = groups.get(group)!;
    if (!areas.has(area)) areas.set(area, []);
    areas.get(area)!.push(cat);
  }

  const orderedGroups = [
    ...groupOrder.filter((g) => groups.has(g)),
    ...[...groups.keys()].filter((g) => !groupOrder.includes(g)),
  ];

  return orderedGroups.map((groupName) => {
    const areas = groups.get(groupName)!;
    const preferred = AREA_ORDER[groupName] ?? [];
    const areaNames = [
      ...preferred.filter((a) => areas.has(a)),
      ...[...areas.keys()].filter((a) => a && !preferred.includes(a)).sort(),
    ];

    const children: RawItem[] = areaNames.map((area) => ({
      type: "category" as const,
      label: area,
      collapsible: true,
      collapsed: true,
      items: areas.get(area)!,
    }));
    // tags without an area sit directly under the group, after the areas
    children.push(...(areas.get("") ?? []));

    return {
      type: "category" as const,
      label: groupName,
      collapsible: true,
      collapsed: true,
      items: children,
    };
  });
}

const sidebars: SidebarsConfig = {
  guidesSidebar: [
    { type: "doc", id: "guides/quickstart", label: "Quickstart" },
    { type: "doc", id: "guides/authentication", label: "Authentication" },
    { type: "doc", id: "guides/api-conventions", label: "API Conventions" },
    { type: "doc", id: "guides/pagination", label: "Pagination" },
    { type: "doc", id: "guides/filtering-and-sorting", label: "Filtering & Sorting" },
    { type: "doc", id: "guides/errors", label: "Errors" },
    { type: "doc", id: "guides/dates-and-timezones", label: "Dates & Timezones" },
    { type: "doc", id: "guides/rate-limits", label: "Rate Limits" },
    { type: "doc", id: "guides/webhooks", label: "Webhooks" },
    { type: "doc", id: "guides/ai-tools", label: "Build with AI" },
  ],
  apiSidebar: [
    { type: "doc", id: "api/introduction", label: "Introduction" },
    ...(buildSidebar(generatedApiSidebar as unknown[]) as SidebarsConfig[keyof SidebarsConfig][]),
  ],
};

export default sidebars;
