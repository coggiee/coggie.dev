import { getAllPosts } from '../libs/posts';

async function getProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}

export default async function PostsPage() {
  const {
    props: { posts },
  } = await getProps();
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>{post.slug}</li>
      ))}
    </ul>
  );
}
