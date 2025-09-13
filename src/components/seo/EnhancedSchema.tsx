import Script from "next/script";
import { person, baseURL } from "@/resources";

interface PersonSchemaProps {
  baseURL: string;
  path: string;
}

interface OrganizationSchemaProps {
  baseURL: string;
  path: string;
  name: string;
  description: string;
  logo?: string;
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function PersonSchema({ baseURL, path }: PersonSchemaProps) {
  const normalizedBaseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  const url = `${normalizedBaseURL}${path}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    givenName: person.firstName,
    familyName: person.lastName,
    jobTitle: person.role,
    description: `${person.name} is an experienced ${person.role} from Bangladesh with 15+ years in software engineering, cloud solutions, and digital transformation.`,
    url: url,
    image: `${normalizedBaseURL}${person.avatar}`,
    email: person.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressRegion: "Dhaka"
    },
    knowsLanguage: person.languages?.map(lang => ({
      "@type": "Language",
      name: lang
    })) || [],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "North South University",
      address: {
        "@type": "PostalAddress",
        addressCountry: "BD",
        addressRegion: "Dhaka"
      }
    },
    worksFor: {
      "@type": "Organization",
      name: "Valiant Technologies",
      description: "Software engineering and IT services firm",
      foundingDate: "2012",
      address: {
        "@type": "PostalAddress",
        addressCountry: "BD",
        addressRegion: "Dhaka"
      }
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "IBM DevOps & Software Engineering Professional Certificate",
        credentialCategory: "Professional Certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "IBM"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Microsoft Certified: Azure Fundamentals",
        credentialCategory: "Professional Certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "Microsoft"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Google IT Support Professional Certificate",
        credentialCategory: "Professional Certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "Google"
        }
      }
    ],
    knowsAbout: [
      "Software Engineering",
      "Cloud Computing",
      "Digital Transformation",
      "DevOps",
      "SaaS Development",
      "Entrepreneurship",
      "Technology Consulting",
      "Business Development",
      "Startup Leadership",
      "Agile Development",
      "System Architecture",
      "Project Management"
    ],
    sameAs: [
      "https://www.linkedin.com/in/areezafsar/",
      "https://github.com/areez",
      "https://www.threads.net/@areez_afsar"
    ]
  };

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export function OrganizationSchema({ baseURL, path, name, description, logo }: OrganizationSchemaProps) {
  const normalizedBaseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  const url = `${normalizedBaseURL}${path}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: name,
    description: description,
    url: url,
    logo: logo ? `${normalizedBaseURL}${logo}` : undefined,
    founder: {
      "@type": "Person",
      name: person.name,
      jobTitle: person.role,
      email: person.email
    },
    foundingDate: "2012",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressRegion: "Dhaka"
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: person.email,
      contactType: "customer service"
    },
    sameAs: [
      "https://www.linkedin.com/in/areezafsar/",
      "https://github.com/areez"
    ]
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export function WebsiteSchema({ baseURL }: { baseURL: string }) {
  const normalizedBaseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${person.name} - Personal Portfolio`,
    description: `Personal portfolio and blog of ${person.name}, ${person.role}`,
    url: normalizedBaseURL,
    author: {
      "@type": "Person",
      name: person.name,
      jobTitle: person.role,
      email: person.email
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${normalizedBaseURL}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    sameAs: [
      "https://www.linkedin.com/in/areezafsar/",
      "https://github.com/areez",
      "https://www.threads.net/@areez_afsar"
    ]
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}