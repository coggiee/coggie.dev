import { useState } from "react";
import { getPostsByTag, getTotalPosts } from "../_libs/hygraph";
import { usePostStore } from "../_store/usePostStore";

export const useSelectTag = () => {
  const { setPost } = usePostStore();
  const [selectedTag, setSelectedTag] = useState<string | null>("All");

  const handleOnSelect = async (tag: string) => {
    setSelectedTag(tag);

    const { edges, aggregate } =
      tag === "All" ? await getTotalPosts() : await getPostsByTag([tag]);
    const posts = edges.map((post: any) => post.node);
    const totalPageSize = aggregate.count;
    const lastCursor = posts[posts.length - 1]?.id ?? null;

    setPost({
      postList: posts,
      cursor: lastCursor,
      pageSize: totalPageSize,
    });
  };

  return { selectedTag, handleOnSelect };
};
