import Script from "next/script";
import { person, baseURL } from "@/resources";

interface CaseStudySchemaProps {
  title: string;
  description: string;
  baseURL: string;
  path: string;
  publishedAt: string;
  image?: string;
  technologies?: string[];
  client?: string;
  duration?: string;
}

export function CaseStudySchema({
  title,
  description,
  baseURL,
  path,
  publishedAt,
  image,
  technologies = [],
  client,
  duration,
}: CaseStudySchemaProps) {
  const normalizedBaseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${normalizedBaseURL}${normalizedPath}`;
  const imageUrl = image
    ? `${normalizedBaseURL}${image.startsWith("/") ? image : `/${image}`}`
    : `${normalizedBaseURL}/api/og/generate?title=${encodeURIComponent(title)}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": url,
    name: title,
    headline: title,
    description: description,
    url: url,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Person",
      name: person.name,
      jobTitle: person.role,
      email: person.email,
      url: `${normalizedBaseURL}/about`,
      image: `${normalizedBaseURL}${person.avatar}`,
      sameAs: [
        "https://www.linkedin.com/in/areezafsar/",
        "https://github.com/areez",
        "https://www.threads.net/@areez_afsar",
      ],
    },
    publisher: {
      "@type": "Person",
      name: person.name,
      jobTitle: person.role,
      email: person.email,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    genre: "Software Engineering Case Study",
    keywords: [
      "Software Engineering",
      "Case Study",
      "Technology Consulting",
      "Digital Transformation",
      ...technologies,
    ],
    about: {
      "@type": "Thing",
      name: "Software Engineering Project",
      description: "Professional software engineering case study and project documentation",
    },
    ...(client && {
      sponsor: {
        "@type": "Organization",
        name: client,
      },
    }),
    ...(duration && {
      temporalCoverage: duration,
    }),
    inLanguage: "en-US",
    isAccessibleForFree: true,
    license: "https://creativecommons.org/licenses/by/4.0/",
  };

  return (
    <Script
      id={`case-study-schema-${path}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default CaseStudySchema;