import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
  ],
  authors: [{ name: "Aayushman Sharma", url: "https://portfolio.aayushmansharma.com.np" }],
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
    creator: "@aayushman108", // Assuming from github handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
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
                description: "Frontend Software Engineer with 2+ years of experience building scalable applications. Specialist in Next.js, TypeScript, and high-performance UI/UX.",
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
                  addressCountry: "NP"
                }
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
