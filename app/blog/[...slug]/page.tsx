import { PostDetail } from '@/app/components/post/PostDetail';
import { serializeMdx } from '@/app/libs/mdx';
import { getAllPosts } from '@/app/libs/posts';
import { parseHeaderForTOC } from '@/utils/parseHeaderForTOC';

// Return a list of `params` to populate the [...slug] dynamic segment
// at build time.
export async function generateStaticParams() {
  const posts = getAllPosts();
  // http://localhost:3000/blog/2023/10/test 에서 동작
  // const paths = posts.map((post) => ({
  //   params: { slug: post.slug }
  // }));
  const paths = posts.map((post) => `/blog${post.slug}`); // http://localhost:3000/blog/posts/2023/10/test 에서 동작
  return paths;
}

// Return the path of individual pages
async function getProps({ params }: { params: { slug: string[] } }) {
  const { slug } = params as { slug: string[] };
  const paths = `/${[...slug].join('/')}`; // http://localhost:3000/blog/posts/2023/10/test 에서 동작
  // const paths = `/posts/${[...slug].join('/')}`; // http://localhost:3000/blog/2023/10/test 에서 동작
  const post = getAllPosts().find((post) => post.slug === paths);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Dosen't work anymore

  return {
    post,
  };
}

// params come from `generateStaticParams` above.
export default async function PostPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const { post } = await getProps({ params });
  const parsedToc = parseHeaderForTOC(post!.content);

  // slug를 기준으로 graphcms에서 일치하는 포스트를 가져온다.
  // 여기서는 graphcms에서 받은 markdown을 mdx로 변환한다.
  // 포스트를 가져오려면, editor에서 markdown으로 저장하여 graphcms에 저장하는 쿼리를 날려야 한다.
  // frontMatter.content는 markdown 형식이다.
  const mdx = await serializeMdx(post!.content);

  return (
    <div className='prose dark:prose-dark mt-4 w-full max-w-none'>
      <PostDetail post={post!} mdx={mdx!} toc={parsedToc} />
    </div>
  );
}
