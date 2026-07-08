import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

// Matches an OpenAPI operation page slug: <method>-<path...>. Tag landing pages
// (foo.tag.mdx) and the info page don't carry this prefix, so the permission
// badge is shown only on real endpoint pages.
const OPERATION_SLUG = /\/(get|post|put|patch|delete|head|options)-[^/]+$/i;

// Fetched once, shared across every PageActions instance for the session.
let scopeIndexPromise: Promise<Record<string, string>> | null = null;

function loadScopeIndex(url: string): Promise<Record<string, string>> {
  if (!scopeIndexPromise) {
    scopeIndexPromise = fetch(url)
      .then((r) => (r.ok ? r.json() : {}))
      .catch(() => ({}));
  }
  return scopeIndexPromise;
}

// Rate-limit lookup (static/rate-limit-index.json): a `_default` platform limit
// plus per-endpoint overrides keyed by slug. Each entry's `limits` are sorted
// most-restrictive-first by the build-time generator, so limits[0] is the badge
// headline and the rest (if any) stack and appear in the tooltip.
type RateLimit = { n: number; w: string };
type RateLimitEntry = { limits: RateLimit[] };
type RateLimitIndex = Record<string, RateLimitEntry>;

let rateLimitIndexPromise: Promise<RateLimitIndex> | null = null;

function loadRateLimitIndex(url: string): Promise<RateLimitIndex> {
  if (!rateLimitIndexPromise) {
    rateLimitIndexPromise = fetch(url)
      .then((r) => (r.ok ? r.json() : {}))
      .catch(() => ({}));
  }
  return rateLimitIndexPromise;
}

const WINDOW_SHORT: Record<string, string> = {
  second: "sec",
  minute: "min",
  hour: "hour",
  day: "day",
};

function formatLimit(limit: RateLimit): string {
  return `${limit.n.toLocaleString("en-US")}/${WINDOW_SHORT[limit.w] ?? limit.w}`;
}

function formatLimitLong(limit: RateLimit): string {
  return `${limit.n.toLocaleString("en-US")} requests per ${limit.w}`;
}

type CopyState = "idle" | "copied" | "error";

