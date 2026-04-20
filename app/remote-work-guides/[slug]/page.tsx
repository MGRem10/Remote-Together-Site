import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticleTemplate } from "@/components/guide-article-template";
import { guideArticles, guideHubAll, type GuideHubItem } from "@/data/site";

type GuidePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return guideArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: GuidePageProps): Metadata {
  const article = guideArticles.find((item) => item.slug === params.slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
    },
  };
}

export default function GuidePage({ params }: GuidePageProps) {
  const article = guideArticles.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedGuides = article.relatedSlugs
    .map((slug) => guideHubAll.find((item) => item.slug === slug))
    .filter((item): item is GuideHubItem => Boolean(item))
    .slice(0, 3);

  return <GuideArticleTemplate article={article} relatedGuides={relatedGuides} />;
}
