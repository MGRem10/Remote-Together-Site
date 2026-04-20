import { SchemaScript } from "@/components/schema-script";

type GuideSchemaProps = {
  headline: string;
  description: string;
  url: string;
};

export function GuideSchema({ headline, description, url }: GuideSchemaProps) {
  return (
    <SchemaScript
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        author: {
          "@type": "Organization",
          name: "Remote Together",
        },
        mainEntityOfPage: url,
      }}
    />
  );
}
