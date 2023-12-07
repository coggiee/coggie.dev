'use client';

import Image from 'next/image';
import { InfoSection } from '../info/InfoSection';
import { Social } from '../ui/Social';

export const Hero = () => {
  return (
    <section className='p-5 dark:text-white'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-10 lg:flex-row'>
          <aside className='flex justify-center'>
            <div className='h-52 w-52 relative lg:w-60 lg:h-60 rounded-lg overflow-hidden'>
              <Image
                src={'/profile2.jpg'}
                layout='fill'
                objectFit='contain'
                alt='프로필 이미지'
                className='absolute'
              />
            </div>
          </aside>
          <main className='flex flex-col gap-7'>
            <div className='flex flex-col gap-3'>
              <h1 className='text-[23px] font-thin font-mono leading-tight'>
                <p>안녕하세요</p>
                <p>프론트엔드 개발자 문휘식입니다</p>
              </h1>
              <div className='flex flex-col gap-1 font-mono'>
                <p>
                  {/* className='underline underline-offset-4 decoration-[#f7ab0a]/50 decoration-wavy' */}
                  <span>인터렉티브한 웹</span>
                  <span>에 관심이 있습니다. </span>
                </p>
                <p>
                  최근에는 오버엔지니어링을 하지 않고, 어떻게{' '}
                  <span>재사용성 높은 컴포넌트</span>{' '}
                  <span>를 만들 수 있을지 고민하고 있습니다.</span>
                </p>
                <p>
                  <span>기초</span>
                  <span>를 탄탄하게 다지려고 노력하고 있습니다.</span>
                </p>
              </div>
            </div>
            <Social fontSize='text-xl' />
          </main>
        </div>
        {/* <InfoSection /> */}
      </div>
    </section>
  );
};
