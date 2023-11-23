'use client';

import React, { useRef, useState } from 'react';
import TuiEditor from '@/app/write/_components/TuiEditor';
import Title from '@/app/write/_components/Title';
import { Octokit } from 'octokit';
import { Alert } from '../../_components/ui/Alert';
import { useRouter } from 'next/navigation';

type Props = {};

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

export default function EditSection({}: Props) {
  const editorRef = useRef<any>(null);
  const [title, setTitle] = useState<string>('');
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleOnSave = async () => {
    setIsLoading(true);
    const content: string = editorRef.current.getInstance().getMarkdown();

    const response = await fetch('/api/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
      });

      const { message } = await response.json();

      if (message === true) {
        setIsLoading(false);
        router.back();
      }
    }

    // 제목과 내용이 없는 예외처리
    // if (content.trim().length === 0 || title.trim().length === 0) {
    //   setIsAlertVisible(true);
    //   setTimeout(() => {
    //     setIsAlertVisible(false);
    //   }, 3000);
    //   return;
    // }
    // if (title.endsWith('.')) {
    //   setTitle(title.slice(0, title.length - 1));
    // }

    // const data = await createContentFromGithub(title, content);

    // console.log(data);
  };

  const handleOnTypeTitle = (value: string) => {
    setTitle((prev) => value);
  };

  return (
    <div className='flex flex-col flex-grow'>
      <Title title={title} handleOnTypeTitle={handleOnTypeTitle} />
      <TuiEditor
        content={''}
        editorRef={editorRef}
        handleOnSave={handleOnSave}
      />
      {isAlertVisible && <Alert title='제목과 내용을 입력해주세요.' />}
    </div>
  );
}
