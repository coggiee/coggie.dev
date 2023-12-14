'use client';

import IconTimerSand from '@/app/_icons/IconTimerSand';
import IconBxCalendarStar from '@/app/_icons/IconBxCalendarStar';
import IconLink from '@/app/_icons/IconLink';
import useDetectScroll from '../../_hooks/useDetectScroll';
import HorizontalProgress from '../common/HorizontalProgress';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { useState } from 'react';
import { Alert } from '../common/Alert';
import Giscus from '../../blog/_components/Giscus';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadingMinutes,
} from '@/utils/formatTime';
import FooterHero from '@/app/blog/_components/FooterHero';
import Badge from '../common/Badge';
import { TocSidebar } from '@/app/blog/_components/TocSidebar';
import { motion } from 'framer-motion';
import DeleteModal from '../common/DeleteModal';
import { deletePost } from '@/app/_libs/hygraph';
import { useRouter } from 'next/navigation';
import { useModal } from '@/app/hooks/useModal';

export const PostDetail = ({
  post,
  mdx,
  toc,
  isFullSize,
}: {
  post: any;
  mdx: MDXRemoteSerializeResult;
  toc: any;
  isFullSize?: boolean;
}) => {
  const { scroll } = useDetectScroll();
  
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const [isOpen, toggleModal] = useModal(false);
  const [isFallback, setisFallback] = useState<boolean>(false);
  const [alertTitle, setAlertTitle] = useState<string>('');

  const router = useRouter();

  const handleOnClickCopyButton = () => {
    copyToClipboard(post.id);

    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };

  const handleOnClickModalButton = async (isSubmit: boolean) => {
    if (!isSubmit) {
      toggleModal();
      return;
    }

    if (isSubmit) {
      const data = await deletePost(post.id);
      if (data !== null) {
        setAlertTitle('포스트를 삭제했습니다.');
        router.push('/');
      } else {
        setAlertTitle('포스트 삭제에 에러가 발생했습니다.');
      }

      setisFallback(true);
      setTimeout(() => {
        setisFallback(false);
      }, 3000);
      toggleModal();
    }
  };

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
      exit={{ opacity: 0 }}
    >
      <div className='prose dark:prose-dark w-full md:max-w-7xl max-w-full flex flex-row-reverse gap-10 mx-auto dark:text-[#fff] dark:prose-invert'>
        <HorizontalProgress scroll={scroll} />
        {toc.length > 0 && isFullSize && (
          <TocSidebar tableOfContents={toc} isSidebar={true} />
        )}
        <div className='mb-5 flex-grow w-full min-w-0 p-5  rounded-lg  dark:bg-item-dark'>
          <article className='min-w-0 w-full max-w-full mx-auto border-b-[1px] border-gray-300 dark:border-[#a9a9a96c] relative break-words mb-20'>
            <div className='mb-8 flex flex-col w-full'>
              <h1 className='text-4xl font-bold w-full break-words dark:text-[#fff]'>
                {post!.title}
              </h1>
              <div className='flex justify-start items-center gap-2 mb-5 flex-wrap'>
                {post!.tags?.map((tag: string) => (
                  <Badge key={tag} text={`# ${tag}`} />
                ))}
              </div>
              <div className='w-full flex justify-between items-center pb-10 border-b-[1px] dark:border-[#a9a9a96c]'>
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
                <div className='flex items-center gap-3'>
                  <div className='text-xs underline flex gap-3'>
                    <button className='cursor-pointer'>수정</button>
                    <button
                      className='cursor-pointer'
                      onClick={() => toggleModal(true)}
                    >
                      삭제
                    </button>
                  </div>
                  <button
                    className='text-[16px] w-[30px] h-[30px] box-content rounded-full bg-[dodgerblue]/70 flex justify-center items-center self-start hover:bg-[dodgerblue] hover:drop-shadow-lg hover:shadow-lg'
                    onClick={handleOnClickCopyButton}
                  >
                    <div
                      className='tooltip tooltip-bottom'
                      data-tip='링크 복사'
                    >
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
        {isAlertVisible && (
          <Alert title={'링크가 복사되었습니다.'} bgColor='dodgerblue' />
        )}
        {isOpen && (
          <DeleteModal isOpen={isOpen} onClick={handleOnClickModalButton} />
        )}
        {isFallback && <Alert title={alertTitle} bgColor='crimson' />}
      </div>
    </motion.div>
  );
};
