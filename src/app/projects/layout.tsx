import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of professional web development projects by Aayushman Sharma — featuring React, Next.js, TypeScript, and full-stack solutions including government systems, AI platforms, and e-commerce applications.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Aayushman",
    description:
      "Explore a complete collection of web development projects by Aayushman Sharma, from enterprise applications to creative experiments.",
    url: "https://portfolio.aayushmansharma.com.np/projects",
    type: "website",
  },
};

// Generate structured data for the projects collection page
function getProjectsStructuredData() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://portfolio.aayushmansharma.com.np",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://portfolio.aayushmansharma.com.np/projects",
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Projects — Aayushman Portfolio",
    description:
      "A complete collection of web development projects by Aayushman Sharma.",
    url: "https://portfolio.aayushmansharma.com.np/projects",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: PROJECTS.length,
      itemListElement: PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          dateCreated: project.year,
          author: {
            "@id": "https://portfolio.aayushmansharma.com.np/#person",
          },
          ...(project.live !== "#" && { url: project.live }),
          ...(project.github !== "#" && {
            codeRepository: project.github,
          }),
          keywords: project.tech.join(", "),
          genre: project.category,
        },
      })),
    },
  };

  return { breadcrumbSchema, collectionSchema };
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { breadcrumbSchema, collectionSchema } = getProjectsStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />
      {children}
    </>
  );
}
