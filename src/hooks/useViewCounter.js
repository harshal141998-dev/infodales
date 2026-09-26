import { useEffect, useState } from "react";

// Change this to something unique to your site so your counts
// never mix with someone else's on the shared free service.
const NAMESPACE = "infodales-blog";

// Free, no-signup hit counter service. Each (NAMESPACE, slug) pair
// gets its own running total, stored on their server.
const BASE_URL = "https://tally.yuki.sh/hits";

/**
 * Tracks views for a single blog post.
 *
 * @param {string} slug - unique id of the blog post (article.slug)
 * @param {boolean} increment - true to count this load as a view,
 *                              false to just read the current count
 */
export function useViewCounter(slug, increment = true) {
  const [views, setViews] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!slug) return;

    let isCancelled = false;

    // Avoid double-counting: mark this slug as "counted" in sessionStorage
    // BEFORE the request goes out (not after it resolves). This matters
    // because React's StrictMode (dev mode only) mounts every component
    // twice in a row, and if we waited for the fetch to finish before
    // marking it, both mounts could fire their request before either
    // one finished, incrementing twice for a single real page view.
    const sessionKey = `viewed:${slug}`;
    const alreadyCountedThisSession = increment && sessionStorage.getItem(sessionKey);
    const shouldIncrement = increment && !alreadyCountedThisSession;

    if (shouldIncrement) sessionStorage.setItem(sessionKey, "1");

    const url = `${BASE_URL}/${NAMESPACE}/${encodeURIComponent(slug)}${
      shouldIncrement ? "" : "?mode=read"
    }`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Counter request failed");
        return res.json();
      })
      .then((data) => {
        if (isCancelled) return;
        setViews(data.visit ?? 0);
      })
      .catch(() => {
        if (isCancelled) return;
        setFailed(true);
        // The request never went through, so don't leave this slug
        // falsely marked as counted - let a later visit try again.
        if (shouldIncrement) sessionStorage.removeItem(sessionKey);
      });

    return () => {
      isCancelled = true;
    };
  }, [slug, increment]);

  return { views, failed };
}
