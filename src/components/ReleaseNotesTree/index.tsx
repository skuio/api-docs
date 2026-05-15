import React, { useState, type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { usePluginData } from "@docusaurus/useGlobalData";
import styles from "./styles.module.css";

type Post = { title: string; date: string; permalink: string };

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function utcDate(s: string): Date {
  return new Date(`${s}T00:00:00Z`);
}

// Monday of the ISO week containing `dateStr`.
function mondayOf(dateStr: string): string {
  const d = utcDate(dateStr);
  const day = d.getUTCDay(); // 0 = Sunday
  d.setUTCDate(d.getUTCDate() + (day === 0 ? -6 : 1 - day));
  return d.toISOString().slice(0, 10);
}

function shortDate(dateStr: string): string {
  const d = utcDate(dateStr);
  return `${MONTHS[d.getUTCMonth()].slice(0, 3)} ${d.getUTCDate()}`;
}

type DayNode = { key: string; label: string; posts: Post[] };
type WeekNode = { key: string; label: string; count: number; days: DayNode[] };
type MonthNode = { key: string; label: string; count: number; weeks: WeekNode[] };
type YearNode = { key: string; label: string; count: number; months: MonthNode[] };

// Posts arrive newest-first; insertion order into each Map preserves that.
function buildTree(posts: Post[]): YearNode[] {
  const years = new Map<string, YearNode>();

  for (const post of posts) {
    const [y, m, d] = post.date.split("-");
    const monthKey = `${y}-${m}`;
    const weekKey = mondayOf(post.date);
    const dayKey = post.date;

    let year = years.get(y);
    if (!year) {
      year = { key: y, label: y, count: 0, months: [] };
      years.set(y, year);
    }
    year.count++;

    let month = year.months.find((n) => n.key === monthKey);
    if (!month) {
      month = {
        key: monthKey,
        label: MONTHS[Number(m) - 1],
        count: 0,
        weeks: [],
      };
      year.months.push(month);
    }
    month.count++;

    let week = month.weeks.find((n) => n.key === weekKey);
    if (!week) {
      week = {
        key: weekKey,
        label: `Week of ${shortDate(weekKey)}`,
        count: 0,
        days: [],
      };
      month.weeks.push(week);
    }
    week.count++;

    let dayNode = week.days.find((n) => n.key === dayKey);
    if (!dayNode) {
      dayNode = { key: dayKey, label: shortDate(dayKey), posts: [] };
      week.days.push(dayNode);
    }
    dayNode.posts.push(post);
  }

  return Array.from(years.values());
}

const ACTIVE_RE = /\/release-notes\/(\d{4})\/(\d{2})\/(\d{2})\//;

function Branch({
  label,
  count,
  depth,
  defaultOpen,
  children,
}: {
  label: ReactNode;
  count: number;
  depth: number;
  defaultOpen: boolean;
  children: ReactNode;
}): ReactNode {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <li className={styles.item}>
      <button
        type="button"
        className={clsx(styles.branch, styles[`depth${depth}`], {
          [styles.open]: open,
        })}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={styles.caret} aria-hidden="true">
          ▸
        </span>
        <span className={styles.label}>{label}</span>
        <span className={styles.count}>{count}</span>
      </button>
      {open && <ul className={styles.children}>{children}</ul>}
    </li>
  );
}

export default function ReleaseNotesTree(): ReactNode {
  const { pathname } = useLocation();
  const data = usePluginData("release-notes-tree") as
    | { posts: Post[] }
    | undefined;
  const posts = data?.posts ?? [];
  const tree = buildTree(posts);

  // Resolve the active post's date so the tree opens straight to it.
  const activeMatch = pathname.match(ACTIVE_RE);
  const active = activeMatch
    ? {
        year: activeMatch[1],
        month: `${activeMatch[1]}-${activeMatch[2]}`,
        day: `${activeMatch[1]}-${activeMatch[2]}-${activeMatch[3]}`,
        week: mondayOf(`${activeMatch[1]}-${activeMatch[2]}-${activeMatch[3]}`),
      }
    : null;

  // With no active post (list / tag / archive pages), open the latest path.
  const firstYear = tree[0];
  const firstMonth = firstYear?.months[0];
  const firstWeek = firstMonth?.weeks[0];
  const firstDay = firstWeek?.days[0];

  const openYear = active?.year ?? firstYear?.key;
  const openMonth = active?.month ?? firstMonth?.key;
  const openWeek = active?.week ?? firstWeek?.key;
  const openDay = active?.day ?? firstDay?.key;

  return (
    <nav className={styles.sidebar} aria-label="Release notes by date">
      <Link to="/release-notes" className={styles.heading}>
        Release Notes
      </Link>
      {posts.length === 0 ? (
        <p className={styles.empty}>No releases yet.</p>
      ) : (
        <ul className={styles.tree}>
          {tree.map((year) => (
            <Branch
              key={year.key}
              label={year.label}
              count={year.count}
              depth={0}
              defaultOpen={year.key === openYear}
            >
              {year.months.map((month) => (
                <Branch
                  key={month.key}
                  label={month.label}
                  count={month.count}
                  depth={1}
                  defaultOpen={month.key === openMonth}
                >
                  {month.weeks.map((week) => (
                    <Branch
                      key={week.key}
                      label={week.label}
                      count={week.count}
                      depth={2}
                      defaultOpen={week.key === openWeek}
                    >
                      {week.days.map((day) => (
                        <Branch
                          key={day.key}
                          label={day.label}
                          count={day.posts.length}
                          depth={3}
                          defaultOpen={day.key === openDay}
                        >
                          {day.posts.map((post) => (
                            <li key={post.permalink} className={styles.item}>
                              <Link
                                to={post.permalink}
                                className={clsx(styles.post, {
                                  [styles.activePost]:
                                    pathname === post.permalink,
                                })}
                              >
                                {post.title}
                              </Link>
                            </li>
                          ))}
                        </Branch>
                      ))}
                    </Branch>
                  ))}
                </Branch>
              ))}
            </Branch>
          ))}
        </ul>
      )}
    </nav>
  );
}
