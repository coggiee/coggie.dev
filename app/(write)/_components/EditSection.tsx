'use client';

import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import TuiEditor from '@/app/(write)/_components/TuiEditor';
import EditTitle from '@/app/(write)/_components/EditTitle';
import { Alert } from '../../_components/ui/Alert';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { createPost } from '@/app/_libs/hygraph';
import Loading from '@/app/loading';
import IconBack from '@/app/_icons/IconBack';
import EditDrawer from './EditDrawer';
import Link from 'next/link';

type Props = {};

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
    tagList.forEach((tag) => tag.toUpperCase());

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
    console.log(description);
  };

  const handleOnToggleHotPost = () => {
    setIsHotPost((prev) => !prev);
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
      <EditTitle title={title} handleOnTypeTitle={handleOnTypeTitle} />
      <div className='mb-4'>
        <input
          type='text'
          id='tags'
          name='tags'
          placeholder='태그를 입력하세요'
          value={tags}
          onChange={handleOnTypeTags}
          onKeyPress={handleKeyPress}
          className='mt-1 p-2 outline-none border-l-4 border-[#f7ab0a]'
        />
      </div>
      <div className='mb-4'>
        <ul className='flex flex-wrap justify-start items-center'>
          {tagList.map((tag, index) => (
            <li
              key={index}
              className='inline-block text-gray-800 px-2 py-1 mr-2 rounded-xl cursor-pointer mb-2 border border-[#f7ab0a]'
              onClick={() => handleOnClickTag(tag)}
            >
              # {tag}
            </li>
          ))}
        </ul>
      </div>
      <TuiEditor content={''} editorRef={editorRef} />
      <div className='w-full flex gap-3 fixed bottom-0 px-10 py-3 justify-end'>
        <button className='btn glass ghost p-3'>
          <Link href='/' className='flex gap-2 items-center'>
            <IconBack />
            <span>나가기</span>
          </Link>
        </button>
        <EditDrawer
          handleOnTypeDesc={handleOnTypeDesc}
          handleOnToggleHotPost={handleOnToggleHotPost}
          handleOnClickSaveBtn={handleOnSave}
        />
      </div>
      {isAlertVisible && <Alert title='제목과 내용, 태그를 확인해주세요.' />}
      {isPostCreated && <Alert title='글이 작성되었습니다.' />}
      {isLoading && <Loading />}
    </div>
  );
}
