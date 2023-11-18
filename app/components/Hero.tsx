'use client';

import Image from 'next/image';
import { useState } from 'react';
import { InfoSection } from './info/InfoSection';
import IconChevronDown from '../Icons/IconChevronDown';
import IconChevronUp from '../Icons/IconChevronUp';
import { Social } from './ui/Social';

export const Hero = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOnClickUnfoldButton = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <section className='p-5 rounded-xl shadow-xl'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-10 md:flex-row'>
          <aside className='h-64 w-full md:h-52 relative lg:h-96 md:border-r-[1px]'>
            <Image
              src={'/profile.jpg'}
              layout='fill'
              objectFit='contain'
              alt='프로필 이미지'
              className='absolute'
            />
          </aside>
          <main className='flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
              <h1 className='text-xl font-bold'>
                <p>안녕하세요,</p>
                <p>프론트엔드 개발자 문휘식입니다.</p>
              </h1>
              <div className='flex flex-col gap-1'>
                <p>
                  <span className='underline underline-offset-4 decoration-[#f7ab0a]/50 decoration-wavy'>
                    인터렉티브한 웹
                  </span>
                  <span>에 관심이 있습니다. </span>
                </p>
                <p>
                  최근에는 오버엔지니어링을 하지 않고, 어떻게{' '}
                  <span className='underline underline-offset-4 decoration-[#f7ab0a]/50 decoration-wavy'>
                    재사용성 높은 컴포넌트
                  </span>{' '}
                  <span>를 만들 수 있을지 고민하고 있습니다.</span>
                </p>
                <p>
                  <span className='underline underline-offset-4 decoration-[#f7ab0a]/50 decoration-wavy'>
                    기초
                  </span>
                  <span>를 탄탄하게 다지려고 노력하고 있습니다.</span>
                </p>
              </div>
            </div>
            <Social fontSize='text-xl'/>
          </main>
        </div>
        <InfoSection />
      </div>
    </section>
  );
};
