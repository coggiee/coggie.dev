import { Hero } from './_components/hero/Hero';
import { PostSection } from './_components/common/PostSection';
import { Sidebar } from './_components/sidebar/Sidebar';
import { getHotPosts, getRecentPosts } from './_libs/hygraph';
import SearchBarXS from './_components/ui/SearchBarXS';

async function getProps() {
  const hotPosts = (await getHotPosts()) || [];
  const recentPosts = (await getRecentPosts()) || [];

  return {
    props: {
      hotPosts,
      recentPosts,
    },
    revalidate: 60,
  };
}

export default async function Home() {
  const {
    props: { hotPosts, recentPosts },
  } = await getProps();
  return (
    <section className='w-full mx-auto flex flex-col md:max-w-6xl md:flex-row gap-5 relative'>
      <div className='flex flex-col flex-grow min-w-0 w-full mb-3 md:mb-0 md:w-3/4 lg:w-3/4'>
        <div>
          <Hero />
        </div>
      </div>
      <aside className='w-full min-w-0 md:w-1/2 lg:w-1/3 lg:pl-4 flex flex-col flex-grow-0 flex-shrink-0'>
        <div className='w-full'>
          <SearchBarXS />
        </div>
        <div className='w-full mb-6 flex-shrink-0'>
          <PostSection posts={hotPosts} title={'읽어 볼만한 포스트'} />
          <PostSection posts={recentPosts} title={'최근 포스트'} />
        </div>
      </aside>
      {/* <Sidebar /> */}
    </section>
  );
}
