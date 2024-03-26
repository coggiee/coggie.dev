'use client';

import MotionVerticalProvider from '@/app/_provider/MotionVerticalProvider';
import { Skeleton } from '@nextui-org/react';
import React from 'react';

export default function SkeletonPost() {
  return (
    <MotionVerticalProvider
      duration={0.8}
      delay={0.6}
      fromY={100}
      toY={0}
      className={'flex flex-col gap-5'}
    >
      <div className='sticky top-20 p-3 flex gap-3 justify-between items-center border border-item-border-light rounded-lg  dark:border-item-border-dark  backdrop-blur-md z-[50]'>
        <Skeleton className='p-2 rounded-full'>
          <div className='w-5 h-5 rounded-full' />
        </Skeleton>
        <Skeleton className='p-2 rounded-full'>
          <div className='w-5 h-5 rounded-full' />
        </Skeleton>
      </div>
      <div className='w-full h-screen p-6 rounded-lg border border-item-border-light dark:border-item-border-dark'>
        <div className='w-full md:max-w-7xl max-w-full flex flex-row-reverse gap-10 mx-auto'>
          <div className='mt-8 flex flex-col w-full gap-3'>
            <Skeleton className='w-3/4 h-12 rounded-lg' />
            <div className='flex justify-start items-center gap-2 mb-5 flex-wrap'>
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton className='w-12 h-6 p-2 rounded-xl' key={i} />
              ))} 
            </div>
            <div className='w-full flex justify-between items-center'>
              <div className='flex flex-col gap-3'>
              <Skeleton className='w-40 h-4 rounded-lg' />
              <Skeleton className='w-40 h-4 rounded-lg' />
              </div>
              <div>
                <Skeleton className='w-7 h-7 p-2 rounded-full' />
                </div>
            </div>
            <div className='w-full flex flex-col gap-3'>
              <Skeleton className='w-3/4 h-4 rounded-lg'/>
              <Skeleton className='w-1/2 h-60 rounded-lg'/>
              <Skeleton className='w-4/5 h-4 rounded-lg' />
              <Skeleton className='w-2/5 h-4 rounded-lg' />
              <Skeleton className='w-3/5 h-4 rounded-lg' />
              <Skeleton className='w-1/2 h-4 rounded-lg' />
              <Skeleton className='w-1/2 h-4 rounded-lg' />
              <Skeleton className='w-2/3 h-4 rounded-lg' />
              <Skeleton className='w-1/4 h-4 rounded-lg' />
              <Skeleton className='w-3/4 h-4 rounded-lg' />
              <Skeleton className='w-2/6 h-4 rounded-lg' />
              <Skeleton className='w-2/3 h-40 rounded-lg'/>
              </div>
          </div>
        </div>
      </div>
    </MotionVerticalProvider>
  );
}
