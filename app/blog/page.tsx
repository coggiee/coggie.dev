// import { allPosts } from '@/.contentlayer/generated';
import { getAllPosts } from '@/app/libs/posts';
import { PostCard } from '../components/post/PostCard';
import { Fallback } from '../components/ui/Fallback';

// async function getProps() {
//   const posts = allPosts.sort(
//     (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
//   );

//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default async function Blog() {
  const props = await getAllPosts();
  console.log('props: ', props)
  console.log('count: ', props.length);
  // const {
  //   props: { posts },
  // } = await getProps();
  return (
    <section className='w-full mx-auto flex-grow md:max-w-3xl flex flex-col gap-3 dark:text-[#fff]'>
      {props.map((post) => (
        <PostCard 
          key={post.slug}
          date={post.date}
          title={post.title}
          description={post.description}
          path={post.slug}
          tags={post.tags}
          readTimeMinutes={post.readingMinutes.toString()}
          />
        ))}

      {/* <header className='w-full rounded-lg bg-[#f7ab0a]/50 p-5 mb-5 shadow-md'>
        이 곳에는 개발 관련 포스팅이 올라옵니다. 👨🏻‍💻
        <br />
        알고리즘 문제 풀이 제외, 각종 <strong>프로젝트 개발기</strong>와{' '}
        <strong>회고</strong> 그리고 <strong>트러블 슈팅</strong>
        등에 대한 내용이 포함됩니다.
      </header> */}
      {/* <div>Select Tag</div> */}
      {/* <div className='flex-1 flex flex-col gap-5'>
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
              key={post._id}
              date={post.date}
              title={post.title}
              description={post.description}
              path={post._raw.flattenedPath}
              tags={post.tags!}
              readTimeMinutes={post.readTimeMinutes}
            />
          ))}
        </div>
      </div> */}
    </section>
  );
}
