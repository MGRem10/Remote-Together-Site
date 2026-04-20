"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";
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
  }, [budget, continent, couplesOnly, deepWorkOnly, items, publishedOnly, showContinentFilter, showUpcoming]);

  return (
    <div className="destination-browser">
      <Reveal className="destination-filter-panel" delay={20}>
        <div className="destination-filter-head">
          <div>
            <div className="eyebrow">Filter the browse</div>
            <h3 className="destination-filter-title">Find destinations that fit the trip.</h3>
          </div>
          <p className="body-sm max-w-xl">
            Published guides stay visible first by default. Turn on upcoming destinations
            only when you want to explore the research pipeline as well.
          </p>
        </div>

        <div className="destination-chip-row">
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

        <div className="destination-filter-grid">
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
      </Reveal>

      <div className="destination-card-grid">
        {filteredItems.map((item, index) =>
          item.status === "published" && item.guideSlug ? (
            <Reveal key={item.name} as="article" delay={80 + index * 45}>
              <Link href={`/destinations/${item.guideSlug}`} className="destination-card-link">
                <div className="destination-card-image-shell">
                  <div
                    className="destination-card-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="destination-card-overlay" />
                  <div className="destination-card-status-row">
                    <span className="destination-status-badge destination-status-published">
                      Published guide
                    </span>
                    <span className="destination-budget-badge">{formatBudget(item.budget)}</span>
                  </div>
                  <div className="destination-card-top-meta">
                    <span>{item.stayStyle}</span>
                    <span>{item.workability}</span>
                  </div>
                </div>

                <div className="destination-card-body">
                  <div className="destination-card-title-row">
                    <h3 className="destination-card-title">{item.name}</h3>
                    <span className="destination-card-arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                  <p className="destination-card-copy">{item.positioning}</p>
                  <div className="destination-tag-row">
                    {item.bestForCouples ? (
                      <span className="destination-tag">Best for couples</span>
                    ) : null}
                    {item.bestForDeepWork ? (
                      <span className="destination-tag">Best for deep work</span>
                    ) : null}
                  </div>
                </div>
              </Link>
            </Reveal>
          ) : (
            <Reveal key={item.name} as="article" delay={80 + index * 45} className="destination-card-upcoming">
              <div className="destination-card-image-shell">
                <div
                  className="destination-card-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="destination-card-overlay" />
                <div className="destination-card-status-row">
                  <span className="destination-status-badge destination-status-upcoming">
                    In research
                  </span>
                  <span className="destination-budget-badge">{formatBudget(item.budget)}</span>
                </div>
                <div className="destination-card-top-meta">
                  <span>{item.stayStyle}</span>
                  <span>{item.workability}</span>
                </div>
              </div>

              <div className="destination-card-body">
                <div className="destination-card-title-row">
                  <h3 className="destination-card-title">{item.name}</h3>
                </div>
                <p className="destination-card-copy">{item.positioning}</p>
                <div className="destination-upcoming-meta">{item.contentType}</div>
                <div className="destination-tag-row">
                  {item.bestForCouples ? (
                    <span className="destination-tag">Best for couples</span>
                  ) : null}
                  {item.bestForDeepWork ? (
                    <span className="destination-tag">Best for deep work</span>
                  ) : null}
                </div>
                <Link href={secondaryCta.href} className="button-secondary mt-5">
                  {secondaryCta.label}
                </Link>
              </div>
            </Reveal>
          ),
        )}
      </div>

      {filteredItems.length === 0 ? (
        <Reveal className="destination-empty-state" delay={60}>
          No destinations match those filters yet. Try widening the budget, turning off a
          fit filter, or including upcoming destinations.
        </Reveal>
      ) : null}
    </div>
  );
}

function filterClassName(active: boolean) {
  return `destination-filter-chip ${active ? "destination-filter-chip-active" : ""}`;
}

function formatBudget(value: BrowseDestination["budget"]) {
  if (value === "low") return "Lower budget";
  if (value === "mid") return "Mid-range";
  return "Higher budget";
}
