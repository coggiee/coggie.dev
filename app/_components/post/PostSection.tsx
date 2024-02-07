'use client';

import Fallback from '../common/Fallback';
import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadingMinutes,
} from '@/utils/formatTime';
import PostSideCard from './PostSideCard';
import Divider from '../common/Divider';
import Link from 'next/link';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

export const PostSection = ({
  posts,
  title,
}: {
  posts: any;
  title: string;
}) => {
  return (
    <>
      <h1 className='text-lg font-semibold dark:text-white min-w-fit'>
        {title}
      </h1>
      <Card
        isBlurred
        shadow='md'
        className='w-full grow rounded-lg font-mono bg-item-light dark:bg-item-dark '
      >
        <CardBody className='flex flex-col p-0'>
          {posts.length === 0 && <Fallback title={'아직 포스트가 없습니다.'} />}
          {posts.map(({ node }: { node: any }) => (
            <Link href={`/post-views/${node.id}`} passHref key={node.id}>
              <PostSideCard
                key={node.id}
                date={formatCreatedAt(node.date)}
                time={formatCreatedTime(node.date)}
                title={node.title}
                description={node.description}
                path={node.id}
                tags={node.tags}
                coverImage={node.coverImage}
                readTimeMinutes={formatReadingMinutes(node.content)}
              />
            </Link>
          ))}
        </CardBody>
      </Card>
    </>
  );
};
