import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Aayushman | Frontend Engineer & React Expert",
    template: "%s | Aayushman",
  },
  description:
    "Frontend Engineer & React Expert with 2+ years of experience building scalable applications. Specialist in Next.js, TypeScript, and high-performance UI/UX. Experienced in international collaborations and open to opportunities in Japan.",
  keywords: [
    "Aayushman",
    "Aayushman Sharma",
    "Frontend Developer",
    "Frontend Expert",
    "React Developer",
    "React Specialist",
    "Next.js Developer",
    "Frontend Software Engineer",
    "TypeScript Engineer",
    "Javascript Developer",
    "Web Performance Expert",
    "UI/UX Developer",
    "Full Stack Knowledge",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [
    {
      name: "Aayushman Sharma",
      url: "https://portfolio.aayushmansharma.com.np",
    },
  ],
  creator: "Aayushman Sharma",
  publisher: "Aayushman Sharma",
  metadataBase: new URL("https://portfolio.aayushmansharma.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.aayushmansharma.com.np",
    title: "Aayushman | Frontend Engineer & React Expert",
    description:
      "Explore the portfolio of Aayushman, featuring high-performance web applications, modern UI/UX design, and expertise in React and Next.js.",
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
      "Frontend Software Engineer specializing in React and Next.js. Check out my latest projects and work experience.",
    images: ["/og-image.png"],
    creator: "@aayushman108",
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
  category: "technology",
  // Uncomment and add your verification IDs after registering with each platform:
  // verification: {
  //   google: "your-google-verification-id",
  //   yandex: "your-yandex-verification-id",
  // },
};

// JSON-LD structured data for the entire site
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://portfolio.aayushmansharma.com.np/#person",
  name: "Aayushman Sharma",
  alternateName: "Aayushman",
  url: "https://portfolio.aayushmansharma.com.np",
  image: "https://portfolio.aayushmansharma.com.np/og-image.png",
  sameAs: [
    "https://github.com/aayushman108",
    "https://www.linkedin.com/in/aayushman-sharma-a8abbb277/",
  ],
  jobTitle: "Frontend Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  description:
    "Frontend Software Engineer with 2+ years of experience building scalable applications. Specialist in Next.js, TypeScript, and high-performance UI/UX.",
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
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://portfolio.aayushmansharma.com.np/#website",
  url: "https://portfolio.aayushmansharma.com.np",
  name: "Aayushman Portfolio",
  description:
    "Portfolio of Aayushman Sharma — Frontend Software Engineer specializing in React, Next.js, and TypeScript.",
  publisher: {
    "@id": "https://portfolio.aayushmansharma.com.np/#person",
  },
  inLanguage: "en-US",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's your experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I have over two years of professional experience as a Frontend Software Engineer, specializing in React, Next.js, and TypeScript to build scalable and reliable web applications for international clients.",
      },
    },
    {
      "@type": "Question",
      name: "Are you available for freelance or remote work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I'm currently working full-time, but I'm open to discussing freelance or remote opportunities if they're a good fit.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of projects have you worked on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I've worked on government systems, AI-powered platforms, dashboards, and e-commerce applications, ranging from large-scale data-driven systems to customer-facing websites.",
      },
    },
    {
      "@type": "Question",
      name: "How do you approach development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I start by understanding the problem and requirements, then focus on building clean, maintainable code with strong attention to performance, accessibility, and user experience.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with animations and interactions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I regularly use GSAP, Framer Motion, and other modern animation libraries to create smooth, performant, and purposeful UI interactions.",
      },
    },
    {
      "@type": "Question",
      name: "How can we collaborate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach out through the contact section. We can discuss your project, timeline, and see how I can contribute.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Structured Data: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Fallback for no-JS crawlers: ensure content is visible without JavaScript */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                #transition-overlay { display: none !important; }
                #page-content { opacity: 1 !important; transform: none !important; }
                .hero-fade, .hero-cta-btn, .hero-globe, .hero-fade-label, .hero-fade-subtitle, .hero-fade-bottom,
                .about-content, .about-stat, .skill-item, .contact-content, .contact-link,
                .questions-header, .question-item, .questions-footer, .cta-content,
                .section-text-reveal, .section-description, .section-right-element,
                .page-header, .project-card {
                  opacity: 1 !important;
                  transform: none !important;
                }
              `,
            }}
          />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageLoader />
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
