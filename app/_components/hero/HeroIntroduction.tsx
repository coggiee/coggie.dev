import React from 'react';


export default function HeroIntroduction() {
  return (
    <>
      <h3 className='text-base font-thin font-mono leading-tight'>
        <p>프론트엔드 개발자 문휘식입니다</p>
      </h3>
      <div className='flex flex-col gap-1 font-mono text-xs'>
        <p>
          <span>인터렉티브한 웹</span>
          <span>에 관심이 있습니다. </span>
        </p>
        <p>
          최근에는 오버엔지니어링을 하지 않고, 어떻게{' '}
          <span>재사용성 높은 컴포넌트</span>{' '}
          <span>를 만들 수 있을지 고민하고 있습니다.</span>
        </p>
        <p>
          <span>코드를 깔끔하게 작성하는 것을 좋아합니다.</span>
        </p>
      </div>
    </>
  );
}
