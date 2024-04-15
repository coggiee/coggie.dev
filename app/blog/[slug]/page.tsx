import { getSinglePost } from "@/app/_libs/hygraph";
import { serializeMdx } from "@/app/_libs/mdx";
import PostViewDashboard from "@/app/blog/_components/PostViewDashboard";

// export const dynamic = "force-static";

// export async function generateStaticParams() {
//   const { edges } = (await getTotalPosts()) || [];

//   return edges.map(({ node: { id } }: { node: { id: string } }) => ({
//     slug: id,
//   }));
// }

async function getProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getSinglePost(slug);

  return {
    post,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { post } = await getProps({ params });
  const mdx = await serializeMdx(post!.content);

  return (
    <div className="snap-center w-full min-w-[50%] max-w-screen-2xl basis-2/3 rounded-lg flex-col gap-5 flex xl:flex md:snap-none prose dark:prose-dark self-start">
      <PostViewDashboard currentPost={post!} mdx={mdx!} />
    </div>
  );
}
