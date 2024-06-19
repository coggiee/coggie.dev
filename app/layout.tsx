import "@/app/globals.css";
import type { Metadata } from "next";
import { notosanskr, aritaburi } from "../lib/fonts";
import { Analytics } from "@vercel/analytics/react";
import Nav from "../components/global/Nav";
import Footer from "../components/global/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
import Provider from "./provider";
import React from "react";

const LOGO_IMAGE = "https://i.ibb.co/M2nK5kv/logo.png";

export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV === "production"
      ? new URL("https://coggie.dev")
      : new URL("http://localhost:3000"),
  title: {
    template: "%s | Coggie",
    default: "COGGIE",
  },
  description: "FE 개발 블로그",
  icons: {
    icon: LOGO_IMAGE,
    apple: LOGO_IMAGE,
  },
  authors: [{ name: "Coggie" }],
  other: {
    "naver-site-verification": "db583c8efc6a2ebd36e6b839daf24a146b414c49",
    "google-site-verification": "0tnS6KVtqCXOMDRbpwRTkUZBQ5e0QJfw0SkCu8XHXA4",
  },
  openGraph: {
    title: "COGGIE",
    description: "FE 개발 블로그",
    url: "https://coggie.dev",
    siteName: "COGGIE.DEV",
    images: [
      {
        url: LOGO_IMAGE,
        width: 800,
        height: 600,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COGGIE.DEV",
    description: "FE 개발 블로그",
    creator: "@coggie",
    images: [LOGO_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${notosanskr.variable} ${aritaburi.variable} overflow-y-scroll scrollbar-thin dark:bg-dark`}
      >
        <Provider>
          <main className="flex flex-col gap-5 justify-center items-center min-h-screen">
            <Nav />
            <main className="h-full w-full flex justify-center items-center sm:items-start min-h-screen flex-grow px-5 gap-7">
              {children}
            </main>
            {/* <Footer /> */}
          </main>
          <Analytics />
          <SpeedInsights />
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
