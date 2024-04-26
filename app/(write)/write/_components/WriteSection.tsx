"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useFormStore } from "@/app/_store/useFormStore";
import { useForm } from "@/app/_hooks/useForm";
import TagList from "./TagList";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ForwardRefEditor } from "./ForwardRefEditor";

const TitleInput = dynamic(
  () => import("@/app/(write)/write/_components/TitleInput"),
);
const TagInput = dynamic(
  () => import("@/app/(write)/write/_components/TagInput"),
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

  return (
    <div className="flex flex-col grow flex-3 w-full container pt-10">
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
      <ForwardRefEditor
        ref={ref}
        markdown={isUpdated ? content : ""}
        onChange={handleChangeContent}
      />
      <div className="fixed w-full bottom-0 left-0 border-t px-10 bg-white">
        <div className="flex gap-3 py-3 justify-end w-full container">
          <Button onClick={handleBack} variant="ghost">
            나가기
          </Button>
          <ReCheckModal
            handleOnTypeDesc={handleChangeDesc}
            handleOnToggleHotPost={handleTogglePin}
            handleOnClickSaveBtn={handleSubmit}
            handleOnFileChange={handleChangeCoverImage}
            description={description}
            coverImageUrl={coverImage ? coverImage.url : null}
            defaultSelected={isPinned}
          />
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
}
