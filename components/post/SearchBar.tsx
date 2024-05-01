import IconSearch from "@/app/_icons/IconSearch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleX, CircleXIcon, Search } from "lucide-react";
import React, { ChangeEvent, KeyboardEvent } from "react";

interface SearchBarProps {
  handleOnSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnPressEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleClearQuery: () => void;
  query: string;
}

function SearchBar({
  handleOnSearch,
  handleOnPressEnter,
  handleClearQuery,
  query,
}: SearchBarProps) {
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
        value={query}
      />
    </div>
  );
}

export default SearchBar;
