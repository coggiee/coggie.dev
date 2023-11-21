'use client';

import { format, parseISO } from 'date-fns';
import { Post } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { Tag } from '@/app/components/post/Tag';
import IconTimerSand from '@/app/Icons/IconTimerSand';
import { ko } from 'date-fns/locale';
import IconBxCalendarStar from '@/app/Icons/IconBxCalendarStar';
import IconLink from '@/app/Icons/IconLink';
import { parseHeaderForTOC } from '@/utils/parseHeaderForTOC';
import { TocSidebar } from '@/app/components/post/TocSidebar';
import useDetectScroll from '../../hooks/useDetectScroll';
import HorizontalProgress from '../ui/HorizontalProgress';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { useState } from 'react';
import { Alert } from '../ui/Alert';
import Giscus from './Giscus';

export const PostDetail = ({ post }: { post: Post }) => {
  const { scroll } = useDetectScroll();
  const parsedToc = parseHeaderForTOC(post!.body.raw);
  const MDXComponent = getMDXComponent(post!.body.code);
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

  const handleOnClickCopyButton = () => {
    copyToClipboard();

    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };

  return (
    // relative 삭제했음.
    <div className='prose dark:prose-dark w-full md:max-w-7xl max-w-full flex flex-row-reverse gap-10 mx-auto dark:text-[#fff] dark:prose-invert'>
      <HorizontalProgress scroll={scroll} />
      {parsedToc.length > 0 && (
        <TocSidebar tableOfContents={parsedToc} isSidebar={true} />
      )}
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
                  {/* {formatDate(post!.date)} /{' '} */}
                  {format(parseISO(post!.date), 'cccc LLLL d, yyyy', {
                    locale: ko,
                  })}
                </div>
                <div className='text-xs text-black flex gap-1 items-center dark:text-[#fff]'>
                  <IconTimerSand />
                  {format(parseISO(post!.date), 'H:mm')} -{' '}
                  {post!.readTimeMinutes}
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
            <MDXComponent />
          </div>
        </article>
        <Giscus />
      </div>
      {isAlertVisible && <Alert title={'링크가 복사되었습니다.'}/>}
    </div>
  );
};
