import { PostDetail } from '@/app/_components/post/PostDetail';
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
    <div className='prose dark:prose-dark mt-4 w-full max-w-none'>
      <Suspense fallback={<Loading />}>
        <PostDetail post={post!} mdx={mdx!} toc={parsedToc} isFullSize={true} />
      </Suspense>
    </div>
  );
}
