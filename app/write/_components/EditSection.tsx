"use client";

import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import TuiEditor from "@/app/write/_components/TuiEditor";
import EditTitle from "@/app/write/_components/EditTitle";
import Alert from "../../_components/common/Alert";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import { createPost } from "@/app/_libs/hygraph";
import EditDrawer from "./EditDrawer";
import Link from "next/link";
import { Button, Chip, Input, useDisclosure } from "@nextui-org/react";
import Loading from "@/app/loading";

export default function EditSection() {
  const editorRef = useRef<any>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [coverImage, setCoverImage] = useState<any>(null);
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const [isPostCreated, setIsPostCreated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isHotPost, setIsHotPost] = useState<boolean>(false);
  const [tags, setTags] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

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

    const date = dayjs().format();

    const response = await createPost(
      title,
      description,
      content,
      tagList,
      isHotPost,
      new Date(date),
      id,
    );

    const data = response.createPost;

    if (data) {
      setIsLoading(false);
      setIsPostCreated(true);
      router.push("/blog");
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
    // 썸네일은 무조건 추가해야 한다.
    const file = e.target.files![0];
    setCoverImage(file);
  };

  const handleOnClickTag = (tagToRemove: string) => {
    setTagList(tagList.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col flex-grow flex-3 relative w-full pt-10">
      <EditTitle title={title} handleOnTypeTitle={handleOnTypeTitle} />
      <div className="mb-4">
        <Input
          id="tags"
          name="tags"
          type="text"
          placeholder="태그를 추가하세요."
          size="lg"
          variant="underlined"
          label="태그"
          className="font-bold"
          isRequired
          value={tags}
          onChange={handleOnTypeTags}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="mb-4">
        <ul className="flex flex-wrap justify-start items-center">
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
      <TuiEditor content={""} editorRef={editorRef} />
      <div className="w-full flex gap-3 fixed bottom-0 px-10 py-3 justify-end">
        <Button as={Link} href="/blog">
          <span>나가기</span>
        </Button>
        <Button color="success" onPress={onOpen}>
          출간하기
        </Button>
        <EditDrawer
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          handleOnTypeDesc={handleOnTypeDesc}
          handleOnToggleHotPost={handleOnToggleHotPost}
          handleOnClickSaveBtn={handleOnSave}
          handleOnFileChange={handleOnFileChange}
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
