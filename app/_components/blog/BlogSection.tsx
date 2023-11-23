'use client';

import React, { Suspense } from 'react';
import { Fallback } from '../ui/Fallback';
import { PostCard } from '../post/PostCard';
import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadingMinutes,
} from '@/utils/formatTime';
import TagSidebar from './TagSidebar';
import { getPostsByTag } from '@/app/_libs/hygraph';

type Props = {
  posts: any;
  uniqueTags: string[];
};

export default function BlogSection({ posts, uniqueTags }: Props) {
  const [selectedTag, setSelectedTag] = React.useState<string>('');
  const [currentPosts, setCurrentPosts] = React.useState<any>(posts);

  const handleOnClickTag = async (tag: string) => {
    setSelectedTag(tag);
    const response = await getPostsByTag([tag]);
    setCurrentPosts((prev: any) => response);
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='flex-grow min-w-0 w-full mb-3'>
          <header className='w-full rounded-lg bg-[#f7ab0a]/50 p-5 mb-5 shadow-md'>
            이 곳에는 개발 관련 포스팅이 올라옵니다. 👨🏻‍💻
            <br />
            알고리즘 문제 풀이 제외, 각종 <strong>
              프로젝트 개발기
            </strong>와 <strong>회고</strong> 그리고{' '}
            <strong>트러블 슈팅</strong>
            등에 대한 내용이 포함됩니다.
          </header>
          {/* <div>Select Tag</div> */}
          <div className='flex-1 flex flex-col gap-5'>
            <div>
              <h1 className='font-thin text-3xl inline-block mr-2 font-lato'>
                All posts
              </h1>
              <span className='font-bold'>({posts.length})</span>
            </div>
            <div className='flex flex-col'>
              {currentPosts.length === 0 && (
                <Fallback title={'아직 포스트가 없습니다.'} />
              )}
              {currentPosts.map((post: any) => (
                <PostCard
                  key={post.id}
                  date={formatCreatedAt(post.date)}
                  time={formatCreatedTime(post.date)}
                  title={post.title}
                  description={post.description}
                  path={post.id}
                  tags={post.tags}
                  readTimeMinutes={formatReadingMinutes(post.content)}
                />
              ))}
            </div>
          </div>
        </div>
      </Suspense>
      <TagSidebar tags={uniqueTags} handleOnClickTag={handleOnClickTag} />
    </>
  );
}
