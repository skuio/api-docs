import React, { type ReactNode } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import BlogSidebar from "@theme/BlogSidebar";
import type { Props } from "@theme/BlogLayout";
import styles from "./styles.module.css";

// Custom blog layout for the Release Notes / API Changelog feeds.
// Replaces the stock 12-column grid (which let the date-tree sidebar
// wrap the main column when its content grew wide) with a stable
// fixed-rail + flexible-content shell.
export default function BlogLayout(props: Props): ReactNode {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  // Show the "subscribe" strip only on the API Changelog index page —
  // not on individual changelog posts, and not on Release Notes (which
  // shares this layout). trailingSlash:false serves the index at /changelog.
  const isChangelogIndex =
    useLocation().pathname.replace(/\/$/, "") === "/changelog";

  return (
    <Layout {...layoutProps}>
      <div className={styles.shell}>
        {hasSidebar && (
          <aside className={styles.sidebar}>
            <BlogSidebar sidebar={sidebar} />
          </aside>
        )}
        <main className={styles.main}>
          {isChangelogIndex && (
            <div className={styles.subscribe}>
              <span className={styles.subscribeLabel}>📡 Subscribe to API changes</span>
              <a href="https://developer.sku.io/changelog/rss.xml">Full feed (RSS)</a>
              <span className={styles.subscribeSep}>·</span>
              <a href="https://developer.sku.io/changelog/breaking/rss.xml">Breaking only</a>
              <span className={styles.subscribeSep}>·</span>
              <Link to="/docs/guides/staying-notified">Set up alerts</Link>
            </div>
          )}
          {children}
        </main>
        {toc && <div className={styles.toc}>{toc}</div>}
      </div>
    </Layout>
  );
}
