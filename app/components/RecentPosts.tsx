import Link from 'next/link';

export const RecentPosts = ({posts} : {posts: any}) => {
  return (
    <section className={`mt-10`}>
      <h1 className={`text-3xl font-extrabold`}>최근 게시물</h1>
      <div className={`flex flex-col`}>
        {posts.map((post: any) => (
          <div key={post.slug} className=' border-black border-2 m-5'>
            <Link href={`/blog/${post._raw.flattenedPath}`} passHref>
              <div className='font-medium text-xs text-gray-400'>
                {post.date}
              </div>
              <div className={`font-medium text-xl`}>{post.title}</div>
              <div className={`font-light`}>{post.description}</div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
