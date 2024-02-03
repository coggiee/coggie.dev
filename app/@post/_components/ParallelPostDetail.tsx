'use client';

import IconBackToHome from '@/app/_icons/IconBackToHome';
import IconScale from '@/app/_icons/IconScale';
import MotionVerticalProvider from '@/app/_provider/MotionVerticalProvider';
import Link from 'next/link';
import React, { useRef } from 'react';
import { PostDetail } from '../../_components/post/PostDetail';

type Props = {
  postId: string;
  currentPost: any;
  mdx: any;
  parsedToc: any;
};

export default function ParallelPostDetail({
  postId,
  currentPost,
  mdx,
  parsedToc,
}: Props) {
  const postDetailRef = useRef<HTMLDivElement>(null); // Ref 추가
  return (
    <MotionVerticalProvider
      duration={0.8}
      delay={0.6}
      fromY={100}
      toY={0}
      className={'flex flex-col gap-5'}
    >
      <div className='sticky top-20 p-3 flex gap-3 justify-between items-center border border-item-border-light rounded-lg  dark:border-item-border-dark dark:text-white backdrop-blur-md z-[50]'>
        <Link
          href={'/'}
          className='p-2 rounded-full border border-item-border-light bg-sub-light dark:bg-sub-dark dark:border-item-border-dark dark:text-white hover:scale-125 transition-all duration-200 ease-in-out drop-shadow-lg'
        >
          <IconBackToHome className='text-sm' />
        </Link>
        {/* <Link
          href={`/blog/${postId}`}
          passHref
          className='p-2 rounded-full border border-item-border-light bg-sub-light dark:bg-sub-dark dark:border-item-border-dark dark:text-white hover:scale-125 transition-all duration-200 ease-in-out drop-shadow-lg'
        >
          <IconScale className='text-sm' />
        </Link> */}
      </div>

      <section
        className='p-1 border border-item-border-light rounded-lg bg-item-light dark:bg-item-dark dark:border-item-border-dark dark:text-white'
        ref={postDetailRef}
      >
        <PostDetail
          post={currentPost!}
          mdx={mdx!}
          toc={parsedToc}
          isFullSize={false}
        />
      </section>
    </MotionVerticalProvider>
  );
}
