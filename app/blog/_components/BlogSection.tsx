'use client';

import React, { ChangeEvent, Suspense, useEffect, useRef } from 'react';
import { Fallback } from '../../_components/common/Fallback';
import { PostCard } from '../../_components/post/PostCard';
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
import SearchBarXS from '@/app/_components/common/SearchBarXS';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [currentPosts, setCurrentPosts] = React.useState<any>(posts);
  const [lastPostCursor, setLastPostCursor] = React.useState<string>(cursor);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [selectedTag, setSelectedTag] = React.useState<string>('# All');
  const target = useRef<HTMLDivElement>(null);

  const handleOnClickTag = async (tag: string) => {
    setSelectedTag((prev: string) => '# ' + tag);
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
    <motion.div
      initial={{
        y: 500,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      exit={{ opacity: 0, y: 500 }}
      className='flex-grow min-w-0 w-full h-full mb-3 relative'
    >
      <Suspense fallback={<Loading />}>
        <div className='flex flex-col md:flex-row gap-5 relative'>
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className='basis-1/3 md:max-w-sm min-w-fit mr-10 flex flex-col gap-5 w-full'
          >
            <SearchBarXS
              handleOnSearch={handleOnSearch}
              handleOnPressEnter={handleOnPressEnter}
            />
            <TagFilter tags={uniqueTags} handleOnClickTag={handleOnClickTag} />
          </motion.div>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className='grow basis-2/3 w-full min-w-[25%]'
          >
            <div className='mb-5'>
              <h1 className='font-sbold text-2xl inline-block mr-2 font-lato'>
                {selectedTag}
              </h1>
              <span className='font-bold'>({currentPosts.length})</span>
            </div>
            <div
              className='flex-1 flex flex-col gap-5 border border-item-border-light rounded-lg bg-item-light dark:bg-item-dark dark:border-item-border-dark dark:text-white'
              ref={target}
            >
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
          </motion.div>
        </div>
      </Suspense>
    </motion.div>
  );
}
