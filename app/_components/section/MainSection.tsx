'use client';

import React, { useState } from 'react';
import Introduction from '../common/Introduction';
import { PostSection } from '../post/PostSection';
import { parseHeaderForTOC } from '@/utils/parseHeaderForTOC';
import { PostDetail } from '../post/PostDetail';
import IconBackToHome from '@/app/_icons/IconBackToHome';

type Props = {
  hotPosts: any[];
  recentPosts: any[];
};

export default function MainSection({ hotPosts, recentPosts }: Props) {
  const [isPostClicked, setIsPostClicked] = useState(false);
  const [currentPost, setCurrentPost] = useState<any>();
  const [mdx, setMdx] = useState<any>();
  const [parsedToc, setParsedToc] = useState<any>();

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
    }
    setIsPostClicked((prev) => !prev);
  };

  return (
    <>
      {isPostClicked && (
        <section className='flex flex-col gap-5 mt-4'>
          <div className='p-3 border border-item-border-light rounded-lg bg-item-light dark:bg-item-dark dark:border-item-border-dark dark:text-white'>
            <button
              className='p-1 rounded-full border border-item-border-light bg-sub-light dark:bg-sub-dark dark:border-item-border-dark dark:text-white hover:scale-125 transition-all duration-200 ease-in-out drop-shadow-lg '
              onClick={() => setIsPostClicked(false)}
            >
              <IconBackToHome className='text-lg' />
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
        </section>
      )}
      {!isPostClicked && (
        <>
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
        </>
      )}
    </>
  );
}
