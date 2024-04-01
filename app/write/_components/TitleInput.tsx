import { EditTitleProps } from "@/types/type";
import { Textarea } from "@nextui-org/react";
import React from "react";

export default function TitleInput({
  title,
  handleOnTypeTitle,
}: EditTitleProps) {
  return (
    <div className="h-auto mb-3 flex-grow">
      <Textarea
        isRequired
        variant="underlined"
        label="제목"
        labelPlacement="outside"
        placeholder="제목을 입력하세요."
        className="font-bold"
        value={title}
        onChange={handleOnTypeTitle}
      />
    </div>
  );
}
