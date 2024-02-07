import SocialGroup from '@/app/_components/common/SocialGroup';
import { Avatar } from '@nextui-org/react';
import React from 'react';

type Props = {};

export default function FooterHero({}: Props) {
  return (
    <section className='w-full flex justify-center items-center min-h-fit mb-10'>
      <div className='flex items-center gap-10'>
        <Avatar
          src='/mimoji.png'
          color='success'
          name='coggie'
          isBordered
          className='w-24 h-24 text-large bg-transparent'
        />
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
          />
        </aside>
      </div>
    </section>
  );
}
