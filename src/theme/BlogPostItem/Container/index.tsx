import React, { type ReactNode } from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import styles from "./styles.module.css";

// In list / tag views, each release note renders as a card with a kind
// badge (Major Feature / Minor Feature / Fixes & Improvements). On the
// standalone post page the card chrome is dropped so the article reads
// full-width.
const BADGES = {
  roundup: { label: "Fixes & Improvements", className: "badgeRoundup" },
  "major-feature": { label: "Major Feature", className: "badgeMajor" },
  "minor-feature": { label: "Minor Feature", className: "badgeMinor" },
} as const;

export default function BlogPostItemContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}): ReactNode {
  const { metadata, isBlogPostPage } = useBlogPost();
  const tagEndsWith = (suffix: string): boolean =>
    metadata.tags.some((tag) => tag.permalink.endsWith(suffix));
  const kind = tagEndsWith("/roundup")
    ? "roundup"
    : tagEndsWith("/major-feature")
      ? "major-feature"
      : "minor-feature";
  const badge = BADGES[kind];

  return (
    <article className={clsx(className, !isBlogPostPage && styles.card)}>
      {!isBlogPostPage && (
        <span className={clsx(styles.badge, styles[badge.className])}>
          {badge.label}
        </span>
      )}
      {children}
    </article>
  );
}
