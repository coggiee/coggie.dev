'use client';

import React, { useRef, useState } from 'react';
import TuiEditor from './TuiEditor';
import Title from './Title';
import { Octokit } from 'octokit';
import { Alert } from '../ui/Alert';
import { createContentFromGithub } from '@/utils/githubHandler';

type Props = {};

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

export default function EditSection({}: Props) {
  const editorRef = useRef<any>(null);
  const [title, setTitle] = useState<string>('');
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

  const handleOnSave = async () => {
    const content: string = editorRef.current.getInstance().getMarkdown();

    // 제목과 내용이 없는 예외처리
    if (content.trim().length === 0 || title.trim().length === 0) {
      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 3000);
      return;
    }
    if (title.endsWith('.')) {
      setTitle(title.slice(0, title.length - 1));
    }

    const data = await createContentFromGithub(title, content);

    console.log(data);
  };

  const handleOnTypeTitle = (value: string) => {
    setTitle((prev) => value);
  };

  return (
    <div className='flex flex-col flex-grow'>
      <Title title={title} handleOnTypeTitle={handleOnTypeTitle} />
      <TuiEditor
        content={'Edit'}
        editorRef={editorRef}
        handleOnSave={handleOnSave}
      />
      {isAlertVisible && <Alert title='제목과 내용을 입력해주세요.' />}
    </div>
  );
}
