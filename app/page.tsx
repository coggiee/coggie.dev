import { Hero } from './_components/hero/Hero';
import { PostSection } from './_components/post/PostSection';
import { Sidebar } from './_components/sidebar/Sidebar';
import { getHotPosts, getRecentPosts } from './_libs/hygraph';

async function getProps() {
  const hotPosts = (await getHotPosts()) || [];
  const recentPosts = (await getRecentPosts()) || [];

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
        <PostSection posts={hotPosts} title={'읽어 볼만한 포스트'} />
        <PostSection posts={recentPosts} title={'최근 포스트'} />
      </div>
      <Sidebar />
    </section>
  );
}
