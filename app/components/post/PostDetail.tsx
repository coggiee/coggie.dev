'use client';

import { format, parseISO } from 'date-fns';
import { Post } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { formatDate } from '@/utils/formatDate';
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
import { CopyAlert } from '../ui/CopyAlert';
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
    <div className='prose dark:prose-dark w-full md:max-w-7xl max-w-full flex flex-row-reverse gap-10 mx-auto'>
      <HorizontalProgress scroll={scroll} />
      {parsedToc.length > 0 && (
        <TocSidebar tableOfContents={parsedToc} isSidebar={true} />
      )}
      <div className='mb-5'>
        <article className='min-w-0 w-full max-w-full mx-auto py-8 border-b-[1px] border-gray-300 relative break-words mb-5'>
          <div className='mb-8 flex flex-col'>
            <h1 className='text-4xl font-bold w-full break-words'>
              {post!.title}
            </h1>
            <div className='flex justify-start items-center gap-2 mb-5'>
              {post!.tags?.map((tag: string) => <Tag key={tag} tag={tag} />)}
            </div>
            <div className='w-full flex justify-between items-center pb-10 border-b-[1px] mb-10'>
              <time
                dateTime={post!.date}
                className='mb-1 text-xs text-black flex flex-col justify-center gap-3'
              >
                <div className='text-xs text-black flex gap-2 items-center'>
                  <IconBxCalendarStar />
                  {formatDate(post!.date)} /{' '}
                  {format(parseISO(post!.date), 'cccc LLLL d, yyyy', {
                    locale: ko,
                  })}
                </div>
                <div className='text-xs text-black flex gap-1 items-center'>
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
      {isAlertVisible && <CopyAlert />}
    </div>
  );
};
