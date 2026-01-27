import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aayushman | Frontend Engineer & React Expert",
    template: "%s | Aayushman",
  },
  description:
    "Frontend Engineer & React Expert with 2+ years of experience building scalable applications. Specialist in Next.js, TypeScript, and high-performance UI/UX. Experienced in international collaborations and open to opportunities in Japan.",
  keywords: [
    "Aayushman",
    "Frontend Expert",
    "React Specialist",
    "Next.js Developer",
    "TypeScript Engineer",
    "Frontend Software Engineer",
    "Web Performance Expert",
    "UI/UX Developer",
    "Full Stack Knowledge",
  ],
  authors: [{ name: "Aayushman Sharma" }],
  creator: "Aayushman Sharma",
  metadataBase: new URL("https://aayushmansharma-portfolio.netlify.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aayushmansharma-portfolio.netlify.app",
    title: "Aayushman | Frontend Engineer & React Expert",
    description:
      "Explore the portfolio of Aayushman, showcasing modern web development projects and design expertise.",
    siteName: "Aayushman Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aayushman Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayushman | Frontend Engineer & React Expert",
    description:
      "Personal portfolio showcasing modern web development and design by Aayushman.",
    images: ["/og-image.png"],
  },
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
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Aayushman Sharma",
                url: "https://aayushmansharma-portfolio.netlify.app",
                jobTitle: "Frontend Software Engineer",
                sameAs: [
                  "https://github.com/aayushman108",
                  "https://www.linkedin.com/in/aayushman-sharma-a8abbb277/",
                ],
                knowsAbout: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Frontend Architecture",
                  "UI/UX Engineering",
                  "Web Performance",
                  "React Testing Library",
                  "GSAP",
                  "Framer Motion",
                  "Node.js",
                  "Express.js",
                  "PostgreSQL",
                ],
              }),
            }}
          />
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
