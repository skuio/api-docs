import React, { useState, useEffect } from "react";

const STORAGE_KEY = "skuio-tenant";

export default function TenantConfigurator(): React.ReactElement {
  const [tenant, setTenant] = useState("app");
  const [input, setInput] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setTenant(stored);
      setInput(stored);
    }
  }, []);

  const handleSave = () => {
    const value = input.trim().replace(/^https?:\/\//, "").replace(/\.sku\.io.*$/, "").trim();
    if (!value) return;
    localStorage.setItem(STORAGE_KEY, value);
    setTenant(value);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div
      style={{
        background: "var(--ifm-color-emphasis-100)",
        border: "1px solid var(--ifm-color-emphasis-300)",
        borderRadius: "8px",
        padding: "1.25rem 1.5rem",
        marginBottom: "1.5rem",
      }}
    >
      <div style={{ marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.95rem" }}>
        Your SKU.io base URL
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "0.75rem",
        }}
      >
        <code
          style={{
            fontSize: "1rem",
            background: "var(--ifm-code-background)",
            padding: "0.3rem 0.6rem",
            borderRadius: "4px",
            userSelect: "all",
          }}
        >
          https://<strong>{tenant}</strong>.sku.io
        </code>
        {tenant !== "app" && (
          <span
            style={{
              fontSize: "0.75rem",
              background: "var(--ifm-color-success-lightest, #d4edda)",
              color: "var(--ifm-color-success-darkest, #155724)",
              padding: "0.2rem 0.5rem",
              borderRadius: "4px",
            }}
          >
            configured
          </span>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.875rem", color: "var(--ifm-color-emphasis-600)", whiteSpace: "nowrap" }}>
          https://
        </span>
        <input
          type="text"
          placeholder="your-subdomain"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          style={{
            padding: "0.35rem 0.6rem",
            borderRadius: "4px",
            border: "1px solid var(--ifm-color-emphasis-400)",
            fontSize: "0.875rem",
            width: "160px",
            background: "var(--ifm-background-color)",
            color: "var(--ifm-font-color-base)",
          }}
        />
        <span style={{ fontSize: "0.875rem", color: "var(--ifm-color-emphasis-600)", whiteSpace: "nowrap" }}>
          .sku.io
        </span>
        <button
          onClick={handleSave}
          style={{
            padding: "0.35rem 0.85rem",
            borderRadius: "4px",
            border: "none",
            background: saved ? "var(--ifm-color-success)" : "var(--ifm-color-primary)",
            color: "#fff",
            fontSize: "0.875rem",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {saved ? "Saved ✓" : "Save"}
        </button>
      </div>
      <p
        style={{
          margin: "0.75rem 0 0",
          fontSize: "0.8rem",
          color: "var(--ifm-color-emphasis-600)",
        }}
      >
        Saved locally in your browser. Use this URL as the base for all API requests. In the{" "}
        <strong>Try It</strong> panels, set <code>tenant</code> to{" "}
        <code>{tenant}</code> to send requests directly from the docs.
      </p>
    </div>
  );
}
