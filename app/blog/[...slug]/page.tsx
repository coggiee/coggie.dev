import { serializeMdx } from "@/app/libs/mdx";
import { getAllPosts } from "@/app/libs/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import { serialize } from "v8";

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
async function getProps({ params } : { params: { slug: string[] }}) {
  const { slug } = params as { slug: string[]};
  const paths = `/${[...slug].join('/')}`; // http://localhost:3000/blog/posts/2023/10/test 에서 동작
  // const paths = `/posts/${[...slug].join('/')}`; // http://localhost:3000/blog/2023/10/test 에서 동작
  const post = getAllPosts().find((post) => post.slug === paths);
  if (!post) {
    return {
      notFound: true,
    }
  }

  // Dosen't work anymore
  // const mdx = await serializeMdx(post.content);
  return {
    frontMatter: post
  }
}

// params come from `generateStaticParams` above.
export default async function PostPage({params} : { params: { slug: string[] }}) {
  const { frontMatter } = await getProps({ params }); 
  return (
    <div className="prose dark:prose-dark mt-4 w-full max-w-none">
      <Suspense fallback={<>Loading...</>}>
        <MDXRemote
          source={frontMatter ? frontMatter.content: '내용이 없습니다.'}
        />
      </Suspense>
    </div>
  );
}