export default function PageActions(): React.ReactElement | null {
  const { pathname } = useLocation();
  const scopeIndexUrl = useBaseUrl("/scope-index.json");
  const rateLimitIndexUrl = useBaseUrl("/rate-limit-index.json");

  const [mounted, setMounted] = useState(false);
  const [scope, setScope] = useState<string | null>(null);
  const [rateLimit, setRateLimit] = useState<RateLimitEntry | null>(null);
  const [rateLimitIsDefault, setRateLimitIsDefault] = useState(true);
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Avoid SSR/client mismatch: the badge depends on an async fetch, so render
  // the interactive bar only after mount.
  useEffect(() => {
    setMounted(true);
  }, []);

  const slug = pathname.replace(/\/$/, "").split("/").pop() ?? "";
  const isOperationPage = OPERATION_SLUG.test(pathname);

  useEffect(() => {
    if (!isOperationPage) {
      setScope(null);
      return;
    }
    let active = true;
    loadScopeIndex(scopeIndexUrl).then((index) => {
      if (active) {
        setScope(index[slug] ?? null);
      }
    });
    return () => {
      active = false;
    };
  }, [slug, isOperationPage, scopeIndexUrl]);

  useEffect(() => {
    if (!isOperationPage) {
      setRateLimit(null);
      return;
    }
    let active = true;
    loadRateLimitIndex(rateLimitIndexUrl).then((index) => {
      if (!active) {
        return;
      }
      const override = index[slug];
      const entry = override ?? index._default ?? null;
      setRateLimit(entry && entry.limits?.length ? entry : null);
      setRateLimitIsDefault(!override);
    });
    return () => {
      active = false;
    };
  }, [slug, isOperationPage, rateLimitIndexUrl]);

  // Close the dropdown on outside click / Escape.
  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const markdownPath = `${pathname.replace(/\/$/, "")}.md`;
  const absoluteMarkdownUrl =
    typeof window !== "undefined" ? `${window.location.origin}${markdownPath}` : markdownPath;

  const copyMarkdown = useCallback(async () => {
    try {
      const res = await fetch(markdownPath);
      if (!res.ok) {
        throw new Error(`status ${res.status}`);
      }
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    setMenuOpen(false);
    window.setTimeout(() => setCopyState("idle"), 2200);
  }, [markdownPath]);

  const aiPrompt = `Read the SKU.io API reference at ${absoluteMarkdownUrl} and help me use this endpoint.`;
  const claudeUrl = `https://claude.ai/new?q=${encodeURIComponent(aiPrompt)}`;
  const chatgptUrl = `https://chatgpt.com/?q=${encodeURIComponent(aiPrompt)}`;

  if (!mounted) {
    return null;
  }

  const copyLabel =
    copyState === "copied" ? "Copied!" : copyState === "error" ? "Copy failed" : "Copy page";

  const rateHeadline = rateLimit ? formatLimit(rateLimit.limits[0]) : null;
  const rateTitle = !rateLimit
    ? undefined
    : rateLimitIsDefault
      ? `Platform rate limit: ${formatLimitLong(rateLimit.limits[0])} per API token (and per IP). On HTTP 429, honor the Retry-After header.`
      : rateLimit.limits.length === 1
        ? `This endpoint is rate-limited to ${formatLimitLong(rateLimit.limits[0])} — tighter than the 1,000/min platform default. On HTTP 429, honor the Retry-After header.`
        : `This endpoint stacks multiple rate limits: ${rateLimit.limits
            .map(formatLimit)
            .join(" and ")}. All apply; the most restrictive binds. On HTTP 429, honor the Retry-After header.`;

  return (
    <div className={styles.bar} ref={rootRef}>
      {isOperationPage && (
        <div className={styles.badgeGroup}>
          <span
            className={scope ? styles.badgeScoped : styles.badgePublic}
            title={
              scope
                ? `This endpoint requires the ${scope} scope on the API token.`
                : "Any valid API token can call this endpoint — no specific scope required."
            }
          >
            <span className={styles.badgeIcon} aria-hidden="true">
              {scope ? "🔒" : "🔓"}
            </span>
            {scope ? (
              <>
                Requires <code className={styles.badgeCode}>{scope}</code>
              </>
            ) : (
              "Public — any token"
            )}
          </span>

          {rateHeadline && (
            <span
              className={rateLimitIsDefault ? styles.badgeRate : styles.badgeRateTight}
              title={rateTitle}
            >
              <span className={styles.badgeIcon} aria-hidden="true">
                ⏱
              </span>
              {rateHeadline}
            </span>
          )}
        </div>
      )}

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.copyButton}
          onClick={copyMarkdown}
          data-state={copyState}
        >
          <span className={styles.copyIcon} aria-hidden="true">
            {copyState === "copied" ? "✓" : "❐"}
          </span>
          {copyLabel}
        </button>
        <button
          type="button"
          className={styles.caret}
          aria-label="More page actions"
          aria-expanded={menuOpen}
          aria-haspopup="menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          ▾
        </button>

        {menuOpen && (
          <div className={styles.menu} role="menu">
            <button type="button" role="menuitem" className={styles.menuItem} onClick={copyMarkdown}>
              <span className={styles.menuIcon} aria-hidden="true">
                ❐
              </span>
              <span>
                <strong>Copy as Markdown</strong>
                <small>Clean text for pasting into an LLM</small>
              </span>
            </button>
            <a
              role="menuitem"
              className={styles.menuItem}
              href={markdownPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.menuIcon} aria-hidden="true">
                ↗
              </span>
              <span>
                <strong>View as Markdown</strong>
                <small>Open the .md source of this page</small>
              </span>
            </a>
            <a
              role="menuitem"
              className={styles.menuItem}
              href={claudeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.menuIcon} aria-hidden="true">
                ✳
              </span>
              <span>
                <strong>Open in Claude</strong>
                <small>Start a chat with this page as context</small>
              </span>
            </a>
            <a
              role="menuitem"
              className={styles.menuItem}
              href={chatgptUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.menuIcon} aria-hidden="true">
                ◎
              </span>
              <span>
                <strong>Open in ChatGPT</strong>
                <small>Start a chat with this page as context</small>
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
