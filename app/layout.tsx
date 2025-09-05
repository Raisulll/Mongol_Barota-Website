import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type React from "react";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIST Mongol Barota - Mars Rover Team",
  description:
    "MIST Mongol Barota is Bangladesh's premier Mars rover team, competing in University Rover Challenge and Anatolian Rover Challenge. URC 2021 Global Champions.",
  keywords: [
    "Mars rover",
    "robotics",
    "MIST",
    "University Rover Challenge",
    "Bangladesh",
    "space exploration",
    "engineering",
  ],
  authors: [{ name: "MIST Mongol Barota Team" }],
  creator: "MIST Mongol Barota",
  publisher: "Military Institute of Science and Technology",
  generator: "v0.app",
  icons: {
    icon: "/mars_rover_crop.png",
    shortcut: "/mars_rover_crop.png",
    apple: "/mars_rover_crop.png",
  },
  openGraph: {
    title: "MIST Mongol Barota - Mars Rover Team",
    description:
      "Bangladesh's premier Mars rover team. URC 2021 Global Champions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIST Mongol Barota - Mars Rover Team",
    description:
      "Bangladesh's premier Mars rover team. URC 2021 Global Champions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
