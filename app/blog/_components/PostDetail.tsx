"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useFormStore } from "@/app/_store/useFormStore";
import { deletePost } from "@/app/_libs/hygraph";
import { copyToClipboard } from "@/utils/copyToClipboard";
import AuthorSection from "@/app/blog/_components/AuthorSection";
import PostTimeBox from "./PostTimeBox";
import { PostDetailProps } from "@/types/type";
import MotionVerticalProvider from "@/app/_provider/MotionVerticalProvider";
import { Button, Divider, useDisclosure } from "@nextui-org/react";

const Alert = dynamic(() => import("../../_components/common/Alert"));
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
  const { setForm, setIsUpdated } = useFormStore();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const [isFallback, setisFallback] = useState<boolean>(false);
  const [alertTitle, setAlertTitle] = useState<string>("");
  const { data: session } = useSession();
  const router = useRouter();

  const handleOnClickCopyButton = () => {
    copyToClipboard(post.id);

    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };

  const handleClickDeleteButton = async (isSubmit: boolean) => {
    if (isSubmit) {
      const data = await deletePost(post.id);
      if (data !== null) {
        setAlertTitle("포스트를 삭제했습니다.");
      } else {
        setAlertTitle("포스트 삭제에 에러가 발생했습니다.");
      }

      setisFallback(true);
      setTimeout(() => {
        setisFallback(false);
      }, 3000);
      onClose();
      router.push("/blog");
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
      <div className="prose dark:prose-dark w-full max-w-full flex flex-row-reverse gap-10 mx-auto dark:text-[#fff] dark:prose-invert">
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
                          color="success"
                          variant="flat"
                          radius="md"
                          className="p-0"
                          onClick={handleOnClickModifyButton}
                        >
                          수정
                        </Button>
                        <Button
                          size="sm"
                          color="danger"
                          variant="flat"
                          radius="md"
                          className="p-0"
                          onPress={onOpen}
                        >
                          삭제
                        </Button>
                      </div>
                    )}
                  <CopyButton onCopy={handleOnClickCopyButton} />
                </div>
              </div>
              <Divider className="mt-0" />
              <MDXRemote {...mdx} />
            </div>
          </article>
          <Divider />
          <AuthorSection />
          <CommentSection />
        </div>
        {isAlertVisible && (
          <Alert title={"링크가 복사되었습니다."} bgColor="dodgerblue" />
        )}
        {isFallback && <Alert title={alertTitle} bgColor="crimson" />}
        <PostDeleteModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onDelete={handleClickDeleteButton}
        />
      </div>
    </MotionVerticalProvider>
  );
};
