import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { PostSection } from './components/PostSection';
import { allPosts } from '@/.contentlayer/generated';
import { UpdateSection } from './components/UpdateSection';

async function getProps() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  // 읽을 만한 포스트 필터링
  const hotPosts = posts.filter((post) => post?.hot === true);

  return {
    props: {
      hotPosts,
    },
  };
}

export default async function Home() {
  const {
    props: { hotPosts },
  } = await getProps();

  return (
    <section className='w-full mx-auto flex flex-col md:max-w-6xl md:flex-row gap-5 relative'>
      <div className='flex flex-col flex-grow min-w-0 w-full border-b-2 mb-3'>
        <Hero />
        <PostSection posts={hotPosts} title={'읽어 볼만한 포스트'} />
        <InfoSection />
      </div>
      <UpdateSection />
    </section>
  );
}
