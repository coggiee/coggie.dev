import { PostCard } from './PostCard';
import { Fallback } from '../ui/Fallback';
import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadingMinutes,
} from '@/utils/formatTime';
import PostSideCard from './PostSideCard';

export const PostSection = ({
  posts,
  title,
}: {
  posts: any;
  title: string;
}) => {
  return (
    <section className='w-full p-3 rounded-lg font-mono border border-item-border-light bg-item-light dark:bg-item-dark dark:border-item-border-dark'>
      <div className='flex items-center mb-5 gap-2'>
        <h1 className='text-lg font-semibold dark:text-white min-w-fit'>
          {title}
        </h1>
        <div className='h-[1px] bg-[#00000047] w-full dark:bg-[#5d5d5d]'></div>
      </div>

      <div className='flex flex-col gap-5'>
        {posts.length === 0 && <Fallback title={'아직 포스트가 없습니다.'} />}
        {posts.map(({ node }: { node: any }) => (
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
        ))}
      </div>
    </section>
  );
};

{
  /* <div className="w-full">
            <h2 className="text-lg font-semibold mb-2">Recent Posts</h2>
            <div className="flex items-start mb-2">
              <img
                alt="Post thumbnail"
                className="mr-2 overflow-hidden rounded-lg object-cover"
                height="50"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width="50"
              />
              <Link className="block text-sm" href="#">
                Post 1
              </Link>
            </div>
            <div className="flex items-start mb-2">
              <img
                alt="Post thumbnail"
                className="mr-2 overflow-hidden rounded-lg object-cover"
                height="50"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width="50"
              />
              <Link className="block text-sm" href="#">
                Post 2
              </Link>
            </div>
            <div className="flex items-start mb-2">
              <img
                alt="Post thumbnail"
                className="mr-2 overflow-hidden rounded-lg object-cover"
                height="50"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width="50"
              />
              <Link className="block text-sm" href="#">
                Post 3
              </Link>
            </div>
          </div> */
}
