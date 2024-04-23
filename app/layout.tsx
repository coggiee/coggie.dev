import "@/app/_styles/globals.css";
import type { Metadata } from "next";
import { notosanskr, aritaburi } from "./_libs/fonts";
import { ThemeProvider } from "./_provider/ThemeProvider";
import AuthProvider from "./_provider/AuthProvider";
import FramerProvider from "./_provider/FramerProvider";
import UIProvider from "./_provider/UIProvider";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import Nav from "./_common/global/Nav";
import InfoSiderbar from "./_common/sidebar/InfoSiderbar";
import RightSidebar from "./_common/sidebar/RightSidebar";
import Footer from "./_common/global/Footer";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/toaster";

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
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <FramerProvider>
              <UIProvider>
                <main className="flex flex-col gap-5 justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-item-dark">
                  <Nav />
                  <main className="h-full min-h-screen flex-grow flex flex-col justify-center items-center w-full px-5 lg:flex-row md:items-baseline gap-7">
                    <Suspense fallback={<Loading />}>
                      {/* <aside className="snap-start w-full min-w-0 lg:basis-1/2 basis-1/3 lg:max-w-sm lg:min-w-min flex flex-col flex-grow-0 flex-shrink-0 gap-5 md:snap-none">
                        <InfoSiderbar />
                        <RightSidebar />
                      </aside> */}
                      {children}
                      <aside className="snap-start hidden w-full min-w-0 basis-1/5 2xl:flex 2xl:flex-col 2xl:gap-5 self-start flex-grow-0 flex-shrink-0 md:snap-none">
                        {pinnedpost}
                        {recentpost}
                      </aside>
                    </Suspense>
                  </main>
                  <Footer />
                </main>
                <Analytics />
                <Toaster />
              </UIProvider>
            </FramerProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
