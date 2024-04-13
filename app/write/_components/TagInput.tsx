import { Input, Textarea } from "@nextui-org/react";
import React from "react";

interface TagInputProps {
  tags: string;
  handleOnTypeTags: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function TagInput({
  tags,
  handleOnTypeTags,
  handleKeyPress,
}: TagInputProps) {
  return (
    <div className="h-auto mb-4">
      <Textarea
        isRequired
        variant="flat"
        label="태그"
        labelPlacement="outside"
        placeholder="태그를 추가하세요."
        value={tags}
        onChange={handleOnTypeTags}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
