import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { useFormStore } from "../store/useFormStore";
import dayjs from "dayjs";
import { createPost, updatePost } from "../lib/hygraph";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { MDXEditorMethods } from "@mdxeditor/editor";

export const useForm = () => {
  const ref = useRef<MDXEditorMethods>(null);
  const { form, isUpdated, setForm } = useFormStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdatedCoverImage, setIsUpdatedCoverImage] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto"; //height 초기화
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const handleSubmit = async () => {
    if (!ref.current) return;

    setIsLoading(true);

    const content: string = ref.current?.getMarkdown();
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
      toast({
        description: "제목과 내용, 태그를 확인해주세요.",
        variant: "destructive",
      });
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
    // let coverImageId = null;
    // const isCoverImageChanged = isUpdated ? isUpdatedCoverImage : true;

    // if (isCoverImageChanged) {
    //   const uploadForm = new FormData();

    //   uploadForm.append("fileUpload", coverImage);

    //   const assetResponse = await fetch(
    //     `${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,
    //     {
    //       method: "POST",
    //       headers: {
    //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
    //       },
    //       body: uploadForm,
    //     },
    //   );

    //   const { id } = await assetResponse.json();
    //   coverImageId = id;
    // }

    if (!isUpdated) {
      response = await createPost(
        title,
        description,
        content,
        tagList,
        isPinned,
        new Date(currentDate),
      );
    } else {
      response = await updatePost(
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
      router.push(`/${id}`);
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

  const handleChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight();
    setForm({
      ...form,
      title: e.target.value,
    });
  };

  const handleChangeContent = () => {
    if (ref.current) {
      const content = ref.current?.getMarkdown();
      setForm({
        ...form,
        content,
      });
    }
  };

  const handleChangeDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") handleAddTag();
  };

  const handleSelectTag = (selectedTag: string) => {
    setForm({
      ...form,
      tagList: form.tagList.filter((tag) => tag !== selectedTag),
    });
  };

  const handleBack = () => {
    useFormStore.persist.clearStorage();
    router.back();
  };

  return {
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
  };
};
