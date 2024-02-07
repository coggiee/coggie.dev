import { getTotalTags, getTotalPosts } from '../_libs/hygraph';
import dynamic, * as Dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DynamicBlogSection = dynamic(() => import('./_components/BlogSection'), {
  ssr: false,
});

async function getProps() {
  const { edges, aggregate } = (await getTotalPosts()) || [];
  const posts = edges.map((post: any) => post.node);
  const lastPostCursor = posts[posts.length - 1].id;
  const tags = (await getTotalTags()) || [];
  const uniqueTags = Array.from(
    new Set<string>(tags.flatMap((post: any) => post.tags))
  );
  uniqueTags.unshift('All');

  return {
    props: {
      posts,
      uniqueTags,
      lastPostCursor,
      totalPostsSize: aggregate.count,
    },
    revalidate: 60,
  };
}

export default async function Blog() {
  const {
    props: { posts, uniqueTags, lastPostCursor, totalPostsSize },
  } = await getProps();

  return (
    <section className='w-full h-full flex flex-col max-w-7xl gap-10 dark:text-[#fff] md:flex-row-reverse relative'>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicBlogSection
          posts={posts}
          uniqueTags={uniqueTags}
          cursor={lastPostCursor}
          totalPostSize={totalPostsSize}
        />
      </Suspense>
      {/* 태그 클릭 시, 해당 태그를 가지고 있는 포스트를 보여줌 */}
    </section>
  );
}