import { Hero } from './components/Hero';
import { PostSection } from './components/post/PostSection';
import { allPosts } from '@/.contentlayer/generated';
import { Sidebar } from './components/sidebar/Sidebar';

async function getProps() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  // 읽을 만한 포스트 필터링
  const hotPosts = posts.filter((post) => post?.hot === true);
  const recentPosts = posts.slice(0, 5);

  return {
    props: {
      hotPosts,
      recentPosts,
    },
  };
}

export default async function Home() {
  const {
    props: { hotPosts, recentPosts },
  } = await getProps();

  return (
    <section className='w-full mx-auto flex flex-col md:max-w-6xl md:flex-row gap-5 relative'>
      <div className='flex flex-col flex-grow min-w-0 w-full mb-3'>
        <Hero />
        <PostSection posts={hotPosts} title={'🔥 읽어 볼만한 포스트'} />
        <PostSection posts={recentPosts} title={'📅 최근 포스트'} />
      </div>
      <Sidebar />
    </section>
  );
}
