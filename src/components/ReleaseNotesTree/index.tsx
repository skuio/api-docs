import React, { type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { usePluginData } from "@docusaurus/useGlobalData";
import styles from "./styles.module.css";

type Kind = "major-feature" | "minor-feature" | "roundup";
type Post = { title: string; date: string; permalink: string; kind: Kind };

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

type MonthNode = { key: string; label: string; posts: Post[] };
type YearNode = { key: string; label: string; months: MonthNode[] };

// Posts arrive newest-first; insertion order into each Map preserves that.
function buildIndex(posts: Post[]): YearNode[] {
  const years = new Map<string, YearNode>();

  for (const post of posts) {
    const [y, m] = post.date.split("-");
    const monthKey = `${y}-${m}`;

    let year = years.get(y);
    if (!year) {
      year = { key: y, label: y, months: [] };
      years.set(y, year);
    }

    let month = year.months.find((n) => n.key === monthKey);
    if (!month) {
      month = { key: monthKey, label: MONTHS[Number(m) - 1], posts: [] };
      year.months.push(month);
    }
    month.posts.push(post);
  }

  return Array.from(years.values());
}

export default function ReleaseNotesTree(): ReactNode {
  const { pathname } = useLocation();
  const data = usePluginData("release-notes-tree") as
    | { posts: Post[] }
    | undefined;
  const posts = data?.posts ?? [];
  const index = buildIndex(posts);

  return (
    <nav className={styles.sidebar} aria-label="Release notes by date">
      <Link to="/release-notes" className={styles.heading}>
        Release Notes
      </Link>
      {posts.length === 0 ? (
        <p className={styles.empty}>No releases yet.</p>
      ) : (
        <div className={styles.index}>
          {index.map((year) => (
            <div key={year.key} className={styles.year}>
              <div className={styles.yearLabel}>{year.label}</div>
              {year.months.map((month) => (
                <div key={month.key} className={styles.month}>
                  <div className={styles.monthLabel}>{month.label}</div>
                  <ul className={styles.posts}>
                    {month.posts.map((post) => (
                      <li key={post.permalink}>
                        <Link
                          to={post.permalink}
                          className={clsx(styles.post, {
                            [styles.activePost]: pathname === post.permalink,
                          })}
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
