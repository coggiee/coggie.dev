import IconGithub from '@/app/_icons/IconGithub';
import IconGmail from '@/app/_icons/IconGmail';
import IconPrevBlog from '@/app/_icons/IconPrevBlog';
import IconVelog from '@/app/_icons/IconVelog';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function FooterHero({}: Props) {
  return (
    <section className='w-full flex justify-center items-center min-h-fit mb-10'>
      <div className='flex items-center gap-10'>
        <aside className='relative w-28 h-28'>
          <Image
            src={'/mimoji.jpg'}
            layout='fill'
            objectFit='cover'
            alt='프로필 이미지'
            className='absolute rounded-full m-0'
          />
        </aside>
        <aside className='flex flex-col'>
          <div className='font-medium font-indieFlower text-xl'>Coggie(Moon Hwisik)</div>
          <div className='font-thin font-mono mb-2'>프론트엔드 개발자</div>
          <div className='flex gap-2 items-center'>
            <Link href='https://github.com/lunarmoon7' target='_blank'>
              <IconGithub />
            </Link>
            <Link href='mailto:zentechie7@gmail.com' target='_blank'>
              <IconGmail />
            </Link>
            <Link href='https://velog.io/@49crehbgr' target='_blank'>
              <IconVelog />
            </Link>
          </div>
        </aside>
      </div>

      {/* <div>
        <Image
      </div> */}
    </section>
  );
}
