import ParallelPostSection from '@/app/@post/_components/ParallelPostDetail';
import { getSinglePost, getTotalPosts } from '@/app/_libs/hygraph';
import { serializeMdx } from '@/app/_libs/mdx';
import Loading from '@/app/loading';

import { parseHeaderForTOC } from '@/utils/parseHeaderForTOC';
import { Suspense } from 'react';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const { edges, aggregate } = (await getTotalPosts()) || [];
  const paths = edges.map(({ node: { id } }: { node: { id: string } }) => ({
    params: { slug: id },
  }));
  return paths;
}

async function getProps({ params }: { params: { slug: any } }) {
  const { slug } = params as { slug: any };
  const post = await getSinglePost(slug[0]);
  return {
    post,
  };
}

export default async function PostPage({ params }: { params: { slug: any } }) {
  const { post } = await getProps({ params });
  const parsedToc = parseHeaderForTOC(post!.content);
  const mdx = await serializeMdx(post!.content);

  return (
    <div className='snap-center w-full min-w-[50%] max-w-screen-2xl basis-2/3 rounded-lg flex-col gap-5 flex xl:flex md:snap-none prose dark:prose-dark self-start'>
      <Suspense fallback={<Loading />}>
        <ParallelPostSection
          currentPost={post!}
          mdx={mdx!}
          parsedToc={parsedToc}
          postId={post!.id}
        />
      </Suspense>
    </div>
  );
}
