'use client';

import IconLink from '@/app/_icons/IconLink';
import useDetectScroll from '../../_hooks/useDetectScroll';
import HorizontalProgress from '../common/HorizontalProgress';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { useState } from 'react';
import Alert from '../common/Alert';
import Giscus from '../../blog/_components/Giscus';
import { MDXRemote } from 'next-mdx-remote';

import FooterHero from '@/app/blog/_components/FooterHero';
import Badge from '../common/Badge';
import { TocSidebar } from '@/app/blog/_components/TocSidebar';
import DeleteModal from '../common/DeleteModal';
import { deletePost } from '@/app/_libs/hygraph';
import { useRouter } from 'next/navigation';
import { useModal } from '@/app/_hooks/useModal';
import PostTime from './PostTime';
import { PostDetailProps } from '@/types/type';
import MotionVerticalProvider from '@/app/_provider/MotionVerticalProvider';

export const PostDetail = ({ post, mdx, toc, isFullSize }: PostDetailProps) => {
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
    <MotionVerticalProvider duration={0.7} fromY={500} toY={0}>
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
                <PostTime date={post!.date} content={post!.content} />
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
    </MotionVerticalProvider>
  );
};
