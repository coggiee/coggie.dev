'use client';

import React from 'react';
import SearchBarXS from '../common/SearchBarXS';
import ProjectList from '../project/ProjectList';
import MorePostLink from '../common/MorePostLink';
import MotionHorizontalProvider from '@/app/_provider/MotionHorizontalProvider';

export default function RightSidebar() {
  return (
    <MotionHorizontalProvider
      duration={0.7}
      fromX={500}
      toX={0}
      className={'w-full flex flex-col gap-5 flex-shrink-0'}
    >
      <SearchBarXS />
      <div className='hidden md:block xl:hidden'>
        <MorePostLink />
      </div>
      <ProjectList />
    </MotionHorizontalProvider>
  );
}
