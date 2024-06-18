import React from 'react';
import HeroSection from '../hero/HeroCard';
import MotionVerticalProvider from '@/provider/MotionVerticalProvider';

export default function InfoSiderbar() {
  return (
    <MotionVerticalProvider
      duration={0.8}
      delay={0.6}
      fromY={100}
      toY={0}
      className={'w-full flex flex-col gap-3 flex-shrink-0'}
    >
      <HeroSection />
    </MotionVerticalProvider>
  );
}
