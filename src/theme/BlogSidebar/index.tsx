import React, { type ReactNode } from "react";
import { useLocation } from "@docusaurus/router";
import BlogSidebar from "@theme-original/BlogSidebar";
import type { Props } from "@theme/BlogSidebar";
import ReleaseNotesTree from "@site/src/components/ReleaseNotesTree";

// The Release Notes feed gets a flat year > month post index — every entry
// visible, one click to a post. The card stream at /release-notes is the
// main view; this sidebar is just a date-jump convenience.
// The API Changelog feed keeps the stock reverse-chronological sidebar.
export default function BlogSidebarWrapper(props: Props): ReactNode {
  const { pathname } = useLocation();
  if (pathname.startsWith("/release-notes")) {
    return <ReleaseNotesTree />;
  }
  return <BlogSidebar {...props} />;
}
