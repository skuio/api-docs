import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const operationCount = siteConfig.customFields?.apiOperationCount as number;
  const countLabel = operationCount
    ? `${operationCount.toLocaleString("en-US")} endpoints`
    : "thousands of endpoints";
  return (
    <header className={`hero hero--primary ${styles.heroBanner}`}>
      <div className="container">
        <h1 className="hero__title">SKU.io API Reference</h1>
        <p className="hero__subtitle">
          Integrate with SKU.io — {countLabel} for orders, inventory,
          products, integrations, and more.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/api/introduction"
          >
            Browse the API →
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            href="https://app.sku.io/settings/api"
            style={{ marginLeft: "1rem" }}
          >
            Get API Token
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            href="https://app.getpostman.com/run-collection/7002958-7b897b8f-b2aa-4bf7-ac12-a1e7afd78588?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D7002958-7b897b8f-b2aa-4bf7-ac12-a1e7afd78588%26entityType%3Dcollection%26workspaceId%3D91f71d39-72ce-4e93-be5b-f77a1ed87347"
            style={{ marginLeft: "1rem" }}
          >
            Run in Postman ▶
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            href="pathname:///skuio-api.postman_collection.json"
            download
            style={{ marginLeft: "1rem" }}
          >
            Download Collection
          </Link>
        </div>
        <p className={styles.evaluatorNote}>
          Not a customer yet? SKU.io is inventory and order management for
          multichannel e-commerce.{" "}
          <Link href="https://sku.io" className={styles.evaluatorLink}>
            See the product
          </Link>{" "}
          or{" "}
          <Link href="https://book.sku.io/demo" className={styles.evaluatorLink}>
            book a call
          </Link>
          .
        </p>
      </div>
    </header>
  );
}

const features = [
  {
    title: "Simple Authentication",
    description:
      "Use Personal Access Tokens (PATs) as Bearer tokens. Create scoped tokens in Settings → Developer → Personal Access Tokens.",
    code: `curl https://app.sku.io/api/sales-orders \\
  -H "Authorization: Bearer <your-token>"`,
  },
  {
    title: "Deep Hierarchy",
    description:
      "Navigate endpoints by domain — Core API, Integrations, Platform — with sub-categories like Orders, Inventory, Products, and more.",
  },
  {
    title: "Multi-tenant",
    description:
      "All endpoints are relative to your SKU.io subdomain: https://{tenant}.sku.io. Replace {tenant} with your account subdomain (e.g. app).",
  },
  {
    title: "Built for AI Agents",
    description:
      "Open-source skills let terminal agents like Claude Code drive SKU.io through this API — build a catalog, create orders, adjust inventory.",
    link: { label: "Browse the agentic skills →", to: "/agentic-skills" },
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="API Reference for the SKU.io inventory management platform"
    >
      <HomepageHeader />
      <main>
        <section style={{ padding: "3rem 0" }}>
          <div className="container">
            <div className="row">
              {features.map(({ title, description, code, link }) => (
                <div key={title} className="col col--3">
                  <div
                    style={{
                      padding: "1.5rem",
                      height: "100%",
                      borderRadius: "8px",
                      background: "var(--ifm-card-background-color)",
                      border: "1px solid var(--ifm-color-emphasis-200)",
                    }}
                  >
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {code && (
                      <pre
                        style={{
                          fontSize: "0.8rem",
                          background: "var(--ifm-code-background)",
                          padding: "0.75rem",
                          borderRadius: "4px",
                          overflowX: "auto",
                        }}
                      >
                        <code>{code}</code>
                      </pre>
                    )}
                    {link && <Link to={link.to}>{link.label}</Link>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
