import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of professional web development projects by Aayushman, specializing in React, Next.js, and high-performance frontend solutions.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
