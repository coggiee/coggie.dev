import "@/app/_styles/globals.css";
import type { Metadata } from "next";
import { amaranth, notosanskr } from "../assets/fonts";
import { Providers } from "./_provider/providers";
import AuthProvider from "./_provider/AuthProvider";
import FramerProvider from "./_provider/FramerProvider";
import UIProvider from "./_provider/UIProvider";
import { Suspense } from "react";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/react";

export const dynamic = "dynamic";

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
        className={`${notosanskr.variable} ${amaranth.variable} dark:bg-[#212121] transition-all ease-in-out overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[dodgerblue]/60`}
      >
        <AuthProvider>
          <Providers>
            <FramerProvider>
              <UIProvider>
                <main className="w-full h-screen min-h-screen dark:bg-item-dark">
                  <Suspense fallback={<Loading />}>{children}</Suspense>
                  <Analytics />
                </main>
              </UIProvider>
            </FramerProvider>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
