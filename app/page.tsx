import { getHotPosts, getRecentPosts } from './_libs/hygraph';
import MainPageSection from './_components/section/MainPageSection';

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
    <section className='snap-y snap-mandatory scroll-smooth overflow-y-scroll w-full relative mx-auto max-w-screen-7xl flex flex-col md:flex-row gap-5 md:justify-center mb-7'>
      {/* Hero on Left Side */}
      <MainPageSection hotPosts={hotPosts} recentPosts={recentPosts} />
    </section>
  );
}
