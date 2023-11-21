import { Octokit } from 'octokit';
import React, { useState } from 'react';

type Props = {
  title: string;
  handleOnTypeTitle: (value: string) => void;
};

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

export default function Title({ title, handleOnTypeTitle }: Props) {
  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleOnTypeTitle(event.target.value);
  };

  return (
    <div className='h-auto mb-3 flex-grow'>
      <textarea
        className='w-full resize-none outline-none text-3xl font-bold overflow-visible min-h-[3.5em]'
        // style={{ height: calculateTextAreaHeight() }}
        placeholder='제목을 입력하세요'
        value={title}
        onChange={handleTitleChange}
      ></textarea>
    </div>
  );
}
