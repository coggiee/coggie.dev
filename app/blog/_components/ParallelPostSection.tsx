'use client';

import MotionVerticalProvider from '@/app/_provider/MotionVerticalProvider';
import React from 'react';
import Introduction from '../../_components/common/Introduction';
import { PostSection } from '../../_components/post/PostSection';
import { Divider } from '@nextui-org/react';

type Props = {
  hotPosts: any;
  recentPosts: any;
};

export default function ParallelPostSection({ hotPosts, recentPosts }: Props) {
  return (
    <MotionVerticalProvider
      duration={0.7}
      fromY={500}
      toY={0}
      className={'flex flex-col gap-5'}
    >
      <Introduction />
      <Divider />
      <PostSection posts={hotPosts} title={'Pinned Posts'} />
      <PostSection posts={recentPosts} title={'Recent Posts'} />
    </MotionVerticalProvider>
  );
}
