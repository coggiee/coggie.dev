import { allPosts } from 'contentlayer/generated';
import { PostDetail } from '@/app/components/post/PostDetail';

// similar with getStaticPaths
export const generateStaticParams = async () => {
  const paths = allPosts.map((post) => ({
    params: { slug: post._raw.flattenedPath },
  }));
  return paths;
};

// data fetching
async function getProps({ params }: { params: { slug: string[] } }) {
  const { slug } = params as { slug: string[] };
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === slug.join('/')
  );
  return {
    props: {
      post,
    },
  };
}

// params came from `generateStaticParams` above.
export default async function PostPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const {
    props: { post },
  } = await getProps({ params });

  return <PostDetail post={post!} />;
}
