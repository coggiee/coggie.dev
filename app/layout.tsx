import "@/app/globals.css";
import type { Metadata } from "next";
import { notosanskr, aritaburi } from "../lib/fonts";
import { ThemeProvider } from "../provider/ThemeProvider";
import AuthProvider from "../provider/AuthProvider";
import FramerProvider from "../provider/FramerProvider";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import Nav from "../components/global/Nav";
import InfoSiderbar from "../components/sidebar/InfoSiderbar";
import RightSidebar from "../components/sidebar/RightSidebar";
import Footer from "../components/global/Footer";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/toaster";
import Providers from "./providers";

const Loading = dynamic(() => import("./loading"));

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
  pinnedpost,
  recentpost,
}: {
  children: React.ReactNode;
  pinnedpost: React.ReactNode;
  recentpost: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${notosanskr.variable} ${aritaburi.variable} dark:bg-[#212121] transition-all ease-in-out overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[dodgerblue]/60`}
      >
        <Providers>
          <main className="flex flex-col gap-5 justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-item-dark">
            <Nav />
            <main className="h-full w-screen min-h-screen flex-grow px-5 gap-7">
              {children}
            </main>
            <Footer />
          </main>
          <Analytics />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
