import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// The openapi plugin generates docs/api/sidebar.ts with an `apisidebar` export
// (a flat array of tag-grouped categories). We import it here and wrap into the
// three x-tagGroup categories from openapi.yaml to achieve the desired
// 3-level hierarchy: Group → Tag → Endpoint.
//
// Run `npx docusaurus gen-api-docs all` before `npm run build` to generate this file.
import generatedApiSidebar from "./docs/api/sidebar";

// Tag → Group mapping derived from x-tagGroups in openapi.yaml
const TAG_GROUPS: Record<string, string> = {
  Accounting: "Core API",
  Contacts: "Core API",
  "Insights & Analytics": "Core API",
  Inventory: "Core API",
  "Landed Cost": "Core API",
  Orders: "Core API",
  "Product Import": "Core API",
  "Vendor Credits": "Core API",
  "Channels & Stores": "Integrations",
  Integrations: "Integrations",
  Administration: "Platform",
  "Getting Started": "Platform",
  "Report Templates": "Platform",
};

const GROUP_ORDER = ["Core API", "Integrations", "Platform"];

type SidebarItem = {
  type: string;
  label?: string;
  items?: unknown[];
  [key: string]: unknown;
};

/**
 * Partition the flat apiSidebar (already grouped by tag) into the three
 * top-level x-tagGroup categories.
 */
function buildGroupedSidebar(items: unknown[]): SidebarItem[] {
  const groups: Record<string, SidebarItem[]> = {
    "Core API": [],
    Integrations: [],
    Platform: [],
  };

  for (const item of items) {
    if (
      typeof item === "object" &&
      item !== null &&
      "type" in item &&
      (item as SidebarItem).type === "category"
    ) {
      const cat = item as SidebarItem;
      const group =
        cat.label ? (TAG_GROUPS[cat.label] ?? "Core API") : "Core API";
      groups[group].push(cat);
    } else {
      // Top-level items without a tag category go into Core API
      groups["Core API"].push(item as SidebarItem);
    }
  }

  return GROUP_ORDER
    .filter((g) => groups[g].length > 0)
    .map((groupName) => ({
      type: "category",
      label: groupName,
      collapsible: true,
      collapsed: false,
      items: groups[groupName],
    }));
}

const sidebars: SidebarsConfig = {
  apiSidebar: [
    {
      type: "doc",
      id: "api/introduction",
      label: "Introduction",
    },
    ...buildGroupedSidebar(generatedApiSidebar as unknown[]),
  ],
};

export default sidebars;
