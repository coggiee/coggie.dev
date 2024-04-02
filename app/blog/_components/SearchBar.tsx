import IconSearch from "@/app/_icons/IconSearch";
import { Input } from "@nextui-org/react";
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
    <div className="w-full h-full rounded-2xl flex justify-center items-center bg-gradient-to-tr from-[#cba6f3] to-[#66abf0] text-white shadow-lg font-amaranth">
      <Input
        label="Search"
        isClearable
        radius="lg"
        value={query}
        onChange={handleOnSearch}
        onClear={handleClearQuery}
        onKeyDown={handleOnPressEnter}
        autoComplete="off"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <IconSearch className="text-black/50 mb-0.5 dark:text-white/90 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  );
}

export default SearchBar;
