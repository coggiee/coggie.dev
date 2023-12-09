import { bio } from '@/app/_data/bio';
import React from 'react';

type Props = {};

export default function Bio({}: Props) {
  return (
    <div className='border-b border-b-item-border-light pb-5 dark:border-b-item-border-dark'>
      <h1 className='font-bold mb-3 text-xl'>Bio</h1>
      <ul className='font-thin text-sm'>
        {bio.map((item) => (
          <li className='flex gap-2' key={item.title}>
            <span>{item.duration}</span>
            <span className='font-bold'>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
