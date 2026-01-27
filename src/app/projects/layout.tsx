import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the projects and works of Aayushman, featuring full-stack development, modern UI/UX, and creative web solutions.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
