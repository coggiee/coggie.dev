import { Suspense } from 'react';
import EditSection from '../components/editor/EditSection';
import dynamic from 'next/dynamic';

const DynamicEditSection = dynamic(
  () => import('../components/editor/EditSection'),
  {
    ssr: false,
  }
);

export default function Write() {
  return (
    <div className='dark:text-[#fff] w-full mx-auto flex flex-col  md:flex-row gap-5 relative'>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicEditSection />
      </Suspense>
    </div>
  );
}
