import { getAllPosts } from '@/app/libs/posts';
import { PostCard } from '../components/post/PostCard';
import { Fallback } from '../components/ui/Fallback';

async function getProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default async function Blog() {
  // graphcms를 사용한다면, 모든 포스트를 가져온다.
  // 각 포스트의 frontmatter(title, desc, date, tags, ...)를 가져온다.
  // 그리고 각 포스트의 slug를 가져온다.
  // slug도 graphcms에 저장되어있다.
  
  const { props: { posts } } = await getProps();
  return (
    <section className='w-full mx-auto flex-grow md:max-w-3xl flex flex-col gap-3 dark:text-[#fff]'>
      <header className='w-full rounded-lg bg-[#f7ab0a]/50 p-5 mb-5 shadow-md'>
        이 곳에는 개발 관련 포스팅이 올라옵니다. 👨🏻‍💻
        <br />
        알고리즘 문제 풀이 제외, 각종 <strong>프로젝트 개발기</strong>와{' '}
        <strong>회고</strong> 그리고 <strong>트러블 슈팅</strong>
        등에 대한 내용이 포함됩니다.
      </header>
      {/* <div>Select Tag</div> */}
      <div className='flex-1 flex flex-col gap-5'>
        <div>
          <h1 className='font-bold text-2xl inline-block mr-2'>
            📝 All posts
          </h1>
          <span className='font-bold'>({posts.length})</span>
        </div>
        <div className='flex flex-col'>
          {posts.length === 0 && <Fallback title={'아직 포스트가 없습니다.'} />}
          {posts.map((post) => (
        <PostCard 
          key={post.slug}
          date={post.date}
          time={post.time}
          title={post.title}
          description={post.description}
          path={post.slug}
          tags={post.tags}
          readTimeMinutes={post.readingMinutes.toString()}
          />
        ))}
        </div>
      </div>
    </section>
  );
}
