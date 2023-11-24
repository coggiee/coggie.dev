'use client';

import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEventHandler,
  useRef,
  useState,
} from 'react';
import TuiEditor from '@/app/(write)/_components/TuiEditor';
import Title from '@/app/(write)/_components/Title';
import { Octokit } from 'octokit';
import { Alert } from '../../_components/ui/Alert';
import { useRouter } from 'next/navigation';
import { set } from 'date-fns';

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
  const [tags, setTags] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
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

    setIsLoading(false);
  };

  const addTags = () => {
    if (tags.trim() !== '') {
      const newTags = tags.trim().split(/\s+/);
      setTagList([...tagList, tags.trim()]);
      setTags('');
    }
  };

  const handleOnTypeTitle = (value: string) => {
    setTitle((prev) => value);
  };

  const handleOnTypeTags = (e: ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTags();
    }
  };

  const handleOnClickTag = (tagToRemove: string) => {
    setTagList(tagList.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className='flex flex-col flex-grow flex-3'>
      <Title title={title} handleOnTypeTitle={handleOnTypeTitle} />
      <div className='mb-4'>
        <input
          type='text'
          id='tags'
          name='tags'
          placeholder='태그를 입력하세요'
          value={tags}
          onChange={handleOnTypeTags}
          onKeyPress={handleKeyPress}
          className='mt-1 p-2 w-full rounded-md outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent'
        />
      </div>
      <div className='mb-4'>
        <ul>
          {tagList.map((tag, index) => (
            <li
              key={index}
              className='inline-block bg-gray-200 text-gray-800 px-2 py-1 mr-2 rounded-md'
              onClick={() => handleOnClickTag(tag)}
            >
              # {tag}
            </li>
          ))}
        </ul>
      </div>
      <TuiEditor
        content={''}
        editorRef={editorRef}
        handleOnSave={handleOnSave}
      />
      {isAlertVisible && <Alert title='제목과 내용을 입력해주세요.' />}
    </div>
  );
}
