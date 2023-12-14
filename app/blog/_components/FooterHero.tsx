import { Avatar } from '@/app/_components/common/Avatar';
import { SocialGroup } from '@/app/_components/common/SocialGroup';
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
        <Avatar src='/mimoji.png' width={28} height={28} />
        <aside className='flex flex-col'>
          <div className='font-medium font-indieFlower text-xl'>
            Coggie(Moon Hwisik)
          </div>
          <div className='font-thin font-mono mb-2'>프론트엔드 개발자</div>
          <SocialGroup
            fontSize='text-sm'
            display='flex'
            justify='between'
            align='center'
            direction='row'
            gap={2}
            isGroup={true}
          />
        </aside>
      </div>
    </section>
  );
}
