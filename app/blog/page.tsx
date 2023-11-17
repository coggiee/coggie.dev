import { allPosts } from '@/.contentlayer/generated';
import { PostCard } from '../components/post/PostCard';

async function getProps() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
}

export default async function Blog() {
  const {
    props: { posts },
  } = await getProps();
  return (
    <section className='w-full mx-auto flex-grow md:max-w-3xl flex flex-col gap-3'>
      <header className='w-full rounded-lg bg-[#f7ab0a]/50 p-5'>
        이 곳에는 개발 관련 포스팅이 올라옵니다. 👨🏻‍💻
      </header>
      {/* <div>Select Tag</div> */}
      <div className='flex-1 flex flex-col gap-5'>
        <div>
          <span className='font-bold text-2xl  underline underline-offset-8 decoration-[#f7ab0a]/50 decoration-wavy inline-block mr-2'>
            📝 All posts
          </span>
          <span className='font-bold'>({posts.length})</span>
        </div>
        <div>
          {posts.map((post) => (
            <PostCard
              key={post._id}
              date={post.date}
              title={post.title}
              description={post.description}
              path={post._raw.flattenedPath}
              tags={post.tags}
              readTimeMinutes={post.readTimeMinutes}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
