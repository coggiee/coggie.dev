import { Textarea } from "@/components/ui/textarea";
import { EditTitleProps } from "@/types/type";
import React from "react";

const TitleInput = React.forwardRef(
  ({ title, handleOnTypeTitle, titleRef }: EditTitleProps, ref) => {
    return (
      <Textarea
        ref={titleRef}
        placeholder="제목을 입력하세요"
        id="title"
        className="font-bold text-5xl overflow-hidden block resize-none min-h-[60px]"
        value={title}
        onChange={handleOnTypeTitle}
        rows={1}
      />
    );
  },
);

TitleInput.displayName = "TitleInput";

export default TitleInput;
