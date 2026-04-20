"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BrowseDestination, secondaryCta } from "@/data/site";

type DestinationBrowserProps = {
  items: BrowseDestination[];
  showContinentFilter?: boolean;
};

export function DestinationBrowser({
  items,
  showContinentFilter = false,
}: DestinationBrowserProps) {
  const [continent, setContinent] = useState("all");
  const [publishedOnly, setPublishedOnly] = useState(true);
  const [showUpcoming, setShowUpcoming] = useState(false);
  const [couplesOnly, setCouplesOnly] = useState(false);
  const [deepWorkOnly, setDeepWorkOnly] = useState(false);
  const [budget, setBudget] = useState("all");

  const continents = useMemo(
    () => Array.from(new Set(items.map((item) => item.continent))),
    [items],
  );

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (showContinentFilter && continent !== "all" && item.continent !== continent) {
        return false;
      }
      if (publishedOnly && item.status !== "published") {
        return false;
      }
      if (!showUpcoming && item.status === "upcoming") {
        return false;
      }
      if (couplesOnly && !item.bestForCouples) {
        return false;
      }
      if (deepWorkOnly && !item.bestForDeepWork) {
        return false;
      }
      if (budget !== "all" && item.budget !== budget) {
        return false;
      }
      return true;
    });
  }, [items, showContinentFilter, continent, publishedOnly, showUpcoming, couplesOnly, deepWorkOnly, budget]);

  return (
    <div>
      <div className="summary-panel panel-pad">
        <div className="eyebrow">Filters</div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setPublishedOnly((current) => !current)}
            className={filterClassName(publishedOnly)}
          >
            Published guides only
          </button>
          <button
            type="button"
            onClick={() => setShowUpcoming((current) => !current)}
            className={filterClassName(showUpcoming)}
          >
            Show upcoming destinations
          </button>
          <button
            type="button"
            onClick={() => setCouplesOnly((current) => !current)}
            className={filterClassName(couplesOnly)}
          >
            Best for couples
          </button>
          <button
            type="button"
            onClick={() => setDeepWorkOnly((current) => !current)}
            className={filterClassName(deepWorkOnly)}
          >
            Best for deep work
          </button>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {showContinentFilter ? (
            <label className="space-y-2">
              <span className="text-sm font-semibold text-[var(--text)]">Continent</span>
              <select
                value={continent}
                onChange={(event) => setContinent(event.target.value)}
                className="form-input"
              >
                <option value="all">All continents</option>
                {continents.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ) : null}

          <label className="space-y-2">
            <span className="text-sm font-semibold text-[var(--text)]">Budget level</span>
            <select
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className="form-input"
            >
              <option value="all">All budgets</option>
              <option value="low">Lower budget</option>
              <option value="mid">Mid-range</option>
              <option value="high">Higher budget</option>
            </select>
          </label>
        </div>

        <p className="body-sm mt-4">
          Published guides are prioritized by default. Turn on upcoming destinations if
          you want to see what is currently being researched next.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) =>
          item.status === "published" && item.guideSlug ? (
            <Link
              key={item.name}
              href={`/destinations/${item.guideSlug}`}
              className="group content-card card-pad transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[rgba(38,67,63,0.12)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-deep)]">
                  Published guide
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                  {formatBudget(item.budget)}
                </span>
              </div>
              <h3 className="card-title mt-5">
                {item.name}
              </h3>
              <p className="body-sm mt-4">
                Full destination guide with our best base, workability read, and the key
                tradeoffs to know before booking.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.bestForCouples ? (
                  <span className="rounded-full bg-[rgba(255,255,255,0.8)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--text)]">
                    Best for couples
                  </span>
                ) : null}
                {item.bestForDeepWork ? (
                  <span className="rounded-full bg-[rgba(255,255,255,0.8)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--text)]">
                    Best for deep work
                  </span>
                ) : null}
              </div>
            </Link>
          ) : (
            <article
              key={item.name}
              className="content-card card-pad"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[rgba(95,95,87,0.12)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  In research
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                  {formatBudget(item.budget)}
                </span>
              </div>
              <h3 className="card-title mt-5">
                {item.name}
              </h3>
              <div className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                {item.contentType}
              </div>
              <p className="body-sm mt-4">
                This destination is in the browse queue. Subscribe for updates if you
                want to hear when the guide goes live.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.bestForCouples ? (
                  <span className="rounded-full bg-[rgba(255,255,255,0.72)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--text)]">
                    Best for couples
                  </span>
                ) : null}
                {item.bestForDeepWork ? (
                  <span className="rounded-full bg-[rgba(255,255,255,0.72)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--text)]">
                    Best for deep work
                  </span>
                ) : null}
              </div>
              <Link href={secondaryCta.href} className="button-secondary mt-6">
                {secondaryCta.label}
              </Link>
            </article>
          ),
        )}
      </div>

      {filteredItems.length === 0 ? (
        <div className="content-card card-pad mt-8 body-sm">
          No destinations match those filters yet. Try widening the budget, turning off
          a fit filter, or including upcoming destinations.
        </div>
      ) : null}
    </div>
  );
}

function filterClassName(active: boolean) {
  return `rounded-full border px-4 py-3 text-sm transition-colors ${
    active
      ? "border-[rgba(38,67,63,0.24)] bg-[rgba(38,67,63,0.12)] text-[var(--text)]"
      : "border-[var(--border)] bg-[rgba(255,255,255,0.7)] text-[var(--muted)]"
  }`;
}

function formatBudget(value: BrowseDestination["budget"]) {
  if (value === "low") return "Lower budget";
  if (value === "mid") return "Mid-range";
  return "Higher budget";
}
