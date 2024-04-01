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
import { useFormStore } from "@/app/_store/useFormStore";
import { useForm } from "@/app/_hooks/useForm";

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
      <div className="mb-4">
        <ul className="flex flex-wrap justify-start items-center gap-2">
          {tagList.map((tag, index) => (
            <Chip
              key={index}
              size="lg"
              variant="solid"
              color="success"
              className="cursor-pointer"
              onClose={() => handleSelectTag(tag)}
            >
              {tag}
            </Chip>
          ))}
        </ul>
      </div>
      <TuiEditor content={isUpdated ? content : " "} editorRef={ref} />
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
