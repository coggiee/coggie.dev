'use client';

import IconBackToHome from '@/app/_icons/IconBackToHome';
import IconScale from '@/app/_icons/IconScale';
import MotionVerticalProvider from '@/app/_provider/MotionVerticalProvider';
import React, { useRef } from 'react';
import { PostDetail } from '../../_components/post/PostDetail';
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  Link,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';

type Props = {
  postId: string;
  currentPost: any;
  mdx: any;
  parsedToc: any;
};

export default function ParallelPostDetail({
  postId,
  currentPost,
  mdx,
  parsedToc,
}: Props) {
  const postDetailRef = useRef<HTMLDivElement>(null); // Ref 추가
  const pathname = usePathname().split('/').slice(1);

  return (
    <MotionVerticalProvider
      duration={0.8}
      delay={0.6}
      fromY={100}
      toY={0}
      className={'flex flex-col gap-5'}
    >
      <div className='sticky top-16 p-3 flex gap-3 justify-between items-center border border-item-border-light rounded-lg dark:border-item-border-dark dark:text-white backdrop-blur-md z-[50]'>
        <div className='flex gap-2 items-center'>
          <Button
            href={'/post-view'}
            as={Link}
            variant='flat'
            radius='full'
            size='sm'
            isIconOnly
            className='dark:text-white'
          >
            <IconBackToHome className='text-sm' />
          </Button>
          <Breadcrumbs size='sm' variant='light'>
            {pathname.map((path) => (
              <BreadcrumbItem key={path}>{path}</BreadcrumbItem>
            ))}
          </Breadcrumbs>
        </div>

        <Button
          href={`/blog/${postId}`}
          as={Link}
          variant='flat'
          radius='full'
          size='sm'
          isIconOnly
          className='dark:text-white'
        >
          <IconScale className='text-sm' />
        </Button>
      </div>

      <Card
        isBlurred
        radius='lg'
        className='dark:text-white w-full'
        shadow='md'
        ref={postDetailRef}
      >
        <CardBody className='p-0 w-full'>
          <PostDetail
            post={currentPost!}
            mdx={mdx!}
            toc={parsedToc}
            isFullSize={false}
          />
        </CardBody>
      </Card>
    </MotionVerticalProvider>
  );
}
