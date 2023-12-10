import React from 'react';
import MorePostLink from './MorePostLink';

type Props = {};

export default function Introduction({}: Props) {
  return (
    <>
      <div className='flex justify-center border-b border-b-item-border-dark dark:border-b-item-border-light'>
        <aside className='text-9xl dark:text-white px-8 pr-5'>;</aside>
        <header className='w-full rounded-lg p-5 pl-4 mb-5 leading-loose dark:text-white'>
          <div className='flex justify-between items-center'>
            <h1 className='text-xl font-semibold mb-3'>Dev Blog</h1>
            <MorePostLink />
          </div>

          <p className='dark:text-[rgb(141, 140, 142)]'>
            <span>개발 관련 포스팅이 올라옵니다.</span>
            <br />
            <span>알고리즘 문제 풀이 제외, </span>
            <span>
              <strong>프로젝트 개발기</strong>와 <strong>회고</strong> 그리고{' '}
            </span>
            <span>
              <strong>트러블 슈팅</strong>
              등에 대한 내용이 포함됩니다.
              <br />
              포스팅의 내용은 <strong>주관적</strong>이며 부정확한 정보가
              포함되어 있을 수 있습니다.
            </span>
          </p>
        </header>
      </div>
    </>
  );
}
