"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useFormStore } from "@/store/useFormStore";
import { deletePost } from "@/lib/hygraph";
import AuthorSection from "@/components/post/AuthorSection";
import PostTimeBox from "./PostTimeBox";
import { PostDetailProps } from "@/types/type";
import MotionVerticalProvider from "@/provider/MotionVerticalProvider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { copyToClipboard } from "@/utils/copyToClipboard";

const MDXRemote = dynamic(() =>
  import("next-mdx-remote").then((mod) => ({ default: mod.MDXRemote })),
);
const CommentSection = dynamic(() => import("./CommentSection"), {
  ssr: false,
});
const PostDeleteModal = dynamic(() => import("./PostDeleteModal"));
const CopyButton = dynamic(() => import("./CopyButton"));
const PostTag = dynamic(() => import("./PostTag"));

export const PostDetail = ({ post, mdx }: PostDetailProps) => {
  const { toast } = useToast();
  const { setForm, setIsUpdated } = useFormStore();
  const { data: session } = useSession();
  const router = useRouter();

  const handleOnClickCopyButton = () => {
    copyToClipboard(post.id);

    toast({
      description: "링크를 복사했습니다",
    });
  };

  const handleClickDeleteButton = async (isSubmit: boolean) => {
    if (isSubmit) {
      const data = await deletePost(post.id);
      toast({
        title:
          data !== null
            ? "포스트를 삭제했어요."
            : "포스트를 삭제하지 못했어요.",
        description: !data && "오류가 발생했어요.",
      });
      router.push("/");
    }
  };

  const handleOnClickModifyButton = () => {
    const { id } = post;
    setIsUpdated(true);
    setForm({
      id,
      title: post!.title,
      tagList: post!.tags,
      description: post!.description,
      coverImage: post!.coverImage,
      isPinned: post!.hot,
      content: post!.content,
      tagInput: "",
    });
    router.push(`/write`);
  };

  return (
    <MotionVerticalProvider duration={0.7} fromY={500} toY={0}>
      <div className="prose dark:prose-dark w-full max-w-full flex flex-row-reverse gap-10 mx-auto dark:text-[#fff] dark:prose-invert font-aritaburi">
        <div className="flex-grow w-full min-w-0 p-5 rounded-lg dark:bg-item-dark">
          <article className="min-w-0 w-full max-w-full mx-auto relative break-words mb-20">
            <div className="mb-8 flex flex-col w-full">
              <h1 className="text-4xl font-bold w-full break-words dark:text-[#fff]">
                {post!.title}
              </h1>
              <PostTag tags={post!.tags} />
              <div className="w-full flex flex-col justify-center sm:flex-row sm:justify-between sm:items-center gap-5 pb-10">
                <PostTimeBox date={post!.date} content={post!.content} />
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  {session &&
                    session.user?.email === "zentechie7@gmail.com" && (
                      <div className="text-xs flex gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleOnClickModifyButton}
                        >
                          수정
                        </Button>
                        <PostDeleteModal onDelete={handleClickDeleteButton} />
                      </div>
                    )}
                  <CopyButton onCopy={handleOnClickCopyButton} />
                </div>
              </div>
              <Separator className="mt-0" />
              <MDXRemote {...mdx} />
            </div>
          </article>
          <Separator />
          <AuthorSection />
          <CommentSection />
        </div>
      </div>
    </MotionVerticalProvider>
  );
};
