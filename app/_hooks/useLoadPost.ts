import { useEffect, useState } from "react";
import { getPostsOnScroll } from "../_libs/hygraph";
import { usePostStore } from "../_store/usePostStore";

export const useLoadPost = () => {
  const { postState, setPost } = usePostStore();

  const [isLoading, setIsLoading] = useState(false);

  const handleOnClickLoadButton = async () => {
    if (!postState.cursor || postState.pageSize <= postState.postList.length)
      return;

    setIsLoading(true);

    const nextPostList = await getPostsOnScroll(postState.cursor);
    if (nextPostList.length > 0) {
      const newCursor = nextPostList[nextPostList.length - 1].id;
      setPost({
        ...postState,
        postList: [...postState.postList, ...nextPostList],
        cursor: newCursor,
      });
    } else {
      setPost({
        ...postState,
        cursor: "",
      });
    }

    setIsLoading(false);
  };

  return { isLoading, handleOnClickLoadButton };
};
