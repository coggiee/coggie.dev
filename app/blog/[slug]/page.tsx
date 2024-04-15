import { getSinglePost } from "@/app/_libs/hygraph";
import { serializeMdx } from "@/app/_libs/mdx";
import PostViewDashboard from "@/app/blog/_components/PostViewDashboard";
import type { Metadata, ResolvingMetadata } from "next";

const LOGO_IMAGE = "https://i.ibb.co/M2nK5kv/logo.png";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug;
  const post = await getSinglePost(slug);
  const thumbnail =
    post.coverImage.url || (await parent).openGraph?.images || [];
  const title = post.title;
  const desc = post.description;
  const id = post.id;
  const publishedDate = post.date;

  return {
    icons: {
      icon: LOGO_IMAGE,
      apple: LOGO_IMAGE,
    },
    other: {
      "naver-site-verification": "db583c8efc6a2ebd36e6b839daf24a146b414c49",
    },
    title: title,
    description: desc,
    openGraph: {
      title: title,
      description: desc,
      url: `/blog/${id}`,
      siteName: "COGGIE",
      images: [thumbnail],
      publishedTime: publishedDate,
      locale: "ko_KR",
      authors: "Coggie",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: desc,
      creator: "@coggie",
      images: [thumbnail],
    },
  };
}

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
