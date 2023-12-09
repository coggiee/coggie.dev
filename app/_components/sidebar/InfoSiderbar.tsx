import React from 'react';
import { Hero } from '../hero/Hero';

type Props = {};

export default function InfoSiderbar({}: Props) {
  return (
    <>
      <div className='sticky top-[120px] left-0 w-full flex flex-col gap-3 flex-shrink-0'>
        <Hero src={'/profile2.jpg'} />
      </div>
    </>
  );
}
