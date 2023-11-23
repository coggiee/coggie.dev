'use client';

import React, { useRef, useState } from 'react';
import TuiEditor from '@/app/(write)/_components/TuiEditor';
import Title from '@/app/(write)/_components/Title';
import { Octokit } from 'octokit';
import { Alert } from '../../_components/ui/Alert';
import { useRouter } from 'next/navigation';

type Props = {};

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

// 글 작성 완료 시 date 처리 추가하는 로직
// 설명 어떻게 추가하여 전송할지
// tag 추가하는 로직
// 인기 포스트 설정하는 로직
export default function EditSection({}: Props) {
  const editorRef = useRef<any>(null);
  const [title, setTitle] = useState<string>('');
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleOnSave = async () => {
    setIsLoading(true);
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

    // const data = await createContentFromGithub(title, content);

    // console.log(data);
  };

  const handleOnTypeTitle = (value: string) => {
    setTitle((prev) => value);
  };

  return (
    <div className='flex flex-col flex-grow flex-3'>
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
