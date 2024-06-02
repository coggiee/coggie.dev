import { Input } from "@/components/ui/input";
import { useSearch } from "@/hooks/useSearch";
import { Search } from "lucide-react";
import React from "react";

function SearchBar() {
  const { searchQuery, handleOnSearch, handleOnPressEnter } = useSearch();

  return (
    <div className="relative w-full h-full space-y-2">
      <Search className="absolute left-3 top-1/2 mt-1 transform -translate-y-1/2 text-gray-500 z-10 w-4 h-4" />
      <Input
        id="search"
        aria-label="Search"
        onChange={handleOnSearch}
        onKeyDown={handleOnPressEnter}
        autoComplete="off"
        placeholder="Search with Keyword..."
        className="pl-10"
        value={searchQuery}
      />
    </div>
  );
}

export default SearchBar;
