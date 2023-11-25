import { PostDetail } from '@/app/_components/common/PostDetail';
import { getSinglePost, getTotalPosts } from '@/app/_libs/hygraph';
import { serializeMdx } from '@/app/_libs/mdx';
import Loading from '@/app/loading';

import { parseHeaderForTOC } from '@/utils/parseHeaderForTOC';
import { Suspense } from 'react';

export const dynamic = 'force-static'

// Return a list of `params` to populate the [...slug] dynamic segment
// at build time.
export async function generateStaticParams() {
  const {edges, aggregate } = (await getTotalPosts()) || [];
  const paths = edges.map(({ node: { id } }) => ({ params: { slug: id } }));
  return paths;
}

// Return the path of individual pages
async function getProps({ params }: { params: { slug: any } }) {
  const { slug } = params as { slug: any };
  const post = await getSinglePost(slug[0]);
  return {
    post,
  };
}

// params come from `generateStaticParams` above.
export default async function PostPage({ params }: { params: { slug: any } }) {
  // console.log => { params: { slug: [ 'blog' ] } }
  const { post } = await getProps({ params });
  const parsedToc = parseHeaderForTOC(post!.content);

  // slug를 기준으로 graphcms에서 일치하는 포스트를 가져온다.
  // 여기서는 graphcms에서 받은 markdown을 mdx로 변환한다.
  // 포스트를 가져오려면, editor에서 markdown으로 저장하여 graphcms에 저장하는 쿼리를 날려야 한다.
  // frontMatter.content는 markdown 형식이다.
  const mdx = await serializeMdx(post!.content);

  return (
    <div className='prose dark:prose-dark mt-4 w-full max-w-none'>
      <Suspense fallback={<Loading />}>
        <PostDetail post={post!} mdx={mdx!} toc={parsedToc} />
      </Suspense>
    </div>
  );
}
