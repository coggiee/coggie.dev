// import { Input, Textarea } from "@nextui-org/react";
import { Input } from "@/components/ui/input";
import React from "react";

interface TagInputProps {
  tags: string;
  handleOnTypeTags: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function TagInput({
  tags,
  handleOnTypeTags,
  handleKeyPress,
}: TagInputProps) {
  return (
    <Input
      placeholder="태그를 입력하세요"
      value={tags}
      onChange={handleOnTypeTags}
      onKeyDown={handleKeyPress}
      className="border-none outline-none focus-visible:ring-0 p-0 text-lg mb-5"
    />
  );
}
