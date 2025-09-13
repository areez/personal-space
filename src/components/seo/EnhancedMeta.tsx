import { Metadata } from "next";
import { person } from "@/resources";

interface EnhancedMetaProps {
  title: string;
  description: string;
  baseURL: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  locale?: string;
}

export function generateEnhancedMetadata({
  title,
  description,
  baseURL,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  tags,
  locale = "en_US",
}: EnhancedMetaProps): Metadata {
  const normalizedBaseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${normalizedBaseURL}${normalizedPath}`;
  const imageUrl = image
    ? `${normalizedBaseURL}${image.startsWith("/") ? image : `/${image}`}`
    : `${normalizedBaseURL}/api/og/generate?title=${encodeURIComponent(title)}`;

  const metadata: Metadata = {
    title,
    description,
    keywords: tags?.join(", "),
    authors: author ? [{ name: author }] : [{ name: person.name }],
    creator: person.name,
    publisher: person.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: type as any,
      title,
      description,
      url,
      siteName: `${person.name} - Personal Portfolio`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@areez_afsar",
      site: "@areez_afsar",
    },
    other: {
      "article:author": author || person.name,
      "article:publisher": person.name,
      ...(tags && { "article:tag": tags.join(", ") }),
      "og:image:width": "1200",
      "og:image:height": "630",
      "twitter:image:alt": title,
    },
  };

  return metadata;
}

export default generateEnhancedMetadata;