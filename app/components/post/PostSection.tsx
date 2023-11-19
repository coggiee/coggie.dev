import { Post } from '@/.contentlayer/generated';
import { PostCard } from './PostCard';
import { Fallback } from '../ui/Fallback';

export const PostSection = ({
  posts,
  title,
}: {
  posts: Post[];
  title: string;
}) => {
  return (
    <section className='mt-10 mb-10 font-notosanskr'>
      <h1 className='text-2xl font-medium mb-10 underline underline-offset-8 decoration-[#f7ab0a]/50 decoration-wavy dark:text-white'>
        {title}
      </h1>
      <div className='flex flex-col'>
        {posts.length === 0 && <Fallback title={'아직 포스트가 없습니다.'} />}
        {posts.map((post: any) => (
          <PostCard
            key={post._id}
            date={post.date}
            title={post.title}
            description={post.description}
            path={post._raw.flattenedPath}
            tags={post.tags}
            readTimeMinutes={post.readTimeMinutes}
          />
        ))}
      </div>
    </section>
  );
};
