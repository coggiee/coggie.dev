import React, { Suspense } from "react";
import Nav from "../_components/common/Nav";
import RightSidebar from "../_components/sidebar/RightSidebar";
import Footer from "../_components/common/Footer";
import InfoSiderbar from "../_components/sidebar/InfoSiderbar";
import Loading from "./loading";

export default function PostLayout({
  children,
  pinnedpost,
  recentpost,
}: {
  children: React.ReactNode;
  pinnedpost: React.ReactNode;
  recentpost: React.ReactNode;
}) {
  return (
    <main className="flex flex-col gap-5 justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-item-dark">
      <Nav />
      <main className="h-full min-h-screen flex-grow flex flex-col justify-center items-center w-full px-5 lg:flex-row md:items-baseline font-notosanskr gap-7 pb-5">
        <Suspense fallback={<Loading />}>
          <aside className="snap-start w-full min-w-0 lg:basis-1/2 basis-1/3 lg:max-w-sm lg:min-w-min flex flex-col flex-grow-0 flex-shrink-0 gap-5 md:snap-none">
            <InfoSiderbar />
            <RightSidebar />
          </aside>
          {children}
          <aside className="snap-start hidden w-full min-w-0 basis-1/5 2xl:flex 2xl:flex-col 2xl:gap-5 self-start flex-grow-0 flex-shrink-0 md:snap-none">
            {pinnedpost}
            {recentpost}
          </aside>
        </Suspense>
      </main>
      <Footer />
    </main>
  );
}
