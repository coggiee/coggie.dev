import { EditTitleProps } from '@/types/type';
import React from 'react';

export default function Title({ title, handleOnTypeTitle }: EditTitleProps) {
  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleOnTypeTitle(event.target.value);
  };

  return (
    <div className='h-auto mb-3 flex-grow border-l-4 border-brand-color'>
      <textarea
        className='w-full p-2 resize-none outline-none text-3xl font-bold overflow-visible min-h-[3.5em]'
        placeholder='제목을 입력하세요'
        value={title}
        onChange={handleTitleChange}
      ></textarea>
    </div>
  );
}
