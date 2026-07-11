import type { Metadata } from "next";
import { siteConfig } from "./constants";

interface SeoOptions {
  title?: string;
  description?: string;
  path?: string;
}

/** Builds a consistent Metadata object for any page, extending the site defaults. */
export function buildMetadata({ title, description, path = "" }: SeoOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.shortName}` : siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.shortName,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      creator: siteConfig.twitterHandle,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

/** JSON-LD structured data describing the site owner as a Person + WebSite. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
    jobTitle: "Frontend Developer",
    image: `${siteConfig.url}/images/profile-avatar.png`,
    sameAs: [
      "https://github.com/",
      "https://linkedin.com/",
      "https://x.com/",
      "https://facebook.com/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Frontend Development",
      "UI/UX",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}
