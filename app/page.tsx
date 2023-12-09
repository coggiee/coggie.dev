import { Hero } from './_components/hero/Hero';
import { PostSection } from './_components/common/PostSection';
import { Sidebar } from './_components/sidebar/Sidebar';
import { getHotPosts, getRecentPosts, getSinglePost } from './_libs/hygraph';
import SearchBarXS from './_components/ui/SearchBarXS';
import { parseHeaderForTOC } from '@/utils/parseHeaderForTOC';
import { serializeMdx } from './_libs/mdx';
import { PostDetail } from './_components/common/PostDetail';
import { Playlist } from './_components/sidebar/Playlist';

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
    <section className='w-full mx-auto max-w-screen-7xl flex flex-col md:flex-row gap-5 relative md:justify-center mb-7'>
      {/* Hero on Left Side */}
      <aside className='w-full min-w-[25%] md:basis-1/2 basis-1/4 md:max-w-sm md:min-w-min lg:pl-4 flex flex-col flex-grow-0 flex-shrink-0 gap-5 relative'>
        <div className='sticky top-[110px] left-0 w-full flex flex-col gap-3 flex-shrink-0'>
          <Hero src={'/profile2.jpg'} />
          <Playlist />
        </div>
      </aside>
      {/* Detail Post on Center */}
      <div className='w-full basis-1/2 hidden rounded-lg flex-col gap-5 xl:flex'>
        <div className='flex justify-center border-b border-b-item-border-light dark:border-b-item-border-dark'>
          <aside className='text-9xl dark:text-white px-8 pr-5'>;</aside>
          <header className='w-full rounded-lg p-5 pl-4 mb-5 leading-loose dark:text-white'>
            <h1 className='text-xl font-semibold mb-3'>Dev Blog</h1>
            <p className='dark:text-[rgb(141, 140, 142)]'>
              <span>개발 관련 포스팅이 올라옵니다.</span>
              <br />
              <span>알고리즘 문제 풀이 제외, </span>
              <span>
                <strong>프로젝트 개발기</strong>와 <strong>회고</strong> 그리고{' '}
              </span>
              <span>
                <strong>트러블 슈팅</strong>
                등에 대한 내용이 포함됩니다.
                <br />
                포스팅의 내용은 <strong>주관적</strong>이며 부정확한 정보가
                포함되어 있을 수 있습니다.
              </span>
            </p>
          </header>
        </div>
        <main className='p-5 grow dark:text-white border border-item-border-light rounded-lg bg-item-light dark:bg-item-dark dark:border-item-border-dark'>
          {/* <PostDetail post={post!} mdx={mdx} toc={parsedToc} /> */}
        </main>
        {/* <PostDetail post={post!} mdx={mdx} toc={parsedToc} /> */}
      </div>
      {/* Post on Right Side */}
      <aside className='w-full basis-1/4 flex flex-col md:max-w-sm flex-grow-0 flex-shrink-0 gap-5 relative'>
        {/* <div className='w-full p-3 rounded-lg border border-item-border-light bg-item-light dark:bg-item-dark dark:border-item-border-dark'>
          <SearchBarXS />
        </div> */}
        <aside className='w-full min-w-full flex-shrink-0 sticky top-[110px] right-0 flex flex-col gap-5'>
          <SearchBarXS />
          <div className='flex flex-col gap-5'>
            <PostSection posts={hotPosts} title={'읽어 볼만한 포스트'} />
            <PostSection posts={recentPosts} title={'최근 포스트'} />
          </div>
        </aside>
      </aside>
    </section>
  );
}
