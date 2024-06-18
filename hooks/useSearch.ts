import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useTitleStore } from "@/store/useTitleStore";
import { useTagStore } from "@/store/useTagStore";

export const useSearch = () => {
  const { setTag } = useTagStore();
  const { setTitle } = useTitleStore();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleClearQuery = () => {
    setTitle(null);
  };

  const handleOnSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleOnPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery) {
      const trimmedQuery = searchQuery.trim();
      setTag('All');
      setTitle(trimmedQuery);
    }
  };

  return {
    searchQuery,
    handleClearQuery,
    handleOnSearch,
    handleOnPressEnter,
  };
};
