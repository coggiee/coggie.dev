import React from 'react';
import Nav from '../_components/common/Nav';
import RightSidebar from '../_components/sidebar/RightSidebar';
import Footer from '../_components/common/Footer';
import InfoSiderbar from '../_components/sidebar/InfoSiderbar';

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full h-full min-h-full'>
      <main className='flex flex-col justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-item-dark'>
        <Nav />
        <main className='h-full min-h-screen flex-grow flex flex-col justify-center items-center w-full px-5 lg:flex-row md:items-baseline font-notosanskr gap-3 pb-5'>
          <aside className='snap-start w-full min-w-0 lg:basis-1/2 basis-1/3 lg:max-w-sm lg:min-w-min flex flex-col flex-grow-0 flex-shrink-0 gap-5 md:snap-none'>
            <InfoSiderbar />
          </aside>
          {children}
          <aside className='snap-start hidden w-full min-w-0 relative basis-1/5 2xl:flex flex-col self-start flex-grow-0 flex-shrink-0 md:snap-none'>
            <RightSidebar />
          </aside>
        </main>
        <Footer />
      </main>
    </div>
  );
}
