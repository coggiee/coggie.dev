"use client";

import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import TuiEditor from "@/app/write/_components/Editor";
import Alert from "../../_components/common/Alert";
import { useRouter, useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import { createPost, updatePost } from "@/app/_libs/hygraph";
import ReCheckModal from "./ReCheckModal";
import Link from "next/link";
import { Button, Chip, useDisclosure } from "@nextui-org/react";
import Loading from "@/app/loading";
import TitleInput from "@/app/write/_components/TitleInput";
import TagInput from "./TagInput";

interface WriteSectionProps {
  post?: any;
}

export default function WriteSection({ post }: WriteSectionProps) {
  const searchParams = useSearchParams();
  const editorRef = useRef<any>(null);
  const [title, setTitle] = useState<string>(post ? post.title : "");
  const [description, setDescription] = useState<string>(
    post ? post.description : "",
  );
  const [coverImage, setCoverImage] = useState<any>(
    post ? post.coverImage.url : null,
  );

  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const [isPostCreated, setIsPostCreated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isHotPost, setIsHotPost] = useState<boolean>(post ? post.hot : false);
  const [tags, setTags] = useState("");
  const [tagList, setTagList] = useState<string[]>(post ? post.tags : []);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const router = useRouter();
  const isUpdate = searchParams.has("isUpdate")
    ? searchParams.get("isUpdate")
    : false;

  const handleOnSave = async () => {
    setIsLoading(true);
    const content: string = editorRef.current.getInstance().getMarkdown();
    tagList.forEach((tag) => tag.toUpperCase());

    // 제목과 내용이 없는 예외처리
    if (
      content.trim().length === 0 ||
      title.trim().length === 0 ||
      tagList.length === 0
    ) {
      setIsLoading(false);
      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 3000);
      return;
    }

    if (title.endsWith(".")) {
      setTitle(title.slice(0, title.length - 1));
    }

    const date = dayjs().format();

    let response = null;
    let coverImageId = null;
    const isCoverImageChanged = post
      ? coverImage !== post.coverImage.url
      : true;

    if (isCoverImageChanged) {
      const form = new FormData();

      form.append("fileUpload", coverImage);

      const assetResponse = await fetch(
        `${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
          },
          body: form,
        },
      );

      const { id } = await assetResponse.json();
      coverImageId = id;
    }
    if (!isUpdate) {
      response = await createPost(
        title,
        description,
        content,
        tagList,
        isHotPost,
        new Date(date),
        coverImageId,
      );
    } else {
      response = await updatePost(
        isCoverImageChanged ? coverImageId : post.coverImage.id,
        content,
        description,
        isHotPost,
        tagList,
        title,
        post.id,
      );
    }

    const { id } = response;

    if (id) {
      setIsLoading(false);
      setIsPostCreated(true);
      router.push(`/blog/${id}`);
    }
  };

  const addTags = () => {
    if (tags.trim() !== "") {
      setTagList([...tagList, tags.trim()]);
      setTags("");
    }
  };

  const handleOnTypeTitle = (value: string) => {
    setTitle((prev) => value);
  };

  const handleOnTypeTags = (e: ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };
  const handleOnTypeDesc = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleOnToggleHotPost = () => {
    setIsHotPost((prev) => !prev);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTags();
    }
  };

  const handleOnFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setCoverImage(file);
  };

  const handleOnClickTag = (tagToRemove: string) => {
    setTagList(tagList.filter((tag) => tag !== tagToRemove));
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col flex-grow flex-3 relative w-full pt-10">
      <TitleInput title={title} handleOnTypeTitle={handleOnTypeTitle} />
      <TagInput
        tags={tags}
        handleKeyPress={handleKeyPress}
        handleOnTypeTags={handleOnTypeTags}
      />
      <div className="mb-4">
        <ul className="flex flex-wrap justify-start items-center gap-2">
          {tagList.map((tag, index) => (
            <Chip
              key={index}
              size="lg"
              variant="solid"
              color="success"
              className="cursor-pointer"
              onClose={() => handleOnClickTag(tag)}
            >
              {tag}
            </Chip>
          ))}
        </ul>
      </div>
      <TuiEditor content={post ? post.content : " "} editorRef={editorRef} />
      <div className="w-full flex gap-3 fixed bottom-0 px-10 py-3 justify-end">
        <Button onPress={handleBack}>
          <span>나가기</span>
        </Button>
        <Button color="success" onPress={onOpen}>
          출간하기
        </Button>
        <ReCheckModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          handleOnTypeDesc={handleOnTypeDesc}
          handleOnToggleHotPost={handleOnToggleHotPost}
          handleOnClickSaveBtn={handleOnSave}
          handleOnFileChange={handleOnFileChange}
          description={description}
          coverImageUrl={post ? post.coverImage.url : null}
          defaultSelected={isHotPost}
        />
      </div>
      {isAlertVisible && (
        <Alert title="제목과 내용, 태그를 확인해주세요." bgColor="crimson" />
      )}
      {isPostCreated && (
        <Alert title="글이 작성되었습니다." bgColor="crimson" />
      )}
      {isLoading && <Loading />}
    </div>
  );
}
