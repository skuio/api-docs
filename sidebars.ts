import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import generatedApiSidebar from "./docs/api/sidebar";

// 4-level hierarchy: Group → Area → Tag → Endpoint
//
// TAG_TO_AREA maps each OpenAPI tag → an intermediate area label.
// AREA_TO_GROUP maps each area → the top-level x-tagGroup.
// Areas prefixed "_flat_" are placed directly under the group (no intermediate node).

const TAG_TO_AREA: Record<string, string> = {
  // ── Orders ───────────────────────────────────────────────────────────
  "Sales Orders":           "Orders",
  "Sales Order Lines":      "Orders",
  "Fulfillments":           "Orders",
  "Sales Credits":          "Orders",
  "Returns & RMAs":         "Orders",
  "Discount Codes":         "Orders",
  "Suppliers":              "Orders",
  "Purchase Orders":        "Purchasing",
  "Purchase Invoices":      "Purchasing",
  "Purchase Receipts":      "Purchasing",
  "Purchase Order Shipments": "Purchasing",
  "Inbound Shipments":      "Purchasing",

  // ── Inventory ─────────────────────────────────────────────────────────
  "Products":               "Products",
  "Product Listings":       "Products",
  "Custom Fields":          "Products",
  "CSV Templates":          "Products",
  "Organization":           "Products",
  "Inventory":              "Inventory",
  "Adjustments & Transfers":"Inventory",
  "Stock Takes":            "Inventory",
  "Assemblies":             "Inventory",
  "Initial Inventory":      "Inventory",
  "Costing":                "Inventory",
  "Pricing":                "Inventory",

  // ── Accounting ────────────────────────────────────────────────────────
  "Accounting":             "Accounting",
  "Financials":             "Accounting",
  "Bills":                  "Accounting",
  "Configuration":          "Accounting",

  // ── Contacts ──────────────────────────────────────────────────────────
  "Customers":              "Contacts",
  "Sales Reps":             "Contacts",
  "Channel Partners":       "Contacts",
  "Sub Sales Channels":     "Contacts",

  // ── Insights & Analytics ──────────────────────────────────────────────
  "Reporting":              "Insights & Analytics",
  "Export":                 "Insights & Analytics",
  "Data Feeds":             "Insights & Analytics",
  "Inventory Intelligence": "Insights & Analytics",

  // ── Misc Core ─────────────────────────────────────────────────────────
  "Vendor Credits":         "_flat_Core API",
  "Lifecycle":              "_flat_Core API",
  "Landed Cost Breakdown":  "_flat_Core API",
  "Product Import":         "_flat_Core API",
  "Allocations":            "_flat_Core API",
  "Bulk Operations":        "_flat_Core API",
  "Notes":                  "_flat_Core API",
  "Invoice & Accounting":   "_flat_Core API",

  // ── Integrations ──────────────────────────────────────────────────────
  "Stores":                       "Sales Channels",
  "Sales Channels":               "Sales Channels",
  "Store Email Templates":        "Sales Channels",
  "Sales Channel Product Templates": "Sales Channels",
  "Shipping Providers":           "_flat_Integrations",
  "Accounting Integrations":      "_flat_Integrations",

  // ── Platform ──────────────────────────────────────────────────────────
  "Authentication":         "Administration",
  "Users":                  "Administration",
  "Alerts":                 "Administration",
  "Jobs & Logs":            "Administration",
  "Integration Instances":  "Administration",
  "UI Utilities":           "Administration",
  "Misc":                   "Administration",
  "Tags":                   "Administration",
  "Subscriptions":          "Administration",
  "Horizon":                "Administration",
  "Getting Started":        "_flat_Platform",
  "Report Templates":       "_flat_Platform",
};

// Area label → top-level group name
const AREA_TO_GROUP: Record<string, string> = {
  "Orders":               "Core API",
  "Purchasing":           "Core API",
  "Products":             "Core API",
  "Inventory":            "Core API",
  "Accounting":           "Core API",
  "Contacts":             "Core API",
  "Insights & Analytics": "Core API",
  "_flat_Core API":       "Core API",
  "Sales Channels":       "Integrations",
  "_flat_Integrations":   "Integrations",
  "Administration":       "Platform",
  "_flat_Platform":       "Platform",
};

const GROUP_ORDER = ["Core API", "Integrations", "Platform"];

// Area display order within each group
const AREA_ORDER: Record<string, string[]> = {
  "Core API": ["Orders", "Purchasing", "Inventory", "Products", "Contacts", "Accounting", "Insights & Analytics", "_flat_Core API"],
  "Integrations": ["Sales Channels", "_flat_Integrations"],
  "Platform": ["Administration", "_flat_Platform"],
};

type RawItem = { type: string; label?: string; items?: unknown[]; [k: string]: unknown };

function buildSidebar(items: unknown[]): RawItem[] {
  // Bucket: group → area → tag categories
  const groups: Record<string, Record<string, RawItem[]>> = {
    "Core API": {},
    "Integrations": {},
    "Platform": {},
  };

  for (const item of items) {
    const cat = item as RawItem;
    if (cat.type !== "category" || !cat.label) continue;
    const area = TAG_TO_AREA[cat.label] ?? "_flat_Core API";
    const group = AREA_TO_GROUP[area] ?? "Core API";
    if (!groups[group][area]) groups[group][area] = [];
    groups[group][area].push(cat);
  }

  return GROUP_ORDER
    .filter((g) => Object.keys(groups[g]).length > 0)
    .map((groupName) => {
      const areaMap = groups[groupName];
      const areaOrder = AREA_ORDER[groupName] ?? Object.keys(areaMap);
      const areaItems: RawItem[] = [];

      for (const area of areaOrder) {
        const tagCats = areaMap[area];
        if (!tagCats || tagCats.length === 0) continue;

        if (area.startsWith("_flat_")) {
          // Tags go directly under the group, no intermediate node
          areaItems.push(...tagCats);
        } else {
          // Wrap tag categories in an intermediate area category
          areaItems.push({
            type: "category" as const,
            label: area,
            collapsible: true,
            collapsed: true,
            items: tagCats,
          });
        }
      }

      return {
        type: "category" as const,
        label: groupName,
        collapsible: true,
        collapsed: false,
        items: areaItems,
      };
    });
}

const sidebars: SidebarsConfig = {
  apiSidebar: [
    { type: "doc", id: "api/introduction", label: "Introduction" },
    ...(buildSidebar(generatedApiSidebar as unknown[]) as SidebarsConfig[keyof SidebarsConfig][]),
  ],
};

export default sidebars;
