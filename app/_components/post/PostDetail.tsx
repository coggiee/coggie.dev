'use client';

import { Tag } from '@/app/_components/post/Tag';
import IconTimerSand from '@/app/_icons/IconTimerSand';
import IconBxCalendarStar from '@/app/_icons/IconBxCalendarStar';
import IconLink from '@/app/_icons/IconLink';
import { TocSidebar } from '@/app/_components/post/TocSidebar';
import useDetectScroll from '../../_hooks/useDetectScroll';
import HorizontalProgress from '../ui/HorizontalProgress';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { useState } from 'react';
import { Alert } from '../ui/Alert';
import Giscus from './Giscus';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Post } from '@/app/_libs/posts';
import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadTime,
  formatReadingMinutes,
} from '@/utils/formatTime';
import dayjs from 'dayjs';

export const PostDetail = ({
  post,
  mdx,
  toc,
}: {
  post: Post;
  mdx: MDXRemoteSerializeResult;
  toc: any;
}) => {
  const { scroll } = useDetectScroll();
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const handleOnClickCopyButton = () => {
    copyToClipboard();

    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };
  // date는 이걸 넣으면 된다.
  // dayjs().toISOString()
  return (
    // relative 삭제했음.
    <div className='prose dark:prose-dark w-full md:max-w-7xl max-w-full flex flex-row-reverse gap-10 mx-auto dark:text-[#fff] dark:prose-invert'>
      <HorizontalProgress scroll={scroll} />
      {toc.length > 0 && <TocSidebar tableOfContents={toc} isSidebar={true} />}
      <div className='mb-5 flex-grow'>
        <article className='min-w-0 w-full max-w-full mx-auto py-8 border-b-[1px] border-gray-300 dark:border-[#a9a9a96c] relative break-words mb-5'>
          <div className='mb-8 flex flex-col'>
            <h1 className='text-4xl font-bold w-full break-words dark:text-[#fff]'>
              {post!.title}
            </h1>
            <div className='flex justify-start items-center gap-2 mb-5 '>
              {post!.tags?.map((tag: string) => <Tag key={tag} tag={tag} />)}
            </div>
            <div className='w-full flex justify-between items-center pb-10 border-b-[1px] dark:border-[#a9a9a96c] mb-10'>
              <time
                dateTime={post!.date}
                className='mb-1 text-xs text-black flex flex-col justify-center gap-3'
              >
                <div className='text-xs text-black flex gap-2 items-center dark:text-[#fff]'>
                  <IconBxCalendarStar />
                  {formatCreatedAt(post.date)}
                </div>
                <div className='text-xs text-black flex gap-2 items-center dark:text-[#fff]'>
                  <IconTimerSand />
                  {formatCreatedTime(post.date)} -{' '}
                  {formatReadingMinutes(post.content)} min read
                </div>
              </time>
              {/* Copy link when click */}
              <button
                className='text-[16px] w-[30px] h-[30px] box-content rounded-full bg-[#f7ab0a] flex justify-center items-center self-start hover:bg-[#ff915a] hover:drop-shadow-lg hover:shadow-lg'
                onClick={handleOnClickCopyButton}
              >
                <div className='tooltip tooltip-bottom' data-tip='링크 복사'>
                  <IconLink />
                </div>
              </button>
            </div>
            <MDXRemote {...mdx} />
          </div>
        </article>
        <Giscus />
      </div>
      {isAlertVisible && <Alert title={'링크가 복사되었습니다.'} />}
    </div>
  );
};
