import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SkipNav from "../../components/SkipNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adith Chandrasekaran | Senior CS Student & Looking for opportunities in Software Engineering and Product Management.",
  description:
    "Portfolio of Adith Chandrasekaran, senior computer science student seeking opportunities in software engineering and product management. Explore projects, experience, and contact information.",
  openGraph: {
    title: "Adith Chandrasekaran Portfolio",
    description:
      "Portfolio of Adith Chandrasekaran, senior CS student seeking opportunities in software engineering and product management.",
    url: undefined, // To be updated when site is published
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adith Chandrasekaran Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adith Chandrasekaran Portfolio",
    description:
      "Portfolio of Adith Chandrasekaran, senior CS student seeking opportunities in software engineering and product management.",
    images: ["/og-image.png"],
  },
  keywords: [
    "adith chandrasekaran",
    "portfolio",
    "computer science",
    "software engineering",
    "product management",
    "projects",
    "resume",
  ],
  authors: [
    { name: "Adith Chandrasekaran", url: "https://www.linkedin.com/in/adith-chandrasekaran/" },
    { name: "adithchandrac", url: "https://github.com/adithchandrac" },
  ],
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-black dark:bg-black">
        <SkipNav />
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
