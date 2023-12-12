import React from 'react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const DynamicEditSection = dynamic(
  () => import('@/app/(write)/_components/EditSection'),
  {
    ssr: false,
  }
);

type Props = {};

export default function page({}: Props) {
  return (
    <div className='dark:text-[#fff] w-full mx-auto flex flex-col  md:flex-row gap-5 relative'>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicEditSection />
      </Suspense>
    </div>
  );
}
