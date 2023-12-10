'use client';

import React, { useState } from 'react';
import InfoSiderbar from '../sidebar/InfoSiderbar';
import PostShowSection from './PostShowSection';
import RightSidebar from '../sidebar/RightSidebar';
import Link from 'next/link';

type Props = {
  hotPosts: any[];
  recentPosts: any[];
};

export default function MainPageSection({ hotPosts, recentPosts }: Props) {
  const [isClickedAllPostButton, setIsClickedAllPostButton] = useState(false);

  return (
    <>
      <aside className='w-full min-w-[25%] relative md:basis-1/2 basis-1/4 md:max-w-sm md:min-w-min lg:pl-4 flex flex-col flex-grow-0 flex-shrink-0 gap-5'>
        <InfoSiderbar />
      </aside>
      {/* Detail Post on Center */}
      <main className='w-full basis-1/2 rounded-lg flex-col gap-5 flex md:hidden xl:flex'>
        <button className='text-white rounded-lg border border-item-border-light bg-sub-light dark:bg-sub-dark dark:border-item-border-dark dark:text-white hover:scale-105 transition-all duration-200 ease-in-out drop-shadow-lg'>
          <Link href='/blog'>See All Posts</Link>
        </button>
        <PostShowSection hotPosts={hotPosts} recentPosts={recentPosts} />
      </main>
      {/* Post on Right Side */}
      <aside className='w-full min-w-[25%] relative md:basis-1/2  md:min-w-min basis-1/4 flex flex-col md:max-w-sm flex-grow-0 flex-shrink-0 gap-5'>
        <RightSidebar />
      </aside>
    </>
  );
}
