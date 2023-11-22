// import { Post } from '@/.contentlayer/generated';
import { PostCard } from './PostCard';
import { Fallback } from '../ui/Fallback';
import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadingMinutes,
} from '@/utils/formatTime';

export const PostSection = ({
  posts,
  title,
}: {
  posts: any;
  title: string;
}) => {
  return (
    <section className='mt-10 mb-10 font-notosanskr p-3'>
      <h1 className='text-2xl font-medium mb-10 dark:text-white'>{title}</h1>
      <div className='flex flex-col'>
        {posts.length === 0 && <Fallback title={'아직 포스트가 없습니다.'} />}
        {posts.map(({ node }: { node: any }) => (
          <PostCard
            key={node.id}
            date={formatCreatedAt(node.date)}
            time={formatCreatedTime(node.date)}
            title={node.title}
            description={node.description}
            path={node.slug}
            tags={node.tags}
            readTimeMinutes={formatReadingMinutes(node.content)}
          />
        ))}
      </div>
    </section>
  );
};
