import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { useFormStore } from "../_store/useFormStore";
import dayjs from "dayjs";
import { createPost, updatePost } from "../_libs/hygraph";
import { useRouter } from "next/navigation";

interface useFormProps {
  ref: React.MutableRefObject<any>;
}
export const useForm = () => {
  const ref = useRef<any>(null);
  const { form, isUpdated, setForm } = useFormStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const [isUpdatedCoverImage, setIsUpdatedCoverImage] = useState(false);

  const handleSubmit = async () => {
    if (!ref) return;

    setIsLoading(true);

    const content: string = ref.current.getInstance().getMarkdown();
    const {
      id: postId,
      title,
      description,
      coverImage,
      isPinned,
      tagList,
    } = form;

    tagList.forEach((tag) => tag.toUpperCase());

    if (
      content.trim().length === 0 ||
      title.trim().length === 0 ||
      tagList.length === 0
    ) {
      setIsLoading(false);
      setIsToast(true);
      setTimeout(() => {
        setIsToast(false);
      }, 3000);
      return;
    }

    if (title.endsWith(".")) {
      setForm({
        ...form,
        title: title.slice(0, title.length - 1),
      });
    }

    const currentDate = dayjs().format();

    let response = null;
    let coverImageId = null;
    const isCoverImageChanged = isUpdated ? isUpdatedCoverImage : true;

    if (isCoverImageChanged) {
      const uploadForm = new FormData();

      uploadForm.append("fileUpload", coverImage);

      const assetResponse = await fetch(
        `${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
          },
          body: uploadForm,
        },
      );

      const { id } = await assetResponse.json();
      coverImageId = id;
    }

    if (!isUpdated) {
      response = await createPost(
        title,
        description,
        content,
        tagList,
        isPinned,
        new Date(currentDate),
        coverImageId,
      );
    } else {
      response = await updatePost(
        isCoverImageChanged ? coverImageId : coverImage.id,
        content,
        description,
        isPinned,
        tagList,
        title,
        postId,
      );
    }

    const { id } = response;

    if (id) {
      setIsLoading(false);
      useFormStore.persist.clearStorage();
      router.push(`/blog/${id}`);
    }
  };

  const handleAddTag = () => {
    const currentTags = form.tagInput.trim();
    if (currentTags !== "") {
      setForm({
        ...form,
        tagList: [...form.tagList, currentTags],
        tagInput: "",
      });
    }
  };

  const handleChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      tagInput: e.target.value,
    });
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      title: e.target.value,
    });
  };

  const handleChangeContent = () => {
    const content = ref.current.getInstance().getMarkdown();
    setForm({
      ...form,
      content,
    });
  };

  const handleChangeDesc = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      description: e.target.value,
    });
  };

  const handleChangeCoverImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setIsUpdatedCoverImage(true);
    setForm({
      ...form,
      coverImage: file,
    });
  };

  const handleTogglePin = () => {
    setForm({
      ...form,
      isPinned: !form.isPinned,
    });
  };

  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddTag();
  };

  const handleSelectTag = (selectedTag: string) => {
    setForm({
      ...form,
      tagList: form.tagList.filter((tag) => tag !== selectedTag),
    });
  };

  const handleBack = () => {
    router.back();
  };

  return {
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
  };
};
