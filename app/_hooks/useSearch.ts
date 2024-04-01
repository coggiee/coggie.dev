import { ChangeEvent, KeyboardEvent, useState } from "react";
import { getTotalPosts, searchPostByTitle } from "../_libs/hygraph";
import { usePostStore } from "../_store/usePostStore";

interface useSearchProps {
  query: string;
}

export const useSearch = () => {
  const { setPost } = usePostStore();
  const [searchQuery, setSearchQuery] = useState<string>("");

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
      const { edges, aggregate } =
        trimmedQuery.length === 0
          ? await getTotalPosts()
          : await searchPostByTitle(trimmedQuery);
      const posts = edges.map((post: any) => post.node);
      const totalPageSize = aggregate.count;
      const lastCursor = posts[posts.length - 1]?.id ?? null;

      setPost({
        postList: posts,
        cursor: lastCursor,
        pageSize: totalPageSize,
      });
    }
  };

  return {
    searchQuery,
    handleClearQuery,
    handleOnSearch,
    handleOnPressEnter,
  };
};
