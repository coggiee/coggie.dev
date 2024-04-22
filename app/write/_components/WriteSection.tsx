"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Button, useDisclosure } from "@nextui-org/react";
import { useFormStore } from "@/app/_store/useFormStore";
import { useForm } from "@/app/_hooks/useForm";
import TagList from "./TagList";

const TitleInput = dynamic(() => import("@/app/write/_components/TitleInput"));
const TagInput = dynamic(() => import("@/app/write/_components/TagInput"));
const TuiEditor = dynamic(() => import("@/app/write/_components/Editor"));
const Alert = dynamic(() => import("@/app/_common/global/Alert"));
const ReCheckModal = dynamic(
  () => import("@/app/write/_components/ReCheckModal"),
);
const Loading = dynamic(() => import("@/app/loading"));

export default function WriteSection() {
  const {
    form: {
      id: postId,
      title,
      content,
      description,
      coverImage,
      isPinned,
      tagList,
      tagInput,
    },
    isUpdated,
  } = useFormStore();

  const {
    ref,
    isLoading,
    isToast,
    handleSubmit,
    handleChangeTitle,
    handleChangeContent,
    handleChangeDesc,
    handleChangeCoverImage,
    handleChangeTag,
    handleTogglePin,
    handlePressEnter,
    handleSelectTag,
    handleBack,
  } = useForm();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col flex-grow flex-3 relative w-full pt-10">
      <TitleInput title={title} handleOnTypeTitle={handleChangeTitle} />
      <TagInput
        tags={tagInput}
        handleKeyPress={handlePressEnter}
        handleOnTypeTags={handleChangeTag}
      />
      <TagList tagList={tagList} onClick={handleSelectTag} />
      <TuiEditor
        content={isUpdated ? content : " "}
        editorRef={ref}
        onChange={handleChangeContent}
      />
      <div className="flex gap-3 py-3 justify-end">
        <Button onPress={handleBack}>
          <span>나가기</span>
        </Button>
        <Button color="success" onPress={onOpen}>
          출간하기
        </Button>
        <ReCheckModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          handleOnTypeDesc={handleChangeDesc}
          handleOnToggleHotPost={handleTogglePin}
          handleOnClickSaveBtn={handleSubmit}
          handleOnFileChange={handleChangeCoverImage}
          description={description}
          coverImageUrl={coverImage ? coverImage.url : null}
          defaultSelected={isPinned}
        />
      </div>
      {isToast && (
        <Alert title="제목과 내용, 태그를 확인해주세요." bgColor="crimson" />
      )}
      {isLoading && <Loading />}
    </div>
  );
}
