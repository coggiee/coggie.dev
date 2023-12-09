'use client';

import { Tag } from '@/app/_components/ui/Tag';
import IconTimerSand from '@/app/_icons/IconTimerSand';
import IconBxCalendarStar from '@/app/_icons/IconBxCalendarStar';
import IconLink from '@/app/_icons/IconLink';
import { TocSidebar } from '@/app/blog/_components/TocSidebar';
import useDetectScroll from '../../_hooks/useDetectScroll';
import HorizontalProgress from '../common/HorizontalProgress';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { useState } from 'react';
import { Alert } from '../common/Alert';
import Giscus from '../../blog/_components/Giscus';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Post } from '@/app/_libs/posts';
import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadTime,
  formatReadingMinutes,
} from '@/utils/formatTime';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import FooterHero from '@/app/blog/_components/FooterHero';
import Badge from '../common/Badge';

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
  const { data: session } = useSession();

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
      {/* {toc.length > 0 && <TocSidebar tableOfContents={toc} isSidebar={true} />} */}
      <div className='mb-5 flex-grow w-full'>
        <article className='min-w-0 w-full max-w-full mx-auto py-8 border-b-[1px] border-gray-300 dark:border-[#a9a9a96c] relative break-words mb-20'>
          <div className='mb-8 flex flex-col w-full'>
            <h1 className='text-4xl font-bold w-full break-words dark:text-[#fff]'>
              {post!.title}
            </h1>
            <div className='flex justify-start items-center gap-2 mb-5 flex-wrap'>
              {post!.tags?.map((tag: string) => (
                <Badge key={tag} text={`# ${tag}`} />
              ))}
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
              <div className='flex items-center gap-10'>
                {session && session.user!.email === 'zentechie7@gmail.com' && (
                  <div className='text-xs underline flex gap-3'>
                    <Link href='' className='cursor-pointer'>
                      수정
                    </Link>
                    <Link href='' className='cursor-pointer'>
                      삭제
                    </Link>
                  </div>
                )}
                <button
                  className='text-[16px] w-[30px] h-[30px] box-content rounded-full bg-[dodgerblue]/70 flex justify-center items-center self-start hover:bg-[dodgerblue] hover:drop-shadow-lg hover:shadow-lg'
                  onClick={handleOnClickCopyButton}
                >
                  <div className='tooltip tooltip-bottom' data-tip='링크 복사'>
                    <IconLink />
                  </div>
                </button>
              </div>
            </div>
            <MDXRemote {...mdx} />
          </div>
        </article>
        <FooterHero />
        <Giscus />
      </div>
      {isAlertVisible && <Alert title={'링크가 복사되었습니다.'} />}
    </div>
  );
};
