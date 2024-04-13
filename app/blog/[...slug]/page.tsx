import dynamic from "next/dynamic";
import { getSinglePost, getTotalPosts } from "@/app/_libs/hygraph";
import { serializeMdx } from "@/app/_libs/mdx";

const PostViewDashboard = dynamic(
  () => import("@/app/blog/_components/PostViewDashboard"),
);

export async function generateStaticParams() {
  const { edges } = (await getTotalPosts()) || [];
  const paths = edges.map(({ node: { id } }: { node: { id: string } }) => ({
    params: { slug: id },
  }));
  return paths;
}

async function getProps({ params }: { params: { slug: any } }) {
  const { slug } = params as { slug: any };
  const post = await getSinglePost(slug[0]);
  return {
    post,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: any };
}) {
  const { post } = await getProps({ params });
  const mdx = await serializeMdx(post!.content);

  return (
    <div className="snap-center w-full min-w-[50%] max-w-screen-2xl basis-2/3 rounded-lg flex-col gap-5 flex xl:flex md:snap-none prose dark:prose-dark self-start">
      <PostViewDashboard currentPost={post!} mdx={mdx!} />
    </div>
  );
}
