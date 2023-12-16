'use client';

import React, { useEffect, useRef, useState } from 'react';
import Introduction from '../common/Introduction';
import { PostSection } from '../post/PostSection';
import { parseHeaderForTOC } from '@/utils/parseHeaderForTOC';
import { PostDetail } from '../post/PostDetail';
import IconBackToHome from '@/app/_icons/IconBackToHome';
import Link from 'next/link';
import IconScale from '@/app/_icons/IconScale';
import Divider from '../common/Divider';
import MotionVerticalProvider from '@/app/_provider/MotionVerticalProvider';

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
  const postDetailRef = useRef<HTMLDivElement>(null); // Ref 추가

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

  useEffect(() => {
    if (isPostClicked && postDetailRef.current) {
      if (window.innerWidth < 768) {
        window.scrollTo({ top: 643, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [isPostClicked]);

  return (
    <>
      {isPostClicked && (
        <MotionVerticalProvider
          duration={0.7}
          fromY={500}
          toY={0}
          className={'flex flex-col gap-5'}
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
                <IconScale className='text-sm' />
              </Link>
            </button>
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
      )}
      {!isPostClicked && (
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
        </MotionVerticalProvider>
      )}
    </>
  );
}
