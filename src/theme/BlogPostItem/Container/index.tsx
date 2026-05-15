import React, { type ReactNode } from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import styles from "./styles.module.css";

// In list / tag views, each release note renders as a card with a kind
// badge (Feature vs Fixes & Improvements). On the standalone post page the
// card chrome is dropped so the article reads full-width.
export default function BlogPostItemContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}): ReactNode {
  const { metadata, isBlogPostPage } = useBlogPost();
  const isRoundup = metadata.tags.some((tag) =>
    tag.permalink.endsWith("/roundup")
  );

  return (
    <article className={clsx(className, !isBlogPostPage && styles.card)}>
      {!isBlogPostPage && (
        <span
          className={clsx(
            styles.badge,
            isRoundup ? styles.badgeRoundup : styles.badgeFeature
          )}
        >
          {isRoundup ? "Fixes & Improvements" : "Feature"}
        </span>
      )}
      {children}
    </article>
  );
}
