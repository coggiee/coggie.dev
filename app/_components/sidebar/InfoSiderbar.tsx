'use client';

import React from 'react';
import HeroSection from '../hero/HeroSection';
import MotionHorizontalProvider from '@/app/_provider/MotionHorizontalProvider';

export default function InfoSiderbar() {
  return (
    <MotionHorizontalProvider
      duration={0.7}
      fromX={-500}
      toX={0}
      className={'w-full flex flex-col gap-3 flex-shrink-0'}
    >
      <HeroSection src={'/mimoji.png'} />
    </MotionHorizontalProvider>
  );
}
