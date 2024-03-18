"use client";

import IconLink from "@/app/_icons/IconLink";
import useDetectScroll from "../../_hooks/useDetectScroll";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { useState } from "react";
import Alert from "../../_components/common/Alert";
import { MDXRemote } from "next-mdx-remote";

import AuthorSection from "@/app/blog/_components/AuthorSection";
import { TocSidebar } from "@/app/post-detail/_components/TocSidebar";
import { deletePost } from "@/app/_libs/hygraph";
import { useRouter } from "next/navigation";
import PostTimeBox from "./PostTimeBox";
import { PostDetailProps } from "@/types/type";
import MotionVerticalProvider from "@/app/_provider/MotionVerticalProvider";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip,
  Divider,
  Tooltip,
} from "@nextui-org/react";
import IconCheck from "@/app/_icons/IconCheck";
import CommentSection from "./CommentSection";
import { useSession } from "next-auth/react";

export const PostDetail = ({ post, mdx, toc, isFullSize }: PostDetailProps) => {
  const { scroll } = useDetectScroll();
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const handleOnClickModalButton = async (isSubmit: boolean) => {
    if (isSubmit) {
      const data = await deletePost(post.id);
      if (data !== null) {
        setAlertTitle("포스트를 삭제했습니다.");
        router.push("/blog");
      } else {
        setAlertTitle("포스트 삭제에 에러가 발생했습니다.");
      }

      setisFallback(true);
      setTimeout(() => {
        setisFallback(false);
      }, 3000);
      onClose();
    }
  };

  const handleOnClickModifyButton = () => {
    const { id } = post;
    router.push(`/write/${id}?isUpdate=true`);
  };

  return (
    <MotionVerticalProvider duration={0.7} fromY={500} toY={0}>
      <div className="prose dark:prose-dark w-full max-w-full flex flex-row-reverse gap-10 mx-auto dark:text-[#fff] dark:prose-invert">
        {/* <HorizontalProgress scroll={scroll} /> */}
        {toc.length > 0 && isFullSize && (
          <TocSidebar tableOfContents={toc} isSidebar={true} />
        )}
        <div className="flex-grow w-full min-w-0 p-5 rounded-lg dark:bg-item-dark">
          <article className="min-w-0 w-full max-w-full mx-auto relative break-words mb-20">
            <div className="mb-8 flex flex-col w-full">
              <h1 className="text-4xl font-bold w-full break-words dark:text-[#fff]">
                {post!.title}
              </h1>
              <div className="flex justify-start items-center gap-2 mb-5 flex-wrap">
                {post!.tags?.map((tag: string) => (
                  <Chip
                    startContent={<IconCheck fontSize={18} />}
                    key={tag}
                    size="sm"
                    radius="lg"
                    color="success"
                    variant="flat"
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
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
                          onPress={() => onOpen()}
                        >
                          삭제
                        </Button>
                      </div>
                    )}
                  <Tooltip
                    showArrow={true}
                    placement="bottom"
                    content="링크 복사"
                  >
                    <Button
                      size="sm"
                      variant="flat"
                      radius="md"
                      isIconOnly
                      className="rounded-full bg-[dodgerblue]/70"
                      onClick={handleOnClickCopyButton}
                    >
                      <IconLink />
                    </Button>
                  </Tooltip>
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
        <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader>정말 포스트를 삭제하시겠어요?</ModalHeader>
            <ModalBody>한 번 삭제된 포스트는 되돌릴 수 없어요.</ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="flat"
                onPress={() => handleOnClickModalButton(true)}
              >
                삭제
              </Button>
              <Button onPress={onClose}>취소</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {isFallback && <Alert title={alertTitle} bgColor="crimson" />}
      </div>
    </MotionVerticalProvider>
  );
};
