import React, { useEffect, useRef } from "react";

const STORAGE_KEY = "skuio-tenant";

function TenantReplacer() {
  const currentTenantRef = useRef<string>("app");

  const doReplace = (from: string, to: string) => {
    if (from === to || !to || to === "app") return;
    const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(escaped + "\\.sku\\.io", "g");
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node: Text | null;
    while ((node = walker.nextNode() as Text | null)) {
      if (node.data.includes(from + ".sku.io")) {
        node.data = node.data.replace(pattern, to + ".sku.io");
      }
    }
  };

  useEffect(() => {
    const tenant = localStorage.getItem(STORAGE_KEY) || "app";
    currentTenantRef.current = tenant;
    doReplace("app", tenant);

    // Re-run on SPA navigation (new DOM nodes from route change)
    let debounce: ReturnType<typeof setTimeout>;
    const observer = new MutationObserver(() => {
      clearTimeout(debounce);
      debounce = setTimeout(() => doReplace("app", currentTenantRef.current), 60);
    });
    // Only watch childList — changing text node .data fires characterData, not childList, so no loop
    observer.observe(document.body, { childList: true, subtree: true });

    // Listen for live updates from TenantConfigurator
    const handleChange = (e: Event) => {
      const newTenant = (e as CustomEvent<{ tenant: string }>).detail.tenant;
      const old = currentTenantRef.current;
      currentTenantRef.current = newTenant;
      doReplace(old, newTenant);   // replace previous tenant
      doReplace("app", newTenant); // catch any that were never replaced
    };
    window.addEventListener("skuio-tenant-changed", handleChange);

    return () => {
      observer.disconnect();
      clearTimeout(debounce);
      window.removeEventListener("skuio-tenant-changed", handleChange);
    };
  }, []);

  return null;
}

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TenantReplacer />
      {children}
    </>
  );
}
