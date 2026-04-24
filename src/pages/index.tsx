import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={`hero hero--primary ${styles.heroBanner}`}>
      <div className="container">
        <h1 className="hero__title">SKU.io API Reference</h1>
        <p className="hero__subtitle">
          Integrate with SKU.io — 1823 endpoints for orders, inventory,
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
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: "Simple Authentication",
    description:
      "Use Personal Access Tokens (PATs) as Bearer tokens. Create scoped tokens in Settings → Developer → Personal Access Tokens.",
    code: `curl https://app.sku.io/api/v2/sales-orders \\
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
              {features.map(({ title, description, code }) => (
                <div key={title} className="col col--4">
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
