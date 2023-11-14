import { allPosts } from '@/.contentlayer/generated';
import { BlogPost } from '../components/BlogPost';

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
    <div>
      <span className={`font-bold`}>BLOG</span>
      {posts.map((post) => (
        <BlogPost
          key={post._id}
          date={post.date}
          title={post.title}
          description={post.description}
          slug={post._raw.flattenedPath}
        />
      ))}
    </div>
  );
}
