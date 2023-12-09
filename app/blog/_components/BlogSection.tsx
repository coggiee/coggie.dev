'use client';

import React, { ChangeEvent, Suspense, useEffect, useRef } from 'react';
import { Fallback } from '../../_components/ui/Fallback';
import { PostCard } from '../../_components/common/PostCard';
import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadingMinutes,
} from '@/utils/formatTime';
import {
  getPostsByTag,
  getPostsOnScroll,
  getTotalPosts,
  searchPostByTitle,
} from '@/app/_libs/hygraph';
import TagFilter from './TagFilter';
import Loading from '@/app/loading';
import SearchBarXS from '@/app/_components/ui/SearchBarXS';

type Props = {
  posts: any;
  uniqueTags: string[];
  cursor: string;
  totalPostSize: number;
};

export default function BlogSection({
  posts,
  uniqueTags,
  cursor,
  totalPostSize,
}: Props) {
  const [selectedTag, setSelectedTag] = React.useState<string>('');
  const [currentPosts, setCurrentPosts] = React.useState<any>(posts);
  const [lastPostCursor, setLastPostCursor] = React.useState<string>(cursor);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const target = useRef<HTMLDivElement>(null);

  const handleOnClickTag = async (tag: string) => {
    setSelectedTag(tag);
    if (tag === 'All') {
      const { edges } = (await getTotalPosts()) || [];
      const posts = edges.map((post: any) => post.node);
      setCurrentPosts((prev: any) => [...posts]);
      setLastPostCursor((prev: string) => posts[posts.length - 1].id ?? null);
      return;
    }
    const response = await getPostsByTag([tag]);
    setCurrentPosts((prev: any) => response);
  };

  const handleOnSearch = async (e: ChangeEvent) => {
    setSearchQuery((e.target as HTMLInputElement).value);
  };

  const handleOnPressEnter = async (e: any) => {
    const { key } = e;
    if (key === 'Enter') {
      const trimmedQuery = searchQuery.trim();
      const searchedPosts = await searchPostByTitle(trimmedQuery);
      setCurrentPosts((prev: any) => [...searchedPosts]);
    }
  };

  useEffect(() => {
    const onScrollEnded = async () => {
      setIsLoading(true);
      const nextPosts = await getPostsOnScroll(lastPostCursor);

      if (nextPosts.length > 0) {
        setCurrentPosts((prev: any) => [...prev, ...nextPosts]);
        setLastPostCursor(
          (prev: string) => nextPosts[nextPosts.length - 1].id ?? null
        );
      }
      setIsLoading(false);
    };

    const onScroll = () => {
      const totalRenderedHeight = document.body.offsetHeight;
      const scrolledHeight = window.innerHeight + window.scrollY;

      if (
        target.current &&
        scrolledHeight + target.current.offsetTop + 150 > totalRenderedHeight &&
        !isLoading &&
        lastPostCursor &&
        totalPostSize > currentPosts.length
      ) {
        onScrollEnded();
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [currentPosts, lastPostCursor, isLoading, totalPostSize]);

  return (
    <>
      {/* <div className='w-full flex flex-row-reverse gap-5'> */}
      <Suspense fallback={<Loading />}>
        <div className='flex-grow min-w-0 w-full mb-3 h-full'>
          <header className='w-full rounded-lg bg-[dodgerblue]/50 p-5 mb-5 shadow-md'>
            이 곳에는 개발 관련 포스팅이 올라옵니다. 👨🏻‍💻
            <br />
            알고리즘 문제 풀이 제외, 각종 <strong>
              프로젝트 개발기
            </strong>와 <strong>회고</strong> 그리고{' '}
            <strong>트러블 슈팅</strong>
            등에 대한 내용이 포함됩니다.
            <br />
            포스팅의 내용은 <strong>주관적</strong>이며 부정확한 정보가 포함되어
            있을 수 있습니다.
          </header>

          <SearchBarXS
            handleOnSearch={handleOnSearch}
            handleOnPressEnter={handleOnPressEnter}
          />

          {/* <div>Select Tag</div> */}
          <TagFilter
            tags={uniqueTags}
            handleOnClickTag={handleOnClickTag}
            selectedTag={selectedTag}
          />
          <div className='flex-1 flex flex-col gap-5' ref={target}>
            <div>
              <h1 className='font-thin text-3xl inline-block mr-2 font-lato'>
                All posts
              </h1>
              <span className='font-bold'>({currentPosts.length})</span>
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
                  coverImage={post?.coverImage}
                  readTimeMinutes={formatReadingMinutes(post.content)}
                />
              ))}
            </div>
          </div>
        </div>
      </Suspense>
      {/* <TagSidebar tags={uniqueTags} handleOnClickTag={handleOnClickTag} /> */}
      {/* </div> */}
    </>
  );
}
