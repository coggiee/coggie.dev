import { ChangeEvent, KeyboardEvent, useState } from "react";
import { searchPostByTitle } from "../_libs/hygraph";

interface useSearchProps {
  query: string;
}

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [postList, setPostList] = useState(null);
  const [cursor, setCursor] = useState(null);
  const [pageSize, setPageSize] = useState(null);

  const handleClearQuery = () => {
    setSearchQuery("");
  };

  const handleOnSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleOnPressEnter = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmedQuery = searchQuery.trim();
      
      if (trimmedQuery.length === 0) {
        setPostList(null);
        return;
      }

      const { edges, aggregate } = await searchPostByTitle(trimmedQuery);
      const posts = edges.map((post: any) => post.node);
      const totalPageSize = aggregate.count;
      const lastCursor = posts[posts.length - 1]?.id ?? null;

      setPostList(posts);
      setCursor(lastCursor);
      setPageSize(totalPageSize);
    }
  };

  return {
    postList,
    searchQuery,
    cursor,
    pageSize,
    handleClearQuery,
    handleOnSearch,
    handleOnPressEnter,
  };
};
