import { useEffect, useRef, useState } from "react";
import { getPostsOnScroll } from "../_libs/hygraph";

interface useInfiniteScrollProps {
  initialPosts: any;
  cursor: string;
  totalPageSize: number;
}

export const useInfiniteScroll = ({
  initialPosts,
  cursor,
  totalPageSize,
}: useInfiniteScrollProps) => {
  const [postList, setPostList] = useState(initialPosts);
  const [lastCursor, setLastCursor] = useState<string>(cursor);
  const [isLoading, setIsLoading] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScrollEnded = async () => {
      setIsLoading(true);

      const nextPostList = await getPostsOnScroll(lastCursor);
      if (nextPostList.length > 0) {
        setPostList((prev: any) => [...prev, nextPostList]);
        setLastCursor(
          (prevCursor) => nextPostList[nextPostList.length - 1].id ?? null,
        );
      }
      setIsLoading(false);
    };

    const onScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        targetRef.current as HTMLDivElement;

      if (
        targetRef.current &&
        lastCursor &&
        !isLoading &&
        postList.length < totalPageSize &&
        scrollHeight - scrollTop <= clientHeight + 50
      ) {
        // 마지막 아이템의 ID를 기반으로 추가 데이터 로드
        onScrollEnded();
      }
    };

    targetRef.current?.addEventListener("scroll", onScroll);
    return () => {
      if (targetRef.current) {
        targetRef.current?.removeEventListener("scroll", onScroll);
      }
    };
  }, [lastCursor, isLoading, totalPageSize, postList, postList.length]);

  return { targetRef, postList };
};
