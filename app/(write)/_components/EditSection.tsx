'use client';

import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import TuiEditor from '@/app/(write)/_components/TuiEditor';
import Title from '@/app/(write)/_components/Title';
import { Octokit } from 'octokit';
import { Alert } from '../../_components/ui/Alert';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { createPost } from '@/app/_libs/hygraph';
import Loading from '@/app/loading';
import IconBack from '@/app/_icons/IconBack';

type Props = {};

// 글 작성 완료 시 date 처리 추가하는 로직
// 설명 어떻게 추가하여 전송할지
// tag 추가하는 로직
// 인기 포스트 설정하는 로직
export default function EditSection({}: Props) {
  const editorRef = useRef<any>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const [isPostCreated, setIsPostCreated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isHotPost, setIsHotPost] = useState<boolean>(false);
  const [tags, setTags] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const router = useRouter();

  const handleOnSave = async () => {
    setIsLoading(true);
    const content: string = editorRef.current.getInstance().getMarkdown();

    // 제목과 내용이 없는 예외처리
    if (
      content.trim().length === 0 ||
      title.trim().length === 0 ||
      tagList.length === 0
    ) {
      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 3000);
      return;
    }

    if (title.endsWith('.')) {
      setTitle(title.slice(0, title.length - 1));
    }

    const date = dayjs().format();

    const response = await createPost(
      title,
      description,
      content,
      tagList,
      isHotPost,
      new Date(date)
    );

    const data = response.createPost;

    if (data) {
      setIsLoading(false);
      setIsPostCreated(true);
      router.push('/');
    }
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
  const handleOnTypeDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
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
    <div className='flex flex-col flex-grow flex-3 relative w-full'>
      <Title title={title} handleOnTypeTitle={handleOnTypeTitle} />
      <div>
        <textarea
          className='w-full resize-none outline-none text-xl font-bold overflow-visible min-h-[3.5em]'
          placeholder='설명을 입력하세요'
          value={description}
          onChange={handleOnTypeDesc}
        ></textarea>
      </div>
      <div className='mb-4'>
        <input
          type='text'
          id='tags'
          name='tags'
          placeholder='태그를 입력하세요'
          value={tags}
          onChange={handleOnTypeTags}
          onKeyPress={handleKeyPress}
          className='mt-1 p-2 pl-0 w-full rounded-md outline-none'
        />
      </div>
      <div className='mb-4'>
        <ul className='flex flex-wrap justify-start items-center'>
          {tagList.map((tag, index) => (
            <li
              key={index}
              className='inline-block text-gray-800 px-2 py-1 mr-2 rounded-lg cursor-pointer mb-2 border border-[#f7ab0a]'
              onClick={() => handleOnClickTag(tag)}
            >
              # {tag}
            </li>
          ))}
        </ul>
      </div>
      <TuiEditor content={''} editorRef={editorRef} />
      <div className='w-full flex gap-3 justify-end fixed bottom-0 px-10 py-3'>
        <button
          className='p-3 flex gap-2 items-center cursor-pointer'
          onClick={() => router.back()}
        >
          <IconBack />
          <span>나가기</span>
        </button>
        <button
          className='p-3 rounded-xl bg-[#f7ab0a] drop-shadow-md shadow-md font-mono cursor-pointer'
          onClick={handleOnSave}
        >
          출간하기
        </button>
      </div>
      {isAlertVisible && <Alert title='제목과 내용, 태그를 확인해주세요.' />}
      {isPostCreated && <Alert title='글이 작성되었습니다.' />}
      {isLoading && <Loading />}
    </div>
  );
}
