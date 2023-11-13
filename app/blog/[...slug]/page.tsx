import { getAllPosts } from "@/app/libs/post";

// Return a list of `params` to populate the [...slug] dynamic segment
// at build time.
export async function generateStaticParams() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));
  return paths;
}

// Return the path of individual pages
async function getProps({ params } : { params: { slug: string[] }}) {
  const { slug } = params as { slug: string[]};
  const paths = `/posts/${[...slug].join('/')}`;
  const post = getAllPosts().find((post) => post.slug === paths);

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      paths,
    }
  }
}

// params come from `getStaticPaths` above.
export default async function PostPage({params} : { params: { slug: string[] }}) {
  const { props } = await getProps({ params }); 
  return <div>{props!.paths}</div>
}