import { Input } from "@nextui-org/react";
import React from "react";

type Props = {
  tags: string;
  handleOnTypeTags: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function TagInput({
  tags,
  handleOnTypeTags,
  handleKeyPress,
}: Props) {
  return (
    <div className="mb-4">
      <Input
        id="tags"
        name="tags"
        type="text"
        placeholder="태그를 추가하세요."
        size="lg"
        variant="underlined"
        label="태그"
        className="font-bold"
        isRequired
        value={tags}
        onChange={handleOnTypeTags}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
