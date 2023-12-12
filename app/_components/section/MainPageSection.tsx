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
      <aside className='snap-start w-full min-w-[25%] md:basis-1/2 basis-1/4 md:max-w-sm md:min-w-min lg:pl-4 flex flex-col flex-grow-0 flex-shrink-0 gap-5'>
        <InfoSiderbar />
      </aside>
      {/* Detail Post on Center */}
      <main className='snap-center w-full min-w-[25%] max-w-screen-2xl basis-1/2 rounded-lg flex-col gap-5 flex md:hidden xl:flex'>
        <PostShowSection hotPosts={hotPosts} recentPosts={recentPosts} />
      </main>
      {/* Post on Right Side */}
      <aside className='snap-start w-full min-w-0 relative md:basis-1/2 md:min-w-min basis-1/4 flex flex-col md:max-w-sm flex-grow-0 flex-shrink-0 gap-5'>
        <RightSidebar />
      </aside>
    </>
  );
}
