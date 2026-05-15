import React, { type ReactNode } from "react";
import Layout from "@theme/Layout";
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

  return (
    <Layout {...layoutProps}>
      <div className={styles.shell}>
        {hasSidebar && (
          <aside className={styles.sidebar}>
            <BlogSidebar sidebar={sidebar} />
          </aside>
        )}
        <main className={styles.main}>{children}</main>
        {toc && <div className={styles.toc}>{toc}</div>}
      </div>
    </Layout>
  );
}
