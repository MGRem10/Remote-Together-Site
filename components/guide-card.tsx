import Link from "next/link";
import { GuideHubItem } from "@/data/site";

type GuideCardProps = {
  guide: GuideHubItem;
  variant?: "featured" | "compact";
};

export function GuideCard({ guide, variant = "compact" }: GuideCardProps) {
  const featured = variant === "featured";

  return (
    <Link
      href={`/remote-work-guides/${guide.slug}`}
      className={featured ? "guides-hub-featured-card" : "guides-hub-all-card"}
    >
      <div className="guides-hub-card-top">
        <span className="guide-pill">{guide.category}</span>
        {guide.readingTime ? <span className="guide-meta">{guide.readingTime}</span> : null}
      </div>
      <h3 className={featured ? "guides-hub-featured-title" : "guides-hub-all-title"}>
        {guide.title}
      </h3>
      <p className="body-sm mt-4">{guide.description}</p>
    </Link>
  );
}
