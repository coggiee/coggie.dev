import { RecentPosts } from './components/RecentPosts';
import { allPosts } from '@/.contentlayer/generated';

async function getProps() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
}

export default async function Home() {
  const {
    props: { posts },
  } = await getProps();

  return (
    <div>
      <span className='font-bold'>HOME</span>
      <RecentPosts posts={posts} />
    </div>
  );
}
