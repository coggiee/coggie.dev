'use client';

import React, { useState } from 'react';
import Introduction from '../common/Introduction';
import { PostSection } from '../post/PostSection';
import { parseHeaderForTOC } from '@/utils/parseHeaderForTOC';
import { PostDetail } from '../post/PostDetail';
import IconBackToHome from '@/app/_icons/IconBackToHome';
import Link from 'next/link';
import IconScale from '@/app/_icons/IconScale';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  hotPosts: any[];
  recentPosts: any[];
};

export default function PostShowSection({ hotPosts, recentPosts }: Props) {
  const [isPostClicked, setIsPostClicked] = useState(false);
  const [currentPost, setCurrentPost] = useState<any>();
  const [mdx, setMdx] = useState<any>();
  const [parsedToc, setParsedToc] = useState<any>();
  const [postId, setPostId] = useState<string>();

  const handleOnClickPost = async (path: string) => {
    if (!isPostClicked) {
      const res = await fetch('/api/mdx', {
        method: 'POST',
        body: JSON.stringify({ id: path }),
      });

      const { post, serializedMdx } = await res.json();

      setParsedToc(parseHeaderForTOC(post!.content));
      setMdx(serializedMdx);
      setCurrentPost(post);
      setPostId(path);
    }
    setIsPostClicked((prev) => !prev);
  };

  return (
    <>
      {isPostClicked && (
        <AnimatePresence>
          <motion.section
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
            className='flex flex-col gap-5'
          >
            <div className='p-3 flex gap-3 justify-between items-center border border-item-border-light rounded-lg bg-item-light dark:bg-item-dark dark:border-item-border-dark dark:text-white'>
              <button
                className='p-2 rounded-full border border-item-border-light bg-sub-light dark:bg-sub-dark dark:border-item-border-dark dark:text-white hover:scale-125 transition-all duration-200 ease-in-out drop-shadow-lg'
                onClick={() => setIsPostClicked(false)}
              >
                <IconBackToHome className='text-sm' />
              </button>
              <button className='p-2 rounded-full border border-item-border-light bg-sub-light dark:bg-sub-dark dark:border-item-border-dark dark:text-white hover:scale-125 transition-all duration-200 ease-in-out drop-shadow-lg'>
                <Link href={`/blog/${postId}`} passHref>
                  <IconScale className='text-sm'></IconScale>
                </Link>
              </button>
            </div>

            <section className='p-5 border border-item-border-light rounded-lg bg-item-light dark:bg-item-dark dark:border-item-border-dark dark:text-white'>
              <PostDetail
                post={currentPost!}
                mdx={mdx!}
                toc={parsedToc}
                isFullSize={false}
              />
            </section>
          </motion.section>
        </AnimatePresence>
      )}
      {!isPostClicked && (
        <AnimatePresence>
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
            className='flex flex-col gap-5'
          >
            <Introduction />
            <PostSection
              posts={hotPosts}
              title={'읽어 볼만한 포스트'}
              onClickPost={handleOnClickPost}
            />
            <PostSection
              posts={recentPosts}
              title={'최근 포스트'}
              onClickPost={handleOnClickPost}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
