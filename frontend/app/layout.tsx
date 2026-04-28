import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fachryikhsal.learnesia.co.id"),

  title: {
    default: "Fachry Ikhsal | Full-Stack Engineer & AI Developer",
    template: "%s | Fachry Ikhsal", // subpages: "Projects | Fachry Ikhsal"
  },
  description:
    "Full-Stack Software Engineer with 2+ years experience in React, Next.js, Go, DevOps, and AI/LLM orchestration. Based in Jakarta, Indonesia.",
  keywords: [
    "Fachry Ikhsal",
    "software engineer Jakarta",
    "full stack developer Indonesia",
    "Next.js Go developer",
    "AI engineer",
    "LLM orchestration",
  ],

  // Canonical tag — for google search indexing
  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    type: "website",
    url: "https://fachryikhsal.learnesia.co.id",
    title: "Fachry Ikhsal | Full-Stack Engineer & AI Developer",
    description:
      "Full-Stack Engineer specializing in Machine Learning and Software DevelopmentReact. Tech Stacks: Python, React JS, Next.js, Go",
    siteName: "Fachry Ikhsal",
    images: [
      {
        url: "/fachry.jpg",
        width: 1200,
        height: 630,
        alt: "Fachry Ikhsal - Software Engineer",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "Fachry Ikhsal | Full-Stack Engineer",
    description: "Full-Stack Engineer. React, Next.js, Go, AI.",
    images: ["/fachry.jpg"],
  },

  // Robots — explicitly allow everything
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
