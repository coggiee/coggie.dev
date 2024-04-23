"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useDisclosure } from "@nextui-org/react";
import { useFormStore } from "@/app/_store/useFormStore";
import { useForm } from "@/app/_hooks/useForm";
import TagList from "./TagList";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const TitleInput = dynamic(
  () => import("@/app/(write)/write/_components/TitleInput"),
);
const TagInput = dynamic(
  () => import("@/app/(write)/write/_components/TagInput"),
);
const TuiEditor = dynamic(
  () => import("@/app/(write)/write/_components/Editor"),
);
const ReCheckModal = dynamic(
  () => import("@/app/(write)/write/_components/ReCheckModal"),
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
    textareaRef,
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
    <div className="flex flex-col grow flex-3 relative w-full container pt-10">
      <TitleInput
        title={title}
        handleOnTypeTitle={handleChangeTitle}
        titleRef={textareaRef}
      />
      <Separator className="h-2 bg-black/70 w-20 my-5" />
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
        <Button onClick={handleBack} variant="ghost">
          나가기
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
      {isLoading && <Loading />}
    </div>
  );
}
