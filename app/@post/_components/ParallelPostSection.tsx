'use client';

import MotionVerticalProvider from '@/app/_provider/MotionVerticalProvider';
import React from 'react';
import Introduction from '../../_components/common/Introduction';
import Divider from '../../_components/common/Divider';
import { PostSection } from '../../_components/post/PostSection';

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
      <Divider
        isHorizontal={true}
        bgColor='#00000047'
        darkBgColor='#5d5d5d'
        width='full'
        height='1px'
      />
      <PostSection posts={hotPosts} title={'읽어 볼만한 포스트'} />
      <PostSection posts={recentPosts} title={'최근 포스트'} />
    </MotionVerticalProvider>
  );
}
