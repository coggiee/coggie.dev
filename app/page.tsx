import { getHotPosts, getRecentPosts, getSinglePost } from './_libs/hygraph';
import SearchBarXS from './_components/common/SearchBarXS';
import InfoSiderbar from './_components/sidebar/InfoSiderbar';
import ProjectList from './_components/project/ProjectList';
import MainSection from './_components/section/MainSection';
import RightSidebar from './_components/sidebar/RightSidebar';

async function getProps() {
  const hotPosts = (await getHotPosts()) || [];
  const recentPosts = (await getRecentPosts()) || [];
  const post = await getSinglePost('clp9p26576fkf0b17k58fve2v');

  return {
    props: {
      hotPosts,
      recentPosts,
      post,
    },
    revalidate: 60,
  };
}

export default async function Home() {
  const {
    props: { hotPosts, recentPosts, post },
  } = await getProps();
  return (
    <section className='w-full relative mx-auto max-w-screen-7xl flex flex-col md:flex-row gap-5 md:justify-center mb-7'>
      {/* Hero on Left Side */}
      <aside className='w-full min-w-[25%] relative md:basis-1/2 basis-1/4 md:max-w-sm md:min-w-min lg:pl-4 flex flex-col flex-grow-0 flex-shrink-0 gap-5 '>
        <InfoSiderbar />
      </aside>
      {/* Detail Post on Center */}
      <main className='w-full basis-1/2 rounded-lg flex-col gap-5 flex md:hidden xl:flex'>
        <MainSection hotPosts={hotPosts} recentPosts={recentPosts} />
      </main>
      {/* Post on Right Side */}
      <aside className='w-full min-w-[25%] relative md:basis-1/2  md:min-w-min basis-1/4 flex flex-col md:max-w-sm flex-grow-0 flex-shrink-0 gap-5'>
        <RightSidebar />
      </aside>
    </section>
  );
}
