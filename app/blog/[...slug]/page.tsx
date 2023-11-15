import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { formatDate } from '@/utils/formatDate'

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

  const MDXComponent = getMDXComponent(post!.body.code);
  return (
    <div className='prose dark:prose-dark mt-4 w-full max-w-none'>
      <article className='mx-auto max-w-xl py-8'>
        <div className='mb-8'>
          <time dateTime={post!.date} className='mb-1 text-xs text-gray-600'>
            <div>{formatDate(post!.date)}</div>
            <div>{format(parseISO(post!.date), 'H:mm')} - {post!.readTimeMinutes}</div>
          </time>
          <div className='flex justify-start items-center'>
            {post!.tags?.map((tag: string) => (
              <div key={tag} className='text-xs text-gray-600 mr-2'>
                {tag}
              </div>
            ))}
          </div>
          <h1 className='text-5xl font-bold'>{post!.title}</h1>
          <MDXComponent />
        </div>
      </article>
    </div>
  );
}
