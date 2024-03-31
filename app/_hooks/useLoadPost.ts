import { useEffect, useState } from "react";
import { getPostsOnScroll } from "../_libs/hygraph";

interface useLoadPostProps {
  initialPosts: any;
  cursor: string;
  totalPageSize: number;
}

export const useLoadPost = ({
  initialPosts,
  cursor,
  totalPageSize,
}: useLoadPostProps) => {
  const [postList, setPostList] = useState(initialPosts);
  const [lastCursor, setLastCursor] = useState<string | null>(cursor);

  const [isLoading, setIsLoading] = useState(false);

  const handleOnClickLoadButton = async () => {
    if (!lastCursor || totalPageSize <= postList.length) return;

    setIsLoading(true);

    const nextPostList = await getPostsOnScroll(lastCursor);
    if (nextPostList.length > 0) {
      const newCursor = nextPostList[nextPostList.length - 1].id;
      setPostList((prev: any) => [...prev, ...nextPostList]);
      setLastCursor(newCursor);
    } else {
      setLastCursor(null);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setPostList(initialPosts);
  }, [initialPosts]);

  return { postList, isLoading, handleOnClickLoadButton };
};
