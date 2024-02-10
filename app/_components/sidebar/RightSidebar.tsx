'use client';

import React from 'react';
import ProjectList from '../project/ProjectList';
import MotionVerticalProvider from '@/app/_provider/MotionVerticalProvider';

export default function RightSidebar() {
  return (
    <MotionVerticalProvider
      duration={0.8}
      delay={0.6}
      fromY={100}
      toY={0}
      className={'w-full flex flex-col gap-5 flex-shrink-0'}
    >
      <ProjectList />
    </MotionVerticalProvider>
  );
}
