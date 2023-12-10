import { PostSection } from './_components/post/PostSection';
import { getHotPosts, getRecentPosts, getSinglePost } from './_libs/hygraph';
import SearchBarXS from './_components/common/SearchBarXS';
import { parseHeaderForTOC } from '@/utils/parseHeaderForTOC';
import { serializeMdx } from './_libs/mdx';
import { PostDetail } from './_components/post/PostDetail';
import InfoSiderbar from './_components/sidebar/InfoSiderbar';
import Introduction from './_components/common/Introduction';
import { Sidebar } from './_components/sidebar/Sidebar';
import ProjectList from './_components/project/ProjectList';

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
  const parsedToc = parseHeaderForTOC(post!.content);

  // slug를 기준으로 graphcms에서 일치하는 포스트를 가져온다.
  // 여기서는 graphcms에서 받은 markdown을 mdx로 변환한다.
  // 포스트를 가져오려면, editor에서 markdown으로 저장하여 graphcms에 저장하는 쿼리를 날려야 한다.
  // frontMatter.content는 markdown 형식이다.
  const mdx = await serializeMdx(post!.content);
  return (
    <section className='w-full relative mx-auto max-w-screen-7xl flex flex-col md:flex-row gap-5 md:justify-center mb-7'>
      {/* Hero on Left Side */}
      <aside className='w-full min-w-[25%] relative md:basis-1/2 basis-1/4 md:max-w-sm md:min-w-min lg:pl-4 flex flex-col flex-grow-0 flex-shrink-0 gap-5 '>
        <InfoSiderbar />
      </aside>
      {/* Detail Post on Center */}
      <div className='w-full basis-1/2 rounded-lg flex-col gap-5 flex sm:hidden xl:flex'>
        <Introduction />
        <PostSection posts={hotPosts} title={'읽어 볼만한 포스트'} />
        <PostSection posts={recentPosts} title={'최근 포스트'} />
      </div>
      {/* Post on Right Side */}
      <aside className='w-full min-w-[25%] relative  md:basis-1/2  md:min-w-min basis-1/4 flex flex-col md:max-w-sm flex-grow-0 flex-shrink-0 gap-5'>
        <aside className='w-full flex flex-col gap-5 flex-shrink-0 sticky top-[120px] right-0'>
          <SearchBarXS />
          <ProjectList />
          <Sidebar />
          {/* <div className='flex flex-col gap-5'>
            <PostSection posts={hotPosts} title={'읽어 볼만한 포스트'} />
            <PostSection posts={recentPosts} title={'최근 포스트'} />
          </div> */}
        </aside>
      </aside>
    </section>
  );
}
